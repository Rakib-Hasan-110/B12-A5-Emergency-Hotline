// Emergency services data
const emergencyServices = [
    {
        id: 1,
        name: "National Emergency",
        nameEnglish: "National Emergency",
        number: "999",
        category: "All",
        icon: "fas fa-exclamation-triangle",
        img: "./assets/emergency.png" 
    },
    {
        id: 2,
        name: "Police",
        nameEnglish: "Police",
        number: "999",
        category: "Police",
        icon: "fas fa-shield-alt",
        img: "./assets/police.png" 
    },
    {
        id: 3,
        name: "Fire Service",
        nameEnglish: "Fire Service",
        number: "999",
        category: "Fire",
        icon: "fas fa-fire-extinguisher",
        img: "./assets/fire-service.png" 
    },
    {
        id: 4,
        name: "Ambulance",
        nameEnglish: "Ambulance",
        number: "1994-999999",
        category: "Health",
        icon: "fas fa-ambulance",
        img: "./assets/ambulance.png" 
    },
    {
        id: 5,
        name: "Women & Child Helpline",
        nameEnglish: "Women & Child Helpline",
        number: "109",
        category: "Help",
        icon: "fas fa-female",
        img: "./assets/emergency.png" 
    },
    {
        id: 6,
        name: "Anti-Corruption",
        nameEnglish: "Anti-Corruption",
        number: "106",
        category: "Govt.",
        icon: "fas fa-gavel",
        img: "./assets/emergency.png" 
    },
    {
        id: 7,
        name: "Electricity Outage",
        nameEnglish: "Electricity Outage",
        number: "16216",
        category: "Electricity",
        icon: "fas fa-bolt",
        img: "./assets/emergency.png" 
    },
    {
        id: 8,
        name: "Brac",
        nameEnglish: "Brac",
        number: "16445",
        category: "NGO",
        icon: "fas fa-hands-helping",
        img: "./assets/brac.png" 
    },
    {
        id: 9,
        name: "Bangladesh Railway",
        nameEnglish: "Bangladesh Railway",
        number: "163",
        category: "Travel",
        icon: "fas fa-train",
        img: "./assets/Bangladesh-Railway.png" 
    }
];

// State variables
let heartCount = 0;
let coinCount = 100;
let copyCount = 0;
let callHistory = [];

// DOM Elements
const cardContainer = document.getElementById('card-container');
const historyList = document.getElementById('history-list');
const clearHistoryBtn = document.getElementById('clear-history');
const heartCountElement = document.getElementById('heart-count');
const coinCountElement = document.getElementById('coin-count');
const copyCountElement = document.getElementById('copy-count');

// Initialize the page
function init() {
    renderCards();
    updateStats();
    clearHistoryBtn.addEventListener('click', clearHistory);
}

// Render emergency service cards
function renderCards() {
    cardContainer.innerHTML = '';

    emergencyServices.forEach(service => {
        const iconOrImage = service.img
            ? `<img src="${service.img}" alt="${service.name}" class=" w-20 h-10 bg-red-200 rounded-lg p-1 object-contain">`
            : `<i class="${service.icon}"></i>`; 
        const iconContainerClasses = service.img
            ? 'w-12 h-12 rounded-full flex items-center justify-center p-2'
            : `${service.iconColor} w-12 h-12 rounded-full flex items-center justify-center text-white`;

        const card = document.createElement('div');
        card.className = 'bg-white rounded-lg shadow-md overflow-hidden card-hover';
        card.innerHTML = `
            <div class="p-4 flex items-center border-b">
                <div class="${iconContainerClasses} mr-3">
                    ${iconOrImage}
                </div>
                <div class="flex-1">
                    <h3 class="font-bold">${service.name}</h3>
                    <p class="text-sm text-gray-500">${service.nameEnglish}</p>
                </div>
                <button class="heart-btn text-gray-300 hover:text-red-500 text-xl" data-id="${service.id}">
                    <i class="far fa-heart"></i>
                </button>
            </div>
            <div class="p-4">
                <div class="text-2xl font-bold text-black mb-2">${service.number}</div>
                <span class="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                    ${service.category}
                </span>
                <div class="flex space-x-2 mt-4">
                    <button class="btn-copy flex-1 py-2 px-4 bg-gray-100 text-gray-600 rounded-lg hover:bg-blue-100 flex items-center justify-center" data-number="${service.number}" data-name="${service.name}">
                        <i class="far fa-copy mr-2"></i> Copy
                    </button>
                    <button class="btn-call flex-1 py-2 px-4 bg-secondary text-white rounded-lg hover:bg-red-600 flex items-center justify-center" data-number="${service.number}" data-name="${service.name}">
                        <i class="fas fa-phone mr-2"></i> Call
                    </button>
                </div>
            </div>
        `;
        cardContainer.appendChild(card);
    });

    // Add event listeners to buttons
    document.querySelectorAll('.heart-btn').forEach(btn => {
        btn.addEventListener('click', handleHeartClick);
    });

    document.querySelectorAll('.btn-copy').forEach(btn => {
        btn.addEventListener('click', handleCopyClick);
    });

    document.querySelectorAll('.btn-call').forEach(btn => {
        btn.addEventListener('click', handleCallClick);
    });
}

// Update statistics in navbar
function updateStats() {
    heartCountElement.textContent = heartCount;
    coinCountElement.textContent = coinCount;
    copyCountElement.textContent = copyCount;
}

// Handle copy button click
function handleCopyClick(e) {
    const button = e.currentTarget;
    const number = button.getAttribute('data-number');
    const name = button.getAttribute('data-name');

    // Copy to clipboard
    copyToClipboard(number, name);
}

// Function to copy text to clipboard
function copyToClipboard(text, serviceName) {
    // Create a temporary textarea element
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'absolute';
    textarea.style.left = '-9999px';
    document.body.appendChild(textarea);

    // Select and copy the text
    textarea.select();

    try {
        const successful = document.execCommand('copy');
        if (successful) {
            alert('Number copied to clipboard!');
            copyCount++;
            updateStats();
        } else {
            alert('Failed to copy number');
        }
    } catch (err) {
        alert('Failed to copy number');
        console.error('Could not copy text: ', err);
    }
    
    // Clean up
    document.body.removeChild(textarea);
}

// Handle call button click
function handleCallClick(e) {
    const button = e.currentTarget;
    const number = button.getAttribute('data-number');
    const name = button.getAttribute('data-name');

    // Check if user has enough coins
    if (coinCount < 20) {
        alert('Not enough coins to make a call. Minimum 20 coins required.', 'error');
        return;
    }

    // Deduct coins
    coinCount -= 20;
    updateStats();

    // Show alert
    alert(`Calling ${name} at ${number}....`);

    // Add to call history with exact time
    addToHistory(name, number);
}