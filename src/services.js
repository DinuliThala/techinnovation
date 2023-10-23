import React, { useState } from 'react';

fetch('http://localhost:8000/upload/dza')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); // You can use .json() if the response is in JSON format
    })
    .then(data => {
        // Handle the data from the response here
        console.log(data);
    })
    .catch(error => {
        if (error.name === 'TypeError') {
            // This indicates a network error or CORS issue
            console.error('Network or CORS error:', error.message);
        } else {
            // Handle other errors
            console.error('There was a problem with the fetch operation:', error);
        }
    });

fetch('http://localhost:8000/upload/theta')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); // You can use .json() if the response is in JSON format
    })
    .then(data => {
        // Handle the data from the response here
        console.log(data);
    })
    .catch(error => {
        if (error.name === 'TypeError') {
            // This indicates a network error or CORS issue
            console.error('Network or CORS error:', error.message);
        } else {
            // Handle other errors
            console.error('There was a problem with the fetch operation:', error);
        }
    });



