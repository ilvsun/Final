$(document).ready(function() {
    // Hàm cập nhật danh sách quận/huyện dựa trên tỉnh/thành phố được chọn
    function capNhatQuanHuyenOptions(tinhThanhDuocChon) {
        // Thực hiện logic để lấy danh sách quận/huyện dựa trên tỉnh/thành phố được chọn
        // Bạn có thể sử dụng một API hoặc dữ liệu đã được định nghĩa trước
        // Để đơn giản, giả sử có một hàm fetchQuanHuyenChoTinhThanh tồn tại
        var quanHuyen = fetchQuanHuyenChoTinhThanh(tinhThanhDuocChon);

        // Xóa các lựa chọn hiện tại
        $('#quanHuyen').empty();

        // Thêm các lựa chọn mới
        quanHuyen.forEach(function(quan) {
            $('#quanHuyen').append('<option value="' + quan.id + '">' + quan.ten + '</option>');
        });
    }

    // Hàm cập nhật danh sách phường/xã dựa trên quận/huyện được chọn
    function capNhatPhuongXaOptions(quanHuyenDuocChon) {
        // Thực hiện logic để lấy danh sách phường/xã dựa trên quận/huyện được chọn
        // Bạn có thể sử dụng một API hoặc dữ liệu đã được định nghĩa trước
        // Để đơn giản, giả sử có một hàm fetchPhuongXaChoQuanHuyen tồn tại
        var phuongXa = fetchPhuongXaChoQuanHuyen(quanHuyenDuocChon);

        // Xóa các lựa chọn hiện tại
        $('#phuongXa').empty();

        // Thêm các lựa chọn mới
        phuongXa.forEach(function(phuong) {
            $('#phuongXa').append('<option value="' + phuong.id + '">' + phuong.ten + '</option>');
        });
    }

    // Sự kiện khi tỉnh/thành phố thay đổi
    $('#tinhThanh').on('change', function() {
        var tinhThanhDuocChon = $(this).val();
        capNhatQuanHuyenOptions(tinhThanhDuocChon);
    });

    // Sự kiện khi quận/huyện thay đổi
    $('#quanHuyen').on('change', function() {
        var quanHuyenDuocChon = $(this).val();
        capNhatPhuongXaOptions(quanHuyenDuocChon);
    });

    // Sự kiện khi form được gửi
    $('#formDatHang').on('submit', function(event) {
        event.preventDefault();

        // Thực hiện kiểm tra dữ liệu từ phía máy khách
        var hoTen = $('#hoTen').val();
        var soDienThoai = $('#soDienThoai').val();
        var diaChi = $('#diaChi').val();
        var tinhThanh = $('#tinhThanh').val();
        var quanHuyen = $('#quanHuyen').val();
        var phuongXa = $('#phuongXa').val();
        var hinhThucThanhToan = $('#hinhThucThanhToan').val();

        // Thực hiện logic kiểm tra
        // Để đơn giản, giả sử tất cả các trường đều là bắt buộc

        // Thực hiện xử lý phía máy chủ (xử lý thanh toán) ở đây
        // Thông thường, bạn sẽ thực hiện một yêu cầu AJAX đến máy chủ

        // Trong ví dụ này, hiển thị một cảnh báo đơn giản
        alert('Đặt hàng thành công!');

        // Tùy chọn, bạn có thể chuyển hướng người dùng đến trang cảm ơn
        // window.location.href = 'cam-on.html';
    });
});
