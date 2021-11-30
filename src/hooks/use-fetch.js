import {
  //  useState, useEffect,
  useCallback,
  useReducer,
} from 'react';

// const useFetch = (requestFunction, requestData) => {
//   const [response, setResponse] = useState(null);
//   const [error, setError] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       setIsLoading(true);
//       try {
//         const res = await requestFunction(requestData);
//         setResponse(res);
//       } catch (err) {
//         // setIsLoading(false);
//         // setResponse(null);
//         setError(err.message || 'Something went wrong!');
//       }
//       setIsLoading(false);
//     };

//     fetchData();
//   }, [requestFunction, requestData]);

//   return { response, error, isLoading };
// };

// const useFetch = (requestFunction, requestData = null) => {
//   const [response, setResponse] = useState({
//     data: null,
//     isLoading: true,
//     error: null,
//   });

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await requestFunction(requestData);
//         setResponse({
//           data: res,
//           isLoading: false,
//           error: null,
//         });
//       } catch (err) {
//         setResponse({
//           data: null,
//           isLoading: false,
//           error: err.message || 'Something went wrong!',
//         });
//       }
//     };

//     fetchData();
//   }, [requestFunction, requestData]);

//   return response;
// };

function httpReducer(state, action) {
  if (action.type === 'SEND') {
    return {
      data: null,
      error: null,
      status: 'pending',
    };
  }

  if (action.type === 'SUCCESS') {
    return {
      data: action.responseData,
      error: null,
      status: 'completed',
    };
  }

  if (action.type === 'ERROR') {
    return {
      data: null,
      error: action.errorMessage,
      status: 'completed',
    };
  }

  return state;
}

function useFetch(requestFunction, startWithPending = false) {
  const [httpState, dispatch] = useReducer(httpReducer, {
    status: startWithPending ? 'pending' : null,
    data: null,
    error: null,
  });

  const sendRequest = useCallback(
    async function (requestData) {
      dispatch({ type: 'SEND' });
      try {
        const responseData = await requestFunction(requestData);
        dispatch({ type: 'SUCCESS', responseData });
      } catch (error) {
        dispatch({
          type: 'ERROR',
          errorMessage: error.message || 'Something went wrong!',
        });
      }
    },
    [requestFunction]
  );

  return {
    sendRequest,
    ...httpState,
  };
}

export default useFetch;
