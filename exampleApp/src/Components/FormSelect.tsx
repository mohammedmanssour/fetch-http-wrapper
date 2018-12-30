import * as React from 'react';
import FormSelectProps from '../Models/FormSelect';

export default function FormSelect(props: FormSelectProps) {
  const { id, label, value, onChange, options } = props;

  return (
    <div className="form-control">
      <label htmlFor={id}>{label}</label>
      <select id={id} onChange={onChange}>
        {options.length > 0 &&
          options.map(method => (
            <option key={method} value={method}>
              {method}
            </option>
          ))}
      </select>
    </div>
  );
}
