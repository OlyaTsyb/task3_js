//Завантажити з мережі будь-який шаблон сайту. Підключити до нього свій скріпт-файл. У файлі прописати наступні доступи та дії
// знайти всі елементі, які мають class
 // знайти всі параграфи ,та змінити текст на hello oktenweb!
// знайти всі div та змінити ім колір на червоний

let elements = document.getElementsByTagName('*');
for(let tag  of elements){
   if(tag.getAttribute('class'));
    console.log(tag);
}
let element = document.getElementsByTagName('p');
for(let tag  of element){
    tag.innerText = 'hello oktenweb!';
}
let elementDiv = document.getElementsByTagName('div');
for(let tag  of elementDiv){
    tag.style.backgroundColor = 'red';
}