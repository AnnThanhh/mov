// import * as ActionType from "./constants";
//import { Component } from "react";
import data from "./../btbuoi35_react_datvexemphim_nguyenlieuthanh/data.json";
import { DAT_GHE } from "./constants";
import { HUY_GHE } from "./constants";

const initialState = {
  listSeats: data,
  danhSachGheSelect: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case DAT_GHE: {
      let danhSachGheDangDatClone = [...state.danhSachGheSelect];
      let index = danhSachGheDangDatClone.findIndex(
        (gheDangDat) => gheDangDat.soGhe === action.ghe.soGhe
      );
      if (index !== -1) {
        danhSachGheDangDatClone.splice(index, 1);
      } else {
        danhSachGheDangDatClone.push(action.ghe);
      }
      state.danhSachGheSelect = danhSachGheDangDatClone;
      return { ...state };
    }
    case HUY_GHE: {
      let danhSachGheDangDatClone = [...state.danhSachGheSelect];
      let index = danhSachGheDangDatClone.findIndex(
        (gheDangDat) => gheDangDat.soGhe === action.soGhe
      );
      if (index !== -1) {
        danhSachGheDangDatClone.splice(index, 1);
      }
      state.danhSachGheSelect = danhSachGheDangDatClone;
      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default userReducer;
