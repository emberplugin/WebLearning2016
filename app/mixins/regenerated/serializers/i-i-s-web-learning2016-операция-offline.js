import Ember from 'ember';

export let OfflineSerializer = Ember.Mixin.create({
  getAttrs: function () {
    let parentAttrs = this._super();
    let attrs = {
      оператор: { serialize: 'id', deserialize: 'records' },
      клиент: { serialize: 'id', deserialize: 'records' },
      представительКлиента: { serialize: 'id', deserialize: 'records' },
      видОперации: { serialize: 'id', deserialize: 'records' },
      местоВОчереди: { serialize: 'id', deserialize: 'records' }
    };

    return Ember.$.extend(true, {}, parentAttrs, attrs);
  },
  init: function () {
    this.set('attrs', this.getAttrs());
    this._super(...arguments);
  }
});
