/*const da = 'eat';
let ne = 8;
console.log(ne);
const num = 0.6;
const str = 'cat';
const bool = true;
const obj = {
    name: 'Danil',
    lastName: 'Khairulun',
    age: 15
};
console.log(obj.name);
const arr = ['danil', 'dad', 'mom', 8, 9.93, true, false, {}]
console.log(arr[7]);
const result = confirm('You have cat or dog?');
const answers = [];
answers[0] = prompt('How old are you?');
answers[1] = prompt(`What's you name?`);
answers[2] = confirm('You love mom and dad' );
console.log(answers);
const isChecking = false,
      isClose = false; 
console.log(isChecking || isClose);*/
const numberOfFilms = prompt('How many films have you watched?');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

const a = prompt('one of the last watched films?'),
      b = prompt('How much do you rate it'),
      c = prompt('one of the last watched films?'),
      d = prompt('How much do you rate it');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);