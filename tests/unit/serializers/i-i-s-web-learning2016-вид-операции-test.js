import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-web-learning2016-вид-операции', 'Unit | Serializer | i-i-s-web-learning2016-вид-операции', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-web-learning2016-вид-операции',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'model:i-i-s-web-learning2016-вид-операции',
    'model:i-i-s-web-learning2016-должность',
    'model:i-i-s-web-learning2016-клиент',
    'model:i-i-s-web-learning2016-место-в-очереди',
    'model:i-i-s-web-learning2016-оператор',
    'model:i-i-s-web-learning2016-операция',
    'model:i-i-s-web-learning2016-очередь',
    'model:i-i-s-web-learning2016-тип-клиента',
    'model:i-i-s-web-learning2016-тип-очереди'
  ]
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
