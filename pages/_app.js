import App, { Container } from "next/app";
import "antd/dist/antd.css";
import Layout from "../components/Layout";
import styled from "styled-components";

const Title = styled.h1`
  color: yellow;
  font-size: 40px;
`;

class MyApp extends App {
  static async getInitialProps(nextProps) {
    let pageProps = {};
    if (nextProps.Component.getInitialProps) {
      pageProps = await nextProps.Component.getInitialProps();
    }

    return {
      pageProps,
    };
  }
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Layout>
          <Title>ddd</Title>
          <Component {...pageProps} />
        </Layout>
      </Container>
    );
  }
}

export default MyApp;
