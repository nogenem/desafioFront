const renderUserCard = ({
  name,
  email,
  bio,
  avatar_url,
  followers,
  following
}) => `
  <div id="userCard" class="row align-items-center justify-content-center">
    <div class="card col-6">
      <div class="card-body">
        <div class="row">
          <div class="col-12 col-lg-8 col-md-6">
            <h3 class="mb-0 text-truncated">${name}</h3>
            <p class="lead">${email || ""}</p>
            <p>
              ${bio || ""}
            </p>
          </div>
          <div class="col-12 col-lg-4 col-md-6 text-center">
            <img src="${avatar_url ||
              ""}" alt="" class="mx-auto rounded-circle img-fluid">
          </div>
          </br>
          <div class="col-12 col-lg-6 text-center">
            <h3 class="mb-0">${followers}</h3>
            <small>Seguidores</small>
          </div>
          <div class="col-12 col-lg-6 text-center">
            <h3 class="mb-0">${following}</h3>
            <small>Seguidos</small>
          </div>
        </div>
      </div>
    </div>
  </div>
`;

export default {
  render: renderUserCard
};
