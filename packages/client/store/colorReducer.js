export const TURN_ON_LIGHT = 'TURN_ON_LIGHT';
export const TURN_OFF_LIGHT = 'TURN_OFF_LIGHT';
export const CHANGE_COLOR = 'CHANGE_COLOR';
export const INCREASE = 'INCREASE_BRIGHTNESS';
export const DECREASE = 'DECREASE_BRIGHTNESS';

const color = '#000000';
const opacity = 1;

const getRandomColor = () => {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export default {
  color: (state = color, { type, payload }) => {
    if (type === CHANGE_COLOR) {
      return getRandomColor();
    }
    return state;
  },

  opacity: (state = opacity, { type, payload }) => {
    if (type === TURN_ON_LIGHT) {
      return 1;
    }

    if (type === TURN_OFF_LIGHT) {
      return 0;
    }
    if (type === DECREASE) {
      if (state - 0.1 >= 0) {
        console.log(state);
        return state - 0.1;
      } else {
        return state;
      }
    }

    if (type === INCREASE) {
      if (state + 0.1 <= 1) {
        console.log(state);
        return state + 0.1;
      }
      return state;
    }
    return state;
  }
};
