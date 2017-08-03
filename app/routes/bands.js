import Ember from 'ember';

var Band = Ember.Object.extend({
  name: ''
});

export default Ember.Route.extend({
  model: function () {
    var ledZeppelin = { name: 'Led Zeppelin' };
    var pearlJam = { name: 'Pearl Jam' };
    var fooFighters = { name: 'Foo Fighters' };

    return [ledZeppelin, pearlJam, fooFighters].map(band => Band.create(band));
  }
});
