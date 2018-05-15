import Ember from 'ember';
import DS from 'ember-data';
import { Projection } from 'ember-flexberry-data';
export let Model = Ember.Mixin.create({
  наименование: DS.attr('string'),
  закрыта: DS.attr('boolean'),
  должностьОператораСтр: DS.attr('string'),
  актуально: DS.attr('boolean'),
  тип: DS.belongsTo('i-i-s-web-learning2016-тип-очереди', { inverse: null, async: false }),
  оператор: DS.belongsTo('i-i-s-web-learning2016-оператор', { inverse: null, async: false }),
  местоВОчереди: DS.hasMany('i-i-s-web-learning2016-место-в-очереди', { inverse: 'очередь', async: false }),
  getValidations: function () {
    let parentValidations = this._super();
    let thisValidations = {
      тип: { presence: true },
      оператор: { presence: true }
    };
    return Ember.$.extend(true, {}, parentValidations, thisValidations);
  },
  init: function () {
    this.set('validations', this.getValidations());
    this._super.apply(this, arguments);
  }
});
export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОчередьE', 'i-i-s-web-learning2016-очередь', {
    наименование: Projection.attr(''),
    закрыта: Projection.attr(''),
    актуально: Projection.attr(''),
    тип: Projection.belongsTo('i-i-s-web-learning2016-тип-очереди', '', {
      наименование: Projection.attr('', { hidden: true })
    }, { displayMemberPath: 'наименование' }),
    оператор: Projection.belongsTo('i-i-s-web-learning2016-оператор', 'Оператор', {
      фИО: Projection.attr('', { hidden: true }),
      должность: Projection.belongsTo('i-i-s-web-learning2016-должность', '', {
        наименование: Projection.attr('', { hidden: true })
      }, { hidden: true })
    }, { displayMemberPath: 'фИО' }),
    должностьОператораСтр: Projection.attr('Должность оператора'),
    местоВОчереди: Projection.hasMany('i-i-s-web-learning2016-место-в-очереди', 'Места в очереди', {
      номер: Projection.attr(''),
      клиент: Projection.belongsTo('i-i-s-web-learning2016-клиент', '', {
        наименование: Projection.attr('', { hidden: true })
      }, { displayMemberPath: 'наименование' }),
      клиентСтр: Projection.attr('', { hidden: true }),
      датаВыдачи: Projection.attr('Дата выдачи'),
      датаОбслуживания: Projection.attr('Дата обслуживания'),
      очередь: Projection.belongsTo('i-i-s-web-learning2016-очередь', '', {

      }, { hidden: true })
    })
  });
  modelClass.defineProjection('ОчередьL', 'i-i-s-web-learning2016-очередь', {
    наименование: Projection.attr(''),
    тип: Projection.belongsTo('i-i-s-web-learning2016-тип-очереди', '', {
      наименование: Projection.attr('Тип')
    }, { hidden: true }),
    оператор: Projection.belongsTo('i-i-s-web-learning2016-оператор', '', {
      должность: Projection.belongsTo('i-i-s-web-learning2016-должность', '', {
        наименование: Projection.attr('', { hidden: true })
      }, { hidden: true }),
      фИО: Projection.attr('Оператор')
    }, { hidden: true }),
    должностьОператораСтр: Projection.attr('Должность оператора'),
    закрыта: Projection.attr(''),
    актуально: Projection.attr('')
  });
};
