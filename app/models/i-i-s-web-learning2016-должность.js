import { Model as ДолжностьMixin, defineProjections } from
  '../mixins/regenerated/models/i-i-s-web-learning2016-должность';
import { Projection } from 'ember-flexberry-data';
import { Offline } from 'ember-flexberry-data';
let Model = Projection.Model.extend(Offline.ModelMixin, ДолжностьMixin, {

});
defineProjections(Model);
export default Model;
