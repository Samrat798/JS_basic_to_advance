// Have access to student from data.js

const updatedStudents = student.map(function (student) {
  //   console.log(student);
  student.role = 'student';
  return student;
});

// console.log(updatedStudents);

const highScores = student.filter(function (student) {
  // if (student.score >= 80) {
  //   return student;
  // }
  // if (student.score >= 80) return student;
  return student.score >= 80;
});

// console.log(highScores);

const specificId = student.find(function (student) {
  return student.id === 1;
});

// console.log(specificId);

const arrSize = student.length;
const aveScore = student.reduce(function (acc, student) {
  return acc + student.score / arrSize;
}, 0);
// console.log(aveScore);

//Dynamic Value
const subject = 'art';

const total = {};
total[subject] = 'some value';

const survey = student.reduce(function (survey, student) {
  // console.log(student.favoriteSubject);
  const favoSub = student.favoriteSubject;
  if (survey[favoSub]) {
    survey[favoSub] += 1;
  } else {
    survey[favoSub] = 1;
  }
  return survey;
}, {});

// console.log(survey);

const number = 4.56789;
const result = Math.floor(number);
// console.log(result);

//DATE
const months = [
  'January',
  'February',
  'march',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const date = new Date();
const month = date.getMonth();
console.log(months[month]); //0-index based

const day = date.getDay();
console.log(days[day]);

console.log(date.getDate());
console.log(date.getFullYear());

const sentence = `${days[day]}, ${date.getDate()} ${
  months[month]
} ${date.getFullYear()}`;

document.body.innerHTML = sentence;
