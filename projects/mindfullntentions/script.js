/**
 * Application Data Store
 * Contains all static data for poses, videos, and books
 */
const AppData = {
    // Poses Data
    poses: [
        {
            id: 1,
            name: "Step Aerobics",
            category: "type",
            type: "Cardio",
            description: "A classic aerobic exercise using an elevated platform to enhance cardiovascular fitness and build lower body strength.",
            benefits: ["Improves heart health", "Burns calories efficiently", "Strengthens lower body", "Enhances coordination"],
            dos: ["Warm up before starting", "Maintain proper posture", "Stay hydrated", "Use appropriate step height"],
            donts: ["Don't lock your knees", "Avoid overexertion", "Don't skip cool down", "Avoid if you have knee issues"],
            conditions: ["Weight management", "Heart health", "Diabetes prevention"],
            difficulty: "Intermediate",
            duration: "30-45 min",
            color: "emerald"
        },
        {
            id: 2,
            name: "High-Intensity Interval Training",
            category: "type",
            type: "HIIT",
            description: "Alternating bursts of intense activity with fixed periods of less-intense activity or rest for maximum results.",
            benefits: ["Maximum calorie burn", "Improves metabolism", "Builds endurance", "Time-efficient workout"],
            dos: ["Start gradually", "Focus on form", "Allow recovery days", "Track your heart rate"],
            donts: ["Don't overtrain", "Avoid on empty stomach", "Don't ignore pain", "Skip if injured"],
            conditions: ["Obesity", "Metabolic syndrome", "Stress relief"],
            difficulty: "Advanced",
            duration: "20-30 min",
            color: "rose"
        },
        {
            id: 3,
            name: "Dance Aerobics",
            category: "type",
            type: "Dance",
            description: "Fun, rhythmic movements set to music that improve fitness while enjoying the joy of dance.",
            benefits: ["Full body workout", "Improves mood", "Enhances flexibility", "Social activity"],
            dos: ["Wear comfortable shoes", "Move at your pace", "Stay consistent", "Have fun with it"],
            donts: ["Don't compare yourself", "Avoid stiff movements", "Don't forget to breathe", "Avoid dehydration"],
            conditions: ["Depression", "Anxiety", "Social isolation"],
            difficulty: "Beginner",
            duration: "45-60 min",
            color: "purple"
        },
        {
            id: 4,
            name: "Water Aerobics",
            category: "type",
            type: "Aquatic",
            description: "Low-impact exercise performed in shallow water, ideal for all fitness levels and ages.",
            benefits: ["Joint-friendly exercise", "Full body resistance", "Improves flexibility", "Cool refreshing workout"],
            dos: ["Use pool noodles", "Stay in chest-deep water", "Wear water shoes", "Apply sunscreen outdoors"],
            donts: ["Don't exercise alone", "Avoid cold water", "Don't push too hard", "Skip with open wounds"],
            conditions: ["Arthritis", "Joint pain", "Pregnancy", "Rehabilitation"],
            difficulty: "Beginner",
            duration: "45-60 min",
            color: "blue"
        },
        {
            id: 5,
            name: "Core Strengthening",
            category: "anatomy",
            type: "Core",
            description: "Targeted exercises focusing on abdominal and back muscles for improved stability and posture.",
            benefits: ["Better posture", "Reduced back pain", "Improved balance", "Enhanced athletic performance"],
            dos: ["Engage core properly", "Breathe steadily", "Progress gradually", "Include variety"],
            donts: ["Don't strain neck", "Avoid holding breath", "Don't rush reps", "Skip if having back pain"],
            conditions: ["Lower back pain", "Poor posture", "Core weakness"],
            difficulty: "Intermediate",
            duration: "20-30 min",
            color: "amber"
        },
        {
            id: 6,
            name: "Stress Relief Routine",
            category: "benefit",
            type: "Relaxation",
            description: "Gentle aerobic movements combined with breathing techniques to reduce stress and anxiety.",
            benefits: ["Lowers cortisol", "Calms nervous system", "Improves sleep quality", "Mental clarity"],
            dos: ["Practice regularly", "Create calm environment", "Focus on breathing", "Be patient with yourself"],
            donts: ["Don't rush through it", "Avoid distractions", "Don't expect instant results", "Skip stimulants before"],
            conditions: ["Chronic stress", "Anxiety disorders", "Insomnia", "Burnout"],
            difficulty: "Beginner",
            duration: "15-20 min",
            color: "teal"
        }
    ],

    // Videos Data
    videos: [
        {
            id: 1,
            title: "Beginner's Complete Aerobics Guide",
            description: "A comprehensive introduction to aerobic exercises designed specifically for beginners.",
            duration: "45:00",
            category: "Aerobics",
            color: "emerald"
        },
        {
            id: 2,
            title: "Morning Meditation Routine",
            description: "Start your day with this calming and energizing 20-minute meditation session.",
            duration: "20:00",
            category: "Meditation",
            color: "purple"
        },
        {
            id: 3,
            title: "HIIT Workout for Fat Burning",
            description: "High-intensity interval training designed for maximum calorie burn and results.",
            duration: "30:00",
            category: "HIIT",
            color: "rose"
        },
        {
            id: 4,
            title: "Stress Relief Breathing Techniques",
            description: "Learn powerful breathing exercises to manage stress and anxiety effectively.",
            duration: "15:00",
            category: "Meditation",
            color: "indigo"
        },
        {
            id: 5,
            title: "Low-Impact Cardio for Seniors",
            description: "Gentle cardiovascular exercises suitable for older adults and beginners.",
            duration: "35:00",
            category: "Aerobics",
            color: "amber"
        },
        {
            id: 6,
            title: "Deep Relaxation Yoga Flow",
            description: "A calming yoga session to unwind and relax your body and mind completely.",
            duration: "40:00",
            category: "Yoga",
            color: "teal"
        }
    ],

    // Books Data
    books: [
        {
            id: 1,
            title: "The Mindful Way",
            author: "Dr. Sarah Chen",
            description: "A practical guide to integrating mindfulness into daily life for better health and happiness.",
            category: "Meditation",
            color: "purple"
        },
        {
            id: 2,
            title: "Aerobics Revolution",
            author: "Michael Torres",
            description: "The complete guide to modern aerobic exercise with routines for all fitness levels.",
            category: "Aerobics",
            color: "emerald"
        },
        {
            id: 3,
            title: "Breath of Life",
            author: "Emma Williams",
            description: "Discover the transformative power of conscious breathing for physical and mental wellness.",
            category: "Wellness",
            color: "teal"
        },
        {
            id: 4,
            title: "Mind-Body Connection",
            author: "Dr. James Park",
            description: "Scientific exploration of how mental health affects physical well-being and vice versa.",
            category: "Science",
            color: "amber"
        }
    ]
};

/**
 * Application Configuration
 */
const AppConfig = {
    animationDuration: 300,
    scrollOffset: 80,
    observerThreshold: 0.1,
    observerRootMargin: '0px 0px -50px 0px'
};

/**
 * Utility Functions
 * Helper functions used throughout the application
 */
const Utils = {
    /**
     * Debounce function to limit function calls
     */
    debounce: function(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    /**
     * Throttle function to limit function calls
     */
    throttle: function(func, limit) {
        let inThrottle;
        return function(...args) {
            if (!inThrottle) {
                func.apply(this, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    },

    /**
     * Smooth scroll to element
     */
    scrollToElement: function(selector, offset = AppConfig.scrollOffset) {
        const target = $(selector);
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - offset
            }, 800, 'swing');
        }
    },

    /**
     * Generate stagger class based on index
     */
    getStaggerClass: function(index, max = 6) {
        return `stagger-${(index % max) + 1}`;
    },

    /**
     * Validate email format
     */
    isValidEmail: function(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    },

    /**
     * Validate name - only alphabets and spaces allowed
     * Maximum 15 characters
     */
    isValidName: function(name) {
        // Only alphabets (a-z, A-Z) and spaces allowed
        const regex = /^[a-zA-Z\s]+$/;
        if (!regex.test(name) || name.trim().length === 0) {
            return false;
        }
        
        // Maximum 15 characters allowed
        return name.trim().length <= 15;
    },

    /**
     * Validate phone - exactly 11 numbers
     */
    isValidPhone: function(phone) {
        // Only numbers (0-9) allowed, exactly 11 digits
        const regex = /^[0-9]{11}$/;
        return regex.test(phone);
    },

    /**
     * Validate message - minimum 10 words, maximum 200 words
     */
    isValidMessage: function(message) {
        if (!message || message.trim().length === 0) {
            return false;
        }
        
        // Count words (split by spaces and filter empty strings)
        const words = message.trim().split(/\s+/).filter(word => word.length > 0);
        return words.length >= 10 && words.length <= 200;
    },

    /**
     * Show toast notification
     */
    showToast: function(message, type = 'success') {
        // Remove existing toasts
        $('.toast-notification').remove();
        
        // Create toast element
        const toast = $(`
            <div class="toast-notification fixed top-4 right-4 z-[9999] px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 animate-slide-in max-w-md">
                <div class="toast-icon flex-shrink-0">
                    ${type === 'success' ? 
                        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-green-400"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>' :
                        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-red-400"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>'
                    }
                </div>
                <p class="toast-message text-sm font-medium flex-1"></p>
                <button class="toast-close text-gray-400 hover:text-gray-600 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
            </div>
        `);
        
        // Set message
        toast.find('.toast-message').text(message);
        
        // Set background color based on type
        if (type === 'success') {
            toast.addClass('bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-800 dark:text-green-200');
        } else {
            toast.addClass('bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-800 dark:text-red-200');
        }
        
        // Add to body
        $('body').append(toast);
        
        // Close button handler
        toast.find('.toast-close').on('click', function() {
            toast.addClass('animate-slide-out');
            setTimeout(() => toast.remove(), 300);
        });
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            if (toast.length) {
                toast.addClass('animate-slide-out');
                setTimeout(() => toast.remove(), 300);
            }
        }, 5000);
        
        // Trigger animation
        setTimeout(() => toast.addClass('animate-slide-in'), 10);
    },

    /**
     * Download PDF file
     */
    downloadPdf: function(pdfUrl, filename) {
        // Show loading state (optional visual feedback)
        console.log('Starting download:', filename);
        
        // Method 1: Try to fetch as blob (works if CORS is enabled)
        fetch(pdfUrl, {
            method: 'GET',
            mode: 'cors',
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.blob();
        })
        .then(blob => {
            // Create blob URL and download
            console.log('Download successful via fetch');
            const blobUrl = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = blobUrl;
            link.download = filename + '.pdf';
            link.style.display = 'none';
            
            document.body.appendChild(link);
            link.click();
            
            setTimeout(() => {
                document.body.removeChild(link);
                window.URL.revokeObjectURL(blobUrl);
            }, 100);
        })
        .catch(error => {
            console.log('Fetch failed, trying XMLHttpRequest:', error);
            
            // Method 2: Use XMLHttpRequest
            const xhr = new XMLHttpRequest();
            xhr.open('GET', pdfUrl, true);
            xhr.responseType = 'blob';
            
            xhr.onload = function() {
                if (xhr.status === 200) {
                    console.log('Download successful via XMLHttpRequest');
                    const blob = xhr.response;
                    const blobUrl = window.URL.createObjectURL(blob);
                    
                    const link = document.createElement('a');
                    link.href = blobUrl;
                    link.download = filename + '.pdf';
                    link.style.display = 'none';
                    
                    document.body.appendChild(link);
                    link.click();
                    
                    setTimeout(() => {
                        document.body.removeChild(link);
                        window.URL.revokeObjectURL(blobUrl);
                    }, 100);
                } else {
                    console.log('XMLHttpRequest failed, trying iframe method');
                    Utils.forceDownloadWithIframe(pdfUrl, filename);
                }
            };
            
            xhr.onerror = function() {
                Utils.forceDownloadWithIframe(pdfUrl, filename);
            };
            
            try {
                xhr.send();
            } catch (xhrError) {
                console.log('XMLHttpRequest failed, using iframe method:', xhrError);
                Utils.forceDownloadWithIframe(pdfUrl, filename);
            }
        });
    },

    /**
     * Force download using iframe method (for cross-origin files)
     */
    forceDownloadWithIframe: function(pdfUrl, filename) {
        // Try multiple methods to force download
        console.log('Using iframe/download attribute method');
        
        // Method 1: Direct link with download attribute
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = filename + '.pdf';
        link.style.display = 'none';
        link.setAttribute('download', filename + '.pdf');
        link.setAttribute('target', '_self'); // Try to keep in same window
        
        document.body.appendChild(link);
        
        // Trigger click
        const clickEvent = new MouseEvent('click', {
            view: window,
            bubbles: true,
            cancelable: true
        });
        link.dispatchEvent(clickEvent);
        
        // Method 2: Also try with iframe as backup
        setTimeout(() => {
            const iframe = document.createElement('iframe');
            iframe.style.display = 'none';
            iframe.style.width = '0';
            iframe.style.height = '0';
            iframe.src = pdfUrl;
            document.body.appendChild(iframe);
            
            // Clean up iframe after a delay
            setTimeout(() => {
                if (iframe.parentNode) {
                    document.body.removeChild(iframe);
                }
            }, 3000);
        }, 100);
        
        // Clean up link
        setTimeout(() => {
            if (link.parentNode) {
                document.body.removeChild(link);
            }
        }, 1000);
        
        // Note: For cross-origin URLs, browsers may still open PDF instead of downloading
        // if the server doesn't send Content-Disposition: attachment header.
        // This is a browser security limitation for cross-origin resources.
    }
};

/**
 * Template Generators
 * Functions that generate HTML templates for dynamic content
 */
const Templates = {
    /**
     * Generate pose card HTML
     */
            poseCard: function(pose, index) {
                let mediaContent = '';
                // Check for image first
                if (pose.imageUrl && pose.imageUrl !== null && pose.imageUrl !== 'null') {
                    mediaContent = `<img src="${pose.imageUrl}" alt="${pose.name}" class="w-full h-full object-cover" onerror="this.parentElement.innerHTML='<div class=\\'pose-icon w-20 h-20 bg-white/50 backdrop-blur-sm rounded-full flex items-center justify-center\\'><svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'40\\' height=\\'40\\' viewBox=\\'0 0 24 24\\' fill=\\'none\\' stroke=\\'currentColor\\' stroke-width=\\'2\\' stroke-linecap=\\'round\\' stroke-linejoin=\\'round\\' class=\\'text-${pose.color}-600\\'><path d=\\'M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2\\'></path></svg></div>'">`;
                } 
                // Check for video second
                else if (pose.videoUrl && pose.videoUrl !== null && pose.videoUrl !== 'null') {
                    // Show video thumbnail with play button
                    mediaContent = `<div class="w-full h-full bg-gradient-to-br from-${pose.color}-100 to-${pose.color}-200 flex items-center justify-center relative">
                        <div class="absolute inset-0 bg-black/20"></div>
                        <div class="relative z-10 w-20 h-20 bg-white/95 rounded-full flex items-center justify-center shadow-xl">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-${pose.color}-600 ml-1"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                        </div>
                        <div class="absolute bottom-2 left-2 px-2 py-1 bg-black/60 backdrop-blur-sm rounded text-xs text-white font-medium">Video</div>
                    </div>`;
                } 
                // Fallback to icon
                else {
                    mediaContent = `<div class="pose-icon w-20 h-20 bg-white/50 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-${pose.color}-600"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
                    </div>`;
                }
                
                return `
                    <div class="pose-card group relative bg-white rounded-2xl border border-slate-100 overflow-hidden cursor-pointer animate-on-scroll ${Utils.getStaggerClass(index)}" data-pose-id="${pose.id}" style="cursor: pointer;" role="button" tabindex="0" aria-label="View details for ${pose.name}">
                        <div class="pose-image relative h-48 bg-gradient-to-br from-${pose.color}-100 to-${pose.color}-200 flex items-center justify-center overflow-hidden">
                            ${mediaContent}
                            <div class="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-slate-700">${pose.difficulty}</div>
                        </div>
                        <div class="p-6 relative z-10">
                            <div class="flex items-center gap-2 mb-2">
                                <span class="px-2 py-1 bg-${pose.color}-50 text-${pose.color}-700 text-xs font-medium rounded-lg">${pose.type}</span>
                                <span class="text-xs text-slate-500">${pose.duration}</span>
                            </div>
                            <h3 class="text-lg font-semibold text-slate-900 mb-2 text-heading">${pose.name}</h3>
                            <p class="text-sm text-slate-600 text-body line-clamp-2 mb-3">${pose.description}</p>
                            <div class="mt-3 space-y-2">
                                <div class="flex items-start gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-emerald-500 mt-0.5 flex-shrink-0"><path d="M20 6L9 17l-5-5"></path></svg>
                                    <p class="text-xs text-gray-600"><span class="font-semibold text-gray-700">Do's:</span> ${pose.dos ? pose.dos.slice(0, 2).join(', ') : 'N/A'}</p>
                                </div>
                                <div class="flex items-start gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-rose-500 mt-0.5 flex-shrink-0"><path d="M18 6L6 18M6 6l12 12"></path></svg>
                                    <p class="text-xs text-gray-600"><span class="font-semibold text-gray-700">Don'ts:</span> ${pose.donts ? pose.donts.slice(0, 2).join(', ') : 'N/A'}</p>
                                </div>
                            </div>
                            <div class="mt-4 flex items-center text-sm text-${pose.color}-600 font-medium">
                                <span>View Details</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-1 transition-transform duration-300 group-hover:translate-x-2"><path d="M5 12h14m-7-7l7 7l-7 7"></path></svg>
                            </div>
                        </div>
                    </div>
                `;
            },

    /**
     * Generate video card HTML
     */
    videoCard: function(video, index) {
        return `
            <div class="video-card group bg-white rounded-2xl border border-slate-100 overflow-hidden cursor-pointer animate-on-scroll ${Utils.getStaggerClass(index)}" data-video-id="${video.id}" data-video-url="${video.videoUrl}" data-video-title="${video.title}">
                <div class="relative h-48 overflow-hidden">
                    <img src="${video.thumbnail}" alt="${video.title}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    <div class="absolute inset-0 flex items-center justify-center">
                        <div class="play-btn w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg group-hover:bg-white group-hover:scale-110 transition-all duration-300">
                            <span class="iconify w-8 h-8 text-${video.color}-600 ml-1" data-icon="lucide:play" data-width="32" data-height="32"></span>
                        </div>
                    </div>
                    <div class="absolute bottom-4 right-4 px-3 py-1 bg-slate-900/70 backdrop-blur-sm rounded-lg text-xs font-medium text-white">${video.duration}</div>
                </div>
                <div class="p-6">
                    <span class="px-2 py-1 bg-${video.color}-50 text-${video.color}-700 text-xs font-medium rounded-lg">${video.category}</span>
                    <h3 class="text-lg font-semibold text-slate-900 mt-3 mb-2 text-heading">${video.title}</h3>
                    <p class="text-sm text-slate-600 text-body">${video.description}</p>
                </div>
            </div>
        `;
    },

    /**
     * Generate book card HTML
     */
    bookCard: function(book, index) {
        // Only show Read PDF button (download button removed)
        const readButton = book.pdfUrl ? `
            <button data-book-id="${book.id}" class="book-read-btn w-full px-4 py-2.5 bg-${book.color}-600 text-white text-sm font-medium rounded-lg hover:bg-${book.color}-700 transition-colors duration-200 flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
                Read PDF
            </button>
        ` : '';
        
        const thumbnailContent = book.thumbnail ? `
            <img src="${book.thumbnail}" alt="${book.title}" class="w-full h-full object-cover" onerror="this.onerror=null; this.parentElement.innerHTML='<div class=\\'book-icon w-16 h-20 bg-white rounded-lg shadow-lg flex items-center justify-center\\'><span class=\\'iconify w-8 h-8 text-${book.color}-600\\' data-icon=\\'lucide:book-open\\' data-width=\\'32\\' data-height=\\'32\\'></span></div>'">
        ` : `
            <div class="book-icon w-16 h-20 bg-white rounded-lg shadow-lg flex items-center justify-center">
                <span class="iconify w-8 h-8 text-${book.color}-600" data-icon="lucide:book-open" data-width="32" data-height="32"></span>
            </div>
        `;
        
        return `
            <div class="book-card group bg-white rounded-2xl border border-slate-100 overflow-hidden p-6 animate-on-scroll ${Utils.getStaggerClass(index, 4)}">
                <div class="relative h-40 bg-gradient-to-br from-${book.color}-100 to-${book.color}-200 rounded-xl flex items-center justify-center mb-4 overflow-hidden">
                    ${thumbnailContent}
                </div>
                <span class="px-2 py-1 bg-${book.color}-50 text-${book.color}-700 text-xs font-medium rounded-lg">${book.category}</span>
                <h3 class="text-lg font-semibold text-slate-900 mt-3 mb-1 text-heading">${book.title}</h3>
                <p class="text-sm text-slate-500 mb-2">by ${book.author}</p>
                <p class="text-sm text-slate-600 text-body line-clamp-2 mb-4">${book.description}</p>
                ${readButton ? `
                <div class="mt-4">
                    ${readButton}
                </div>
                ` : ''}
                <div class="mt-3 flex items-center text-xs">
                    <div class="flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-yellow-400"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                        <span class="text-gray-600">${book.rating}</span>
                    </div>
                </div>
            </div>
        `;
    },

    /**
     * Generate FAQ item HTML
     */
    faqItem: function(faq, index) {
        const categoryColor = faq.category === 'General' ? 'purple' : faq.category === 'Aerobics' ? 'emerald' : 'indigo';
        return `
            <div class="bg-white rounded-2xl border border-gray-100 overflow-hidden animate-on-scroll ${Utils.getStaggerClass(index, 6)}">
                <button class="faq-question w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors">
                    <div class="flex items-center gap-3">
                        <span class="px-2 py-1 bg-${categoryColor}-50 text-${categoryColor}-700 text-xs font-medium rounded-lg">${faq.category}</span>
                        <h3 class="text-lg font-semibold text-gray-900 text-heading">${faq.question}</h3>
                    </div>
                    <span class="iconify w-5 h-5 text-gray-400 faq-icon transition-transform" data-icon="lucide:chevron-down" data-width="20" data-height="20"></span>
                </button>
                <div class="faq-answer hidden px-6 pb-4">
                    <p class="text-gray-600 text-body">${faq.answer}</p>
                </div>
            </div>
        `;
    },

    /**
     * Generate pose modal content HTML
     */
            poseModalContent: function(pose) {
                let mediaHtml = '';
                if (pose.imageUrl && pose.imageUrl !== null && pose.imageUrl !== 'null') {
                    mediaHtml = `<img src="${pose.imageUrl}" alt="${pose.name}" class="w-full h-64 object-cover rounded-xl mb-4" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">`;
                } else if (pose.videoUrl && pose.videoUrl !== null && pose.videoUrl !== 'null') {
                    mediaHtml = `<div class="w-full h-64 rounded-xl overflow-hidden mb-4 bg-black"><iframe src="${pose.videoUrl}" class="w-full h-full" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`;
                } else {
                    mediaHtml = `<div class="h-64 bg-gradient-to-br from-${pose.color}-100 to-${pose.color}-100 rounded-2xl flex items-center justify-center mb-4">
                        <div class="w-24 h-24 bg-white/50 backdrop-blur-sm rounded-full flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-${pose.color}-600"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
                        </div>
                    </div>`;
                }
                
                return `
                    <div class="space-y-6">
                        ${mediaHtml}
                        <div class="flex flex-wrap gap-2">
                            <span class="px-3 py-1.5 bg-${pose.color}-50 text-${pose.color}-700 text-sm font-medium rounded-lg">${pose.type}</span>
                            <span class="px-3 py-1.5 bg-slate-100 text-slate-700 text-sm font-medium rounded-lg">${pose.difficulty}</span>
                            <span class="px-3 py-1.5 bg-slate-100 text-slate-700 text-sm font-medium rounded-lg">${pose.duration}</span>
                        </div>
                        <p class="text-slate-600 text-body">${pose.description}</p>
                    </div>
                    <div class="space-y-6">
                        <div>
                            <h4 class="text-lg font-semibold text-slate-900 mb-3 flex items-center gap-2 text-heading">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-emerald-500"><path d="M20 6L9 17l-5-5"></path></svg>
                                Health Benefits
                            </h4>
                            <ul class="space-y-2">
                                ${pose.benefits.map(b => `<li class="flex items-center gap-2 text-sm text-slate-600 text-body"><span class="w-1.5 h-1.5 bg-emerald-500 rounded-full flex-shrink-0"></span>${b}</li>`).join('')}
                            </ul>
                        </div>
                        <div class="bg-emerald-50 rounded-xl p-4 border border-emerald-100">
                            <h4 class="font-semibold mb-3 text-emerald-900 flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>
                                Do's
                            </h4>
                            <ul class="space-y-2">
                                ${pose.dos.map(d => `<li class="flex items-start gap-2 text-sm text-gray-700"><span class="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></span><span>${d}</span></li>`).join('')}
                            </ul>
                        </div>
                        <div class="bg-rose-50 rounded-xl p-4 border border-rose-100">
                            <h4 class="font-semibold mb-3 text-rose-900 flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6L6 18M6 6l12 12"></path></svg>
                                Don'ts
                            </h4>
                            <ul class="space-y-2">
                                ${pose.donts.map(d => `<li class="flex items-start gap-2 text-sm text-gray-700"><span class="w-1.5 h-1.5 bg-rose-500 rounded-full mt-2 flex-shrink-0"></span><span>${d}</span></li>`).join('')}
                            </ul>
                        </div>
                        <div>
                            <h4 class="text-lg font-semibold text-slate-900 mb-3 text-heading">
                                Suitable For
                            </h4>
                            <div class="flex flex-wrap gap-2">
                                ${pose.conditions.map(c => `<span class="px-3 py-1.5 bg-purple-50 text-purple-700 text-sm rounded-lg">${c}</span>`).join('')}
                            </div>
                        </div>
                    </div>
                `;
            }
};

/**
 * Render Controllers
 * Functions responsible for rendering content to the DOM
 */
const RenderController = {
    /**
     * Render featured poses (3 only for home page)
     */
    featuredPoses: function(poses) {
        const grid = $('#featuredPosesGrid');
        if (grid.length === 0) return; // Section doesn't exist on this page
        
        grid.empty();
        
        if (!poses || poses.length === 0) {
            grid.html('<p class="text-center text-gray-500 col-span-full py-12">No poses found.</p>');
            return;
        }
        
        poses.forEach((pose, index) => {
            grid.append(Templates.poseCard(pose, index));
        });

        // Attach handlers after a short delay to ensure DOM is ready
        setTimeout(() => {
            this.attachPoseClickHandlers();
        }, 100);
        AnimationController.initScrollObserver();
    },

    /**
     * Render poses to grid
     */
    poses: function(poses) {
        const grid = $('#posesGrid');
        if (grid.length === 0) return; // Section doesn't exist on this page
        
        grid.empty();
        
        if (!poses || poses.length === 0) {
            grid.html('<p class="text-center text-gray-500 col-span-full py-12">No poses found.</p>');
            return;
        }
        
        poses.forEach((pose, index) => {
            grid.append(Templates.poseCard(pose, index));
        });

        // Attach handlers after a short delay to ensure DOM is ready
        setTimeout(() => {
            this.attachPoseClickHandlers();
        }, 100);
        AnimationController.initScrollObserver();
    },

    /**
     * Attach click handlers for pose cards
     */
    attachPoseClickHandlers: function() {
        // Use direct click handlers on the cards themselves (more reliable)
        $('.pose-card[data-pose-id]').off('click').on('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            const poseId = parseInt($(this).data('pose-id'));
            console.log('Pose card clicked:', poseId);
            if (poseId && typeof ModalController !== 'undefined') {
                ModalController.openPose(poseId);
            } else {
                console.error('Invalid pose ID or ModalController not found');
            }
            return false;
        });
        
        // Also support keyboard (Enter key)
        $('.pose-card[data-pose-id]').off('keypress').on('keypress', function(e) {
            if (e.which === 13) { // Enter key
                e.preventDefault();
                const poseId = parseInt($(this).data('pose-id'));
                if (poseId && typeof ModalController !== 'undefined') {
                    ModalController.openPose(poseId);
                }
            }
        });
    },

    /**
     * Render featured videos (3 only for home page)
     */
    featuredVideos: function(videos) {
        const grid = $('#featuredVideosGrid');
        if (grid.length === 0) return; // Section doesn't exist on this page
        
        grid.empty();
        
        if (!videos || videos.length === 0) {
            grid.html('<p class="text-center text-gray-500 col-span-full py-12">No videos found.</p>');
            return;
        }
        
        videos.forEach((video, index) => {
            grid.append(Templates.videoCard(video, index));
        });

        AnimationController.initScrollObserver();
    },

    /**
     * Render videos to grid
     */
    videos: function(videos) {
        const grid = $('#videosGrid');
        if (grid.length === 0) return; // Section doesn't exist on this page
        
        grid.empty();
        
        if (!videos || videos.length === 0) {
            grid.html('<p class="text-center text-gray-500 col-span-full py-12">No videos found.</p>');
            return;
        }
        
        videos.forEach((video, index) => {
            grid.append(Templates.videoCard(video, index));
        });

        // Attach video click handlers
        setTimeout(() => {
            this.attachVideoClickHandlers();
        }, 100);

        AnimationController.initScrollObserver();
    },

    /**
     * Attach click handlers for video cards
     */
    attachVideoClickHandlers: function() {
        $('.video-card[data-video-url]').off('click').on('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            // Use attr() instead of data() to get the exact URL without jQuery processing
            const videoUrl = $(this).attr('data-video-url');
            const videoTitle = $(this).attr('data-video-title');
            
            console.log('Video clicked - URL:', videoUrl, 'Title:', videoTitle);
            
            if (videoUrl && videoUrl.trim() !== '' && typeof ModalController !== 'undefined') {
                ModalController.openVideo(videoUrl, videoTitle);
            } else {
                console.error('Video URL not found or ModalController not available', {
                    videoUrl: videoUrl,
                    hasModalController: typeof ModalController !== 'undefined'
                });
                Utils.showToast('Unable to load video. Please try again.', 'error');
            }
        });
    },

    /**
     * Render books to grid
     */
    books: function(books) {
        const grid = $('#booksGrid');
        if (grid.length === 0) return; // Section doesn't exist on this page
        
        grid.empty();
        
        if (!books || books.length === 0) {
            grid.html('<p class="text-center text-gray-500 col-span-full py-12">No books found.</p>');
            return;
        }
        
        // Store books data for button handlers
        this.currentBooks = books;
        
        books.forEach((book, index) => {
            grid.append(Templates.bookCard(book, index));
        });

        AnimationController.initScrollObserver();
    },

    /**
     * Render FAQs to container
     */
    faqs: function(faqs) {
        const container = $('#faqsContainer');
        if (container.length === 0) return; // Section doesn't exist on this page
        
        container.empty();
        
        if (!faqs || faqs.length === 0) {
            container.html('<p class="text-center text-gray-500 py-12">No FAQs found.</p>');
            return;
        }
        
        faqs.forEach((faq, index) => {
            container.append(Templates.faqItem(faq, index));
        });

        // Attach click handlers for FAQ toggle
        $('.faq-question').off('click').on('click', function() {
            const faqItem = $(this).closest('.bg-white');
            const answer = faqItem.find('.faq-answer');
            const icon = faqItem.find('.faq-icon');
            
            answer.slideToggle();
            icon.toggleClass('rotate-180');
        });

        AnimationController.initScrollObserver();
    },

    /**
     * Render featured content (3 poses, 3 videos for home page)
     */
    featured: function() {
        // Load featured poses (first 3)
        $.getJSON('data/poses.json')
            .done(function(data) {
                const featuredPoses = data.poses.slice(0, 3);
                RenderController.featuredPoses(featuredPoses);
            })
            .fail(function() {
                const featuredPoses = AppData.poses.slice(0, 3);
                RenderController.featuredPoses(featuredPoses);
            });
        
        // Load featured videos (first 3)
        $.getJSON('data/videos.json')
            .done(function(data) {
                const featuredVideos = data.videos ? data.videos.slice(0, 3) : AppData.videos.slice(0, 3);
                RenderController.featuredVideos(featuredVideos);
            })
            .fail(function() {
                const featuredVideos = AppData.videos.slice(0, 3);
                RenderController.featuredVideos(featuredVideos);
            });
    },

    /**
     * Render all content (optimized loading with loading indicator)
     */
    all: function() {
        // Load poses from JSON (only if posesGrid exists and not already loaded)
        if ($('#posesGrid').length > 0) {
            // Show loading indicator
            $('#posesGrid').html('<div class="col-span-full text-center py-12"><div class="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div><p class="mt-4 text-gray-600">Loading poses...</p></div>');
            
            if (FilterController.allPoses.length === 0) {
                // Load from JSON
                $.getJSON('data/poses.json')
                    .done(function(data) {
                        FilterController.allPoses = data.poses;
                        RenderController.poses(data.poses);
                    })
                    .fail(function() {
                        // Fallback to AppData
                        FilterController.allPoses = AppData.poses;
                        RenderController.poses(AppData.poses);
                    });
            } else {
                // Use cached data (instant render)
                setTimeout(function() {
                    RenderController.poses(FilterController.allPoses);
                }, 100);
            }
        }
        
        // Load videos from JSON (only if videosGrid exists)
        if ($('#videosGrid').length > 0) {
            $.getJSON('data/videos.json')
                .done(function(data) {
                    const videos = data.videos || AppData.videos;
                    RenderController.videos(videos);
                })
                .fail(function() {
                    RenderController.videos(AppData.videos);
                });
        }
        
        // Load books from JSON
        if ($('#booksGrid').length > 0) {
            $.getJSON('data/books.json')
                .done(function(data) {
                    const books = data.books || AppData.books;
                    RenderController.books(books);
                })
                .fail(function() {
                    RenderController.books(AppData.books);
                });
        }
    }
};

/**
 * Modal Controller
 * Handles all modal-related functionality
 */
const ModalController = {
    /**
     * Open pose detail modal
     */
    openPose: function(id) {
        console.log('Opening pose modal for ID:', id);
        
        // Prevent body scroll without breaking scrollbar
        $('body').addClass('modal-open');
        
        // Try to load from JSON first, fallback to AppData
        $.getJSON('data/poses.json')
            .done(function(data) {
                const pose = data.poses.find(p => p.id === id);
                if (pose) {
                    $('#modalTitle').text(pose.name);
                    $('#modalContent').html(Templates.poseModalContent(pose));
                    $('#poseModal').removeClass('hidden');
                } else {
                    console.error('Pose not found with ID:', id);
                    $('body').removeClass('modal-open');
                }
            })
            .fail(function() {
                // Fallback to AppData if JSON fails
                const pose = AppData.poses.find(p => p.id === id);
                if (!pose) {
                    console.error('Pose not found in AppData with ID:', id);
                    $('body').removeClass('modal-open');
                    return;
                }
                
                $('#modalTitle').text(pose.name);
                $('#modalContent').html(Templates.poseModalContent(pose));
                $('#poseModal').removeClass('hidden');
            });
    },

    /**
     * Close modal
     */
    close: function() {
        console.log('Closing pose modal');
        $('#poseModal').addClass('hidden');
        
        // Restore body scroll
        $('body').removeClass('modal-open');
    },

    /**
     * Handle escape key
     */
    handleEscape: function(e) {
        if (e.key === 'Escape') {
            ModalController.close();
            ModalController.closePdf();
            ModalController.closeVideo();
        }
    },

    /**
     * Open PDF viewer modal
     */
    openPdf: function(pdfUrl, title) {
        console.log('Opening PDF viewer for:', title);
        
        // Prevent body scroll
        $('body').addClass('modal-open');
        
        // Set PDF URL and title
        $('#pdfModalTitle').text(title);
        $('#pdfViewer').attr('src', pdfUrl);
        $('#pdfModal').removeClass('hidden');
    },

    /**
     * Close PDF viewer modal
     */
    closePdf: function() {
        console.log('Closing PDF viewer');
        $('#pdfModal').addClass('hidden');
        $('#pdfViewer').attr('src', ''); // Clear the iframe source
        
        // Restore body scroll
        $('body').removeClass('modal-open');
    },

    /**
     * Open video player modal
     */
    openVideo: function(videoUrl, title) {
        console.log('Opening video modal for:', title, 'URL:', videoUrl);
        
        // Prevent body scroll
        $('body').addClass('modal-open');
        
        // Set video URL and title
        $('#videoModalTitle').text(title || 'Video Player');
        
        // Ensure video URL is properly formatted
        if (videoUrl && videoUrl.trim() !== '') {
            // Clean and format the URL
            let finalUrl = videoUrl.trim();
            
            // If it's a watch URL, convert to embed URL
            if (finalUrl.includes('youtube.com/watch?v=')) {
                const videoId = finalUrl.split('v=')[1].split('&')[0];
                finalUrl = `https://www.youtube.com/embed/${videoId}`;
            } else if (finalUrl.includes('youtu.be/')) {
                const videoId = finalUrl.split('youtu.be/')[1].split('?')[0];
                finalUrl = `https://www.youtube.com/embed/${videoId}`;
            }
            
            // Ensure it's an embed URL
            if (!finalUrl.includes('youtube.com/embed/')) {
                console.error('Invalid YouTube URL format:', finalUrl);
                Utils.showToast('Invalid video URL format. Please check the video link.', 'error');
                $('body').removeClass('modal-open');
                return;
            }
            
            // Add parameters if not present
            if (!finalUrl.includes('?')) {
                finalUrl += '?rel=0&modestbranding=1&autoplay=1';
            } else if (!finalUrl.includes('autoplay=')) {
                finalUrl += '&autoplay=1';
            }
            
            $('#videoPlayer').attr('src', finalUrl);
        } else {
            console.error('Video URL is empty or invalid');
            Utils.showToast('Video URL is missing. Please check the video configuration.', 'error');
            $('body').removeClass('modal-open');
            return;
        }
        
        $('#videoModal').removeClass('hidden');
    },

    /**
     * Close video player modal
     */
    closeVideo: function() {
        console.log('Closing video modal');
        $('#videoModal').addClass('hidden');
        $('#videoPlayer').attr('src', ''); // Clear the iframe source to stop playback
        
        // Restore body scroll
        $('body').removeClass('modal-open');
    }
};

/**
 * Navigation Controller
 * Handles navigation and menu functionality
 * Modern, mobile-first hamburger menu implementation
 */
const NavigationController = {
    /**
     * Initialize mobile menu
     * Sets up event listeners and ARIA attributes
     */
    init: function() {
        const toggleBtn = $('#mobileMenuBtn');
        const overlay = $('#mobileMenuOverlay');
        const menu = $('#mobileMenu');
        
        // Check if elements exist
        if (toggleBtn.length === 0 || overlay.length === 0 || menu.length === 0) {
            console.warn('Mobile menu elements not found');
            return;
        }
        
        // Remove existing handlers to prevent duplicates
        toggleBtn.off('click touchstart');
        overlay.off('click touchstart');
        menu.find('[data-close-menu]').off('click touchstart');
        
        // Set initial ARIA attributes
        toggleBtn.attr('aria-expanded', 'false');
        overlay.attr('aria-hidden', 'true');
        
        // Toggle button click handler - use both click and touchstart for better mobile support
        toggleBtn.on('click touchstart', function(e) {
            e.preventDefault();
            e.stopPropagation();
            NavigationController.toggleMenu();
        });
        
        // Overlay click handler (close menu when clicking backdrop)
        // Don't close if clicking inside the menu panel or dropdown
        overlay.on('click touchstart', function(e) {
            // Only close if clicking directly on overlay, not on menu panel or its children
            if ($(e.target).is(overlay) && !$(e.target).closest('.mobile-menu-panel').length) {
                e.preventDefault();
                NavigationController.closeMenu();
            }
        });
        
        // Close menu when clicking navigation links - use event delegation
        // Handle navigation links properly - don't prevent default for external links
        $(document).off('click touchstart', '[data-close-menu]').on('click touchstart', '[data-close-menu]', function(e) {
            const $link = $(this);
            const href = $link.attr('href');
            
            // Don't handle dropdown toggles here - they have their own handler
            if ($link.hasClass('mobile-menu-dropdown-toggle')) {
                return; // Let the dropdown handler take care of it
            }
            
            if (href && href !== '#' && !href.startsWith('#')) {
                // External link (e.g., meditation.html, videos.html) - allow navigation
                // Close menu first, then navigate
                NavigationController.closeMenu();
                // Don't prevent default - let browser navigate naturally
                // Small delay to allow menu to close smoothly
                setTimeout(function() {
                    window.location.href = href;
                }, 200);
                e.preventDefault(); // Prevent immediate navigation to allow menu close animation
            } else if (href && href.startsWith('#')) {
                // Anchor link - prevent default, scroll, then close menu
                e.preventDefault();
                const target = $(href);
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top - 80
                    }, 600);
                }
                NavigationController.closeMenu();
            } else {
                // No href or just # - just close menu
                e.preventDefault();
                NavigationController.closeMenu();
            }
        });
        
        // Keyboard navigation support
        $(document).off('keydown.mobileMenu').on('keydown.mobileMenu', function(e) {
            // Close menu on Escape key
            if (e.key === 'Escape' && toggleBtn.attr('aria-expanded') === 'true') {
                NavigationController.closeMenu();
            }
        });
        
        // Close menu on window resize (if resizing to desktop)
        $(window).off('resize.mobileMenu').on('resize.mobileMenu', function() {
            if ($(window).width() >= 1024 && toggleBtn.attr('aria-expanded') === 'true') {
                NavigationController.closeMenu();
            }
        });
        
        // Initialize dropdown toggles
        this.initDropdowns();
    },
    
    /**
     * Toggle mobile menu open/close
     * Handles smooth animations and ARIA updates
     */
    toggleMenu: function() {
        const toggleBtn = $('#mobileMenuBtn');
        const overlay = $('#mobileMenuOverlay');
        
        // Check if elements exist
        if (toggleBtn.length === 0) {
            console.error('Mobile menu button not found');
            return;
        }
        
        if (overlay.length === 0) {
            console.error('Mobile menu overlay not found');
            return;
        }
        
        const isExpanded = toggleBtn.attr('aria-expanded') === 'true';
        
        if (isExpanded) {
            this.closeMenu();
        } else {
            this.openMenu();
        }
    },
    
    /**
     * Open mobile menu
     * Animates menu slide-in and updates ARIA attributes
     */
    openMenu: function() {
        const toggleBtn = $('#mobileMenuBtn');
        const overlay = $('#mobileMenuOverlay');
        const menu = $('#mobileMenu');
        
        // Haptic feedback for mobile devices
        if (navigator.vibrate) {
            navigator.vibrate(10);
        }
        
        // Update ARIA attributes
        toggleBtn.attr('aria-expanded', 'true');
        overlay.attr('aria-hidden', 'false');
        
        // Add active class to overlay (triggers CSS animations)
        overlay.addClass('active');
        
        // Prevent body scroll
        $('body').addClass('menu-open');
        
        // Focus management for accessibility
        setTimeout(function() {
            const firstLink = menu.find('.mobile-menu-link').first();
            if (firstLink.length) {
                firstLink.focus();
            }
        }, 300);
    },
    
    /**
     * Close mobile menu
     * Animates menu slide-out and updates ARIA attributes
     */
    closeMenu: function() {
        const toggleBtn = $('#mobileMenuBtn');
        const overlay = $('#mobileMenuOverlay');
        
        // Update ARIA attributes
        toggleBtn.attr('aria-expanded', 'false');
        overlay.attr('aria-hidden', 'true');
        
        // Remove active class (triggers CSS animations)
        overlay.removeClass('active');
        
        // Restore body scroll
        $('body').removeClass('menu-open');
        
        // Close all dropdowns
        $('.mobile-menu-dropdown-toggle').attr('aria-expanded', 'false');
        $('.mobile-menu-submenu').attr('aria-hidden', 'true');
        
        // Return focus to hamburger button
        setTimeout(function() {
            toggleBtn.focus();
        }, 300);
    },
    
    /**
     * Initialize dropdown menus
     * Sets up click handlers for dropdown toggles
     */
    initDropdowns: function() {
        // Remove existing handlers
        $('.mobile-menu-dropdown-toggle').off('click touchstart');
        
        // Use event delegation for better reliability
        // IMPORTANT: Stop propagation to prevent menu from closing
        $(document).off('click touchstart', '.mobile-menu-dropdown-toggle').on('click touchstart', '.mobile-menu-dropdown-toggle', function(e) {
            e.preventDefault();
            e.stopPropagation(); // Prevent event from bubbling to overlay
            e.stopImmediatePropagation(); // Prevent other handlers from firing
            
            const toggle = $(this);
            const submenu = toggle.siblings('.mobile-menu-submenu');
            const isExpanded = toggle.attr('aria-expanded') === 'true';
            
            // Close all other dropdowns
            $('.mobile-menu-dropdown-toggle').not(toggle).attr('aria-expanded', 'false');
            $('.mobile-menu-submenu').not(submenu).attr('aria-hidden', 'true');
            
            // Toggle current dropdown
            if (isExpanded) {
                toggle.attr('aria-expanded', 'false');
                submenu.attr('aria-hidden', 'true');
            } else {
                toggle.attr('aria-expanded', 'true');
                submenu.attr('aria-hidden', 'false');
            }
            
            return false; // Additional prevention
        });
    },

    /**
     * Handle smooth scroll navigation
     */
    smoothScroll: function(e) {
        e.preventDefault();
        const target = $(this.getAttribute('href'));
        
        if (target.length) {
            Utils.scrollToElement(this.getAttribute('href'));
            // Close mobile menu when navigating
            NavigationController.closeMenu();
        }
    },
    
    /**
     * Close mobile menu
     */

            /**
             * Handle navbar shadow on scroll and ensure visibility
             */
            handleScroll: function() {
                const nav = $('#mainNav');
                if (nav.length === 0) return;
                
                if ($(window).scrollTop() > 50) {
                    nav.addClass('shadow-lg');
                } else {
                    nav.removeClass('shadow-lg');
                }
                
                // Force nav visibility
                nav.css({
                    'opacity': '1',
                    'visibility': 'visible',
                    'display': 'flex'
                });
            }
};

/**
 * Filter Controller
 * Handles filtering functionality for poses
 */
const FilterController = {
    currentCategory: 'all',
    allPoses: [],

    /**
     * Filter poses by category
     */
    filterPoses: function(category) {
        this.currentCategory = category;
        
        // Update active tab
        $('.pose-tab').removeClass('active');
        $(`.pose-tab[data-category="${category}"]`).addClass('active');
        
        // Filter and render poses
        const filteredPoses = category === 'all' 
            ? this.allPoses 
            : this.allPoses.filter(pose => pose.category === category);
        
        RenderController.poses(filteredPoses);
    },

    /**
     * Handle tab click
     */
    handleTabClick: function(element) {
        const category = $(element).data('category');
        this.filterPoses(category);
    }
};

/**
 * Form Controller
 * Handles form submissions and validations
 */
const FormController = {
    /**
     * Handle contact form submission
     */
    submitContact: function(e) {
        e.preventDefault();
        
        const form = $(e.target);
        const formData = {};
        
        // Collect all form fields dynamically
        form.find('input, textarea, select').each(function() {
            const $field = $(this);
            const name = $field.attr('name');
            const type = $field.attr('type');
            
            if (name) {
                if (type === 'checkbox') {
                    formData[name] = $field.is(':checked');
                } else {
                    formData[name] = $field.val();
                }
            }
        });
        
        const name = formData.name || form.find('input[name="name"]').val();
        const email = formData.email || form.find('input[name="email"]').val();
        const message = formData.message || form.find('textarea[name="message"]').val();
        const phone = formData.phone || form.find('input[name="phone"]').val();
        
        // Validate required fields
        if (!name || !email || !message) {
            Utils.showToast('Please fill in all required fields', 'error');
            return;
        }
        
        // Validate name - only alphabets allowed, maximum 15 characters
        if (!Utils.isValidName(name)) {
            if (name.trim().length > 15) {
                Utils.showToast('Name can contain maximum 15 characters', 'error');
            } else {
                Utils.showToast('Name can only contain alphabets (letters) and spaces. No numbers, special characters, or punctuation allowed.', 'error');
            }
            return;
        }
        
        if (!Utils.isValidEmail(email)) {
            Utils.showToast('Please enter a valid email address', 'error');
            return;
        }
        
        // Validate phone if present - exactly 11 digits
        if (phone) {
            if (!Utils.isValidPhone(phone)) {
                if (!/^[0-9]+$/.test(phone)) {
                    Utils.showToast('Phone can only contain numbers. No letters, spaces, or special characters allowed.', 'error');
                } else if (phone.length !== 11) {
                    Utils.showToast('Phone must be exactly 11 digits', 'error');
                } else {
                    Utils.showToast('Phone is not valid', 'error');
                }
                return;
            }
        }
        
        // Validate message - 10-200 words
        if (!Utils.isValidMessage(message)) {
            const words = message.trim().split(/\s+/).filter(word => word.length > 0);
            if (words.length < 10) {
                Utils.showToast('Message must contain at least 10 words', 'error');
            } else if (words.length > 200) {
                Utils.showToast('Message can contain maximum 200 words', 'error');
            } else {
                Utils.showToast('Message is required', 'error');
            }
            return;
        }
        
        // Store in localStorage
        try {
            const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
            const submission = {
                ...formData,
                timestamp: new Date().toISOString(),
                id: Date.now()
            };
            submissions.push(submission);
            localStorage.setItem('contactSubmissions', JSON.stringify(submissions));
        } catch (error) {
            console.error('Error saving to localStorage:', error);
        }
        
        // Show success notification
        Utils.showToast('Message sent successfully! We will get back to you soon.', 'success');
        
        // Reset form
        form[0].reset();
    },

    /**
     * Handle newsletter form submission
     */
    submitNewsletter: function(e) {
        e.preventDefault();
        
        const form = $(e.target);
        const email = form.find('input[name="email"]').val();
        
        if (!email || !Utils.isValidEmail(email)) {
            Utils.showToast('Please enter a valid email address', 'error');
            return;
        }
        
        // Store in localStorage
        try {
            const subscriptions = JSON.parse(localStorage.getItem('newsletterSubscriptions') || '[]');
            
            // Check if email already exists
            const exists = subscriptions.some(sub => sub.email === email);
            if (exists) {
                Utils.showToast('This email is already subscribed!', 'error');
                return;
            }
            
            const subscription = {
                email: email,
                timestamp: new Date().toISOString(),
                id: Date.now()
            };
            subscriptions.push(subscription);
            localStorage.setItem('newsletterSubscriptions', JSON.stringify(subscriptions));
        } catch (error) {
            console.error('Error saving to localStorage:', error);
        }
        
        // Show success notification
        Utils.showToast('Subscribed successfully! Thank you for joining our newsletter.', 'success');
        
        // Reset form
        form[0].reset();
    }
};

/**
 * Animation Controller
 * Handles scroll animations and transitions
 */
const AnimationController = {
    observer: null,

    /**
     * Initialize scroll observer
     */
    initScrollObserver: function() {
        // Disconnect existing observer if any
        if (this.observer) {
            this.observer.disconnect();
        }

        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                }
            });
        }, {
            threshold: AppConfig.observerThreshold,
            rootMargin: AppConfig.observerRootMargin
        });

        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            this.observer.observe(el);
        });
    }
};

/**
 * Main Application Controller
 * Initializes and coordinates all other controllers
 */
const App = {
    /**
     * Initialize the application
     */
    init: function() {
        // Smooth page load - fade in
        $('body').addClass('page-loaded');
        
        // Smooth scroll to top on page load
        $('html, body').animate({ scrollTop: 0 }, 0);
        
        this.renderContent();
        this.bindEvents();
        this.initDarkMode();
        this.initScrollToTop();
        AnimationController.initScrollObserver();
        
        console.log('Healthy Mind App Initialized');
    },

    /**
     * Render all dynamic content
     */
    renderContent: function() {
        // Preload poses data if we're on poses page or home page
        if ($('#posesGrid').length > 0 || $('#featuredPosesGrid').length > 0) {
            // Preload poses data in background
            if (FilterController.allPoses.length === 0) {
                $.getJSON('data/poses.json')
                    .done(function(data) {
                        FilterController.allPoses = data.poses;
                        console.log('Poses preloaded:', data.poses.length);
                    })
                    .fail(function() {
                        FilterController.allPoses = AppData.poses;
                    });
            }
        }
        
        // Check if we're on home page (has featured sections)
        if ($('#featuredPosesGrid').length > 0) {
            RenderController.featured();
        }
        
        // Render full content for poses section
        if ($('#posesGrid').length > 0) {
            RenderController.all();
        }
        
        // Load videos from JSON (for full videos section - always load if videosGrid exists)
        if ($('#videosGrid').length > 0) {
            $.getJSON('data/videos.json')
                .done(function(data) {
                    const videos = data.videos || AppData.videos;
                    RenderController.videos(videos);
                })
                .fail(function() {
                    RenderController.videos(AppData.videos);
                });
        }
        
        // Load books from JSON (for books section - always load if booksGrid exists)
        if ($('#booksGrid').length > 0) {
            $.getJSON('data/books.json')
                .done(function(data) {
                    const books = data.books || AppData.books;
                    RenderController.books(books);
                })
                .fail(function() {
                    RenderController.books(AppData.books);
                });
        }
        
        // Load FAQs from JSON (for FAQs section - always load if faqsContainer exists)
        if ($('#faqsContainer').length > 0) {
            $.getJSON('data/faqs.json')
                .done(function(data) {
                    const faqs = data.faqs || [];
                    RenderController.faqs(faqs);
                })
                .fail(function() {
                    RenderController.faqs([]);
                });
        }
    },

    /**
     * Initialize dark mode
     */
    initDarkMode: function() {
        // Check for saved theme preference or default to light mode
        const savedTheme = localStorage.getItem('theme') || 'light';
        if (savedTheme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        
        // Define icon SVGs
        const moonIcon = '<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>';
        const sunIcon = '<circle cx="12" cy="12" r="4"></circle><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"></path>';
        
        // Toggle dark mode function
        const toggleDarkMode = function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            document.documentElement.classList.toggle('dark');
            const isDark = document.documentElement.classList.contains('dark');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
            
            // Update icons
            const icon = $('#darkModeIcon');
            const iconMobile = $('#darkModeIconMobile');
            
            if (isDark) {
                if (icon.length) icon.html(moonIcon);
                if (iconMobile.length) iconMobile.html(moonIcon);
            } else {
                if (icon.length) icon.html(sunIcon);
                if (iconMobile.length) iconMobile.html(sunIcon);
            }
        };
        
        // Remove existing handlers to prevent duplicates
        $('#darkModeToggle, #darkModeToggleMobile').off('click');
        
        // Attach event handlers
        $('#darkModeToggle').on('click', toggleDarkMode);
        $('#darkModeToggleMobile').on('click', toggleDarkMode);
        
        // Set initial icon state
        const isDark = document.documentElement.classList.contains('dark');
        if (isDark) {
            $('#darkModeIcon, #darkModeIconMobile').html(moonIcon);
        } else {
            $('#darkModeIcon, #darkModeIconMobile').html(sunIcon);
        }
    },

    /**
     * Initialize scroll to top button
     */
    initScrollToTop: function() {
        const btn = $('#scrollToTop');
        
        if (btn.length === 0) {
            return; // Button doesn't exist on this page
        }
        
        // Show/hide button based on scroll position
        $(window).on('scroll', Utils.throttle(function() {
            if ($(window).scrollTop() > 300) {
                btn.css({
                    'opacity': '1',
                    'pointer-events': 'auto',
                    'transform': 'translateY(0)'
                });
            } else {
                btn.css({
                    'opacity': '0',
                    'pointer-events': 'none',
                    'transform': 'translateY(20px)'
                });
            }
        }, 100));
        
        // Scroll to top on click/tap
        btn.off('click touchstart').on('click touchstart', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            // Smooth scroll to top
            $('html, body').animate({
                scrollTop: 0
            }, 600, 'swing');
            
            // Add haptic feedback on mobile if available
            if (navigator.vibrate) {
                navigator.vibrate(10);
            }
        });
    },

    /**
     * Bind all event listeners
     */
    bindEvents: function() {
        // Initialize mobile menu (handles all event binding)
        // Use setTimeout to ensure DOM is fully ready
        setTimeout(function() {
            if (typeof NavigationController !== 'undefined') {
                NavigationController.init();
            }
        }, 100);
        
        // Also use event delegation as a fallback for the hamburger button
        // This ensures the menu works even if init() fails
        $(document).off('click touchstart', '#mobileMenuBtn').on('click touchstart', '#mobileMenuBtn', function(e) {
            e.preventDefault();
            e.stopPropagation();
            if (typeof NavigationController !== 'undefined' && typeof NavigationController.toggleMenu === 'function') {
                NavigationController.toggleMenu();
            } else {
                console.error('NavigationController.toggleMenu is not available');
            }
        });
        
        // Pose Category Tabs
        $('.pose-tab').on('click', function() {
            FilterController.handleTabClick(this);
        });
        
        // Smooth Scroll Navigation
        $('a[href^="#"]').on('click', NavigationController.smoothScroll);
        
        // Navbar Shadow on Scroll
        $(window).on('scroll', Utils.throttle(NavigationController.handleScroll, 100));
        
        // Modal Escape Key
        $(document).on('keydown', ModalController.handleEscape);
        
        // Book Read PDF Button (event delegation)
        $(document).off('click', '.book-read-btn').on('click', '.book-read-btn', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            // Get book ID from button
            const bookId = parseInt($(this).data('book-id')) || parseInt(this.getAttribute('data-book-id'));
            
            if (!bookId) {
                console.error('Book ID not found on read button');
                return;
            }
            
            // Find the book in currentBooks array
            const book = RenderController.currentBooks.find(b => b.id === bookId);
            
            if (!book) {
                console.error('Book not found with ID:', bookId);
                return;
            }
            
            if (!book.pdfUrl) {
                console.error('PDF URL not available for book:', book.title);
                return;
            }
            
            if (typeof ModalController !== 'undefined') {
                ModalController.openPdf(book.pdfUrl, book.title);
            } else {
                console.error('ModalController not found');
            }
        });
        
        // Dark Mode Toggle (event delegation as backup)
        $(document).off('click', '#darkModeToggle, #darkModeToggleMobile').on('click', '#darkModeToggle, #darkModeToggleMobile', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            document.documentElement.classList.toggle('dark');
            const isDark = document.documentElement.classList.contains('dark');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
            
            // Update icons
            const moonIcon = '<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>';
            const sunIcon = '<circle cx="12" cy="12" r="4"></circle><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"></path>';
            
            if (isDark) {
                $('#darkModeIcon, #darkModeIconMobile').html(moonIcon);
            } else {
                $('#darkModeIcon, #darkModeIconMobile').html(sunIcon);
            }
        });
        
        // Contact Form
        $('#contactForm').on('submit', FormController.submitContact);
        
        // Newsletter Form
        $('#newsletterForm').on('submit', FormController.submitNewsletter);
    }
};

/**
 * Document Ready - Start Application
 */
$(document).ready(function() {
    // Ensure navigation is always visible
    const nav = $('#mainNav');
    if (nav.length > 0) {
        nav.css({
            'opacity': '1',
            'visibility': 'visible',
            'display': 'flex'
        });
        
        // Force visibility on scroll
        $(window).on('scroll', function() {
            nav.css({
                'opacity': '1',
                'visibility': 'visible'
            });
        });
    }
    
    App.init();
});

