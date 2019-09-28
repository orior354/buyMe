import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('id-done-count', 'helper:id-done-count', {
  integration: true
});

// Replace this with your real tests.
test('it renders', function(assert) {
  this.set('inputValue', '1234');

  this.render(hbs`{{id-done-count inputValue}}`);

  assert.equal(this.$().text().trim(), '1234');
});
