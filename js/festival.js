const mobileMenu = document.querySelector(".navbar-collapse");

if (mobileMenu) {
    mobileMenu.querySelectorAll('a[href^="#"]').forEach((link) => {
        link.addEventListener("click", () => {
            if (mobileMenu.classList.contains("show")) {
                bootstrap.Collapse.getOrCreateInstance(mobileMenu).hide();
            }
        });
    });
}
