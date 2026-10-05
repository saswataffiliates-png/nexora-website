/* =========================================
   NEXORA — WEBSITE INTERACTIONS
   ========================================= */

document.addEventListener("DOMContentLoaded", () => {

    /*
     * Add reveal animation classes to
     * important sections and cards.
     */
    const elements = document.querySelectorAll(
        ".section-heading, " +
        ".service-card, " +
        ".solution-item, " +
        ".work-card, " +
        ".process-step, " +
        ".about-container, " +
        ".contact-box"
    );


    /*
     * Prepare elements for animation.
     */
    elements.forEach((element) => {
        element.style.opacity = "0";
        element.style.transform = "translateY(30px)";
        element.style.transition =
            "opacity 0.7s ease, transform 0.7s ease";
    });


    /*
     * Observe elements as they enter
     * the visitor's screen.
     */
    const observer = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach((entry) => {

                if (!entry.isIntersecting) {
                    return;
                }

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

                observer.unobserve(entry.target);
            });

        },
        {
            threshold: 0.12
        }
    );


    /*
     * Start observing every selected element.
     */
    elements.forEach((element) => {
        observer.observe(element);
    });


    /*
     * Smoothly close navigation links
     * after clicking an anchor link.
     */
    const navigationLinks =
        document.querySelectorAll(".nav-links a");

    navigationLinks.forEach((link) => {

        link.addEventListener("click", () => {

            const target =
                document.querySelector(link.getAttribute("href"));

            if (target) {
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }

        });

    });

});