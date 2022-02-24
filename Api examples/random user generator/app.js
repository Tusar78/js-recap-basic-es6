const loadFaces = () => {
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(faces => displayFaces(faces))
}

const displayFaces = data => {
    const randomImg = document.getElementById('random-img');
    randomImg.src = data.results[0].picture.large;   
    
    const randomName = document.getElementById('name');
    randomName.innerText = data.results[0].name.first;
} 

const btnFace = document.getElementById('btn-face');
btnFace.addEventListener('click', () => {
    loadFaces()
})