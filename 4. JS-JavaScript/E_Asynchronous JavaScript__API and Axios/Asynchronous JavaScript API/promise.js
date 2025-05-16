// 2) promises -> callback hell er problem -> onk jotil code hbe,,promise beshi structured 
// threee states -> pending, resolve, reject
function getData() {   
    return new Promise((resolve, reject) => {  // Create a new Promise
        setTimeout(() => {
            resolve('Data fetched from server');  // Resolve the promise after 3 seconds
        }, 3000);
    });
}

console.log('Requesting data...');
getData()  // getData call korlei ei function promise return korbe
    .then((data) => {  // Use .then() to handle the resolved promise
        console.log(data);  // This runs when the promise is resolved (after 3 seconds)
    })
    .catch((error) => {
        console.error(error);  // In case of any errors (handled by .catch())
    });
console.log('Doing other things while waiting...');


/*
resolve return korle --> promise.then((res) => {...})
                     --> promise fulfill hole resolve return kore
                     
reject return korle --> .promise.catch((err) => {...})
                    --> promise reject hole error ashbe
*/










   /*  example with three promises */
// Step 1: Wrapping each asynchronous task in a promise
// function fetchUserData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("User data fetched");
//             resolve({ userId: 1, userName: "John Doe" });
//         }, 1000);
//     });
// }

// function fetchUserOrders(user) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log(`Orders for ${user.userName} fetched`);
//             resolve([{ orderId: 101, product: "Laptop" }, { orderId: 102, product: "Phone" }]);
//         }, 1000);
//     });
// }

// function fetchOrderStatus(order) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log(`Order status for order ${order.orderId} fetched`);
//             resolve({ orderId: order.orderId, status: "Shipped" });
//         }, 1000);
//     });
// }

// // Step 2: Chaining Promises to avoid Callback Hell
// fetchUserData()
//     .then((user) => {
//         return fetchUserOrders(user);
//     })
//     .then((orders) => {
//         return fetchOrderStatus(orders[0]);
//     })
//     .then((status) => {
//         console.log("Order status:", status);
//     })
//     .catch((error) => {
//         console.error("An error occurred:", error);
//     });

// console.log("Doing other things while waiting...");