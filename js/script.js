/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
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
    const deleteAdv = (arr) => {arr.forEach(item => item.remove());};
    deleteAdv(advertising);

    const makeChanges = () => {
        const genre = document.querySelector('.promo__genre');
        genre.textContent = 'ДРАМА';
    
        const backg = document.querySelector('.promo__bg');
        backg.style.backgroundImage = 'url("../img/bg.jpg")';
    };
    makeChanges();

    const sortArr = (arr) => {
        arr.sort();
    };
    
    sortArr(movieDB.movies);

    const films = document.querySelector('.promo__interactive-list');
    function addSortedFilm(films, parent) {
        parent.innerHTML = '';
        films.forEach((film, i) => {
            parent.innerHTML += `
                <li class="promo__interactive-item">${i+1} ${film}
                    <div class="delete"></div>
                </li>`;
    
        });
        deleteFilm();
    }
    addSortedFilm(movieDB.movies, films);
    
    function addNewFilm() {
        const form = document.querySelector('.add');
        const input = form.querySelector('.adding__input');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            let inpt = input.value[0].toUpperCase() + input.value.slice(1);
            if(inpt) {
                if(inpt.length > 21) {
                    inpt = inpt.slice(0, 22)+'...';
                }
                movieDB.movies.push(inpt);
                if ('checkbox:cheked') {
                    console.log("Добавляем любимый фильм");
                }
            } 
            sortArr(movieDB.movies);
            addSortedFilm(movieDB.movies, films);
            e.target.reset();
        });
    }
    addNewFilm();
    
    function deleteFilm() {
        document.querySelectorAll('.delete').forEach((item, i) => {
            item.addEventListener('click', (e) => {
                item.parentElement.remove();
                movieDB.movies.splice(i, 1);
                addSortedFilm(movieDB.movies, films);
            });
        });
    }
});