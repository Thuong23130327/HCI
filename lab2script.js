document.getElementById('loginButton').addEventListener('click', function() {
    // Redirect to the dashboard or another page directly without validating credentials
    window.location.href = '/dashboard.html';
});

function showDiv(divId, button) {
    // Ẩn tất cả các div
    var divs = document.querySelectorAll('div[id]');
    divs.forEach(function(div) {
        div.classList.add('hidden');
        div.classList.remove('visible');
    });
    
    // Hiển thị div được chọn
    var divToShow = document.getElementById(divId);
    divToShow.classList.add('visible');
    divToShow.classList.remove('hidden');

    // Loại bỏ lớp highlight từ tất cả các nút
    var buttons = document.querySelectorAll('button');
    buttons.forEach(function(btn) {
        btn.classList.remove('highlight');
    });
    
    // Thêm lớp highlight vào nút được nhấn
    button.classList.add('highlight');
}