const initialState = {
  dataUser: {},
  isError: false,
  isLoading: false,
  msg: ""
};

const getdatauser = (state = initialState, action) => {
  switch (action.type) {
    case "GETUSER_PENDING": {
      return {
        ...state,
        isLoading: true,
        isError: false,
        msg: ""
      };
    }
    case "GETUSER_FULFILLED": {
      return {
        ...state,
        isLoading: false,
        isError: false,
        dataUser: action.payload.data.data[0], //action.payload = res
        msg: action.payload.data.msg
      };
    }
    case "GETUSER_REJECTED": {
      return {
        ...state,
        isLoading: false,
        isError: true,
        msg: action.payload.response.data.msg
      };
    }
    default: {
      return state;
    }
  }
};

export default getdatauser;
