const hiddenElements = document.querySelectorAll('.hidden');
const expandButton = document.querySelector('.expand_button');
const narrowButton = document.querySelector('.narrow_button');
const expand = document.querySelector('.expand')
const narrow = document.querySelector('.narrow')

expandButton.addEventListener('click', function () {
   hiddenElements.forEach(function(element) {
      element.style.display = 'flex';
});
   expand.style.display = 'none'
   narrow.style.display = 'flex'
})

narrowButton.addEventListener('click', function () {
   hiddenElements.forEach(function(element) {
      element.style.display = 'none';
});
   narrow.style.display = 'none'
   expand.style.display = 'flex'
})




// document.addEventListener('DOMContentLoaded', function() {
//    const toggleButton = document.querySelector('.toggle-button');
//    const brandItems = document.querySelectorAll('.brand-list-item');
   
//    // Переменная для отслеживания состояния
//    let showingAll = false;

//    toggleButton.addEventListener('click', function() {
//        if (showingAll) {
//            // Возвращаемся к 6 элементам
//            for (let i = 6; i < brandItems.length; i++) {
//                brandItems[i].classList.add('hidden');
//            }
//            toggleButton.textContent = 'Показать все';
//            showingAll = false;
//        } else {
//            // Показываем все 11 элементов
//            for (let i = 6; i < brandItems.length; i++) {
//                brandItems[i].classList.remove('hidden');
//            }
//            toggleButton.textContent = 'Скрыть';
//            showingAll = true;
//        }
//    });
// });




// document.addEventListener('DOMContentLoaded', function () {
//    const items = document.querySelectorAll('.brand-list-item');
//    const button = document.querySelector('.toggle-button');
   
//    button.addEventListener('click', function () {
//        const visibleItems = Array.from(items).filter(item => !item.classList.contains('hidden')).length;

//        if (visibleItems === 6 || visibleItems === 8) {
//            // Показываем все 11 элементов
//            items.forEach(item => {
//                item.classList.remove('hidden');
//            });
//            button.textContent = 'Показать 6 элементов'; // Или 'Показать 8 элементов' в зависимости от состояния
//        } else if (visibleItems === 11) {
//            // Определяем, сколько элементов вернуть
//            const originalCount = (visibleItems === 11) ? 6 : 8; // Или можно добавить условие для 8 элементов
//            items.forEach((item, index) => {
//                if (index >= originalCount) {
//                    item.classList.add('hidden');
//                }
//            });
//            button.textContent = 'Показать все';
//        }
//    });
// });

// expandButton.addEventListener('click', function () {
//    brandShowElements.forEach(function(element) {
//       element.style.display = 'flex';
// });
//    expand.style.display = 'none'
//    narrow.style.display = 'flex'
// })

// narrowButton.addEventListener('click', function () {
//    brandShowElements.forEach(function(element) {
//       element.style.display = 'none';
// });
//    narrow.style.display = 'none'
//    expand.style.display = 'flex'
// })