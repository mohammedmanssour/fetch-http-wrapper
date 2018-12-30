export default class FormOption {
  value: any;
  onChange: (e: React.FormEvent) => void;
  setValue?: (e: any) => void;

  constructor(value = {}) {
    this.value = value;
    this.onChange = (e: React.FormEvent) => {};
    this.setValue = (e: any) => {};
  }
}
