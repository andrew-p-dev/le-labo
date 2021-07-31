# Soap showcase site (stolen look from Le Labo)

> I made this when I had a go at making soap for christmas one year. It just shows the 4 soaps I made. [View the live site here](https://andrew-grace-saskia-soaps.netlify.app/).

## Build & Serve

```bash
# install dependencies
yarn install

# serve with hot reload at localhost:3000
yarn dev

# build for production and launch server
yarn build
yarn start

# generate static project
yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org)

## Generators

### Create a new component

```bash
yarn new component
```

### Create a new view

```bash
yarn new view
```

### Create a utility module

```bash
yarn new util
```

### Create a store module

```bash
yarn new store
```

## Descriptions

nettoyage | exfoliating
transparent | transparent

## Packages

### Environment Variables

- [nuxt runtime config](https://nuxtjs.org/guide/runtime-config/): Built in to nuxt, allows passing runtime configuration in `nuxt.config.js` file, which is then accessible using $config
- [@nuxtjs/dotenv](https://github.com/nuxt-community/dotenv-module): Loads variables from a .env file directly into context.env and process.env

### CSS Preprocessing

SASS for CSS preprocessing.

- [node-sass](https://github.com/sass/node-sass): bindings for Node.js to LibSass
- [sass-loader](https://github.com/webpack-contrib/sass-loader): compiles sass to css
- (optional) [@nuxtjs/style-resources](https://github.com/nuxt-community/style-resources-module): Allows global variables, mixins and functions without having to import. Depends on above packages

### Component Boilerplate

Writing components can involve a little less boilerplate using these packages.

- [nuxt-property-decorator](https://github.com/nuxt-community/nuxt-property-decorator): Handy TypeScript decorators for class-style Vue components and Property decorators for Vue and Vuex
- [hygen](https://github.com/jondot/hygen): Helps generate boilerplate code each time you make a new page / component

### Code Formatting

Set up your nuxt project with eslint and prettier. These packages help integrate eslint and prettier together.

- [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier): Turns off all ESlint rules that are unnecessary or might conflict with Prettier
- [eslint-plugin-vue-a11y](https://github.com/maranran/eslint-plugin-vue-a11y): Static AST checker for accessibility rules on elements in Vue

### Testing

Use vue-test-utils with jest.

- [vue-test-utils](https://vue-test-utils.vuejs.org/): Official unit testing utility library for Vue.js
- [jest](https://github.com/facebook/jest): Recommended test runner for `vue-test-utils` Nuxt will also install [ts-jest](https://github.com/kulshekhar/ts-jest) and [vue-jest](https://github.com/vuejs/vue-jest) automatically
- [vue-testing-library](https://github.com/testing-library/vue-testing-library): A lighter alternative to `vue-test-utils`
- [@nuxtjs/storybook](https://github.com/nuxt-community/storybook): For testing whether components mount, different states of components, and maintaining a catalogue of standalone components separate from the application
- [vuex-mock-store](https://github.com/posva/vuex-mock-store): Lets you mock Vuex store
- [jest-mock-axios](https://github.com/knee-cola/jest-mock-axios): Lets you mock axios
- [cypress](https://github.com/cypress-io/cypress): For end-to-end and visual regression testing
### Documentation

- [vuepress](https://github.com/vuejs/vuepress): Vue-powered static site generator
- [@nuxt/content](https://github.com/nuxt/content): Static site generation via /content directory, acting as Git-based Headless CMS
