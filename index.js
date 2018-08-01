'use strict';

module.exports = {
  name: 'ember-power-select-places',

  contentFor: function(type, config) {
    if (type === 'head') {
      const apiKey = config['googlePlacesApiKey'];
      const src = `https://maps.googleapis.com/maps/api/js?key=&${apiKey}&libraries=places`;
      return `<script type="text/javascript" src="${src}" async defer></script>`;
    }
  }
};
