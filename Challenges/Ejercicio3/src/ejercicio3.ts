
const treeExample = [
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

interface TreeArray extends Array<Tree> {}

type Tree = string | TreeArray;

const functionArrayExample = (arg: Tree) => {}

functionArrayExample(treeExample);