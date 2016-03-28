import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('announcements-mgmt', 'Integration | Component | announcements mgmt', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{announcements-mgmt}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#announcements-mgmt}}
      template block text
    {{/announcements-mgmt}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
