const fs = require("fs");

// fs.readFile("./text_files/hello-world.txt", { encoding: "utf-8" }, (err, data) => {
//   if (err) {
//     console.log("Something went wrong", err);
//     return;
//   }

//   fs.writeFile("./text_files/hello.txt", data, { encoding: "utf-8" }, (err) => {
//     if (err) {
//       console.log("Something went wrong", err);
//       return;
//     }
//     console.log("Written succesfuly");
//   });

// });

// chunk hiahabe ane so more efficient
const readStream = fs.createReadStream("./text_files/hello-world.txt", {encoding : "utf-8"})
const writeStream = fs.createWriteStream("./text_files/hello.txt", {encoding : "utf-8"})

readStream.on("data", (data) => {   //hello-world file theke read kore hello file e write korbe
  console.log(data);

  writeStream.write(data, (err) => {
    if(err){
      throw Error("Error", err)
    }
  })
})


// error jodi hoy tahole
readStream.on("error", (err) => {
  if (err) {
    throw Error("Error", err);
  }
})

writeStream.on("error", (err) => {
  if (err) {
    throw Error("Error", err);
  }
});

readStream.on("end", () => {
  console.log("reading ended");
  writeStream.end()
})

writeStream.on("finish", () => {
  console.log("Written successfully");
})




