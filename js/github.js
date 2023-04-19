fetch('https://api.github.com/users/Jspanglez/repos', {
  headers: {
    Authorization: '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',
  },
})
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('repos');
    data.forEach(repo => {

      /* Create the div to conatin the data */
      const repoElement = document.createElement('div');

      /* Create the initial format for the GitHub repo */
      let html = `
        <div>
          <h3>${repo.name} <i class="fa-brands fa-github fa-lg github-icon" style="color: white;"></i></h3>`;

      /* Do not make an element for the decription
      or the language if they are null */
      if (repo.description !== null) {
        html += `<p>${repo.description}</p>`;
      }

      if (repo.language !== null) {
        html += `<p>Language: ${repo.language}</p>`;
      }

      /* Add the stars and the url */
      html += `
          <p>Stars: ${repo.stargazers_count}</p>
          <p>URL: <a href="${repo.html_url}">${repo.html_url}</a></p>
          <br>
        </div>
      `;

      /* Add the created HTML to the div and append it
      to the element created in page2.html */
      repoElement.innerHTML = html;
      container.appendChild(repoElement);
    });
  })
  .catch(error => console.error(error));
  