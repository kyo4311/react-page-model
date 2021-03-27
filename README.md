# React Page Model

The react state management tool for page level

## Getting Started

Install dependencies,

```bash
$ npm install react-page-model --save
```

**One page, one model**

Create a model that only works on one page,The following table of contents is for reference only.

```
project
└── src
    └── pages
        ├── page1
        │   ├── index.ts
        │   ├── model.ts
        │   ├── part1.ts
        │   ├── part2.ts
        └── page2
            ├── index.ts
            ├── model.ts
            ├── part1.ts
            └── part2.ts
```

**Using react hooksas state management on model.ts**

```ts
import { useState } from "react";

export default function ExampleModel() {
  const [count, setCount] = useState(0);

  return {
    count,
    setCount
  };
}
```

**Inject model**

Using `withPageModel` to inject model into page.

```ts
import React from "react";
import { withPageModel } from "react-page-model";
import model from "./model";

const Example: React.FC<{}> = () => {
  return <div />;
};

export default withPageModel(model)(Example);
```

**Use model**

Any component under the page can use the same status

```ts
import React from "react";
import { usePageModel } from "react-page-model";

const Part1 = () => {
  const { count, setCount } = usePageModel();

  const handChangeCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <div>count: {count}</div>
      <button onClick={handChangeCount}>Change count</button>
    </div>
  );
};

export default Part1;
```
