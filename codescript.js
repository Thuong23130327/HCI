// Wait for the document to fully load
document.addEventListener("DOMContentLoaded", function () {
    const editor = ace.edit("editor");
    editor.setTheme("ace/theme/monokai");
    editor.session.setMode("ace/mode/javascript");
    editor.setValue("// Write your code here...");

    const languageSelector = document.getElementById("language-selector");
    languageSelector.addEventListener("change", function () {
        const selectedLanguage = languageSelector.value;
        let mode;

        switch (selectedLanguage) {
            case "python":
                mode = "ace/mode/python";
                editor.setValue("# Write your Python code here...");
                break;
            case "java":
                mode = "ace/mode/java";
                editor.setValue("// Write your Java code here...");
                break;
            case "c":
                mode = "ace/mode/c_cpp";
                editor.setValue("// Write your C code here...");
                break;
            default:
                mode = "ace/mode/javascript";
        }

        editor.session.setMode(mode);
    });

    document.getElementById("clear-code").addEventListener("click", function () {
        editor.setValue("// Write your code here...");
    });

    document.getElementById("run-code").addEventListener("click", function () {
        const userCode = editor.getValue();
        const language = languageSelector.value;
        console.log("Running code in language:", language);
        console.log("User Code:", userCode);

        // Simulated result output (replace with backend interaction)
        document.getElementById("result-output").textContent = "Code executed successfully.\nOutput: Hello, World!";
    });

    document.getElementById("submit-code").addEventListener("click", function () {
        const userCode = editor.getValue();
        const language = languageSelector.value;
        console.log("Submitting code in language:", language);
        console.log("User Code:", userCode);

        // Simulated submission result
        document.getElementById("result-output").textContent = "Code submitted successfully.\nAll test cases passed.";
    });

    document.getElementById("add-testcase").addEventListener("click", function () {
        const customInput = document.getElementById("custom-input").value;
        const customOutput = document.getElementById("custom-output").value;

        if (customInput && customOutput) {
            const testCaseList = document.getElementById("testcase-list");
            const testCaseItem = document.createElement("li");
            testCaseItem.textContent = `Input: ${customInput}, Expected Output: ${customOutput}`;
            testCaseList.appendChild(testCaseItem);

            // Clear inputs
            document.getElementById("custom-input").value = "";
            document.getElementById("custom-output").value = "";
        } else {
            alert("Please provide both input and expected output.");
        }
    });
});
