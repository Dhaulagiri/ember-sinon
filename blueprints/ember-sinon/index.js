module.exports = {
  description: 'Performs post-installation tasks for ember-sinon',

  normalizeEntityName: function() {
    // this prevents an error when the entityName is
    // not specified (since that doesn't actually matter
    // to us
  },

  afterInstall: function() {
    return this.addBowerPackagesToProject(['sinonjs', 'sinon-qunit']);
  }
};
