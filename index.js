const yearOfBirth = prompt('What year were you born in?');

if (yearOfBirth === null) {
    alert('It is a pity that you did not want to enter your birth year');
} else if (!yearOfBirth) {
    alert('The year of birth is not entered!');
} else if (isNaN(yearOfBirth)) {
    alert('The year of birth must be a number!');
} else if (yearOfBirth.length !== 4) {
    alert('The year of birth must be four digits!');
} 

////////////////////////////////

const city = prompt('What city do you live in?');

if (city === null) {
    alert('It is a pity that you did not want to enter your city');
} else if (!city) {
    alert('The city is not entered!');
} else if (!isNaN(city)) {
    alert('The city can not be entered in numbers!');
}

let messCity;
 if (city === "Kyiv") {
    messCity = 'you live in the capital of Ukraine';
} else if (city === "Washington") {
    messCity = 'you live in the capital of USA';
} else if (city === "London") {
    messCity = 'you live in the capital of Great Britain';
} else {
    messCity = 'you live in ' + city;
}

/////////////////////////////////

const favoriteSport = prompt('What is your favorite kind of sport?');

if (favoriteSport === null) {
    alert('It is a pity that you did not want to enter your favorite sport');
} else if (!favoriteSport) {
    alert('Favorite kind of sport is not entered!');
} else if (!isNaN(favoriteSport)) {
    alert('Sport can not be entered in numbers!');
}

let messSport;
if (favoriteSport === "Tennis") {
    messSport = 'Cool! Do you want to be like Rafael Nadal?';
} else if (favoriteSport === "Football") {
    messSport = 'Cool! Do you want to be like Lionel Messi?';
} else if (favoriteSport === "Basketball") {
    messSport = 'Cool! Do you want to be like Michael Jordan?';
} else {
    messSport = 'Your favotite sport is ' + favoriteSport;
}

//////////////////////////////////

const date = new Date();
const currentYear = date.getFullYear();
const age = currentYear - +yearOfBirth;

///////////////////////////////////

let ageMessage;
if (yearOfBirth) {
    ageMessage = `You are ${age} years old`;
} else {
    ageMessage = 'Year of birth is not specified';
}

let cityMessage;
if (city) {
    cityMessage = messCity ;
}  else {
   cityMessage = 'the city is not specified';
} 

let sportMessage;
if (favoriteSport) {
    sportMessage = messSport;
} else {
    sportMessage = 'Sport is not specified!';
}

alert(`${ageMessage}, ${cityMessage}. ${sportMessage}`);