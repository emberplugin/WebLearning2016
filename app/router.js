import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-web-learning2016-test-место-в-очереди-l');
  this.route('null',
  { path: 'null/:id' });
  this.route('null.new',
  { path: 'null/new' });
  this.route('i-i-s-web-learning2016-вид-операции-l');
  this.route('i-i-s-web-learning2016-вид-операции-e',
  { path: 'i-i-s-web-learning2016-вид-операции-e/:id' });
  this.route('i-i-s-web-learning2016-вид-операции-e.new',
  { path: 'i-i-s-web-learning2016-вид-операции-e/new' });
  this.route('i-i-s-web-learning2016-должность-l');
  this.route('i-i-s-web-learning2016-должность-e',
  { path: 'i-i-s-web-learning2016-должность-e/:id' });
  this.route('i-i-s-web-learning2016-должность-e.new',
  { path: 'i-i-s-web-learning2016-должность-e/new' });
  this.route('i-i-s-web-learning2016-клиент-l');
  this.route('i-i-s-web-learning2016-клиент-e',
  { path: 'i-i-s-web-learning2016-клиент-e/:id' });
  this.route('i-i-s-web-learning2016-клиент-e.new',
  { path: 'i-i-s-web-learning2016-клиент-e/new' });
  this.route('i-i-s-web-learning2016-оператор-l');
  this.route('i-i-s-web-learning2016-оператор-e',
  { path: 'i-i-s-web-learning2016-оператор-e/:id' });
  this.route('i-i-s-web-learning2016-оператор-e.new',
  { path: 'i-i-s-web-learning2016-оператор-e/new' });
  this.route('i-i-s-web-learning2016-операция-l');
  this.route('i-i-s-web-learning2016-операция-e',
  { path: 'i-i-s-web-learning2016-операция-e/:id' });
  this.route('i-i-s-web-learning2016-операция-e.new',
  { path: 'i-i-s-web-learning2016-операция-e/new' });
  this.route('i-i-s-web-learning2016-очередь-l');
  this.route('i-i-s-web-learning2016-очередь-e',
  { path: 'i-i-s-web-learning2016-очередь-e/:id' });
  this.route('i-i-s-web-learning2016-очередь-e.new',
  { path: 'i-i-s-web-learning2016-очередь-e/new' });
  this.route('i-i-s-web-learning2016-тип-клиента-l');
  this.route('i-i-s-web-learning2016-тип-клиента-e',
  { path: 'i-i-s-web-learning2016-тип-клиента-e/:id' });
  this.route('i-i-s-web-learning2016-тип-клиента-e.new',
  { path: 'i-i-s-web-learning2016-тип-клиента-e/new' });
  this.route('i-i-s-web-learning2016-тип-очереди-l');
  this.route('i-i-s-web-learning2016-тип-очереди-e',
  { path: 'i-i-s-web-learning2016-тип-очереди-e/:id' });
  this.route('i-i-s-web-learning2016-тип-очереди-e.new',
  { path: 'i-i-s-web-learning2016-тип-очереди-e/new' });
});

export default Router;
