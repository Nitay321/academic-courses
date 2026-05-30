import { createClient } from '@supabase/supabase-js';

// Retrieve Supabase credentials from Vite environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Export an active indicator so the UI knows if it is connected to a real database
export const isRealDatabaseConnected = !!(supabaseUrl && supabaseAnonKey);

// Define progress data shape
export interface UserStudyProgress {
  seenFormulas: Record<string, 'green' | 'yellow' | 'red' | null | boolean>;
  seenModules: Record<string, boolean>;
  quizScores: Record<string, number>;
  theme?: 'dark' | 'light';
  language?: 'en' | 'he';
}

/**
 * A robust Mock Client that mimics Supabase auth and database operations.
 * Allows the application to run immediately in high-fidelity mock mode without any setup.
 */
class MockSupabaseClient {
  private listeners: Array<(event: string, session: any) => void> = [];
  private currentSession: any = null;

  constructor() {
    // Check if there is a saved mock session in localStorage to persist returning users!
    const savedSession = localStorage.getItem('nla_mock_session');
    if (savedSession) {
      try {
        this.currentSession = JSON.parse(savedSession);
      } catch (e) {
        console.error('Failed to parse mock session', e);
      }
    }
  }

  // Auth Operations
  auth = {
    getSession: async () => {
      return { data: { session: this.currentSession }, error: null };
    },
    
    onAuthStateChange: (callback: (event: string, session: any) => void) => {
      this.listeners.push(callback);
      // Immediately invoke with current state
      setTimeout(() => {
        callback(this.currentSession ? 'SIGNED_IN' : 'SIGNED_OUT', this.currentSession);
      }, 50);
      
      return {
        data: {
          subscription: {
            unsubscribe: () => {
              this.listeners = this.listeners.filter(l => l !== callback);
            }
          }
        }
      };
    },

    signInWithOAuth: async (options: { provider: string; options?: { redirectTo?: string } }) => {
      // Simulate OAuth Login - redirect or show custom flow. We simulate in context.
      console.log('Simulating Social Sign-In with provider:', options.provider);
      return { data: { url: '#' }, error: null };
    },

    signOut: async () => {
      this.currentSession = null;
      localStorage.removeItem('nla_mock_session');
      this.notify('SIGNED_OUT', null);
      return { error: null };
    },

    // A helper method for our custom mock login dialog
    signInMockUser: (user: { name: string; email: string; avatarUrl?: string }) => {
      const normalizedEmail = user.email.trim().toLowerCase();
      // Generate a unique, database-safe ID based on the email address
      const base64Email = btoa(normalizedEmail).replace(/[^a-zA-Z0-9]/g, '');
      const userId = `mock-user-${base64Email}`;
      const googleId = `google-id-${base64Email}`;

      const mockSession = {
        user: {
          id: userId,
          email: normalizedEmail,
          user_metadata: {
            full_name: user.name,
            avatar_url: user.avatarUrl || `https://api.dicebear.com/7.x/adventurer/svg?seed=${encodeURIComponent(user.name)}`,
            sub: googleId
          }
        },
        expires_at: Math.floor(Date.now() / 1000) + 3600 * 24
      };
      
      this.currentSession = mockSession;
      localStorage.setItem('nla_mock_session', JSON.stringify(mockSession));
      this.notify('SIGNED_IN', mockSession);
      return mockSession;
    }
  };

  // Notify Auth Listeners
  private notify(event: string, session: any) {
    this.listeners.forEach(callback => {
      try {
        callback(event, session);
      } catch (err) {
        console.error('Error in auth listener:', err);
      }
    });
  }

  // Database Mock Operations
  from(table: string) {
    console.log(`[Mock Database] Querying table: ${table}`);
    return {
      select: () => ({
        eq: (_field: string, value: any) => ({
          single: async () => {
            const savedData = localStorage.getItem(`nla_mock_db_${table}_${value}`);
            if (savedData) {
              try {
                return { data: JSON.parse(savedData), error: null };
              } catch (e) {
                return { data: null, error: e };
              }
            }
            return { data: null, error: { message: 'No records found' } };
          }
        })
      }),
      upsert: async (data: any) => {
        const userId = data.user_id;
        if (userId) {
          localStorage.setItem(`nla_mock_db_${table}_${userId}`, JSON.stringify(data));
          console.log(`[Mock Database] Saved progress for user: ${userId}`);
        }
        return { data, error: null };
      }
    };
  }
}

// Export either the real Supabase client or our functional Mock Client
export const supabase = isRealDatabaseConnected
  ? createClient(supabaseUrl, supabaseAnonKey)
  : (new MockSupabaseClient() as any);
