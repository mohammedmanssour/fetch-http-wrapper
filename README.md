# fetch HTTP Wrapper
A Simple, Intuitive and expressive http client built on top of fetch

✅ It's lightweight and depends on [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) 😍

👌 It has an intuitive and expressive api 🎉

👊 It depends on middleware pattern to extends functionality.

✅ It was built with and supports TypeScript 💪

😅 It still in beta

## Why Bother?
for me axios is a very powerful package to make different kinds of http requests. but, when it's used a lot the code turns to be messy because of the options object.
So I build this package to provide an elegant, expressive and intuitive wrapper around fetch to keep code simple and orgnized when working with http apis.

## Table Of Contents

1. [Installation](#installation)
2. [Usage](#usage)
    1. [Sending Request](#sending-request)
    2. [Example Usage](#example-usage)
3. [Middlewares](#middlewares)
    1. [Building before middleware](#before)
    2. [Building after middleware](#after)
    3. [Available middlewares](#available-middlewares)

<div id="installation"></div>

## Installation
all what you have to do is run the following command
```
npm i fetch-http-wrapper
```

<div id="usage"></div>

## Usage
You can instantiate new request by using the `request` method or any of other related methods. **All of the following methods will return an instance of the class `FetchRequest`**

1. Instantiate request with `{method}` and `{url}`
```
const request = Fetch.request({method}, {url});
```

2. Instantiate `get` request with `{url}`;
```
const request = Fetch.get({url});
```

3. Instantiate `post` request with `{url}`;
```
const request = Fetch.post({url});
```

4. Instantiate `put` request with `{url}`;
```
const request = Fetch.put({url});
```

5. Instantiate `patch` request with `{url}`;
```
const request = Fetch.patch({url});
```

6. Instantiate `head` request with `{url}`;
```
const request = Fetch.head({url});
```

7. Instantiate `delete` request with `{url}`;
```
const request = Fetch.delete({url});
```

The `FetchRequest` class has the following methods to help you build the request. All of the following methods will return the instance.

1. add query params to the url
```
request.withParams({
    key: 'value',
    key2: 'value2'
})
```

2. add request headers
```
request.withHeaders({
    'Content-Type': 'application/json'
})
```

3. add request body
```
request.withBody({
    key: 'value',
})
```

4. specify request credentials: Contains the credentials of the request (e.g., "omit", "same-origin", "include"). The default is "same-origin".
```
request.credentials('omit')
```

5. specify request mode: Contains the mode of the request (e.g., cors, no-cors, same-origin, navigate.)
```
request.mode('cors')
```

6. specify request cache: Contains the cache mode of the request
```
request.cache('no-cache');
```

7. specify request redirect policy: Contains the mode for how redirects are handled. It may be one of follow, error, or manual.
```
request.redirect('follow');
```

8. specify request referrer: Contains the referrer of the request
```
request.referrer('');
```

9. specify request integrity: Contains the subresource integrity value of the request (e.g., sha256-BpfBw7ivV8q2jLiT13fxDYAe2tJllusRSZ273h2nFSE=).
```
request.integrity('')
```

<div id="sending-request"></div>

### sending request
use `call` method to send http request after being configured, It returns a promisy
```
request.call()
    .then(response => {})
```

<div id="example-usage"></div>

### example usage
```js
Fetch.get('http://mohammedmanssour.me')
    .withHeaders({
        'Authorization' : '{token}'
    })
    .withParams({
        key: 'value'
    })
    .mode('no-cors')
    .call()
    .then(response => {});
```

<div id="middlewares" ></div>

## Middlewares

<div id="before" ></div>

### Building Before middlewares
before middlewares is used to manipulate request config before sending the http request.
to add a before middleware to `Fetch.before()` method and make sure to return options.

use `options.clone()` to get a new cloned object of the original options
```js
Fetch.before(options => {
    const newOptions = options.clone();
    // do your thing here
    return newOptions;
})
```

the `option` paramaeter is an instance of `FetchOptions` class that has the following attributes
``` js
    url: string;
    method: string;
    headers: { [key: string]: string } = {};
    mode?: string;
    body?: any = {};
    query?: QueryObject = {};
    credentials?: string;
    cache?: string;
    redirect?: string;
    referrer?: string;
    integrity?: string;
```

#### before middleware example
in the following example we will use a middleware to add a base url to the provided path by the request.
```js
Fetch.before(options => {
    const newOptions = options.clone();
    newOptions.url = `http://mohammedmanssour.me/api/${newOptions.url}`
    return newOptions;
})
```
<div id="#after"></div>

## Building After middleware

After middleware is used to manipulate the response when the call is done, use `Fetch.after()` to add an after middleware. It doesn't matter what you return from your after middlewares but make sure to wrap it in a `Promise` and keep it consistent.

After middlewares takes two arguments:
1. `request`: the request that was sent.
2. `response`: the request response, an instance of Fetch [`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response)

```js
Fetch.after(
    (request, response) =>
        response.json()
        .then(data => Promise.resolve(data))
```

<div id="available-middlewares"></div>

## Available Middlewares
You can reach the available middlewares by using the `Fetch.middlewares` property

1. `json()` it's a `before` middleware used to add the right headers to the request and to strigify body.

2. `jsonResponse()` it's an `after` middleware used to convert the response to json response and returns a promise that has the data and the response.
```
return Promise.resolve({data, response});
```

3. `query()` it's an `before` middleware used to convert the options query params from an object to a string

```js
Fetch
.before(Fetch.middlewares.query)
.get('http://mohammedmanssour.me')
.withParams({
    key: 'value',
    key2: 'value2'
})

//will become
'http://mohammedmanssour.me?key=value&key2=value'
```

## Contributers:
1. [Mohammed Manssour]('https://mohammedmanssour.me')