document.addEventListener("DOMContentLoaded", () => {
    const heartRain = document.getElementById("heart-rain");
    const inputSection = document.getElementById("input-section");
    const greetingSection = document.getElementById("greeting-section");
    const greetingMessage = document.getElementById("greeting-message");
    const submitButton = document.getElementById("submit-button");
    const nameInput = document.getElementById("name-input");

    // Generate heart rain
    function createHearts() {
        for (let i = 0; i < 20; i++) { // Reduced from 50 to 20
            const heart = document.createElement("div");
            heart.className = "heart";
            heart.style.left = Math.random() * 100 + "vw";
            heart.style.animationDuration = Math.random() * 2 + 4 + "s";
            heart.style.animationDelay = Math.random() * 2 + "s";
            heart.style.width = Math.random() * 20 + 10 + "px"; // Slightly smaller hearts
            heart.style.height = heart.style.width; // Keep width and height proportional
            heartRain.appendChild(heart);

            // Remove heart after animation
            heart.addEventListener("animationend", () => heart.remove());
        }
    }

    // Increase the interval time to reduce heart density
    setInterval(createHearts, 1500); // Increased from 500ms to 1500ms

    // Handle name input and greeting
    submitButton.addEventListener("click", () => {
        const name = nameInput.value.trim();
        if (name) {
            inputSection.style.display = "none";
            greetingSection.style.display = "block";
            greetingMessage.textContent = `🌞 Welcome to a brand new day, ${name}! 🌟 Embrace it with a smile and positive vibes.`;
        } else {
            alert("Please enter your name!");
        }
    });
});



