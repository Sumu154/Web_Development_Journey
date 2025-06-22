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
  { $group: { _id: null, names: { $push: "$name.firstName" } } }   
])

// other aggregate function
db.Basic.aggregate([
  { $group: { 
      _id: null, 
      totalSalary: { $sum: "$salary" }, 
      averageAge: { $avg: "$age" },
      maxAge: { $max: "$age" },
      allNames: { $push: "$name.firstName" },
      uniqueColors: { $addToSet: "$favoutiteColor" } 
    }
  }
])



// ---------group with $unwind-----------
// groupe kotojon ace ekekta name er friend
db.Basic.aggregate([
  { $unwind: "$friends" },
  { $group: { _id: "$friends", count: { $sum: 1 } } }
])

db.Basic.aggregate([
  { $unwind: "$interests" },
  { $group: { _id: "$age", interestPerAge: { $push: "$interests" } } },
])



// grouping with bucket
db.Basic.aggregate([
  { $bucket: {
      groupBy: "$age",
      boundaries: [ 20, 40, 60, 80 ],
      default: "80 er oporer bura gula",
      output: {
        count: { $sum: 1 },
        kakaKaraAce : { $push: "$name" }
      }
    } }
])










