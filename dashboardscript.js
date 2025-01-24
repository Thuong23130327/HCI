// Function to simulate starting an exercise
function startExercise(exerciseId, language) {
    window.location.href = `/coding-environment.html?id=${exerciseId}&lang=${language}`;
}

// Function to simulate reviewing a completed exercise
function reviewExercise(exerciseId) {
    window.location.href = `/coding-environment.html?id=${exerciseId}`;
}

// Event listeners for filters
document.getElementById('languageFilter').addEventListener('change', function () {
    const selectedLanguage = this.value;
    const exercises = document.querySelectorAll('.exercise-item');
    exercises.forEach(exercise => {
        if (selectedLanguage === 'all' || exercise.getAttribute('data-language') === selectedLanguage) {
            exercise.style.display = 'block';
        } else {
            exercise.style.display = 'none';
        }
    });
});

document.getElementById('searchBox').addEventListener('input', function () {
    const searchQuery = this.value.toLowerCase();
    const exercises = document.querySelectorAll('.exercise-item');
    exercises.forEach(exercise => {
        const title = exercise.querySelector('h3').textContent.toLowerCase();
        if (title.includes(searchQuery)) {
            exercise.style.display = 'block';
        } else {
            exercise.style.display = 'none';
        }
    });
}); const exercises = [
    { id: 1, title: "Basic Syntax in C", description: "Learn the basics of C programming.", difficulty: "Easy", language: "C", status: "not started" },
    { id: 2, title: "Python Loops", description: "Understand loops in Python.", difficulty: "Medium", language: "Python", status: "not started" },
    { id: 3, title: "Java OOP", description: "Dive into Object-Oriented Programming in Java.", difficulty: "Hard", language: "Java", status: "not started" },
    { id: 4, title: "File Handling in C", description: "Learn file handling in C programming.", difficulty: "Medium", language: "C", status: "not started" },
    { id: 5, title: "Python Data Structures", description: "Learn about lists, tuples, and dictionaries.", difficulty: "Medium", language: "Python", status: "not started" },
    { id: 6, title: "Advanced Java Streams", description: "Explore Java streams and functional programming.", difficulty: "Hard", language: "Java", status: "not started" },
];
