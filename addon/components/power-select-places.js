import Component from "@ember/component";
import layout from "../templates/components/power-select-places";

export default Component.extend({
  layout,

  init(...args) {
    this._super(...args);
    this.names = [
      {
        id: 1,
        streetNumber: "",
        streetName: "",
        zipcode: "78350",
        city: "Jouy-en-Josas",
        state: "Île-de-France",
        country: "France"
      }, {
        id: 2,
        streetNumber: "W2119",
        streetName: "U.S. 2",
        city: "Wilson",
        state: "MI",
        country: "USA"
      }, {
        id: 2,
        streetNumber: "W2377",
        streetName: "U.S. 10",
        city: "Brillion",
        state: "WI",
        country: "USA"
      }, {
        id: 2,
        streetNumber: "w2152",
        streetName: "U.S. 14",
        city: "Janesville",
        state: "WI",
        country: "USA"
      }
    ];
  }
});
