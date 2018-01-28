const renderUserRepoInfo = ({
  full_name,
  name,
  stargazers_count,
  forks_count,
  open_issues
}) => `
  <tr data-fullname="${full_name}">
    <td>${name}</td>
    <td>${stargazers_count}</td>
    <td>${forks_count}</td>
    <td>${open_issues}</td>
  </tr>
`;

const renderUserReposList = repos => `
  <table id="reposTable" class="display" cellspacing="0" width="100%">
    <thead>
      <tr>
        <th>Nome</th>
        <th>Stars</th>
        <th>Forks</th>
        <th>Problemas Abertos</th>
      </tr>
    </thead>
    <tbody>
      ${repos.map(renderUserRepoInfo).join("")}
    </tbody>
  </table>
`;

export default {
  render: renderUserReposList,
  didMount: () => {
    $("#reposTable").DataTable({
      order: [[1, "desc"]]
    });
    document.querySelector("#reposTable tbody").addEventListener(
      "click",
      e => {
        e.preventDefault();

        const { fullname, user } = e.srcElement.parentElement.dataset;
        location.hash = `#/user/${fullname}`;
      },
      false
    );
  }
};
