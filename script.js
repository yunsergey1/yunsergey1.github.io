import profitList from '/js/profit-list.js';
import flatsList from '/js/flats-list.js';
import planList from '/js/plan-list.js';
import detailsList from '/js/details-list.js'

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
