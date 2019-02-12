//ALLPRODUCTS.HTML
var prod = {
  product: [
    {
      prodName: "Car Insurance",
      prodSummary:
        "Car insurance is an arrangement in which you pay money to a company, and they pay money to you if you have an accident in your car or if your car is stolen."
    },
    {
      prodName: "Home Insurance",
      prodSummary:
        "Homeowners insurance is a form of property insurance that covers losses and damages to an individual's house and to assets in the home. Homeowners insurance also provides liability coverage against accidents in the home or on the property"
    },
    {
      prodName: "Travel Insurance",
      prodSummary:
        "Travel insurance is insurance coverage for risks associated with traveling such as loss of luggage, delays, and death or injury while in a foreign country. ... Travel insurance is insurance coverage for risks associated with traveling such as loss of luggage, delays, and death or injury while in a foreign country."
    },
    {
      prodName: "Multicar Insurance",
      prodSummary:
        "A multi-car insurance policy can usually cover up to five cars, and offers all the same benefits as regular car insurance. The only difference is that the same policy covers more than one car, and insures will give you a discount for insuring multiple vehicles with them."
    }
  ]
};

// $(document).ready(function() {

//   const contentful = require("contentful");
//   const client = contentful.createClient({
//     space: "mt5nyvauqlk8",     // space ID,project folder in Contentful terms
//     accessToken: "db6e8fe238a42d8a3219dca211d985323d1ebd98e8856e896fafc040c76a61bc" // access token for this space.
//   });
//   client   //API call will request entry with the specified ID from the space defined at the top, using a space-specific access token.
//     .getEntry("5PeGS2SoZGSa4GuiQsigQu")
//     .then(entry => console.log('entries here',entry))
//     .catch(err => console.log(err));
// });


$(document).ready(function() {
  //for Other Products
  var productTemplate = $("#prodList-template").html();
  var compileProdList = Handlebars.compile(productTemplate);
  $(".prodList-container").html(compileProdList(prod));
});























// {
// 	"product": [
// 		{
// 			"prodName": "Car Insurance",
// 			"prodSummary": "Car insurance is an arrangement in which you pay money to a company, and they pay money to you if you have an accident in your car or if your car is stolen."
// 		},
// 		{
// 			"prodName": "Home Insurance",
// 			"prodSummary": "Homeowners insurance is a form of property insurance that covers losses and damages to an individual's house and to assets in the home. Homeowners insurance also provides liability coverage against accidents in the home or on the property."
// 		},
// 		{
// 			"prodName": "Travel Insurance Insurance",
// 			"prodSummary": "Travel insurance is insurance coverage for risks associated with traveling such as loss of luggage, delays, and death or injury while in a foreign country. ... Travel insurance is insurance coverage for risks associated with traveling such as loss of luggage, delays, and death or injury while in a foreign country."
// 		},
// 		{
// 			"prodName": "Multi-Car Insurance",
// 			"prodSummary": "A multi-car insurance policy can usually cover up to five cars, and offers all the same benefits as regular car insurance. The only difference is that the same policy covers more than one car, and insures will give you a discount for insuring multiple vehicles with them."
// 		}
//   ],
//   "homeLeftSection": {
    
// }
