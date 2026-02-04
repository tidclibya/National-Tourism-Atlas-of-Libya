// هذه البيانات مبنية على ملف JSON الذي قدمته
const libyaTourismData = {
    "cities": [
        {
            "id": 1,
            "name": "طرابلس",
            "name_en": "Tripoli",
            "topics": ["الفنادق", "المعالم السياحية", "النقل", "الاتصالات", "المطاعم", "نصائح السفر", "الأمن", "التأشيرة", "الثقافة", "التسوق"]
        },
        {
            "id": 2,
            "name": "بنغازي",
            "name_en": "Benghazi",
            "topics": ["الفنادق", "المعالم السياحية", "النقل", "الاتصالات", "المطاعم", "نصائح السفر", "الأمن", "التأشيرة", "الثقافة", "التسوق"]
        },
        {
            "id": 3,
            "name": "صبراتة",
            "name_en": "Sabratha",
            "topics": ["الفنادق", "المعالم السياحية", "النقل", "الاتصالات", "المطاعم", "نصائح السفر", "الأمن", "التأشيرة", "الثقافة", "التسوق"]
        },
        {
            "id": 4,
            "name": "لبدة الأثرية",
            "name_en": "Leptis Magna",
            "topics": ["الفنادق", "المعالم السياحية", "النقل", "الاتصالات", "المطاعم", "نصائح السفر", "الأمن", "التأشيرة", "الثقافة", "التسوق"]
        },
        {
            "id": 5,
            "name": "غدامس",
            "name_en": "Ghadames",
            "topics": ["الفنادق", "المعالم السياحية", "النقل", "الاتصالات", "المطاعم", "نصائح السفر", "الأمن", "التأشيرة", "الثقافة", "التسوق"]
        },
        {
            "id": 6,
            "name": "شحات",
            "name_en": "Shahat",
            "topics": ["الفنادق", "المعالم السياحية", "النقل", "الاتصالات", "المطاعم", "نصائح السفر", "الأمن", "التأشيرة", "الثقافة", "التسوق"]
        }
    ],
    
    "topics": [
        {"id": 1, "name": "الفنادق", "name_en": "Hotels", "icon": "fas fa-hotel"},
        {"id": 2, "name": "المعالم السياحية", "name_en": "Attractions", "icon": "fas fa-landmark"},
        {"id": 3, "name": "النقل", "name_en": "Transport", "icon": "fas fa-bus"},
        {"id": 4, "name": "الاتصالات", "name_en": "Internet", "icon": "fas fa-wifi"},
        {"id": 5, "name": "المطاعم", "name_en": "Restaurants", "icon": "fas fa-utensils"},
        {"id": 6, "name": "نصائح السفر", "name_en": "Tips", "icon": "fas fa-lightbulb"},
        {"id": 7, "name": "الأمن", "name_en": "Security", "icon": "fas fa-shield-alt"},
        {"id": 8, "name": "التأشيرة", "name_en": "Visa", "icon": "fas fa-passport"},
        {"id": 9, "name": "الثقافة", "name_en": "Culture", "icon": "fas fa-theater-masks"},
        {"id": 10, "name": "التسوق", "name_en": "Shopping", "icon": "fas fa-shopping-bag"}
    ],
    
    "qa_data": [
        // طرابلس - الفنادق
        {
            "id": 1,
            "city": "طرابلس",
            "city_en": "Tripoli",
            "topic": "الفنادق",
            "topic_en": "Hotels",
            "question_ar": "ما أهم المعلومات حول الفنادق في مدينة طرابلس؟",
            "question_en": "What are the main information about Hotels in Tripoli?",
            "answer_ar": "توفر مدينة طرابلس خدمات جيدة في مجال الفنادق، وتشمل أماكن معروفة ومرافق مناسبة للزوار. يُنصح بالتخطيط المسبق، والاستعلام من مصادر موثوقة، والاستفادة من الخدمات المحلية لضمان تجربة مريحة وآمنة. من الفنادق الموصى بها: فندق كورنثيا طرابلس، فندق ريكسوس طرابلس، وفندق المهاري.",
            "answer_en": "Tripoli provides good services in the field of Hotels, including well-known places and facilities for visitors. It is recommended to plan ahead, consult reliable sources, and use local services for a safe and comfortable experience. Recommended hotels: Corinthia Hotel Tripoli, Rixos Hotel Tripoli, and Al Mahary Hotel.",
            "links": ["https://www.booking.com/", "https://www.tripadvisor.com/", "https://maps.google.com/"]
        },
        // طرابلس - المعالم السياحية
        {
            "id": 2,
            "city": "طرابلس",
            "city_en": "Tripoli",
            "topic": "المعالم السياحية",
            "topic_en": "Attractions",
            "question_ar": "ما أهم المعالم السياحية في طرابلس؟",
            "question_en": "What are the main tourist attractions in Tripoli?",
            "answer_ar": "طرابلس غنية بالمعالم التاريخية والثقافية. أبرزها: القلعة الحمراء (أسوار طرابلس)، المتحف الوطني، قوس ماركوس أوريليوس، وشارع عمر المختار. كما تشتهر المدينة بأسواقها التقليدية مثل سوق الترك وسوق القزازين.",
            "answer_en": "Tripoli is rich in historical and cultural landmarks. The most prominent: Red Castle (Tripoli Walls), National Museum, Arch of Marcus Aurelius, and Omar Al-Mukhtar Street. The city is also famous for its traditional markets such as Al-Turk Market and Al-Qazzazin Market.",
            "links": ["https://www.tripadvisor.com/", "https://maps.google.com/"]
        },
        // بنغازي - الفنادق
        {
            "id": 3,
            "city": "بنغازي",
            "city_en": "Benghazi",
            "topic": "الفنادق",
            "topic_en": "Hotels",
            "question_ar": "ما أهم المعلومات حول الفنادق في مدينة بنغازي؟",
            "question_en": "What are the main information about Hotels in Benghazi?",
            "answer_ar": "توفر بنغازي مجموعة من الفنادق المناسبة للزوار، مع التركيز على الراحة والأمان. يُنصح بالحجز المسبق والتواصل مع الفندق مباشرة للتأكد من الخدمات المتاحة. من الخيارات المتاحة: فندق تيبستي بنغازي وفندق الكورال.",
            "answer_en": "Benghazi provides a range of suitable hotels for visitors, focusing on comfort and safety. It is recommended to book in advance and contact the hotel directly to confirm available services. Available options: Tibesti Hotel Benghazi and Coral Hotel.",
            "links": ["https://www.booking.com/", "https://maps.google.com/"]
        },
        // صبراتة - المعالم السياحية
        {
            "id": 4,
            "city": "صبراتة",
            "city_en": "Sabratha",
            "topic": "المعالم السياحية",
            "topic_en": "Attractions",
            "question_ar": "ما هي أهم المعالم الأثرية في صبراتة؟",
            "question_en": "What are the main archaeological sites in Sabratha?",
            "answer_ar": "صبراتة هي مدينة أثرية رومانية تضم واحدة من أفضل المسارح الرومانية المحفوظة في العالم. تشمل المعالم: المسرح الروماني، المعابد، المنتدى، والفيلات الرومانية. الموقع مدرج على لائحة اليونسكو للتراث العالمي.",
            "answer_en": "Sabratha is a Roman archaeological city containing one of the best-preserved Roman theaters in the world. Landmarks include: Roman Theater, Temples, Forum, and Roman Villas. The site is listed on the UNESCO World Heritage List.",
            "links": ["https://whc.unesco.org/", "https://www.tripadvisor.com/"]
        },
        // لبدة الأثرية - المعالم السياحية
        {
            "id": 5,
            "city": "لبدة الأثرية",
            "city_en": "Leptis Magna",
            "topic": "المعالم السياحية",
            "topic_en": "Attractions",
            "question_ar": "ما الذي يميز مدينة لبدة الأثرية؟",
            "question_en": "What distinguishes Leptis Magna?",
            "answer_ar": "لبدة الأثرية هي من أهم المدن الرومانية القديمة وأكملها حفظاً. تشمل معالمها: قوس سبتيموس سيفيروس، السوق القديم، المسرح، والحمامات. تعتبر من أفضل المواقع الأثرية الرومانية خارج إيطاليا.",
            "answer_en": "Leptis Magna is one of the most important and best-preserved ancient Roman cities. Its landmarks include: Arch of Septimius Severus, Old Market, Theater, and Baths. It is considered one of the best Roman archaeological sites outside Italy.",
            "links": ["https://whc.unesco.org/", "https://www.tripadvisor.com/"]
        },
        // التأشيرة (عام)
        {
            "id": 6,
            "city": "عام",
            "city_en": "General",
            "topic": "التأشيرة",
            "topic_en": "Visa",
            "question_ar": "ما هي متطلبات التأشيرة لزيارة ليبيا؟",
            "question_en": "What are the visa requirements to visit Libya?",
            "answer_ar": "معظم الزوار يحتاجون إلى تأشيرة لدخول ليبيا. المتطلبات تشمل: جواز سفر ساري المفعول لمدة 6 أشهر على الأقل، نموذج طلب تأشيرة، صور شخصية، ورسالة دعوة من مضيف في ليبيا. يُنصح بالاتصال بالسفارة أو القنصلية الليبية للحصول على أحدث المعلومات.",
            "answer_en": "Most visitors need a visa to enter Libya. Requirements include: valid passport for at least 6 months, visa application form, passport photos, and invitation letter from a host in Libya. It is recommended to contact the Libyan embassy or consulate for the latest information.",
            "links": ["https://www.mfa.gov.ly/"]
        }
    ],
    
    "suggested_questions_ar": [
        "ما هي أفضل الفنادق في طرابلس؟",
        "كيف يمكنني التنقل في بنغازي؟",
        "ما هي المعالم السياحية في صبراتة؟",
        "هل أحتاج تأشيرة لزيارة ليبيا؟",
        "ما هي أماكن التسوق في غدامس؟",
        "كيف هو الأمن في شحات؟",
        "ما هي المطاعم الموصى بها في لبدة الأثرية؟",
        "ما هي تكلفة الإقامة في فنادق طرابلس؟",
        "هل تتوفر خدمة الواي فاي في فنادق بنغازي؟",
        "ما هي الأماكن الآمنة للسياح في ليبيا؟"
    ],
    
    "suggested_questions_en": [
        "What are the best hotels in Tripoli?",
        "How can I get around in Benghazi?",
        "What are the tourist attractions in Sabratha?",
        "Do I need a visa to visit Libya?",
        "What are the shopping places in Ghadames?",
        "How is the security in Shahat?",
        "What restaurants are recommended in Leptis Magna?",
        "What is the cost of accommodation in Tripoli hotels?",
        "Is WiFi available in Benghazi hotels?",
        "What are the safe places for tourists in Libya?"
    ]
};