import React from "react";
import { createStore } from "redux";
const isServer = typeof window === "undefined";
const __NEXT_REDUX__STORE = "__NEXT_REDUX__STORE";

function getOrCreateStore(initialState) {
  if (isServer) {
    return createStore((state, action) => {
      return state;
    }, initialState);
  }

  if (!window[__NEXT_REDUX__STORE]) {
    window[__NEXT_REDUX__STORE] = createStore((state, action) => {
      return state;
    }, initialState);

    return window[__NEXT_REDUX__STORE];
  }
}

export default (Comp) => {
  class WithReduxApp extends React.Component {
    constructor(props) {
      super(props);
      this.reduxStore = getOrCreateStore(
        (state, action) => state,
        props.initialReduxState
      );
    }
    render() {
      const { Component, pageProps, ...rest } = this.props;
      if (pageProps) {
        pageProps.redux = "redux";
      }

      return (
        <Comp
          reduxStore={this.reduxStore}
          Component={Component}
          pageProps={pageProps}
          {...rest}
        />
      );
    }
  }

  WithReduxApp.getInitialProps = async (ctx) => {
    const reduxStore = getOrCreateStore();
    ctx.reduxStore = reduxStore;

    let appProps = {};
    if (typeof Comp.getInitialProps === "function") {
      appProps = await Comp.getInitialProps();
    }

    return {
      ...appProps,
      initialReduxState: reduxStore.getState(),
    };
  };

  return WithReduxApp;
};
