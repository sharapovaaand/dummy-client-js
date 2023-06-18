# dummy-client-js
A simple client for interacting with [DummyJSON](https://dummyjson.com/), a free fake REST API.

# Features
```dummy-client-js``` allows you to:
* List all of the products in a specified product category
* Get products by ID
* Add products 
* Delete products
* Use all the functions listed above as an authenticated user (bearer authentication only)

# Usage
To start using ```dummy-client-js```:
1. Clone the repository to your local machine
2. Navigate to the directory where you cloned the repository
3. Install the project dependencies by running the ```npm install```command
4. Start the ```clinet.js``` by running the ```node client.js``` command

You can change the ```clientExample()``` function in ```node client.js``` to modify client functionality.

# Example
Adding new products from file ``new_products.json``.

```javascript
const newProducts = require("./new_products");

/*...*/

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
| id  | Number | Yes  | The ID of the product  |
| auth | Boolean  | No | If True, access the resource as an authorized user   |

## addProduct
Add a product. 
> **Note**
> 
> Since DummyJSON is intended only for testing purposes, this function simulates a POST request, but does not make changes to the DummyJSON database. For more information, see the [DummyJSON documentation](https://dummyjson.com/docs/products#add).
```javascript
addProduct(body, auth = false)
```
| Name  | Type | Required | Description |
| ------------- | ------------- |------------- | ------------- |
| body  | Object | Yes  | A product to add  |
| auth | Boolean  | No | If True, access the resource as an authorized user   |
## deleteProduct
Delete a product. 
> **Note**
>
> Since DummyJSON is intended only for testing purposes, this function simulates a DELETE request, but does not make changes to the DummyJSON database.  For more information, see the [DummyJSON documentation](https://dummyjson.com/docs/products#delete).
```javascript
deleteProduct(id, auth = false)
```
| Name  | Type | Required | Description |
| ------------- | ------------- |------------- | ------------- |
| id  | Number | Yes  | The ID of the product  |
| auth | Boolean  | No | If True, access the resource as an authorized user   |

