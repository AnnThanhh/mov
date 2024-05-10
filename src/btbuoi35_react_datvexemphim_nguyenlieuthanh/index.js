import React, { Component } from 'react'
import Header from './header.js';
import DatVe from './datvexemphim.js';
import Footer from './footer.js';
import ThongTin from './thongtin.js';
// import {connect} from "react-redux";
// import data from "./data.json";

export default class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <DatVe />
        <ThongTin />
        <Footer />
      </>
    )
  }
}
