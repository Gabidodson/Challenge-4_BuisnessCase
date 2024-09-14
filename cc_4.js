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
};

//Create a Function to Update Product Stock After Sales
function updateStock(product, unitsSold) {
    product.quantity -= unitsSold;
    if (product.quantity<=0){
        console.log (`This item ${product.name} is out of stock`);
    } else if (product.quantity <= product.LowStockLevel){
        console.log(`This item ${product.name} is low in stock `);
    }
};

//Create a Function to Check Low Stock Products
function checkLowStock () {
Inventory.forEach(product => {
    if (product.quantity <= product.LowStockLevel) {
        console.log (`${product.name} low stock. Current quantity: ${product.quantity}`);
    }
});
}
   
//Create a Function to Calculate Total Inventory Value
function calculateInventoryValue(){
    let totalValue = Inventory.reduce((total, product) => {
        return total + (product.price * product.quantity);
    }, 0);
    return totalValue.toFixed(2);
}
