{
  const concatenateArrays = <T>(...a: T[][]): T[] => {
    const res: T[] = [];
    for(const i of a){
      for(const j of i){
        res.push(j);
      }
    }

    return res;
  }

  console.log(concatenateArrays(["a", "b"], ["c"]));      
  console.log(concatenateArrays([1, 2], [3, 4], [5]));     
}