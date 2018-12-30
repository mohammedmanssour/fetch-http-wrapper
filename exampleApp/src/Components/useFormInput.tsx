import * as React from 'react';
import { useState } from 'react';

export default function useFormInput(initialValue: any) {
  const [value, setValue] = useState(initialValue);

  function onChange(e: React.FormEvent) {
    //@ts-ignore
    setValue(e.currentTarget.value);
  }

  return {
    value,
    setValue,
    onChange
  };
}
