function showSection(sectionId) {
    // Ẩn tất cả các phần nội dung
    document.querySelectorAll('.content-section').forEach(section => {
        section.style.display = 'none';
    });

    // Hiển thị phần được chọn
    document.getElementById(sectionId).style.display = 'block';

    // Xóa lớp 'active' từ tất cả các liên kết trong navbar
    document.querySelectorAll('.navbar a').forEach(link => {
        link.classList.remove('active');
    });

    // Thêm lớp 'active' cho liên kết được chọn
    document.querySelector(`.navbar a[href="#${sectionId}"]`).classList.add('active');
}

function toggleContent(contentId, button) {
    const content = document.getElementById(contentId);
    if (content.style.display === 'none') {
        content.style.display = 'block';
        button.classList.add('rotate'); // Xoay mũi tên xuống
    } else {
        content.style.display = 'none';
        button.classList.remove('rotate'); // Xoay lại mũi tên sang phải
    }
}

// Initial count of badges and certifications
let badgeCount = 0;
let certificationCount = 0;

function importNewBadge() {
    badgeCount++;
    document.getElementById('badgeStatus').textContent = `You have earned and uploaded ${badgeCount} ${badgeCount === 1 ? 'badge' : 'badges'}.`;
}

function exploreCertificationPreparation() {
    certificationCount++;
    document.getElementById('certificationStatus').textContent = `You are preparing for ${certificationCount} ${certificationCount === 1 ? 'certification' : 'certifications'}.`;
}

// Modify button click handler to update certification count
document.querySelector('.explore-cert-button').addEventListener('click', exploreCertificationPreparation);


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

