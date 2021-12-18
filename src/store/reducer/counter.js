const initialState = {
  count: 0,
  disabled: false
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
        count: state.count + action.data
        // disabled: state.count === 5 ? true : false
        // disabled: checkCount
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

// STORES/REDUCER/COUNTER.JS
