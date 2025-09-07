// --- Click Event ---
const clickBtn = document.getElementById("clickBtn");
const clickMessage = document.getElementById("clickMessage");

clickBtn.addEventListener("click", () => {
    clickMessage.textContent = "Button was clicked!";
});

// --- Mouseover Event ---
const hoverBox = document.getElementById("hoverBox");

hoverBox.addEventListener("mouseover", () => {
    hoverBox.classList.add("highlight");
    hoverBox.textContent = "Mouse Over!";
});

hoverBox.addEventListener("mouseout", () => {
    hoverBox.classList.remove("highlight");
    hoverBox.textContent = "Hover me!";
});

// --- Keyboard Input Event ---
const textInput = document.getElementById("textInput");
const keyboardOutput = document.getElementById("keyboardOutput");

textInput.addEventListener("input", () => {
    keyboardOutput.textContent = "You typed: " + textInput.value;
});

// --- Toggle Visibility Event ---
const toggleBtn = document.getElementById("toggleBtn");
const secret = document.getElementById("secret");

toggleBtn.addEventListener("click", () => {
    secret.classList.toggle("hidden");
});

// --- Light/Dark Mode Toggle ---
const modeToggle = document.getElementById("modeToggle");
modeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// --- Counter Game ---
let count = 0;
const counterValue = document.getElementById("counterValue");
document.getElementById("increaseBtn").addEventListener("click", () => {
    count++;
    counterValue.textContent = count;
});
document.getElementById("decreaseBtn").addEventListener("click", () => {
    count--;
    counterValue.textContent = count;
});

// --- Collapsible FAQ ---
const faqQuestions = document.querySelectorAll(".faq-question");
faqQuestions.forEach((btn) => {
    btn.addEventListener("click", () => {
        const answer = btn.nextElementSibling;
        answer.classList.toggle("hidden");
    });
});

// --- Dropdown Menu ---
const dropdownBtn = document.getElementById("dropdownBtn");
const dropdownMenu = document.getElementById("dropdownMenu");

dropdownBtn.addEventListener("click", () => {
    dropdownMenu.classList.toggle("hidden");
});

// --- Tabbed Interface ---
const tabButtons = document.querySelectorAll(".tabBtn");
const tabContents = document.querySelectorAll(".tabContent");

tabButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        // Hide all tabs
        tabContents.forEach((tab) => tab.classList.add("hidden"));
        // Show the selected tab
        const target = document.getElementById(btn.dataset.tab);
        target.classList.remove("hidden");
    });
});

// --- Form Validation ---
const form = document.getElementById("signupForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", function (event) {
    event.preventDefault(); // stop form submission
    let valid = true;

    // Reset messages
    document.querySelectorAll(".error").forEach(e => e.textContent = "");
    formMessage.textContent = "";

    // Name validation
    if (nameInput.value.trim() === "") {
        document.getElementById("nameError").textContent = "Name is required.";
        valid = false;
    }

    // Email validation (regex)
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailInput.value.match(emailPattern)) {
        document.getElementById("emailError").textContent = "Enter a valid email.";
        valid = false;
    }

    // Password validation
    if (passwordInput.value.length < 6) {
        document.getElementById("passwordError").textContent = "Password must be at least 6 characters.";
        valid = false;
    }

    // Confirm password validation
    if (passwordInput.value !== confirmPasswordInput.value) {
        document.getElementById("confirmPasswordError").textContent = "Passwords do not match.";
        valid = false;
    }

    // Final feedback
    if (valid) {
        formMessage.textContent = "✅ Form submitted successfully!";
        formMessage.style.color = "green";
    form.reset();
    } else {
        formMessage.textContent = "❌ Please fix the errors above.";
        formMessage.style.color = "red";
    }
});

