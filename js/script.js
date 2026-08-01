/* ===================================================
   PORTFOLIO JAVASCRIPT
   =================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
       MOBILE NAVIGATION
    ========================================== */

    const menuButton = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuButton && navLinks) {

        menuButton.addEventListener("click", () => {

            navLinks.classList.toggle("active");

        });

        document.querySelectorAll(".nav-links a").forEach(link => {

            link.addEventListener("click", () => {

                navLinks.classList.remove("active");

            });

        });

    }

    /* ==========================================
       DARK MODE
    ========================================== */

    const themeToggle = document.getElementById("themeToggle");

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {

        document.body.classList.add("dark");

        if (themeToggle) {

            themeToggle.textContent = "☀️";

        }

    }

    if (themeToggle) {

        themeToggle.addEventListener("click", () => {

            document.body.classList.toggle("dark");

            const darkMode = document.body.classList.contains("dark");

            localStorage.setItem(

                "theme",

                darkMode ? "dark" : "light"

            );

            themeToggle.textContent =

                darkMode ? "☀️" : "🌙";

        });

    }

    /* ==========================================
       PROJECT FILTER
    ========================================== */

    const filterButtons = document.querySelectorAll(".filter-btn");

    const projectCards = document.querySelectorAll(".project-card");

    if (filterButtons.length > 0) {

        filterButtons.forEach(button => {

            button.addEventListener("click", () => {

                filterButtons.forEach(btn =>

                    btn.classList.remove("active")

                );

                button.classList.add("active");

                const filter = button.dataset.filter;

                projectCards.forEach(card => {

                    if (

                        filter === "all" ||

                        card.dataset.category === filter

                    ) {

                        card.style.display = "block";

                    }

                    else {

                        card.style.display = "none";

                    }

                });

            });

        });

    }

    /* ==========================================
       SCROLL REVEAL
    ========================================== */

    const revealElements = document.querySelectorAll(

        ".card, .feature-box, .project-card, .timeline-card, .stat-card, .social-card"

    );

    const observer = new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                }

            });

        },

        {

            threshold: 0.15

        }

    );

    revealElements.forEach(item => {

        item.classList.add("reveal");

        observer.observe(item);

    });
    /* ==========================================
       CONTACT FORM VALIDATION
    ========================================== */

    const contactForm = document.getElementById("contactForm");

    if (contactForm) {

        contactForm.addEventListener("submit", function (e) {

            e.preventDefault();

            const name = document.getElementById("name").value.trim();

            const email = document.getElementById("email").value.trim();

            const subject = document.getElementById("subject").value.trim();

            const message = document.getElementById("message").value.trim();

            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (
                name === "" ||
                email === "" ||
                subject === "" ||
                message === ""
            ) {

                alert("Please fill in all fields.");

                return;

            }

            if (!emailPattern.test(email)) {

                alert("Please enter a valid email address.");

                return;

            }

            alert("Thank you! Your message has been sent.");

            contactForm.reset();

        });

    }

    /* ==========================================
       BACK TO TOP BUTTON
    ========================================== */

    const backToTop = document.createElement("button");

    backToTop.id = "backToTop";

    backToTop.innerHTML = "↑";

    backToTop.setAttribute(

        "aria-label",

        "Back to Top"

    );

    document.body.appendChild(backToTop);

    window.addEventListener("scroll", () => {

        if (window.scrollY > 300) {

            backToTop.classList.add("show");

        } else {

            backToTop.classList.remove("show");

        }

    });

    backToTop.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

    /* ==========================================
       HEADER SHADOW
    ========================================== */

    const header = document.querySelector(".header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            header.style.boxShadow =
                "0 8px 20px rgba(0,0,0,.15)";

        } else {

            header.style.boxShadow =
                "";

        }

    });

    /* ==========================================
       ACTIVE NAVIGATION
    ========================================== */

    const currentPage = window.location.pathname
        .split("/")
        .pop();

    document.querySelectorAll(".nav-links a").forEach(link => {

        const href = link.getAttribute("href");

        if (href === currentPage) {

            link.classList.add("active");

        }

    });

    /* ==========================================
       SMOOTH SCROLL
    ========================================== */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            const target = document.querySelector(

                this.getAttribute("href")

            );

            if (target) {

                e.preventDefault();

                target.scrollIntoView({

                    behavior: "smooth"

                });

            }

        });

    });

    /* ==========================================
       SIMPLE TYPING EFFECT
    ========================================== */

    const heroTitle = document.querySelector(".hero-text h2 span");

    if (heroTitle) {

        const originalText = heroTitle.textContent;

        heroTitle.textContent = "";

        let index = 0;

        function typeEffect() {

            if (index < originalText.length) {

                heroTitle.textContent += originalText.charAt(index);

                index++;

                setTimeout(typeEffect, 80);

            }

        }

        typeEffect();

    }

});