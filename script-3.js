const brandShowElements = document.querySelectorAll('.brand-show');
const expandButton = document.querySelector('.expand_button');
const narrowButton = document.querySelector('.narrow_button');
const expand = document.querySelector('.expand')
const narrow = document.querySelector('.narrow')

expandButton.addEventListener('click', function () {
   brandShowElements.forEach(function(element) {
      element.style.display = 'flex';
});
   expand.style.display = 'none'
   narrow.style.display = 'flex'
})

narrowButton.addEventListener('click', function () {
   brandShowElements.forEach(function(element) {
      element.style.display = 'none';
});
   narrow.style.display = 'none'
   expand.style.display = 'flex'
})

