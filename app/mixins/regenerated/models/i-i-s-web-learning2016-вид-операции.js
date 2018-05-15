import Ember from 'ember';
import DS from 'ember-data';
import { Projection } from 'ember-flexberry-data';
export let Model = Ember.Mixin.create({
  наименование: DS.attr('string'),
  актуально: DS.attr('boolean'),
  getValidations: function () {
    let parentValidations = this._super();
    let thisValidations = {
    };
    return Ember.$.extend(true, {}, parentValidations, thisValidations);
  },
  init: function () {
    this.set('validations', this.getValidations());
    this._super.apply(this, arguments);
  }
});
export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ВидОперацииE', 'i-i-s-web-learning2016-вид-операции', {
    наименование: Projection.attr('Наименование'),
    актуально: Projection.attr('Актуально')
  });
  modelClass.defineProjection('ВидОперацииL', 'i-i-s-web-learning2016-вид-операции', {
    наименование: Projection.attr('Наименование'),
    актуально: Projection.attr('Актуально')
  });
};
