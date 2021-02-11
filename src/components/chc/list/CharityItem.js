import React from "react";
import { Layout } from "antd";

const { Header, Footer, Sider, Content } = Layout;

export default function CharityItem(props) {
  return (
    <Layout>
      <Sider width={100} style={{ backgroundColor: "red" }}>fdsf</Sider>

      <Layout>
        <Layout>
        <Sider  style={{ backgroundColor: "blue" }}>{props.name}</Sider>

          <Header style={{ backgroundColor: "green" }}>{props.revenue}</Header>

        </Layout>
        <Footer>{props.description}</Footer>
      </Layout>
        <Sider width={100} style={{ backgroundColor: "red" }}>
         {props.rank}
        </Sider>
    </Layout>
  );
}
