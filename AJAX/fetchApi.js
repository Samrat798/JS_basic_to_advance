// Fetch built-in
// promised based
/* 
XHR is not wrong, you can complete all our upcoming 
examples and projects using XHR. Fetch is just alternative
approach that has simpler and cleaner syntax. The end result 
is the same. Still get dynamically, behind the scenes.
*/

// const url = './api/people.json';

// // const response = fetch(url);
// // console.log(response);
// fetch(url)
//   .then((resp) => {
//     // response object
//     // useful prop adn methods
//     //   convert response into JSON data
//     // returns promise
//     return resp.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => console.log(err));

const url = './api/people.json';

fetch(url)
  .then((resp) => resp.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
