# parse-routes

Node.js utility: parse routes information from config file

```
parse-routes -f /path/to/routes.yml
```


###### Table of Contents

- [Requirements](#Requirements)
- [Usage](#Usage)
- [License](#License)

<a id="Requirements"></a>
## Requirements

- development on Node 11.6.0


<a id="Usage"></a>
## Usage

### CLI

```
$ parse-routes -f /path/to/routes.yml -e utf8
```

#### Example

- /path/to/routes.yml

```yaml
- name: index
  title: Home

- name: system
  entries:
  - name: config
    title: System Settings

  - name: misc
    entries:
    - name: i18n
      title: I18n Settings
```

```
$ parse-routes -f /path/to/routes.yml

{"info":{"path":"index","module":"Index"},"entry":{"name":"index","title":"Home"}}
{"info":{"path":"system/config","module":"System.Config"},"entry":{"name":"config","title":"System Settings"}}
{"info":{"path":"system/misc/i18n","module":"System.Misc.I18n"},"entry":{"name":"i18n","title":"I18n Settings"}}
```


### Install

```
$ npm install --save-dev parse-routes
```


<a id="License"></a>
## License

parse-routes is licensed under the [MIT](LICENSE) license.

Copyright &copy; since 2018 shun@getto.systems
