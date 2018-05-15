import { Model as ВидОперацииMixin, defineProjections } from
  '../mixins/regenerated/models/i-i-s-web-learning2016-вид-операции';
import { Projection } from 'ember-flexberry-data';
import { Offline } from 'ember-flexberry-data';
let Model = Projection.Model.extend(Offline.ModelMixin, ВидОперацииMixin, {

});
defineProjections(Model);
export default Model;
