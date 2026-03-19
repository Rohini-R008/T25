document.querySelectorAll("button").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.classList.add("scale-95");
    setTimeout(() => btn.classList.remove("scale-95"), 150);
  });
});