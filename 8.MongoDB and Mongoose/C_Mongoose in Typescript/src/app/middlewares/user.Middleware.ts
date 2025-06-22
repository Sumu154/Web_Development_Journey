import { userSchema } from '../models/user.Model'; // or wherever the schema is defined

// ----------mongoose middleware normally model file ei thake ei folder e shudu express middleware rakhbo

// Document Middleware
userSchema.pre('save', function (next){  // next mane ei middleware execute kore tumi next ta koro
  console.log('[pre-save] - About to save user document...');
  next();
});

userSchema.post('save', function (doc) {  //doc mane saved document returned by mongodb
  console.log('[post-save] - User document saved:', doc._id);
});


// Query Middleware
// userSchema.pre('find', function (next) {
//   console.log('[pre-find] - Before find query...');
//   next();
// });

// userSchema.post('find', function (result) {
//   console.log('[post-find] - After find query. Found:', result.length, 'documents');
// });


// // Model Middleware
// userSchema.pre('insertMany', function (next, doc) {
//   console.log(`[pre-insertMany] - Inserting ${doc.length} users`);
//   next();
// });

// userSchema.post('insertMany', function (doc) {
//   console.log(`[post-insertMany] - Inserted ${doc.length} users`);
// });


// // Aggregate Middleware
// userSchema.pre('aggregate', function (next) {
//   console.log('[pre-aggregate] - Running aggregate query with pipeline:', this.pipeline());
//   next();
// });

// userSchema.post('aggregate', function (result) {
//   console.log('[post-aggregate] - Aggregation result:', result);
// });
