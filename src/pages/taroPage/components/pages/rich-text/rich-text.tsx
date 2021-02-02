import React from "react";
import { RichText, View } from "@tarojs/components-rn";
import Header from "../../components/head/head";
import "./index.scss";

export default class PageCheckbox extends React.Component {
  state = {
    nodes: [
      {
        name: "div",
        attrs: {
          class: "div_class",
          style: `
            line-height: 60px;
            color: white;
            font-size: 60px;
          `
        },
        children: [
          {
            type: "text",
            text: "Hello World!"
          }
        ]
      }
    ]
  };
  render() {
    return (
      <View className='components-page'>
        <View className='components-page__header'>
          <Header title='Form'></Header>
        </View>
        <RichText className='rich-text' nodes={this.state.nodes} />
      </View>
    );
  }
}
