import Ember from 'ember';
import DS from 'ember-data';
import { Projection } from 'ember-flexberry-data';
export let Model = Ember.Mixin.create({
  наименование: DS.attr('string'),
  документ: DS.attr('file'),
  фото: DS.attr('file'),
  количествоОбращений: DS.attr('number'),
  обслуженоОбращений: DS.attr('number'),
  датаРегистрации: DS.attr('date'),
  датаПоследнегоВизита: DS.attr('date'),
  актуально: DS.attr('boolean'),
  email: DS.attr('string'),
  мобильныйТелефон: DS.attr('string'),
  тип: DS.belongsTo('i-i-s-web-learning2016-тип-клиента', { inverse: null, async: false }),
  getValidations: function () {
    let parentValidations = this._super();
    let thisValidations = {
      тип: { presence: true }
    };
    return Ember.$.extend(true, {}, parentValidations, thisValidations);
  },
  init: function () {
    this.set('validations', this.getValidations());
    this._super.apply(this, arguments);
  }
});
export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КлиентE', 'i-i-s-web-learning2016-клиент', {
    наименование: Projection.attr(''),
    тип: Projection.belongsTo('i-i-s-web-learning2016-тип-клиента', '', {
      наименование: Projection.attr('', { hidden: true })
    }, { displayMemberPath: 'наименование' }),
    документ: Projection.attr(''),
    фото: Projection.attr(''),
    количествоОбращений: Projection.attr('Кол-во обращений'),
    обслуженоОбращений: Projection.attr('Обслужено обращений'),
    актуально: Projection.attr(''),
    датаРегистрации: Projection.attr('Дата регистрации'),
    датаПоследнегоВизита: Projection.attr('Дата последнего визита'),
    email: Projection.attr('Email'),
    мобильныйТелефон: Projection.attr('Моб. телефон')
  });
  modelClass.defineProjection('КлиентL', 'i-i-s-web-learning2016-клиент', {
    наименование: Projection.attr(''),
    тип: Projection.belongsTo('i-i-s-web-learning2016-тип-клиента', '', {
      наименование: Projection.attr('Тип')
    }, { hidden: true }),
    документ: Projection.attr(''),
    актуально: Projection.attr('')
  });
};
