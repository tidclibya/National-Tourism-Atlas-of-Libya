// حالة التطبيق
let currentLanguage = 'ar';
let chatHistory = [];

// تهيئة التطبيق
document.addEventListener('DOMContentLoaded', function() {
    initApp();
    setupEventListeners();
    loadInitialData();
});

// تهيئة التطبيق
function initApp() {
    console.log("المساعد الذكي للسياحة في ليبيا - جاهز للاستخدام");
}

// إعداد مستمعي الأحداث
function setupEventListeners() {
    // زر الإرسال
    document.getElementById('sendBtn').addEventListener('click', sendMessage);
    
    // زر الصوت
    document.getElementById('voiceBtn').addEventListener('click', toggleVoiceInput);
    
    // إدخال النص (Enter للإرسال)
    document.getElementById('userInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
    
    // أزرار اللغة
    document.getElementById('lang-ar').addEventListener('click', function() {
        setLanguage('ar');
    });
    
    document.getElementById('lang-en').addEventListener('click', function() {
        setLanguage('en');
    });
    
    // أزرار الأسئلة السريعة
    document.querySelectorAll('.quick-btn').forEach(button => {
        button.addEventListener('click', function() {
            const question = this.getAttribute('data-question');
            document.getElementById('userInput').value = question;
            sendMessage();
        });
    });
}

// تحميل البيانات الأولية
function loadInitialData() {
    // تحميل المدن
    const citiesList = document.getElementById('citiesList');
    citiesList.innerHTML = '';
    
    libyaTourismData.cities.forEach(city => {
        const cityElement = document.createElement('div');
        cityElement.className = 'city-item';
        cityElement.textContent = currentLanguage === 'ar' ? city.name : city.name_en;
        cityElement.addEventListener('click', function() {
            document.getElementById('userInput').value = 
                currentLanguage === 'ar' ? `معلومات عن ${city.name}` : `Information about ${city.name_en}`;
        });
        citiesList.appendChild(cityElement);
    });
    
    // تحميل المواضيع
    const topicsList = document.getElementById('topicsList');
    topicsList.innerHTML = '';
    
    libyaTourismData.topics.forEach(topic => {
        const topicElement = document.createElement('div');
        topicElement.className = 'topic-item';
        topicElement.innerHTML = `
            <i class="${topic.icon}"></i>
            <span>${currentLanguage === 'ar' ? topic.name : topic.name_en}</span>
        `;
        topicElement.addEventListener('click', function() {
            document.getElementById('userInput').value = 
                currentLanguage === 'ar' ? `${topic.name}` : `${topic.name_en}`;
        });
        topicsList.appendChild(topicElement);
    });
    
    // تحميل الأسئلة المقترحة
    const suggestionsList = document.getElementById('suggestionsList');
    suggestionsList.innerHTML = '';
    
    const suggestions = currentLanguage === 'ar' 
        ? libyaTourismData.suggested_questions_ar 
        : libyaTourismData.suggested_questions_en;
    
    suggestions.forEach(question => {
        const li = document.createElement('li');
        li.textContent = question;
        li.addEventListener('click', function() {
            document.getElementById('userInput').value = question;
            sendMessage();
        });
        suggestionsList.appendChild(li);
    });
    
    // تحديث نصوص الواجهة بناءً على اللغة
    updateUITexts();
}

// تحديث نصوص الواجهة
function updateUITexts() {
    const placeholder = currentLanguage === 'ar' 
        ? "اكتب سؤالك هنا... (مثال: فنادق في طرابلس)" 
        : "Type your question here... (example: hotels in Tripoli)";
    
    document.getElementById('userInput').placeholder = placeholder;
    
    // تحديث أزرار الأسئلة السريعة
    if (currentLanguage === 'en') {
        document.querySelectorAll('.quick-btn').forEach((btn, index) => {
            const texts = ['Hotels', 'Attractions', 'Transport', 'Restaurants', 'Visa'];
            if (texts[index]) {
                btn.innerHTML = `<i class="${btn.querySelector('i').className}"></i> ${texts[index]}`;
            }
        });
    }
}

// تغيير اللغة
function setLanguage(lang) {
    currentLanguage = lang;
    
    // تحديث أزرار اللغة
    document.getElementById('lang-ar').classList.toggle('active', lang === 'ar');
    document.getElementById('lang-en').classList.toggle('active', lang === 'en');
    
    // إعادة تحميل البيانات
    loadInitialData();
    
    // إضافة رسالة ترحيب باللغة الجديدة
    addBotMessage(
        lang === 'ar' 
            ? "تم تغيير اللغة إلى العربية. كيف يمكنني مساعدتك اليوم؟" 
            : "Language changed to English. How can I help you today?"
    );
}

// إرسال رسالة
function sendMessage() {
    const userInput = document.getElementById('userInput');
    const message = userInput.value.trim();
    
    if (message === '') return;
    
    // إضافة رسالة المستخدم
    addUserMessage(message);
    
    // مسح حقل الإدخال
    userInput.value = '';
    
    // معالجة الرسالة والحصول على الرد
    setTimeout(() => {
        const response = processMessage(message);
        addBotMessage(response.answer, response);
    }, 500);
}

// إضافة رسالة المستخدم
function addUserMessage(message) {
    const chatMessages = document.getElementById('chatMessages');
    
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message user-message';
    
    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';
    contentDiv.innerHTML = `<strong>أنت:</strong> ${message}`;
    
    messageDiv.appendChild(contentDiv);
    chatMessages.appendChild(messageDiv);
    
    // التمرير للأسفل
    chatMessages.scrollTop = chatMessages.scrollHeight;
    
    // حفظ في السجل
    chatHistory.push({
        type: 'user',
        message: message,
        timestamp: new Date()
    });
}

// إضافة رسالة المساعد
function addBotMessage(message, data = null) {
    const chatMessages = document.getElementById('chatMessages');
    
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message bot-message';
    
    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';
    
    let messageHTML = `<strong>المساعد:</strong> ${message}`;
    
    // إضافة روابط إذا كانت موجودة
    if (data && data.links && data.links.length > 0) {
        messageHTML += `<br><br><strong>${currentLanguage === 'ar' ? 'روابط مفيدة:' : 'Useful links:'}</strong><br>`;
        data.links.forEach(link => {
            messageHTML += `<a href="${link}" target="_blank">${link}</a><br>`;
        });
    }
    
    contentDiv.innerHTML = messageHTML;
    messageDiv.appendChild(contentDiv);
    chatMessages.appendChild(messageDiv);
    
    // التمرير للأسفل
    chatMessages.scrollTop = chatMessages.scrollHeight;
    
    // حفظ في السجل
    chatHistory.push({
        type: 'bot',
        message: message,
        data: data,
        timestamp: new Date()
    });
}

// معالجة الرسالة
function processMessage(message) {
    const normalizedMessage = message.toLowerCase();
    
    // البحث في البيانات
    let bestMatch = null;
    let bestScore = 0;
    
    // كلمات مفتاحية للمدن
    const cityKeywords = {
        'طرابلس': ['طرابلس', 'tripoli'],
        'بنغازي': ['بنغازي', 'benghazi'],
        'صبراتة': ['صبراتة', 'sabratha'],
        'لبدة': ['لبدة', 'leptis', 'leptis magna'],
        'غدامس': ['غدامس', 'ghadames'],
        'شحات': ['شحات', 'shahat']
    };
    
    // كلمات مفتاحية للمواضيع
    const topicKeywords = {
        'فنادق': ['فنادق', 'فندق', 'hotels', 'hotel', 'إقامة', 'سكن'],
        'معالم': ['معالم', 'سياحية', 'attractions', 'tourist', 'أماكن', 'مواقع'],
        'نقل': ['نقل', 'مواصلات', 'transport', 'transportation', 'تنقل'],
        'مطاعم': ['مطاعم', 'مطعم', 'أكل', 'طعام', 'restaurants', 'restaurant', 'food'],
        'تأشيرة': ['تأشيرة', 'فيزا', 'تأشيرات', 'visa', 'visas'],
        'أمن': ['أمن', 'سلامة', 'security', 'safety', 'آمن'],
        'تسوق': ['تسوق', 'شراء', 'shopping', 'shop'],
        'اتصالات': ['اتصالات', 'انترنت', 'إنترنت', 'انترنيت', 'internet', 'wifi', 'واي فاي'],
        'ثقافة': ['ثقافة', 'عادات', 'تقاليد', 'culture', 'cultural'],
        'نصائح': ['نصائح', 'توصيات', 'إرشادات', 'tips', 'advice']
    };
    
    // اكتشاف المدينة
    let detectedCity = 'عام';
    let detectedCityEn = 'General';
    
    for (const [city, keywords] of Object.entries(cityKeywords)) {
        for (const keyword of keywords) {
            if (normalizedMessage.includes(keyword)) {
                detectedCity = city;
                // الحصول على الاسم الإنجليزي
                const cityData = libyaTourismData.cities.find(c => 
                    currentLanguage === 'ar' ? c.name === city : c.name_en.toLowerCase() === city
                );
                if (cityData) {
                    detectedCityEn = cityData.name_en;
                }
                break;
            }
        }
        if (detectedCity !== 'عام') break;
    }
    
    // اكتشاف الموضوع
    let detectedTopic = 'معلومات عامة';
    let detectedTopicEn = 'General Information';
    
    for (const [topic, keywords] of Object.entries(topicKeywords)) {
        for (const keyword of keywords) {
            if (normalizedMessage.includes(keyword)) {
                detectedTopic = topic;
                // الحصول على الاسم الإنجليزي
                const topicData = libyaTourismData.topics.find(t => 
                    currentLanguage === 'ar' ? t.name.includes(topic) : t.name_en.toLowerCase().includes(topic)
                );
                if (topicData) {
                    detectedTopicEn = topicData.name_en;
                }
                break;
            }
        }
        if (detectedTopic !== 'معلومات عامة') break;
    }
    
    // البحث عن إجابة مطابقة في البيانات
    for (const qa of libyaTourismData.qa_data) {
        let score = 0;
        
        // مطابقة المدينة
        if ((currentLanguage === 'ar' && qa.city.includes(detectedCity)) ||
            (currentLanguage === 'en' && qa.city_en.toLowerCase().includes(detectedCity.toLowerCase()))) {
            score += 2;
        }
        
        // مطابقة الموضوع
        if ((currentLanguage === 'ar' && qa.topic.includes(detectedTopic)) ||
            (currentLanguage === 'en' && qa.topic_en.toLowerCase().includes(detectedTopicEn.toLowerCase()))) {
            score += 2;
        }
        
        // مطابقة الكلمات في السؤال
        const questionToCheck = currentLanguage === 'ar' ? qa.question_ar : qa.question_en;
        const questionWords = questionToCheck.toLowerCase().split(' ');
        
        for (const word of questionWords) {
            if (word.length > 3 && normalizedMessage.includes(word)) {
                score += 1;
            }
        }
        
        if (score > bestScore) {
            bestScore = score;
            bestMatch = qa;
        }
    }
    
    // إذا وجدنا تطابق جيد
    if (bestMatch && bestScore >= 2) {
        return {
            answer: currentLanguage === 'ar' ? bestMatch.answer_ar : bestMatch.answer_en,
            city: currentLanguage === 'ar' ? bestMatch.city : bestMatch.city_en,
            topic: currentLanguage === 'ar' ? bestMatch.topic : bestMatch.topic_en,
            links: bestMatch.links,
            score: bestScore
        };
    }
    
    // إذا لم نجد تطابق، نعيد رد عام
    const generalResponsesAr = [
        "أهلاً بك! يمكنني مساعدتك في معلومات عن السياحة في ليبيا. يرجى تحديد مدينة معينة أو موضوع محدد.",
        "شكراً لسؤالك. للأسف ليس لدي معلومات دقيقة عن هذا الاستعلام. هل يمكنك أن تكون أكثر تحديداً؟ مثلاً: 'فنادق في طرابلس' أو 'معالم سياحية في بنغازي'.",
        "أنا مساعدك للسياحة في ليبيا. يمكنني الإجابة عن أسئلة تتعلق بالفنادق، المعالم السياحية، النقل، المطاعم، والتأشيرات في المدن الليبية."
    ];
    
    const generalResponsesEn = [
        "Welcome! I can help you with information about tourism in Libya. Please specify a particular city or topic.",
        "Thank you for your question. Unfortunately, I don't have precise information about this query. Can you be more specific? For example: 'hotels in Tripoli' or 'tourist attractions in Benghazi'.",
        "I am your assistant for tourism in Libya. I can answer questions about hotels, tourist attractions, transportation, restaurants, and visas in Libyan cities."
    ];
    
    const responses = currentLanguage === 'ar' ? generalResponsesAr : generalResponsesEn;
    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
    
    return {
        answer: randomResponse,
        city: currentLanguage === 'ar' ? 'عام' : 'General',
        topic: currentLanguage === 'ar' ? 'معلومات عامة' : 'General Information',
        links: [],
        score: 0
    };
}

// تفعيل إدخال الصوت
function toggleVoiceInput() {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
        addBotMessage(
            currentLanguage === 'ar' 
                ? "عذراً، متصفحك لا يدخل التعرف على الصوت." 
                : "Sorry, your browser does not support speech recognition."
        );
        return;
    }
    
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    
    recognition.lang = currentLanguage === 'ar' ? 'ar-LY' : 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
    
    recognition.start();
    
    recognition.onresult = function(event) {
        const transcript = event.results[0][0].transcript;
        document.getElementById('userInput').value = transcript;
    };
    
    recognition.onerror = function(event) {
        console.error('Speech recognition error', event.error);
    };
    
    recognition.onend = function() {
        console.log('Speech recognition ended');
    };
}

// دالة مساعدة: إضافة تأثير كتابة
function typeWriter(element, text, speed = 30) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}