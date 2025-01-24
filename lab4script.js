// JavaScript code can be added here for interactivity, such as video play/pause functionality or dynamic content loading.
console.log("Page loaded successfully!");
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
}function toggleContent(element) {
    const contentList = element.querySelector('.content-list');
    const arrowIcon = element.querySelector('.arrow-icon');
    if (contentList.style.display === 'none' || contentList.style.display === '') {
        contentList.style.display = 'block';  // Hiển thị nội dung
        arrowIcon.style.transform = 'rotate(90deg)'; // Xoay icon
    } else {
        contentList.style.display = 'none';  // Ẩn nội dung
        arrowIcon.style.transform = 'rotate(0deg)'; // Quay icon về vị trí cũ
    }
}