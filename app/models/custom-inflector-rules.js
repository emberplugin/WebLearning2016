import Inflector from 'ember-inflector';

const inflector = Inflector.inflector;

inflector.irregular('должность', 'Должностьs');
inflector.irregular('операции', 'Операцииs');
inflector.irregular('оператор', 'Операторs');
inflector.irregular('операция', 'Операцияs');
inflector.irregular('очереди', 'Очередиs');
inflector.irregular('очередь', 'Очередьs');
inflector.irregular('клиента', 'Клиентаs');
inflector.irregular('клиент', 'Клиентs');

export default {};
