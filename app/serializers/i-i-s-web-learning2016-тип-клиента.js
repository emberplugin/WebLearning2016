import { Serializer as ТипКлиентаSerializer } from
  '../mixins/regenerated/serializers/i-i-s-web-learning2016-тип-клиента';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ТипКлиентаSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
