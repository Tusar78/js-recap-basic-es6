const loadComments = () => {
  const url = "https://jsonplaceholder.typicode.com/comments";
  fetch(url)
    .then((response) => response.json())
    .then((comments) => displayComments(comments));
};

const displayComments = (data) => {
  const comments = document.getElementById("comments");
  data.forEach((element) => {
    const singleComment = document.createElement('div');
    singleComment.classList.add('col');
    singleComment.innerHTML = `
      <div class="card">
        <div class="card-body">
          <span class="badge bg-danger">${element.id}</span>
          <p class="card-text">${element.body}</p>
          <hr />
          <a href="mailto:Zola@lizzie.com">${element.email}</a>
        </div>
      </div>
    `;
    comments.appendChild(singleComment);
  });
};
