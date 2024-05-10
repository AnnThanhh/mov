import React, { Component } from "react";
import { connect } from "react-redux";
import { datGheAction } from "../store/action";

class HangGhe extends Component {
  renderGhe = () => {
    return this.props.hangGhe.danhSachGhe.map((ghe, index) => {
      let cssGheDaDat = "";
      if (ghe.daDat) {
        cssGheDaDat = "gheDuocChon";
      }
      // xac dinh trang thai ghe dang dat
      let cssGheDangDat = "";
      let indexGheSelect = this.props.danhSachGheSelect.findIndex(
        (gheDangDat) => gheDangDat.soGhe === ghe.soGhe
      );
      if (indexGheSelect !== -1) {
        cssGheDangDat = "gheDangChon";
      }

      return (
        <button
          onClick={() => {
            this.props.datGhe(ghe);
          }}
          className={`ghe ${cssGheDaDat} ${cssGheDangDat}`}
          key={index}
        >
          {ghe.soGhe}
        </button>
      );
    });
  };

  render() {
    return (
      <div className="text-light text-left ml-5 mt-3 text-center">
        {this.props.hangGhe.hang}
        {this.renderGhe()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    danhSachGheSelect: state.userReducer.danhSachGheSelect,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    datGhe: (ghe) => {
      dispatch(datGheAction(ghe));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HangGhe);
