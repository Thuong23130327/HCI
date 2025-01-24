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

