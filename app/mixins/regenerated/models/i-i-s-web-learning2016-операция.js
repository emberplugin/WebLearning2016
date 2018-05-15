import Ember from 'ember';
import DS from 'ember-data';
import { Projection } from 'ember-flexberry-data';
export let Model = Ember.Mixin.create({
  должностьОператораСтр: DS.attr('string'),
  дата: DS.attr('date'),
  представительСтр: DS.attr('string'),
  выполнена: DS.attr('boolean'),
  оператор: DS.belongsTo('i-i-s-web-learning2016-оператор', { inverse: null, async: false }),
  клиент: DS.belongsTo('i-i-s-web-learning2016-клиент', { inverse: null, async: false }),
  представительКлиента: DS.belongsTo('i-i-s-web-learning2016-клиент', { inverse: null, async: false }),
  видОперации: DS.belongsTo('i-i-s-web-learning2016-вид-операции', { inverse: null, async: false }),
  местоВОчереди: DS.belongsTo('i-i-s-web-learning2016-место-в-очереди', { inverse: null, async: false }),
  getValidations: function () {
    let parentValidations = this._super();
    let thisValidations = {
      оператор: { presence: true },
      клиент: { presence: true },
      видОперации: { presence: true }
    };
    return Ember.$.extend(true, {}, parentValidations, thisValidations);
  },
  init: function () {
    this.set('validations', this.getValidations());
    this._super.apply(this, arguments);
  }
});
export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОперацияE', 'i-i-s-web-learning2016-операция', {
    должностьОператораСтр: Projection.attr(''),
    дата: Projection.attr(''),
    видОперации: Projection.belongsTo('i-i-s-web-learning2016-вид-операции', 'Вид операции', {
      наименование: Projection.attr('', { hidden: true })
    }, { displayMemberPath: 'наименование' }),
    оператор: Projection.belongsTo('i-i-s-web-learning2016-оператор', '', {
      фИО: Projection.attr('', { hidden: true }),
      должность: Projection.belongsTo('i-i-s-web-learning2016-должность', '', {
        наименование: Projection.attr('', { hidden: true })
      }, { hidden: true })
    }, { hidden: true }),
    клиент: Projection.belongsTo('i-i-s-web-learning2016-клиент', '', {
      наименование: Projection.attr('', { hidden: true })
    }, { hidden: true }),
    местоВОчереди: Projection.belongsTo('i-i-s-web-learning2016-место-в-очереди', '', {
      номер: Projection.attr('', { hidden: true }),
      очередьСтр: Projection.attr('', { hidden: true }),
      очередь: Projection.belongsTo('i-i-s-web-learning2016-очередь', '', {
        наименование: Projection.attr('', { hidden: true })
      }, { hidden: true }),
      клиент: Projection.belongsTo('i-i-s-web-learning2016-клиент', '', {
        наименование: Projection.attr('', { hidden: true })
      }, { hidden: true })
    }, { hidden: true }),
    выполнена: Projection.attr('')
  });
  modelClass.defineProjection('ОперацияL', 'i-i-s-web-learning2016-операция', {
    должностьОператораСтр: Projection.attr('Должность оператора'),
    дата: Projection.attr(''),
    видОперации: Projection.belongsTo('i-i-s-web-learning2016-вид-операции', '', {
      наименование: Projection.attr('Вид операции')
    }, { hidden: true }),
    оператор: Projection.belongsTo('i-i-s-web-learning2016-оператор', '', {
      фИО: Projection.attr('', { hidden: true }),
      должность: Projection.belongsTo('i-i-s-web-learning2016-должность', '', {
        наименование: Projection.attr('', { hidden: true })
      }, { hidden: true })
    }, { hidden: true }),
    клиент: Projection.belongsTo('i-i-s-web-learning2016-клиент', '', {
      наименование: Projection.attr('', { hidden: true })
    }, { hidden: true }),
    местоВОчереди: Projection.belongsTo('i-i-s-web-learning2016-место-в-очереди', '', {
      номер: Projection.attr('', { hidden: true }),
      очередьСтр: Projection.attr('', { hidden: true }),
      очередь: Projection.belongsTo('i-i-s-web-learning2016-очередь', '', {
        наименование: Projection.attr('', { hidden: true })
      }, { hidden: true }),
      клиент: Projection.belongsTo('i-i-s-web-learning2016-клиент', '', {
        наименование: Projection.attr('', { hidden: true })
      }, { hidden: true })
    }, { hidden: true }),
    выполнена: Projection.attr('Выполнена')
  });
};
