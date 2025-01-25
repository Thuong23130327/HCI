// JavaScript code can be added here for interactivity, such as video play/pause functionality or dynamic content loading.
console.log("Page loaded successfully!");

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