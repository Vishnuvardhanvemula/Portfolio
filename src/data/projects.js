export const projects = [
    {
        id: "casabliss",
        title: "Casa Bliss",
        subtitle: "Luxury Interior Concierge",
        year: "2024",
        description: "A bespoke, editorial web application built for an international luxury furniture and interior sourcing concierge. The platform blends architectural minimalism with interactive storytelling, bypassing traditional retail markups.",
        tags: ["Next.js 16", "React 19", "Tailwind v4", "TypeScript", "Framer Motion"],
        link: "https://casabliss.vercel.app/",
        github: "",
        image: "/projects/casabliss-preview.jpg",
        color: "from-stone-400 to-neutral-700",
        features: [
            {
                title: "60 FPS Animation",
                description: "Custom animation pipeline with dynamic horizontal scroll showcases and editorial parallax effects.",
                icon: "MonitorPlay"
            },
            {
                title: "Multi-Chapter Journey",
                description: "An interactive, narrative-driven sourcing journey to engage high-end interior designers and architects.",
                icon: "BookOpen"
            },
            {
                title: "Concierge Flow",
                description: "Intelligent multi-currency concierge inquiry flow for international clientele.",
                icon: "Globe"
            },
            {
                title: "Editorial Design",
                description: "Blends architectural minimalism with interactive storytelling for a premium feel.",
                icon: "Layout"
            }
        ],
        challenges: "Ensuring a consistently smooth 60 FPS experience across devices while maintaining high-fidelity architectural imagery and complex scroll-linked animations.",
        solution: "Leveraged Next.js App Router for optimized asset delivery, combined with Lenis for smooth scrolling and Framer Motion for highly optimized, hardware-accelerated animations."
    },
    {
        id: "finyatra",
        title: "FinYatra",
        subtitle: "Gamified Financial Literacy Platform",
        year: "2024",
        description: "A full-stack web application that gamifies financial education. Users complete structured modules, daily challenges, and use financial tools to earn XP and rewards — making finance actually fun.",
        tags: ["React", "Node.js", "MongoDB", "Express", "Framer Motion"],
        link: "#",
        github: "https://github.com/Vishnuvardhanvemula",
        image: "/projects/finyatra-preview.jpg",
        color: "from-green-400 to-emerald-600",
        features: [
            {
                title: "Learn",
                description: "Structured modules and daily challenges designed to make financial concepts easy to digest.",
                icon: "BookOpen"
            },
            {
                title: "Earn",
                description: "Progress rewards users with XP, streaks, and tiered Badges ranging from Common to Legendary.",
                icon: "Trophy"
            },
            {
                title: "Spend",
                description: "A premium XP Shop lets users buy cosmetic upgrades (Frames, Themes) and open Mystery Boxes.",
                icon: "ShoppingBag"
            },
            {
                title: "Engage",
                description: "High-polish UI with 3D tilt effects, animations, and a competitive leaderboard to drive retention.",
                icon: "Zap"
            }
        ],
        challenges: "Making finance 'fun' is hard. The main challenge was designing a gamification engine that felt rewarding without being distracting. I implemented a complex XP algorithm and a streak system using Redis for real-time updates.",
        solution: "Built a robust backend using Node.js and MongoDB to track user progress. The frontend uses React and Framer Motion for that 'juicy' game-feel, including 3D tilt effects on cards and particle animations for rewards."
    },
    {
        id: "cognitive-search",
        title: "Cognitive Search",
        subtitle: "RAG System for Documentation",
        year: "2024",
        description: "Retrieval-Augmented Generation system that transforms static documentation into an interactive knowledge base using vector embeddings and LLMs. Ask questions, get precise answers with citations.",
        tags: ["Python", "LangChain", "Vector DB", "OpenAI", "FastAPI"],
        link: "#",
        github: "https://github.com/Vishnuvardhanvemula",
        image: "/projects/rag-preview.jpg",
        color: "from-red-500 to-rose-700",
        features: [
            {
                title: "Ingest",
                description: "Upload any PDF, markdown, or URL. Documents are chunked, embedded, and stored in a vector database.",
                icon: "Upload"
            },
            {
                title: "Search",
                description: "Semantic search powered by OpenAI embeddings retrieves the most relevant context for any query.",
                icon: "Search"
            },
            {
                title: "Answer",
                description: "LLM synthesizes a precise, grounded answer with citations back to source documents.",
                icon: "MessageSquare"
            },
            {
                title: "Iterate",
                description: "Follow-up questions maintain conversation history for multi-turn document exploration.",
                icon: "RefreshCw"
            }
        ],
        challenges: "Balancing retrieval precision with response latency. Naive chunking destroys context; naive top-k retrieval floods the LLM with irrelevant text.",
        solution: "Implemented hierarchical chunking with sliding window overlap and a reranking step using cross-encoders before passing context to the LLM. Response latency dropped by 40%."
    },
    {
        id: "digi-karshakan",
        title: "Digi-Karshakan",
        subtitle: "Precision Agriculture Platform",
        year: "2024",
        description: "A precision agriculture platform with microservices covering crop recommendation, disease detection, fertilizer planning, RAG chatbot, and a Twilio voice agent.",
        tags: ["MERN", "Flask", "PyTorch", "LangChain", "RAG", "Twilio"],
        link: "#",
        github: "https://github.com/Vishnuvardhanvemula",
        image: "/projects/agri-preview.jpg",
        color: "from-yellow-400 to-orange-600",
        features: [
            {
                title: "Disease Classifier",
                description: "ResNet50 crop disease classifier identifying 38 classes of diseases using PyTorch.",
                icon: "Camera"
            },
            {
                title: "AI Agronomist",
                description: "LangChain + ChromaDB RAG chatbot with SHAP explainability for agronomy advice.",
                icon: "MessageSquare"
            },
            {
                title: "Voice Agent",
                description: "Multi-lingual PWA (EN/HI/TE) with Twilio voice integration using LLaMA and ElevenLabs.",
                icon: "Mic"
            },
            {
                title: "Weather & Soil",
                description: "Real-time weather risk dashboard integrated with satellite soil data.",
                icon: "Cloud"
            }
        ],
        challenges: "Running complex ML models and providing multi-lingual voice support for farmers.",
        solution: "Developed a PWA with conversational voice interface and integrated PyTorch models for classification."
    },
    {
        id: "rmc-club",
        title: "RMC Club",
        subtitle: "Club Management Platform",
        year: "2026",
        description: "A full-stack event management platform featuring role-based dashboards, real-time participant management, QR-code check-in, and end-to-end registration workflows.",
        tags: ["Next.js 16", "React 19", "Supabase", "Tailwind CSS", "Vercel"],
        link: "https://rmccbit.in",
        github: "",
        image: "/projects/rmc-preview.jpg",
        color: "from-indigo-400 to-purple-600",
        features: [
            {
                title: "Role-Based Dashboards",
                description: "Engineered admin and coordinator dashboards with JWT authentication for secure access.",
                icon: "Shield"
            },
            {
                title: "Real-Time Management",
                description: "Real-time participant management and seamless QR-code check-in for events.",
                icon: "QrCode"
            },
            {
                title: "Registration Workflow",
                description: "End-to-end registration workflow with secure payment verification.",
                icon: "CreditCard"
            },
            {
                title: "Automated Alerts",
                description: "Automated email confirmations via Nodemailer and Sentry error monitoring across API endpoints.",
                icon: "Mail"
            }
        ],
        challenges: "Handling real-time check-ins and ensuring a smooth end-to-end registration process for a large number of participants.",
        solution: "Utilized Supabase for real-time database capabilities and implemented a robust payment verification and QR-code system."
    }
];
