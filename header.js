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

// Truy cập  trang đăng nhập
document.addEventListener("DOMContentLoaded", function() {
    const loginBtn = document.getElementById("login-btn");
    loginBtn.addEventListener("click", function() {
        window.location.href = "login.html";
    });
});

