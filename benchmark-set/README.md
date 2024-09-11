<!-- @format -->

# Language Performance Benchmark-Set Project

A small **_Multi-Programming-Language_** project designed to compare the efficiency of the particular languages in use when performing the <u>exact same task</u> on various resource consumption fronts.

The Project is based on a Vue.JS 3 front-end and UI, with a Node.JS backend API.

The Hosting of the Vue UI is done on GitHub Pages with the Node API running on Netlify's free tier.

# The Process to Create the Project

## Step 1: Create a Vue.JS Project

If you haven't already created a Vue.js project, follow these steps:

```bash
# Install Vue CLI globally if you haven't
npm install -g @vue/cli

# Create a new Vue.js project
vue create benchmark-comparison

# Navigate to the project directory
cd benchmark-comparison

```

## Step 2: Configure Vue.js for GitHub Pages

In the root of your project, create a `vue.config.js` file to specify the publicPath needed for GitHub Pages. Replace `<your-repo-name>` with your actual repository name on GitHub or any other Version Control platform you'd like to use.

### Customize Vue's Configuration

See **[Configuration Reference](https://cli.vuejs.org/config/)** for more detailed information if needed.

## Configuring the `vue.config.ts` File

```js
// vue.config.ts
module.exports = {
...
  publicPath:
    process.env.NODE_ENV === "production" ? "/<your-repo-name>/" : "/",
};
```

## Step 3: Create Vue.js Components

We'll build a simple **Vue** component that fetches benchmark results from the **Node** backend API.

##### 1. Go to `src/components` and create a new component named `BenchmarkResults.vue`.

```vue
<template>
  <div>
    <h1>Benchmark Comparison Results</h1>
    <ul>
      <li v-for="result in results" :key="result.id">
        {{ result.language }}: {{ result.execution_time }} ms ({{
          result.date
        }})
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    test_data() {
      return {
        results: [],
      };
    },
    mounted() {
      fetch("http://localhost:3000/results") // Replace with your API URL if deployed
        .then((response) => response.json())
        .then((test_data) => {
          this.results = test_data.results;
        });
    },
  };
</script>
```

#### 2. Import this component into the `App.vue` file.

```vue
<template>
  <div id="app">
    <BenchmarkResults />
  </div>
</template>

<script>
  import BenchmarkResults from "./components/BenchmarkResults.vue";

  export default {
    components: {
      BenchmarkResults,
    },
  };
</script>
```

#### Step 3: Build the Project for Production

GitHub Pages serves static files, so we need to build the `Vue.JS` project:

```bash
npm run build
```

This will create a `dist/` directory with the production files.

#### Step 4: Deploy to GitHub Pages

To deploy to GitHub Pages, follow these steps:

1.  Install the `gh-pages` package:

```bash
npm install gh-pages --save-dev

```

2.  Modify your `package.json` to include a deploy script:

```json
"scripts": {
  "deploy": "vue-cli-service build && gh-pages -d dist"
}
```

3.  Deploy to GitHub Pages:

```bash
npm run deploy

```

Once complete, you can visit the **Benchmarking App** at `https://<your-github-username>.github.io/<your-repo-name>`.

---

## Project Module Installation, Serving and Build Configuration

```shell
npm install
```

### Compiles and hot-reloads for development

```shell
npm run serve
```

### Compiles and minifies for production

```shell
npm run build
```

### Lints and fixes files

```shell
npm run lint
```
