//создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей. 
//(Т.е поле name  должно присутствовать только 1 раз в одном объекте )
// При помощи for in вывести все ключи всех объектов из задания 1 и 2
//При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2
//взять объекты из задания 1 и превратить каждый в json.
/*
let pupiel = {
    name:'Oleg',
    age: 12,
    status: true,
    city: 'Odessa',
}
for (let p in pupiel){
    let pup =pupiel[p];

    document.write(`<br>${pup}</br>`);
}
let string = Object.keys(pupiel);
    document.write(string);



let stories = {
    author: 'Shevchenko',
    year: 1900,
    countOfPages: 315,
    isSelling: true,
}
for (let st in stories){
    let story = stories[st];
    document.write(`<br>${story}</br>`);
}

let string1 = Object.keys(stories);
    document.write(string1);

let person = {
    idCard: 9876899,
    name: 'Taras',
    age: 33,
    isResident: true,
}
for (let p in person){
    let pers = person[p];
    document.write(`<br>${pers}</br>`);
}
let string2 = Object.keys(person);
    console.log(string2);

let school = {
    isJunior: false,
    name: 'First',
    numberOfShool: 24,
    adress:{
        city:'Lviv',
        country: 'Ukraine',
        street: 'Pasichna', 
        houseNumber:3
    }
}
for (let sc in school){
    let schoo = school[sc];
    document.write(`<br>${schoo}</br>`);
}

let string3 = Object.keys(school);
    document.write(string3);

let student = {
    name: 'Oksana',
    age: 34,
    status: false,
    address: {
        city: 'Lviv',
        country: 'Ukraine',
    }
}
for (let st in student){
    let stud = student[st];
    document.write(`<br>${stud}</br>`);
}
let string4 = Object.keys(student);
    document.write(string4);
*/

    ///создать 5 объектов с полностью разным набором полей. В каждом объекте должен присутсвовать массив и внутренний объект. 
/*
let book = {
    author: "Mathematic",
    year: 2015,
    countOfPages: 215,
    isSelling: true,
    languiges: ['russian', 'ukraine']
}
for (let b in book){
    let boo = book[b];
    document.write(`<br>${boo}</br>`);
}

let string5 = Object.keys(book);
    document.write(string5);


let user = {
    idCard: 13456,
    name: 'vasya',
    age: 44, 
    isResident: false,
    passports: ["ukrainian", 'canadien']
}
for (let u in user){
    let us = user[u];
    document.write(`<br>${us}</br>`);
}

let string6 = Object.keys(user);
    document.write(string6);

let shop = {
    adress:{
        city: 'Kyiv',
        country: 'Ukraine',
        street: 'Polishchuka str', 
        houseNumber: 4
    },
    isOpenFullTime:true,
    name: "okey",
    numberOfShop: 5,
    listOf: ['clothes','shoes']
}
for (let s in shop){
    let sh = shop[s];
    document.write(`<br>${sh}</br>`);
}
let string7 = Object.keys(shop);
    document.write(string7);

*/
//Опишите что угодно, машину, картину, болт... Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };
/*
let sister = {
    name: "Svitlana",
    lastname: "Odnorig",
    age: 45,
    adress: {
        street: "Pasichna",
        house: 25,
        flat: 5,
    },
    isMarried: true,
    children: {
        olderDauther:{
            name: "Anna",
            age: 18,
        },
        juniorDauter:{
            name: "Yustina",
            age: 15,
        }
    }

}
*/


//5.Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет. (Значаения полей могу быть выдуманными)//
//- проитерировать каждый массив из задания 5,6,7 при помощи while.
//проитерировать каждый массив из задания 5,6,7 при помощи for .
// проитерировать каждый массив из задания 5,6,7 при помощи  for of.

/*
let listOfCars = [{
        model:"Acura NSX",
        year: 2020,
        power:650,
        color: "black"
} , {
        model:"Acura NSX Type R",
        year: 2019,
        power: 670,
        color:"red"

} , {
        model:"Alfa Romeo Crosswagon Q4 ",
        year: 2019,
        power: 300,
        color:"white"

} , {
        model:"Aston Martin Booldog",
        year: 2018,
        power: 350,
        color:"blue"
} , {
        model:"Infiniti G",
        year: 2019,
        power: 330,
        color:"yellow"
} , {
        model:"Genesis G80 3 Ultimate AT",
        year: 2019,
        power: 280,
        color:"red"
} , {
        model:"Dodge Challenger Hardtop (JH23)",
        year: 1970,
        power: 180,
        color:"purple"
} , {
        model:"Hummer H2 SUT on Forgiato Wheels (Finestro)",
        year: 2019,
        power: 380,
        color:"blue"
} , {
        model:"Lexus LM",
        year: 2019,
        power: 280,
        color:"grey"
} , {
        model:"Renau megan",
        year: 2018,
        power: 180,
        color:"black"
    }];
for(let i = 0; i < listOfCars.length; i++){
    document.write(listOfCars[i]);
}
let b = 0;
while(b < listOfCars.length){
    document.write(listOfCars[b]);
    b++;
}
 for(let z in listOfCars) {
     let list = listOfCars[i];
     console.log(list);
 }
 */


 //6.Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион. (Значаения полей могу быть выдуманными)
//- проитерировать каждый массив из задания 5,6,7 при помощи while.
//проитерировать каждый массив из задания 5,6,7 при помощи for .
// проитерировать каждый массив из задания 5,6,7 при помощи  for of.
/*
let cities = [{
        name: "Lviv",
        population: 1150000,
        country: "Ukraine",
        region: "Lviv region"
} , {
        name: "Kyiv",
        population: 1150000,
        country: "Ukraine",
        region: "Kyiv region"
} , {
        name: "Kharkiv",
        population: 1700000,
        country: "Ukraine",
        region: "Kharkiv region"
} , {
        name: "Minsk",
        population: 1409875,
        country: "Belarussia",
        region: "Minsk region"
} , {
        name: "Warshaw",
        population: 1568000,
        country: "Poland",
        region: "Warshaw region"
}];
for(let j = 0; j < cities.length; j++){
    document.write(cities[j]);
}
let i =0;
while(i < cities.length){
    document.write(cities[i]);
    i++;
}
for(let i in cities) {
    let city = cities[i];
    console.log(city);
}
//взять массив из задания 6,в цикле перебрать его объекты превратив их в json .

for(let i = 0;i < cities.length;i++){
    let jsonInCit = JSON.stringify(cities)
    console.log(jsonInCit);
}
*/


//7.Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель.
// Водитель является отдельным объектом с полями имя, возраст, пол, стаж.
//- проитерировать каждый массив из задания 5,6,7 при помощи while.
//проитерировать каждый массив из задания 5,6,7 при помощи for .
// проитерировать каждый массив из задания 5,6,7 при помощи  for of.
// взять массив из задания 5,в цикле перебрать его объекты превратив их в json .
/*
let cars = [{
    model: "Fiat S56",
    year: 2019,
    power:345 ,
    color:"black",
    driver:{
        name:"Yuriy",
        age: 38,
        maleOrFemale: "man",
        experience: 15,
    }
} , {
    model: "Renau S56",
    year: 2019,
    power:205 ,
    color:"blue",
    driver:{
        name:"Oksana",
        age: 33,
        maleOrFemale: "woman",
        experience: 10,
    }
} , {
    model: "Walswagen",
    year: 2012,
    power:145 ,
    color:"red",
    driver:{
        name:"Stepan",
        age: 28,
        maleOrFemale: "man",
        experience: 5,
    }
} , {
    model: "Skoda",
    year: 2015,
    power:185 ,
    color:"white",
    driver:{
        name:"Maksym",
        age: 55,
        maleOrFemale: "man",
        experience: 25,
    }
}];        

for(let i = 0; i < cars.length; i++){
    document.write(cars[i]);
}
let j = 0;
while(j < cars.length){
    document.write(cars[j]);
    j++;
}
for(let i in cars) {
    let car = cars[i];
    console.log(car);
}
*/

// взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.
/*
let new =[];
for(let i = 0; i < cars.length; i++){
    let new[i] = JSON.stringify(cars[i])
    console.log(new);
}
*/

//взять объекты из задания 1 и превратить каждый в json.
/*
let str = JSON.stringify(pupiel);
    console.log(str)

let story = JSON.stringify(stories);
    console.log(story)

let s = JSON.stringify(school);
    console.log(s)

let st = JSON.stringify(student);
    console.log(st)


let pers = JSON.stringify(person);
    console.log(pers)
*/
//взять json из задания 11 и превратить их обратно в объекты.

/*
let pupielCopy = JSON.parse(str);
    console.log(pupielCopy)

let storiesCopy = JSON.parse(story);
    console.log(storiesCopy)    

let schoolCopy = JSON.parse(s);
    console.log(schoolCopy)

let studentCopy = JSON.parse(st);
    console.log(studentCopy)

let personCopy = JSON.parse(pers);
    console.log(personCopy)    
*/

 // За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.
 /*
 let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    skills: ['java', 'js']},
{
    name: 'petya',
    age: 30,
    status: true,
    skills: ['java', 'js', 'html']},
{
    name: 'kolya',
    age: 29,
    status: true,
    skills: ['mysql', ',mongo']},
{
    name: 'olya',
    age: 28, 
    status: false, 
    skills: ['java', 'js']}, 
{   
    name: 'max', 
    age: 30, 
    status: true, 
    skills: ['mysql', ',mongo']}];
for(let i  of users){
    for(let skill of i.skills){
        document.write(skill)
    }
}
*/

//З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
/*
 let users = [{
     name: 'vasya',
     age: 31,
     status: false,
     address: { city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1 }
 }, {
     name: 'petya',
     age: 30,
     status: true,
     address: { city: 'New York', country: 'USA', street: 'East str', houseNumber: 21 }
 }, {
     name: 'kolya',
     age: 29,
     status: true,
     address: { city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78 }
 }, {
     name: 'olya',
     age: 28,
     status: false,
     address: { city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56 }
 }, {
     name: 'max',
     age: 30,
     status: true,
     address: { city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39 }
 }, {
     name: 'anya',
     age: 31,
     status: false,
     address: { city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5 }
 }, {
     name: 'oleg',
     age: 28,
     status: false,
     address: { city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90 }
 }, {
     name: 'andrey',
     age: 29,
    status: true,
     address: { city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33 }
 }, {
     name: 'masha',
     age: 30,
     status: true,
     address: { city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1 }
 }, {
     name: 'olya',
     age: 31,
     status: false,
     address: { city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4 }
 }, {
     name: 'max',
     age: 31,
     status: true,
     address: { city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45 }
 }];

 let usersCopy = [];
 for (let i of users) {
        usersCopy = i.address;
        console.log(usersCopy)
    }
  
*/

//- Дано 2 масиви з рівною кількістю об'єктів.
//Масиви:
//            let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
 //           let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
//З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//Записати цей об'єкт в новий масив
//Частковий приклад реультату:
//let usersWithCities = [{id: 1, name: 'vasya', age: 31, status: false, address: {user_id: 1, country: 'Ukraine', city: 'Ternopil'}}....]

/*
let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
let userCitieWithId = [];
      for(let user of usersWithId){
          for(let city of citiesWithId){
             if(user.id === city.user_id){
                    user.adress = city;
                  }
              }
         console.log(usersWithId);
    }       
        
*/
   

   

// За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам ,
// блок з адресою зробити окремим блоком, з блоками для кожної властивості

/*
for(let i = 0;i < users.length;i++){
    let user = users[i];
    let div = document.createElement('div');
    let address = "";
    for(let add in user.address){
        address = address + user.address[add];
        div.innerText =`${user.name} ${user.age}  ${address}`;
    }
}
*/

// За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)
/*
for(let i = 0;i < users.length;i++){
    let user = users[i];
    let div = document.createElement('div');
    let div1 = document.createElement('div');
    let div2 = document.createElement('div');
    let div3 = document.createElement('div');
    let div4 = document.createElement('div');
    let address = "";
    for(let add in user.address){
        address = address + user.address[add];
    }
   div.innerText =`${user.name} ${user.age}  ${address}`;
    div1.innerText = user.name;
    div2.innerText = user.age;
    div3.innerText = user.status;
    div4.innerText = address;
    div.appendChild(div1);
    div.appendChild(div2);
    div.appendChild(div3);
    div.appendChild(div4);
    
    document.body.appendChild(div);
}
*/


// допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.
/*
for(let i = 0;i < users.length;i++){
    let user = users[i];
    let div = document.createElement('div');
    let address = "";
    for(let add in user.address){
        address = address + user.address[add];
    }
    div.innerText = `${user.name} ${user.age}  ${user.status} ${address}`;
    document.body.appendChild(div);

}
*/
//за допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
// розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості
/*
for(let i = 0;i < users.length;i++){
    let user = users[i];
    let div = document.createElement('div');
    let name = document.createElement('div');
    let age = document.createElement('div');
    let status = document.createElement('div');
    
    let address = document.createElement('div');
    
    for(let i in user.address){
        let adr = document.createElement('div');
        adr.innerText = user.address[i];
        address.appendChild(adr);
    }
    
    name.innerText = user.name;
    age.innerText = user.age;
    status.innerText = user.status;
    div.appendChild(name);
    div.appendChild(age);
    div.appendChild(status);
    div.appendChild(address);
    document.body.appendChild(div);
}

*/
//створити розмітці блок з id, class та текстом в середені. Зчитати окремо цей текст з селекторів по id , class та тегу
//змінити цей текст використовуючи селектори id, class,  tag
//- змінити висоту та ширину блоку використовуючи селектори id, class,  tag
//- за допомоги document.createElement та appendChild створити таблицю на 1 рядок з трьома ячейками всередені
//- за допомоги document.createElement, appendChild та циклу створити таблицю на 10 рядків з трьома ячейками всередені
//- за допомоги document.createElement, appendChild та 2х циклів створити таблицю на 10 рядків з 5 ячейками всередені
//- за допомоги document.createElement, appendChild та 2х циклів створити таблицю на n рядків з m ячейками всередені. n та m отримати з prompt
/*
let element = document.getElementById('wrap');
let text = element.innerText;
console.log(text);
let element2 = document.getElementsByClassName('rules');
      for(let textElement2 of element2){
        console.log(textElement2);
        textElement2.style.backgroundColor = 'blue';
        textElement2.style.width = '250px';
        textElement2.style.height = '50px';
        textElement2.innerText = 'new text';
    }
let element3 = document.getElementsByTagName('h2');
    
      console.log(element3);
      element3.innerText = 'new text';
*/  

    
//- за допомоги document.createElement та appendChild створити таблицю на 1 рядок з трьома ячейками всередені
 
 /*
 let table = document.createElement('table');
 let table_tr = document.createElement('tr');
 let table_td = document.createElement('td');
 let table_td2 = document.createElement('td');
 let table_td3 = document.createElement('td');
 tr.appendChild(td);
 tr.appendChild(td2);
 tr.appendChild(td3);

 table.appendChild(table);
document.body.appendChild(table);
*/

// за допомоги document.createElement, appendChild та циклу створити таблицю на 10 рядків 
//з трьома ячейками всередені

/*
let table = document.createElement('table');
for(let i = 0;i < 10;i++){
    let table_tr = document.createElement('tr');
    for(let i = 0;i < 3;i++){
        let table_td = document.createElement('table_td');
        table_tr.appendChild(table_td);
    }
    table.appendChild(table);
}
document.body.appendChild(table);
*/


//за допомоги document.createElement, appendChild та 2х циклів створити таблицю 
//на 10 рядків з 5 ячейками всередені
/*
let table = document.createElement('table');
for(let i = 0;i < 10;i++){
    let table_tr = document.createElement('tr');
    for(let i = 0;i < 5;i++){
        let table_td = document.createElement('table_td');
        table_tr.appendChild(table_td);
    }
    table.appendChild(table);
}
document.body.appendChild(table);
*/

//Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills
/*
let userS = [{name: 'vasya', age: 31, status: false, skills: ['java', 'js']},
           {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']},
           {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']},
           {name: 'olya', age: 28, status: false, skills: ['java', 'js']}, 
           {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}];
for(let user of users){
    console.log(user.name);
    for(let skill of user.skills){
        console.log(skill);
    }
}
*/
//Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills.Скопировать все skills всех пользователей в отедльный массив

/*
let users = [{name: 'vasya', age: 31, status: false, skills: ['java', 'js']},
           {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']},
           {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']},
           {name: 'olya', age: 28, status: false, skills: ['java', 'js']}, 
           {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}];

let userSCopy =[]
for(let user of users){
    console.log(user.name);
    for(let skill of user.skills){
        userSCopy.push(skill);
        
    }
}console.log(userSCopy);
*/
