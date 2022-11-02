import profitList from '/js/profit-list.js';
import flatsList from '/js/flats-list.js';
import planList from '/js/plan-list.js';
import detailsList from '/js/details-list.js'


//BLOCK ONE
// выводим кнопки для пагинации
const dotsOneList = document.querySelectorAll('.one .dots')
const oneBg = document.querySelector('.one-bg')

const checkBtn = (num, event) => {
    // Подкрашиваем выбранную кнопку
    dotsOneList.forEach(item => item.classList.remove('go'))
    dotsOneList[num].classList.add('go')
    // Подкручиваем фон
    let offsetX = (num * 20) + 10
    oneBg.style.backgroundPosition = `${offsetX}% 60%`
}

dotsOneList[0].addEventListener('click', checkBtn.bind(null, 0))
dotsOneList[1].addEventListener('click', checkBtn.bind(null, 1))
dotsOneList[2].addEventListener('click', checkBtn.bind(null, 2))
dotsOneList[3].addEventListener('click', checkBtn.bind(null, 3))

if (window.innerWidth <= 576) {
    let num = 0
    setInterval(() => {
        num = num + 1;
        if (num == 4) {
            num = 0;
        }
        checkBtn(num)
    }, 5000);

}


// BLOCK THREE 
// ВЫВОДИМ КАРТОЧКИ ЧЕРЕЗ ЦИКЛ
const profitContainer = document.getElementById('profit')

profitList.forEach(item => {
    let card = `
        <div 
            class="card"
            style="background-image: url(${item.img});"
        >
            <div class="card-content">
                <div class="title_wrap">
                    <p class="title">${item.title}</p>
                </div>
                <p class="text">${item.text}</p>
            </div>
        </div>
    `
    profitContainer.insertAdjacentHTML("beforeend", card)
}); 

// выводим кнопки для пагинации
const dotsThreeList = document.querySelectorAll('.three .dots')
const threeCardContainer = document.querySelector('.three .card-container')

const showCardThree = (num, event) => {
    dotsThreeList.forEach(item => item.classList.remove('go'))
    dotsThreeList[num].classList.add('go')

    let offsetX = 46 - (num * 324)
    threeCardContainer.style.left = `${offsetX}px`
}

dotsThreeList[0].addEventListener('click', showCardThree.bind(null, 0))
dotsThreeList[1].addEventListener('click', showCardThree.bind(null, 1))
dotsThreeList[2].addEventListener('click', showCardThree.bind(null, 2))
dotsThreeList[3].addEventListener('click', showCardThree.bind(null, 3))
dotsThreeList[4].addEventListener('click', showCardThree.bind(null, 4))
dotsThreeList[5].addEventListener('click', showCardThree.bind(null, 5))

if (window.innerWidth <= 576) {
    let num = 0
    setInterval(() => {
        num = num + 1;
        if (num == 6) {
            num = 0;
        }
        showCardThree(num)
    }, 3000);

}

// BLOCK FOUR 
// ВЫВОДИМ КАРТОЧКИ ЧЕРЕЗ ЦИКЛ

const flatsContainer = document.getElementById('flats');

flatsList.forEach(item => {
    let card = `
        <div class="card">
            <img src="${item.img}" alt="Изображение комнаты">
            <div class="card-content">
                <div class="inner-one">
                    <div class="scheme">
                        <img src="${item.scheme}" alt="Схема комнаты">
                        <p class="addition">${item.addition}</p>
                    </div>
                    <div class="description">
                        <div class="title">${item.title}</div>
                        <p class="text">${item.text}</p>
                        <button>Это моя квартира</button>
                    </div>
                </div>
                <div class="line"></div>
                <div class="inner-two">
                    <div class="price">
                        <table>
                            <tr class="title">
                            <td>Стоимость</td>
                            </tr>
                            <tr class="text">
                            <td>${item.price} <span>${item.monthly}</span></td>
                            </tr>
                        </table>
                    </div>
                    <div class="area">
                        <table>
                            <tr class="title">
                            <td>Площадь</td>
                            <td>Секция</td>
                            <td>Этаж</td>
                            </tr>
                            <tr class="text">
                            <td>${item.square}</td>
                            <td>${item.section}</td>
                            <td>${item.floor}</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    `
    flatsContainer.insertAdjacentHTML("beforeend", card)
})

// выводим кнопки для пагинации
const dotsFourList = document.querySelectorAll('.four .dots')
const fourCardContainer = document.querySelector('.four .card-container')

const showCardFour = (num, event) => {
    dotsFourList.forEach(item => item.classList.remove('go'))
    dotsFourList[num].classList.add('go')

    let offsetX
    if (window.innerWidth > 1156) {
        offsetX = -(num * 1197)
    }
    else if (window.innerWidth <= 1156) {
        offsetX = -(num * 836)
    }
    fourCardContainer.style.left = `calc(17.5vw + ${offsetX}px)`
}

dotsFourList[0].addEventListener('click', showCardFour.bind(null, 0))
dotsFourList[1].addEventListener('click', showCardFour.bind(null, 1))
dotsFourList[2].addEventListener('click', showCardFour.bind(null, 2))
dotsFourList[3].addEventListener('click', showCardFour.bind(null, 3))
dotsFourList[4].addEventListener('click', showCardFour.bind(null, 4))



// BLOCK FIVE
// Выводим карточки через цикл
const planContainer = document.getElementById('plan')

planList.forEach(item => {
    let card = `
        <div class="card" style="background-image: url(${item.img});">
            <div class="card-content">
                <div class="title_wrap">
                    <p class="title">${item.title}</p>
                </div>
            </div>
        </div>
    `
    planContainer.insertAdjacentHTML("beforeend", card)
}); 

// выводим кнопки для пагинации
const dotsFiveList = document.querySelectorAll('.five .dots')
const fiveCardContainer = document.querySelector('.five .card-container')

const showCardFive = (num, event) => {
    dotsFiveList.forEach(item => item.classList.remove('go'))
    dotsFiveList[num].classList.add('go')

    let offsetX = -(num * 344)
    fiveCardContainer.style.left = `${offsetX}px`
}

dotsFiveList[0].addEventListener('click', showCardFive.bind(null, 0))
dotsFiveList[1].addEventListener('click', showCardFive.bind(null, 1))
dotsFiveList[2].addEventListener('click', showCardFive.bind(null, 2))


// BLOCK SIX
const detailsContainer = document.getElementById('details')

detailsList.forEach(item => {
    let card = `
        <div
            class="card"
            style="
                background-image: url(${item.img});
                width: ${item.width}px;
            "
        >
            <div class="card-content">
                <div class="title_wrap">
                    <p class="title">${item.title}</p>
                </div>
                <p class="text">${item.text}</p>
            </div>
        </div>
    `
    detailsContainer.insertAdjacentHTML("beforeend", card)
}); 

// выводим кнопки для пагинации
const dotsSixList = document.querySelectorAll('.six .dots')
const sixCardContainer = document.querySelector('.six .card-container')

const showCardSix = (num, event) => {
    dotsSixList.forEach(item => item.classList.remove('go'))
    dotsSixList[num].classList.add('go')

    let offsetX = -(num * 409)
    sixCardContainer.style.left = `${offsetX}px`
}

dotsSixList[0].addEventListener('click', showCardSix.bind(null, 0))
dotsSixList[1].addEventListener('click', showCardSix.bind(null, 1))
dotsSixList[2].addEventListener('click', showCardSix.bind(null, 2))
dotsSixList[3].addEventListener('click', showCardSix.bind(null, 3))
dotsSixList[4].addEventListener('click', showCardSix.bind(null, 4))
dotsSixList[5].addEventListener('click', showCardSix.bind(null, 5))
dotsSixList[6].addEventListener('click', showCardSix.bind(null, 6))
dotsSixList[7].addEventListener('click', showCardSix.bind(null, 7))
dotsSixList[8].addEventListener('click', showCardSix.bind(null, 8))


document.addEventListener('DOMContentLoaded', () => {
    
})

const modalView = document.querySelector('modal');
const modalCard = document.querySelector('.modal-card');

modalView.addEventListener('click', () => {
    modalView.classList.remove('active')
})

modalCard.addEventListener('click', (e) => {
    e.stopPropagation();
})