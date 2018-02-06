const renderUserRepo = ({
  html_url,
  name,
  language,
  description,
  subscribers_count,
  stargazers_count,
  forks_count
}) => `
  <div id="repoCard" class="row align-items-center justify-content-center">
    <div class="card col-6 text-center">
      <div class="card-body">
        <div class="row">
          <div class="col-12">
            <h3 class="mb-0 text-truncated">
              <a href="${html_url}" target="_blank">${name}</a>
            </h3>
            <p class="lead">${language}</p>
            <p>
              ${description || ""}
            </p>
          </div>
          <div class="col-12 col-lg-4">
            <h3 class="mb-0">${subscribers_count}</h3>
            <small>Assinante(s)</small>
          </div>
          <div class="col-12 col-lg-4">
            <h3 class="mb-0">${stargazers_count}</h3>
            <small>Stars</small>
          </div>
          <div class="col-12 col-lg-4">
            <h3 class="mb-0">${forks_count}</h3>
            <small>Forks</small>
          </div>
        </div>
      </div>
    </div>
  </div>
`;

export default {
  render: renderUserRepo
};
