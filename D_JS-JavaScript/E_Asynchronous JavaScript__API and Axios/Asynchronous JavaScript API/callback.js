// console.log('one');
// console.log('two');

// setTimeout(() => {
//     console.log('hello');
// }, 5000);

// console.log('three');
// console.log('four');

// it will take 5s to print hello,,so three four age print hoye gelo,,5s por hello ashlo
// parallelly execution hbe   -> its called asynchronous program




// 1) callback -> function that is passed as an arguments
// function getData(callback) {           //getData er vitor je callback function pass korcilam seta -> callback
//     setTimeout(() => {
//       callback('Data fetched from server');         //ekhane 3s wait kore callback function call dibe ei parameter diye
//     }, 3000);                                       //jeta pore callback functioner input hisabe jabe
// }
  
// console.log('Requesting data...');
// getData((data) => {             // getData functioner vitore jacche ekta function---> callback function
//     console.log(data);          // ekhnane callback function theke jeta input ashce seta print hbe    
// });                           
// console.log('Doing other things while waiting...');

  








    /* example with three nested callback  */
function fetchUserData(callback) {
    setTimeout(() => {
        console.log("User data fetched");
        callback({ userId: 1, userName: "John Doe" });
    }, 1000);
}

function fetchUserOrders(user, callback) {
    setTimeout(() => {
        console.log(`Orders for ${user.userName} fetched`);
        callback([{ orderId: 101, product: "Laptop" }, { orderId: 102, product: "Phone" }]);
    }, 1000);
}

function fetchOrderStatus(order, callback) {
    setTimeout(() => {
        console.log(`Order status for order ${order.orderId} fetched`);
        callback({ orderId: order.orderId, status: "Shipped" });
    }, 1000);
}

// Callback Hell -> 3 nested callback
fetchUserData((user) => {
    fetchUserOrders(user, (orders) => {
        fetchOrderStatus(orders[0], (status) => {  // Handling the first order only
            console.log("Order status:", status);
        });
    });
});
    
console.log("Doing other things while waiting...");
    



  



