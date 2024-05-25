
var root = document.querySelector(":root");

root.style.setProperty("--accent", "hsl(0, 75%, 50%)");

window.addEventListener("scroll", () => {
    
    const max_pos = document.documentElement.scrollHeight - window.innerHeight;
    const pos = Math.ceil(window.scrollY / max_pos * 50); // 0-50 => red to dark yellow
    
    root.style.setProperty("--accent", "hsl(" + pos + ", 75%, 50%)");
});
