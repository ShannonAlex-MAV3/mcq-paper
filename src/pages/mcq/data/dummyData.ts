import { Section } from "../types/exam";

export const dummyExamData: Section[] = [
  {
    id: 1,
    title: "Section 1: Marketing Basics",
    description: "Choose ONE CORRECT answer from the options provided.",
    questions: [
      {
        id: 1,
        text: "Customer Value is defined as?",
        options: [
          "a) The satisfaction of the customer's overall experience in satisfying a customer need.",
          "b) The monetary value of a customer to a producer.",
          "c) The importance that a customer puts on the value of a product over other attributes.",
          "d) The difference between the price a customer pays and the cost of the product to produce."
        ]
      },
      {
        id: 2,
        text: "You work as the Marketing Executive at a small exclusive ski resort in the Swiss Alps which has a waiting list for availability during peak weeks. You view your role at the resort primarily, one of:",
        options: [
          "a) marketing a range of services the ski resort provides",
          "b) creating a customer relationship management system",
          "c) responding to the needs and buying behavior of demand",
          "d) decreasing off-peak prices"
        ]
      },
      {
        id: 3,
        text: "Demographic trends relate to which element of PESTEL?",
        options: [
          "a) Technical",
          "b) Political",
          "c) Economic",
          "d) Socio-cultural"
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Section 2: Marketing Mix",
    description: "Choose ONE CORRECT answer from the options provided.",
    questions: [
      {
        id: 4,
        text: "Which of the following is not one of the 4Ps?",
        options: [
          "a) Place",
          "b) Portable",
          "c) Price",
          "d) Promotion"
        ]
      },
      {
        id: 5,
        text: "Newsletters, PR, blogs and brand sponsored events are part of:",
        options: [
          "a) Promotional mix",
          "b) Sponsorship mix",
          "c) Direct marketing mix",
          "d) Online marketing promotion"
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Section 3: Market Research",
    description: "Choose ONE CORRECT answer from the options provided.",
    questions: [
      {
        id: 6,
        text: "Which of the following would be part of a major food retailer's Decision Making Unit (DMU) when purchasing a new IT system for supply chain management?",
        options: [
          "a) Store assistants",
          "b) Accounts department",
          "c) IT technicians",
          "d) Customers"
        ]
      },
      {
        id: 7,
        text: "Which of the following are effective methods of collecting primary data for a computer manufacturer?",
        options: [
          "a) Observation",
          "b) Sales figures",
          "c) Focus groups",
          "d) Market reports"
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Section 4: Case Studies",
    description: "Read the case study carefully and answer the questions that follow.",
    caseStudies: [
      {
        id: 1,
        text: "You have been appointed as a Marketing Executive for a hospice specializing in care for elderly patients suffering from Alzheimer's disease. The trustees have told you something of the hospice has been losing market share to neighboring private care homes and community services. They have identified the lack of new long-term donors, legacies and corporate partners as evidence that the marketing initiatives have not been successful in recent years. You have been asked to present your ideas to the trustees on how the hospice can improve its marketing strategy. Research has shown that this group responds well to emotional messages. You have been invited to present your ideas to the trustees on how the hospice can improve its marketing strategy.",
        questions: [
          {
            id: 8,
            text: "What should the focus of your presentation be?",
            options: [
              "a) Proposing a marketing strategy to improve donor engagement",
              "b) Organizing a strategy for a fund-raising campaign",
              "c) Engaging a PR agency to raise the profile of the hospice",
              "d) Defining a strategy to increase service awareness"
            ]
          },
          {
            id: 9,
            text: "The donors and the residents of the hospice act in a similar fashion to the _____ and _____ of a private sector company. (Customers 1, Suppliers 2, Shareholders 3, Employees 4)",
            options: [
              "a) 1 and 3",
              "b) 2 and 3",
              "c) 1 and 4",
              "d) 2 and 4"
            ]
          }
        ]
      }
    ]
  }
];

export const examTimeLimit = 3600; // 1 hour in seconds

