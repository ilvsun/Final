$(document).ready(function() {
    $("#checkout-form").submit(function(event) {
        // Ngăn chặn form submit mặc định
        event.preventDefault();

        // Lấy thông tin từ form
        var fullName = $("#fullName").val();
        var phoneNumber = $("#phoneNumber").val();
        var province = $("#province").val();
        var district = $("#district").val();
        var detailedAddress = $("#detailedAddress").val();

        // Kiểm tra xem thông tin có đầy đủ không
        if (fullName && phoneNumber && province && district && detailedAddress ) {
            // Hiển thị thông báo đặt hàng thành công
            alert("Đặt hàng thành công!");

            // Chuyển hướng đến trang chủ (có thể thay đổi đường dẫn)
            window.location.href = 'index.html';
        } else {
            // Hiển thị thông báo yêu cầu điền đầy đủ thông tin
            alert("Bạn đã đặt hàng thành công!");
        }
    });
});



// Hiển thị thông tin sản phẩm từ giỏ hàng trên trang checkout
function hienThiSanPhamGioHang() {
    // Lấy thông tin giỏ hàng từ sessionStorage
    var gioHangString = sessionStorage.getItem('giohang_checkout');
    var gioHang = JSON.parse(gioHangString);

    var ttgh = "";
    var tongTien = 0; // Khởi tạo biến tổng tiền

    for (let i = 0; i < gioHang.length; i++) {
        // Tính tổng tiền cho từng sản phẩm (đơn giá * số lượng + 30000)
        var thanhTien = gioHang[i][2] * 1 + 30000;

        ttgh +=
            '<tr>' +
            '<td><img src="' + gioHang[i][0] + '" alt=""></td>' +
            '<td>' + gioHang[i][1] + '</td>' +
            '<td class="dongia">' + gioHang[i][2] + '</td>' +
            '<td>' + 1 + '</td>' +
            '</tr>';

        // Cộng vào tổng tiền
        tongTien += thanhTien;
    }

    $('#cart-table tbody').html(ttgh);

    $('#tong-tien-don-hang').text(tongTien);
}

$(document).ready(function () {
    hienThiSanPhamGioHang();
});


