(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/glassmorphism-card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GlassmorphismCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
"use client";
;
;
function GlassmorphismCard({ children, className = "", hover = true }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: `
        bg-slate-900/30 backdrop-blur-md border border-slate-700/50 
        rounded-xl shadow-xl ${className}
      `,
        whileHover: hover ? {
            scale: 1.02,
            y: -5
        } : {},
        transition: {
            duration: 0.2
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/glassmorphism-card.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_c = GlassmorphismCard;
var _c;
__turbopack_context__.k.register(_c, "GlassmorphismCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/db/clients.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clientsData",
    ()=>clientsData
]);
const clientsData = [
    {
        id: "stack-learner",
        name: "Stack Learner",
        logo: "/companies/sl-logo.png"
    },
    {
        id: "edu-bridge-academy",
        name: "Edu Bridge Academy",
        logo: "/companies/edu-bridge-academy.jpg"
    },
    {
        id: "eco-revolution",
        name: "EcoRevolution",
        logo: "/companies/eco-revolution.jpg"
    },
    {
        id: "growthleo",
        name: "GrowthLeo LLC",
        logo: "/companies/growthleo.png"
    },
    {
        id: "impel-it",
        name: "Impel IT",
        logo: "/companies/impel-it.png"
    },
    {
        id: "ecofarming",
        name: "Eco Farming",
        logo: "/companies/Ecofarming.png"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/db/projects.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "allVideoProjects",
    ()=>allVideoProjects
]);
const allVideoProjects = [
    {
        id: "rVVeLdouViU",
        video_title: "একজন ফেসবুক ইঞ্জিনিয়ারের রিজিউমি কেমন হয়?",
        video_description: `How to Build Your Perfect Resume: Learn from a FAANG Employee Example! Are you ready to take your career to new heights and secure your dream job at a top tech company? Join us on this exclusive journey inside the mind of a FAANG employee as we unveil the secrets of their perfect resume! In this eye-opening video, you'll discover the exact strategies and tips used by the industry's finest to stand out from the crowd and impress recruiters.`,
        tags: [
            "Resume Tips",
            "FAANG Career",
            "Job Preparation",
            "Career Advice"
        ],
        cover_image: "rVVeLdouViU",
        publish_date: "2024-08-04",
        client_name: "Stack Learner",
        client_image: "/companies/sl-logo.png",
        client_feedback: "",
        video_link: "https://youtu.be/rVVeLdouViU?si=LwWPmI4F34mwLNw8",
        project_images: [],
        category: [
            "Talking Head",
            "Explainer"
        ],
        duration: "6:32",
        software_used: [
            "DaVinci Resolve"
        ]
    },
    {
        id: "JSZmQxg3fos",
        video_title: "Mastering DSA for Developers | Last Call to Join",
        video_description: "This workshop helps application developers explore DSA through real-world problems, connecting data structures to business challenges and fostering a problem-solving mindset for practical solutions.",
        tags: [
            "DSA",
            "Developer Skills",
            "Problem Solving",
            "Career Prep"
        ],
        cover_image: "JSZmQxg3fos",
        publish_date: "2024-04-08",
        client_name: "Stack Learner",
        client_image: "/companies/sl-logo.png",
        client_feedback: "",
        video_link: "https://youtu.be/JSZmQxg3fos?si=NZYmG1g4mZiYx6Eb",
        project_images: [],
        category: [
            "Talking Head",
            "Explainer"
        ],
        duration: "10:12",
        software_used: [
            "Davinci Resolve",
            "After Effects"
        ]
    },
    {
        id: "ufRtWGd0cXo",
        video_title: "Calm Your Nervous System in 60 Seconds with HeartMath Technique | Angela ORR",
        video_description: `Discover the powerful HeartMath technique to calm your nervous system in just 60 seconds! This quick and effective method can help reduce anxiety, stress, and feelings of overwhelm, promoting a sense of relaxation and calmness.`,
        tags: [
            "Stress Relief",
            "Mental Health",
            "Wellness",
            "HeartMath"
        ],
        cover_image: "ufRtWGd0cXo",
        publish_date: "2025-06-06",
        client_name: "Growthleo",
        client_image: "/companies/growthleo.png",
        client_feedback: "",
        video_link: "https://youtu.be/ufRtWGd0cXo?si=kgVACrMZQ24tUook",
        project_images: [],
        category: [
            "Talking Head",
            "Explainer"
        ],
        duration: "7:18",
        software_used: [
            "Davinci Resolve"
        ]
    },
    {
        id: "7OuSRaIPOds",
        video_title: "The Real Reason You Can’t Change (And How to Fix It in 21 Days) | Angela Orr",
        video_description: `You've tried every habit hack, diet, and self-help book—but real change still feels impossible. Why? Because you're trying to change your behavior without changing your identity.`,
        tags: [
            "Personal Growth",
            "Habits",
            "Mindset",
            "Self-Improvement"
        ],
        cover_image: "7OuSRaIPOds",
        publish_date: "2025-06-20",
        client_name: "Growthleo",
        client_image: "/companies/growthleo.png",
        client_feedback: "",
        video_link: "https://youtu.be/7OuSRaIPOds?si=TYMRxpKAbbjU9edP",
        project_images: [],
        category: [
            "Talking Head",
            "Explainer"
        ],
        duration: "8:13",
        software_used: [
            "Davinci Resolve"
        ]
    },
    {
        id: "esjJzKjx9Fo",
        video_title: "From Stuck to Strong: The Brain Reset You Need | Angela Orr",
        video_description: `Feeling stuck, lost, or like your best years are behind you? You're not alone and you're not too late.`,
        tags: [
            "Mental Health",
            "Brain Training",
            "Transformation",
            "Wellness"
        ],
        cover_image: "esjJzKjx9Fo",
        publish_date: "2025-07-11",
        client_name: "Growthleo",
        client_image: "/companies/growthleo.png",
        client_feedback: "",
        video_link: "https://youtu.be/esjJzKjx9Fo?si=Z5IOTm-x-RAB018K",
        project_images: [],
        category: [
            "Talking Head",
            "Explainer"
        ],
        duration: "7:59",
        software_used: [
            "Davinci Resolve"
        ]
    },
    {
        id: "Qwwgg_qt5ew",
        video_title: "Apply logic to simplify your conditional problems",
        video_description: "Apply logic to simplify your conditional problems. Watch the video to understand how!",
        tags: [
            "Coding Tips",
            "Conditional Logic",
            "Problem Solving",
            "Shorts"
        ],
        cover_image: "Qwwgg_qt5ew",
        publish_date: "2024-01-16",
        client_name: "Stack Learner",
        client_image: "/companies/sl-logo.png",
        client_feedback: "",
        video_link: "https://youtube.com/shorts/Qwwgg_qt5ew?si=tTSoTUnuVPdjpc7y",
        project_images: [],
        category: [
            "Shorts",
            "Motion Graphics",
            "Explainer"
        ],
        duration: "2:44",
        software_used: [
            "After Effects"
        ]
    },
    {
        id: "TiZvFO99rpw",
        video_title: "HTTP Request Explained in 1 minute",
        video_description: "Every time you visit a website, your browser sends an HTTP request, and the server responds. But how does this process actually work?",
        tags: [
            "HTTP",
            "Web Basics",
            "Networking",
            "Shorts"
        ],
        cover_image: "TiZvFO99rpw",
        publish_date: "2025-02-27",
        client_name: "Stack Learner",
        client_image: "/companies/sl-logo.png",
        client_feedback: "",
        video_link: "https://youtube.com/shorts/TiZvFO99rpw?si=vUl9yE-xeKhfq8gd",
        project_images: [],
        category: [
            "Shorts",
            "Explainer",
            "Motion Graphics"
        ],
        duration: "1:10",
        software_used: [
            "After Effects"
        ]
    },
    {
        id: "2esQF01ob78",
        video_title: "API & API Endpoints Explained with Simple Examples",
        video_description: "Every time you use an app or website, APIs are working behind the scenes to fetch data. But what exactly is an API, and how do API endpoints work? 🤔 Watch this video to learn with simple examples!",
        tags: [
            "API",
            "Web Basics",
            "Backend",
            "Shorts"
        ],
        cover_image: "2esQF01ob78",
        publish_date: "2025-03-05",
        client_name: "Stack Learner",
        client_image: "/companies/sl-logo.png",
        client_feedback: "",
        video_link: "https://youtube.com/shorts/2esQF01ob78?si=SRi4j6f8LWlkHpKh",
        project_images: [],
        category: [
            "Shorts",
            "Explainer",
            "Motion Graphics"
        ],
        duration: "1:24",
        software_used: [
            "After Effects"
        ]
    },
    {
        id: "fH24XyxcfOc",
        video_title: "Granola to Nutritionist - Short 01",
        video_description: "",
        tags: [
            "API",
            "Granola",
            "Ecofaming",
            "Shorts"
        ],
        cover_image: "fH24XyxcfOc",
        publish_date: "2025-03-06",
        client_name: "Eco Farming",
        client_image: "/companies/Ecofarming.png",
        client_feedback: "",
        video_link: "https://www.youtube.com/shorts/fH24XyxcfOc",
        project_images: [],
        category: [
            "Shorts",
            "Promo"
        ],
        duration: "1:11",
        software_used: [
            "Davinci Resolve",
            "After Effects"
        ]
    },
    {
        id: "wBrkYeMlh1U",
        video_title: "Granola to Nutritionist - Short 02",
        video_description: "",
        tags: [
            "API",
            "Granola",
            "Ecofaming",
            "Shorts"
        ],
        cover_image: "wBrkYeMlh1U",
        publish_date: "2025-03-06",
        client_name: "Eco Farming",
        client_image: "/companies/Ecofarming.png",
        client_feedback: "",
        video_link: "https://www.youtube.com/shorts/wBrkYeMlh1U",
        project_images: [],
        category: [
            "Shorts",
            "Promo"
        ],
        duration: "1:09",
        software_used: [
            "Davinci Resolve",
            "After Effects"
        ]
    },
    {
        id: "A7O_MV3mgsI",
        video_title: "Granola to Nutritionist - Short 03",
        video_description: "",
        tags: [
            "API",
            "Granola",
            "Ecofaming",
            "Shorts"
        ],
        cover_image: "A7O_MV3mgsI",
        publish_date: "2025-03-07",
        client_name: "Eco Farming",
        client_image: "/companies/Ecofarming.png",
        client_feedback: "",
        video_link: "https://www.youtube.com/shorts/A7O_MV3mgsI",
        project_images: [],
        category: [
            "Shorts",
            "Promo"
        ],
        duration: "1:21",
        software_used: [
            "Davinci Resolve",
            "After Effects"
        ]
    },
    {
        id: "kpJyIq-mvtc",
        video_title: "EduNurture360 কি? | Edu Bridge Academy",
        video_description: "শুরু হয়ে গেছে EduNurture360 এর ২০২৪ সালের ব্যাচ!",
        tags: [
            "Education",
            "Institute Promo",
            "Bangla Voiceover",
            "Brand Awareness"
        ],
        cover_image: "kpJyIq-mvtc",
        publish_date: "2024-02-01",
        client_name: "Edu Bridge Academy",
        client_image: "/companies/edu-bridge-academy.jpg",
        client_feedback: "",
        video_link: "https://youtu.be/kpJyIq-mvtc?si=wdURtwH9HI1FZmOR",
        project_images: [],
        category: [
            "Promo",
            "Motion Graphics"
        ],
        duration: "1:28",
        software_used: [
            "After Effects"
        ]
    },
    {
        id: "w72TzfYIsgU",
        video_title: "Bangladesh’s First Flexible Discount for EdTech – Learn Without Limits!",
        video_description: `Bangladesh's First Flexible Discount for EdTech – Learn Without Limits!`,
        tags: [
            "EdTech",
            "Product Launch",
            "Education Innovation",
            "Motion Promo"
        ],
        cover_image: "w72TzfYIsgU",
        publish_date: "2025-01-19",
        client_name: "Stack Learner",
        client_image: "/companies/sl-logo.png",
        client_feedback: "",
        video_link: "https://youtu.be/w72TzfYIsgU?si=50Iu8TME6mC4iH8z",
        project_images: [],
        category: [
            "Promo",
            "Motion Graphics"
        ],
        duration: "1:29",
        software_used: [
            "After Effect"
        ]
    },
    {
        id: "Y3lWN7oFkpw",
        video_title: "EcoRevolution Documentary",
        video_description: "A compelling documentary exploring environmental sustainability and the revolution towards eco-friendly practices in modern society.",
        tags: [
            "Environment",
            "Sustainability",
            "Green Revolution",
            "Documentary"
        ],
        cover_image: "Y3lWN7oFkpw",
        publish_date: "2024-04-12",
        client_name: "EcoRevolution",
        client_image: "/companies/eco-revolution.jpg",
        client_feedback: "",
        video_link: "https://youtu.be/Y3lWN7oFkpw",
        project_images: [],
        category: [
            "Documentary",
            "Motion Graphics"
        ],
        duration: "3:51",
        software_used: [
            "After Effects"
        ]
    },
    {
        id: "MCD9uyZT8Y0",
        video_title: "প্রোগ্রামিং এর ফান্ডামেন্টাল শেখা কেন জরুরী?",
        video_description: `ফান্ডামেন্টাল না শিখে কাজ শেখা শুরু করলে কেন সমস্যা হয়—এই ভিডিওতে জানুন।`,
        tags: [
            "Programming Basics",
            "Education",
            "Beginner Tips",
            "Explainer Video"
        ],
        cover_image: "MCD9uyZT8Y0",
        publish_date: "2024-01-19",
        client_name: "Stack Learner",
        client_image: "/companies/sl-logo.png",
        client_feedback: "Fantastic work! Made complex topics easy to understand with great visuals. The explainer video helped our students grasp fundamental concepts much better.",
        video_link: "https://youtu.be/MCD9uyZT8Y0?si=W6HDf429dZo7hSQM",
        project_images: [],
        category: [
            "Explainer",
            "Motion Graphics"
        ],
        duration: "2:43",
        software_used: [
            "Davinci Resolve"
        ]
    },
    {
        id: "i2JZPZ-a_tc",
        video_title: "Business Email Service",
        video_description: `একটি ভুল ইমেইল কনফিগারেশনের কারণে নষ্ট হতে পারে আপনার সবচেয়ে valuable ক্লায়েন্ট ও ব্যবসার সুনাম।`,
        tags: [
            "Business IT",
            "Email Setup",
            "IT Services",
            "Promo Video"
        ],
        cover_image: "i2JZPZ-a_tc",
        publish_date: "2025-07-23",
        client_name: "Impel IT",
        client_image: "/companies/impel-it.png",
        client_feedback: "",
        video_link: "https://youtu.be/i2JZPZ-a_tc",
        project_images: [],
        category: [
            "Motion Graphics",
            "Promo"
        ],
        duration: "1:28",
        software_used: [
            "After effects"
        ]
    },
    {
        id: "H29MJ6vLbcg",
        video_title: "Stack Learner Brand Intro",
        video_description: "Professional brand introduction animation for Stack Learner with modern motion graphics and smooth transitions.",
        tags: [
            "Brand Animation",
            "Logo Reveal",
            "Motion Graphics",
            "Brand Identity"
        ],
        cover_image: "H29MJ6vLbcg",
        publish_date: "2024-04-12",
        client_name: "Stack Learner",
        client_image: "/companies/sl-logo.png",
        client_feedback: "",
        video_link: "https://youtu.be/H29MJ6vLbcg",
        project_images: [],
        category: [
            "Motion Graphics"
        ],
        duration: "0:22",
        software_used: [
            "After Effects"
        ]
    },
    {
        id: "TInQK-60l2A",
        video_title: "Web & E-commerce Store Development",
        video_description: `ওয়েবসাইট হতে হয় ফাস্ট, স্মার্ট, ও ইনটুইটিভ — যাতে বাড়ে ব্যবসার conversion.`,
        tags: [
            "Web Development",
            "E-commerce",
            "Business Website",
            "Promo"
        ],
        cover_image: "TInQK-60l2A",
        publish_date: "2025-07-24",
        client_name: "Impel IT",
        client_image: "/companies/impel-it.png",
        client_feedback: "",
        video_link: "https://youtu.be/TInQK-60l2A",
        project_images: [],
        category: [
            "Motion Graphics",
            "Promo"
        ],
        duration: "1:21",
        software_used: [
            "After effects"
        ]
    },
    {
        id: "byQmrdAwFK8",
        video_title: "Digital Marketing",
        video_description: `ভিজিটর আসছে, কিন্তু কাস্টমার হচ্ছে না? সমস্যা প্রোডাক্টে না, মার্কেটিং সিস্টেমে।`,
        tags: [
            "Marketing Strategy",
            "Conversion Optimization",
            "Business Growth",
            "Ads"
        ],
        cover_image: "byQmrdAwFK8",
        publish_date: "2025-07-25",
        client_name: "Impel IT",
        client_image: "/companies/impel-it.png",
        client_feedback: "",
        video_link: "https://youtu.be/byQmrdAwFK8",
        project_images: [],
        category: [
            "Motion Graphics",
            "Promo"
        ],
        duration: "1:22",
        software_used: [
            "After effects"
        ]
    },
    {
        id: "M9znCGjupcY",
        video_title: "Cyber Security",
        video_description: `জাস্ট একটা wrong ক্লিক, অথবা unknown  লিংক… আর মুহূর্তেই আপনার বিজনেস হতে পারে সাইবার হ্যাকের এর  শিকার।`,
        tags: [
            "Cyber Security",
            "Protection",
            "Ads"
        ],
        cover_image: "M9znCGjupcY",
        publish_date: "2025-08-01",
        client_name: "Impel IT",
        client_image: "/companies/impel-it.png",
        client_feedback: "",
        video_link: "https://youtu.be/M9znCGjupcY",
        project_images: [],
        category: [
            "Motion Graphics",
            "Promo"
        ],
        duration: "1:30",
        software_used: [
            "After effects"
        ]
    },
    {
        id: "ppcZHepW7ak",
        video_title: "The Power of Asking Better Questions | Angela ORR",
        video_description: `Do you often find yourself stuck in a situation where you're not getting the answers you need because you're not asking the right questions?`,
        tags: [
            "Stress Relief",
            "Mental Health",
            "Wellness"
        ],
        cover_image: "ppcZHepW7ak",
        publish_date: "2025-08-02",
        client_name: "Growthleo",
        client_image: "/companies/growthleo.png",
        client_feedback: "",
        video_link: "https://youtu.be/ppcZHepW7ak",
        project_images: [],
        category: [
            "Talking Head",
            "Explainer"
        ],
        duration: "8:22",
        software_used: [
            "Davinci Resolve"
        ]
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/helper.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAllVideoProjects",
    ()=>getAllVideoProjects,
    "getClients",
    ()=>getClients,
    "getFeaturedProjects",
    ()=>getFeaturedProjects,
    "getVideoCategories",
    ()=>getVideoCategories,
    "getVideoCategoriesWithCount",
    ()=>getVideoCategoriesWithCount,
    "getVideoCategoriesWithCountIncludingAll",
    ()=>getVideoCategoriesWithCountIncludingAll,
    "getVideoProjectById",
    ()=>getVideoProjectById,
    "getVideoProjectsByCategory",
    ()=>getVideoProjectsByCategory,
    "getYouTubeEmbedUrl",
    ()=>getYouTubeEmbedUrl,
    "videoProjectsData",
    ()=>videoProjectsData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$clients$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/db/clients.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/db/projects.ts [app-client] (ecmascript)");
;
;
const getAllVideoProjects = ()=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["allVideoProjects"].sort((a, b)=>new Date(b.publish_date).getTime() - new Date(a.publish_date).getTime());
};
const getVideoProjectsByCategory = (category)=>{
    if (category === "All") {
        return getAllVideoProjects();
    }
    const filteredProjects = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["allVideoProjects"].filter((project)=>project.category.includes(category));
    return filteredProjects.sort((a, b)=>new Date(b.publish_date).getTime() - new Date(a.publish_date).getTime());
};
const getVideoProjectById = (id)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["allVideoProjects"].find((project)=>project.id === id);
};
const getVideoCategories = ()=>{
    const categoriesSet = new Set();
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["allVideoProjects"].forEach((project)=>{
        project.category.forEach((cat)=>categoriesSet.add(cat));
    });
    return Array.from(categoriesSet);
};
const getVideoCategoriesWithCount = ()=>{
    const categoryCountMap = new Map();
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["allVideoProjects"].forEach((project)=>{
        project.category.forEach((cat)=>{
            categoryCountMap.set(cat, (categoryCountMap.get(cat) || 0) + 1);
        });
    });
    const sortedCategories = Array.from(categoryCountMap.entries()).map(([category, count])=>({
            category,
            count
        })).sort((a, b)=>b.count - a.count);
    return sortedCategories;
};
const getVideoCategoriesWithCountIncludingAll = ()=>{
    const categoryCounts = getVideoCategoriesWithCount();
    const total = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["allVideoProjects"].length;
    return [
        {
            category: "All",
            count: total
        },
        ...categoryCounts
    ];
};
function getFeaturedProjects(limit = 6) {
    return getAllVideoProjects().slice(0, limit);
}
function getClients() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$clients$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clientsData"];
}
const getYouTubeEmbedUrl = (url)=>{
    if (!url) return null;
    // Handle Shorts
    if (url.includes("youtube.com/shorts/")) {
        const match = url.match(/youtube\.com\/shorts\/([a-zA-Z0-9_-]{11})/);
        return match ? `https://www.youtube.com/embed/${match[1]}` : null;
    }
    // Handle Regular YouTube video
    const match = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/|v\/|.+\?v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
    return match ? `https://www.youtube.com/embed/${match[1]}` : null;
};
const videoProjectsData = {
    "Talking Head": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["allVideoProjects"].filter((p)=>p.category.includes("Talking Head")),
    Shorts: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["allVideoProjects"].filter((p)=>p.category.includes("Shorts")),
    Promo: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["allVideoProjects"].filter((p)=>p.category.includes("Promo")),
    Documentary: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["allVideoProjects"].filter((p)=>p.category.includes("Documentary")),
    Explainer: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["allVideoProjects"].filter((p)=>p.category.includes("Explainer")),
    "Motion Graphics": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["allVideoProjects"].filter((p)=>p.category.includes("Motion Graphics")),
    Animation: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["allVideoProjects"].filter((p)=>p.category.includes("Animation"))
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
            destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
            secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2 has-[>svg]:px-3",
            sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
            lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
            icon: "size-9"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/button.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/CTASection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$glassmorphism$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/glassmorphism-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
const CTASection = ({ title, description, buttonText, href, delay = 1.0 })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 20
        },
        animate: {
            opacity: 1,
            y: 0
        },
        transition: {
            duration: 0.5,
            delay
        },
        className: "text-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$glassmorphism$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            className: "p-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-2xl font-semibold mb-4 text-white",
                    children: title
                }, void 0, false, {
                    fileName: "[project]/src/components/CTASection.tsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-300 mb-6 max-w-2xl mx-auto",
                    children: description
                }, void 0, false, {
                    fileName: "[project]/src/components/CTASection.tsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    asChild: true,
                    size: "lg",
                    variant: "outline",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: href,
                        children: [
                            buttonText,
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                className: "ml-2",
                                size: 20
                            }, void 0, false, {
                                fileName: "[project]/src/components/CTASection.tsx",
                                lineNumber: 28,
                                columnNumber: 26
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CTASection.tsx",
                        lineNumber: 27,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/CTASection.tsx",
                    lineNumber: 26,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/CTASection.tsx",
            lineNumber: 23,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/CTASection.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = CTASection;
const __TURBOPACK__default__export__ = CTASection;
var _c;
__turbopack_context__.k.register(_c, "CTASection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/marquee.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
// cn utility function (similar to clsx or classnames)
function cn(...classes) {
    return classes.filter(Boolean).join(" ");
}
const useAnimationFrame = (callback)=>{
    _s();
    const requestRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const previousTimeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const animate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useAnimationFrame.useCallback[animate]": (time)=>{
            if (previousTimeRef.current !== null && previousTimeRef.current !== undefined) {
                const delta = time - previousTimeRef.current;
                callback(time, delta);
            }
            previousTimeRef.current = time;
            requestRef.current = requestAnimationFrame(animate);
        }
    }["useAnimationFrame.useCallback[animate]"], [
        callback
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useAnimationFrame.useEffect": ()=>{
            requestRef.current = requestAnimationFrame(animate);
            return ({
                "useAnimationFrame.useEffect": ()=>{
                    if (requestRef.current) {
                        cancelAnimationFrame(requestRef.current);
                    }
                }
            })["useAnimationFrame.useEffect"];
        }
    }["useAnimationFrame.useEffect"], [
        animate
    ]);
};
_s(useAnimationFrame, "+5h5W4PW1bY3F4P3OtIk4SCpnmo=");
function Marquee({ className, reverse = false, pauseOnHover = false, children, speed = 50, vertical = false, repeat = 4, ...props }) {
    _s1();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const contentRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const singleContentBlockRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const animX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const isPaused = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    useAnimationFrame({
        "Marquee.useAnimationFrame": (t, delta)=>{
            if (!containerRef.current || !contentRef.current || !singleContentBlockRef.current) return;
            if (pauseOnHover && isPaused.current) {
                return;
            }
            const singleContentBlockSize = vertical ? singleContentBlockRef.current.offsetHeight : singleContentBlockRef.current.offsetWidth;
            const contentStyle = window.getComputedStyle(contentRef.current);
            const computedGap = parseFloat(vertical ? contentStyle.rowGap || "0" : contentStyle.columnGap || "0");
            const loopDistance = singleContentBlockSize + computedGap;
            const dx = speed * delta / 1000;
            const effectiveDx = reverse ? dx : -dx;
            animX.current += effectiveDx;
            if (Math.abs(animX.current) >= loopDistance) {
                animX.current = animX.current % loopDistance;
            }
            if (vertical) {
                contentRef.current.style.transform = `translateY(${animX.current}px)`;
            } else {
                contentRef.current.style.transform = `translateX(${animX.current}px)`;
            }
        }
    }["Marquee.useAnimationFrame"]);
    const handleMouseEnter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Marquee.useCallback[handleMouseEnter]": ()=>{
            if (pauseOnHover) {
                isPaused.current = true;
            }
        }
    }["Marquee.useCallback[handleMouseEnter]"], [
        pauseOnHover
    ]);
    const handleMouseLeave = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Marquee.useCallback[handleMouseLeave]": ()=>{
            if (pauseOnHover) {
                isPaused.current = false;
            }
        }
    }["Marquee.useCallback[handleMouseLeave]"], [
        pauseOnHover
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ...props,
        ref: containerRef,
        className: cn("group flex overflow-hidden p-2 [--gap:2rem] [gap:var(--gap)]" + (vertical ? " flex-col" : " flex-row"), className),
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: contentRef,
            className: cn("flex shrink-0 justify-around [gap:var(--gap)]" + (vertical ? " flex-col" : " flex-row")),
            children: Array(repeat).fill(0).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: i === 0 ? singleContentBlockRef : null,
                    className: "flex gap-8",
                    children: children
                }, i, false, {
                    fileName: "[project]/src/components/ui/marquee.tsx",
                    lineNumber: 134,
                    columnNumber: 13
                }, this))
        }, void 0, false, {
            fileName: "[project]/src/components/ui/marquee.tsx",
            lineNumber: 124,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/marquee.tsx",
        lineNumber: 113,
        columnNumber: 5
    }, this);
}
_s1(Marquee, "Vu1sQBqJyK/spruvD5yh0PolOE0=", false, function() {
    return [
        useAnimationFrame
    ];
});
_c = Marquee;
const __TURBOPACK__default__export__ = Marquee;
var _c;
__turbopack_context__.k.register(_c, "Marquee");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/about/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AboutPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$glassmorphism$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/glassmorphism-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$facebook$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Facebook$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/facebook.js [app-client] (ecmascript) <export default as Facebook>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/github.js [app-client] (ecmascript) <export default as Github>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/instagram.js [app-client] (ecmascript) <export default as Instagram>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/linkedin.js [app-client] (ecmascript) <export default as Linkedin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$youtube$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Youtube$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/youtube.js [app-client] (ecmascript) <export default as Youtube>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$helper$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/helper.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CTASection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/CTASection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$marquee$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/marquee.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$clients$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/db/clients.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
function AboutPage() {
    const clients = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$helper$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getClients"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen py-20 px-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: 0.5
                    },
                    className: "text-center mb-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-4xl md:text-5xl font-bold mb-6 text-white",
                            children: "About Me"
                        }, void 0, false, {
                            fileName: "[project]/src/app/about/page.tsx",
                            lineNumber: 24,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-300 text-lg max-w-3xl mx-auto",
                            children: "Hey there! I'm Humayun Javaid, a passionate Video Editor and Motion Graphics Designer with a deep love for storytelling through visuals."
                        }, void 0, false, {
                            fileName: "[project]/src/app/about/page.tsx",
                            lineNumber: 27,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/about/page.tsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid lg:grid-cols-2 gap-12 mb-16 justify-center items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                x: -20
                            },
                            animate: {
                                opacity: 1,
                                x: 0
                            },
                            transition: {
                                duration: 0.5,
                                delay: 0.2
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$glassmorphism$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                className: "p-8",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative w-64 h-64 mx-auto mb-6",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: "/humayunjavaid.png",
                                                alt: "Humayun Javaid",
                                                fill: true,
                                                className: "rounded-full object-cover"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/about/page.tsx",
                                                lineNumber: 43,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/about/page.tsx",
                                            lineNumber: 42,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-2xl font-bold mb-2 text-white",
                                            children: "Humayun Javaid"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/about/page.tsx",
                                            lineNumber: 50,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-blue-400 mb-4",
                                            children: "Video Editor & Motion Graphics Designer"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/about/page.tsx",
                                            lineNumber: 53,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-400 text-sm mb-6",
                                            children: "Turning raw footage into visual stories with style, precision, and cinematic magic."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/about/page.tsx",
                                            lineNumber: 56,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-center gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "https://www.linkedin.com/in/niloy-bhowmick",
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    className: "text-gray-400 hover:text-blue-500 transition-colors",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__["Linkedin"], {
                                                        size: 24
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/about/page.tsx",
                                                        lineNumber: 69,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/about/page.tsx",
                                                    lineNumber: 63,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "https://www.instagram.com/its.niloybhowmick",
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    className: "text-gray-400 hover:text-pink-500 transition-colors",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__["Instagram"], {
                                                        size: 24
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/about/page.tsx",
                                                        lineNumber: 77,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/about/page.tsx",
                                                    lineNumber: 71,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "https://www.facebook.com/Its.niloybhowmick",
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    className: "text-gray-400 hover:text-blue-600 transition-colors",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$facebook$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Facebook$3e$__["Facebook"], {
                                                        size: 24
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/about/page.tsx",
                                                        lineNumber: 85,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/about/page.tsx",
                                                    lineNumber: 79,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "https://www.youtube.com/@itsniloybhowmick",
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    className: "text-gray-400 hover:text-red-600 transition-colors",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$youtube$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Youtube$3e$__["Youtube"], {
                                                        size: 24
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/about/page.tsx",
                                                        lineNumber: 93,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/about/page.tsx",
                                                    lineNumber: 87,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "https://github.com/Zan-getsu",
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    className: "text-gray-400 hover:text-white transition-colors",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__["Github"], {
                                                        size: 24
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/about/page.tsx",
                                                        lineNumber: 101,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/about/page.tsx",
                                                    lineNumber: 95,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/about/page.tsx",
                                            lineNumber: 62,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/about/page.tsx",
                                    lineNumber: 41,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/about/page.tsx",
                                lineNumber: 40,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/about/page.tsx",
                            lineNumber: 35,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                x: 20
                            },
                            animate: {
                                opacity: 1,
                                x: 0
                            },
                            transition: {
                                duration: 0.5,
                                delay: 0.4
                            },
                            className: "space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$glassmorphism$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    className: "p-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-2xl font-semibold mb-4 text-white",
                                            children: "My Story"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/about/page.tsx",
                                            lineNumber: 116,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-4 text-gray-300",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "I specialize in DaVinci Resolve, Premiere Pro, and After Effects — delivering cinematic edits, clean motion graphics, and polished visual storytelling. From smooth transitions to precise audio syncing and dynamic animations — I focus on making your content not just polished, but powerful."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/about/page.tsx",
                                                    lineNumber: 120,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "If you're looking for someone who blends creativity with technical skill, communicates clearly, and truly cares about making your content stand out — I'm your guy."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/about/page.tsx",
                                                    lineNumber: 127,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/about/page.tsx",
                                            lineNumber: 119,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/about/page.tsx",
                                    lineNumber: 115,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$glassmorphism$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    className: "p-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-2xl font-semibold mb-4 text-white",
                                            children: "Availability"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/about/page.tsx",
                                            lineNumber: 136,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2 text-gray-300",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "✅ Available for both short-term and long-term projects"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/about/page.tsx",
                                                    lineNumber: 140,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "✅ Flexible with time zones and deadlines"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/about/page.tsx",
                                                    lineNumber: 141,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "✅ Quick turnaround times without compromising quality"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/about/page.tsx",
                                                    lineNumber: 142,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/about/page.tsx",
                                            lineNumber: 139,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/about/page.tsx",
                                    lineNumber: 135,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/about/page.tsx",
                            lineNumber: 109,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/about/page.tsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: 0.5,
                        delay: 0.8
                    },
                    className: "mb-16",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$glassmorphism$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        className: "p-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-2xl font-semibold mb-8 text-white text-center",
                                children: "Trusted by Amazing Clients"
                            }, void 0, false, {
                                fileName: "[project]/src/app/about/page.tsx",
                                lineNumber: 156,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$marquee$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                speed: 40,
                                pauseOnHover: true,
                                className: "pt-4",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$clients$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clientsData"].map((client)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-shrink-0 flex flex-col items-center justify-center w-32 h-24",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative w-16 h-16 mb-2",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    src: client.logo,
                                                    alt: client.name,
                                                    fill: true,
                                                    className: "object-contain rounded-full transition-all duration-300"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/about/page.tsx",
                                                    lineNumber: 167,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/about/page.tsx",
                                                lineNumber: 166,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-gray-400 text-center",
                                                children: client.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/about/page.tsx",
                                                lineNumber: 174,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, client.id, true, {
                                        fileName: "[project]/src/app/about/page.tsx",
                                        lineNumber: 162,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/about/page.tsx",
                                lineNumber: 160,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/about/page.tsx",
                        lineNumber: 155,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/about/page.tsx",
                    lineNumber: 149,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CTASection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    title: "Ready to Work Together?",
                    description: "Let's create something amazing together. Whether it's a YouTube video, promotional content, or a full documentary, I'm here to bring your vision to life.",
                    buttonText: "Get In Touch",
                    href: "/contact"
                }, void 0, false, {
                    fileName: "[project]/src/app/about/page.tsx",
                    lineNumber: 184,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/about/page.tsx",
            lineNumber: 16,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/about/page.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_c = AboutPage;
var _c;
__turbopack_context__.k.register(_c, "AboutPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_403dce9b._.js.map