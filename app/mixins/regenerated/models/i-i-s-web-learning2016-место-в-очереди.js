import Ember from 'ember';
import DS from 'ember-data';
import { Projection } from 'ember-flexberry-data';
export let Model = Ember.Mixin.create({
  номер: DS.attr('number'),
  датаВыдачи: DS.attr('date'),
  датаОбслуживания: DS.attr('date'),
  обслужено: DS.attr('boolean'),
  клиентСтр: DS.attr('string'),
  /**
    Non-stored property.

    @property очередьСтр
  */
  очередьСтр: DS.attr('string'),
  /**
    Method to set non-stored property.
    Please, use code below in model class (outside of this mixin) otherwise it will be replaced during regeneration of models.
    Please, implement 'очередьСтрCompute' method in model class (outside of this mixin) if you want to compute value of 'очередьСтр' property.

    @method _очередьСтрCompute
    @private
    @example
      ```javascript
      _очередьСтрChanged: Ember.on('init', Ember.observer('очередьСтр', function() {
        Ember.run.once(this, '_очередьСтрCompute');
      }))
      ```
  */
  _очередьСтрCompute: function() {
    let result = (this.очередьСтрCompute && typeof this.очередьСтрCompute === 'function') ? this.очередьСтрCompute() : null;
    this.set('очередьСтр', result);
  },
  /**
    Non-stored property.

    @property очередьПредикт
  */
  очередьПредикт: DS.attr('string'),
  /**
    Method to set non-stored property.
    Please, use code below in model class (outside of this mixin) otherwise it will be replaced during regeneration of models.
    Please, implement 'очередьПредиктCompute' method in model class (outside of this mixin) if you want to compute value of 'очередьПредикт' property.

    @method _очередьПредиктCompute
    @private
    @example
      ```javascript
      _очередьПредиктChanged: Ember.on('init', Ember.observer('очередьПредикт', function() {
        Ember.run.once(this, '_очередьПредиктCompute');
      }))
      ```
  */
  _очередьПредиктCompute: function() {
    let result = (this.очередьПредиктCompute && typeof this.очередьПредиктCompute === 'function') ? this.очередьПредиктCompute() : null;
    this.set('очередьПредикт', result);
  },
  клиент: DS.belongsTo('i-i-s-web-learning2016-клиент', { inverse: null, async: false }),
  очередь: DS.belongsTo('i-i-s-web-learning2016-очередь', { inverse: 'местоВОчереди', async: false }),
  getValidations: function () {
    let parentValidations = this._super();
    let thisValidations = {
      очередь: { presence: true }
    };
    return Ember.$.extend(true, {}, parentValidations, thisValidations);
  },
  init: function () {
    this.set('validations', this.getValidations());
    this._super.apply(this, arguments);
  }
});
export let defineProjections = function (modelClass) {
  modelClass.defineProjection('МестоВОчередиD', 'i-i-s-web-learning2016-место-в-очереди', {
    номер: Projection.attr(''),
    клиент: Projection.belongsTo('i-i-s-web-learning2016-клиент', '', {
      наименование: Projection.attr('', { hidden: true })
    }, { displayMemberPath: 'наименование' }),
    клиентСтр: Projection.attr('', { hidden: true }),
    датаВыдачи: Projection.attr('Дата выдачи'),
    датаОбслуживания: Projection.attr('Дата обслуживания'),
    очередь: Projection.belongsTo('i-i-s-web-learning2016-очередь', '', {

    }, { hidden: true })
  });
  modelClass.defineProjection('МестоВОчередиL', 'i-i-s-web-learning2016-место-в-очереди', {
    очередь: Projection.belongsTo('i-i-s-web-learning2016-очередь', '', {
      наименование: Projection.attr('Очередь')
    }, { hidden: true }),
    номер: Projection.attr('Номер'),
    клиентСтр: Projection.attr('Клиент'),
    клиент: Projection.belongsTo('i-i-s-web-learning2016-клиент', '', {
      наименование: Projection.attr('Клиент', { hidden: true }),
      тип: Projection.belongsTo('i-i-s-web-learning2016-тип-клиента', '', {
        наименование: Projection.attr('Тип клиента')
      }, { hidden: true })
    }, { hidden: true }),
    очередьСтр: Projection.attr('', { hidden: true })
  });
  modelClass.defineProjection('МестоВОчередиПредикт', 'i-i-s-web-learning2016-место-в-очереди', {
    очередь: Projection.belongsTo('i-i-s-web-learning2016-очередь', '', {
      наименование: Projection.attr('Очередь', { hidden: true })
    }, { hidden: true }),
    номер: Projection.attr('Номер', { hidden: true }),
    клиентСтр: Projection.attr('Клиент', { hidden: true }),
    клиент: Projection.belongsTo('i-i-s-web-learning2016-клиент', '', {
      тип: Projection.belongsTo('i-i-s-web-learning2016-тип-клиента', '', {
        наименование: Projection.attr('Тип клиента', { hidden: true })
      }, { hidden: true })
    }, { hidden: true }),
    очередьПредикт: Projection.attr('')
  });
};
