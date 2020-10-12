
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

// Setup context for Storybook here
import 'quasar/dist/quasar.min.css'
import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/material-icons-outlined/material-icons-outlined.css'

import 'quasar/dist/quasar.css'
// import 'src/css/app.scss' // if you have an app.scss|sass|styl main file

import Vue from 'vue';
import Quasar from 'quasar';

Vue.use(Quasar, { config: {}, directives: {} });

// run needed boot plugins files down here like `bootFile({ Vue })`
