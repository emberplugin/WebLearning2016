import { Model as КлиентMixin, defineProjections } from
  '../mixins/regenerated/models/i-i-s-web-learning2016-клиент';
import { Projection } from 'ember-flexberry-data';
import { Offline } from 'ember-flexberry-data';
let Model = Projection.Model.extend(Offline.ModelMixin, КлиентMixin, {

});
defineProjections(Model);
export default Model;
