import type { AssetDetail, HeroProfile, Mission } from "../types/models";

export const missions: Mission[] = [
  {
    title: "Combat Misinformation",
    tagline: "Stand for truth. Lead with science.",
    image: "/img/combat-logo.jpeg",
    intro: "Building Sustainability on Facts, Not Myths",
    steps: [
      { title: "Why This Mission Exists", body: "Environmental sustainability is one of the most discussed global topics, and also one of the most misunderstood. BE GREEN HEROES exists to correct this problem at its root: knowledge." },
      { title: "What We Mean by Misinformation", body: "Misinformation often grows from oversimplified claims, missing context, outdated assumptions, and greenwashing. BGH treats it as a systemic issue, not a personal failure." },
      { title: "Science Before Action", body: "Every learning pathway is grounded in evidence, transparent sources, lifecycle thinking, and the willingness to question popular narratives." },
      { title: "From Learning to Impact", body: "Verified learning becomes the basis for contribution and participation, so influence reflects credibility and comprehension rather than popularity or capital." },
      { title: "Why This Matters", body: "Clear scientific understanding enables better choices, more accountable institutions, and environmental action that creates measurable value." },
      { title: "Ready to Begin the Journey?", body: "Every Green Hero starts with a single step." },
    ],
  },
  {
    title: "Earn Green Hero Coins",
    tagline: "Turn knowledge into tangible rewards.",
    image: "/img/G-logo.jpeg",
    intro: "Learning That Creates Real Value",
    steps: [
      { title: "What Are Green Hero Coins?", body: "Green Hero Coins are utility-based participation tokens within the BGH ecosystem. They are earned through verified learning and meaningful engagement." },
      { title: "How You Earn", body: "Complete structured learning activities that demonstrate effort, understanding, and integrity." },
      { title: "Why Learning Is the Reward Mechanism", body: "BGH rewards understanding rather than spending, speculation, visibility, or popularity." },
      { title: "What They Represent", body: "Green Hero Coins reflect verified contribution, ecosystem participation, and progress through BGH learning pathways." },
      { title: "Who Can Earn?", body: "BGH is built for global inclusion and removes barriers so learning can come first." },
      { title: "From Learning to Participation", body: "As participation grows, learners may contribute ideas, join structured decisions, and support the ecosystem." },
      { title: "Ready to Begin the Journey?", body: "Every Green Hero starts with a single step." },
    ],
  },
  {
    title: "Participate in operational decision-making",
    tagline: "Shape the future with your voice.",
    image: "/img/operation-logo.jpeg",
    intro: "Turning Knowledge Into Collective Action",
    steps: [
      { title: "What Does Operational Decision-Making Mean?", body: "It is structured participation in how the BGH ecosystem evolves—not political voting, financial control, or real-time management." },
      { title: "Who Can Participate?", body: "Participation is earned through learning progress, verified engagement, and demonstrated understanding." },
      { title: "What Participants Can Influence", body: "Qualified participants may contribute to learning priorities, program improvements, community initiatives, and defined operational proposals." },
      { title: "Why BGH Uses Participatory Operations", body: "Informed participation creates an ecosystem that is transparent, accountable, inclusive, and grounded in shared knowledge." },
      { title: "How It Works", body: "BGH defines the issue, supplies context, opens a guided participation window, and publishes outcomes and rationales." },
      { title: "What This Is Not", body: "It is not speculative token voting, unchecked control, or an unstructured popularity contest." },
      { title: "From Learning to Leadership", body: "Learning → Contribution → Participation → Stewardship." },
      { title: "Ready to Begin the Journey?", body: "Every Green Hero starts with a single step." },
    ],
  },
  {
    title: "Become Green Hero",
    tagline: "Knowledge is your superpower.",
    image: "/img/bgh-logo.jpeg",
    intro: "From Participation to Purpose",
    steps: [
      { title: "What Does It Mean to Be a Green Hero?", body: "It is a recognized role for people who consistently act with knowledge, integrity, responsibility, and purpose." },
      { title: "Green Heroes Emerge", body: "BGH does not assign hero status automatically. It emerges through learning, contribution, participation, and conduct." },
      { title: "What Green Heroes Represent", body: "They are trusted learners, responsible contributors, and stewards of the BGH culture." },
      { title: "Responsibilities", body: "Green Heroes are expected to uphold scientific integrity, reject misinformation, and help others learn." },
      { title: "Recognition Without Centralized Authority", body: "Recognition is based on transparent participation history and sustained alignment with the mission." },
      { title: "Why This Matters", body: "BGH recognizes informed contribution rather than visibility or speculation." },
      { title: "Becoming a Green Hero", body: "Learning → Earning → Participating → Acting with Purpose." },
      { title: "A Living Role, Not a Label", body: "Green Hero status evolves with the ecosystem and is maintained through continued responsibility." },
      { title: "Ready to Begin the Journey?", body: "Every Green Hero starts with a single step." },
    ],
  },
];

export const heroes: Record<string, HeroProfile> = {
  mia: { name: "Mia", symbol: "🌸", role: "The Caring Catalyst", image: "/img/mia.png", descriptor: "Mia represents empathy, participation, and positive engagement. She symbolizes how understanding leads to care, and how care translates into meaningful participation within the ecosystem.", contexts: ["Community participation", "Behavioral change messaging", "Action-oriented learning moments"] },
  elio: { name: "Elio", symbol: "🌿", role: "The Knowledge Guide", image: "/img/elio.png", descriptor: "Elio represents analytical thinking, scientific understanding, and responsible decision-making within the BE GREEN HEROES ecosystem. He symbolizes the role of knowledge as the foundation for sustainable participation and long-term governance.", contexts: ["Core educational materials", "Scientific explanations", "Governance and system-level concepts"] },
  lina: { name: "Lina", symbol: "🌱", role: "The Ethical Anchor", image: "/img/lina.png", descriptor: "Lina represents balance, integrity, and continuity in sustainability thinking. She embodies ethical reflection, long-term perspective, and the integration of knowledge into responsible action.", contexts: ["Ethical frameworks", "Lifecycle thinking", "Sustainability decision narratives"] },
  niko: { name: "Niko", symbol: "🌼", role: "The Curious Explorer", image: "/img/niko.png", descriptor: "Niko represents curiosity, discovery, and the learning process itself. He symbolizes the importance of asking questions, exploring new ideas, and developing understanding through engagement.", contexts: ["Learning journeys", "Introductory modules", "Discovery-oriented content"] },
};

export const assets: Record<string, AssetDetail> = {
  bgh: { title: "BGH Circular Emblem (Non-Token Representative Logo)", image: "/img/bgh-logo.jpeg", circular: true, sections: [{ heading: "Design Signification", body: "The enclosing circular motion represents ecosystem continuity and governance evolution. The leaf embedded within the circle reflects growth guided by science." }, { heading: "Usage Guidance", body: "Use as a program identifier for institutional or ecosystem-level representation. Not to be used for coin-specific or governance-specific labeling." }] },
  bgh1: { title: "BGH Lettermark- Multi-Color", image: "/img/bgh-1.png", sections: [{ heading: "Design Signification", body: "Green symbolizes environmental sustainability, blue represents science and trust, and the flowing wave expresses continuity and forward motion." }, { heading: "Usage Guidance", body: "Primary brand logo for official communications, website headers, and public-facing materials where full brand identity is required." }] },
  bgh2: { title: "BGH Lettermark - Single Color", image: "/img/bgh-2.png", sections: [{ heading: "Design Signification", body: "A minimal sustainability-forward identity emphasizing environmental commitment through a unified green tone." }, { heading: "Usage Guidance", body: "Use for sustainability-focused campaigns, monochrome applications, or when printing constraints require a single-color version." }] },
  bgh3: { title: "BGH Lettermark – Letter only", image: "/img/bgh-3.png", sections: [{ heading: "Design Signification", body: "Balances sustainability with scientific credibility, representing BGH’s education-based governance model in a letter-only design." }, { heading: "Usage Guidance", body: "Use selectively for digital applications, presentations, and investor-facing materials where brand sophistication and simplicity are desired." }] },
  gToken: { title: "BGH Token Symbol (Token-Optimized Circular Logo)", image: "/img/g-leaf-logo.png", circular: true, sections: [{ heading: "Design Signification", body: "The circular format reinforces token recognition across digital platforms, while the integrated G and leaf represent environmental responsibility, governance structure, and long-term value stewardship." }, { heading: "Usage Guidance", body: "Designed for wallets, blockchain explorers, exchanges, and token-identification contexts. The symbol must not be altered, recolored, distorted, or used to imply financial guarantees." }] },
  gNonToken: { title: "BGH Ecosystem Coin Symbol (Non-Token Mark)", image: "/img/G-logo.jpeg", circular: true, sections: [{ heading: "Design Signification", body: "The non-circular structure distinguishes ecosystem participation identity from market token representation. The integrated G and leaf reflect knowledge-based participation and governance integrity." }, { heading: "Usage Guidance", body: "Designed for educational materials, governance documentation, and ecosystem participation contexts. It does not represent a tradable token." }] },
  mc: { title: "MC — Market Coin", image: "/img/mc.jpeg", circular: true, sections: [{ body: "A Market Coin represents the market-facing token layer of the BGH ecosystem and reflects broader ecosystem recognition and participation beyond internal utility functions." }, { heading: "Category Structure", body: "MC includes MC-o (original issuance) and MC-c (converted from UC)." }, { heading: "Governance Relevance", body: "MC does not independently confer governance authority unless otherwise specified within the BGH governance framework." }] },
  mcc: { title: "MC-c — Market Coin (Converted)", image: "/img/mcc.jpeg", circular: true, sections: [{ body: "A Market Coin (Converted) refers to MC units obtained through the structured conversion of eligible Utility Coins under defined ecosystem rules." }, { heading: "Category Structure", body: "MC-c is a subset of the MC category derived from UC conversion pathways." }, { heading: "Governance Relevance", body: "MC-c does not inherently grant governance participation rights unless explicitly designated within the BGH governance framework." }] },
  mco: { title: "MC-o — Market Coin (Original)", image: "/img/mco.jpeg", circular: true, sections: [{ body: "A Market Coin (Original) refers to MC units issued or acquired independently of Utility Coin conversion pathways." }, { heading: "Category Structure", body: "MC-o is a primary subset within the MC category." }, { heading: "Governance Relevance", body: "MC-o does not inherently grant governance participation rights unless explicitly designated within the BGH governance framework." }] },
  uc: { title: "UC - Utility Coin*", image: "/img/uc.jpeg", circular: true, sections: [{ body: "A Utility Coin represents verified participation within the BGH learning ecosystem. It is earned through structured engagement and knowledge-based activities, not purchased for speculative purposes." }, { heading: "Category Structure", body: "UC is the umbrella category encompassing p-UC, m-UC, and v-UC." }, { heading: "Governance Relevance", body: "UC serves as the foundational governance instrument within the BGH ecosystem, enabling eligible holders to participate in operational and strategic decision-making processes." }] },
  muc: { title: "m-UC - Mined Utility Coin", image: "/img/muc.jpeg", circular: true, sections: [{ body: "A Mined Utility Coin is a Utility Coin earned through the completion of validated learning milestones and participation protocols established by BGH." }, { heading: "Category Structure", body: "m-UC is a fully qualified subset of the UC category." }, { heading: "Governance Relevance", body: "m-UC carries full governance participation eligibility, subject to compliance with ecosystem requirements." }] },
  puc: { title: "p-UC — Provisional Utility Coin", image: "/img/puc.jpeg", circular: true, sections: [{ body: "A Provisional Utility Coin is granted to participants who meet learning and participation requirements but are subject to legal age restrictions in their jurisdictions." }, { heading: "Category Structure", body: "p-UC is a fully recognized subset within the UC category." }, { heading: "Governance Relevance", body: "p-UC grants governance participation rights. It cannot be traded, transferred, or exchanged until the holder reaches the legal age of majority." }] },
  vuc: { title: "v-UC — Virtual Utility Coin", image: "/img/vuc.jpeg", circular: true, sections: [{ body: "A Virtual Utility Coin is a governance instrument held and utilized by the BGH Organization to ensure operational continuity and structural stability during early and transitional phases." }, { heading: "Category Structure", body: "v-UC is a governance-class subset within the UC framework, distinct from participant-earned Utility Coins." }, { heading: "Governance Relevance", body: "Under progressive decentralization, v-UC voting power decreases as participant-earned m-UC increases, gradually transferring decision-making authority to Green Heroes." }] },
};

export const officialDocuments = [
  ["01 BGH White Paper Main DRAFT v1.pdf", "1.png", "BGH White Paper Main"],
  ["02 BGH_Brand_Usage_Guidelines DRAFT v1.pdf", "2.png", "Brand Usage Guidelines"],
  ["03 BGH_Brand Asset Summary DRAFT v1.pdf", "3.png", "Brand Asset Summary"],
  ["04 Secure Operations Protocol White Paper DRAFT v1.pdf", "4.png", "Secure Operations Protocol"],
  ["05 Risk factors Disclaimers  White Paper DRAFT v1.pdf", "5.png", "Risk Factors and Disclaimers"],
  ["06 Environmental Impact Energy Use of BGH DRAFT v1.pdf", "6.png", "Environmental Impact and Energy Use"],
  ["08 Investor Briefing1 Program Overview DRAFT v1.pdf", "8.png", "Investor Briefing: Program Overview"],
  ["09 Investor Briefing2 How different Technical DRAFT v1.pdf", "9.png", "Investor Briefing: Technical"],
  ["10 Investor Briefing3 Market Impact C1 Distribution DRAFT v1.pdf", "10.png", "Investor Briefing: Market Impact"],
  ["11 Elevator Pitch DRAFT v1.pdf", "11.png", "Elevator Pitch"],
  ["12 Terms of use DRAFT v1.pdf", "12.png", "Terms of Use"],
  ["13 Conflict of Interest Hiring and Personnel Proposal DRAFT v1.pdf", "13.png", "Conflict of Interest"],
] as const;

export const languageDocuments = [
  ["English", "english-cover.png", "50 EN BGH Chapter I Free Dist FINALv1.pdf"],
  ["French", "french-cover.png", "50 FR BGH Chapter I Free Dist FINALv1.pdf"],
  ["Spanish", "spanish-cover.png", "50 SP BGH Chapter I Free Dist FINALv1.pdf"],
  ["Italian", "italian-cover.png", "50 IT BGH Chapter I Free Dist Ed2.pdf"],
  ["Korean", "korean-cover.png", "50 KOR BGH Chapter I Free Dist FINALv1.pdf"],
  ["Chinese", "chinese-cover.png", "50 CN BGH Chapter I Free Dist FINALv1.pdf"],
  ["Arabic", "arabic-cover.png", "50 AR BGH Chapter I Free Dist FINALv1.pdf"],
] as const;
