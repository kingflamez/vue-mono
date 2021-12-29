# Mono for Vue 2.x

> This is a Vue Package that helps you integrate Mono - https://withmono.com/ easily"

[![NPM](https://img.shields.io/npm/v/vue-mono.svg)](https://www.npmjs.com/package/vue-mono) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

### Vue

Install the npm package:

```bash
npm install --save vue-mono
# OR
yarn add vue-mono
```

Add the Vue plugin in your main.js and pass your [connect public key](#):

```javascript
import Vue from "vue";
import Mono from "vue-mono";

Vue.use(Mono, { publicKey: "YOUR CONNECT PUBLIC KEY" });
```

### Nuxt

Install the npm package:

```bash
npm install --save vue-mono
# OR
yarn add vue-mono
```

Create a `mono.js` file in your `plugins` folder and add the Vue plugin:

```javascript
// plugins/mono.js

import Vue from "vue";
import Mono from "vue-mono";

Vue.use(Mono, { publicKey: "YOUR CONNECT PUBLIC KEY" });
```

Go to your `nuxt.config.js` and add it to your plugin section

```javascript
/*
** Plugins to load before mounting the App
** https://nuxtjs.org/guide/plugins
*/
............
plugins: [{src: '~/plugins/mono', ssr: false},],
...........

```

## Usage

Mono can be launched using `$launchMono()` method, see example below

```vue
<template>
  <div class="btn-wrapper">
    <button type="button" @click="launchMono">Launch Mono</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      amount: 200,
    };
  },
  methods: {
    launchMono() {
      const options = {
        onSuccess: function (response) {
          alert(JSON.stringify(response));
          /**
						response : { "code": "code_xyz" }
						you can send this code back to your server to get this
						authenticated account and start making requests.
					*/
        },

        onClose: function () {
          alert("user closed the widget.");
        },
      };
      this.$launchMono(options);
    },
  },
};
</script>
```

Mono account-reauthorisation can be launched using `$reAuthorise(options, token)` method, see example below

```vue
<template>
  <div class="btn-wrapper">
    <button type="button" @click="reAuthorise">Re-Authorise Account</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      amount: 200,
    };
  },
  methods: {
    reAuthorise() {
      const options = {
        onSuccess: function (response) {
          alert(JSON.stringify(response));
          /**
						response : { "code": "code_xyz" }
					*/
        },
        onClose: function () {
          alert("user closed the widget.");
        },
      };
      const token = ""; // call the backend to fetch the re-authorisation token for the account
      this.$reAuthorise(options, token);
    },
  },
};
</script>
```

Please checkout
[Mono Documentation](https://www.notion.so/Documentation-3cda635f4aa54e9bb6947ab60305db92) for more explanation

Follow on Twitter [@mrflamez\_](https://twitter.com/mrflamez_)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE) file for details
