const btnMenu = document.getElementById('btnMenu');
const btnClose = document.getElementById('btnClose');
const modalContainer = document.querySelector('.modal-container');

btnMenu.addEventListener('click', function(){
    modalContainer.style.display = 'flex';
})

btnClose.addEventListener('click', function(){
    modalContainer.style.display = 'none';
})
