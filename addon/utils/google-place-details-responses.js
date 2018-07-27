const autocompleteResponces = {
  status: "OK",
  predictions: [
    {
      description: "Paris, France",
      id: "691b237b0322f28988f3ce03e321ff72a12167fd",
      matched_substrings: [
        {
          length: 5,
          offset: 0
        }
      ],
      place_id: "ChIJD7fiBh9u5kcRYJSMaMOCCwQ",
      reference:
        "CjQlAAAA_KB6EEceSTfkteSSF6U0pvumHCoLUboRcDlAH05N1pZJLmOQbYmboEi0SwXBSoI2EhAhj249tFDCVh4R-PXZkPK8GhTBmp_6_lWljaf1joVs1SH2ttB_tw",
      terms: [
        {
          offset: 0,
          value: "Paris"
        },
        {
          offset: 7,
          value: "France"
        }
      ],
      types: ["locality", "political", "geocode"]
    },
    {
      description: "Paris Avenue, Earlwood, New South Wales, Australia",
      id: "359a75f8beff14b1c94f3d42c2aabfac2afbabad",
      matched_substrings: [
        {
          length: 5,
          offset: 0
        }
      ],
      place_id: "ChIJrU3KAHG6EmsR5Uwfrk7azrI",
      reference:
        "CkQ2AAAARbzLE-tsSQPgwv8JKBaVtbjY48kInQo9tny0k07FOYb3Z_z_yDTFhQB_Ehpu-IKhvj8Msdb1rJlX7xMr9kfOVRIQVuL4tOtx9L7U8pC0Zx5bLBoUTFbw9R2lTn_EuBayhDvugt8T0Oo",
      terms: [
        {
          offset: 0,
          value: "Paris Avenue"
        },
        {
          offset: 14,
          value: "Earlwood"
        },
        {
          offset: 24,
          value: "New South Wales"
        },
        {
          offset: 41,
          value: "Australia"
        }
      ],
      types: ["route", "geocode"]
    },
    {
      description: "Paris Street, Carlton, New South Wales, Australia",
      id: "bee539812eeda477dad282bcc8310758fb31d64d",
      matched_substrings: [
        {
          length: 5,
          offset: 0
        }
      ],
      place_id: "ChIJCfeffMi5EmsRp7ykjcnb3VY",
      reference:
        "CkQ1AAAAAERlxMXkaNPLDxUJFLm4xkzX_h8I49HvGPvmtZjlYSVWp9yUhQSwfsdveHV0yhzYki3nguTBTVX2NzmJDukq9RIQNcoFTuz642b4LIzmLgcr5RoUrZhuNqnFHegHsAjtoUUjmhy4_rA",
      terms: [
        {
          offset: 0,
          value: "Paris Street"
        },
        {
          offset: 14,
          value: "Carlton"
        },
        {
          offset: 23,
          value: "New South Wales"
        },
        {
          offset: 40,
          value: "Australia"
        }
      ],
      types: ["route", "geocode"]
    }
  ]
};

const detailsResponces = [
  {
    html_attributions: [],
    result: {
      address_components: [
        {
          long_name: "Paris",
          short_name: "Paris",
          types: ["city"]
        },
        {
          long_name: "France",
          short_name: "FR",
          types: ["country", "political"]
        }
      ],
      formatted_address: "Paris, France",
      id: "4f89212bf76dde31f092cfc14d7506555d85b5c7",
      place_id: "ChIJD7fiBh9u5kcRYJSMaMOCCwQ"
    },
    status: "OK"
  },
  {
    html_attributions: [],
    result: {
      address_components: [
        {
          long_name: "Paris Avenue",
          short_name: "Paris Av",
          types: ["route"]
        },
        {
          long_name: "Earlwood",
          short_name: "Earlwood",
          types: ["locality", "political"]
        },
        {
          long_name: "New South Wales",
          short_name: "NSW",
          types: ["administrative_area_level_1", "political"]
        },
        {
          long_name: "Australia",
          short_name: "AU",
          types: ["country", "political"]
        }
      ],
      formatted_address: "Paris Avenue, Earlwood, New South Wales, Australia",
      id: "4f89212bf76dde31f092cfc14d7506555d85b5c8",
      place_id: "ChIJrU3KAHG6EmsR5Uwfrk7azrI"
    },
    status: "OK"
  },
  {
    html_attributions: [],
    result: {
      address_components: [
        {
          long_name: "Paris Street",
          short_name: "Paris St",
          types: ["route"]
        },
        {
          long_name: "Carlton",
          short_name: "Carlton",
          types: ["locality", "political"]
        },
        {
          long_name: "New South Wales",
          short_name: "NSW",
          types: ["administrative_area_level_1", "political"]
        },
        {
          long_name: "Australia",
          short_name: "AU",
          types: ["country", "political"]
        }
      ],
      formatted_address: "Paris Street, Carlton, New South Wales, Australia",
      id: "4f89212bf76dde31f092cfc14d7506555d85b5c8",
      place_id: "ChIJCfeffMi5EmsRp7ykjcnb3VY"
    },
    status: "OK"
  }
];

export { autocompleteResponces, detailsResponces };
