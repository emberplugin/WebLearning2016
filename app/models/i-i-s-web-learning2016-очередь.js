import { Model as ОчередьMixin, defineProjections } from
  '../mixins/regenerated/models/i-i-s-web-learning2016-очередь';
import { Projection } from 'ember-flexberry-data';
import { Offline } from 'ember-flexberry-data';
let Model = Projection.Model.extend(Offline.ModelMixin, ОчередьMixin, {

});
defineProjections(Model);
export default Model;
