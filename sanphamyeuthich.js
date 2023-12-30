$(document).on('click','.xoa',function(e){
    e.preventDefault();
    var myTr = $(this).closest('tr');
    myTr.remove();
});

function themvaogio(x) {
    alert("Đã thêm vào giỏ hàng thành công!");
}