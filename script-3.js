let items = document.querySelectorAll(".brand-list-item");
let toggleButton = document.querySelector(".expand_button");
let displayCount = 6; // Начальное количество видимых элементов
let expand = document.getElementById('expand-image')
let narrow = document.getElementById('narrow-image')

function updateItems() {
        // Показать нужное количество элементов
   for (var i = 0; i < items.length; i++) {
      if (window.innerWidth >= 1120 && displayCount === 6) {
         displayCount = 8;
      }
      if (i < displayCount) {
         items[i].classList.remove("hidden");
      } else {
         items[i].classList.add("hidden");
      }     
   }
        // Обновить текст кнопки
   if (displayCount === 11) {
      toggleButton.textContent = "Скрыть";
      toggleButton.classList.add('rotate');
   } else {
      toggleButton.textContent = "Показать все";
      toggleButton.classList.remove('rotate');
   }
      }

toggleButton.onclick = function () {
        // Если отображаем 6 или 8 элементов, переключаем на 11
   if (displayCount === 6 || displayCount === 8) {
   displayCount = 11;
   } else if // Если отображаем все 11 элементов, вернём к 6 или 8
   (displayCount === 11 && window.innerWidth >= 768) {
   displayCount = 6;
   } else if (displayCount === 11 && window.innerWidth >= 1120) {
   displayCount = 8;
   }
   
   updateItems();
   };

      // Первоначальное отображение элементов
   updateItems();