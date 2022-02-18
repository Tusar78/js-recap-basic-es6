document.getElementById('add-border').addEventListener('click', event => {
    const friendContainer = document.getElementById('friend-container');
    friendContainer.style.border = '2px solid orange'
})

function addBackground() {
    const friends = document.getElementsByClassName('friend');
    for (const friend of friends) {
        friend.style.backgroundColor = 'gray';
    }
}

function newElementCreate() {
    const friendContainer = document.getElementById('friend-container');
    const friendDiv = document.createElement('div');
    friendDiv.classList.add('friend');
    friendDiv.style.backgroundColor = 'gray';
    friendDiv.innerHTML = `
        <h2 class="friend-name">Friend - 1</h2>
        <p>Lorem.</p>
    `
    friendContainer.appendChild(friendDiv);
}