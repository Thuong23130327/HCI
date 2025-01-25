
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


// Hàm mở popup
function openPopup() {
    document.getElementById('popup').style.display = 'flex'; // Hiển thị popup
}

// Hàm đóng popup
function closePopup() {
    document.getElementById('popup').style.display = 'none'; // Ẩn popup
}


// Đóng popup khi nhấp bên ngoài
window.onclick = function (event) {
    const popup = document.getElementById("popup");
    if (event.target === popup) {
        closePopup();
    }
}
// Thay đổi file PDF khi chọn bài học
document.querySelectorAll('.lesson-item').forEach((item) => {
    item.addEventListener('click', (e) => {
        // Xóa lớp 'active' khỏi mục trước đó
        document.querySelector('.lesson-item.active').classList.remove('active');
        item.classList.add('active');

        // Cập nhật nội dung iframe
        const pdfUrl = item.getAttribute('data-pdf');
        document.getElementById('pdf-viewer').src = pdfUrl;

        // Cập nhật tiêu đề bài học
        const lessonTitle = item.textContent;
        document.querySelector('.content-title').textContent = lessonTitle;
    });
});

// Hàm xử lý nút "Back to list" (nếu cần)
function backToList() {
    alert('Back to list clicked!');
}

