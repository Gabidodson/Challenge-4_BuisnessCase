//Create an Inventory Array of Product Objects
let Inventory = [
    {name: "Keyboard",price:10.00,quantity:40, LowStockLevel:15},
    {name: "mouse",price:5.00,quantity:50, LowStockLevel:20},
    {name: "laptop",price:1200,quantity:35, LowStockLevel:18},
    {name: "cable",price:3.00,quantity:80, LowStockLevel:40},
    {name: "phone",price:1000,quantity:55, LowStockLevel:21}
];
//Function to Display Product Details 
function displayProductDetails(product) {
    let stockStatus;
    if(product.quantity <= product.LowStockLevel) {
        stockStatus = "Low Stock";
    } else {
        stockStatus= "In Stock";
    } 
    console.log (`name: ${product.name}`);
    console.log (`price:$${product.price.toFixed(2)}`);
     //tofixed2 makes price rounded to 2 decimal places
    console.log (`quantity:${product.quantity}`);
    console.log(`stock Status: ${stockStatus}`);
}

