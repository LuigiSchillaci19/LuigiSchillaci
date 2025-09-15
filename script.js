// JavaScript a tema cybersecurity con effetti terminale                
document.addEventListener('DOMContentLoaded', function() {
    initializeTerminalEffects();
    initializeMobileNavigation();
    initializeBlogFunctionality();
    initializeScrollEffects();
    initializeMatrixEffect();
    addCybersecurityAnimations();
});

// Effetto di inizializzazione terminale
function initializeTerminalEffects() {
    const hero = document.querySelector('.hero-content h1');
    if (hero) {
        createTypingEffect(hero, hero.textContent);
    }
    
    // Aggiungi cursore terminale al logo di navigazione
    const logo = document.querySelector('.nav-logo h2');
    if (logo) {
        logo.classList.add('terminal-cursor');
    }
}

// Effetto di scrittura per testo stile terminale
function createTypingEffect(element, text) {
    const originalText = text;
    element.textContent = ''; // NIENTE '$ ' qui
    let i = 0; // Inizia da 0

    const timer = setInterval(() => {
        if (i < originalText.length) {
            element.textContent += originalText.charAt(i);
            i++;
        } else {
            clearInterval(timer);
            element.innerHTML += '<span class="terminal-cursor"></span>';
        }
    }, 80 + Math.random() * 40);
}

// Effetto pioggia Matrix
function initializeMatrixEffect() {
    const canvas = document.createElement('canvas');
    canvas.id = 'matrix-canvas';
    canvas.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 1;
        opacity: 0.1;
    `;
    document.body.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
    const matrixArray = matrix.split("");
    
    const fontSize = 10;
    const columns = canvas.width / fontSize;
    const drops = [];
    
    for (let x = 0; x < columns; x++) {
        drops[x] = 1;
    }
    
    function drawMatrix() {
        ctx.fillStyle = 'rgba(10, 10, 10, 0.04)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#00ff41';
        ctx.font = fontSize + 'px Courier New';
        
        for (let i = 0; i < drops.length; i++) {
            const text = matrixArray[Math.floor(Math.random() * matrixArray.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }
    
    setInterval(drawMatrix, 50);
}

// Navigazione mobile avanzata con stile cybersecurity
function initializeMobileNavigation() {
    const mobileMenuButton = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuButton && navMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenuButton.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            // Aggiungi effetto glitch al toggle del menu
            if (navMenu.classList.contains('active')) {
                navMenu.style.animation = 'glitch 0.3s ease';
                setTimeout(() => {
                    navMenu.style.animation = '';
                }, 300);
            }
        });

        // Chiudi il menu mobile quando si clicca su un link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenuButton.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        // Chiudi il menu mobile quando si clicca fuori
        document.addEventListener('click', function(event) {
            const isClickInsideNav = navMenu.contains(event.target);
            const isClickOnMenuButton = mobileMenuButton.contains(event.target);
            
            if (!isClickInsideNav && !isClickOnMenuButton && navMenu.classList.contains('active')) {
                mobileMenuButton.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }
}

// Funzionalità blog avanzata con effetti terminale
function initializeBlogFunctionality() {
    // Toggle anteprima articolo con caricamento stile terminale
    window.toggleArticlePreview = function(articleId) {
        const preview = document.getElementById(`preview-${articleId}`);
        const button = event.target;
        
        if (preview) {
            if (preview.style.display === 'none' || preview.style.display === '') {
                // Effetto di caricamento terminale
                button.textContent = 'Caricamento...';
                button.style.color = '#00ffff';
                
                setTimeout(() => {
                    preview.style.display = 'block';
                    button.textContent = 'Nascondi anteprima';
                    button.style.color = '';
                    
                    // Aggiungi effetto di scrittura al contenuto espanso
                    const paragraphs = preview.querySelectorAll('p');
                    paragraphs.forEach((p, index) => {
                        p.style.opacity = '0';
                        setTimeout(() => {
                            p.style.opacity = '1';
                            p.style.transition = 'opacity 0.5s ease';
                        }, index * 200);
                    });
                    
                    // Scroll fluido per mostrare il contenuto espanso
                    setTimeout(() => {
                        preview.scrollIntoView({ 
                            behavior: 'smooth', 
                            block: 'nearest' 
                        });
                    }, 100);
                }, 800);
            } else {
                preview.style.display = 'none';
                button.textContent = 'Espandi anteprima';
            }
        }
    };
}

// Effetti di scroll avanzati con tema cybersecurity
function initializeScrollEffects() {
    // Scroll fluido per i link di ancoraggio
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href === '#') return;
            
            const targetElement = document.querySelector(href);
            
            if (targetElement) {
                e.preventDefault();
                
                const offsetTop = targetElement.offsetTop - 70;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Aggiungi effetto glow all'elemento target
                targetElement.style.boxShadow = '0 0 20px #00ff41';
                setTimeout(() => {
                    targetElement.style.boxShadow = '';
                }, 2000);
            }
        });
    });

    // Aggiungi stato attivo alla navigazione in base alla pagina corrente
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPage || 
            (currentPage === '' && linkHref === 'index.html') ||
            (currentPage === '/' && linkHref === 'index.html')) {
            link.classList.add('active');
        }
    });

    // Animazione avanzata delle barre di livello linguistico
    animateLanguageBars();
    
    // Animazioni attivate dallo scroll
    addScrollAnimations();
}

// Animazione barre di livello linguistico con effetti cyber
function animateLanguageBars() {
    const languageBars = document.querySelectorAll('.level-fill');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const width = bar.style.width;
                bar.style.width = '0%';
                
                // Aggiungi effetto di caricamento
                bar.style.background = 'linear-gradient(90deg, #ff0080, #00ffff)';
                
                setTimeout(() => {
                    bar.style.width = width;
                    bar.style.background = 'linear-gradient(90deg, #00ff41, #00ffff)';
                    
                    // Aggiungi effetto glow al completamento
                    setTimeout(() => {
                        bar.style.boxShadow = '0 0 15px #00ff41';
                        setTimeout(() => {
                            bar.style.boxShadow = '0 0 10px #00ff41';
                        }, 500);
                    }, 1000);
                }, 200);
            }
        });
    }, { threshold: 0.5 });
    
    languageBars.forEach(bar => {
        observer.observe(bar);
    });
}

function addScrollAnimations() {
    const cards = document.querySelectorAll('.highlight-card, .article-card, .cert-item, .education-item, .timeline-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
                
                // Aggiungi effetto di entrata cyber
                element.style.boxShadow = '0 0 20px rgba(0, 255, 65, 0.3)';
                setTimeout(() => {
                    element.style.boxShadow = '';
                }, 1000);
            }
        });
    }, { threshold: 0.1 });
    
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease, box-shadow 0.6s ease';
        observer.observe(card);
    });
}

// Animazioni ed effetti specifici per cybersecurity
function addCybersecurityAnimations() {
    // Aggiungi effetti glitch casuali agli elementi importanti
    addRandomGlitchEffects();
    
    // Migliora le interazioni dei pulsanti
    enhanceButtonEffects();
    
    // Aggiungi sequenza di avvio terminale al caricamento della pagina
    addBootSequence();
    
    // Aggiungi effetto linea di scansione periodicamente
    addPeriodicScanEffect();
    
    // Pulsante "torna su" con stile cyber
    addCyberBackToTopButton();
}

function addRandomGlitchEffects() {
    const glitchElements = document.querySelectorAll('h1, h2, .nav-logo h2');
    
    setInterval(() => {
        const randomElement = glitchElements[Math.floor(Math.random() * glitchElements.length)];
        if (randomElement && Math.random() > 0.95) {
            randomElement.style.animation = 'glitch 0.3s ease';
            setTimeout(() => {
                randomElement.style.animation = '';
            }, 300);
        }
    }, 3000);
}

function enhanceButtonEffects() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.textShadow = '0 0 10px currentColor';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.textShadow = '';
        });
        
        button.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            this.style.filter = 'brightness(1.5)';
            
            const pulse = document.createElement('div');
            pulse.style.cssText = `
                position: absolute;
                top: 50%;
                left: 50%;
                width: 0;
                height: 0;
                border-radius: 50%;
                background: radial-gradient(circle, rgba(0,255,65,0.5) 0%, transparent 70%);
                transform: translate(-50%, -50%);
                pointer-events: none;
                animation: pulse 0.6s ease-out;
            `;
            
            this.style.position = 'relative';
            this.appendChild(pulse);
            
            setTimeout(() => {
                this.style.transform = '';
                this.style.filter = '';
                if (pulse.parentNode) {
                    pulse.parentNode.removeChild(pulse);
                }
            }, 200);
            
            setTimeout(() => {
                if (pulse.parentNode) {
                    pulse.parentNode.removeChild(pulse);
                }
            }, 600);
        });
    });
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes pulse {
            to {
                width: 200px;
                height: 200px;
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

function addBootSequence() {
    if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/') {
        const bootMessages = [
            'Inizializzazione protocolli di sicurezza...',
            'Caricamento reti neurali...',
            'Connessione criptata in corso...',
            'Sistema pronto.'
        ];
        
        const bootContainer = document.createElement('div');
        bootContainer.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.9);
            color: #00ff41;
            font-family: 'Courier New', monospace;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            z-index: 10000;
            opacity: 1;
            transition: opacity 0.5s ease;
        `;
        
        document.body.appendChild(bootContainer);
        
        let messageIndex = 0;
        const messageDisplay = document.createElement('div');
        messageDisplay.style.fontSize = '1.2rem';
        bootContainer.appendChild(messageDisplay);
        
        function showNextMessage() {
            if (messageIndex < bootMessages.length) {
                messageDisplay.textContent = '> ' + bootMessages[messageIndex];
                messageIndex++;
                setTimeout(showNextMessage, 800);
            } else {
                setTimeout(() => {
                    bootContainer.style.opacity = '0';
                    setTimeout(() => {
                        document.body.removeChild(bootContainer);
                    }, 500);
                }, 1000);
            }
        }
        
        setTimeout(showNextMessage, 500);
    }
}

function addPeriodicScanEffect() {
    setInterval(() => {
        if (Math.random() > 0.7) {
            const scanLine = document.createElement('div');
            scanLine.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 1px;
                background: linear-gradient(90deg, transparent, #00ffff, transparent);
                z-index: 9999;
                pointer-events: none;
                animation: vertical-scan 2s linear;
            `;
            
            document.body.appendChild(scanLine);
            
            setTimeout(() => {
                if (scanLine.parentNode) {
                    scanLine.parentNode.removeChild(scanLine);
                }
            }, 2000);
        }
    }, 5000);
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes vertical-scan {
            from { transform: translateY(0vh); }
            to { transform: translateY(100vh); }
        }
    `;
    document.head.appendChild(style);
}

function addCyberBackToTopButton() {
    const backToTopButton = document.createElement('button');
    backToTopButton.innerHTML = '^';
    backToTopButton.className = 'back-to-top';
    backToTopButton.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: rgba(0, 255, 65, 0.2);
        color: #00ff41;
        border: 2px solid #00ff41;
        font-size: 20px;
        font-family: 'Courier New', monospace;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 0 10px rgba(0, 255, 65, 0.3);
    `;
    
    document.body.appendChild(backToTopButton);
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.style.opacity = '1';
            backToTopButton.style.visibility = 'visible';
        } else {
            backToTopButton.style.opacity = '0';
            backToTopButton.style.visibility = 'hidden';
        }
    });
    
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        
        this.style.transform = 'scale(0.9)';
        this.style.boxShadow = '0 0 20px #00ff41';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = '0 0 10px rgba(0, 255, 65, 0.3)';
        }, 150);
    });
    
    backToTopButton.addEventListener('mouseenter', function() {
        this.style.background = 'rgba(0, 255, 65, 0.3)';
        this.style.transform = 'scale(1.1)';
        this.style.boxShadow = '0 0 20px #00ff41';
    });
    
    backToTopButton.addEventListener('mouseleave', function() {
        this.style.background = 'rgba(0, 255, 65, 0.2)';
        this.style.transform = 'scale(1)';
        this.style.boxShadow = '0 0 10px rgba(0, 255, 65, 0.3)';
    });
}

function showCyberNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `cyber-notification cyber-notification-${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        color: #00ff41;
        font-family: 'Courier New', monospace;
        font-weight: 500;
        z-index: 10000;
        opacity: 0;
        transform: translateY(-20px);
        transition: all 0.3s ease;
        border: 1px solid #00ff41;
        background: rgba(10, 10, 10, 0.9);
        backdrop-filter: blur(10px);
        box-shadow: 0 0 20px rgba(0, 255, 65, 0.3);
    `;
    
    const colors = {
        'info': '#00ffff',
        'success': '#00ff41',
        'warning': '#ffff00',
        'error': '#ff0080'
    };
    
    notification.style.color = colors[type] || colors.info;
    notification.style.borderColor = colors[type] || colors.info;
    notification.style.boxShadow = `0 0 20px ${colors[type] || colors.info}`;
    
    notification.textContent = '> ' + message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateY(0)';
    }, 100);
    
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateY(-20px)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

document.addEventListener('keydown', function(e) {
    // Ctrl + Shift + H for hack mode (easter egg)
    if (e.ctrlKey && e.shiftKey && e.key === 'H') {
        e.preventDefault();
        document.body.style.filter = 'hue-rotate(180deg)';
        showCyberNotification('HACK MODE ACTIVATED', 'warning');
        setTimeout(() => {
            document.body.style.filter = '';
            showCyberNotification('System restored', 'success');
        }, 3000);
    }
    
    // Ctrl + Shift + M for matrix mode
    if (e.ctrlKey && e.shiftKey && e.key === 'M') {
        e.preventDefault();
        const canvas = document.getElementById('matrix-canvas');
        if (canvas) {
            canvas.style.opacity = canvas.style.opacity === '0.3' ? '0.1' : '0.3';
            showCyberNotification('Matrix intensity toggled', 'info');
        }
    }
});

console.log('%c[SYSTEM] Cybersecurity theme loaded successfully', 'color: #00ff41; background: #000; padding: 5px; font-family: Courier New;');
console.log('%c[INFO] Terminal effects initialized', 'color: #00ffff; background: #000; padding: 5px; font-family: Courier New;');
console.log('%c[SECURITY] All systems operational', 'color: #00ff41; background: #000; padding: 5px; font-family: Courier New;');
console.log('%cVersion: 2.0.0-cyber', 'color: #ff0080; background: #000; padding: 5px; font-family: Courier New;');
console.log('%cBuild Date: ' + new Date().toLocaleDateString('it-IT'), 'color: #ffff00; background: #000; padding: 5px; font-family: Courier New;');

// Easter egg
console.log('%cTry: Ctrl+Shift+H or Ctrl+Shift+M', 'color: #666; font-style: italic; font-family: Courier New;');