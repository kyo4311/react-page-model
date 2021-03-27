import * as React from "react";

const PageModelContext = React.createContext({});

export function usePageModel() {
  const c = React.useContext(PageModelContext);

  console.log(c);

  return c;
}

export function withPageModel(model: any) {
  return function(WrapComponent: any) {
    return function(props: any) {
      const value = model();
      return (
        <PageModelContext.Provider value={value}>
          <WrapComponent {...props} />
        </PageModelContext.Provider>
      );
    };
  };
}
