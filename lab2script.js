document.getElementById('loginButton').addEventListener('click', function() {
    // Redirect to the dashboard or another page directly without validating credentials
    window.location.href = '/dashboard.html';
});

function showDiv(divId) {
    // Ẩn tất cả các div
    document.querySelectorAll('div[id]').forEach(div => {
        div.classList.remove('active');
        div.classList.add('hidden');
    });

    // Hiển thị div được chọn
    const activeDiv = document.getElementById(divId);
    if (activeDiv) {
        activeDiv.classList.remove('hidden');
        activeDiv.classList.add('active');
    }
    // Loại bỏ class active khỏi tất cả các nút
    document.querySelectorAll('.toggle-button').forEach(btn => {
        btn.classList.remove('active');
    });

    // Thêm class active vào nút được nhấn
    button.classList.add('active');
}