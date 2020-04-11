const url = 'https://rickandmortyapi.com/api/character';

const listElement = document.querySelector('.list');
const searchElement = document.querySelector('.search');

let characters = []

getCharacters(url, list=[])
.then((data) => {
  characters.push(...data);
  showData(characters);

  searchElement.addEventListener('change', searchCharacter);
  searchElement.addEventListener('keyup', searchCharacter);
});

function searchCharacter() {
  const matches = findMatch(this.value, characters);
  showData(matches);
}

function getCharacters(pageUrl, allData) {
  return fetch(pageUrl)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      allData = allData.concat(data.results);

      if(data.info.next != "") {
        return getCharacters(data.info.next, allData);
      }
      else {
        return allData;
      }
    });
}

function findMatch(expression, list) {
  const regex = new RegExp(expression, 'gi');

  const results = list.filter((element) => {
    return element.name.match(regex);
  });

  return results;
}

function showData(data) {
  let charactersNode = data.map((element) => {
    return `<li>${element.name}</li>`
  }).join('');

  listElement.innerHTML = charactersNode;
}