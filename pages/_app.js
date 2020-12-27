import App, { Container } from "next/app";
import "antd/dist/antd.css";
import Layout from "../components/Layout";
import styled from "styled-components";
import { Provider } from "react-redux";
import withRedux from "../lib/with-redux";

const Title = styled.h1`
  color: yellow;
  font-size: 40px;
`;

class MyApp extends App {
  static async getInitialProps(ctx) {
    let pageProps = {};
    if (ctx && ctx.Component && ctx.Component.getInitialProps) {
      pageProps = await ctx.Component.getInitialProps();
    }

    return {
      pageProps,
    };
  }
  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <Container>
        <Layout>
          <Provider store={reduxStore}>
            <Title>Title</Title>
            <Component {...pageProps} />
          </Provider>
        </Layout>
      </Container>
    );
  }
}

export default withRedux(MyApp);
