function loadPost() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((posts) => displayPost(posts));
}
loadPost();

function displayPost(posts) {
  const postContainer = document.querySelector(".container");
  for (const post of posts) {
    const article = document.createElement("article");
    article.innerHTML = `
    <div class="post__heading">
        <img class="post__img" src="https://via.placeholder.com/600/1ee8a4">
    </div>
    <div class="post__body">
        <h2 class="post__title">${post.title}</h2>
        <p class="post__body">${post.body}</p>
    </div>    
    `;
    article.classList.add("post-container");
    postContainer.appendChild(article);
  }
}
