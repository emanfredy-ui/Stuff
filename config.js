// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    // Example: "Jade", "Sarah", "Mike"
    valentineName: "Aly",

    // The title that appears in the browser tab
    // You can use emojis! 💝 💖 💗 💓 💞 💕
    pageTitle: "Quieres ser mi San Valentin? 💐🪻",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💓'],  // Heart emojis
        Flowers: ['🧸', '🐻','💐']                       // Flower emojis
    },

    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {
            text: "Tu me quieres?",                                    // First interaction
            yesBtn: "Si",                                             // Text for "Yes" button
            noBtn: "No",                                               // Text for "No" button
            secretAnswer: "No te quiero, Te Amo! ❤️"           // Secret hover message
        },
        second: {
            text: "Cuanto me amas?",                          // For the love meter
            startText: "Eah rayos asi!",                                   // Text before the percentage
            nextBtn: "Proxima pregunta ❤️"                                         // Text for the next button
        },
        third: {
            text: "Queires pasar San Valentin conmigo? 💐💐💐", // The big question!
            yesBtn: "Si!",                                             // Text for "Yes" button
            noBtn: "No"                                                 // Text for "No" button
        }
    },

    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "Eah rayos, Asi?? 🥰🚀💝",  // Shows when they go past 5000%
        high: "Cuantooooo! 🚀💝",              // Shows when they go past 1000%
        normal: "Cool! 🥰"                           // Shows when they go past 100%
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "De verdad, soy afortunado! 🎉🎉🎉🎉🎉🎉",
        message: "Te Amo!",
        emojis: "💕💕💕💕💕"  // These will bounce around
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
      backgroundStart: "#e5d4ff",      // Soft pastel purple
backgroundEnd: "#e5d4ff",        // Same tone for a clean, even background
  buttonBackground: "#d16ba5",     // Lavender-pink button
        buttonHover: "#e7a1c4",          // Lighter pink-purple hover
        textColor: "#c06c84"             // Soft plum text for contrast
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "15s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "50px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.5s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.5         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://res.cloudinary.com/drj9lyjof/video/upload/v1770345651/Hadestown_Original_Broadway_Cast_2019_-_Wait_for_Me_Reprise__SkySound_mp3cut.net_cvhwq2.mp3", // Music streaming URL
        startText: "🎵 Play",        // Button text to start music
        stopText: "🔇 Stop",         // Button text to stop music
        volume: 0.5                        // Volume level (0.0 to 1.0)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 
