## `window.onerror` in scripts loaded from remote origin

### Setup

1. Add the following entry to `/etc/hosts`:

```
127.0.0.1 fake-remote-site
```

2. Launch an http server:

```
sudo python -m SimpleHTTPServer 80
```

3. Open `http://localhost/local.html` and observe the console:

![screen shot 2016-01-22 at 4 25 59 pm](https://cloud.githubusercontent.com/assets/1486609/12526728/74224bc8-c125-11e5-8bce-b1cdc714795e.png)

4. Open `http://localhost/remote.html` and observe the console:

![screen shot 2016-01-22 at 4 26 23 pm](https://cloud.githubusercontent.com/assets/1486609/12526730/787eadba-c125-11e5-8dbc-1bc35619e8c0.png)

### Observation:

Looks like if the error is thrown in a script that is loaded from a remote origin, the `window.onerror` handler does not receive the `file name`, `row`, `column` and `Error` arguments.

See https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onerror#Notes:

> When a syntax(?) error occurs in a script, loaded from a different origin, the details of the syntax error are not reported to prevent leaking information (see bug 363897). Instead the error reported is simply "Script error." This behavior can be overriden in some browsers using the crossorigin attribute on <script> and having the server send the appropriate CORS HTTP response headers.

