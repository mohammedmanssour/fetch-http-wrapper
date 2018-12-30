import * as React from 'react';
import { useContext } from 'react';
import { OptionsContext } from '../context';
import FormControl from './FormControl';
import FormSelect from './FormSelect';
import FormCodeEditor from './FormCodeEditor';
import useFetchClient from './useFetchClient';

export default function FetchForm() {
  const options = useContext(OptionsContext);
  const send = useFetchClient();

  function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    send();
  }

  return (
    <form className="fetch-form" onSubmit={handleFormSubmit}>
      <section className="fetch-form-top">
        <FormSelect
          id="method"
          label="Method"
          value={options.method.value}
          onChange={options.method.onChange}
          options={['get', 'post', 'put', 'patch', 'head', 'delete']}
        />

        <FormControl
          id="url"
          label="URL"
          value={options.url.value}
          onChange={options.url.onChange}
        />

        <button className="btn send-btn">Send</button>
      </section>

      <FormCodeEditor
        id="query"
        label="QueryString parameters"
        value={options.query.value}
        onChange={options.query.setValue}
      />

      <FormCodeEditor
        id="header"
        label="Headers"
        value={options.headers.value}
        onChange={options.headers.setValue}
      />

      {['put', 'post', 'patch'].indexOf(options.method.value) !== -1 && (
        <FormCodeEditor
          id="body"
          label="Body"
          value={options.body.value}
          onChange={options.body.setValue}
        />
      )}

      <FormControl
        id="credentials"
        label="Credentials"
        value={options.credentials.value}
        onChange={options.credentials.onChange}
      />

      <FormControl
        id="cache"
        label="Cache"
        value={options.cache.value}
        onChange={options.cache.onChange}
      />

      <FormControl
        id="mode"
        label="Mode"
        value={options.mode.value}
        onChange={options.mode.onChange}
      />

      <FormControl
        id="redirect"
        label="Redirect"
        value={options.redirect.value}
        onChange={options.redirect.onChange}
      />

      <FormControl
        id="referrer"
        label="Referrer"
        value={options.referrer.value}
        onChange={options.referrer.onChange}
      />
    </form>
  );
}
