// @ts-nocheck
import {
  createBrowserHistory,
  History
} from "/Users/kyo/github/react-use-page-model/node_modules/_@umijs_runtime@3.4.7@@umijs/runtime";

let options = {
  basename: "/"
};
if ((<any>window).routerBase) {
  options.basename = (<any>window).routerBase;
}

// remove initial history because of ssr
let history: History = process.env.__IS_SERVER
  ? null
  : createBrowserHistory(options);
export const createHistory = (hotReload = false) => {
  if (!hotReload) {
    history = createBrowserHistory(options);
  }

  return history;
};

export { history };
