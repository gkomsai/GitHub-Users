
 const githubReducer = (state, {type, payload}) => {
  console.log(payload);
    switch (type) {
      case "GITHUB_USER_LOADING": {
        return {
          ...state,
          isLoading: true,
          isError: false
        };
      }
      case "GITHUB_USER_SUCCESS": {
        return {
          ...state,
          isLoading: false,
          data: payload
        };
      }
      case "GITHUB_USER_FAILURE": {
        return {
          ...state,
          isLoading: false,
          isError: true
        };
      }
      default:
        return state;
    }
  };
  
  export default githubReducer;


