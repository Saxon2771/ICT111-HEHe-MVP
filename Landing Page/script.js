function getLandingPageMetrics() {
    const savedMetrics =
        localStorage.getItem("landingPageMetrics");

    if (savedMetrics) {
        return JSON.parse(savedMetrics);
    }

    return {
        pageViews: 0,
        ctaClicks: 0,
        lastCTA: "",
        lastVisit: ""
    };
}

function saveLandingPageMetrics(metrics) {
    localStorage.setItem(
        "landingPageMetrics",
        JSON.stringify(metrics)
    );
}

function recordPageView() {
    const metrics = getLandingPageMetrics();

    metrics.pageViews += 1;
    metrics.lastVisit = new Date().toISOString();

    saveLandingPageMetrics(metrics);
    displayCTACount();
}

function trackCTAClick(buttonName) {
    const metrics = getLandingPageMetrics();

    metrics.ctaClicks += 1;
    metrics.lastCTA = buttonName;

    saveLandingPageMetrics(metrics);
    displayCTACount();
}

function displayCTACount() {
    const counter =
        document.getElementById("ctaCounter");

    if (!counter) {
        return;
    }

    const metrics = getLandingPageMetrics();

    counter.textContent =
        `Demo interest clicks: ${metrics.ctaClicks}`;
}

function setupMobileMenu() {
    const menuButton =
        document.getElementById("menuButton");

    const navMenu =
        document.getElementById("navMenu");

    if (!menuButton || !navMenu) {
        return;
    }

    menuButton.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });

    const navigationLinks =
        navMenu.querySelectorAll("a");

    navigationLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            navMenu.classList.remove("active");
        });
    });
}

function setupNavigationHighlight() {
    const sections =
        document.querySelectorAll("section[id]");

    const navigationLinks =
        document.querySelectorAll(".nav-menu a");

    window.addEventListener("scroll", function () {
        let currentSection = "";

        sections.forEach(function (section) {
            const sectionTop =
                section.offsetTop - 130;

            if (window.scrollY >= sectionTop) {
                currentSection =
                    section.getAttribute("id");
            }
        });

        navigationLinks.forEach(function (link) {
            link.classList.remove("active-link");

            if (
                link.getAttribute("href") ===
                `#${currentSection}`
            ) {
                link.classList.add("active-link");
            }
        });
    });
}

document.addEventListener(
    "DOMContentLoaded",
    function () {
        recordPageView();
        setupMobileMenu();
        setupNavigationHighlight();
    }
);