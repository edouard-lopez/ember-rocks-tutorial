import Ember from 'ember';
var Song = Ember.Object.extend({
  title: '',
  rating: 0,
  band: ''
});
export default Ember.Route.extend({
  model: function() {
    var blackDog = { title: 'Black Dog', band: 'Led Zeppelin', rating: 3 };
    var yellowLedbetter = { title: 'Yellow Ledbetter', band: 'Pearl Jam', rating: 4 };
    var pretender = { title: 'The Pretender', band: 'Foo Fighters', rating: 2 };

    return [blackDog, yellowLedbetter, pretender].map(song => Song.create(song));
  }
});
