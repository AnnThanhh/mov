import React, { Component } from "react";
import { connect } from "react-redux";
import HangGhe from "./hangghe";

class DatVe extends Component {
  renderListSeats = () => {
    const { danhSach } = this.props;

    return danhSach?.map((hangGhe, index) => {
      return (
        <div key={index} className="text-light" style={{ fontSize: 20 }}>
          <HangGhe hangGhe={hangGhe} />
        </div>
      );
    });
  };

  render() {
    return (
      <div className="container-fluid">
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundImage: "url('./images/bgmovie.jpg')",
            backgroundSize: "100%",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0,0,0,0.7)",
            }}
          >
            <p style={{ color: "orange" }} className="p-2">
              Fill The Required Details Below And Select Your Seats
            </p>
            <form className="p-2">
              <div className="form-group text-light">
                <label htmlFor="exampleInputName">Name *</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputName"
                  aria-describedby="nameHelp"
                  style={{ width: "200px" }}
                />
              </div>
              <div className="form-group text-light">
                <label htmlFor="exampleInputNumber">Number Of Seats *</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputNumber"
                  style={{ width: "200px" }}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Start Selecting
              </button>
            </form>

            <div className="m-3">
              <button className="gheDangChon px-3"></button>
              <span className="text-light" style={{ fontSize: "20px" }}>
                {" "}
                Selected Seat{" "}
              </span>
              <button className="gheDuocChon px-3"></button>
              <span className="text-light" style={{ fontSize: "20px" }}>
                {" "}
                Reserved Seat{" "}
              </span>
              <button className="ghe px-3"></button>
              <span className="text-light" style={{ fontSize: "20px" }}>
                {" "}
                Empty Seat{" "}
              </span>
            </div>
            <div>{this.renderListSeats()}</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    //key: value
    danhSach: state.userReducer.listSeats,
  };
};

export default connect(mapStateToProps, null)(DatVe);
