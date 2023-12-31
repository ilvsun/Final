$(document).ready(function() {
    $("#checkout-form").submit(function(event) {
        event.preventDefault();

        var fullName = $("#fullName").val();
        var phoneNumber = $("#phoneNumber").val();
        var city = $("#city").val();
        var district = $("#district").val();
        var ward = $("#ward").val();
        var detailedAddress = $("#detailedAddress").val();

        if (fullName && phoneNumber && ward && city && district && detailedAddress ) {
            alert("Đặt hàng thành công!");
            window.location.href = 'index.html';
        } else {
            alert("Vui lòng điền đầy đủ thông tin.");
        }
    });
});



function hienThiSanPhamGioHang() {
    var gioHangString = sessionStorage.getItem('giohang_checkout');
    var gioHang = JSON.parse(gioHangString);

    var ttgh = "";
    var tongTien = 0; 
    for (let i = 0; i < gioHang.length; i++) {
        var thanhTien = gioHang[i][2] * 1 + 30000;

        ttgh +=
            '<tr>' +
            '<td><img src="' + gioHang[i][0] + '" alt=""></td>' +
            '<td>' + gioHang[i][1] + '</td>' +
            '<td class="dongia">' + gioHang[i][2] + '</td>' +
            '<td>' +  1 + '</td>' +
            '</tr>';

        tongTien += thanhTien;
    }

    $('#cart-table tbody').html(ttgh);

    $('#tong-tien-don-hang').text(tongTien);
}

$(document).ready(function () {
    hienThiSanPhamGioHang();
});

