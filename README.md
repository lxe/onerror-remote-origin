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



4. Open `http://localhost/remote.html` and observe the console:


### Observation:

Looks like if the error is thrown in a script that is loaded from a remote origin, the `window.onerror` handler does not receive the `file name`, `row`, and `column` arguments.

