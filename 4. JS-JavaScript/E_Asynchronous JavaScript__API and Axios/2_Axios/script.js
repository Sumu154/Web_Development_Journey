const axios = require('axios'); // If using Node.js, otherwise include Axios CDN in your HTML file.

const url = 'https://cat-fact.herokuapp.com/facts';
const factPara = document.querySelector('#fact');

// 1) GET -> Retrieve data from the server
const getFacts = async () => {
    try {
        console.log('Getting data...');
        let res = await axios.get(url); // Axios handles JSON parsing automatically
        console.log(res.data);

        // Uncomment if you want to display the first fact
        // factPara.innerText = res.data[0].text;
    } catch (error) {
        console.error('Error fetching facts:', error);
    }
};

// 2) POST -> Send data to the server
const postFacts = async () => {
    const newFact = {
        text: "Cats purr when they are content.",
        type: "cat"
    };

    try {
        let res = await axios.post(url, newFact, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log("New fact created:", res.data);
    } catch (error) {
        console.error('Error posting new fact:', error);
    }
};

// 3) PUT -> Completely replace/update data on the server
const putFacts = async () => {
    const updatedFact = {
        text: "Cats purr when they are content.",
        type: "cat"
    };

    try {
        let res = await axios.put(url, updatedFact, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log('Updated Fact:', res.data);
    } catch (error) {
        console.error('Error updating fact:', error);
    }
};

// Call the functions to test them
// getFacts();
// postFacts();
// putFacts();
