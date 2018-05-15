import { Model as ТипКлиентаMixin, defineProjections } from
  '../mixins/regenerated/models/i-i-s-web-learning2016-тип-клиента';
import { Projection } from 'ember-flexberry-data';
import { Offline } from 'ember-flexberry-data';
let Model = Projection.Model.extend(Offline.ModelMixin, ТипКлиентаMixin, {

});
defineProjections(Model);
export default Model;
