// Data Array of Objects
const courses = [
    {
        id: "c-101",
        title: "UI/UX & Mobile Wireframing",
        category: "design",
        level: "Beginner",
        rating: 4.8,
        image: "images/course1.webp"
    },
    {
        id: "c-102",
        title: "After Effects & Motion Graphics",
        category: "video",
        level: "Intermediate",
        rating: 4.9,
        image: "images/course2.webp"
    },
    {
        id: "c-103",
        title: "Dynamic Web Fundamentals",
        category: "dev",
        level: "Intermediate",
        rating: 4.7,
        image: "images/course3.webp"
    }
];

// Event Listener on DOM Content Loaded
document.addEventListener("DOMContentLoaded", () => {
    setupMobileMenu();
    
    // Check if current page is Home or Courses
    const featuredContainer = document.getElementById("featured-container");
    const catalogContainer = document.getElementById("catalog-container");

    if (featuredContainer) {
        displayCourses(courses.filter(c => c.rating >= 4.8), featuredContainer);
    }

    if (catalogContainer) {
        displayCourses(courses, catalogContainer);
        setupFilterButtons();
    }
});

// Function 1: Navigation Menu Toggle
function setupMobileMenu() {
    const toggleBtn = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");

    if (toggleBtn && navMenu) {
        toggleBtn.addEventListener("click", () => {
            navMenu.classList.toggle("open");
        });
    }
}

// Function 2: Render Cards using Template Literals Exclusively
function displayCourses(courseList, container) {
    container.innerHTML = ""; // Clear existing content
    
    if (courseList.length === 0) {
        container.innerHTML = `<p class="no-results">No courses available for this category.</p>`;
        return;
    }

    courseList.forEach(course => {
        const card = document.createElement("article");
        card.className = "card";
        
        // Strict usage of template literals
        card.innerHTML = `
            <img src="${course.image}" alt="${course.title}" width="350" height="200" loading="lazy">
            <div class="card-content">
                <span class="badge ${course.category}">${course.category.toUpperCase()}</span>
                <h3>${course.title}</h3>
                <p>Level: <strong>${course.level}</strong></p>
                <p>Rating: ⭐ <strong>${course.rating}</strong> / 5</p>
            </div>
        `;
        container.appendChild(card);
    });
}

// Function 3: Filtering system with Conditional Branching
function setupFilterButtons() {
    const buttons = document.querySelectorAll(".filter-btn");
    const catalogContainer = document.getElementById("catalog-container");

    buttons.forEach(button => {
        button.addEventListener("click", (e) => {
            buttons.forEach(btn => btn.classList.remove("active"));
            e.target.classList.add("active");

            const category = e.target.getAttribute("data-category");
            
            // Conditional branching & Array filtering
            if (category === "all") {
                displayCourses(courses, catalogContainer);
            } else {
                const filtered = courses.filter(item => item.category === category);
                displayCourses(filtered, catalogContainer);
            }
        });
    });
}
