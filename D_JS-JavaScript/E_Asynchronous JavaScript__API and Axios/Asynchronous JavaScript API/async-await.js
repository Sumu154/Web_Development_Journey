// 2) Async-Await -> 
// async function -> always return a promise
//await -> pauses the execution of charpasher async function jotokkhon na promise settled hoy
// Step 1: Keep getData the same (returns a Promise)
function getData() {   
    return new Promise((resolve, reject) => {  
        setTimeout(() => {
            resolve('Data fetched from server');  
        }, 3000);
    });
}

// Step 2: Use async/await directly
async function getAllData() {  // await declare er jonne functioner vitor declare korte hoy
    console.log('Requesting data...');
    const data = await getData();         
    console.log(data);

}

// Call the async function to run the code
getAllData();
console.log('Doing other things while waiting...');   


   /*  example with three promises */
// Step 1: Wrapping each asynchronous task in a promise
function fetchUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("User data fetched");
            resolve({ userId: 1, userName: "John Doe" });
        }, 1000);
    });
}

function fetchUserOrders(user) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Orders for ${user.userName} fetched`);
            resolve([{ orderId: 101, product: "Laptop" }, { orderId: 102, product: "Phone" }]);
        }, 1000);
    });
}

function fetchOrderStatus(order) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Order status for order ${order.orderId} fetched`);
            resolve({ orderId: order.orderId, status: "Shipped" });
        }, 1000);
    });
}

// Step 2: Using async/await to avoid Callback Hell
async function getUserOrderStatus() {
    try {
        const user = await fetchUserData();  // Wait for user data to be fetched
        const orders = await fetchUserOrders(user);  // Wait for user orders to be fetched
        const status = await fetchOrderStatus(orders[0]);  // Wait for order status to be fetched
        console.log("Order status:", status);  // Log the order status
    } catch (error) {
        console.error("An error occurred:", error);  // Handle any errors
    }
}

// Call the async function to run the code
getUserOrderStatus();

console.log("Doing other things while waiting...");


