export const innovationType = {
  SPECIALIST: "SPECIALIST",
  EXPLORER: "EXPLORER",
  VISIONARY: "VISIONARY",
  ADVOCATE: "ADVOCATE",
  BUILDER: "BUILDER"
}
export const quizConfig = [
  {
    questionId: 1,
    title: 'What do you consider the biggest challenge to build innovation?',
    score: 1,
    answers: [
      {
        label: 'Being too ambitious without sufficient planning.',
        value: innovationType.BUILDER
      },
      {
        label: 'Being too cautious and slow.',
        value: innovationType.VISIONARY
      },
      {
        label: 'Lack of team spirit and a culture of innovation.',
        value: innovationType.ADVOCATE
      },
      {
        label: 'Does not have a strong product or technology.',
        value: innovationType.SPECIALIST
      },
      {
        label: "It isn't new to the market.",
        value: innovationType.EXPLORER
      }
    ]
  },
  {
    questionId: 2,
    title: 'How do you prefer getting information?',
    score: 1,
    answers: [
      {
        label: 'I like structure and to know the exact outcome up front.',
        value: innovationType.BUILDER
      },
      {
        label: 'I like to know the bigger context of what it’s all about first.',
        value: innovationType.VISIONARY
      },
      {
        label: 'Group discussions with lots of points of view work best for me.',
        value: innovationType.ADVOCATE
      },
      {
        label: 'I’m a do-it-yourself kind of person and figure things out as I go.',
        value: innovationType.SPECIALIST
      },
      {
        label: "I do better when I can hear or see it from users.",
        value: innovationType.EXPLORER
      }
    ]
  },
  {
    questionId: 3,
    title: 'Which is your bigger strength?',
    score: 1,
    answers: [
      {
        label: 'Exeuting a plan and implementing.',
        value: innovationType.BUILDER
      },
      {
        label: 'Decision making.',
        value: innovationType.VISIONARY
      },
      {
        label: 'Communication and convincing.',
        value: innovationType.ADVOCATE
      },
      {
        label: 'Expertise in a specific area.',
        value: innovationType.SPECIALIST
      },
      {
        label: "Thinking of new ideas.",
        value: innovationType.EXPLORER
      }
    ]
  },
  {
    questionId: 4,
    title: 'Your walls and a desk',
    score: 1,
    answers: [
      {
        label: 'My wall is mostly post-its and piles.',
        value: innovationType.BUILDER
      },
      {
        label: 'Visually stimulating and lots of things that inspire me.',
        value: innovationType.VISIONARY
      },
      {
        label: 'I’m surrounded by pictures and things that remind me of family and friends.',
        value: innovationType.ADVOCATE
      },
      {
        label: 'Clean and tidy. Everything has a place.',
        value: innovationType.SPECIALIST
      },
      {
        label: "It's possible that it was mistaken as the library.",
        value: innovationType.EXPLORER
      }
    ]
  },
  {
    questionId: 5,
    title: 'You enjoy working in the innovative culture that',
    score: 1,
    answers: [
      {
        label: "You're building the best products and features for the industry.",
        value: innovationType.BUILDER
      },
      {
        label: "The ownership you take in your work.",
        value: innovationType.VISIONARY
      },
      {
        label: "Surrouned by talents with good environment.",
        value: innovationType.ADVOCATE
      },
      {
        label: "You have a strong belief in product direction.",
        value: innovationType.SPECIALIST
      },
      {
        label: "New things that no one has ever thought about.",
        value: innovationType.EXPLORER
      }
    ]
  },
  {
    questionId: 6,
    title: 'Which statement best reflects your situation?',
    score: 1.5,
    answers: [
      {
        label: "I am always developing and improving my products.",
        value: innovationType.BUILDER
      },
      {
        label: "I am able to close sales and convince partners & clients.",
        value: innovationType.VISIONARY
      },
      {
        label: "I understand everyone's potential and how to manage and maximize it.",
        value: innovationType.ADVOCATE
      },
      {
        label: "I want to provide my team expertise and techniques to help them succeed..",
        value: innovationType.SPECIALIST
      },
      {
        label: "I want to understand customer insight in order to discover market opportunities.",
        value: innovationType.EXPLORER
      }
    ]
  }
]