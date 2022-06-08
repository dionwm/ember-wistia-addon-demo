import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Service | wistia', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let service = this.owner.lookup('service:wistia');
    assert.ok(service);
  });
});
