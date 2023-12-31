
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
function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }


  
  function addToCart() {
    // Hiển thị hiệu ứng thêm vào giỏ hàng
    document.getElementById("cartAnimation").style.display = "block";
 
    // Ẩn hiệu ứng sau 1 giây (có thể điều chỉnh thời gian theo nhu cầu)
    setTimeout(function () {
       document.getElementById("cartAnimation").style.display = "none";
    }, 1000);
 }

/*-----------------Thông báo sản phẩm thêm vào giỏ hàng------------------*/
 function themgio() {
    alert("Đã thêm vào giỏ hàng thành công!");
 }
/*-----------------Thông báo sản phẩm thêm vào giỏ hàng------------------*/

/*-----------------Thông báo sản phẩm thêm vào danh sách yêu thích------------------*/
function themyeuthich() {
    alert("Đã thêm vào danh sách yêu thích thành công!");
 }
/*-----------------Thông báo sản phẩm thêm vào danh sách yêu thích------------------*/
 
 
