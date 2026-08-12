export const projects = [
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
        color: "from-violet-500 to-purple-700",
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
        id: "agrimind",
        title: "AgriMind",
        subtitle: "ML Crop Diagnostics",
        year: "2023",
        description: "Mobile-first diagnostic tool using computer vision to detect crop diseases and recommend treatments. Empowering farmers with AI — works offline on low-end devices.",
        tags: ["TensorFlow", "React Native", "Python", "IoT", "CNN"],
        link: "#",
        github: "https://github.com/Vishnuvardhanvemula",
        image: "/projects/agri-preview.jpg",
        color: "from-yellow-400 to-orange-600",
        features: [
            {
                title: "Diagnose",
                description: "Point your camera at a crop. The CNN model identifies diseases with 94% accuracy in under 2 seconds.",
                icon: "Camera"
            },
            {
                title: "Prescribe",
                description: "Each diagnosis comes with a treatment plan and nearby agrochemical vendor recommendations.",
                icon: "Pill"
            },
            {
                title: "Offline",
                description: "Model is quantized and bundled — works without internet in rural field conditions.",
                icon: "WifiOff"
            },
            {
                title: "IoT",
                description: "Integrates with soil sensors to correlate disease patterns with environmental data.",
                icon: "Activity"
            }
        ],
        challenges: "Running complex ML models on low-end mobile devices with no internet connection, and getting farmers to actually adopt a new tool.",
        solution: "Optimized the TensorFlow model using quantization and pruning to reduce size by 70% without accuracy loss. Built an extremely simple 3-step UI after user research with farmers."
    },
    {
        id: "placement-series",
        title: "Placement Series",
        subtitle: "Interview Prep Platform",
        year: "2025",
        description: "A comprehensive interview preparation platform with curated DSA problems, company-specific question banks, timed mock tests, and AI-powered solution explanations.",
        tags: ["Next.js", "PostgreSQL", "Prisma", "OpenAI", "Redis"],
        link: "#",
        github: "https://github.com/Vishnuvardhanvemula",
        image: "/projects/placement-preview.jpg",
        color: "from-cyan-400 to-blue-600",
        features: [
            {
                title: "Practice",
                description: "500+ curated DSA questions organized by topic, difficulty, and target company.",
                icon: "Code2"
            },
            {
                title: "Mock Tests",
                description: "Timed assessments that simulate real interview conditions with leaderboard rankings.",
                icon: "Timer"
            },
            {
                title: "AI Explanations",
                description: "GPT-4 powered explanations for every problem — understand the why, not just the what.",
                icon: "Sparkles"
            },
            {
                title: "Progress",
                description: "Visual dashboard tracks your weak areas and recommends a personalized study plan.",
                icon: "TrendingUp"
            }
        ],
        challenges: "Keeping question data fresh and accurate, and ensuring AI explanations are pedagogically sound rather than just technically correct.",
        solution: "Built a community contribution system for question validation and a fine-tuned prompt pipeline that structures explanations in a step-by-step teaching format."
    }
];
