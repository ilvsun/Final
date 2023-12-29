setTimeout(function() {
    document.getElementById('popup').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
    
    // Đóng popup sau 10 giây
    setTimeout(function() {
        closePopup();
    }, 10000);
}, 1000);

// Hàm đóng popup
function closePopup() {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}