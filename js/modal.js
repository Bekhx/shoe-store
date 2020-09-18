const body = document.querySelector('body'),
    buyLink = document.querySelectorAll('.btn'),
    modalBuy = document.querySelector('#modal'),
    buyClose = document.querySelector('#buy-close'),
    buyCloseBody = document.querySelector('#buy-close-body'),
    buyContent = document.querySelector('.modal-buy__content'),
    modalBuyTitle = document.querySelector('.modal-buy__title'),
    pBuy = document.querySelector('.p-buy'),
    btnBuy1 = document.querySelector('#btn-buy-1'),
    btnBuy2 = document.querySelector('#btn-buy-2'),
    btnBuy3 = document.querySelector('#btn-buy-3'),
    imgBuy = document.querySelector('#img-buy');


      
        //Модальное окно товара
function openModalBuy() {
    modalBuy.style.opacity =  '1';
    modalBuy.style.visibility = 'visible';
    modalBuy.style.transition = 'all .3s ease-in-out';
}
function closeModalBuy() {
    modalBuy.style.opacity =  '0';
    modalBuy.style.visibility = 'hidden';
}
buyClose.addEventListener('click', closeModalBuy);
buyCloseBody.addEventListener('click', event => {
    const target = event.target;
    if(!target.closest('.modal-buy__content')) {
        closeModalBuy();
    }
});

buyLink.forEach(item => {
    item.addEventListener('click', (event) => {
        const target = event.target;
        if(target === btnBuy1) {
            openModalBuy();
            modalBuyTitle.textContent = 'Доступны все варианты продукта!';
            pBuy.textContent = 'Nike air max 90 ultra essential, ultra mid, off white, black, orange, black white.';
            imgBuy.src = '../img/buy-1.jpg'
        } else if(target === btnBuy2) {
            openModalBuy();
            modalBuyTitle.textContent = 'NIKE AIR MAX 270';
            pBuy.textContent = 'При покупке от двух пар кроссовок доставка бесплатно.';
            imgBuy.src = '../img/buy-2.jpeg'
        } else if(target === btnBuy3) {
            openModalBuy();
            modalBuyTitle.textContent = 'Товар в четырех разных цветах.';
            pBuy.textContent = 'Nike air jordan 1 mid se union black toe, iridescent trim, multicolor, game royal.';
            imgBuy.src = '../img/buy-3.jpg'
        }
    });
})
