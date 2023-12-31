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
        isNavActive = true; 
    } else {
        nav.classList.remove('active');
        isNavActive = false; 
    }
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

// Truy cập  trang đăng nhập
document.addEventListener("DOMContentLoaded", function() {
  const loginBtn = document.getElementById("login-btn");
  loginBtn.addEventListener("click", function() {
      window.location.href = "login.html";
  });
});


// Lấy tham chiếu đến form và các trường input
const loginForm = document.getElementById('flogin');
const emailInput = document.querySelector('.input');
const passwordInput = document.querySelector('.password');

// Xử lý sự kiện khi form được gửi đi
loginForm.addEventListener('submit', function(event) {
  event.preventDefault(); 

  const emailValue = emailInput.value.trim();
  const passwordValue = passwordInput.value;

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailValue === '' || passwordValue === '') {
    alert('Vui lòng điền đủ thông tin đăng nhập trước khi gửi.');
    return;
  } else if (!emailPattern.test(emailValue)) {
    alert('Email không hợp lệ. Vui lòng nhập địa chỉ email đúng.');
    return;
  } else {
    alert('Thông tin đăng nhập đã chính xác');
    window.location.href = 'index.html'; 
  }
});

