export interface Project {
    id: string;
    slug: string;
    title: string;
    subtitle: string;
    description: string;
    color: string;
    tags: string[];
    content: string; // Markdown-like or raw HTML for case study
}

export const PROJECTS: Project[] = [
    {
        id: "01",
        slug: "cognify",
        title: "COGNIFY",
        subtitle: "Neural Interface",
        description: "A brain-computer interface simulation that visualizes thought patterns as fluid dynamics.",
        color: "#d4af37",
        tags: ["WebGL", "Neurotech", "React"],
        content: `
      <h2>The Challenge</h2>
      <p>Visualizing the invisible. How do you represent the chaotic beauty of human thought?</p>
      
      <h2>The Solution</h2>
      <p>Using WebGL vertex shaders to create a particle system that reacts to simulated EEG data streams.</p>
    `
    },
    {
        id: "02",
        slug: "finsight",
        title: "FINSIGHT",
        subtitle: "Predictive Analytics",
        description: "AI-driven financial forecasting tool providing real-time market sentiment analysis.",
        color: "#4c1d95",
        tags: ["Machine Learning", "Python", "Dashboard"],
        content: `
      <h2>The Core Algorithm</h2>
      <p>Utilizing LSTM networks to predict market volatility based on social sentiment analysis.</p>
    `
    },
    {
        id: "03",
        slug: "nexus",
        title: "NEXUS",
        subtitle: "Decentralized Grid",
        description: "A peer-to-peer energy trading platform built on Ethereum.",
        color: "#10b981",
        tags: ["Blockchain", "Solidity", "Web3"],
        content: `
      <h2>Decentralization</h2>
      <p>Removing the middleman from energy distribution, allowing neighbors to trade solar power directly.</p>
    `
    }
];
