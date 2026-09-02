// ==========================================
// IYUNGA SECONDARY SCHOOL - JavaScript
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    // ==========================================
    // 1. MOBILE NAVIGATION MENU
    // ==========================================

    const menuButton = document.querySelector(".menu-btn");
    const navBar = document.querySelector(".navbar");

    if (menuButton && navBar) {
        menuButton.addEventListener("click", function () {
            navBar.classList.toggle("active");

            // Change menu icon
            if (navBar.classList.contains("active")) {
                menuButton.innerHTML = "✕";
            } else {
                menuButton.innerHTML = "☰";
            }
        });

        // Close menu after clicking a link
        const navLinks = navBar.querySelectorAll("a");

        navLinks.forEach(function (link) {
            link.addEventListener("click", function () {
                navBar.classList.remove("active");
                menuButton.innerHTML = "☰";
            });
        });
    }


    // ==========================================
    // 2. SMOOTH SCROLLING
    // ==========================================

    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(function (link) {
        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (targetId === "#") {
                return;
            }

            const target = document.querySelector(targetId);

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });


    // ==========================================
    // 3. ACTIVE NAVIGATION LINK
    // ==========================================

    const sections = document.querySelectorAll("section[id]");
    const navigationLinks = document.querySelectorAll(".navbar a");

    window.addEventListener("scroll", function () {

        let currentSection = "";

        sections.forEach(function (section) {

            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {
                currentSection = section.getAttribute("id");
            }
        });

        navigationLinks.forEach(function (link) {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + currentSection) {
                link.classList.add("active");
            }
        });
    });


    // ==========================================
    // 4. HEADER SHADOW WHEN SCROLLING
    // ==========================================

    const header = document.querySelector("header");

    if (header) {

        window.addEventListener("scroll", function () {

            if (window.scrollY > 50) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }

        });
    }


    // ==========================================
    // 5. SCROLL TO TOP BUTTON
    // ==========================================

    const topButton = document.getElementById("scrollTop");

    if (topButton) {

        window.addEventListener("scroll", function () {

            if (window.scrollY > 300) {
                topButton.style.display = "block";
            } else {
                topButton.style.display = "none";
            }

        });

        topButton.addEventListener("click", function () {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });
    }


    // ==========================================
    // 6. ADMISSION FORM VALIDATION
    // ==========================================

    const admissionForm = document.getElementById("admissionForm");

    if (admissionForm) {

        admissionForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const name = document.getElementById("studentName");
            const email = document.getElementById("email");
            const phone = document.getElementById("phone");
            const form = document.getElementById("form");

            if (!name || !phone || !form) {
                alert("Please make sure all required fields are available.");
                return;
            }

            if (name.value.trim() === "") {
                alert("Please enter the student's full name.");
                name.focus();
                return;
            }

            if (phone.value.trim() === "") {
                alert("Please enter a phone number.");
                phone.focus();
                return;
            }

            if (form.value === "") {
                alert("Please select the class/form.");
                form.focus();
                return;
            }

            // Email validation if email field exists
            if (email && email.value.trim() !== "") {

                const emailPattern =
                    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

                if (!emailPattern.test(email.value)) {
                    alert("Please enter a valid email address.");
                    email.focus();
                    return;
                }
            }

            alert(
                "Application submitted successfully!\n\n" +
                "Thank you for choosing Iyunga Secondary School."
            );

            admissionForm.reset();
        });
    }


    // ==========================================
    // 7. GALLERY IMAGE EFFECT
    // ==========================================

    const galleryImages = document.querySelectorAll(
        ".gallery img, .gallery-item img"
    );

    galleryImages.forEach(function (image) {

        image.addEventListener("click", function () {

            // Create image viewer
            const viewer = document.createElement("div");

            viewer.className = "image-viewer";

            viewer.innerHTML = `
                <span class="close-viewer">&times;</span>
                <img src="${this.src}" alt="${this.alt}">
            `;

            document.body.appendChild(viewer);

            // Close button
            const closeButton =
                viewer.querySelector(".close-viewer");

            closeButton.addEventListener("click", function () {
                viewer.remove();
            });

            // Close when clicking outside image
            viewer.addEventListener("click", function (event) {

                if (event.target === viewer) {
                    viewer.remove();
                }

            });
        });
    });


    // ==========================================
    // 8. CURRENT YEAR
    // ==========================================

    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }


    // ==========================================
    // 9. WELCOME MESSAGE
    // ==========================================

    const welcomeButton =
        document.getElementById("welcomeButton");

    if (welcomeButton) {

        welcomeButton.addEventListener("click", function () {

            alert(
                "Welcome to Iyunga Secondary School!\n\n" +
                "Education • Discipline • Excellence"
            );

        });
    }


    // ==========================================
    // 10. SEARCH FUNCTION
    // ==========================================

    const searchInput = document.getElementById("searchInput");
    const searchableItems =
        document.querySelectorAll(".search-item");

    if (searchInput) {

        searchInput.addEventListener("input", function () {

            const searchText =
                this.value.toLowerCase().trim();

            searchableItems.forEach(function (item) {

                const text =
                    item.textContent.toLowerCase();

                if (text.includes(searchText)) {
                    item.style.display = "";
                } else {
                    item.style.display = "none";
                }

            });

        });
    }


    // ==========================================
    // 11. REVEAL ELEMENTS WHEN SCROLLING
    // ==========================================

    const revealElements =
        document.querySelectorAll(".reveal");

    const revealObserver = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },
        {
            threshold: 0.15
        }
    );

    revealElements.forEach(function (element) {
        revealObserver.observe(element);
    });


    // ==========================================
    // 12. CONTACT BUTTON
    // ==========================================

    const contactButton =
        document.getElementById("contactButton");

    if (contactButton) {

        contactButton.addEventListener("click", function () {

            const phoneNumber = "255000000000";

            window.open(
                "https://wa.me/" + phoneNumber,
                "_blank"
            );

        });
    }

});