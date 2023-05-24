const querystring = require("querystring");
require('dotenv').config();
const newProducts = require("./new_products");
const testEndpoints = require("./endpoints");

class dummyApiCallerClass {

	async request(endpoint = "", options = {}) {
		let url = testEndpoints.root + endpoint;
		let headers = {
    	'Content-type': 'application/json'
  	};

  	let res = await fetch(url, options);
  	if (res.status == 200) {
    	let json = await res.json(); // (3)
    return json;
  	}

  	throw new Error(res.status);
	};

	// Get all products of a category
	getCategory(categoryName, auth = false) {
	  let url = testEndpoints.categories + categoryName;
	  let config = {
	   method: 'GET'
	  }
	  if (auth == true) {
	  	config.headers.Authorization = 'Bearer ' + process.env.TOKEN;
	  }
	  return this.request(url, config);
  };

  // Get a product by ID
	getProduct(id, auth = false) {
		let url = testEndpoints.signle_product + id;
		let config = {
	    method: 'GET'
	  }
	  if (auth == true) {
	  	config['headers']= {"Authorization" : 'Bearer ' + process.env.TOKEN};
	  }
	  return this.request(url, config);
	};

	//Add a product
	addProduct (body, auth = false) {
		let url = testEndpoints.add_product;
		let config = {
	    method: 'POST',
	    headers: { 'Content-Type': 'application/json' },
	    body: JSON.stringify(body)
	  };
	  if (auth == true)
	  {
	  	config.headers.Authorization = 'Bearer ' + process.env.TOKEN;
	  }
	  return this.request(url, config);
	}

	//Delete a product
	deleteProduct (id, auth = false) {
		let url = testEndpoints.signle_product + id;
		let config = {
	    method: 'DELETE',
	  }
	  if (auth == true)
	  {
	  	config['headers']= {"Authorization" : 'Bearer ' + process.env.TOKEN};
	  }
	  return this.request(url, config);
	};

};


// Examples

async function clientExample() {

	const dummyApiCaller = new dummyApiCallerClass();

	let product;

	// Get the first five products
	console.log(`\n`);
	console.log('Get the first five products');

	for (i = 0; i < 5; i++)
	{
		product = await dummyApiCaller.getProduct(i+1);
		console.log(product);
		console.log(`\n`);
	}


	//Add a new product from a file
	console.log(`\n`);
	console.log('Add a new product from a file');

	for (i = 0; i < newProducts.products.length; i++) {
	  product = await dummyApiCaller.addProduct(newProducts.products[i])
		console.log(product);
		console.log(`\n`);
	}


	//Delete the first five products
	console.log(`\n`);
	console.log('Delete the first five products');

	for (i = 0; i < 5; i++)
	{
		product = await dummyApiCaller.deleteProduct(i+1);
		console.log(product);
		console.log(`\n`);
	}
} 

clientExample();




