import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';

interface CodeEditorProps {
  value: string;
  onChange: (value: string) => void;
  language?: string;
}

/**
 * コードエディタコンポーネント
 * シンタックスハイライトとテーマ機能を備えたエディタを提供します
 */
export default function CodeEditor({ 
  value, 
  onChange, 
  language = 'typescript' 
}: CodeEditorProps) {
  // 値の変更をハンドリング
  const handleChange = React.useCallback((value: string) => {
    onChange(value);
  }, [onChange]);

  // 言語設定
  const langExtension = React.useMemo(() => {
    return javascript({ jsx: true, typescript: language === 'typescript' });
  }, [language]);

  return (
    <div className="w-full">
      <CodeMirror
        value={value}
        height="400px"
        theme="dark"
        extensions={[langExtension]}
        onChange={handleChange}
        className="rounded-lg shadow-lg border border-gray-700"
        basicSetup={{
          lineNumbers: true,
          highlightActiveLineGutter: true,
          highlightSpecialChars: true,
          foldGutter: true,
          drawSelection: true,
          dropCursor: true,
          allowMultipleSelections: true,
          indentOnInput: true,
          bracketMatching: true,
          closeBrackets: true,
          autocompletion: true,
          rectangularSelection: true,
          crosshairCursor: true,
          highlightActiveLine: true,
          highlightSelectionMatches: true,
          closeBracketsKeymap: true,
          searchKeymap: true,
        }}
      />
    </div>
  );
}
