export interface SkillGroup {
  category: string;
  icon: string;
  skills: { name: string; tag?: string }[];
}

export interface ExperienceItem {
  role: string;
  organization: string;
  period: string;
  description: string;
  type: 'academic' | 'leadership' | 'design';
}

export const aboutData = {
  name: 'Rohit Muralidaran',
  title: 'UI/UX Designer & Creative Technologist',
  education: 'B.Tech in Computer Science and Business Systems',
  location: 'Chennai, India',
  status: 'Open to opportunities',
  bio: "I'm Rohit Muralidaran, a designer who enjoys connecting creativity, usability, and technology. My work focuses on designing intuitive digital experiences, exploring visual systems, and solving real-world problems through thoughtful design.",
  extendedBio: "Currently pursuing Computer Science & Business Systems, I combine analytical thinking with user-centered product design. I bridge the gap between Figma design systems and frontend engineering, crafting interfaces that don't just look stunning—they feel effortless, accessible, and grounded in engineering reality.",
  avatarUrl: '/images/rohit-profile.jpg',
  resumeUrl: '#',
  contact: {
    email: 'rohitmuralidaran@gmail.com',
    linkedin: 'https://www.linkedin.com/in/rohit-m-084670330/',
    github: 'https://github.com/Rohit232006',
    behance: 'https://www.behance.net/rohitmuralid',
  },
  skillGroups: [
    {
      category: 'UI/UX Design',
      icon: 'Layout',
      skills: [
        { name: 'User Research', tag: 'Core' },
        { name: 'Information Architecture' },
        { name: 'Wireframing & Prototyping', tag: 'Core' },
        { name: 'Design Systems' },
        { name: 'Usability Heuristics' },
        { name: 'Micro-interactions' },
      ],
    },
    {
      category: 'Design Tools',
      icon: 'Figma',
      skills: [
        { name: 'Figma', tag: 'Advanced' },
        { name: 'Adobe Photoshop' },
        { name: 'Adobe Illustrator' },
        { name: 'FigJam' },
        { name: 'Principle / Motion' },
      ],
    },
    {
      category: 'Web & Programming Fundamentals',
      icon: 'Code',
      skills: [
        { name: 'HTML5 & CSS3', tag: 'Frontend' },
        { name: 'Tailwind CSS' },
        { name: 'React & TypeScript' },
        { name: 'Java Programming', tag: 'CSBS' },
        { name: 'Data Structures & OOP' },
        { name: 'Git & Version Control' },
      ],
    },
    {
      category: 'Graphic Design & Branding',
      icon: 'Palette',
      skills: [
        { name: 'Visual Communication' },
        { name: 'Brand Identity Systems' },
        { name: 'Typography & Layout' },
        { name: 'Social Media Strategy' },
        { name: 'Vector Illustration' },
      ],
    },
  ] as SkillGroup[],
  experiences: [
    {
      role: 'Lead UI/UX Designer',
      organization: 'PixelLoom & Product Initiatives',
      period: '2026 — Present',
      description: 'Directing end-to-end design systems, responsive SaaS platforms, design tokens, and user experience architecture.',
      type: 'design',
    },
    {
      role: 'Overall College Event Design, Media & Event Coordinator',
      organization: 'College Technical & Cultural Initiatives',
      period: '2024 — 2026',
      description: 'Directed overall event design, multimedia branding, print & digital collaterals, and full event coordination across college initiatives.',
      type: 'leadership',
    },
    {
      role: 'Computer Science and Business Systems Scholar',
      organization: 'Undergraduate Program',
      period: '2022 — 2026',
      description: 'Class of 2026. Coursework in Software Engineering, Object-Oriented Programming (Java), Database Management, UX Psychology, Financial Management, and Business Systems.',
      type: 'academic',
    },
  ] as ExperienceItem[],
  designPhilosophy: [
    {
      number: '01',
      title: 'Form Follows Friction',
      description: 'The best design removes cognitive load before adding visual flair. Polish means nothing if the user is confused.',
    },
    {
      number: '02',
      title: 'Designers Who Code Build Better Systems',
      description: 'Understanding component trees, flexbox, and state transitions turns static wireframes into resilient, implementable products.',
    },
    {
      number: '03',
      title: 'Empathy in Every Micro-State',
      description: 'Empty states, loading skeletons, error banners, and edge cases are where true product craftsmanship shines.',
    },
  ],
};

