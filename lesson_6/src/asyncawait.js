async function getData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  return response.json();
}

(async () => {
  const response = await getData();
  processData(response);
})();

function processData(json) {
  for (let i = 0; i < json.length; i++) {
    console.log(json[i].name);
  }
}
