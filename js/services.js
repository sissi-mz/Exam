console.log("hey");

var data = {
  "skuId": "9cd69d65-3366-4966-bcb6-57fe20cc0a87",
  "skuServiceCategorys": [
    {
      "code": "garantie",
      "values": [
        {
          "skuId": "643e4116-db7e-4134-a3cc-1b0edc22222f",
          "sapId": "000000000001026577",
          "pimId": "000000000001026578",
          "label": "Garantie Réparation 5ans TV 501 à 700EU",
          "shortDescription": "Prolongez la garantie jusqu'à 5 ans",
          "longDescription": "Profitez de 5 ans* de tranquilité pour votre téléviseur ! - prise en charge des pièces, de la main d'oeuvre et du déplacement à domicilile(1) en cas de panne. Bénéficiez d'un accompagnement par nos experts (...) **voir les conditions de garantie : ici",
          "sellingPrice": {
            "displayPrice": {
              "amountWithVAT": 0,
              "amountWithoutVAT": 0
            }
          },
          "priceLowerBound": 0,
          "priceUpperBound": 99,
          "legalWarranty": 24,
          "merchandiseGroup": "07303005",
          "typology": "GARANTIE",
          "serviceManager": "ATM",
          "offerId": "d5140be3-bf5a-47a7-8ccb-b027768b6cbd"
        }
      ]
    },
    {
      "code": "assurance",
      "values": [
        {
          "skuId": "643e4116-db7e-4134-a3cc-1b0edc66666f",
          "offerId": "d5140be3-bf5a-47a7-8ccb-b222222b6cbd",
          "sapId": "66666",
          "pimId": "666666",
          "label": "Assurance Vol et Casse 1 an",
          "shortDescription": "Profitez de 5 ans",
          "longDescription": "Profitez de 5 ans de garantie",
          "sellingPrice": {
            "displayPrice": {
              "amountWithVAT": 789.9,
              "amountWithoutVAT": 755.9
            }
          },
          "priceLowerBound": 100,
          "priceUpperBound": 800,
          "legalWarranty": 24,
          "merchandiseGroup": "07303005",
          "typology": "ASSURANCE",
          "serviceManager": "ATM"
        }
      ]
    }
  ],
  "highlightService": {
    "skuId": "643e4116-db7e-4134-a3cc-1b0edc22222f",
    "offerId": "d5140be3-bf5a-47a7-8ccb-b027768b6cbd",
    "sapId": "44444",
    "pimId": "444444",
    "label": "Prolongez 5 ans",
    "shortDescription": "Profitez de 5 ans",
    "longDescription": "Profitez de 5 ans de garantie",
    "sellingPrice": {
      "displayPrice": {
        "amountWithVAT": 489.9,
        "amountWithoutVAT": 407.5
      }
    },
    "priceLowerBound": 300,
    "priceUpperBound": 499,
    "legalWarranty": 72,
    "merchandiseGroup": "07303005",
    "typology": "GARANTIE",
    "serviceManager": "ATM"
  },
  "legalWarranty": {
    "duration": 24,
    "includedMovement": true
  }
}

function mapServices(data) {
		var categories = []
		var services = []
		data.skuServiceCategorys.map((serviceCategory) => {
			serviceCategory.values.map(value => {
				var { label, sellingPrice } = value
				services.push({
					label: value.label,
					sellingPrice: value.sellingPrice
				})
			})
			categories.push({
				category: serviceCategory.code,
				items: services
			})
		})
	}
}

console.log(data)