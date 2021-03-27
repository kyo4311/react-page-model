// @ts-nocheck
import React from "react";
import { dynamic } from "dumi";
import rawCode1 from "!!dumi-raw-code-loader!/Users/kyo/github/react-use-page-model/docs/Example/index.tsx?dumi-raw-code";
import rawCode2 from "!!dumi-raw-code-loader!/Users/kyo/github/react-use-page-model/docs/Example/model.ts?dumi-raw-code";
import rawCode3 from "!!dumi-raw-code-loader!/Users/kyo/github/react-use-page-model/docs/Example/Part1.tsx?dumi-raw-code";
import rawCode4 from "!!dumi-raw-code-loader!/Users/kyo/github/react-use-page-model/docs/Example/Part2.tsx?dumi-raw-code";

export default {
  "docs-example": {
    component: require("/Users/kyo/github/react-use-page-model/docs/Example/index.tsx")
      .default,
    previewerProps: {
      sources: {
        _: { tsx: rawCode1 },
        "model.ts": { import: "./model", content: rawCode2 },
        "Part1.tsx": { import: "./Part1", content: rawCode3 },
        "Part2.tsx": { import: "./Part2", content: rawCode4 }
      },
      dependencies: {
        react: { version: "16.14.0" },
        "react-page-model": { version: "1.0.0" }
      },
      componentName: "Example",
      identifier: "docs-example"
    }
  }
};
