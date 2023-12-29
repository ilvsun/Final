document.addEventListener('DOMContentLoaded', function () {
    var searchParam = new URLSearchParams(window.location.search).get('search');
    if (searchParam && searchParam.trim() !== '') {
        filterProducts(searchParam);
    }
});

function filterProducts(searchParam) {
    var productContainer = document.getElementById('productContainer');
    var products = productContainer.getElementsByClassName('pro');
    for (var i = 0; i < products.length; i++) {
        var productName = products[i].querySelector('h5').innerText.toLowerCase();
        if (productName.includes(searchParam.toLowerCase())) {
            products[i].style.display = 'block';
        } else {
            products[i].style.display = 'none';
        }
    }
}
