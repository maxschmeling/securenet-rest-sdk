import 'babel-runtime';
import * as vault from './api/vault';

// TODO: Make this better...
function withConfig(klass, funcs, config) {
  const keys = Object.keys(funcs)

  for (let key of keys) {
    klass[key] = funcs[key].bind(null, config)
  }
}

export default class {
  constructor(options) {
    withConfig(this, vault, options);
  }
}
