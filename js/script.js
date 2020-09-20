/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const advertising = document.querySelectorAll('.promo__adv img');
advertising.forEach(item => item.remove());

const genre = document.querySelector('.promo__genre');
genre.textContent = 'ДРАМА';

const backg = document.querySelector('.promo__bg');
backg.style.backgroundImage = 'url("../img/bg.jpg")';

movieDB['movies'].sort();
const films = document.querySelector('.promo__interactive-list');
const items = films.querySelectorAll('.promo__interactive-item');
items.forEach((item, i) => items[i].textContent = `${i+1} ${movieDB['movies'][i]}`);