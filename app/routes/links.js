import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return ['About Me', 'Resume', 'LinkedIn', 'Github', 'Personal Blog']
  }
});
