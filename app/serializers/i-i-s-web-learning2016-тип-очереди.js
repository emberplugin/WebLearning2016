import { Serializer as ТипОчередиSerializer } from
  '../mixins/regenerated/serializers/i-i-s-web-learning2016-тип-очереди';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ТипОчередиSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
