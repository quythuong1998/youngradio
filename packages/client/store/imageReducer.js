export const GET_IMAGES = 'GET_IMAGES';
export const SET_DEFAULT = 'SET_DEFAULT';

const initState = {
  images: [
    { id: 1, icon: 'traffic-light' },
    { id: 2, icon: 'lightbulb' },
    { id: 3, icon: 'bolt' }
  ],
  defaultSelected: { id: 1, icon: 'lightbulb' }
};

export default {
  images: (state = initState.images, { type, payload }) => {
    if (type === GET_IMAGES) {
      return { ...state };
    }

    return state;
  },
  defaultSelected: (state = initState.defaultSelected, { type, payload }) => {
    if (type === SET_DEFAULT) {
      const defaultSelected =
        initState.images.filter(e => e.id === payload)[0] ||
        initState.defaultSelected;
      return defaultSelected;
    }
    return state;
  }
};
