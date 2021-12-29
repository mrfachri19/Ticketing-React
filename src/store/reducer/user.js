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
    case "UPDATEPASSWORD_PENDING": {
      return {
        ...state,
        isLoading: false,
        isError: false,
        message: "",
      };
    }
    case "UPDATEPASSWORD_FULFILLED": {
      return {
        ...state,
        isLoading: false,
        isError: false,
        message: action.payload.data.message,
      };
    }
    case "UPDATEPASSWORD_REJECTED": {
      return {
        ...state,
        isLoading: true,
        isError: true,
      };
    }
    case "GETDASHBOARD_PENDING": {
      return {
        ...state,
        data: [],
        isLoading: false,
        isError: false,
        message: "",
      };
    }
    case "GETDASHBOARD_FULFILLED": {
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data.data,
        message: action.payload.data.message,
      };
    }
    case "GETDASHBOARD_REJECTED": {
      return {
        ...state,
        isLoading: true,
        isError: true,
        message: action.payload,
      };
    }

    case "TICKETUSED_PENDING": {
      return {
        ...state,
        isLoading: false,
        isError: false,
        tickedUsed: "",
        message: "",
      };
    }
    case "TICKETUSED_FULFILLED": {
      return {
        ...state,
        isLoading: false,
        isError: false,
        tickedUsed: action.payload.data.data.statusTicket,
        data: action.payload.data.data,
        message: action.payload.data.message,
      };
    }
    case "TICKETUSED_REJECTED": {
      return {
        ...state,
        isLoading: true,
        isError: true,
        tickedUsed: "",
        message: action.payload.data.message,
      };
    }

    default: {
      return {
        ...state,
      };
    }
  }
}
