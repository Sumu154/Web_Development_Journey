const url = 'https://cat-fact.herokuapp.com/facts';

// AJAX -> Asynchronous JS & XML
// JSON -> Javascript Object Model
// json() -> returns second promise -> input dibo JSON, output pabo JS object

// object -> json/string --- JSON.stringify
// json/string -> object --- JSON.parse


const factPara = document.querySelector('#fact');


// 1) GET -> default behavior of fetch..data server theke retrieve korte kaje lage
// let response = await fetch(url, {
//     method: 'GET'
// });
// kintu eta implicit..all time amar likhte hbe na
const getFacts = async () => {
    console.log('getting data....');
    let response = await fetch(url);         // json return korlo
    console.log(response);

    let data = await response.json();
    console.log(data);
    // console.log(data[0]);
    //factPara.innerText = data[0].text;
}



// 2) POST -> to server e data send korte kaje lage
const postFacts = async () => {
    const newFact = {
        text: "Cats purr when they are content.",
        type: "cat"
    };

    let response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newFact)
    });

    let data = await response.json();
    console.log("New fact created:", data);
}


// PUT -> completely replace korte chaile use korbo update korbe
const putFacts = async () => {
    const updatedFact = {
        text: "Cats purr when they are content.",
        type: "cat"
    }

    let response = await fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedFact)
    });

    let data = await response.json();
    console.log('updated Fact: ', data);
}