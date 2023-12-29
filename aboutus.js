/*Header*/

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

// Truy cập  trang đăng nhập
document.addEventListener("DOMContentLoaded", function() {
  const loginBtn = document.getElementById("login-btn");
  // Thêm sự kiện click cho icon
  loginBtn.addEventListener("click", function() {
      // Chuyển hướng sang trang login.html khi icon được nhấp
      window.location.href = "login.html";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const moreContent = document.getElementById("more-content");
  const readMoreBtn = document.getElementById("read-more-btn");

  readMoreBtn.addEventListener("click", function (event) {
      event.preventDefault(); // Ngăn chặn hành vi mặc định của thẻ 'a'

      if (moreContent.classList.contains("hidden")) {
          moreContent.classList.remove("hidden");
          readMoreBtn.textContent = "Ẩn đi";
      } else {
          moreContent.classList.add("hidden");
          readMoreBtn.textContent = "Xem thêm";
      }
  });
});


//Đánh giá
document.addEventListener("DOMContentLoaded", function () {
  let swiper = new Swiper(".swiper", {
    effect: "slide",
    loop: true,
    slidesPerView: 1,
    grabCursor: true,
    spaceBetween: 100,
    breakpoints: {
      768: {
        slidesPerView: 1,
      },
    },
  });
});


//Hiệu ứng
// Đợi tài liệu được tải xong
document.addEventListener("DOMContentLoaded", function () {
  // Thêm animation cho các phần tử khi cuộn trang
  window.addEventListener("scroll", reveal);

  // Khai báo hàm reveal
  function reveal() {
    let reveals = document.querySelectorAll(".reveal");

    for (let i = 0; i < reveals.length; i++) {
      let windowHeight = window.innerHeight;
      let revealTop = reveals[i].getBoundingClientRect().top;
      let revealPoint = 50;

      if (revealTop < windowHeight - revealPoint) {
        reveals[i].classList.add("active");
      }
    }
  }
});




