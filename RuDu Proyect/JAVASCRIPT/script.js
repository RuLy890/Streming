document.addEventListener("DOMContentLoaded", function() {
    const toggle = document.getElementById('nightModeToggle');
    const navbar = document.querySelector('.navbar');

    toggle.addEventListener('change', () => {
        navbar.classList.toggle('dark-mode', toggle.checked);
    });

    const searchIcon = document.getElementById("searchIcon");
    const searchContainer = document.getElementById("searchContainer");
    const searchBoxIcon = document.querySelector(".search-box i");
    const freemiumBtn = document.getElementById("freemiumBtn");

    searchIcon.addEventListener("click", function() {
        searchIcon.style.display = "none";
        searchContainer.style.display = "flex";
        searchContainer.style.animation = "fadeIn 0.3s ease-in-out";

        if (freemiumBtn) {
            freemiumBtn.style.animation = "fadeOut 0.3s ease-in-out";
            setTimeout(() => {
                freemiumBtn.style.display = "none";
            }, 300);
        }
    });

    searchBoxIcon.addEventListener("click", function() {
        searchContainer.style.animation = "fadeOut 0.3s ease-in-out";
        setTimeout(() => {
            searchContainer.style.display = "none";
            searchContainer.style.animation = "";
            searchIcon.style.display = "flex";
        }, 300);

        if (freemiumBtn) {
            freemiumBtn.style.display = "flex";
            freemiumBtn.style.animation = "fadeIn 0.3s ease-in-out";
        }
    });
});

