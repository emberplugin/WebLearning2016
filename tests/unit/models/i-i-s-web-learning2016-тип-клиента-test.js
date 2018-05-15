import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-web-learning2016-тип-клиента', 'Unit | Model | i-i-s-web-learning2016-тип-клиента', {
  // Specify the other units that are required for this test.
  needs: [
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

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
