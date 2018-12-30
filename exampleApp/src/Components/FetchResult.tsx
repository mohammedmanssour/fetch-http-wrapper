import * as React from 'react';
import { ResponseContext } from '../context';
import { empty } from '../Utils';
import * as Prism from 'prismjs';

export default function FetchResult() {
  const { data, response } = React.useContext(ResponseContext);
  if (empty(data)) {
    return '';
  }

  return (
    <div className="fetch-code">
      <p>//Resoponse Status</p>
      {JSON.stringify(response.status)}

      <p>//Response Headers</p>
      {JSON.stringify(response.headers)}

      <p>//Response Data</p>
      <div dangerouslySetInnerHTML={{__html: Prism.highlight(JSON.stringify(data, null, 4), Prism.languages.js)}} />
    </div>
  );
}
