document.addEventListener("DOMContentLoaded", function () {
  const moreContent = document.getElementById("more-content");
  const readMoreBtn = document.getElementById("read-more-btn");

  readMoreBtn.addEventListener("click", function (event) {
      event.preventDefault();

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
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", reveal);
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
