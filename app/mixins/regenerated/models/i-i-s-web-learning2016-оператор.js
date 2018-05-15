import Ember from 'ember';
import DS from 'ember-data';
import { Projection } from 'ember-flexberry-data';
export let Model = Ember.Mixin.create({
  фИО: DS.attr('string'),
  должность: DS.belongsTo('i-i-s-web-learning2016-должность', { inverse: null, async: false }),
  getValidations: function () {
    let parentValidations = this._super();
    let thisValidations = {
      должность: { presence: true }
    };
    return Ember.$.extend(true, {}, parentValidations, thisValidations);
  },
  init: function () {
    this.set('validations', this.getValidations());
    this._super.apply(this, arguments);
  }
});
export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОператорE', 'i-i-s-web-learning2016-оператор', {
    фИО: Projection.attr('ФИО'),
    должность: Projection.belongsTo('i-i-s-web-learning2016-должность', 'Должность', {
      наименование: Projection.attr('', { hidden: true })
    }, { displayMemberPath: 'наименование' })
  });
  modelClass.defineProjection('ОператорL', 'i-i-s-web-learning2016-оператор', {
    фИО: Projection.attr('ФИО'),
    должность: Projection.belongsTo('i-i-s-web-learning2016-должность', '', {
      наименование: Projection.attr('Должность')
    }, { hidden: true })
  });
};
