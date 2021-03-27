// @ts-nocheck
import React from "react";
import { ApplyPluginsType } from "/Users/kyo/github/react-use-page-model/node_modules/_@umijs_runtime@3.4.7@@umijs/runtime";
import * as umiExports from "./umiExports";
import { plugin } from "./plugin";

export function getRoutes() {
  const routes = [
    {
      path: "/~demos/:uuid",
      layout: false,
      wrappers: [
        require("/Users/kyo/github/react-use-page-model/node_modules/_@umijs_preset-dumi@1.1.10@@umijs/preset-dumi/lib/theme/layout")
          .default
      ],
      component: props => {
        const {
          default: getDemoRenderArgs
        } = require("/Users/kyo/github/react-use-page-model/node_modules/_@umijs_preset-dumi@1.1.10@@umijs/preset-dumi/lib/plugins/features/demo/getDemoRenderArgs");
        const {
          default: Previewer
        } = require("dumi-theme-default/src/builtins/Previewer.tsx");
        const { default: demos } = require("@@/dumi/demos");
        const { usePrefersColor } = require("dumi/theme");

        const renderArgs = getDemoRenderArgs(props, demos);

        // for listen prefers-color-schema media change in demo single route
        usePrefersColor();

        switch (renderArgs.length) {
          case 1:
            // render demo directly
            return renderArgs[0];

          case 2:
            // render demo with previewer
            return React.createElement(Previewer, renderArgs[0], renderArgs[1]);

          default:
            return `Demo ${props.match.params.uuid} not found :(`;
        }
      }
    },
    {
      path: "/_demos/:uuid",
      redirect: "/~demos/:uuid"
    },
    {
      __dumiRoot: true,
      layout: false,
      path: "/",
      wrappers: [
        require("/Users/kyo/github/react-use-page-model/node_modules/_@umijs_preset-dumi@1.1.10@@umijs/preset-dumi/lib/theme/layout")
          .default,
        require("/Users/kyo/github/react-use-page-model/node_modules/_@umijs_preset-dumi@1.1.10@@umijs/preset-dumi/node_modules/dumi-theme-default/src/layout.tsx")
          .default
      ],
      routes: [
        {
          path: "/",
          component: require("/Users/kyo/github/react-use-page-model/README.md")
            .default,
          exact: true,
          meta: {
            locale: "en-US",
            title: "React Page Model",
            order: null
          },
          title: "React Page Model"
        },
        {
          path: "/example",
          component: require("/Users/kyo/github/react-use-page-model/docs/Example/index.md")
            .default,
          exact: true,
          meta: {
            filePath: "docs/Example/index.md",
            updatedTime: 1616812408750,
            componentName: "Example",
            slugs: [
              {
                depth: 1,
                value: "Example",
                heading: "example"
              }
            ],
            title: "Example",
            group: {
              path: "/example",
              title: "Example"
            }
          },
          title: "Example"
        }
      ],
      title: "react-page-model",
      component: props => props.children
    }
  ];

  // allow user to extend routes
  plugin.applyPlugins({
    key: "patchRoutes",
    type: ApplyPluginsType.event,
    args: { routes }
  });

  return routes;
}
