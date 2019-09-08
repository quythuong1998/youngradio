export const updateDocBuilder = ({ formatData } = {}) => {
  return function(data) {
    if (formatData) {
      data = formatData(data);
    }

    Object.keys(data).forEach(key => (this[key] = data[key]));

    return this;
  };
};
