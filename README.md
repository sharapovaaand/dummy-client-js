# dummy-client-js
A simple client for interating with [DummyJSON](https://dummyjson.com/), a free fake REST API.

# What can dummy-client-js do?
This version

# API Reference
## getCategory
Get all products of the specified category.
```javascript
getCategory(categoryName, auth = false)
```
| Name  | Type | Required | Description |
| ------------- | ------------- |------------- | ------------- |
| categoryName  | String | Yes  | The name of the category  |
| auth | Boolean  | No | If True, access the resource as an authorized user   |
## getProduct
Get a product by ID.
```javascript
getProduct(id, auth = false)
```
| Name  | Type | Required | Description |
| ------------- | ------------- |------------- | ------------- |
| id  | number | Yes  | The ID of the product  |
| auth | Boolean  | No | If True, access the resource as an authorized user   |

## addProduct
Add a product. 
> **Note**
> DummyJSON does not really 
```javascript
getProduct(id, auth = false)
```
| Name  | Type | Required | Description |
| ------------- | ------------- |------------- | ------------- |
| id  | number | Yes  | The ID of the product  |
| auth | Boolean  | No | If True, access the resource as an authorized user   |
## deleteProduct
Add a product. 
> **Note**
> DummyJSON does not really 
```javascript
getProduct(id, auth = false)
```
| Name  | Type | Required | Description |
| ------------- | ------------- |------------- | ------------- |
| id  | number | Yes  | The ID of the product  |
| auth | Boolean  | No | If True, access the resource as an authorized user   |

# Example
Adding new products from file ``new_products.json``.

```javascript
const newProducts = require("./new_products");

async function clientExample() {

const dummyApiCaller = new dummyApiCallerClass();
let product;

  for (i = 0; i < newProducts.products.length; i++) {
	  product = await dummyApiCaller.addProduct(newProducts.products[i])
	  console.log(product);
	  console.log(`\n`);
  }
}
```

