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

/*log in - Ẩn và hiển thị mật khẩu*/
const forms= document.querySelector(".container-forms"),
      pwShowHide = document.querySelectorAll(".eye-icon"),
      links = document.querySelectorAll(".link");

pwShowHide.forEach(eyeIcon => {
  eyeIcon.addEventListener("click", () => {
    let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");

    pwFields.forEach(password => {
      if (password.type === "password") {
        password.type = "text";
      } else {
        password.type = "password";
      }
    });
  });
});



document.addEventListener("DOMContentLoaded", function() {
  const searchForm = document.getElementById("searchForm");

  searchForm.addEventListener("submit", function(event) {
      event.preventDefault(); // Ngăn chặn hành động mặc định của form

      const searchTerm = document.getElementById("search-box").value;
      // Xử lý tìm kiếm tại đây, ví dụ: chuyển hướng đến trang kết quả tìm kiếm
      window.location.href = "search.html?query=" + encodeURIComponent(searchTerm);
  });
});
