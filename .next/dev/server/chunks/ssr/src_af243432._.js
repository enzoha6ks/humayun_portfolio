module.exports = [
"[project]/src/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}),
"[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
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
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
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
;
}),
"[project]/src/components/ui/badge.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge,
    "badgeVariants",
    ()=>badgeVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden", {
    variants: {
        variant: {
            default: "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
            secondary: "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
            destructive: "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Badge({ className, variant, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : "span";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "badge",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/badge.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/src/components/glassmorphism-card.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GlassmorphismCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
"use client";
;
;
function GlassmorphismCard({ children, className = "", hover = true }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
}),
"[project]/src/db/clients.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/src/db/projects.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/src/lib/helper.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$clients$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/db/clients.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$projects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/db/projects.ts [app-ssr] (ecmascript)");
;
;
const getAllVideoProjects = ()=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$projects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["allVideoProjects"].sort((a, b)=>new Date(b.publish_date).getTime() - new Date(a.publish_date).getTime());
};
const getVideoProjectsByCategory = (category)=>{
    if (category === "All") {
        return getAllVideoProjects();
    }
    const filteredProjects = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$projects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["allVideoProjects"].filter((project)=>project.category.includes(category));
    return filteredProjects.sort((a, b)=>new Date(b.publish_date).getTime() - new Date(a.publish_date).getTime());
};
const getVideoProjectById = (id)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$projects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["allVideoProjects"].find((project)=>project.id === id);
};
const getVideoCategories = ()=>{
    const categoriesSet = new Set();
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$projects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["allVideoProjects"].forEach((project)=>{
        project.category.forEach((cat)=>categoriesSet.add(cat));
    });
    return Array.from(categoriesSet);
};
const getVideoCategoriesWithCount = ()=>{
    const categoryCountMap = new Map();
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$projects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["allVideoProjects"].forEach((project)=>{
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
    const total = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$projects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["allVideoProjects"].length;
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
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$clients$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clientsData"];
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
    "Talking Head": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$projects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["allVideoProjects"].filter((p)=>p.category.includes("Talking Head")),
    Shorts: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$projects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["allVideoProjects"].filter((p)=>p.category.includes("Shorts")),
    Promo: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$projects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["allVideoProjects"].filter((p)=>p.category.includes("Promo")),
    Documentary: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$projects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["allVideoProjects"].filter((p)=>p.category.includes("Documentary")),
    Explainer: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$projects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["allVideoProjects"].filter((p)=>p.category.includes("Explainer")),
    "Motion Graphics": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$projects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["allVideoProjects"].filter((p)=>p.category.includes("Motion Graphics")),
    Animation: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$projects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["allVideoProjects"].filter((p)=>p.category.includes("Animation"))
};
}),
"[project]/src/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$glassmorphism$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/glassmorphism-card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mouse$2d$move$2d$effect$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/mouse-move-effect.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-ssr] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-ssr] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-ssr] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$helper$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/helper.ts [app-ssr] (ecmascript)");
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
;
;
const categories = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$helper$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getVideoCategoriesWithCountIncludingAll"])();
function HomePage() {
    const [selectedCategory, setSelectedCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("All");
    const [displayedProjects, setDisplayedProjects] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [allProjects, setAllProjects] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hasMore, setHasMore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const ITEMS_PER_PAGE = 9;
    // Load projects for selected category
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const projects = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$helper$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getVideoProjectsByCategory"])(selectedCategory);
        setAllProjects(projects);
        setDisplayedProjects(projects.slice(0, ITEMS_PER_PAGE));
        setCurrentPage(1);
        setHasMore(projects.length > ITEMS_PER_PAGE);
    }, [
        selectedCategory
    ]);
    // Load more projects
    const loadMoreProjects = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (loading || !hasMore) return;
        setLoading(true);
        setTimeout(()=>{
            const nextPage = currentPage + 1;
            const startIndex = (nextPage - 1) * ITEMS_PER_PAGE;
            const endIndex = startIndex + ITEMS_PER_PAGE;
            const newProjects = allProjects.slice(startIndex, endIndex);
            setDisplayedProjects((prev)=>[
                    ...prev,
                    ...newProjects
                ]);
            setCurrentPage(nextPage);
            setHasMore(endIndex < allProjects.length);
            setLoading(false);
        }, 500);
    }, [
        currentPage,
        allProjects,
        loading,
        hasMore
    ]);
    // Infinite scroll for non-"All" categories
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (selectedCategory === "All") return;
        const handleScroll = ()=>{
            if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 1000) {
                loadMoreProjects();
            }
        };
        window.addEventListener("scroll", handleScroll);
        return ()=>window.removeEventListener("scroll", handleScroll);
    }, [
        selectedCategory,
        loadMoreProjects
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mouse$2d$move$2d$effect$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "projects",
                className: "py-20 px-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-4xl md:text-5xl font-bold mb-6 text-white",
                                    children: "My Video Projects"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 89,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-300 text-lg max-w-3xl mx-auto mb-8",
                                    children: "From smooth transitions to precise audio syncing and dynamic animations — I focus on making your content not just polished, but powerful."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 92,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 83,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                delay: 0.2
                            },
                            className: "flex flex-wrap justify-center gap-4 mb-12",
                            children: categories.map(({ category, count })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: ()=>setSelectedCategory(category),
                                    size: "sm",
                                    className: `
                  relative border cursor-pointer
                  ${selectedCategory === category ? "bg-[#020817] text-white border-white" : "bg-white/10 text-white border-white/20 hover:bg-white/20"}
                `,
                                    children: [
                                        category,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "absolute top-[-6px] right-[-6px] bg-slate-500 text-white text-[10px] px-1.5 py-0.5 rounded-full",
                                            children: count
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 146,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, category, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 132,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 125,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            layout: true,
                            className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8",
                            children: displayedProjects.map((project, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                    layout: true,
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
                                        delay: index * 0.1
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/project/${project.id}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$glassmorphism$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            className: "p-6 h-full cursor-pointer group",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-4 h-full flex flex-col",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative overflow-hidden rounded-lg",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                src: `https://img.youtube.com/vi/${project.cover_image}/maxresdefault.jpg`,
                                                                alt: project.video_title,
                                                                width: 400,
                                                                height: 225,
                                                                className: "w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 170,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                                                    className: "text-white",
                                                                    size: 48
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/page.tsx",
                                                                    lineNumber: 178,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 177,
                                                                columnNumber: 25
                                                            }, this),
                                                            project.duration && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded",
                                                                children: project.duration
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 181,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 169,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "text-xl font-semibold mb-2 text-white group-hover:text-blue-400 transition-colors line-clamp-2",
                                                                children: project.video_title
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 188,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-gray-300 text-sm mb-4 line-clamp-3",
                                                                children: project.video_description
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 191,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center space-x-4 text-xs text-gray-400 mb-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center space-x-1",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                                                size: 12
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/page.tsx",
                                                                                lineNumber: 197,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: project.client_name
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/page.tsx",
                                                                                lineNumber: 198,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/page.tsx",
                                                                        lineNumber: 196,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center space-x-1",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                                                size: 12
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/page.tsx",
                                                                                lineNumber: 201,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: new Date(project.publish_date).toLocaleDateString()
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/page.tsx",
                                                                                lineNumber: 202,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/page.tsx",
                                                                        lineNumber: 200,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 195,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex flex-wrap gap-2 mb-4",
                                                                children: project.category.slice(0, 3).map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                                        variant: "outline",
                                                                        className: "text-xs border-gray-600 text-gray-300",
                                                                        children: category
                                                                    }, category, false, {
                                                                        fileName: "[project]/src/app/page.tsx",
                                                                        lineNumber: 212,
                                                                        columnNumber: 29
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 210,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 187,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "pt-4 border-t border-white/20",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-between",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center space-x-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                            src: project.client_image || "/placeholder.svg",
                                                                            alt: project.client_name,
                                                                            width: 24,
                                                                            height: 24,
                                                                            className: "rounded-full"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/page.tsx",
                                                                            lineNumber: 226,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-sm text-gray-400",
                                                                            children: project.client_name
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/page.tsx",
                                                                            lineNumber: 233,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/page.tsx",
                                                                    lineNumber: 225,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                                    size: "sm",
                                                                    className: "bg-white/10 text-white border-white/20 hover:bg-white/20 cursor-pointer",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                                                            size: 14,
                                                                            className: "mr-1"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/page.tsx",
                                                                            lineNumber: 241,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        "Watch Now"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/page.tsx",
                                                                    lineNumber: 237,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 224,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 223,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 168,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 167,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 166,
                                        columnNumber: 17
                                    }, this)
                                }, project.id, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 159,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 154,
                            columnNumber: 11
                        }, this),
                        selectedCategory === "All" && hasMore && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            className: "text-center mt-12",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: loadMoreProjects,
                                disabled: loading,
                                size: "lg",
                                className: "border cursor-pointer",
                                children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                            className: "mr-2 h-4 w-4 animate-spin"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 268,
                                            columnNumber: 21
                                        }, this),
                                        "Loading..."
                                    ]
                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        "Load More Projects",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                            className: "ml-2",
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 274,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 260,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 255,
                            columnNumber: 13
                        }, this),
                        selectedCategory !== "All" && loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            className: "text-center mt-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                    className: "h-8 w-8 animate-spin mx-auto text-blue-400"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 288,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-400 mt-2",
                                    children: "Loading more projects..."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 289,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 283,
                            columnNumber: 13
                        }, this),
                        displayedProjects.length === 0 && !loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            className: "text-center py-12",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-400 text-lg",
                                children: "No projects found in this category."
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 299,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 294,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 82,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-20 px-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-6xl mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-4xl md:text-5xl font-bold mb-6 text-white",
                                    children: "What I Can Do for You"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 316,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-300 text-lg max-w-3xl mx-auto",
                                    children: "If you're looking for someone who blends creativity with technical skill, communicates clearly, and truly cares about making your content stand out — I'm your guy."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 319,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 310,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8",
                            children: [
                                {
                                    title: "YouTube & Social Media Video Editing",
                                    description: "Engaging edits optimized for different platforms with perfect pacing and retention hooks.",
                                    icon: "🎬"
                                },
                                {
                                    title: "Course & Tutorial Video Editing",
                                    description: "Clear, educational content with smooth transitions and professional presentation.",
                                    icon: "📚"
                                },
                                {
                                    title: "Motion Graphics & Animated Titles",
                                    description: "Eye-catching animations and graphics that enhance your storytelling.",
                                    icon: "✨"
                                },
                                {
                                    title: "Color Correction & Grading",
                                    description: "Professional color work that gives your videos a cinematic and polished look.",
                                    icon: "🎨"
                                },
                                {
                                    title: "Logo Animations & Lower Thirds",
                                    description: "Professional branding elements that make your content look premium.",
                                    icon: "🏷️"
                                },
                                {
                                    title: "Audio Sync & Cleanup",
                                    description: "Crystal clear audio with perfect synchronization and noise reduction.",
                                    icon: "🎵"
                                }
                            ].map((service, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                        delay: index * 0.1
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$glassmorphism$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        className: "p-6 text-center h-full",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-4xl mb-4",
                                                children: service.icon
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 372,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-xl font-semibold mb-3 text-white",
                                                children: service.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 373,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-400",
                                                children: service.description
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 376,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 371,
                                        columnNumber: 17
                                    }, this)
                                }, service.title, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 365,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 326,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 309,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 308,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 77,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_af243432._.js.map