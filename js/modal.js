const body = document.querySelector('body'),
      buyLink = document.querySelectorAll('.btn'),
      modalBuy = document.querySelector('#modal'),
      buyClose = document.querySelector('#buy-close'),
      buyCancel = document.querySelector('#buy-cancel'),
      buyCloseBody = document.querySelector('#buy-close-body'),
      buyContent = document.querySelector('.modal-buy__content');


      
        //Модальное окно товара
function openModalBuy() {
    modalBuy.style.opacity =  '1';
    modalBuy.style.visibility = 'visible';
}
function closeModalBuy() {
    modalBuy.style.opacity =  '0';
    modalBuy.style.visibility = 'hidden';
}
buyClose.addEventListener('click', closeModalBuy);
buyCancel.addEventListener('click', closeModalBuy);
buyCloseBody.addEventListener('click', event => {
    const target = event.target;
    if(!target.closest('.modal-buy__content')) {
        closeModalBuy();
    }
});

buyLink.forEach(item => {
    item.addEventListener('click', openModalBuy);
})
