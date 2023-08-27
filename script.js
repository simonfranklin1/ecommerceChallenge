/* Button buy */

    const num = document.getElementById("number");
    num.innerHTML = num.value;
    
    let price = 125.00;
    let newPrice = 0
    
    let addMore = function() {
        num.value++;
        num.innerHTML = num.value;
    
        newPrice = price * num.value
        console.log(newPrice);
    }
    let addLess = function() {
        if(num.value > 0) {
            num.value--;
            num.innerHTML = num.value;
        }
    
        newPrice = price * num.value
        console.log(newPrice);
    }
    
/* Imagens mobile */
    
    const imagens = document.querySelectorAll('.imagem');
    const btnPrev = window.document.getElementById('previous');
    const btnNext = window.document.getElementById('next');
    const botoes = window.document.querySelectorAll('.botao');
    
    let index = 0;
    
    function hideImage() {
        imagens.forEach(img => img.classList.remove('ativa'));
    }
    
    function showImage() {
        imagens[index].classList.add('ativa');
    }
    
    function nextImage() {
        hideImage();
    
        if(index === imagens.length - 1) {
            index = 0;
        } else {
            index++;
        }
    
        showImage();
    };
    
    function prevImage() {
        hideImage();
    
        if( index === 0) {
            index = imagens.length - 1;
        } else {
            index--;
        }
    
        showImage();
    };
    
    btnNext.addEventListener('click', nextImage);
    btnPrev.addEventListener('click', prevImage);
    
/* Menu mobile*/
    
    const menu = document.getElementById('menu-open');
    const background = document.getElementById('background');
    const closeM = document.getElementById('close')
    
    function openMenu() {
        menu.style.display = 'block';
        menu.style.animation = ' abrir 0.5s';
        menu.style.zIndex = '3';
        background.style.display = 'block';
        background.style.zIndex = '3';
        btnNext.style.display = 'none';
        btnPrev.style.display = 'none';
        

        setTimeout(function () {
            menu.innerHTML = `<button id="close"><img src="images/icon-close.svg" alt="" onclick="closeMenu()"></button>
            <a href="#"><p>Collections</p></a>
            <a href="#"><p>Men</p></a>
            <a href="#"><p>Women</p></a>
            <a href="#"><p>About</p></a>
            <a href="#"><p>Contact</p></a>`;
        }, 300);
    }

    function closeMenu() {
        menu.style.animation = 'fechar 0.5s';
        menu.innerHTML = '';

        setTimeout(function() {
            menu.style.display = 'none';
            background.style.display = 'none';
            btnNext.style.display = 'flex';
            btnPrev.style.display = 'flex';
        }, 300);   
    }

    /*closeM.addEventListener('click', () => {
        menu.style.animation = 'fechar 0.5s';
        menu.innerHTML = '';

        setTimeout(function() {
            menu.style.display = 'none';
            background.style.display = 'none';
            btnNext.style.display = 'flex';
            btnPrev.style.display = 'flex';
        }, 300);

    });*/
    
/* Cart */
    
    const cartIcon = window.document.getElementById("cart-icon");
    const cart = window.document.getElementById('cart');
  
    cartIcon.addEventListener('click', () => {
        if(cart.style.display === 'flex') {
            cart.style.animation = 'sumir 0.5s';

            setTimeout(function() {
                cart.style.display = 'none';
                btnNext.style.display = 'inline-block';
                btnPrev.style.display = 'inline-block';
            }, 300);
        } 
        else {
            btnNext.style.display = 'none';
            btnPrev.style.display = 'none';
            cart.style.animation = 'aparecer 0.5s'
            cart.style.display = 'flex';
        }  
    });
  
    const buttonBuy = window.document.getElementById('button_buy');
    const notification = document.getElementById('cart-notification');
    let textCart = document.getElementById("cart-text");
    let buyCart = document.getElementById("cart-buy");
    let del = document.getElementById("delete");
  
    buttonBuy.addEventListener("click", () => {
        if(num.value > 0) {
            textCart.style.display = 'none';
            buyCart.style.display = 'flex';
            notification.style.display = 'flex';
            notification.innerText = `${num.value}`;
    
            buyCart.innerHTML = `
            <div id="product"> 
            <div id="sneaker">
            <img src="images/image-product-1-thumbnail.jpg" alt="">
            <p>Fall Limited Edition Sneakers <br> $125.00 x ${num.value} <b>$${newPrice}.00</b></p>
            </div> 
            <div id="delete" onclick = "deleteCart()">
                <img src="images/icon-delete.svg" alt="">
            </div>
            </div>
            <button id="checkout-button" onclick="thanksMessage()">Checkout</button>`;
        } else {
            window.alert('Add some item to the cart');
        }
    
        num.value = 0;
        num.innerHTML = num.value;
    });
    
    function deleteCart() {
        buyCart.style.display = 'none';
        textCart.style.display = 'flex';
        textCart.style.textAlign = 'center';
        textCart.innerHTML = 'Your cart is empty'; 
        notification.style.display = 'none'; 
    }
    
    function thanksMessage() {
        window.alert('Thank you very much for your trust and preference.Know that it fills us with joy to have you as a customer.Come back often.');
    }
  
/* Imagens Desktop */

const btnThumb = window.document.querySelectorAll('.btnC');
const desktopimages = window.document.querySelectorAll('img.dImagem');
let imagemAtiva = document.querySelector('.dAtiva');

let indexForOpen = 0;

btnThumb.forEach((button, index) => {
    button.addEventListener('click', () => {
        indexForOpen = " ";
        
        disableSelectedButton();

        button.classList.add('dSelect');

        changeImage();

        desktopimages[index].classList.add('dAtiva');
        
        indexForOpen = index;
    })
})

function changeImage() {
    const activeImage = window.document.querySelector('.dAtiva');
    activeImage.classList.remove('dAtiva');
}

function disableSelectedButton() {
    const activeButton = window.document.querySelector('.dSelect');
    activeButton.classList.remove('dSelect');
}

/* Desktop open Images */

const closeButton = document.getElementById('close-bigDesktop');
const OpenImages = document.getElementById('desktop-open-images');
const desktopImagesDiv = document.getElementById('desktop-images');

closeButton.addEventListener('click', () => {
    OpenImages.style.display = 'none';
    background.style.display = 'none';
})

desktopImagesDiv.addEventListener('click', () => {
    OpenImages.style.display = 'block';
    background.style.display = 'block';

    const activeImg = document.querySelector('.dBActive');
    activeImg.classList.remove('dBActive');
    OpenButtons.forEach(btn => btn.classList.remove('dBSelect'));

    bigImages[indexForOpen].classList.add('dBActive');
    OpenButtons[indexForOpen].classList.add('dBSelect');
})

const bigImages = window.document.querySelectorAll('img.dBImage');
const openBtnNext = document.getElementById('nextB');
const openBtnPrev = document.getElementById('prevB');
const OpenButtons = document.querySelectorAll('img.bBtnC');

let idx = 0;

function openHideImg() {
    bigImages.forEach(img => img.classList.remove('dBActive'));
}

function openHideBtn() {
    OpenButtons.forEach(btn => btn.classList.remove('dBSelect'));
}

function openShowImg() {
    bigImages[idx].classList.add('dBActive');
}

function openShowBtn() {
    OpenButtons[idx].classList.add('dBSelect');
}

openBtnNext.addEventListener('click', () => {
    openHideImg();
    openHideBtn();

    if(idx === bigImages.length - 1) {
        idx = 0;
    } else {
        idx++
    }

    openShowImg();
    openShowBtn();
});

openBtnPrev.addEventListener('click', () => {
    openHideImg();
    openHideBtn();
    
    if(idx === 0 ) {
        idx = bigImages.length - 1;
    } else {
        idx--;
    }

    openShowImg();
    openShowBtn();
});

OpenButtons.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        openHideBtn();

        btn.classList.add('dBSelect');

        changeImage2();

        bigImages[idx].classList.add('dBActive');
    })
})

const changeImage2 = function() {
    const activeImg = document.querySelector('.dBActive');
    activeImg.classList.remove('dBActive');
}