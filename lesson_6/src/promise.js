function getData() {
  return fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      console.log(response, response.ok, response.status);
      return response.json();
    })
    .then((json) => processData(json))
    .catch((e) => console.log(e));
}

function processData(json) {
  for (let i = 0; i < json.length; i++) {
    console.log(json[i].name);
  }
}

getData();
