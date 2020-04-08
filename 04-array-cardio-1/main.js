( function main() {
  const url = 'https://swapi.co/api/people';

  let list = [];
  list = getCharacters(url, list)
    .then((data) => {
      filterData(data)
    });
})();

function filterData(data) {

  console.log('All data:');
  console.table(data);

  //filter
  const blondHair = data.filter((element) => { return element['hair_color'] == 'blond' });

  console.log('Blond hair characters:');
  console.table(blondHair);

  //map
  const charactersName = data.map((element) => { return element['name'] });
  console.log('characters name:');
  console.table(charactersName);

  //sort
  const sortedNames = charactersName.sort((nameA, nameB) => {
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
  console.log('Alphabetically sorted names:');
  console.table(sortedNames);

  //reduce
  const totalTallCharacters = data.reduce((total, currentValue) => {
    if(parseInt(currentValue['height'],10) > 99) {
      return total = total + 1;
    }
    return total;
  }, 0);
  console.log(`Total tall characters: ${totalTallCharacters}`);
}

function getCharacters(pageUrl, allData) {
  console.log('fetching data...');

  return fetch(pageUrl) 
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      allData = allData.concat(data.results);

      if(data.next != null) {
        return getCharacters(data.next, allData);
      }
      else {
        return allData;
      }
    });
}
