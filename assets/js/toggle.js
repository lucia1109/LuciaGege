
function toggleContent(button) {
    const content = button.closest(".project").querySelector(".project-content");
    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
        button.textContent = "[-]";
    } else {
        content.style.display = "none";
        button.textContent = "[+]";
    }
}

