// data yang akan di tambahkan setelah mendapatkan data
const initialState = {
  users: [],
  data: [],
  isLoading: false,
  isError: false,
  tickedUsed: "",
  message: "",
};

export default function counter(state = initialState, action) {
  switch (action.type) {
    case "GETUSER_PENDING": {
      return {
        ...state,
      };
    }
    case "GETUSER_FULFILLED": {
      return {
        ...state,
        users: action.payload.data.data[0],
      };
    }
    case "GETUSER_REJECTED": {
      return {
        ...state,
      };
    }

    default: {
      return {
        ...state,
      };
    }
  }
}
