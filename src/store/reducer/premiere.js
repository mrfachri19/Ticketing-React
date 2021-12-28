const initialState = {
  premiere: [],
  pageInfo: {},
  isError: false,
  isLoading: false,
  isUpdate: false,
  message: "",
};

export default function getAllPremiere(state = initialState, action) {
  switch (action.type) {
    case "SETUPDATE": {
      return {
        ...state,
        data: action.data,
        id: action.id,
      };
    }
    case "GETALLPREMIERE_PENDING": {
      return {
        ...state,
        isError: false,
        isLoading: false,
        message: "",
      };
    }
    case "GETALLPREMIERE_FULFILLED": {
      return {
        ...state,
        isError: false,
        isLoading: false,
        premiere: action.payload.data.data,
        message: action.payload.data.message,
        pageInfo: action.payload.data.pagination,
      };
    }
    case "GETALLPREMIERE_REJECTED": {
      return {
        ...state,
        isError: true,
        isLoading: true,
        message: "",
      };
    }
    case "POSTPREMIERE_PENDING": {
      return {
        ...state,
        isError: false,
        isLoading: false,
        message: "",
      };
    }
    case "POSTPREMIERE_FULFILLED": {
      return {
        ...state,
        isError: false,
        isLoading: false,
        message: action.payload.data.message,
      };
    }
    case "POSTPREMIERE_REJECTED": {
      return {
        ...state,
        isError: true,
        isLoading: true,
        message: action.payload.data.message,
      };
    }
    case "UPDATEPREMIERE_PENDING": {
      return {
        ...state,
        isError: false,
        isLoading: false,
        message: "",
      };
    }
    case "UPDATEPREMIERE_FULFILLED": {
      return {
        ...state,
        isError: false,
        isLoading: false,
        message: action.payload.data.message,
      };
    }
    case "UPDATEPREMIERE_REJECTED": {
      return {
        ...state,
        isError: true,
        isLoading: true,
        message: action.payload.data.message,
      };
    }
    case "DELETEPREMIERE_PENDING": {
      return {
        ...state,
        isError: false,
        isLoading: false,
        message: "",
      };
    }
    case "DELETEPREMIERE_FULFILLED": {
      return {
        ...state,
        isError: false,
        isLoading: false,
        message: action.payload.data.message,
      };
    }
    case "DELETEPREMIERE_REJECTED": {
      return {
        ...state,
        isError: true,
        isLoading: false,
        message: action.payload.data.message,
      };
    }
    case "SEARCHPREMIERE": {
      return {
        ...state,
        data: action.payload.data.data,
        message: action.payload.data.message,
      };
    }

    default: {
      return state;
    }
  }
}
