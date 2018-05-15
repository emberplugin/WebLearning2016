import { Serializer as ОчередьSerializer } from
  '../mixins/regenerated/serializers/i-i-s-web-learning2016-очередь';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ОчередьSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
