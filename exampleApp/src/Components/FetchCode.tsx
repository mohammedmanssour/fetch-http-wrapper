import * as React from 'react';
import { OptionsContext } from '../context';
import * as Prism from 'prismjs';
import { empty } from '../Utils';

export default function FetchCode() {
  const options = React.useContext(OptionsContext);

  let code = [];
  code.push("import Fetch from 'fetch-client' \n\n ");

  if (empty(options.url.value)) {
    return (
      <div
        className="fetch-code"
        dangerouslySetInnerHTML={{
          __html: Prism.highlight(code.join(''), Prism.languages.js)
        }}
      />
    );
  }

  const {
    url,
    method,
    headers,
    body,
    query,
    credentials,
    mode,
    cache,
    redirect,
    referrer
  } = options;

  code.push(`Fetch.${method.value}('${url.value}')`);

  if (!empty(query.value)) {
    code.push('\n');
    code.push(`\t.withParams(${query.value})`);
  }

  if (!empty(headers.value)) {
    code.push('\n');
    code.push(`\t.withHeaders(${headers.value})`);
  }

  if (!empty(body.value)) {
    code.push('\n');
    code.push(`\t.withBody(${body.value})`);
  }

  if (!empty(credentials.value)) {
    code.push('\n');
    code.push(`\t.credentials('${credentials.value}')`);
  }

  if (!empty(mode.value)) {
    code.push('\n');
    code.push(`\t.mode('${mode.value}')`);
  }

  if (!empty(cache.value)) {
    code.push('\n');
    code.push(`\t.cache('${cache.value}')`);
  }

  if (!empty(redirect.value)) {
    code.push('\n');
    code.push(`\t.redirect('${redirect.value}')`);
  }

  if (!empty(referrer.value)) {
    code.push('\n');
    code.push(`\t.referrer('${referrer.value}')`);
  }
  code.push('\n');
  code.push('\t.call()\n\t.then({data, response}) => {}');

  return (
    <div
      className="fetch-code"
      dangerouslySetInnerHTML={{
        __html: Prism.highlight(code.join(''), Prism.languages.js)
      }}
    />
  );
}
