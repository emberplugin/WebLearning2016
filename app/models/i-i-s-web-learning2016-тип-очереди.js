import { Model as ТипОчередиMixin, defineProjections } from
  '../mixins/regenerated/models/i-i-s-web-learning2016-тип-очереди';
import { Projection } from 'ember-flexberry-data';
import { Offline } from 'ember-flexberry-data';
let Model = Projection.Model.extend(Offline.ModelMixin, ТипОчередиMixin, {

});
defineProjections(Model);
export default Model;
