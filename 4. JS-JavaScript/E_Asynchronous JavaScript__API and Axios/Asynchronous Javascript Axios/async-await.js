const axios = require('axios'); // Include Axios if using Node.js

// 1) Step 1: Keep getData the same (returns a Promise)
function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Data fetched from server');
        }, 3000);
    });
}

// 2) Step 2: Use async/await directly
async function getAllData() {
    console.log('Requesting data...');
    const data = await getData(); // Simulated data fetching
    console.log(data);
}

// Call the async function to run the code
getAllData();
console.log('Doing other things while waiting...');

/* Example with three promises */

// Step 1: Wrapping each asynchronous task in a promise
function fetchUserData() {
    return axios.get('https://jsonplaceholder.typicode.com/users/1')
        .then(response => {
            console.log("User data fetched");
            return response.data; // Simulated user data
        });
}

function fetchUserOrders(user) {
    return axios.get(`https://jsonplaceholder.typicode.com/users/${user.id}/orders`)
        .then(response => {
            console.log(`Orders for ${user.name} fetched`);
            return response.data; // Simulated orders
        });
}

function fetchOrderStatus(order) {
    return axios.get(`https://jsonplaceholder.typicode.com/orders/${order.id}/status`)
        .then(response => {
            console.log(`Order status for order ${order.id} fetched`);
            return response.data; // Simulated order status
        });
}

// Step 2: Using async/await to avoid Callback Hell
async function getUserOrderStatus() {
    try {
        const user = await fetchUserData(); // Wait for user data to be fetched
        const orders = await fetchUserOrders(user); // Wait for user orders to be fetched
        const status = await fetchOrderStatus(orders[0]); // Wait for order status to be fetched
        console.log("Order status:", status); // Log the order status
    } catch (error) {
        console.error("An error occurred:", error); // Handle any errors
    }
}

// Call the async function to run the code
getUserOrderStatus();

console.log("Doing other things while waiting...");
