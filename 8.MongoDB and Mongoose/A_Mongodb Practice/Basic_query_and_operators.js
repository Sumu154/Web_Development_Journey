          // ------------------Read----------------
db.Basic.find({})
  .projection({})
  .sort({})
  .limit(0)
    
db.Basic.find({gender: "Male"}, {name: 1})
db.Basic.find({gender: "Male"}).project({name: 1})
// filter option Male, and name thakbe all info na


// operator
db.Basic.find({ age: { $gt: 20 } })
db.Basic.find({ salary: { $gte: 363 } })
db.Basic.find({ age: { $lt: 25 } })
db.Basic.find({ age: { $lte: 21 } })
db.Basic.find({ gender: { $eq: "Male" } })
db.Basic.find({ gender: { $ne: "Male" } })
db.Basic.find({ favoutiteColor: { $in: ["Aquamarine", "Blue"] } })
db.Basic.find({ favoutiteColor: { $nin: ["Aquamarine", "Red"] } })

db.Basic.find({
  gender: "Female",
  age: { $gt: 18 },
  interests: { $in: ["Cooking", "Gaming"] } 
}, 
{age:1, gender:1, interests: 1})


// $exist, $type, $size
db.Basic.find({ phone: {$exists: false }})   //phone feild ta exist kore kina
db.Basic.find({ age: {$type: "string" }})
db.Basic.find({ friends: {$size: 4 }})


// implicit VS explicit
db.Basic.find({ gender: "Male" })   //implicit
db.Basic.find({ gender: { $eq: "Male" }})   // explicit

// multiple condotion
// $and
db.Basic.find({
  $and: [
    { gender: "Female" },
    { age: { $gt: 20 } }
  ]
})


// $or
db.Basic.find({
  $or: [
    { gender: "Male" },
    { age: { $lt: 18 } }
  ]
})

// combined $and, $or
db.Basic.find({
  $and: [
    { gender: "Female" },
    {
      $or: [
        { age: { $lt: 20 } },
        { interests: "Gaming" }
      ]
    }
  ]
})


// $all , $elemMatch
db.Basic.find({
    interests:  { $all: [ "Cooking", "Writing", "Reading" ]}
}).project({name: 1, interests: 1})

// same object er vitor 2 conditions
db.Basic.find({
  skills:  { $elemMatch: {
    name: "JAVASCRIPT",
    level: "Intermidiate"
  }}
}).project({name: 1, skills: 1})




      // ------------- Update ----------------
// db.Basic.updateOne(
//   { kake update korbo},
//   { ki update korbo},
// )

db.Basic.updateOne(
  {_id: ObjectId("6406ad63fc13ae5a40000065")},
  { $set:{ age: 88} }
)
db.Basic.updateOne(   //object er khetre ekta property set kora
  {_id: ObjectId("6406ad63fc13ae5a40000065")},
  { $set:{ "address.city": 'dhaka'} }
)
db.Basic.updateOne(   //array of object er khetre ekta property set kora
  {_id: ObjectId("6406ad63fc13ae5a40000065")},
  { $set:{ "address.city": 'dhaka'} }
)





// array te set dile purata replace hoye jabe shekhetre addTSet dite hbe
db.Basic.updateOne(
  {_id: ObjectId("6406ad63fc13ae5a40000065")},
  { $set:{ interests: ["Gardening"]} }
)

// ekta/multiple add korbe but duplicate add korbe na
db.Basic.updateOne(
  {_id: ObjectId("6406ad63fc13ae5a40000065")},
  { $addToSet: { interests: "Cooking"} }
)
db.Basic.updateOne(    // multiple value add korte chaile
  {_id: ObjectId("6406ad63fc13ae5a40000065")},
  { $addToSet: { $each: ["Gardening", "Painting", "Singing"]} }
)

// duplicate add korte chaile multiple possible
db.Basic.updateOne(
  {_id: ObjectId("6406ad63fc13ae5a40000065")},
  { $push: { interests: "Cooking"} }
)
db.Basic.updateOne(    // multiple value add korte chaile
  {_id: ObjectId("6406ad63fc13ae5a40000065")},
  { $push: { $each: ["Gardening", "Painting", "Singing"]} }
)

// ---Remove with update---
// $unset, $pull, $pop, $pullAll 
db.Basic.updateOne(   //company feild ta only remove hbe
  { _id: ObjectId("6406ad63fc13ae5a40000065") },
  { $unset: { company: "" } }
)

db.Basic.updateOne(   // start (-1) or end (1) pop
  { _id: ObjectId("6406ad63fc13ae5a40000065") },
  { $pop: { friends: 1 } }
)

db.Basic.updateOne(
  { _id: ObjectId("6406ad63fc13ae5a40000065") },
  { $pull: { languages: "Catalan" } }
)

db.Basic.updateOne(
  { _id: ObjectId("6406ad63fc13ae5a40000065") },
  { $pullAll: { languages: ["Thai", "German"] } }
)



// embedded Vs Referencing
// emdedded -> 1To1, small data size, atomic updates, frequent data reading
// referencing -> 1ToMany, ManyToMany, frequent writing, big data size, flexibility
// db.users.aggregate([
//   {
//     $lookup: {
//       from: "orders",
//       localField: "_id",
//       foreignField: "userId",
//       as: "userOrders"
//     }
//   }
// ])


// indexing, COLLSCAN vs IXSCAN
db.users.createIndex({ age: 1 })
db.users.find({ age: 30 })  // ➤ IXSCAN




























 


