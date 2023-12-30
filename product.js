// product.js
function applyPriceFilter() {
    // Get selected price ranges
    const selectedRanges = document.querySelectorAll('input[name="priceRange"]:checked');

    // Get the product container
    const productContainer = document.getElementById('productContainer');

    // Loop through each product and check if it falls within the selected price range
    const products = productContainer.querySelectorAll('.pro');
    products.forEach(product => {
        const priceElement = product.querySelector('h4');
        const price = parseInt(priceElement.innerText.replace('đ', '').replace('.', '').trim());

        // Check if the product's price is within any selected range
        let shouldDisplay = false;
        selectedRanges.forEach(range => {
            const [min, max] = range.value.split('-').map(Number);
            if (price >= min && price <= max) {
                shouldDisplay = true;
            }
        });

        // Display or hide the product based on the result
        product.style.display = shouldDisplay ? 'block' : 'none';
    });
}

/*
    document.addEventListener("DOMContentLoaded", function () {
        // Số lượng sản phẩm trên mỗi trang
        const itemsPerPage = 12;

        // Danh sách tất cả sản phẩm
        const allProducts = document.querySelectorAll(".pro");

        // Số lượng trang
        const pageCount = Math.ceil(allProducts.length / itemsPerPage);

        // Hiển thị trang đầu tiên khi trang web được tải
        showPage(1);

        // Hàm hiển thị sản phẩm của một trang cụ thể
        function showPage(page) {
            // Ẩn tất cả sản phẩm
            allProducts.forEach(function (product) {
                product.style.display = "none";
            });

            // Tính chỉ số bắt đầu và kết thúc của sản phẩm trên trang hiện tại
            const startIndex = (page - 1) * itemsPerPage;
            const endIndex = startIndex + itemsPerPage;

            // Hiển thị các sản phẩm tương ứng
            for (let i = startIndex; i < endIndex; i++) {
                if (allProducts[i]) {
                    allProducts[i].style.display = "block";
                }
            }
        }

        // Tạo các nút pagination
        const paginationContainer = document.getElementById("pagination");
        for (let i = 1; i <= pageCount; i++) {
            const pageLink = document.createElement("a");
            pageLink.href = "#";
            pageLink.textContent = i;
            pageLink.addEventListener("click", function () {
                showPage(i);
            });
            paginationContainer.appendChild(pageLink);
        }
    });
*/



/*----------------Thêm SP vào giỏ hàng--------------*/
//khi ấn vào nút giỏ hàng thì tăng thêm đơn vị
var giohang = new Array();

function themvaogio(x) {
  alert("Đã thêm vào giỏ hàng thành công!");
  var pro = x.parentElement.children;
  var hinh = pro[0].children[0].src;
  var tensp = pro[1].children[0].innerText;
  var gia = x.parentElement.querySelector('h4 span').innerText; //lấy ra chuỗi 250.000
  var giasp = gia.replace(/[^\d]/g, ''); // lấy ra số 250000
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

