// execution hoar time ke control kore
// 1) setTimeout -> Once, after a specified delay
console.log("seTimeout: ");
setTimeout(() => {
    console.log('ami 3s pore ekbar e run hoyeci,,ar hobo na!');
}, 2000);

// 2) setInterval + clearInterval -> Repeatedly, at specified intervals jotokkhon ta clear hoite bolbo
console.log("setInterval + clearInterval: ");
setInterval(() => {
    console.log('amk na thamale 2s porpor print hote thakbo');
}, 3000);

clearInterval(() => {
    console.log('Thank you for stopping me');
}, 10000);


// 3) requestAnimationFrame -> Before the next repaint (60fps ideally)
// 4) queueMicrotask -> Immediately after the current task completes
// 5) promise.then() -> After current task completes
// 6) setImmediate -> After the current event loop (Node.js)
