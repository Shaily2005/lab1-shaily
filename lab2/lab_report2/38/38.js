document.addEventListener("DOMContentLoaded", () => {
    const paragraph = document.getElementById("paragraph");


    document.getElementById("change-bg").addEventListener("click", () => {
        document.body.style.backgroundColor = "#f0f8ff";
    });


    document.getElementById("change-paragraph-bg").addEventListener("click", () => {
        paragraph.style.backgroundColor = "#ffd700";
    });

    document.getElementById("hide-paragraph").addEventListener("click", () => {
        paragraph.style.display = "none";
    });


    document.getElementById("show-paragraph").addEventListener("click", () => {
        paragraph.style.display = "block";
    });

    document.getElementById("increase-font").addEventListener("click", () => {
        const currentSize = parseInt(window.getComputedStyle(paragraph).fontSize);
        paragraph.style.fontSize = `${currentSize + 2}px`;
    });


    document.getElementById("decrease-font").addEventListener("click", () => {
        const currentSize = parseInt(window.getComputedStyle(paragraph).fontSize);
        paragraph.style.fontSize = `${currentSize - 2}px`;
    });


    document.getElementById("reset-font").addEventListener("click", () => {
        paragraph.style.fontSize = "12pt";
    });


    document.getElementById("change-text-color").addEventListener("click", () => {
        paragraph.style.color = "#ff4500";
    });
});
