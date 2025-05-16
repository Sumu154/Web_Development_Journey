{
  interface Product {
    name: string;
    price: number;
  }

  const getMostExpensiveProduct = (products: Product[]): Product | null => {
    if(products.length === 0){
      return null;
    }

    let res: Product = products[0];
    for(const i of products){
      if(i.price > res.price){
        res = i;
      }
    }
    return res;
  }


  const products: Product[] = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 55 },
    { name: "Bag", price: 50 }
  ];
  
  console.log(getMostExpensiveProduct(products));  
}