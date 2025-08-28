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