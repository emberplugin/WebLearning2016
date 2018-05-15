import Ember from 'ember';

export let Serializer = Ember.Mixin.create({
  getAttrs: function () {
    let parentAttrs = this._super();
    let attrs = {
      оператор: { serialize: 'odata-id', deserialize: 'records' },
      клиент: { serialize: 'odata-id', deserialize: 'records' },
      представительКлиента: { serialize: 'odata-id', deserialize: 'records' },
      видОперации: { serialize: 'odata-id', deserialize: 'records' },
      местоВОчереди: { serialize: 'odata-id', deserialize: 'records' }
    };

    return Ember.$.extend(true, {}, parentAttrs, attrs);
  },
  init: function () {
    this.set('attrs', this.getAttrs());
    this._super(...arguments);
  }
});
