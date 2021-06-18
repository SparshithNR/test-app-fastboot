import Route from '@ember/routing/route';

export default class TestRoute extends Route {
  model() {
    document.getElementById('app');
  }
}
