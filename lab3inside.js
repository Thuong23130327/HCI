// Hàm để xem bài học
function viewLesson(lesson) {
  const iframe = document.getElementById('lesson-viewer');
  iframe.src = lesson;  // Đảm bảo đường dẫn trỏ đến thư mục lab3Doc
  const lessonTitle = lesson.split('/')[1].split('.')[0];  // Trích xuất tên bài học từ tên file
  document.getElementById('lesson-title').textContent = lessonTitle;
}

// Hàm để quay lại trang trước
document.getElementById('back-btn').addEventListener('click', function() {
  window.history.back();  // Quay lại trang trước trong lịch sử trình duyệt
});
