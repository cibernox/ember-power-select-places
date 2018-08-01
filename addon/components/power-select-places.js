import Component from "@ember/component";
import layout from "../templates/components/power-select-places";
import EmberObject from '@ember/object';
import { task, timeout } from 'ember-concurrency';

export default Component.extend({
  layout,

  init(...args) {
    this._super(...args);
    this.placesService = new google.maps.places.PlacesService(document.createElement('div'));
  },

  actions: {
    selectPlace(place) {
      if (place) {
        var request = { placeId: place.place_id };

        const callback = (place, status) =>  {
          if (status == google.maps.places.PlacesServiceStatus.OK) {
            const selectedPlace = this._setPlaceAttrs(place);
            this.setProperties({ selectedPlace, selected: place});
          }
        };
        this.get('placesService').getDetails(request, callback);
      } else {
        let selected, selectedPlace;
        this.setProperties({ selected, selectedPlace });
      }
    }
  },

  searchPlacesTask: task(function*(query) {
    yield timeout(300);
    const callback = (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        this.set('places', results);
      }
    }
    this.get('placesService').textSearch({ query } , callback);
  }),

  _setPlaceAttrs(place) {
    const placeObj = EmberObject.create();
    place.address_components.forEach(c => placeObj.set(c.types[0], c.long_name));
    return placeObj;
  }
});
