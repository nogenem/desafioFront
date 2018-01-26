const handleCardResponses = ([card, userDetail]) => {
  const template = Handlebars.compile(card)(userDetail);
  $("#view").empty();
  $("#view").append(template);
};

const UserHandler = user => {
  Promise.all([
    fetch("tpl/userCard.html").then(resp => resp.text()),
    fetch(`https://api.github.com/users/${user}`).then(resp => resp.json())
  ]).then(handleCardResponses);
};

window.UserHandler = UserHandler;
