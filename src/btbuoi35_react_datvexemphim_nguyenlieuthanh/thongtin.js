import React, { Component } from "react";
import { connect } from "react-redux";
import { huyGheAction } from "../store/action";

class ThongTin extends Component {
  render() {
    return (
      <div className="container-fluid">
        <h2
          className="text-center px-2 py-3"
          style={{ backgroundColor: "orange", color: "black" }}
        >
          SCREEN THIS WAY
        </h2>
        <form className="text-center">
          <button type="submit" className="btn btn-primary">
            Confirm Selection
          </button>
        </form>
        <table className="table" border={1}>
          <thead>
            <tr className="text-light bg-dark">
              <th>Name</th>
              <th>Number Of Seats</th>
              <th>Seats</th>
            </tr>
          </thead>
          <tbody>
            {this.props.danhSachGheSelect.map((gheDangDat, index) => {
              return (
                <tr key={index}>
                  <td>{gheDangDat.soGhe}</td>
                  <td>{gheDangDat.gia.toLocaleString()}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        this.props.dispatch(huyGheAction(gheDangDat.soGhe));
                      }}
                    >
                      Hủy
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr className="text-danger">
              <td></td>
              <td>Tổng Tiền:</td>
              <td>
                {this.props.danhSachGheSelect
                  .reduce((tongTien, gheDangDat, index) => {
                    return (tongTien += gheDangDat.gia);
                  }, 0)
                  .toLocaleString()}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    danhSachGheSelect: state.userReducer.danhSachGheSelect,
  };
};

export default connect(mapStateToProps)(ThongTin);
