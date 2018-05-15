import EditFormController from 'ember-flexberry/controllers/edit-form';

export default EditFormController.extend({
  parentRoute: 'i-i-s-web-learning2016-очередь-l',

  getCellComponent(attr, bindingPath, model) {
    let cellComponent = this._super(...arguments);
    if (attr.kind === 'belongsTo') {
      switch (`${model.modelName}+${bindingPath}`) {
        case 'i-i-s-web-learning2016-место-в-очереди+клиент':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'наименование',
            required: false,
            relationName: 'клиент',
            projection: 'КлиентL',
            autocomplete: true,
          };
          break;

      }
    }

    return cellComponent;
  },
});
