import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('dog-listing', 'Integration | Component | dog listing', {
  integration: true
});

test('it renders', function(assert) {
  this.set("dog", {
    name: "a",
    description: "b",
    imageUrl: "c",
    imageCaption: "d"
  });
  this.render(hbs`{{dog-listing dog=dog}}`);

  assert.equal(this.$("h3").text().trim(), 'a');
  assert.equal(this.$("p").text().trim(), 'b');
  assert.equal(this.$("img").attr("src").trim(), 'c');
  assert.equal(this.$("figcaption").text().trim(), 'd');
});
