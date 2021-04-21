const { performance, PerformanceObserver } = require("perf_hooks")
//  function to add  numbers to n 
const addUpTo = (n) => {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total +=i   // O(n)
    }
    return total;
}

// much more efficient one
const addFunction = (n) => {
    return n * (n + 1) / 2 // O(0)
}

const printUpPair = (n) => {
    for ( let i = 0; i < n; i++) {
        for( let j = 0; j < n; j++) {
            console.log(i,j)   
        }
    }  
    //  O(n^2)
}
printUpPair(10)
const perfObserver = new PerformanceObserver((items) => {
    items.getEntries().forEach((entry) => {
      console.log(entry)
    })
  })
  

  perfObserver.observe({ entryTypes: ["measure"], buffer: true })
performance.mark("example-start")
// console.log(addFunction(1000000000000))  // less cpu intensive
// console.log(addUpTo(1000000000000))    // very cpu intensive 
performance.mark("example-end")

performance.measure("example", "example-start", "example-end")
