import React, { useMemo } from 'react';
import katex from 'katex';
import { useAppContext } from '../App';

interface MathRendererProps {
  tex: string;
  block?: boolean;
  style?: React.CSSProperties;
}

const MathRenderer: React.FC<MathRendererProps> = ({ tex, block = false, style }) => {
  const html = useMemo(() => {
    try {
      return katex.renderToString(tex, {
        displayMode: block,
        throwOnError: false,
        trust: true,
      });
    } catch (error) {
      console.error('KaTeX error:', error);
      return `<span style="color: var(--error)">${tex}</span>`;
    }
  }, [tex, block]);

  return (
    <span
      className="katex-rendered-math"
      style={{
        display: block ? 'block' : 'inline-block',
        overflowX: block ? 'auto' : 'visible',
        maxWidth: '100%',
        padding: block ? '0.5rem 0' : '0',
        verticalAlign: block ? 'unset' : 'middle',
        direction: 'ltr',
        textAlign: block ? 'center' : 'inherit',
        ...style
      }}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

// A helper to parse bold (`**`), inline code (`` ` ``), and inline math (`$`) in inline text
const renderInlineText = (text: string): React.ReactNode[] => {
  if (!text) return [];

  // 1. Split first by bold `**`
  const boldParts = text.split(/\*\*(.*?)\*\*/g);
  const elements: React.ReactNode[] = [];

  boldParts.forEach((bPart, boldIdx) => {
    const isBold = boldIdx % 2 === 1;

    // 2. For each part, split by inline math `$`
    const mathParts = bPart.split(/\$(.*?)\$/g);
    const partElements: React.ReactNode[] = [];

    mathParts.forEach((mPart, mathIdx) => {
      if (mathIdx % 2 === 1) {
        // It's inline math
        partElements.push(
          <MathRenderer 
            key={`math-${boldIdx}-${mathIdx}`} 
            tex={mPart} 
            block={false} 
            style={isBold ? { fontWeight: 'bold' } : undefined} 
          />
        );
      } else {
        // It's regular text, split by inline code `` ` ``
        const codeParts = mPart.split(/`(.*?)`/g);
        codeParts.forEach((cPart, codeIdx) => {
          if (codeIdx % 2 === 1) {
            partElements.push(
              <code 
                key={`code-${boldIdx}-${mathIdx}-${codeIdx}`} 
                className="code-inline" 
                style={{
                  background: 'rgba(0, 0, 0, 0.2)',
                  padding: '0.15rem 0.35rem',
                  borderRadius: '4px',
                  fontSize: '0.9em',
                  fontFamily: 'monospace',
                  color: 'var(--accent-color)'
                }}
              >
                {cPart}
              </code>
            );
          } else {
            partElements.push(cPart);
          }
        });
      }
    });

    if (isBold) {
      elements.push(<strong key={`bold-${boldIdx}`}>{partElements}</strong>);
    } else {
      elements.push(...partElements);
    }
  });

  return elements;
};

export const RichText: React.FC<{ text: string }> = React.memo(({ text }) => {
  const { language } = useAppContext();
  const isHe = language === 'he';

  const blocks = useMemo(() => {
    if (!text) return [];

    // Split text into lines to process block-level elements
    const lines = text.split('\n');
    const parsedBlocks: React.ReactNode[] = [];

    let currentTableLines: string[] = [];
    let currentListLines: string[] = [];

    const flushTable = (key: number) => {
      if (currentTableLines.length === 0) return null;
      
      const rows = currentTableLines.map(line => 
        line.split(/(?<!\\)\|/).map(cell => cell.trim()).filter((_, idx, arr) => idx > 0 && idx < arr.length - 1)
      );

      currentTableLines = [];

      // Separate headers, separators, data
      const headers = rows[0] || [];
      const hasSeparator = rows[1] && rows[1].every(cell => cell.startsWith(':---') || cell.startsWith('---') || cell.endsWith('---'));
      const dataRows = hasSeparator ? rows.slice(2) : rows.slice(1);

      return (
        <div key={`table-${key}`} className="table-responsive" style={{
          width: '100%',
          overflowX: 'auto',
          margin: '1rem 0',
          borderRadius: 'var(--radius-sm)',
          border: '1px solid var(--surface-border)',
          background: 'rgba(0, 0, 0, 0.1)',
          boxShadow: 'var(--shadow-sm)'
        }}>
          <table className="custom-table" style={{
            width: '100%',
            minWidth: '600px', // Prevent table squishing on mobile viewports!
            borderCollapse: 'collapse',
            textAlign: isHe ? 'right' : 'left',
          }}>
            <thead>
              <tr>
                {headers.map((h, idx) => (
                  <th key={`th-${idx}`} style={{
                    background: 'rgba(255, 255, 255, 0.04)',
                    padding: '0.75rem 1rem',
                    fontWeight: 600,
                    fontSize: '0.9rem',
                    borderBottom: '2px solid var(--surface-border)',
                    color: 'var(--text-primary)',
                    textAlign: isHe ? 'right' : 'left'
                  }}>
                    {renderInlineText(h)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {dataRows.map((r, rIdx) => (
                <tr key={`tr-${rIdx}`}>
                  {r.map((c, cIdx) => (
                    <td key={`td-${cIdx}`} style={{
                      padding: '0.75rem 1rem',
                      fontSize: '0.92rem',
                      borderBottom: rIdx === dataRows.length - 1 ? 'none' : '1px solid var(--surface-border)',
                      color: 'var(--text-secondary)',
                      textAlign: isHe ? 'right' : 'left'
                    }}>
                      {renderInlineText(c)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    };

    const flushList = (key: number) => {
      if (currentListLines.length === 0) return null;
      const items = currentListLines;
      currentListLines = [];
      return (
        <ul key={`list-${key}`} className="custom-list" style={{
          margin: '0.8rem 0',
          paddingLeft: isHe ? '0' : '1.5rem',
          paddingRight: isHe ? '1.5rem' : '0',
          listStyleType: 'disc',
          color: 'var(--text-secondary)'
        }}>
          {items.map((item, idx) => (
            <li key={`li-${idx}`} style={{ marginBottom: '0.4rem' }}>
              {renderInlineText(item.replace(/^(\*\s*|-\s*)/, ''))}
            </li>
          ))}
        </ul>
      );
    };

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();

      // 1. Handle Table lines
      if (line.startsWith('|')) {
        // Flush any running lists
        if (currentListLines.length > 0) {
          parsedBlocks.push(flushList(i));
        }
        currentTableLines.push(line);
        continue;
      }

      // 2. Handle List lines
      if (line.startsWith('* ') || line.startsWith('- ')) {
        // Flush any running tables
        if (currentTableLines.length > 0) {
          parsedBlocks.push(flushTable(i));
        }
        currentListLines.push(line);
        continue;
      }

      // Flush any active collections if we encounter a standard block
      if (currentTableLines.length > 0) {
        parsedBlocks.push(flushTable(i));
      }
      if (currentListLines.length > 0) {
        parsedBlocks.push(flushList(i));
      }

      // 3. Handle Header blocks
      if (line.startsWith('### ')) {
        parsedBlocks.push(
          <h4 key={i} style={{ margin: '1.2rem 0 0.6rem 0', color: 'var(--primary-color)', fontSize: '1.1rem', fontWeight: 600 }}>
            {renderInlineText(line.replace('### ', ''))}
          </h4>
        );
      } else if (line.startsWith('## ')) {
        parsedBlocks.push(
          <h3 key={i} style={{ margin: '1.5rem 0 0.8rem 0', color: 'var(--primary-color)', fontSize: '1.25rem', fontWeight: 600 }}>
            {renderInlineText(line.replace('## ', ''))}
          </h3>
        );
      } else if (line.startsWith('# ')) {
        parsedBlocks.push(
          <h2 key={i} style={{ margin: '2rem 0 1rem 0', color: 'var(--primary-color)', fontSize: '1.5rem', fontWeight: 700 }}>
            {renderInlineText(line.replace('# ', ''))}
          </h2>
        );
      } else if (line.startsWith('$$') && line.endsWith('$$')) {
        // Block math on its own line
        parsedBlocks.push(
          <div key={i} style={{ margin: '1rem 0' }}>
            <MathRenderer tex={line.replace(/^\$\$/, '').replace(/\$\$$/, '')} block={true} />
          </div>
        );
      } else if (line !== '') {
        // Regular paragraph/line
        parsedBlocks.push(
          <p key={i} style={{ margin: '0.8rem 0', lineHeight: '1.6' }}>
            {renderInlineText(line)}
          </p>
        );
      }
    }

    // Flush any leftover tables/lists
    if (currentTableLines.length > 0) {
      parsedBlocks.push(flushTable(lines.length));
    }
    if (currentListLines.length > 0) {
      parsedBlocks.push(flushList(lines.length));
    }

    return parsedBlocks;
  }, [text, isHe]);

  return <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>{blocks}</div>;
});

export default React.memo(MathRenderer);
