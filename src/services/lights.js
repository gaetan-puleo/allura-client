import { ROOT_URL } from "../constants/url";
import axios from "redaxios";

export default function getLights() {
  return axios({
    method: "get",
    url: ROOT_URL + ":3000/lights",
  });
}


export function getLightById(id) {
  return axios({
    method: "get",
    url: ROOT_URL + ":3000/lights/" + id,
  });
}


export function setPowerById(id, power) {
  return axios({
    data: { power },
    method: "post",
    url: ROOT_URL + ":3000/lights/" + id + "/power",
  });
}

export function setRGBById(id, rgb) {
  return axios({
    data: { rgb },
    method: "post",
    url: ROOT_URL + ":3000/lights/" + id + "/rgb",
  });
}

export function setBrightById(id, bright) {
  return axios({
    data: { bright },
    method: "post",
    url: ROOT_URL + ":3000/lights/" + id + "/bright",
  });
}

export function setCTById(id, ct) {
  return axios({
    data: { ct },
    method: "post",
    url: ROOT_URL + ":3000/lights/" + id + "/ct",
  });
}
