import type { AssetDetail, HeroProfile, Mission } from "../types/models";

export const missions: Mission[] = [
    {
        title: "Combat Misinformation",
        tagline: "Stand for truth. Lead with science.",
        image: "/img/combat-logo.jpeg",
        intro: "Building Sustainability on Facts, Not Myths",
        steps: [
            {
                title: "Why This Mission Exists",
                sections: [
                    {
                        text: "Environmental sustainability is one of the most discussed global topics, and also one of the most misunderstood.",
                    },
                    { text: "Public conversations are often shaped by:" },
                    {
                        bullets: [
                            "Oversimplified narratives",
                            "Emotional or moral pressure",
                            "Repeated claims that lack scientific validation",
                        ],
                    },
                    {
                        text: "These distortions lead to **ineffective actions**, misplaced trust, and policies that fail to deliver real environmental benefits.",
                    },
                    {
                        text: "**BE GREEN HEROES (BGH) exists to correct this problem at its root: knowledge.**",
                    },
                ],
            },
            {
                title: 'What We Mean by "Misinformation"',
                sections: [
                    {
                        text: "Misinformation in sustainability does not always come from bad intentions. It often arises from:",
                    },
                    {
                        bullets: [
                            'Selective use of data (single metrics like "carbon only")',
                            "Misinterpretation of scientific studies",
                            "Marketing claims presented as environmental facts",
                            "Popular beliefs repeated until they feel true",
                        ],
                    },
                    {
                        text: "BGH treats misinformation as a **systemic issue**, not a personal failure.",
                    },
                ],
            },
            {
                title: "The BGH Approach: Science Before Action",
                sections: [
                    {
                        text: "BGH combats misinformation by grounding every learning pathway in:",
                    },
                    {
                        bullets: [
                            "**Lifecycle thinking** (materials, production, use, and end-of-life)",
                            "**Evidence-based analysis**, not slogans",
                            '**Contextual understanding**, not binary "good vs bad" labels',
                        ],
                    },
                    { text: "Participants are encouraged to question:" },
                    {
                        bullets: [
                            "What problem is actually being solved?",
                            "What trade-offs exist?",
                            "What evidence supports this claim?",
                        ],
                    },
                    {
                        text: "This approach replaces emotional reactions with **informed judgment.**",
                    },
                ],
            },
            {
                title: "From Learning to Impact",
                sections: [
                    {
                        text: "Combatting misinformation is not passive learning. In the BGH ecosystem:",
                    },
                    {
                        bullets: [
                            "Learners **earn Green Hero Coins (GHC)** for verified knowledge engagement",
                            "Participation is tied to **understanding**, not opinions",
                            "Governance rights are **earned, not bought**",
                        ],
                    },
                    {
                        text: "This ensures that influence within BGH reflects **credibility and comprehension**, not popularity or capital.",
                    },
                ],
            },
            {
                title: "Why This Matters",
                sections: [
                    { text: "When misinformation dominates:" },
                    {
                        bullets: [
                            "Well-intentioned actions can cause unintended harm",
                            "Resources are misallocated",
                            "Trust in sustainability collapses",
                        ],
                    },
                    {
                        text: "By restoring clarity and scientific discipline, BGH helps build:",
                    },
                    {
                        bullets: [
                            "More effective environmental action",
                            "More resilient governance",
                            "A sustainability ecosystem that can scale globally",
                        ],
                    },
                ],
            },
            {
                title: "Ready to Begin the Journey?",
                sections: [
                    { text: "Every Green Hero starts with a single step." },
                    {
                        bullets: [
                            "**Start learning**",
                            "**Engage responsibly**",
                            "**Contribute meaningfully**",
                        ],
                    },
                ],
            },
        ],
    },
    {
        title: "Earn Green Hero Coins",
        tagline: "Turn knowledge into tangible rewards.",
        image: "/img/G-logo.jpeg",
        intro: "Learning That Creates Real Value",
        steps: [
            {
                title: "What Are Green Hero Coins?",
                sections: [
                    {
                        text: "Green Hero Coins (GHC) are **utility-based participation tokens** within the BE GREEN HEROES (BGH) ecosystem.",
                    },
                    {
                        text: "They are **not rewards for spending**, speculation, or popularity. They are earned through **verified learning and meaningful engagement** with science-based sustainability content.",
                    },
                    {
                        text: "In BGH, **knowledge is the entry point to value**",
                    },
                ],
            },
            {
                title: "How You Earn Green Hero Coins",
                sections: [
                    {
                        text: "Participants earn GHC by completing structured learning activities that demonstrate:",
                    },
                    {
                        bullets: [
                            "Understanding of environmental systems",
                            "Ability to evaluate sustainability claims critically",
                            "Engagement with evidence-based content",
                        ],
                    },
                    { text: "Examples include:" },
                    {
                        bullets: [
                            "Completing learning modules",
                            "Passing comprehension checks",
                            "Participating in guided knowledge pathways",
                        ],
                    },
                    {
                        text: "Every earning mechanism is designed to reflect **effort, understanding, and integrity.**",
                    },
                ],
            },
            {
                title: "Why Learning Is the Reward Mechanism",
                sections: [
                    { text: "Most digital ecosystems reward:" },
                    {
                        bullets: ["Capital", "Speed", "Visibility"],
                    },
                    { text: "BGH rewards something different:" },
                    {
                        bullets: [
                            "**Credibility**",
                            "**Consistency**",
                            "**Comprehension**",
                        ],
                    },
                    {
                        text: "By linking tokens to learning, BGH ensures that:",
                    },
                    {
                        bullets: [
                            "Participation grows with understanding",
                            "Influence is earned, not purchased",
                            "The ecosystem remains resilient against hype and misinformation",
                        ],
                    },
                ],
            },
            {
                title: "What Green Hero Coins Represent",
                sections: [
                    { text: "Green Hero Coins represent:" },
                    {
                        bullets: [
                            "Verified participation in the BGH learning ecosystem",
                            "A growing base of shared knowledge",
                            "A pathway toward future governance participation",
                        ],
                    },
                    {
                        text: "They are designed to **reflect contribution**, not financial speculation.",
                    },
                ],
            },
            {
                title: "Who Can Earn Green Hero Coins?",
                sections: [
                    { text: "BGH is built for global inclusion." },
                    {
                        bullets: [
                            "Learners aged 15+ may participate through safeguarded learning structures",
                            "No prior expertise is required",
                            "No financial commitment is necessary to begin",
                        ],
                    },
                    {
                        text: "BGH removes barriers so learning can come first.",
                    },
                ],
            },
            {
                title: "From Learning to Participation",
                sections: [
                    {
                        text: "Earning Green Hero Coins is the first step toward deeper involvement in the BGH ecosystem.",
                    },
                    { text: "As participation grows, learners may:" },
                    {
                        bullets: [
                            "Unlock additional learning paths",
                            "Qualify for future participation layers",
                            "Contribute to a global, knowledge-driven sustainability network",
                        ],
                    },
                ],
            },
            {
                title: "Ready to Begin the Journey?",
                sections: [
                    { text: "Every Green Hero starts with a single step." },
                    {
                        bullets: [
                            "**Start learning**",
                            "**Engage responsibly**",
                            "**Contribute meaningfully**",
                        ],
                    },
                ],
            },
        ],
    },
    {
        title: "Participate in operational decision-making",
        tagline: "Shape the future with your voice.",
        image: "/img/operation-logo.jpeg",
        intro: "Turning Knowledge Into Collective Action",
        steps: [
            {
                title: 'What Does "Operational Decision-Making" Mean at BGH?',
                sections: [
                    {
                        text: "Operational decision-making within BE GREEN HEROES (BGH) refers to **structured participation in how the ecosystem evolves.**",
                    },
                    {
                        text: "This is **not political voting**, financial control, or real-time management. It is **guided input** into clearly defined operational areas where informed perspectives improve outcomes.",
                    },
                    {
                        text: "BGH believes that **those who learn should help shape what comes next.**",
                    },
                ],
            },
            {
                title: "Who Can Participate?",
                sections: [
                    {
                        text: "Participation is **earned, not automatic**. Eligibility is based on:",
                    },
                    {
                        bullets: [
                            "Verified learning progress",
                            "Consistent engagement with BGH programs",
                            "Demonstrated understanding of ecosystem principles",
                        ],
                    },
                    {
                        text: "This ensures that operational input reflects **knowledge, not noise.**",
                    },
                ],
            },
            {
                title: "What Participants Can Influence",
                sections: [
                    {
                        text: "Depending on qualification level, participants may contribute to decisions related to:",
                    },
                    {
                        bullets: [
                            "Program priorities and focus areas",
                            "Educational pathway improvements",
                            "Community guidelines and participation rules",
                            "Operational frameworks for future initiatives",
                        ],
                    },
                    {
                        text: "Each decision scope is **clearly defined**, time-bound, and transparent",
                    },
                ],
            },
            {
                title: "Why BGH Uses Participatory Operations",
                sections: [
                    {
                        text: "Most systems centralize decisions or outsource them to speculation. BGH takes a different approach:",
                    },
                    {
                        bullets: [
                            "Decisions are informed by learning",
                            "Participation grows with understanding",
                            "Authority is distributed responsibly",
                        ],
                    },
                    { text: "This creates an ecosystem that is:" },
                    {
                        bullets: [
                            "More resilient",
                            "Less vulnerable to misinformation",
                            "Aligned with long-term sustainability goals",
                        ],
                    },
                ],
            },
            {
                title: "How Participation Works in Practice",
                sections: [
                    {
                        text: "Operational participation follows a structured process:",
                    },
                    {
                        text: "**Issue Definition:** BGH clearly defines the topic and scope.",
                    },
                    {
                        text: "**Context & Learning Materials:** Participants receive background information to ensure informed input.",
                    },
                    {
                        text: "**Guided Participation Window:** Input is collected within a defined timeframe.",
                    },
                    {
                        text: "**Outcome Transparency:** Results and rationales are published for accountability. This process prioritizes **clarity, fairness, and traceability.**",
                    },
                ],
            },
            {
                title: "What This Is Not",
                sections: [
                    {
                        text: "To avoid confusion, operational participation is **not**:",
                    },
                    {
                        bullets: [
                            "Day-to-day management",
                            "Financial control or investment voting",
                            "Open-ended or unmoderated decision-making",
                        ],
                    },
                    {
                        text: "BGH participation is **purposeful, structured, and mission-aligned.**",
                    },
                ],
            },
            {
                title: "From Learning to Leadership",
                sections: [
                    {
                        text: "Operational participation represents a **natural progression** within BGH:",
                    },
                    {
                        text: "**Learning → Contribution → Participation → Stewardship**",
                    },
                    {
                        text: "It allows committed participants to help shape a system built on:",
                    },
                    {
                        bullets: ["Science", "Trust", "Shared responsibility"],
                    },
                ],
            },
            {
                title: "Ready to Begin the Journey?",
                sections: [
                    { text: "Every Green Hero starts with a single step." },
                    {
                        bullets: [
                            "**Start learning**",
                            "**Engage responsibly**",
                            "**Contribute meaningfully**",
                        ],
                    },
                ],
            },
        ],
    },
    {
        title: "Become Green Hero",
        tagline: "Knowledge is your superpower.",
        image: "/img/bgh-logo.jpeg",
        intro: "From Participation to Purpose",
        steps: [
            {
                title: 'What Does It Mean to "Be Green Heroes"?',
                sections: [
                    {
                        text: "Being a Green Hero is **not a title**, a status symbol, or a reward label. It represents a **recognized role within the BGH ecosystem** for individuals who consistently act with:",
                    },
                    {
                        bullets: [
                            "Knowledge",
                            "Integrity",
                            "Responsibility",
                            "Long-term commitment to sustainability",
                        ],
                    },
                    {
                        text: "Green Heroes embody the values BGH is designed to protect.",
                    },
                ],
            },
            {
                title: "Green Heroes Are Not Created — They Emerge",
                sections: [
                    {
                        text: "BGH does not assign hero status automatically. Green Heroes emerge through:",
                    },
                    {
                        bullets: [
                            "Continuous learning",
                            "Responsible participation",
                            "Constructive contribution to the ecosystem",
                        ],
                    },
                    {
                        text: 'This ensures the term "Green Hero" retains **meaning, credibility, and trust.**',
                    },
                ],
            },
            {
                title: "What Green Heroes Represent",
                sections: [
                    { text: "Green Heroes serve as:" },
                    {
                        bullets: [
                            "Ambassadors of accurate information",
                            "Role models for responsible participation",
                            "Contributors to a healthier digital and environmental ecosystem",
                        ],
                    },
                    {
                        text: "Their presence strengthens the **culture** of BGH, not just its mechanics.",
                    },
                ],
            },
            {
                title: "Responsibilities of Green Heroes",
                sections: [
                    {
                        text: "With recognition comes responsibility. Green Heroes are expected to:",
                    },
                    {
                        bullets: [
                            "Promote evidence-based understanding",
                            "Act against misinformation",
                            "Support constructive dialogue",
                            "Uphold BGH principles in public and private spaces",
                        ],
                    },
                    {
                        text: "This role is **earned and maintained**, not permanent by default.",
                    },
                ],
            },
            {
                title: "Recognition Without Centralized Authority",
                sections: [
                    {
                        text: 'BGH avoids centralized "approval systems" for hero status. Instead, recognition is based on:',
                    },
                    {
                        bullets: [
                            "Transparent criteria",
                            "Observable contribution patterns",
                            "Community-aligned behavior",
                        ],
                    },
                    { text: "This model prevents:" },
                    {
                        bullets: [
                            "Gatekeeping",
                            "Arbitrary promotion",
                            "Reputation inflation",
                        ],
                    },
                ],
            },
            {
                title: "Why This Matters",
                sections: [
                    {
                        text: "Many systems reward visibility or speculation. BGH recognizes:",
                    },
                    {
                        bullets: [
                            "Consistency over noise",
                            "Knowledge over hype",
                            "Responsibility over influence",
                        ],
                    },
                    {
                        text: "By doing so, BGH protects its mission while empowering individuals who genuinely contribute.",
                    },
                ],
            },
            {
                title: "Becoming a Green Hero",
                sections: [
                    {
                        text: "There is no single action that makes someone a Green Hero. It is the **result of a journey:**",
                    },
                    {
                        text: "**Learning → Earning → Participating → Acting with Purpose**",
                    },
                    { text: "Each step reinforces the next." },
                ],
            },
            {
                title: "A Living Role, Not a Label",
                sections: [
                    {
                        text: "Green Hero status evolves as the ecosystem evolves. This ensures:",
                    },
                    {
                        bullets: [
                            "Relevance over time",
                            "Alignment with new challenges",
                            "Continuous growth of the community",
                        ],
                    },
                    {
                        text: "Being a Green Hero means **growing with the mission.**",
                    },
                ],
            },
            {
                title: "Ready to Begin the Journey?",
                sections: [
                    { text: "Every Green Hero starts with a single step." },
                    {
                        bullets: [
                            "**Start learning**",
                            "**Engage responsibly**",
                            "**Contribute meaningfully**",
                        ],
                    },
                ],
            },
        ],
    },
];

export const heroes: Record<string, HeroProfile> = {
    mia: {
        name: "Mia",
        symbol: "🌸",
        role: "The Caring Catalyst",
        image: "/img/mia.png",
        descriptor:
            "Mia represents empathy, participation, and positive engagement. She symbolizes how understanding leads to care, and how care translates into meaningful participation within the ecosystem.",
        contexts: [
            "Community participation",
            "Behavioral change messaging",
            "Action-oriented learning moments",
        ],
    },
    elio: {
        name: "Elio",
        symbol: "🌿",
        role: "The Knowledge Guide",
        image: "/img/elio.png",
        descriptor:
            "Elio represents analytical thinking, scientific understanding, and responsible decision-making within the BE GREEN HEROES ecosystem. He symbolizes the role of knowledge as the foundation for sustainable participation and long-term governance.",
        contexts: [
            "Core educational materials",
            "Scientific explanations",
            "Governance and system-level concepts",
        ],
    },
    lina: {
        name: "Lina",
        symbol: "🌱",
        role: "The Ethical Anchor",
        image: "/img/lina.png",
        descriptor:
            "Lina represents balance, integrity, and continuity in sustainability thinking. She embodies ethical reflection, long-term perspective, and the integration of knowledge into responsible action.",
        contexts: [
            "Ethical frameworks",
            "Lifecycle thinking",
            "Sustainability decision narratives",
        ],
    },
    niko: {
        name: "Niko",
        symbol: "🌼",
        role: "The Curious Explorer",
        image: "/img/niko.png",
        descriptor:
            "Niko represents curiosity, discovery, and the learning process itself. He symbolizes the importance of asking questions, exploring new ideas, and developing understanding through engagement.",
        contexts: [
            "Learning journeys",
            "Introductory modules",
            "Discovery-oriented content",
        ],
    },
};

export const assets: Record<string, AssetDetail> = {
    bgh: {
        title: "BGH Circular Emblem (Non-Token Representative Logo)",
        image: "/img/bgh-logo.jpeg",
        circular: true,
        sections: [
            {
                heading: "Design Signification",
                body: "The enclosing circular motion represents ecosystem continuity and governance evolution. The leaf embedded within the circle reflects growth guided by science.",
            },
            {
                heading: "Usage Guidance",
                body: "Use as a program identifier for institutional or ecosystem-level representation. Not to be used for coin-specific or governance-specific labeling.",
            },
        ],
    },
    bgh1: {
        title: "BGH Lettermark- Multi-Color",
        image: "/img/bgh-1.png",
        sections: [
            {
                heading: "Design Signification",
                body: "Green symbolizes environmental sustainability, blue represents science and trust, and the flowing wave expresses continuity and forward motion.",
            },
            {
                heading: "Usage Guidance",
                body: "Primary brand logo for official communications, website headers, and public-facing materials where full brand identity is required.",
            },
        ],
    },
    bgh2: {
        title: "BGH Lettermark - Single Color",
        image: "/img/bgh-2.png",
        sections: [
            {
                heading: "Design Signification",
                body: "A minimal sustainability-forward identity emphasizing environmental commitment through a unified green tone.",
            },
            {
                heading: "Usage Guidance",
                body: "Use for sustainability-focused campaigns, monochrome applications, or when printing constraints require a single-color version.",
            },
        ],
    },
    bgh3: {
        title: "BGH Lettermark – Letter only",
        image: "/img/bgh-3.png",
        sections: [
            {
                heading: "Design Signification",
                body: "Balances sustainability with scientific credibility, representing BGH’s education-based governance model in a letter-only design.",
            },
            {
                heading: "Usage Guidance",
                body: "Use selectively for digital applications, presentations, and investor-facing materials where brand sophistication and simplicity are desired.",
            },
        ],
    },
    gToken: {
        title: "BGH Token Symbol (Token-Optimized Circular Logo)",
        image: "/img/g-leaf-logo.png",
        circular: true,
        sections: [
            {
                heading: "Design Signification",
                body: "The circular format reinforces token recognition across digital platforms, while the integrated G and leaf represent environmental responsibility, governance structure, and long-term value stewardship.",
            },
            {
                heading: "Usage Guidance",
                body: "Designed for wallets, blockchain explorers, exchanges, and token-identification contexts. The symbol must not be altered, recolored, distorted, or used to imply financial guarantees.",
            },
        ],
    },
    gNonToken: {
        title: "BGH Ecosystem Coin Symbol (Non-Token Mark)",
        image: "/img/G-logo.jpeg",
        circular: true,
        sections: [
            {
                heading: "Design Signification",
                body: "The non-circular structure distinguishes ecosystem participation identity from market token representation. The integrated G and leaf reflect knowledge-based participation and governance integrity.",
            },
            {
                heading: "Usage Guidance",
                body: "Designed for educational materials, governance documentation, and ecosystem participation contexts. It does not represent a tradable token.",
            },
        ],
    },
    mc: {
        title: "MC — Market Coin",
        image: "/img/mc.jpeg",
        circular: true,
        sections: [
            {
                body: "A Market Coin represents the market-facing token layer of the BGH ecosystem and reflects broader ecosystem recognition and participation beyond internal utility functions.",
            },
            {
                heading: "Category Structure",
                body: "MC includes MC-o (original issuance) and MC-c (converted from UC).",
            },
            {
                heading: "Governance Relevance",
                body: "MC does not independently confer governance authority unless otherwise specified within the BGH governance framework.",
            },
        ],
    },
    mcc: {
        title: "MC-c — Market Coin (Converted)",
        image: "/img/mcc.jpeg",
        circular: true,
        sections: [
            {
                body: "A Market Coin (Converted) refers to MC units obtained through the structured conversion of eligible Utility Coins under defined ecosystem rules.",
            },
            {
                heading: "Category Structure",
                body: "MC-c is a subset of the MC category derived from UC conversion pathways.",
            },
            {
                heading: "Governance Relevance",
                body: "MC-c does not inherently grant governance participation rights unless explicitly designated within the BGH governance framework.",
            },
        ],
    },
    mco: {
        title: "MC-o — Market Coin (Original)",
        image: "/img/mco.jpeg",
        circular: true,
        sections: [
            {
                body: "A Market Coin (Original) refers to MC units issued or acquired independently of Utility Coin conversion pathways.",
            },
            {
                heading: "Category Structure",
                body: "MC-o is a primary subset within the MC category.",
            },
            {
                heading: "Governance Relevance",
                body: "MC-o does not inherently grant governance participation rights unless explicitly designated within the BGH governance framework.",
            },
        ],
    },
    uc: {
        title: "UC - Utility Coin*",
        image: "/img/uc.jpeg",
        circular: true,
        sections: [
            {
                body: "A Utility Coin represents verified participation within the BGH learning ecosystem. It is earned through structured engagement and knowledge-based activities, not purchased for speculative purposes.",
            },
            {
                heading: "Category Structure",
                body: "UC is the umbrella category encompassing p-UC, m-UC, and v-UC.",
            },
            {
                heading: "Governance Relevance",
                body: "UC serves as the foundational governance instrument within the BGH ecosystem, enabling eligible holders to participate in operational and strategic decision-making processes.",
            },
        ],
    },
    muc: {
        title: "m-UC - Mined Utility Coin",
        image: "/img/muc.jpeg",
        circular: true,
        sections: [
            {
                body: "A Mined Utility Coin is a Utility Coin earned through the completion of validated learning milestones and participation protocols established by BGH.",
            },
            {
                heading: "Category Structure",
                body: "m-UC is a fully qualified subset of the UC category.",
            },
            {
                heading: "Governance Relevance",
                body: "m-UC carries full governance participation eligibility, subject to compliance with ecosystem requirements.",
            },
        ],
    },
    puc: {
        title: "p-UC — Provisional Utility Coin",
        image: "/img/puc.jpeg",
        circular: true,
        sections: [
            {
                body: "A Provisional Utility Coin is granted to participants who meet learning and participation requirements but are subject to legal age restrictions in their jurisdictions.",
            },
            {
                heading: "Category Structure",
                body: "p-UC is a fully recognized subset within the UC category.",
            },
            {
                heading: "Governance Relevance",
                body: "p-UC grants governance participation rights. It cannot be traded, transferred, or exchanged until the holder reaches the legal age of majority.",
            },
        ],
    },
    vuc: {
        title: "v-UC — Virtual Utility Coin",
        image: "/img/vuc.jpeg",
        circular: true,
        sections: [
            {
                body: "A Virtual Utility Coin is a governance instrument held and utilized by the BGH Organization to ensure operational continuity and structural stability during early and transitional phases.",
            },
            {
                heading: "Category Structure",
                body: "v-UC is a governance-class subset within the UC framework, distinct from participant-earned Utility Coins.",
            },
            {
                heading: "Governance Relevance",
                body: "Under progressive decentralization, v-UC voting power decreases as participant-earned m-UC increases, gradually transferring decision-making authority to Green Heroes.",
            },
        ],
    },
};

export const officialDocuments = [
    ["01 BGH White Paper Main DRAFT v1.pdf", "1.png", "BGH White Paper Main"],
    [
        "02 BGH_Brand_Usage_Guidelines DRAFT v1.pdf",
        "2.png",
        "Brand Usage Guidelines",
    ],
    ["03 BGH_Brand Asset Summary DRAFT v1.pdf", "3.png", "Brand Asset Summary"],
    [
        "04 Secure Operations Protocol White Paper DRAFT v1.pdf",
        "4.png",
        "Secure Operations Protocol",
    ],
    [
        "05 Risk factors Disclaimers  White Paper DRAFT v1.pdf",
        "5.png",
        "Risk Factors and Disclaimers",
    ],
    [
        "06 Environmental Impact Energy Use of BGH DRAFT v1.pdf",
        "6.png",
        "Environmental Impact and Energy Use",
    ],
    [
        "08 Investor Briefing1 Program Overview DRAFT v1.pdf",
        "8.png",
        "Investor Briefing: Program Overview",
    ],
    [
        "09 Investor Briefing2 How different Technical DRAFT v1.pdf",
        "9.png",
        "Investor Briefing: Technical",
    ],
    [
        "10 Investor Briefing3 Market Impact C1 Distribution DRAFT v1.pdf",
        "10.png",
        "Investor Briefing: Market Impact",
    ],
    ["11 Elevator Pitch DRAFT v1.pdf", "11.png", "Elevator Pitch"],
    ["12 Terms of use DRAFT v1.pdf", "12.png", "Terms of Use"],
    [
        "13 Conflict of Interest Hiring and Personnel Proposal DRAFT v1.pdf",
        "13.png",
        "Conflict of Interest",
    ],
] as const;

export const languageDocuments = [
    [
        "English",
        "english-cover.png",
        "50 EN BGH Chapter I Free Dist FINALv1.pdf",
    ],
    ["French", "french-cover.png", "50 FR BGH Chapter I Free Dist FINALv1.pdf"],
    [
        "Spanish",
        "spanish-cover.png",
        "50 SP BGH Chapter I Free Dist FINALv1.pdf",
    ],
    ["Italian", "italian-cover.png", "50 IT BGH Chapter I Free Dist Ed2.pdf"],
    [
        "Korean",
        "korean-cover.png",
        "50 KOR BGH Chapter I Free Dist FINALv1.pdf",
    ],
    [
        "Chinese",
        "chinese-cover.png",
        "50 CN BGH Chapter I Free Dist FINALv1.pdf",
    ],
    ["Arabic", "arabic-cover.png", "50 AR BGH Chapter I Free Dist FINALv1.pdf"],
] as const;
