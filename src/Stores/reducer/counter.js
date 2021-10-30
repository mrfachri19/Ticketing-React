const initialState = {
  count: 0
};

const counter = (state = initialState, action) => {
  switch (action.type) {
    case "INCREASE": {
      // let checkCount;
      // if (state.count === 5) {
      //   checkCount = true;
      // } else {
      //   checkCount = false;
      // }
      return {
        ...state,
        count: state.count + 1
      };
    }
    default: {
      return {
        ...state
      };
    }
  }
};
export default counter;
