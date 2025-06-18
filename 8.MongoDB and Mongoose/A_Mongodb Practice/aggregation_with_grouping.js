db.Basic.aggregate([
  // group by gender and count document
  { $group: { _id: "$gender", totalPeople: { $sum: 1 } } }   
])

db.Basic.aggregate([
  // names e shb document er firstname dekhailam
  { $group: { _id: "$gender", names: { $push: "$name.firstName" } } }   
])

// other aggregate function
db.Basic.aggregate([
  { $group: { 
      _id: "$gender", 
      totalSalary: { $sum: "$salary" }, 
      averageAge: { $avg: "$age" },
      maxAge: { $max: "$age" },
      allNames: { $push: "$name.firstName" },
      uniqueColors: { $addToSet: "$favoutiteColor" } 
    }
  }
])


// grouping use kore shb document er hiashb kora jay -> anything of all
db.Basic.aggregate([
  // group by gender and count document
  { $group: { _id: null, totalPeople: { $sum: 1 } } }   
])

db.Basic.aggregate([
  // names e shb document er firstname dekhailam
  { $group: { _id: "$gender", names: { $push: "$name.firstName" } } }   
])

// other aggregate function
db.Basic.aggregate([
  { $group: { 
      _id: "$gender", 
      totalSalary: { $sum: "$salary" }, 
      averageAge: { $avg: "$age" },
      maxAge: { $max: "$age" },
      allNames: { $push: "$name.firstName" },
      uniqueColors: { $addToSet: "$favoutiteColor" } 
    }
  }
])

