{
  const squareAsync = async (n: number): Promise<number> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(n<0){
          reject(new Error("Negative number not allowed"));
        }
        else{
          resolve(n*n);
        }
      }, 1000);
    })
  }


  console.log(squareAsync(4).then(console.log));        // Output after 1s: 16
  console.log(squareAsync(-3).catch(console.error));    // Output: Error: Negative number not allowed

}