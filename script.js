// Data kata-kata romantis - Anda dapat mengubah atau menambah kata-kata di sini
const romanticQuotes = [
    {
        text: "Helloo Neng asta, di baca pelan-pelan yaa",
        author: "",
        image: "images/love1.jpg"
    },
    {
        text: "ini semua berawal dari dua bocil yang ketemu di gunung ckptw, dua bocil yang nyasar di labirin",
        author: "",
        image: "images/love2.jpg"
    },
    {
        text: "sesampe di summit, bocil tanktop item itu malah ikut nimbrug sama orang foto-foto",
        author: "",
        image: "images/love3.jpg"
    },
    {
        text: "ga lama abis dia foto foto, dia nyamperin bocil topi panci terus dia berdua foto bareng dan akhirnya ngirim friend list",
        author: "",
        image: "images/love4.jpg"
    },
    {
        text: "sehabis di acc eh ketemu lagi deh di gunung atin, kasian teh ngestuck di cp 3 wkwkwk",
        author: "",
        image: "images/love5.jpg"
    },
    {
        text: "dibawa ke summit akhirnya sama sepuh gunung, kirain jadi hts (hanya teman summit) eh lanjut geser ke dc.",
        author: "",
        image: "images/love6.jpg"
    },
    {
        text: "dari situ deh kita mulai sering mabar, ngedaki gunung bareng hampir tiap malem",
        author: "",
        image: "images/love7.jpg"
    },
    {
        text: "ga kerasa makin hari makin sering ngobrol terus juga mulai jadi sering curhat, dan jangan lupa manchink bareng, ga kerasa udah hampir sebulan ya chatting makin intense.",
        author: "",
        image: "images/love8.jpg"
    },
    {
        text: "thanks for being my friend I cherish every moment we spend together and look forward to many more adventures with you.",
        author: "",
        image: "images/love9.jpg"
    },
    {
        text: "cant wait to see you in person and create more unforgettable memories together. and thanks for everything you do for me, you're truly special to me.",
        author: "",
        image: "images/love10.jpg"
    }
];

const backgroundImages = [
    'images/bg1.jpg',
    'images/bg2.jpg',
    'images/bg3.jpg',
    'images/bg4.jpg',
    'images/bg5.jpg'
];

let currentQuoteIndex = 0;
let currentBackgroundIndex = 0;

// DOM Elements
const quoteText = document.getElementById('quoteText');
const quoteAuthor = document.getElementById('quoteAuthor');
const backgroundImage = document.getElementById('backgroundImage');
const imageGallery = document.getElementById('imageGallery');
const nextQuoteBtn = document.getElementById('nextQuoteBtn');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
});

function initializeApp() {
    displayQuote(0);
    createImageGallery();
    changeBackgroundImage();
}

function setupEventListeners() {
    nextQuoteBtn.addEventListener('click', showNextQuote);
}

function displayQuote(index, animate = true) {
    if (animate) {
        quoteText.classList.add('loading');
    }
    
    setTimeout(() => {
        const quote = romanticQuotes[index];
        quoteText.textContent = quote.text;
        quoteAuthor.textContent = quote.author;
        
        if (animate) {
            quoteText.classList.remove('loading');
        }
        
        // Update active image in gallery
        updateActiveGalleryImage(index);
        
        // Change background occasionally
        if (Math.random() > 0.7) {
            changeBackgroundImage();
        }
    }, animate ? 300 : 0);
}

function showNextQuote() {
    currentQuoteIndex = (currentQuoteIndex + 1) % romanticQuotes.length;
    displayQuote(currentQuoteIndex);
    
    // Add button animation
    nextQuoteBtn.style.transform = 'scale(0.95)';
    setTimeout(() => {
        nextQuoteBtn.style.transform = 'scale(1)';
    }, 150);
}

function changeBackgroundImage() {
    currentBackgroundIndex = Math.floor(Math.random() * backgroundImages.length);
    backgroundImage.style.backgroundImage = `url('${backgroundImages[currentBackgroundIndex]}')`;
}

function createImageGallery() {
    imageGallery.innerHTML = '';
    
    // Show all images in gallery
    romanticQuotes.forEach((quote, index) => {
        const img = document.createElement('img');
        img.src = quote.image;
        img.alt = `Romantic image ${index + 1}`;
        img.className = 'gallery-image';
        if (index === 0) img.classList.add('active');
        
        img.addEventListener('click', () => {
            currentQuoteIndex = index;
            displayQuote(currentQuoteIndex);
        });
        
        // Handle image load error
        img.addEventListener('error', () => {
            img.src = 'https://via.placeholder.com/80x80/ff6b6b/white?text=♥';
        });
        
        imageGallery.appendChild(img);
    });
}

function updateActiveGalleryImage(index) {
    const galleryImages = document.querySelectorAll('.gallery-image');
    galleryImages.forEach((img, i) => {
        img.classList.toggle('active', i === index);
    });
}

// Auto-advance quotes (optional feature)
let autoAdvanceInterval;

function startAutoAdvance() {
    autoAdvanceInterval = setInterval(() => {
        showNextQuote();
    }, 10000); // Change quote every 10 seconds
}

function stopAutoAdvance() {
    if (autoAdvanceInterval) {
        clearInterval(autoAdvanceInterval);
    }
}

// Optional: Start auto-advance after page load
// Uncomment the line below if you want quotes to change automatically
// setTimeout(startAutoAdvance, 5000);

// Handle visibility change to pause auto-advance when tab is not active
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        stopAutoAdvance();
    } else {
        // Restart auto-advance when tab becomes active again
        // startAutoAdvance();
    }
});

// Add touch gesture support for mobile
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swipe left - next quote
            showNextQuote();
        } else {
            // Swipe right - previous quote
            currentQuoteIndex = currentQuoteIndex > 0 ? currentQuoteIndex - 1 : romanticQuotes.length - 1;
            displayQuote(currentQuoteIndex);
        }
    }
}
