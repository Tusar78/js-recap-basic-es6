// Get Data From JSON Placeholder

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'GET',
})
    .then(response => response.json())
    .then(post => display(post));

function display(data) {
  console.log(data);
}

// Creating data
/*
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
        userId: 1,
        name: 'Tusar',
        email: 'tusarahmed141@gmail.com'
    }),
    headers: {
        'content-type': 'application/json; charset=UTF-8'
    }
})
    .then(response => response.json())
    .then(post => display(post))
*/

// Updating data for using put
/*
fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: 'PUT',
    body: JSON.stringify({
        userId: 1,
        name: 'Tusar',
        email: 'tusarahmed141@gmail.com'
    }),
    headers: {
        'content-type': 'application/json; charset=UTF-8'
    }
})
  .then((res) => res.json())
  .then((post) => display(post));
*/

// Updating data using PATCH method

// fetch('https://jsonplaceholder.typicode.com/posts/1', {
//     method: 'PATCH',
//     body: JSON.stringify({
//         title: 'Amar shonar bangla, Ami tomai valobashi'
//     }),
//     headers: {
//         'content-type': 'application/json; charset=UTF-8'
//     }
// })
//     .then(response => response.json())
//     .then(post => display(post))

// Deleting data
/*
fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'DELETE',
})
    .then(res => res.json())
    .then(post => display(post))
*/

// Trying to filtering
/*
fetch('https://jsonplaceholder.typicode.com/posts?id=10')
    .then(response => response.json())
    .then(posts => display(posts))
*/