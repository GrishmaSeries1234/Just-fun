// Alternative questions to cycle through when user clicks "No"
const alternativeQuestions = [
    "Are you sure? 🥺",
    "Pretty please? 🌹",
    "I'll make you happy forever! 💍",
    "Don't break my heart! 💔",
    "Think about the chocolates! 🍫",
    "What about a romantic dinner? 🍷",
    "I'll be the best Valentine ever! ⭐",
    "My heart only beats for you! 💓",
    "Say yes and I'll love you eternally! ✨",
    "You're my only choice! 🎯",
    "Let's make beautiful memories! 📸",
    "I promise endless cuddles! 🤗",
    "You're the missing piece to my heart! 🧩",
    "Say yes for adventure! 🌟",
    "I'll write you love poems every day! 📜",
    "Be my forever Valentine? 💖"
];

let currentAltIndex = 0;
let noClickCount = 0;

// Create floating hearts background
function createFloatingHearts() {
    const container = document.getElementById('hearts-container');
    const hearts = ['💕', '💖', '💗', '💓', '💝', '♥️', '💘', '💞'];
    
    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDuration = (Math.random() * 5 + 5) + 's';
        heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
        container.appendChild(heart);
        
        setTimeout(() => heart.remove(), 10000);
    }, 300);
}

// Handle Yes button click
function sayYes() {
    document.getElementById('question-section').style.display = 'none';
    document.getElementById('alternative-options').style.display = 'none';
    document.getElementById('success-message').style.display = 'block';
    
    // Create fireworks
    createFireworks();
    
    // Play celebration animation
    celebrate();
    
    // Scroll to show the full message
    setTimeout(() => {
        document.querySelector('.romantic-note').scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 1000);
}

// Handle No button click (first time)
function sayNo() {
    noClickCount++;
    document.getElementById('question-section').style.display = 'none';
    document.getElementById('alternative-options').style.display = 'block';
    
    // Make the Yes button bigger and more attractive
    const yesBtn = document.getElementById('alt-yes-btn');
    yesBtn.style.transform = 'scale(1.1)';
    yesBtn.style.boxShadow = '0 10px 30px rgba(238, 90, 111, 0.6)';
    
    // Add some shake animation to the card
    document.querySelector('.card').style.animation = 'shake 0.5s';
    setTimeout(() => {
        document.querySelector('.card').style.animation = '';
    }, 500);
}

// Handle subsequent No clicks
function sayNoAgain() {
    noClickCount++;
    currentAltIndex = (currentAltIndex + 1) % alternativeQuestions.length;
    
    const altQuestion = document.getElementById('alt-question');
    altQuestion.style.opacity = '0';
    
    setTimeout(() => {
        altQuestion.textContent = alternativeQuestions[currentAltIndex];
        altQuestion.style.opacity = '1';
    }, 200);
    
    // Make Yes button even more enticing
    const yesBtn = document.getElementById('alt-yes-btn');
    const scale = 1.1 + (noClickCount * 0.1);
    yesBtn.style.transform = `scale(${Math.min(scale, 1.5)})`;
    yesBtn.style.fontSize = `${1.2 + (noClickCount * 0.1)}rem`;
    
    // Make No button smaller or move it (playful)
    const noBtn = document.getElementById('alt-no-btn');
    if (noClickCount > 2) {
        noBtn.style.transform = `scale(${Math.max(0.8 - (noClickCount * 0.05), 0.5)})`;
        noBtn.style.opacity = Math.max(1 - (noClickCount * 0.1), 0.3);
    }
    
    // Add shake effect
    document.querySelector('.card').style.animation = 'shake 0.5s';
    setTimeout(() => {
        document.querySelector('.card').style.animation = '';
    }, 500);
}

// Create fireworks celebration
function createFireworks() {
    const container = document.getElementById('fireworks');
    const colors = ['#ff6b6b', '#feca57', '#48dbfb', '#ff9ff3', '#54a0ff', '#5f27cd'];
    
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            const x = Math.random() * 100;
            const y = Math.random() * 100;
            
            for (let j = 0; j < 30; j++) {
                const particle = document.createElement('div');
                particle.className = 'firework';
                particle.style.left = x + '%';
                particle.style.top = y + '%';
                particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                
                const angle = (Math.PI * 2 * j) / 30;
                const velocity = 100 + Math.random() * 100;
                particle.style.setProperty('--x', Math.cos(angle) * velocity + 'px');
                particle.style.setProperty('--y', Math.sin(angle) * velocity + 'px');
                
                container.appendChild(particle);
                setTimeout(() => particle.remove(), 1000);
            }
        }, i * 300);
    }
}

// Celebration effects
function celebrate() {
    // Create extra hearts
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.textContent = '💖';
            heart.style.position = 'fixed';
            heart.style.left = Math.random() * 100 + '%';
            heart.style.top = '-50px';
            heart.style.fontSize = '30px';
            heart.style.animation = 'float 3s linear';
            heart.style.zIndex = '1000';
            document.body.appendChild(heart);
            setTimeout(() => heart.remove(), 3000);
        }, i * 100);
    }
    
    // Create falling flowers
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            const flower = document.createElement('div');
            flower.textContent = ['🌹', '🌸', '🌺', '🌷', '💐'][Math.floor(Math.random() * 5)];
            flower.style.position = 'fixed';
            flower.style.left = Math.random() * 100 + '%';
            flower.style.top = '-50px';
            flower.style.fontSize = '25px';
            flower.style.animation = 'float 4s linear';
            flower.style.zIndex = '999';
            document.body.appendChild(flower);
            setTimeout(() => flower.remove(), 4000);
        }, i * 150);
    }
}

// Reset the page
function resetPage() {
    currentAltIndex = 0;
    noClickCount = 0;
    
    document.getElementById('success-message').style.display = 'none';
    document.getElementById('question-section').style.display = 'block';
    document.getElementById('alternative-options').style.display = 'none';
    
    // Reset button styles
    document.getElementById('alt-yes-btn').style.transform = '';
    document.getElementById('alt-yes-btn').style.fontSize = '';
    document.getElementById('alt-no-btn').style.transform = '';
    document.getElementById('alt-no-btn').style.opacity = '';
    
    // Scroll back to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Add shake animation to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-10px); }
        75% { transform: translateX(10px); }
    }
`;
document.head.appendChild(style);

// Initialize
createFloatingHearts();