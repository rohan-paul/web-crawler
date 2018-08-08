// const express = require('express')
// const cors = require('cors')

// const scrapper = require('/scrapper')

const fetch = require('node-fetch')
/* A light-weight module that brings window.fetch to Node.js
Instead of implementing XMLHttpRequest in Node.js to run browser-specific Fetch polyfill, why not go from native http to fetch API directly? Hence node-fetch, minimal code for a window.fetch compatible API on Node.js runtime.
*/

const url = 'https://www.imdb.com/find?ref_=nv_sr_fn&q='

searchMovies = searchTerm => {
    return fetch(`${url}${searchTerm}`)
        .then(response => response.text())
}

searchMovies('star wars')
    .then(body => {
        console.log(body)
    })