import Application from 'test-app-fastboot/app';
import config from 'test-app-fastboot/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
