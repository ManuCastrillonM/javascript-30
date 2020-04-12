let people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 },
];

let comments = [
  { text: 'Love this!', id: 43124 },
  { text: 'Super good', id: 75342 },
  { text: 'You are awesome', id: 32451 },
  { text: 'Pizza is my fav food ever', id: 63842 },
  { text: 'Live Live Laugh!', id: 37924 }
];

console.log('All people:');
console.log(people);

console.log('All comments:');
console.log(comments);


// Is at least one person 19?
const oneAdult = people.some((element) => {
  return (2020 - element.year) > 18;
});

console.log('Is at least one person 19? ', oneAdult);

// Is everyone 19?
const allAdults = people.every((element) => {
  return (2020 - element.year) > 18;
});

console.log('Is everyone at least 19? ', allAdults);

// Comment with id 63842
const selectedComment = comments.find((element) => {
  return element.id == 63842;
});

console.log('Comment with id 63842: ', selectedComment.text);

// find the comment with ID 63842 and delete it
const selectedCommentIndex = comments.findIndex((element) => {
  return element.id == 63842;
});

console.log('Deleting comment #63842 at index ', selectedCommentIndex);
comments.splice(selectedCommentIndex, 1);
console.log('new comments list: ', comments);




