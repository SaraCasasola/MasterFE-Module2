
const treeArrayExample = [
  "level1",
  [
    "level2",
    [
      [
        "level4"
      ],
      "level3",
      "level3"
    ]
  ]
];

interface TreeArray extends Array<TypeTreeArray> {}

type TypeTreeArray = string | TreeArray;

const functionArrayExample = (arg: TypeTreeArray) => {}

functionArrayExample(treeArrayExample);