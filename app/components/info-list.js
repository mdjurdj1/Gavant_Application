import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    showInfo(link) {
      alert(link)
    }
  }
});
