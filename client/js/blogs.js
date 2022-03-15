const fetchData = async () => {
  fetch("./data.json")
    .then((response) => response.json())
    .then((data) => {
      let blogs = data;
      const blogTemplate = blogs
        .map(
          (blog) =>
            `
                  <div class="article">
                  ${
                    blog.img
                      ? `<div style="height: 200px" class="rectangle-box"/></div>`
                      : ``
                  }
                  
                    <div class="article-title">${blog.title}</div>
                    <div class="article-author">
                      <img src=${blog.user?.img} alt="user1" />
                      <span>${blog.user?.name} on september 8th 2020</span>
                    </div>
                    <div class="article-excerpt">
                      ${blog.body}
                    </div>
                  </div>
      `
        )
        .join("");
      document.querySelector(".articles-container").innerHTML = blogTemplate;
    })
    .catch((error) => console.log(error));
};

window.onload = fetchData;
