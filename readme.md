Проект реалізований згідно ТЗ

Для запуску проекту не потрібно виконувати ніяких додаткових дій

Використано методологію БЕМ
Використано препроцесор SCSS

Всі зміни і анімації(якщо нічого не пропустив) виконуються плавно

Реалізована анімація завантаження сторінки з 5 квадратами які рухаються циклічно

Якщо користувач знаходиться 1 хвилину на сайті і нічого не робить, то з'являється поп-ап з запитанням і кнопкою. Якщо кнопка натиснута поп-ап зникає і відлік починається знову.
Якщо кнопка не натиснута то через 5 секунд з'являється алерт, замість закриття сторінки так як Windows.close() не закриває(хоча, цікавий факт, на GitHub Pages інколи скрипт все таки закривав вікно)

В секції What we do реалізована взаємодія з публічним API. Отримуємо JSON з якого потім фільтром відбираємо потрібні елементи.

В секції Testimonials використана бібліотека Swiper

Зборщики проекту не використовував

## /////// Вимоги до конкретних блоків ///////

### Nav: Зроблено згідно завдання

### What we do: Згідно завдання
Інформацію підтягнув з jsonplaceholder, а саме пости
Далі відфільтровував ці пости за userId та виводив на сторінку через innerHTML та шаблонний рядок

 ### Testimonials: Згідно завдання. Використана бібліотека Swiper

### Latest News: Згідно завдання
Реалізоване плавне виникнення кожного блоку по черзі.
Анімація справцьовує кожен раз при скролінгу та при переході по якірному посиланню.

### Don't dorget: Згідно завдання
Реалізована форма, та її валідація.
Для валідації імені та прізвища використано атрибут patеern та регулярний вираз.
Е-мейл валідується стандартним методом браузера.
Якщо ім'я чи прізвище введено не вірно з'являється повідомлення про це (використано Constraint Validation API)
При введенні імені Sigma на всю сторінку з'являється повідомлення.

### Footer: Згідно завдання
