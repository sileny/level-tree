/* Automatically generated by './build/bin/build-entry.js' */

import Tree from '../packages/tree/index.js';

const components = [
  Tree
];

const install = function(Vue, opts = {}) {

  components.forEach(component => {
    Vue.component(component.name, component);
  });

};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  version: '0.0.9',
  install,
  Tree
};
