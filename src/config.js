export const innovationType = {
  SPECIALIST: "SPECIALIST",
  EXPLORER: "EXPLORER",
  VISIONARY: "VISIONARY",
  ADVOCATE: "ADVOCATE",
  BUILDER: "BUILDER",
};
export const quizConfig = [
  {
    questionId: 1,
    title: "What do you consider the biggest challenge to build innovation?",
    score: 1,
    answers: [
      {
        label: "Being too ambitious without sufficient planning.",
        value: innovationType.BUILDER,
      },
      {
        label: "Being too cautious and slow.",
        value: innovationType.VISIONARY,
      },
      {
        label: "Lack of team spirit and a culture of innovation.",
        value: innovationType.ADVOCATE,
      },
      {
        label: "Does not have a strong product or technology.",
        value: innovationType.SPECIALIST,
      },
      {
        label: "It isn't new to the market.",
        value: innovationType.EXPLORER,
      },
    ],
  },
  {
    questionId: 2,
    title: "How do you prefer getting information?",
    score: 1,
    answers: [
      {
        label: "I like structure and to know the exact outcome up front.",
        value: innovationType.BUILDER,
      },
      {
        label:
          "I like to know the bigger context of what it’s all about first.",
        value: innovationType.VISIONARY,
      },
      {
        label:
          "Group discussions with lots of points of view work best for me.",
        value: innovationType.ADVOCATE,
      },
      {
        label:
          "I’m a do-it-yourself kind of person and figure things out as I go.",
        value: innovationType.SPECIALIST,
      },
      {
        label: "I do better when I can hear or see it from users.",
        value: innovationType.EXPLORER,
      },
    ],
  },
  {
    questionId: 3,
    title: "Which is your bigger strength?",
    score: 1,
    answers: [
      {
        label: "Exeuting a plan and implementing.",
        value: innovationType.BUILDER,
      },
      {
        label: "Decision making.",
        value: innovationType.VISIONARY,
      },
      {
        label: "Communication and convincing.",
        value: innovationType.ADVOCATE,
      },
      {
        label: "Expertise in a specific area.",
        value: innovationType.SPECIALIST,
      },
      {
        label: "Thinking of new ideas.",
        value: innovationType.EXPLORER,
      },
    ],
  },
  {
    questionId: 4,
    title: "Your walls and a desk",
    score: 1,
    answers: [
      {
        label: "My wall is mostly post-its and piles.",
        value: innovationType.BUILDER,
      },
      {
        label: "Visually stimulating and lots of things that inspire me.",
        value: innovationType.VISIONARY,
      },
      {
        label:
          "I’m surrounded by pictures and things that remind me of family and friends.",
        value: innovationType.ADVOCATE,
      },
      {
        label: "Clean and tidy. Everything has a place.",
        value: innovationType.SPECIALIST,
      },
      {
        label: "It's possible that it was mistaken as the library.",
        value: innovationType.EXPLORER,
      },
    ],
  },
  {
    questionId: 5,
    title: "You enjoy working in the innovative culture that",
    score: 1,
    answers: [
      {
        label:
          "You're building the best products and features for the industry.",
        value: innovationType.BUILDER,
      },
      {
        label: "The ownership you take in your work.",
        value: innovationType.VISIONARY,
      },
      {
        label: "Surrouned by talents with good environment.",
        value: innovationType.ADVOCATE,
      },
      {
        label: "You have a strong belief in product direction.",
        value: innovationType.SPECIALIST,
      },
      {
        label: "New things that no one has ever thought about.",
        value: innovationType.EXPLORER,
      },
    ],
  },
  {
    questionId: 6,
    title: "Which statement best reflects your situation?",
    score: 1.5,
    answers: [
      {
        label: "I am always developing and improving my products.",
        value: innovationType.BUILDER,
      },
      {
        label: "I am able to close sales and convince partners & clients.",
        value: innovationType.VISIONARY,
      },
      {
        label:
          "I understand everyone's potential and how to manage and maximize it.",
        value: innovationType.ADVOCATE,
      },
      {
        label:
          "I want to provide my team expertise and techniques to help them succeed..",
        value: innovationType.SPECIALIST,
      },
      {
        label:
          "I want to understand customer insight in order to discover market opportunities.",
        value: innovationType.EXPLORER,
      },
    ],
  },
];

export const innovatorScreenTheme = {
  SPECIALIST: {
    background: "#9E1312",
    nftImage: "specialist",
    description: `the "Specialist" refers to an individual who excels in a particular domain or field of expertise, contributing to innovation through their deep knowledge and focused skills.`,
    descriptionKey: `
    <li><b>Depth of expertise</b> - Specialists have extensive knowledge and mastery in a specific area. They possess a deep understanding of their chosen field, allowing them to identify nuances and opportunities for innovation.</li>
    <br><li><b>Research-oriented</b> - They are driven by a curiosity to explore their domain further and uncover new insights. Specialists often engage in rigorous research and experimentation.</li>
    <br><li><b>Precision</b> - Specialists pay meticulous attention to detail, ensuring accuracy and excellence in their work. Their precision contributes to the quality of their innovations.</li>
    <br><li><b>Problem-solving</b> - They tackle complex problems by leveraging their specialized knowledge. Specialists have a knack for finding novel solutions within their domain.</li>
    <br><li><b>Innovation through advancement</b> -  Specialists drive innovation by pushing the boundaries of current knowledge within their domain. Their advancements often lead to breakthroughs and new perspectives.</li>
    <br><li><b>Thought leadership</b> - Many Specialists become thought leaders in their field, sharing insights, research findings, and innovative ideas with the broader community.</li>
    `,
    descriptionEnd: `Specialists play a crucial role in driving innovation by delving deeply into specific areas and pushing the boundaries of knowledge. Their contributions often lead to transformative advancements that shape industries, fields of study, and the way we understand the world.`,
  },
  EXPLORER: {
    background: "#056C3C",
    nftImage: "explorer",
    description: `the “Explorer” is characterized by their adventurous spirit, curiosity, and willingness to venture into uncharted territory. They thrive on seeking out new experiences, uncovering new ideas, and pushing the boundaries of existing knowledge`,
    descriptionKey: `
    <li><b>Curiosity</b> - Explorers have an insatiable desire to learn and discover. They ask questions, investigate different perspectives, and are constantly on the lookout for new information and insights.</li>
    <br><li><b>Open-mindedness</b> - They are receptive to unconventional ideas and are willing to challenge traditional norms and assumptions. This open-mindedness often leads them to consider viewpoints that others might overlook.</li>
    <br><li><b>Cross-disciplinary thinking</b> - They frequently draw inspiration from various fields and domains, often combining disparate ideas to generate innovative solutions. This cross-disciplinary approach allows them to see connections that others might miss.</li>
    <br><li><b>Creativity</b> - Their capacity to generate new and unique ideas is a fundamental aspect of their innovator type. Explorers excel at thinking "outside the box" and generating fresh concepts.</li>
    <br><li><b>Continuous learning</b> - Explorers have a lifelong commitment to learning and personal growth. They actively seek out new knowledge and skills to fuel their innovative endeavors.</li>
    `,
    descriptionEnd: `Explorers contribute to innovation by pushing the boundaries of existing knowledge and exploring uncharted territories, ultimately leading to the creation of groundbreaking products, services, and concepts that reshape industries and societies.`,
  },
  VISIONARY: {
    background: "#ED9F03",
    nftImage: "visionary",
    description: `the "Visionary" refers to an individual who possesses a unique and far-reaching perspective on the future possibilities and potential advancements. Visionaries are known for their ability to imagine bold and transformative ideas that can reshape industries, societies, and even the way we perceive the world.`,
    descriptionKey: `
    <li><b>Imagination</b> - Visionaries have a vivid and expansive imagination that allows them to envision possibilities that others might not even consider. They can see beyond current limitations and imagine innovative solutions and concepts.</li>
    <br><li><b>Big-picture thinking</b> - Visionaries excel at seeing the larger context and connecting various trends, technologies, and ideas. They can identify patterns and trends that others might miss.</li>
    <br><li><b>Inspirational communication</b> - Visionaries are adept at conveying their ideas and visions to others in a compelling and inspiring manner. They have the ability to ignite passion and excitement among people who share their vision.</li>
    <br><li><b>Risk-taking</b> - They are often willing to take significant risks to bring their visionary ideas to life. This willingness to take bold steps can lead to groundbreaking innovations.</li>
    <br><li><b>Change agents</b> - Visionaries are agents of change who challenge the status quo and disrupt established norms. They drive innovation by pushing for new ideas and approaches.</li>
    `,
    descriptionEnd: `Visionaries play a crucial role in driving innovation by pushing the boundaries of what is currently possible and inspiring others to think beyond the immediate constraints. `,
  },
  ADVOCATE: {
    background: "#FF6600",
    nftImage: "advocate",
    description: `
    the "Advocate" refers to an individual who is passionate about driving change and innovation by advocating for meaningful causes, ideas, or solutions. Advocates are dedicated to creating a positive impact and often channel their efforts into raising awareness, promoting adoption, and mobilizing support for innovative initiatives.
    `,
    descriptionKey: `
    <li><b>Communication skills</b> - They excel at communicating their message effectively to diverse audiences. Advocates use compelling narratives, storytelling, and persuasion to rally support for their initiatives.</li>
    <br><li><b>Empathy</b> - Advocates have a strong sense of empathy and are attuned to the needs and concerns of others. They are motivated to create solutions that address real-world challenges and improve lives.</li>
    <br><li><b>Networking</b> - Advocates are skilled networkers who build relationships with individuals, organizations, and stakeholders that share their vision. They leverage these connections to amplify their impact.</li>
    <br><li><b>Collaboration</b> - They understand the power of collaboration and are often involved in partnerships with other individuals, organizations, and entities that align with their goals.</li>
    <br><li><b>Community-building</b> - Advocates create and foster communities of like-minded individuals who share their passion and vision. These communities can amplify the impact of their efforts.</li>
    `,
    descriptionEnd: `Advocates play a vital role in the innovation ecosystem by generating awareness, mobilizing support. Their ability to communicate effectively and inspire action can significantly contribute to the success of initiatives aimed at positive change and improvement.`,
  },
  BUILDER: {
    background: "#AC845C",
    nftImage: "builder",
    description: `the “Builder” refers to an individual who excels at turning ideas and concepts into practical, tangible realities. Builders are known for their ability to execute and bring projects to fruition with precision and efficiency. They thrive on creating structures, systems, and solutions that have a concrete impact on the world around them.`,
    descriptionKey: `
    <li><b>Practicality</b> - Builders have a strong practical orientation. They are focused on creating solutions that are functional, reliable, and effective in addressing real-world problems.</li>
    <br><li><b>Organizational skills</b> - Builders excel in planning and organizing complex tasks. They create step-by-step roadmaps to guide their projects from inception to completion.</li>
    <br><li><b>Efficiency</b> - Builders are results-driven and aim to achieve their objectives with maximum efficiency. They streamline processes and eliminate unnecessary steps to optimize their work.</li>
    <br><li><b>Iterative improvement</b> - Builders are open to refining and improving their work based on feedback and experience. They seek continuous improvement in their projects and processes.</li>
    <br><li><b>Technical expertise</b> - Depending on the field, Builders often have a strong foundation in technical skills related to their projects. This expertise allows them to ensure the quality and functionality of their creations.</li>
    `,
    descriptionEnd: `Builders play a crucial role in the innovation process by translating conceptual innovations into practical applications that can be implemented and used.`,
  },
};
