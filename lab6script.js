
function showDiv(divId, button) {
    // Ẩn tất cả các div có id
    var divs = document.querySelectorAll('div[id]');
    divs.forEach(function(div) {
        div.classList.add('hidden');
        div.classList.remove('visible');
    });
    
    // Hiển thị div được chọn
    var divToShow = document.getElementById(divId);
    divToShow.classList.add('visible');
    divToShow.classList.remove('hidden');

    // Hiển thị 'container-content' mặc định khi div abc hiện ra
    if (divId === 'abc') {
        showInterface('container-content');
    }

    // Loại bỏ lớp highlight từ tất cả các nút
    var buttons = document.querySelectorAll('button');
    buttons.forEach(function(btn) {
        btn.classList.remove('highlight');
    });
    
    // Thêm lớp highlight vào nút được nhấn
    button.classList.add('highlight');
}

function showInterface(interfaceId) {
    // Ẩn tất cả các div bên trong abc
    var interfaces = document.querySelectorAll('#abc .interface');
    interfaces.forEach(function(interface) {
        interface.classList.add('hidden');
        interface.classList.remove('visible');
    });

    // Hiển thị giao diện được chọn
    var interfaceToShow = document.getElementById(interfaceId);
    interfaceToShow.classList.add('visible');
    interfaceToShow.classList.remove('hidden');
}