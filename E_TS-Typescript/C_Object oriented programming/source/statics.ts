{
  class Counter {
    count: number = 0;
    static totalCounters: number = 0;
  
    constructor() {
      Counter.totalCounters++; // Increment the static value every time a Counter is created
    }
  
    increment = (): void => {
      this.count++;
    };
  
    static getTotalCounters = (): number => {
      return Counter.totalCounters;
    };
  }
  
  // Create Counter objects
  const c1 = new Counter();
  const c2 = new Counter();
  const c3 = new Counter();
  
  c1.increment();
  c2.increment();
  c2.increment();
  
  console.log(c1.count); // 1
  console.log(c2.count); // 2
  console.log(c3.count); // 0
  
  // Access static method and property
  console.log(Counter.getTotalCounters()); // 3
  console.log(Counter.totalCounters);      // 3
  
}