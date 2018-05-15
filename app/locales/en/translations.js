import Ember from 'ember';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISWebLearning2016TestМестоВОчередиLForm from './forms/i-i-s-web-learning2016-test-место-в-очереди-l';
import IISWebLearning2016ВидОперацииLForm from './forms/i-i-s-web-learning2016-вид-операции-l';
import IISWebLearning2016ДолжностьLForm from './forms/i-i-s-web-learning2016-должность-l';
import IISWebLearning2016КлиентLForm from './forms/i-i-s-web-learning2016-клиент-l';
import IISWebLearning2016ОператорLForm from './forms/i-i-s-web-learning2016-оператор-l';
import IISWebLearning2016ОперацияLForm from './forms/i-i-s-web-learning2016-операция-l';
import IISWebLearning2016ОчередьLForm from './forms/i-i-s-web-learning2016-очередь-l';
import IISWebLearning2016ТипКлиентаLForm from './forms/i-i-s-web-learning2016-тип-клиента-l';
import IISWebLearning2016ТипОчередиLForm from './forms/i-i-s-web-learning2016-тип-очереди-l';
import IISWebLearning2016ВидОперацииEForm from './forms/i-i-s-web-learning2016-вид-операции-e';
import IISWebLearning2016ДолжностьEForm from './forms/i-i-s-web-learning2016-должность-e';
import IISWebLearning2016КлиентEForm from './forms/i-i-s-web-learning2016-клиент-e';
import IISWebLearning2016ОператорEForm from './forms/i-i-s-web-learning2016-оператор-e';
import IISWebLearning2016ОперацияEForm from './forms/i-i-s-web-learning2016-операция-e';
import IISWebLearning2016ОчередьEForm from './forms/i-i-s-web-learning2016-очередь-e';
import IISWebLearning2016ТипКлиентаEForm from './forms/i-i-s-web-learning2016-тип-клиента-e';
import IISWebLearning2016ТипОчередиEForm from './forms/i-i-s-web-learning2016-тип-очереди-e';
import IISWebLearning2016ВидОперацииModel from './models/i-i-s-web-learning2016-вид-операции';
import IISWebLearning2016ДолжностьModel from './models/i-i-s-web-learning2016-должность';
import IISWebLearning2016КлиентModel from './models/i-i-s-web-learning2016-клиент';
import IISWebLearning2016МестоВОчередиModel from './models/i-i-s-web-learning2016-место-в-очереди';
import IISWebLearning2016ОператорModel from './models/i-i-s-web-learning2016-оператор';
import IISWebLearning2016ОперацияModel from './models/i-i-s-web-learning2016-операция';
import IISWebLearning2016ОчередьModel from './models/i-i-s-web-learning2016-очередь';
import IISWebLearning2016ТипКлиентаModel from './models/i-i-s-web-learning2016-тип-клиента';
import IISWebLearning2016ТипОчередиModel from './models/i-i-s-web-learning2016-тип-очереди';

const translations = {};
Ember.$.extend(true, translations, EmberFlexberryTranslations);

Ember.$.extend(true, translations, {
  models: {
    'i-i-s-web-learning2016-вид-операции': IISWebLearning2016ВидОперацииModel,
    'i-i-s-web-learning2016-должность': IISWebLearning2016ДолжностьModel,
    'i-i-s-web-learning2016-клиент': IISWebLearning2016КлиентModel,
    'i-i-s-web-learning2016-место-в-очереди': IISWebLearning2016МестоВОчередиModel,
    'i-i-s-web-learning2016-оператор': IISWebLearning2016ОператорModel,
    'i-i-s-web-learning2016-операция': IISWebLearning2016ОперацияModel,
    'i-i-s-web-learning2016-очередь': IISWebLearning2016ОчередьModel,
    'i-i-s-web-learning2016-тип-клиента': IISWebLearning2016ТипКлиентаModel,
    'i-i-s-web-learning2016-тип-очереди': IISWebLearning2016ТипОчередиModel,
  },

  'application-name': 'Application caption',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please have a cold beer...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            caption: '',
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Application caption',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Application caption',
          title: 'Application title'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'рабочий-стол': {
          caption: 'рабочий-стол',
          title: 'рабочий-стол',
          'i-i-s-web-learning2016-клиент-l': {
            caption: 'i-i-s-web-learning2016-клиент-l',
            title: 'i-i-s-web-learning2016-клиент-l',

          },
          'i-i-s-web-learning2016-очередь-l': {
            caption: 'i-i-s-web-learning2016-очередь-l',
            title: 'i-i-s-web-learning2016-очередь-l',

          },
          'i-i-s-web-learning2016-операция-l': {
            caption: 'i-i-s-web-learning2016-операция-l',
            title: 'i-i-s-web-learning2016-операция-l',

          },
          операторы: {
            caption: 'операторы',
            title: 'операторы',
            'i-i-s-web-learning2016-оператор-l': {
              caption: 'i-i-s-web-learning2016-оператор-l',
              title: 'i-i-s-web-learning2016-оператор-l',

            },
            'i-i-s-web-learning2016-должность-l': {
              caption: 'i-i-s-web-learning2016-должность-l',
              title: 'i-i-s-web-learning2016-должность-l',

            }
          },
          справочники: {
            caption: 'справочники',
            title: 'справочники',
            'i-i-s-web-learning2016-вид-операции-l': {
              caption: 'i-i-s-web-learning2016-вид-операции-l',
              title: 'i-i-s-web-learning2016-вид-операции-l',

            },
            'i-i-s-web-learning2016-тип-клиента-l': {
              caption: 'i-i-s-web-learning2016-тип-клиента-l',
              title: 'i-i-s-web-learning2016-тип-клиента-l',

            },
            'i-i-s-web-learning2016-тип-очереди-l': {
              caption: 'i-i-s-web-learning2016-тип-очереди-l',
              title: 'i-i-s-web-learning2016-тип-очереди-l',

            }
          }
        },
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-web-learning2016-test-место-в-очереди-l': IISWebLearning2016TestМестоВОчередиLForm,
    'i-i-s-web-learning2016-вид-операции-l': IISWebLearning2016ВидОперацииLForm,
    'i-i-s-web-learning2016-должность-l': IISWebLearning2016ДолжностьLForm,
    'i-i-s-web-learning2016-клиент-l': IISWebLearning2016КлиентLForm,
    'i-i-s-web-learning2016-оператор-l': IISWebLearning2016ОператорLForm,
    'i-i-s-web-learning2016-операция-l': IISWebLearning2016ОперацияLForm,
    'i-i-s-web-learning2016-очередь-l': IISWebLearning2016ОчередьLForm,
    'i-i-s-web-learning2016-тип-клиента-l': IISWebLearning2016ТипКлиентаLForm,
    'i-i-s-web-learning2016-тип-очереди-l': IISWebLearning2016ТипОчередиLForm,
    'i-i-s-web-learning2016-вид-операции-e': IISWebLearning2016ВидОперацииEForm,
    'i-i-s-web-learning2016-должность-e': IISWebLearning2016ДолжностьEForm,
    'i-i-s-web-learning2016-клиент-e': IISWebLearning2016КлиентEForm,
    'i-i-s-web-learning2016-оператор-e': IISWebLearning2016ОператорEForm,
    'i-i-s-web-learning2016-операция-e': IISWebLearning2016ОперацияEForm,
    'i-i-s-web-learning2016-очередь-e': IISWebLearning2016ОчередьEForm,
    'i-i-s-web-learning2016-тип-клиента-e': IISWebLearning2016ТипКлиентаEForm,
    'i-i-s-web-learning2016-тип-очереди-e': IISWebLearning2016ТипОчередиEForm,
  },

});

export default translations;
