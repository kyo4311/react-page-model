import * as React from "react";

const PageModelContext = React.createContext({});

export function usePageModel() {
  return React.useContext(PageModelContext);
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
