export default [
  {
    type: "boolean",
    title: "boolean question title 1",
    options: {
      labelFalse: "no",
      labelTrue: "yes",
    },
    nested: [
      {
        type: "multiple",
        title: "MULTIPLE question title 1",
        options: {
          exact: 2,
          choices: ["one", "two", "three", "four", "five", "six"],
        },
        nested: [
          {
            type: "boolean",
            title: "boolean question title 2",
            options: {
              labelFalse: "no",
              labelTrue: "yes",
            },
            nested: [],
          },
        ],
      },
    ],
  },
];
