import { test } from 'qunit';
import moduleForAcceptance from 'barkwire/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | list dogs');

test('visiting /dogs', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/dogs');

    assert.equal(find(".dogs li").length, 3);
    assert.equal(find(".dogs li:nth-child(1) h3").text(), "Charles Barkley");
  });
});
