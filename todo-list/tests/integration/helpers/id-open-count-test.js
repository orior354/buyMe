import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('id-open-count', 'helper:id-open-count', {
  integration: true
});

// Replace this with your real tests.
test('it renders', function(assert) {
  this.set('inputValue', '1234');

  this.render(hbs`{{id-open-count inputValue}}`);

  assert.equal(this.$().text().trim(), '1234');
});
