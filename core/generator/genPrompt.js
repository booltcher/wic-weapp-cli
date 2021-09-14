const genInitPrompt = (projectName) => [
    {
      name: "Name",
      messge: "Application Name:",
      type: "input",
      default: projectName,
    },
    {
      name: "Tabbar",
      messge: "Do you need a Tabbar in your project?",
      type: "confirm",
    },
    {
      name: "Tabbar list",
      when: (answer) => answer.Tabbar,
      messge: "Set tabbar list.",
      type: "input",
      default: "index,user",
    },
    {
      name: "Modules",
      messge: "Check the built-in modules needed for your project.",
      type: "checkbox",
      pageSize: 10,
      choices: [
        {
          name: "Address",
          value: "Address",
          short: "Address",
          description:
            "Address managent consist of: pages(addressList, addressInfo), component(addressPicker)",
          link: "",
        },
        {
          name: "Message",
          value: "Message",
          short: "Message",
          description:
            "Message managent consist of: pages(messgaeList, messageInfo)",
          link: "",
        },
        {
          name: "Order",
          value: "Order",
          short: "Order",
          description: "Order managent consist of: pages(orderList, orderInfo)",
          link: "",
        },
        {
          name: "Category",
          value: "Category",
          short: "Category",
          description: "a category page",
          link: "",
        },
        {
          name: "Search",
          value: "Search",
          short: "Search",
          description: "a search page",
          link: "",
        },
        {
          name: "Feedback",
          value: "Feedback",
          short: "Feedback",
          description: "a feedback page",
          link: "",
        },
        {
          name: "Evaluate",
          value: "Evaluate",
          short: "Evaluate",
          description: "a evaluate page",
          link: "",
        },
      ],
    },
    {
      name: "Category sidebar",
      when: (answer) => answer.Modules.includes("Category"),
      messge: "Category page with a sidebar",
      type: "confirm",
    },
    {
      name: "Components",
      messge: "Check the built-in components needed for your project.",
      type: "checkbox",
      pageSize: 10,
      choices: [
        {
          name: "Product card",
          value: "Product card",
          short: "Product card",
          description: "a product card component",
          link: "",
        },
  
        {
          name: "Address Picker",
          value: "Address Picker",
          short: "Address Picker",
          description: "a address picker component",
          link: "",
        },
      ],
    },
  ];
  module.exports = {
    genInitPrompt,
  };
  