const textElement = document.getElementById('text');
const text = "Hello! I’m a passionate and dedicated Full Stack Web Developer with a strong foundation in both front-end and back-end technologies. Over the years, I’ve honed my skills in creating dynamic, responsive, and user-friendly web applications. My expertise lies in HTML, CSS, and JavaScript, which I use to craft seamless and visually appealing user interfaces. On the back end, I specialize in Node.js and Express.js, leveraging their power to build robust and scalable server-side solutions. Additionally, I have extensive experience working with databases, including MongoDB and SQL, ensuring efficient data management and storage for my projects.";
const words = text.split(" "); // Split the text into an array of words
let index = 0;

function typeText() {
    if (index < words.length) {
        // Create a new span for the word
        const wordSpan = document.createElement("span");
        wordSpan.textContent = words[index] + " "; // Add a space after each word
        wordSpan.style.opacity = 0; // Start with opacity 0 for fade-in effect

        // Append the new word to the container
        textElement.appendChild(wordSpan);

        // Fade in the word
        setTimeout(() => {
            wordSpan.style.opacity = 1;
        }, 10);

        index++;
        setTimeout(typeText, 200); // Adjust the delay between words (in milliseconds)
    }
}

typeText();