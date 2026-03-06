// --- PAGE TRANSITION LOGIC ---
document.addEventListener('DOMContentLoaded', () => {
    const btns = document.querySelectorAll('.btn');
    
    btns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const nextLink = btn.getAttribute('href');
            if(nextLink) {
                transitionTo(nextLink);
            }
        });
    });

    // Initialize specific page scripts
    if(document.getElementById('page-2')) initTransitionPage();
    if(document.getElementById('page-3')) initScrollReveal();
    if(document.getElementById('page-4')) initVisualArt();
    if(document.getElementById('page-5')) initFinalText();
    if(document.getElementById('page-6')) initSparkles();
    
    // Add forest particles to all pages
    initForestParticles();
});

function transitionTo(url) {
    // Create overlay
    const overlay = document.createElement('div');
    overlay.classList.add('page-overlay');
    document.body.appendChild(overlay);
    
    // Fade in overlay
    setTimeout(() => {
        overlay.classList.add('active');
    }, 50);
    
    // Wait for fade out, then redirect
    setTimeout(() => {
        window.location.href = url;
    }, 800);
}

// --- PAGE 2: STAGGERED TEXT ---
function initTransitionPage() {
    const lines = document.querySelectorAll('.line');
    let delay = 0;

    lines.forEach((line, index) => {
        setTimeout(() => {
            line.classList.add('visible');
        }, delay);
        delay += 800;
    });
}

// --- PAGE 3: SCROLL REVEAL ---
function initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.paragraph').forEach(p => {
        observer.observe(p);
    });
}

// --- PAGE 4: VISUAL ART FADE IN ---
function initVisualArt() {
    const visualArt = document.querySelector('.visual-art');
    if(visualArt) {
        setTimeout(() => {
            visualArt.style.opacity = '1';
            visualArt.style.transform = 'scale(1)';
        }, 500);
    }
}

// --- PAGE 5: FINAL TEXT FADE IN ---
function initFinalText() {
    const paragraphs = document.querySelectorAll('.final-text p');
    let delay = 0;

    paragraphs.forEach((p, index) => {
        setTimeout(() => {
            p.classList.add('visible');
        }, delay);
        delay += 600;
    });
}

// --- PAGE 6: SPARKLES (Forest Fireflies) ---
function initSparkles() {
    const container = document.getElementById('page-6');
    const count = 50;

    for (let i = 0; i < count; i++) {
        const sparkle = document.createElement('div');
        sparkle.classList.add('sparkle');
        
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const size = Math.random() * 6 + 3;
        const delay = Math.random() * 2;
        const duration = Math.random() * 2 + 1;
        
        sparkle.style.left = `${x}%`;
        sparkle.style.top = `${y}%`;
        sparkle.style.width = `${size}px`;
        sparkle.style.height = `${size}px`;
        sparkle.style.animationDelay = `${delay}s`;
        sparkle.style.animationDuration = `${duration}s`;
        
        container.appendChild(sparkle);
    }
}

// --- FOREST PARTICLES (Fireflies) ---
function initForestParticles() {
    const body = document.body;
    const particleCount = 30;

    for (let i = 0; i < particleCount; i++) {
        const firefly = document.createElement('div');
        firefly.classList.add('firefly');
        
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const delay = Math.random() * 15;
        const duration = Math.random() * 10 + 10;
        const size = Math.random() * 4 + 2;
        
        firefly.style.left = `${x}%`;
        firefly.style.top = `${y}%`;
        firefly.style.width = `${size}px`;
        firefly.style.height = `${size}px`;
        firefly.style.animationDelay = `${delay}s`;
        firefly.style.animationDuration = `${duration}s`;
        
        body.appendChild(firefly);
    }
}