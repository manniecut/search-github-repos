'use strict';

/*
Requirements:
`The user must be able to search for a GitHub user handle.
`The search must trigger a call to GitHub's API.
`The repos associated with that handle must be displayed on the page.
`You must display the repo name and link to the repo URL.
`The user must be able to make multiple searches and see only the results for the current search.
*/



const apiKey = " ";

const searchURL = `https://api.github.com/users/${username}/repos`;



function formatQuery(parameters) {
    let username = searchInput;
}

function displayResults(responseJson) {
    //remove previous results
    // loop through response array, stopping at max results
    // handle proper formatting of the results e.g. create the list
    //display the results section
}

function getRepos(query) {
    const parameters = {
        q: query,
    };

    //create a constant to hold the result of formatQuery(parameters)
    //create a constant to hold the total (searchURL + ? + queryString;

    //create a constant to hold the options arry with header and key information

    //run the fetch function with the url and options to handle the response or throw an error message
    fetch(request)                                            
        .then(response => response.json())                 
        .then(responseJson =>
            displayResults(responseJson))                   
        .catch(error => alert('Something went wrong. Try again later.')); 
}



function watchForm() {
    $('form').submit(event =>{
        event.preventDefault();
        const searchInput = $('#js-search-input').val();
        getRepos(searchInput);

    })
}


$(watchForm);