# Sails Generate humpback-model

A `humpback-model` generator for use with the Sails command-line interface for Humpback projects.

Humpback is a sails.js/angular.js framework with built in user authentication and Stripe. It standardizes an angular.js app architecture.  `humpback-model` generates a model in the humpback standardized format and places it in [assets/app/models](/assets/app/models) folder.

### Installation

```sh
$ npm install humpback-model --save
```

### 1. configure sailsrc

```json
{
  "generators": {
    "modules": {
      "humpback-model": "humpback-model"
    }
  }
}
```

### 2. run generator

```sh
$ sails generate humpback-model MODEL_NAME
```

### Development

To get started quickly and see this generator in action, ...

Also see `CONTRIBUTING.md` for more information on overriding/enhancing existing generators.

### Questions?

See `FAQ.md`.

### More Resources

- [Stackoverflow](http://stackoverflow.com/questions/tagged/sails.js)
- [#sailsjs on Freenode](http://webchat.freenode.net/) (IRC channel)
- [Twitter](https://twitter.com/sailsjs)
- [Professional/enterprise](https://github.com/balderdashy/sails-docs/blob/master/FAQ.md#are-there-professional-support-options)
- [Tutorials](https://github.com/balderdashy/sails-docs/blob/master/FAQ.md#where-do-i-get-help)
- <a href="http://sailsjs.org" target="_blank" title="Node.js framework for building realtime APIs."><img src="https://github-camo.global.ssl.fastly.net/9e49073459ed4e0e2687b80eaf515d87b0da4a6b/687474703a2f2f62616c64657264617368792e6769746875622e696f2f7361696c732f696d616765732f6c6f676f2e706e67" width=60 alt="Sails.js logo (small)"/></a>

### License

**[MIT](./LICENSE)**
&copy; 2015 [Scott Wyatt](http://github.com/scott-wyatt) & contributors

As for [Sails](http://sailsjs.org)?  It's free and open-source under the [MIT License](http://sails.mit-license.org/).

![image_squidhome@2x.png](http://i.imgur.com/RIvu9.png)
