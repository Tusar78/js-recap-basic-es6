// const jsonData = () => {
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//         .then(response => response.json())
//         .then(data => console.log(data))
// }

function loadUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(hugeData => displayUser(hugeData))
} 

function displayUser(hugeData) {
    const ul = document.querySelector('.users');
    for (const data of hugeData) {
        const li = document.createElement('li');
        li.innerText = `Name: ${data.name}.   Email: ${data.email}`;
        li.style.fontFamily = 'monospace'
        ul.appendChild(li);
    }
}

// function loadPost() {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//         .then(res => res.json())
//         .then(posts => {
//             for (const post of posts) {
//                 const postTitle = post.title;
//                 console.log(post.id, postTitle);
//             }
//         })
// }
document.getElementById('btn-click').addEventListener('click', function(event) {
    loadUsers();
})