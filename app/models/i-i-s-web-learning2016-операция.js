import { Model as ОперацияMixin, defineProjections } from
  '../mixins/regenerated/models/i-i-s-web-learning2016-операция';
import { Projection } from 'ember-flexberry-data';
import { Offline } from 'ember-flexberry-data';
let Model = Projection.Model.extend(Offline.ModelMixin, ОперацияMixin, {

});
defineProjections(Model);
export default Model;
