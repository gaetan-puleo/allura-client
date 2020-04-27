import { useReducer, useEffect } from "react";
import getLights, {
  setPowerById,
  setRGBById,
  setBrightById,
  setCTById,
} from "../services/lights";

function reducer(state, action) {
  switch (action.type) {
    case "INIT_LIGHTS":
      return action.lights;
    case "SET_LIGHT":
      const test = {
        ...state,
        [action.light.id]: {
          ...state[action.light.id],
          ...action.light,
        },
      };

      return test;
    default:
      return state;
  }
}

export default function useLights() {
  const [states, dispatch] = useReducer(reducer, {});

  const setPower = ({ id, power }) => {
    dispatch({ type: "SET_LIGHT", light: { id, power } });
    return setPowerById(id, power);
  };

  const setRGB = ({ id, rgb }) => {
    return setRGBById(id, Object.values(rgb)).then((res) => {
      const light = res.data.light;
      return dispatch({
        type: "SET_LIGHT",
        light: {
          bright: light.bright,
          hsb: light.hsb,
          rgb: light.rgb,
          id,
        },
      });
    });
  };

  const setBright = ({ id, bright }) => {
    return setBrightById(id, bright).then((res) => {
      const light = res.data.light;
      return dispatch({
        type: "SET_LIGHT",
        light: { id, bright: light.bright, hsb: light.hsb, rgb: light.rgb },
      });
    });
  };

  const setCT = ({ id, ct }) => {
    return setCTById(id, ct).then((res) => {
      const light = res.data.light;
      return dispatch({
        type: "SET_LIGHT",
        light: { id, bright: light.bright, hsb: light.hsb, rgb: light.rgb },
      });
    });
  };

  useEffect(() => {
    getLights().then((results) => {
      const lights = Object.values(results.data)
        .map((light) => {
          return {
            id: light.id,
            connected: light.connected,
            power: light.power,
            bright: light.bright,
            rgb: light.rgb,
            hsb: light.hsb,
          };
        })
        .reduce((prev, current) => {
          return {
            ...prev,
            [current.id]: current,
          };
        }, {});

      return dispatch({ type: "INIT_LIGHTS", lights });
    });
  }, []);

  return { lights: states, setPower, setRGB, setBright, setCT };
}
