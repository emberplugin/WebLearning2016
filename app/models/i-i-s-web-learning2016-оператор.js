import { Model as ОператорMixin, defineProjections } from
  '../mixins/regenerated/models/i-i-s-web-learning2016-оператор';
import { Projection } from 'ember-flexberry-data';
import { Offline } from 'ember-flexberry-data';
let Model = Projection.Model.extend(Offline.ModelMixin, ОператорMixin, {

});
defineProjections(Model);
export default Model;
