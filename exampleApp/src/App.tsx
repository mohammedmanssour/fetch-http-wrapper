import * as React from 'react';
import { hot } from 'react-hot-loader';
import { OptionsContext, ResponseContext } from './context';
import useFormInput from './Components/useFormInput';
import FetchForm from './Components/FetchForm';
import FetchCode from './Components/FetchCode';
import './App.scss';
import FetchResult from './Components/FetchResult';

function App() {
  const url = useFormInput('');
  const method = useFormInput('get');
  const headers = useFormInput('');
  const query = useFormInput('');
  const body = useFormInput('');
  const credentials = useFormInput('');
  const mode = useFormInput('');
  const cache = useFormInput('');
  const redirect = useFormInput('');
  const referrer = useFormInput('');

  const [data, setData] = React.useState({});
  const [response, setResponse] = React.useState({});

  return (
    <OptionsContext.Provider
      value={{
        url,
        method,
        headers,
        query,
        body,
        credentials,
        mode,
        cache,
        redirect,
        referrer
      }}
    >
      <ResponseContext.Provider
        value={{
          data,
          setData,
          response,
          setResponse
        }}
      >
        <main id="app-main">
          <FetchForm />
          <div className="fetch-results">
            <FetchCode />
            <FetchResult />
          </div>
        </main>
      </ResponseContext.Provider>
    </OptionsContext.Provider>
  );
}

export default hot(module)(App);
