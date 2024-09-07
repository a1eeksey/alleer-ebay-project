const Ebay = require('ebay-node-api');

let ebay = new Ebay({
  clientID: 'Rostysla-Monitori-PRD-2abfbb41d-657fd9cd',
  clientSecret: 'PRD-abfbb41db217-d813-4093-bff8-4810',
  body: {
      grant_type: 'client_credentials',
  //you may need to define the oauth scope
  scope: 'https://api.ebay.com/oauth/api_scope'
  }
})

// Search individual element
const getListingById = async (req,res) => {
    const requestItemId = req.query.id;

    try {
        const token = ebay.getAccessToken()
        .then((data) => {

            ebay.getItem(`v1|${requestItemId}|0`).then((data) => {
                let filteredItemData = {
                    title: data.title ? data.title : 'N/A',
                    itemId: data.itemId ? data.itemId.split('|')[1] : 'N/A',
                    mainPicture: data.image ? data.image.imageUrl : 'N/A',
                    picturesArray:  data.additionalImages ? data.additionalImages.map(picture => picture.imageUrl) : 'N/A',
                    categoryName: data.categoryPath ? data.categoryPath : 'N/A',
                    condition: data.condition ? data.condition : 'N/A',
                    itemLocationObject: data.itemLocation ? data.itemLocation : 'N/A',
                    price: data.price ? data.price.value : 'N/A',
                    // color: data.color ? data.color : 'N/A',
                    // brand: data.brand ? data.brand : 'N/A',
                    sellerInfo: data.seller ? data.seller : 'N/A',
                    shippingOptions: data.shippingOptions ? data.shippingOptions : 'N/A',
                    shippingCost: data.shippingOptions ? data.shippingOptions[0].shippingCost.value : 'N/A',
                    shipRegionsIncluded: data.shipToLocations ? data.shipToLocations.regionIncluded.map(region => region.regionName + ', '): 'N/A',
                    shipRegionsExcluded: data.shipToLocations ? data.shipToLocations.regionExcluded.map(region => region.regionName) : 'N/A',
                    returnTerms: data.returnTerms ? data.returnTerms : 'N/A',
                    itemSpecifics: data.localizedAspects ? data.localizedAspects : 'N/A',
                    marketplaceId: data.listingMarketplaceId ? data.listingMarketplaceId : 'N/A'
                }

                res.status(200).json(filteredItemData);
                
            })
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({ error: 'Internal server error' });
    }
}

// const getMostWatchedItems = async (req, res) => {
//     try {
//         ebay.getMostWatchedItems({
//             maxResults: 3, // optional
//             categoryId: 267 // optional
//         }).then((data) => {
//             if (data.errorMessage) {
//                 console.log('Error:' + data.errorMessage);
//             }
//             console.log(JSON.stringify(data));
//         });
//     } catch (error) {
//         console.log(error);
//     }
// }


// Search elements by keywords
const searchListingsByKeywords = async (req, res) => {
    const requestKeywords = req.query.keywords;

    if (!requestKeywords) {
        return res.status(400).send({ error: 'Keywords are required' });
      }

      try {
        ebay.findItemsAdvanced({
            keywords: requestKeywords,
        }).then((data) => {

            if (!data || !data[0] || !data[0].searchResult || !data[0].searchResult[0] || !data[0].searchResult[0].item) {
                return res.status(404).send({ error: "No items found with the provided keywords" });
            }

            // handling cases when can't receive data by passing 'N/A' instead of data
            let itemsArray = data[0].searchResult[0].item.map(item => ({
                title: item.title ? item.title[0] : 'N/A',  
                pictureUrl: item.pictureURLLarge || 'N/A',  
                itemId: item.itemId ? item.itemId[0] : 'N/A',  
                priceUsd: item.sellingStatus ? item.sellingStatus[0].currentPrice[0].__value__ : 'N/A',  
                location: item.location ? item.location[0] : 'N/A', 
                listingType: item.listingInfo ? item.listingInfo[0].listingType[0] : 'N/A', 
                condition: item.condition && item.condition[0].conditionDisplayName ? item.condition[0].conditionDisplayName[0] : 'N/A',  
                returnsAccepted: item.returnsAccepted ? item.returnsAccepted[0] : 'N/A',  
                shippingType: item.shippingInfo && item.shippingInfo[0].shippingType ? item.shippingInfo[0].shippingType[0] : 'N/A', 
                handlingTime: item.shippingInfo && item.shippingInfo[0].handlingTime ? item.shippingInfo[0].handlingTime[0] : 'N/A'  
            }))
            
            res.status(200).json(itemsArray);
        });

      } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal server error' });
      }
};



module.exports = { searchListingsByKeywords, getListingById, };