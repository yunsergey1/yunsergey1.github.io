const navList = document.querySelectorAll('aside ul li')
const bc = document.getElementById('bc')

console.log(bc)

navList.forEach(item => {

	item.addEventListener('click', () =>{
		if (item.innerText != navList[navList.length - 1].innerText) {
			navList.forEach(item => item.classList.remove('active'))
			item.classList.add('active')
			bc.innerText = item.innerText
		}
	})
})


const btnCreate = document.getElementById('create')
const popup = document.querySelector('.popup')
const popupWrap = document.querySelector('.popup__wrap')
const popupClose = document.querySelector('.close-popup')

btnCreate.addEventListener('click', () => {
	popupWrap.classList.add('open')
})

popup.addEventListener('click', event => {
	event.stopPropagation();
})

popupWrap.addEventListener('click', () => {
	popupWrap.classList.remove('open')
})

popupClose.addEventListener('click', () => {
	popupWrap.classList.remove('open')
})