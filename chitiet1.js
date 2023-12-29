
searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = ()=>{
    searchForm.classList.toggle('active');
}
window.onscroll =() =>{
    searchForm.classList.remove('active');
    if(window.scrollY >80){
        document.querySelector('.header .header-2').classList.add('active');
    } else{
        document.querySelector('.header .header-2').classList.remove('active');
    }
}
window.onload =() =>{

    if(window.scrollY >80){
        document.querySelector('.header .header-2').classList.add('active');
    } else{
        document.querySelector('.header .header-2').classList.remove('active');
    }
}

const mobile = document.getElementById('mobile');
const nav = document.getElementById('navbar');

let isNavActive = false;

mobile.addEventListener('click', () => {
    if (!isNavActive) {
        nav.classList.add('active');
        isNavActive = true; // trạng thái là hiển thị nav
    } else {
        nav.classList.remove('active');
        isNavActive = false; // trạng thái là ẩn nav
    }
});

const swiper = new Swiper('.js-testimonails-silder', {
    grabCursor: true,
    spaceBetween: 30,
    pagination:{
        el: 'js-testimonails-pagination',
        clickable:true
    },
    breakpoints:{
        767:{
            slidePerView: 2
        }
    }
});

//đánh giá sản phẩm
const allStar = document.querySelectorAll('.rating .star')
const ratingValue = document.querySelector('.rating input')

allStar.forEach((item, idx)=> {
	item.addEventListener('click', function () {
		let click = 0
		ratingValue.value = idx + 1

		allStar.forEach(i=> {
			i.classList.replace('bxs-star', 'bx-star')
			i.classList.remove('active')
		})
		for(let i=0; i<allStar.length; i++) {
			if(i <= idx) {
				allStar[i].classList.replace('bx-star', 'bxs-star')
				allStar[i].classList.add('active')
			} else {
				allStar[i].style.setProperty('--i', click)
				click++
			}
		}
	})
});

//chuyen tab
function changeTab(tabId) {
    // Tìm tất cả các tab và tab-pane
    const tabs = document.querySelectorAll('.tab-item');
    const tabPanes = document.querySelectorAll('.tab-pane');
 
    // Loại bỏ trạng thái active từ tất cả các tab và tab-pane
    tabs.forEach(tab => tab.classList.remove('active'));
    tabPanes.forEach(pane => pane.classList.remove('active'));
 
    // Tìm tab và tab-pane tương ứng và thêm trạng thái active
    const selectedTab = document.querySelector(`.${tabId}`);
    const selectedPane = document.getElementById(tabId);
    
    if (selectedTab && selectedPane) {
       selectedTab.classList.add('active');
       selectedPane.classList.add('active');
    }
    if (tabId === 'tab1') {
        document.getElementById('moTaContent').style.display = 'block';
     }
 }
 