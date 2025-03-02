document.addEventListener("DOMContentLoaded", () => {
    const courseForm = document.getElementById("courseForm");
    const courseCardsContainer = document.getElementById("courseCards");

    // Sample instructors for dropdown
    const instructors = ["Alice Smith", "Bob Johnson", "Charlie Brown"];
    const instructorDropdown = document.getElementById("createdBy");

    // Populate instructor dropdown
    instructors.forEach((instructor) => {
        const option = document.createElement("option");
        option.value = instructor;
        option.textContent = instructor;
        instructorDropdown.appendChild(option);
    });

    // Handle form submission
    courseForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const courseId = Math.random().toString(36).substring(2, 8).toUpperCase(); // Generate random ID
        const courseName = document.getElementById("courseName").value;
        const courseDescription = document.getElementById("courseDescription").value;
        const createdBy = document.getElementById("createdBy").value;
        const createdAt = new Date().toLocaleString();
        const updatedAt = createdAt;

        if (!courseName || !createdBy) {
            alert("Course Name and Instructor are required.");
            return;
        }

        // Clear form
        courseForm.reset();

        // Add course card
        const courseCard = document.createElement("div");
        courseCard.classList.add("course-card");

        courseCard.innerHTML = `
            <input type="checkbox" class="card-checkbox">
            <h3>${courseName}</h3>
            <p><strong>Description:</strong> ${courseDescription || "N/A"}</p>
            <p><strong>Instructor:</strong> ${createdBy}</p>
            <p><strong>Course:</strong> ${courseId}</p>
            <p><strong>Created At:</strong> ${createdAt}</p>
            <p><strong>Updated At:</strong> ${updatedAt}</p>
        `;

        courseCardsContainer.appendChild(courseCard);

    });

    // Handle delete selected
    document.getElementById("deleteSelected").addEventListener("click", () => {
        const selectedCards = document.querySelectorAll(".card-checkbox:checked");
        if (selectedCards.length === 0) {
            alert("No courses selected.");
            return;
        }

        selectedCards.forEach((checkbox) => {
            const card = checkbox.closest(".course-card");
            card.remove();
        });

    });

    // Handle delete all
    document.getElementById("deleteAll").addEventListener("click", () => {
        courseCardsContainer.innerHTML = "";
    });
});

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
