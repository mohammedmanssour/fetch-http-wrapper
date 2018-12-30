import FormOption from './FormOption';

export default class FormControl extends FormOption {
  id: string;
  label: string;
  type?: string = 'text';
}
