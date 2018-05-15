import { Serializer as МестоВОчередиSerializer } from
  '../mixins/regenerated/serializers/i-i-s-web-learning2016-место-в-очереди';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(МестоВОчередиSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
