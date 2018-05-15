import { Serializer as ВидОперацииSerializer } from
  '../mixins/regenerated/serializers/i-i-s-web-learning2016-вид-операции';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ВидОперацииSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
