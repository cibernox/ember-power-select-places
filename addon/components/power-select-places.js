import Component from "@ember/component";
import layout from "../templates/components/power-select-places";
import { debounce } from "@ember/runloop";
import { autocompleteResponces, detailsResponces } from "../utils/google-place-details-responses";
import EmberObject from '@ember/object';

export default Component.extend({
  layout,

  actions: {
    searchPlaces(term) {
      debounce(this, this._setPlaces, term, 300);
    },

    selectPlace(place) {
      if (place) {
        const foundPlace = detailsResponces.find(detail => detail.result.place_id === place.place_id);
        const selectedPlace = this._setPlaceAttrs(foundPlace);
        this.setProperties({ selectedPlace, selected: place});
      } else {
        let selected, selectedPlace;
        this.setProperties({ selected, selectedPlace });
      }
    }
  },

  _setPlaces(term) {
    const matchedPlaces = autocompleteResponces.predictions
      .filter(p => p.description.toLowerCase().includes(term.toLowerCase()));
    this.set('places', matchedPlaces);
  },

  _setPlaceAttrs(place) {
    const placeObj = EmberObject.create();
    place.result.address_components.forEach(c => placeObj.set(c.types[0], c.long_name));
    return placeObj;
  }
});
