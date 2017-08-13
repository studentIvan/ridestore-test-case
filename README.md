# Ridestore javascript front-end test case

CircleCI status: [![CircleCI](https://circleci.com/gh/studentIvan/ridestore-test-case.svg?style=svg)](https://circleci.com/gh/studentIvan/ridestore-test-case)

## Assignment goal and Description
Create a single-page application in AngularJS (1.x) that displays a list of
Ridestore Products.

- The code should take half a day to a day to write (4h).

## Expectations

 - Use AngularJS (1.x) with best practices approach from one of the reputed code-styles
 ([John Papa](https://github.com/johnpapa/angular-styleguide/tree/master/a1) or
[Todd Motto](https://github.com/toddmotto/angularjs-styleguide))
 - Use Angular 1.5+ components
 - [Clean Code](https://github.com/ryanmcdermott/clean-code-javascript)
 - Code readability and documentation
 - Clear commits ([atomic](https://www.freshconsulting.com/atomic-commits/), [good messages](https://chris.beams.io/posts/git-commit/), etc.)

### Too Easy? Bonus:
  - 100% test coverage
  - Responsive styling (can be inspired by [our product list page](https://dev.ridestore.com/streetwear/clothing/t-shirts))
  - Try to achieve the highest [lighthouse](https://developers.google.com/web/tools/lighthouse/) level as possible.

## Lets get started...

- Start by fork this repository and give access to @linushellberg and @batista.

### Web service request return

A call to `GET https://dev.ridestore.com/rest-api/v2/categories/208?lang=com`
will return the following JSON response (removed the irrelevant values):

```
{
  "category_info": {
    "name": "T-shirts",
    "meta_title": "Ridestore - T-shirts Buy online here!",
    "meta_description": "Buy T-shirts at Ridestore.com - You always get free shipping, free returns and 30 days money back guarantee!",
    // ... others not relevant for this task
  },
  "products": [
    {
      "id": 280674,
      "brand": "Newsoul",
      "department": "Streetwear",
      "productype": "T-shirt",
      "shortname": "Bloom",
      "color": "Allover",
      "image": "D\/5\/D5439_1.jpg",
      "type_id": "configurable",
      "image_padding": "regular",
      "url_key": "newsoul-bloom-t-shirt-allover",
      "price": 29.9,
      "sale_price": null
    },
    // ... other products similar to the above
  ],
  "error": false,
  "status": 200,
  // ... others not relevant for this task
}
```

## Relevant fields:

 - `category_info`:
   - `meta_title`: should be displayed in page title.
   - `meta_description`: should be in the meta description tag.
 - `products`:
   - the product name should be displayed to the user in the format:
       - `brand + "shortname" + productype`
   - `price`: the product price
   - `sale_price`: the sale price (if available)
   - `image`: the product image (see note below regarding this field)

### Special attention to the product images

The product image should be prefixed with "https://ridestore.imgix.net/catalog/product/",
so in the example response above, for the first product image (`products[0].image`),
the `<img>` source would be "https://ridestore.imgix.net/catalog/product/D/2/D2980_11.jpg".
