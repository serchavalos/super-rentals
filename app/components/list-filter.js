import Ember from 'ember';

export default Ember.Component.extend({
  results: [],
  classNames: ['list-filter'],
  value: '',

  init() {
    this._super(...arguments);
    this.get('filter')('').then((response) => this.set('results', response.results));
  },

  actions: {
    handleFilterEntry() {
      let filterInputValue = this.get('value');
      let filterAction = this.get('filter');
      filterAction(filterInputValue).then((response) => this.set('results', response.results));
    }
  }

});
