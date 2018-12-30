import * as React from 'react';
import FormControlProps from '../Models/FormControl';

export default function FormTextarea(props: FormControlProps) {
  const { id, label, type, value, onChange } = props;
  return (
    <div className="form-control">
      <label htmlFor={id}>{label}</label>
      <textarea id={id} value={value} onChange={onChange} />
    </div>
  );
}
