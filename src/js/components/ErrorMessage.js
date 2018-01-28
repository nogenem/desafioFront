const renderErrorMessage = text => `
  <div id="errorAlert" class="alert alert-danger text-center" role="alert">
    <strong>${text}</strong>
  </div>
`;

export default {
  render: renderErrorMessage
};
