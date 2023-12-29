

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    navText:["<i class='far fa-arrow-left'></i>","<i class='far fa-arrow-right'></i>"],
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        },
        1000:{
            items:4
        }
    }
})

//pro
window.onresize = function(event) {
    reloadSlider();
};

//Banner Swiper

    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });


//khi ấn vào nút giỏ hàng thì tăng thêm đơn vị
var giohang = new Array();

        function themvaogiohang(x) {
            var pro = x.parentElement.children;
            var hinh = pro[0].src;
            var tensp = pro[1].children[1].innerText;
            var gia = x.parentElement.querySelector('h4 span').innerText; //lấy ra chuỗi 250.000
            var giasp = gia.replace(/[^\d]/g, ''); // lấy ra số 250000
           // var soluong = 1;
            var sp = new Array(hinh, tensp, giasp); //soluong);

            //ktra trong giỏ hàng
        var kt=0;
        for (let i=0;i<giohang.length;i++){
        if(giohang[i][1]==tensp){
        kt=1;
        break;
        }
        }
        if(kt==0){
            //thêm mới
            giohang.push(sp);
        }


           // console.log(giohang);
            showcountsp();

            //lưu giỏ hàng lên sesionStorage 

            sessionStorage.setItem("giohang",JSON.stringify(giohang));
        }

        function showcountsp() {
            document.getElementById("countsp").innerHTML = giohang.length;
        }





        function opentab(evt, cityName) {
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

          // Mô phỏng một sự kiện click trên nút đầu tiên để làm cho tab đầu tiên được chọn mặc định
            document.querySelector('.tablinks').click();

