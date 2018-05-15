import { Serializer as ОперацияSerializer } from
  '../mixins/regenerated/serializers/i-i-s-web-learning2016-операция';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ОперацияSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
