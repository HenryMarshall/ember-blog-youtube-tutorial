import DS from 'ember-data';

export default DS.RESTAdapter.reopen({
  // This will check `/api/stuff` on this server for the data
  namespace: 'api'
});