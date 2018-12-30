import * as React from 'react';
import FormControl from '../Models/FormControl';

//@ts-ignore
import Editor from 'react-simple-code-editor';

import * as Prism from 'prismjs';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-markup';

export default function FormCodeEditor(props: FormControl) {
  const { id, label, type, value, onChange } = props;

  return (
    <div className="form-control">
      <label htmlFor={id}>{label}</label>
      <Editor
        value={value}
        onValueChange={onChange}
        highlight={code => Prism.highlight(code, Prism.languages.js)}
        padding={10}
        style={{
          fontFamily: '"Fira code", "Fira Mono", monospace',
          fontSize: 12
        }}
      />
    </div>
  );
}
