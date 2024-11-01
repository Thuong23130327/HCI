function toggleMaterials(button) {
    const materialsDiv = button.nextElementSibling;
    if (materialsDiv.style.display === "block") {
        materialsDiv.style.display = "none";
        button.textContent = "View";
    } else {
        materialsDiv.style.display = "block";
        button.textContent = "Hide";
    }
  
}

// Hàm mở popup
function openPopup(title) {
    document.getElementById("popup-title").innerText = title;
    document.getElementById("popup").style.display = "block";

    // Xóa nội dung trước đó
    document.getElementById("lecture-list").innerHTML = '';
    document.getElementById("reference-list").innerHTML = '';
    document.getElementById("assignment-list").innerHTML = '';

    // Thêm nội dung tương ứng cho từng môn học
    switch (title) {
        case 'Java':
            document.getElementById("lecture-list").innerHTML += '<li>Bài giảng Java cơ bản</li>';
            document.getElementById("reference-list").innerHTML += '<li>Sách Java hiệu quả</li>';
            document.getElementById("assignment-list").innerHTML += '<li>Bài tập Java số 1</li>';
            break;
        case 'Python':
            document.getElementById("lecture-list").innerHTML += '<li>Bài giảng Python cho người mới bắt đầu</li>';
            document.getElementById("reference-list").innerHTML += '<li>Tài liệu tham khảo Python</li>';
            document.getElementById("assignment-list").innerHTML += '<li>Bài tập Python số 1</li>';
            break;
        case 'HTML':
            document.getElementById("lecture-list").innerHTML += '<li>Bài giảng HTML cơ bản</li>';
            document.getElementById("reference-list").innerHTML += '<li>Tài liệu tham khảo HTML</li>';
            document.getElementById("assignment-list").innerHTML += '<li>Bài tập HTML số 1</li>';
            break;
        case 'CSS':
            document.getElementById("lecture-list").innerHTML += '<li>Bài giảng CSS cơ bản</li>';
            document.getElementById("reference-list").innerHTML += '<li>Tài liệu tham khảo CSS</li>';
            document.getElementById("assignment-list").innerHTML += '<li>Bài tập CSS số 1</li>';
            break;
        case 'C++':
            document.getElementById("lecture-list").innerHTML += '<li>Bài giảng C++ cơ bản</li>';
            document.getElementById("reference-list").innerHTML += '<li>Tài liệu tham khảo C++</li>';
            document.getElementById("assignment-list").innerHTML += '<li>Bài tập C++ số 1</li>';
            break;
        case 'Tài Liệu Tham Khảo':
            document.getElementById("lecture-list").innerHTML += '<li>Bài giảng tài liệu tham khảo</li>';
            document.getElementById("reference-list").innerHTML += '<li>Tài liệu tham khảo tổng hợp</li>';
            document.getElementById("assignment-list").innerHTML += '<li>Bài tập tài liệu tham khảo</li>';
            break;
    }
}

// Hàm đóng popup
function closePopup() {
    document.getElementById("popup").style.display = "none";
}

// Đóng popup khi nhấp bên ngoài
window.onclick = function(event) {
    const popup = document.getElementById("popup");
    if (event.target === popup) {
        closePopup();
    }
}

