const settings = {
  "name": "my-first-frontity-project",
  "state": {
    "frontity": {
      "url": "https://test.frontity.org",
      "title": "SuperMetrics Store and Blog",
      "description": "Just for testing purposes"
    }
  },
  "packages": [
    {
      "name": "@frontity/supermetrics-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
            [
              "Nature",
              "/category/nature/"
            ],
            [
              "Travel",
              "/category/travel/"
            ],
            [
              "Pictures",
              "/picture/nature/"
            ]
          ],
          "featured": {
            "showOnList": true,
            "showOnPost": true
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "http://supermetricswp.slavisa.us",
          "postTypes": [
            {
              type: "products",
              endpoint: "products",
              archive: "/products_archive"
            }
          ]
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
