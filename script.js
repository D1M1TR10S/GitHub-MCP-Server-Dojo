// Smooth scrolling to sections
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Copy to clipboard functionality
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showNotification('Copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: var(--accent-primary);
        color: white;
        padding: 1rem 2rem;
        border-radius: 8px;
        z-index: 9999;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Add CSS animation for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);

// Add click handlers for copy buttons
document.addEventListener('DOMContentLoaded', function() {
    // Add copy functionality to setup code blocks
    const setupCards = document.querySelectorAll('.setup-card');
    setupCards.forEach(card => {
        const button = card.querySelector('.btn-outline');
        const codeBlock = card.querySelector('code');
        
        if (button && codeBlock) {
            button.addEventListener('click', () => {
                copyToClipboard(codeBlock.textContent);
            });
        }
    });
    
    // Add navbar scroll effect
    const navbar = document.querySelector('.navbar');
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            navbar.style.background = 'rgba(13, 17, 23, 0.98)';
        } else {
            navbar.style.background = 'rgba(13, 17, 23, 0.95)';
        }
        
        lastScrollY = currentScrollY;
    });
    
    // Add intersection observer for section animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all cards and sections
    const animateElements = document.querySelectorAll('.intro-card, .feature-card, .setup-card');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Removed parallax effect to fix overlapping sections
});

// Console greeting
console.log(`
🥋 GitHub MCP Server Dojo
========================
Welcome to the playground for GitHub MCP Server exploration!

Explore the power of GitHub automation with AI.
Check out: https://github.com/github/github-mcp-server
`);

// Export functions for global use
window.scrollToSection = scrollToSection;
window.copyToClipboard = copyToClipboard;
