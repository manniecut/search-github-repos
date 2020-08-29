'use strict';

/*
Requirements:
    `The user must be able to search for a GitHub user handle.
    `The search must trigger a call to GitHub's API.
    `The repos associated with that handle must be displayed on the page.
    `You must display the repo name and link to the repo URL.
    `The user must be able to make multiple searches and see only the results for the current search.
*/


function displayResults(responseJson) {
    console.log(responseJson);
    $('#results-list').empty();
    for (let i = 0; i < responseJson.length; i++) {
        $('#results-list').append(
            `<li><h3><a href="${responseJson[i].html_url}" target="_blank">${responseJson[i].name}</a></h3>
        <p>${responseJson[i].description}</p>
        </li>`
        )
    };
    $('#results').removeClass('hidden');
};

function getRepos(query) {
    let username = query;
    let url = `https://api.github.com/users/${username}/repos`;
    console.log(url);
    fetch(url)
        .then(response => response.json())
        .then(responseJson => displayResults(responseJson))
        .catch(error => alert('Oops, error!'));
    console.log('request sent')
}


function watchForm() {
    $('form').submit(event => {
        event.preventDefault();
        const searchInput = $('#js-search-input').val();
        getRepos(searchInput);

    })
}


$(watchForm);