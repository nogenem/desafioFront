import { sanitize } from "../utils";

const renderSearchForm = () => `
  <div id="searchContainer" class="row align-items-center justify-content-center">
    <form id="searchForm" class="col-sm-8 col-md-6 col-lg-6">
      <div class="form-group">
        <label for="userSearchInput">Usuário:</label>
        <input 
          id="userSearchInput" 
          type="search" 
          class="form-control" 
          placeholder="Usuário para busca..."
        >
      </div>
    </form>
  </div>
`;

export default {
  render: renderSearchForm,
  didMount: () => {
    $("#searchForm").submit(e => {
      e.preventDefault();
      const user = sanitize($("#searchForm input").val());

      location.hash = `#/user/${user}`;
    });
  }
};
