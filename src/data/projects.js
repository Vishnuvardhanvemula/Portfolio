export const projects = [
    {
        id: "finyatra",
        title: "FinYatra",
        subtitle: "Gamified Financial Literacy Platform",
        description: "A full-stack web application that gamifies financial education. Users complete structured modules, daily challenges, and use financial tools to earn XP and rewards.",
        tags: ["React", "Node.js", "MongoDB", "Express", "Framer Motion"],
        link: "#",
        github: "#",
        image: "/projects/finlingo-preview.jpg", // Placeholder
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
        solution: "I built a robust backend using Node.js and MongoDB to track user progress. The frontend uses React and Framer Motion for that 'juicy' game-feel, including 3D tilt effects on cards and particle animations for rewards."
    },
    {
        id: "rag-system",
        title: "Cognitive Search",
        subtitle: "RAG System for Documentation",
        description: "Retrieval-Augmented Generation system that transforms static documentation into an interactive knowledge base using vector embeddings and LLMs.",
        tags: ["Python", "LangChain", "Vector DB", "OpenAI"],
        link: "#",
        github: "#",
        image: "/projects/rag-preview.jpg", // Placeholder
        color: "from-blue-400 to-indigo-600",
        features: [],
        challenges: "Reducing hallucination rates in technical documentation responses.",
        solution: "Implemented a hybrid search approach combining keyword search with semantic vector search."
    },
    {
        id: "campus-connect",
        title: "CampusConnect",
        subtitle: "AI-Enhanced Chat Platform",
        description: "Real-time messaging app for students with built-in AI sentiment analysis, topic summarization, and automated study group matching.",
        tags: ["WebSockets", "Next.js", "NLP", "Redis"],
        link: "#",
        github: "#",
        image: "/projects/chat-preview.jpg", // Placeholder
        color: "from-purple-400 to-pink-600",
        features: [],
        challenges: "Handling real-time WebSocket connections at scale.",
        solution: "Used Redis Pub/Sub to distribute messages across multiple server instances."
    },
    {
        id: "agrimind",
        title: "AgriMind",
        subtitle: "ML Crop Diagnostics",
        description: "Mobile-first diagnostic tool using computer vision to detect crop diseases and recommend treatments. Empowering farmers with AI.",
        tags: ["TensorFlow", "React Native", "Python", "IoT"],
        link: "#",
        github: "#",
        image: "/projects/agri-preview.jpg", // Placeholder
        color: "from-yellow-400 to-orange-600",
        features: [],
        challenges: "Running complex ML models on low-end mobile devices.",
        solution: "Optimized the TensorFlow model using quantization to reduce size and inference time."
    }
];
