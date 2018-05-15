import { Model as МестоВОчередиMixin, defineProjections } from
  '../mixins/regenerated/models/i-i-s-web-learning2016-место-в-очереди';
import { Projection } from 'ember-flexberry-data';
import { Offline } from 'ember-flexberry-data';
let Model = Projection.Model.extend(Offline.ModelMixin, МестоВОчередиMixin, {

});
defineProjections(Model);
export default Model;
