export default [
  {
    type: 'boolean',
    title: 'BOOLEAN question 1',
    options: {
      labelTrue: 'yes',
      labelFalse: 'no'
    },
    nested: [
      {
        type: 'multiple',
        title: 'MULTIPLE question 1',
        options: {
          exact: 2,
          choices: ['one', 'two', 'three', 'four', 'five', 'six']
        },
        nested: [
          {
            type: 'boolean',
            title: 'BOOLEAN question 2',
            options: {
              labelTrue: 'SURE',
              labelFalse: 'NOPE'
            },
            nested: [
              {
                type: 'numeric',
                title: 'NUMERIC question 1',
                nested: []
              }
            ]
          }
        ]
      }
    ]
  },
  {
    type: 'multiple',
    title: 'MULTIPLE question 2',
    options: {
      min: 3,
      choices: ['a', 'b', 'c', 'd', 'e', 'f']
    },
    nested: [
      {
        type: 'numeric',
        title: 'NUMERIC question 2',
        nested: []
      }
    ]
  }
];
