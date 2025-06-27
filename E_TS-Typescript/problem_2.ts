{
  const filterByRating = (items: {title: string, rating: number}[]): {title: string, rating: number}[] => {
    return items.filter(it => {
      return it.rating >= 4
    })
  }


  const books = [
    { title: "Book A", rating: 3.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 }
  ];
  
  console.log(filterByRating(books)); 

}

{
  const filterByRating = (items: {title: string, rating: number}[]): {title: string, rating: number}[] => {
    return items.filter(it => {
      return it.rating >= 4
    })
  }


  const books = [
    { title: "Book A", rating: 3.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 }
  ];
  
  console.log(filterByRating(books)); 
  
}