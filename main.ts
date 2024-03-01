// Muhammad Uzair
// // Task 2

let peronName: string = "Eric";
console.log(`Hello ${peronName},wouldyou like tearn some python today`);

// // Task 3

let peron_Name: string = "Muhammad Uzair"
//in lower case
console.log("lowercase:", peron_Name.toLowerCase());

//in uppercase
console.log("Uppercase:", peron_Name.toUpperCase());

//titlecase
console.log("Titlecase", peron_Name.replace(/\b\w/g, c => c.toUpperCase()));

// // Task 4

let quote: string = "A person who never made a mistake never tried anything new"
let author: string = "Albert Einstein"
console.log(`${author} once said, "${quote}"`)

// // Task 5

let famous_person: string = "Albert Einstein"
let message: string = `${famous_person} once said, "${quote}"`
console.log(message)

// // Task 6

let personName: string = "\t\n  John Doe \n\t";
console.log("Original:", personName);
console.log("Stripped:", personName.trim());

// // Task 7 /8

console.log(5 + 3);
console.log(10 - 2);
console.log(4 * 2);
console.log(16/2);

// //Task 9

let favoriteNumber: number = 4;

//reveling my favourite number in a message formate.9
console.log(`My favorite number is ${favoriteNumber}.`)

// // Task 10

author: [Muhammad Uzair]
date: [Monday , Feburary 12 , 2024]

// // Task 11

let names: string [] = ["Ali","Hasseb","Hsssan","Salman"]
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);

// //task 12

let nams: string [] = ["Ali","Hasseb","Hsssan","Salman"]

let messages: string = "Do you like to play football?"
console.log(nams[0] +" "+ messages)
console.log(nams[1] +" "+ messages)
console.log(nams[2] +" "+ messages)
console.log(nams[3] +" "+ messages)


// // tast 13

let transp : string [] = ["Honda Motercyle","Audi","Honda Civic", ];
transp.map((item) => console.log(`“I would like to own a ${item}`));


// // task 14

let guestsArr: string [] = ["Aliyan","Hasseb","Hsssan"]

guestsArr.map((item) => (console.log(`Dear ${item} , You are invited to the dinnner`)));


// task 15

let guestsArr: string [] = ["Aliyan","Hasseb","Hsssan"]
 let canNotAttend : string ="Hasseb"
console.log(canNotAttend + " " + "Can not Attend the dinner")

let newGuest : string = "Uzair"

guestsArr [guestsArr.indexOf(canNotAttend)] = newGuest

// console.log(guestsArr)

guestsArr.map((items) =>
console.log(`Dear ${items}, You are invited to the dinner`)
)


// Task 16

let guestsArr: string [] = ["Aliyan","Hasseb","Hsssan","Bilal"]

let canNotAttend: string = "Hasseb" ;

 let newGuest : string = "Wajahad"

 guestsArr[guestsArr.indexOf(canNotAttend)] = newGuest

 console.log(guestsArr)

guestsArr.map((items) =>
console.log(`Dear ${items}, I found the bigger dinnner table so I am invited more peoples..`)
);

// //part 2
let guestBeg : string = "Moiz"
guestsArr.unshift(guestBeg)
console.log(guestsArr)

// // part 3
let middleGuest: string = "Shahrukh"
let middleIndex = guestsArr.length/3
guestsArr.splice(middleIndex,0,middleGuest)
console.log(guestsArr)

// // part 4 append

guestsArr.push("Zeeshan")
console.log(guestsArr)

// //part 5

guestsArr.map((items) =>
console.log(`Dear ${items}, You are invited to the more people list on dinner`));


// task 17

let guests: string [] = ['Ali','Bilal','Salman',' Dawood','Hamza']

console.log("Duo to limited space, only two people can be invited for dinner.");

while (guests.length > 2){
    const removedGuest = guests.pop();
    console.log(`Sorry, ${removedGuest}, you're no longer invited to dinnner.`)
}

let guests: string [] = ['Ali','Bilal']

guests.forEach((guests) =>{
console.log(`Dear ${guests}, you're still invited to dinner.`)
});

let guests: string [] = ['Ali','Bilal','Salman',' Dawood','Hamza']

guests.pop();
guests.pop();
console.log("final guest list:" ,guests)


// task 18

// Store the locations in a array.
let placesToVisit: string[] = ['Tokyo','Pakistan','America','China','Japan'];

// • Print your array in its original order.
console.log('Original order:', placesToVisit);

// • Print your array in alphabetical order without modifying the actual list.
console.log('Alphabetical order:', [...placesToVisit].sort());

// • Show that your array is still in its original order
console.log('Orignal order after sorting:', placesToVisit);

// • Print your array in reverse alphabetical order without changing the order of the original list.
console.log('Revers alphabetical order:', [...placesToVisit].sort().reverse());

// • Show that your array is still in its original order
console.log('Orignal order after reverse sorting:', placesToVisit);

// Reverse the order of your list. 
placesToVisit.reverse();
console.log('Reversed order:', placesToVisit)

// • Reverse the order of your list again. Print the list to show it’s back to its original order.
placesToVisit.reverse()
console.log("Back to orignal order:",placesToVisit)

// • Sort your array so it’s stored in alphabetical order.
placesToVisit.sort()
console.log('Sorted in alphbetical order:',placesToVisit);

// • Sort to change your array so it’s stored in reverse alphabetical order.
placesToVisit.sort((a,b) => b.localeCompare(a));
console.log("stored in reverse alphabetical order:", placesToVisit);


// task 19

let invitation : string [] = ['ali','bilal']
let count_invitation : number = invitation.length
console.log(`${count_invitation}, people will come to the dinner`)


// task 20

let country: string [] = ['Pakistan','India','NewYork','Japan','China']
console.log("List of country:")
console.log(country)


// task 21
let person: {names: string, fname: string , age: number} = {names:"Uzair", fname:'Male',age: 21}
console.log(person)


// task 22
22. Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs
to produce an index error. Make sure you correct the error before closing the program.

const days : string [] = ['Sunday','Monday','Tuesday','Wednesday','Thusday','Friday','Saturday']
// console.log(days{7})
console.log(days[6])


// // task 23

let car = 'Sabaru'
console.log("is car =='Sabaru'? predict true")
console.log(car == "Sabaru")

console.log("is car != 'Honda City'? predict true ")
console.log(car != 'Honda City')

console.log("is car =='sabaru'? predict false")
console.log(car == "sabaru")

console.log("is car =='SABARU'? predict false")
console.log(car == "SABARU")

console.log('is car.length == 6? predict true')
console.log(car.length == 6)

console.log('is car.length != 9? predict true')
console.log(car.length != 9)

console.log("is 10 > 45 ? predict false")
console.log(10 > 45)

console.log("is 3 <= 2 ? predict false")
console.log(3 <=2)

console.log("is 77 >= 62 ? predict false")
console.log(77 >= 62)

console.log("is car == 'sabaru' && car.length == 6? predict true")
console.log(car == "sabaru" && car.length == 6)


// task 24

let name_1: string = "Uzair"
let name_2: string = "Muhammad Uzair"
let name_3: string = "Uzair Khilji"

if(name_1 == name_3){
    console.log("names are equal")
} else{
    console.log('name are not equal')
}

if(name_1 != name_2){
    console.log("name are equal")
}

if(name_1 != name_3){
    console.log("name are equal")
}

let age_1: number = 18;
let age_2: number = 20;

if(age_1 == 18){
    console.log("eligible for vote")
}

if(age_1 != 22){
    console.log("eligible for vote in older category")
}

if (age_1 <= age_2){       //less
    console.log("younger")
}

if (age_2 >= age_1){       //greater
    console.log("older")
}

if(age_1 == 18 && age_2 == 20) {
    console.log("person is eligible for vote")
}

if(age_1 == 18 || age_2 != 20) {
    console.log("person is eligible for vote")
}

let country : string [] = ["Pakistan", "India","Japan","China"]
if(country.includes ("Pakistan")){
    console.log("Pakistan is in country list")
}

if (!country.includes ("america")){
    console.log("america is not include in an array")
}

// task 25

let alien_color = "Green"
if(alien_color =="Green")
console.log("you are 5 points.")


let alien_color : string =" Red"
if(alien_color == "Green")
console.log("No output")

// task 26

let alien_color = "Green"
if(alien_color =="Green"){
console.log("playe just earned 5 points for shooting the alien")
}else{
    console.log("playe just earned 5 points ")
}


let alien_color = "Red"
if(alien_color =="Green"){
console.log("playe just earned 5 points for shooting the alien")
}else{
    console.log("playe just earned 5 points ")
}


// task 27
let alien_color :string = 'yellow'

if(alien_color == "Green"){
    console.log("5 points")
}
else if (alien_color == "yellow"){
    console.log("10 points")
}
else{
    console.log("15 points")
}


// task 28

let age : number = 18
if (age < 2){
    console.log("you are a baby ")
}
else if (age <4){
    console.log("you are a toddler")
}
else if (age <13){
    console.log("you are a kid")
}
else if (age <20){
    console.log("you are a teenager")
}
else if (age <65){
    console.log("you are a adult ")
}else{
    console.log("you are older")
}


// task 29

let favorite_fruits : string [] =['kivi','apple','orange','berry','peach']

if(favorite_fruits.includes("kivi")) {
    console.log("kivi")
}
if(favorite_fruits.includes("apple")) {
    console.log( "apple")
}

if(favorite_fruits.includes("orange")) {
    console.log("orange")
}

if(favorite_fruits.includes("berry")) {
    console.log("You really like bananas")
}

if(favorite_fruits.includes("peach")) {
    console.log("You really like bananas")
}


// // task 30

let users: string[] = ['admin', 'eric','ali', 'hasseb', 'fatima']

for (let user of users) {
    if (user === "admin") {
        console.log("Hello admin, would you like to see a status report?")
    } else {
        console.log(`hello ${user}, thank you for again`)
    }
}


//  task 31

let users: string[] = ['admin', 'eric','ali', 'hasseb', 'fatima']

if(users.length === 0){
    console.log("We need to find some users!")
}else{
    for(let user of users){
        if(user === 'admin'){
            console.log("Hello admin, would you like to see a status report")
        }else{
        console.log(`Hello ${user}, thank you for again`)
        }

    }
}

users = []
if(users.length === 0){
    console.log("We need to find some users.")
}


// tsk 32

let current_users : string [] = ['Admin','Eric','Ali','Fatima']
let new_users : string [] = ['admin','fatima', 'Aliza','Hasseb','Noor']

let current_users_lower : string [] = current_users.map(user => user.toLowerCase())

for (let new_user of new_users){
if (current_users_lower.includes (new_user.toLowerCase())){
    console.log(`Soory ${new_user}, that name is taken.`)
}else{
    console.log(`yes ${new_user}, is still in avalible list`)
}
}

// task 33

let numbers :number [] = [1,2,3,4,5,6,7,8,9]

for (let number of numbers){

if (number === 1){
    console.log(`${number}st`)
} else if (number === 2){
    console.log(`${number}nd`)
}
else if (number === 3){
    console.log(`${number}rd`)
}else{
    console.log(`${number}th`)
}
}

// task 34


let favourite_pizza: string[] = ['Pepperoni', 'Margherita', 'BBQ Chicken'];

for(let pizza of favourite_pizza){
    console.log(pizza)
}

console.log("\n")

for(let pizza of favourite_pizza){
    console.log(`I really like ${pizza} pizza`)
}

console.log("n\I really love pizza!")


//  task 35

let animals : string [] = ["Dog", "Cat", "Rabbit"]
for(let animal of animals){
    console.log(animal)
} 
console.log("\n")

for (let animal of animals){
    console.log(`A ${animal} has a  tail`)
}     

console.log("\n all of these are great pets! but i love cat")


// task 36

function makeShirt(size : string, text: string): void{
console.log(`you order a ${size} shirt that says ${text}`)
}

makeShirt('large','"i love typescript"')
makeShirt('medium','"i need a big shirt"')


// task 37

function makeShirt(size : string = "large", text: string ='I love typescript'): void{
console.log(`you have order a ${size}, shirt that says ${text}`)
}
makeShirt();
makeShirt('medium');

// different message
makeShirt("small",'I need a big shirt to wear')


// task 38

function describe_city(city: string, country:string = 'pakistan'):void{
    console.log(`${city} is in ${country}`)
}

describe_city('karachi')
describe_city('farace','europe')
describe_city('lahore',"punjab")


// task 39

function cityCountry(city: string, country:string):string{
    return`${city}, ${country}`
}
let c1 = cityCountry("lahore",'punjab')
let c2 = cityCountry("tokyo",'japan')
let c3 = cityCountry("paris",'france')
console.log(c1)
console.log(c2)
console.log(c3)


// task 40

function makeAlbum (artist: string, title: string):{artist: string; title: string}{
    const dictionaries ={
        artist:artist.charAt(0).toUpperCase() + artist.slice(1),
        title:title.charAt(0).toUpperCase() + title.slice(1)
    }
    return dictionaries
}

let album = makeAlbum("uzair","light")
console.log(album)

album = makeAlbum("bilal","Red wave")
console.log(album)

album = makeAlbum("hassan","seenbreez")
console.log(album)

// task 41

function show_magicians(magicians: string[]): void {

    for(const magician of magicians){
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));

    }
}
const magician :string[] = ['ali', 'hamza', 'bilal'];
show_magicians(magician)


// task 42


function make_great(magicians: string[]):void{

    for( let i = 0; i < magicians.length ; i++){

        magicians[i] = magicians[i] +" "+"the great"
    }
}

const magician2: string[] = ['usman' ,'hasseb','wajahad']
make_great(magician2)
show_magicians(magician2)


// task 43


function make_great2(magicians: string[]): string[] {
    const greatMagicians: string[] = [];
    for (let i = 0; i< magicians.length; i++){
        greatMagicians.push(magicians[i] +" "+ "the great")
    }
    return greatMagicians;
}

const magician3: string[] = ['usman' ,'hasseb','wajahad']
const greatMagicians2: string[] =make_great2(magician3)
show_magicians(magician3)
show_magicians(greatMagicians2)


// // task 44

function sandWich(...item: string[]):void{
    console.log("Sandwich Order:")

    for(let i = 0; i < item.length; i++){
        console.log(`- ${item[i]}`)
    }
}
console.log("Enjoy your sandwich Muhammad Uzair")

sandWich('capsicum','tomato','chicken')
sandWich("beef","cheese")
sandWich("garlic chicken","mayo sauce")


// // task 45

type car = {
    manufacture: string
    model: string
    [key: string]: any;
}
function createCar(manufacture: string, model: string, optional: Record<string, any>): car {
    return {
        manufacture,
        model,
        ...optional

    }
}
const myCar: car = createCar("toyta", 'corola', { color: 'silver', year: "2024" })
console.log(myCar)


