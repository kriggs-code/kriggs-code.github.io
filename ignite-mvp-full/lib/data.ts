import { BookOpen, Brain, Compass, Flame, HeartHandshake, Landmark, Moon, Shield, Sparkles, Target } from "lucide-react";

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Mission" },
  { href: "/onboarding", label: "Begin" },
  { href: "/dashboard", label: "Daily" },
];

export const landingStats = [
  { value: "01", label: "honest prayer" },
  { value: "01", label: "scripture" },
  { value: "01", label: "next step" },
];

export const formationPillars = [
  {
    icon: HeartHandshake,
    eyebrow: "Cura Personalis",
    title: "Care for the whole person",
    text: "Ignite meets teenagers emotionally, spiritually, intellectually, and personally. The starting point is not perfection — it is honesty.",
  },
  {
    icon: Sparkles,
    eyebrow: "Beauty",
    title: "Truth should feel worth pursuing",
    text: "Premium visuals, cinematic storytelling, and reflective language help faith feel intriguing instead of forced or outdated.",
  },
  {
    icon: Brain,
    eyebrow: "Reason",
    title: "Questions are not threats",
    text: "Atheists, agnostics, Muslims, Jews, and other Christians are guided respectfully through questions, objections, scripture, and Catholic thought.",
  },
  {
    icon: Target,
    eyebrow: "Habit",
    title: "Faith becomes daily rhythm",
    text: "Simple streaks, prayer, scripture, and reflection help users build consistency without shame-based pressure.",
  },
];

export const journeySteps = [
  {
    number: "01",
    title: "Begin honestly",
    text: "Take a conversational onboarding quiz that asks where you are spiritually, emotionally, and intellectually.",
  },
  {
    number: "02",
    title: "Receive a pathway",
    text: "Get routed into a worldview-specific experience that speaks to your actual questions without attacking your background.",
  },
  {
    number: "03",
    title: "Practice daily",
    text: "Read scripture, pray honestly, reflect, and build a streak that turns spiritual curiosity into a real habit.",
  },
];

export const pathways = {
  atheist: {
    label: "Atheism",
    title: "For the one who needs more than emotion.",
    subtitle:
      "You are not wrong for asking hard questions. This path begins with reason, meaning, beauty, morality, and the possibility that reality is deeper than matter.",
    questions: [
      "Why does anything exist at all?",
      "Can morality be real if everything is only matter?",
      "What if faith is not the opposite of reason?",
      "Could Jesus be more than a religious symbol?",
    ],
    tone: "Intellectually serious. Emotionally honest. No pretending.",
    prayer:
      "God, if You are real, meet me honestly. I am not here to fake belief. I am here to search for truth.",
  },
  agnostic: {
    label: "Agnosticism",
    title: "For the one who is not closed — just unconvinced.",
    subtitle:
      "This path gives you room to move slowly. You can be open, unsure, skeptical, and still be taken seriously.",
    questions: [
      "What makes belief reasonable?",
      "How do I begin without pretending?",
      "What evidence should matter most?",
      "Why Catholicism and not vague spirituality?",
    ],
    tone: "Patient. Curious. Clear. Human.",
    prayer:
      "God, if You are near, help me notice. Give me enough light to take the next step.",
  },
  islam: {
    label: "Islam",
    title: "For the one who already respects God.",
    subtitle:
      "This path approaches Islam with respect. It explores Jesus, the Trinity, Incarnation, worship, and Catholicism with seriousness and care.",
    questions: [
      "Who is Jesus in history?",
      "Why do Christians believe God became human?",
      "What does the Trinity actually mean?",
      "What is Catholic worship trying to reveal?",
    ],
    tone: "Respectful. Reverent. Careful. Never mocking.",
    prayer:
      "God, guide me toward truth with humility, wisdom, and peace.",
  },
  judaism: {
    label: "Judaism",
    title: "For the one rooted in covenant and history.",
    subtitle:
      "This path explores Catholicism through promise, fulfillment, worship, scripture, and Jesus without dismissing Jewish tradition.",
    questions: [
      "How do Catholics understand the Messiah?",
      "Why does the Old Testament matter so deeply?",
      "What is the connection between Passover and Eucharist?",
      "How does covenant shape Catholic belief?",
    ],
    tone: "Historically aware. Reverent. Thoughtful.",
    prayer:
      "God of Abraham, Isaac, and Jacob, lead me closer to Your truth.",
  },
  christian: {
    label: "Other Christian Branches",
    title: "For the one who knows Jesus but feels something is missing.",
    subtitle:
      "This path explores Catholicism through scripture, tradition, sacraments, the early Church, and the search for a deeper spiritual home.",
    questions: [
      "Why does the early Church matter?",
      "What are the sacraments for?",
      "How do scripture and tradition work together?",
      "Why Catholicism instead of Christianity in general?",
    ],
    tone: "Biblical. Historical. Invitational. Grounded.",
    prayer:
      "Jesus, bring me closer to the fullness of truth and love.",
  },
};

export type PathwayKey = keyof typeof pathways;

export const scriptures = [
  { reference: "John 1:5", verse: "The light shines in the darkness, and the darkness has not overcome it." },
  { reference: "Matthew 11:28", verse: "Come to me, all you who labor and are burdened, and I will give you rest." },
  { reference: "Psalm 46:10", verse: "Be still, and know that I am God." },
  { reference: "Jeremiah 29:13", verse: "You will seek me and find me, when you seek me with all your heart." },
  { reference: "Romans 12:2", verse: "Be transformed by the renewal of your mind." },
];

export const dashboardCards = [
  { icon: Moon, title: "Pray honestly", text: "Speak to God without performing. Start with what is real." },
  { icon: BookOpen, title: "Read slowly", text: "Sit with one verse. Let it question you before you question it." },
  { icon: Flame, title: "Return daily", text: "Consistency builds spiritual strength one day at a time." },
];

export const testimonials = [
  {
    quote: "I thought faith was just people pretending. Ignite made me feel like I could actually search honestly.",
    name: "A skeptical student",
  },
  {
    quote: "It did not feel corny or forced. It felt serious, beautiful, and personal.",
    name: "A teen exploring faith",
  },
  {
    quote: "For the first time, Catholicism felt like something I wanted to understand instead of something I had to accept blindly.",
    name: "A young Christian",
  },
];

export const objections = [
  { title: "I do not want to be pressured.", text: "Ignite is designed to guide, not corner. The experience starts with honesty and grows through trust." },
  { title: "I have serious questions.", text: "Good. Questions are treated as invitations into deeper truth, not signs of failure." },
  { title: "Christianity feels fake to me.", text: "Ignite avoids performance-based faith and focuses on prayer, scripture, reason, beauty, and personal encounter." },
];

export const resourceTracks = [
  { icon: Compass, title: "Meaning", text: "Explore purpose, identity, suffering, joy, and the desire to be known." },
  { icon: Landmark, title: "Catholicism", text: "Understand sacraments, scripture, tradition, the Church, Mary, saints, and worship." },
  { icon: Shield, title: "Apologetics", text: "Answer objections without becoming combative or arrogant." },
];
