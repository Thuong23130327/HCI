function showDiv(divId) {
    const divs = ['Requi', 'Des', 'container'];
    divs.forEach(id => {
        document.getElementById(id).style.display = id === divId ? 'block' : 'none';
    });
    if (divId === 'container') {
        document.getElementById('main').style.display = 'block';
        document.querySelector('header').style.display = 'block';
    } else {
        document.getElementById('main').style.display = 'none';
    }
}

function showInterface(interfaceId) {
    const interfaces = ['web-interface', 'app-interface'];
    interfaces.forEach(id => {
        document.getElementById(id).style.display = 'none';
    });
    document.getElementById(interfaceId).style.display = 'block';
}


// function showDiv(divId) {
//     // Ẩn tất cả các div
//     document.querySelectorAll('div[id]').forEach(div => {
//         div.classList.remove('active');
//         div.classList.add('hidden');
//     });

//     // Hiển thị div được chọn
//     const activeDiv = document.getElementById(divId);
//     if (activeDiv) {
//         activeDiv.classList.remove('hidden');
//         activeDiv.classList.add('active');
//     }
//     // Loại bỏ class active khỏi tất cả các nút
//     document.querySelectorAll('.toggle-button').forEach(btn => {
//         btn.classList.remove('active');
//     });

//     // Thêm class active vào nút được nhấn
//     button.classList.add('active');
// }
