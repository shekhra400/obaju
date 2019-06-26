import axios from 'axios';
// import handleError from './handleError';
const SERVER_DOMAIN = process.env.SERVER_DOMAIN || '';
const getHeaders = () => {
  return {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  };
};
// HTTP GET Request - Returns Resolved or Rejected Promise
// export const get = (path) => {
//   return new Promise((resolve, reject) => {
//     axios.get(`${SERVER_DOMAIN}${path}`, getHeaders())
//       .then(response => { resolve(response) })
//       .catch(error => { reject(handleError(error)) });
//   });
// };

const ApiUtils = {

 get : async (path) => {
    try {
        const response = await axios.get(`${SERVER_DOMAIN}${path}`, getHeaders());
        return response;
    } catch (error) {
        console.log('tanoy apiutils', Object.keys(error), error.message); 
    }
},

post: async (path, data) => {
    try {
        const response = await axios.post(`${SERVER_DOMAIN}${path}`, data, getHeaders());
        return {
            data : response.data,
            serviceStatus: response.status,
            errorMessages: []};

    } catch (error) {
        console.log('apiutils',error.response);
        return {
            data : {},
            serviceStatus: error.response.status,
            errorMessages: error.response.data.error ? error.response.data.error : error.response.data 
            };
    }
}
}

// HTTP PATCH Request - Returns Resolved or Rejected Promise
// export const patch = (path, data) => {
//   return new Promise((resolve, reject) => {
//     axios.patch(`${SERVER_DOMAIN}${path}`, data, getHeaders())
//       .then(response => { resolve(response) })
//       .catch(error => { reject(handleError(error)) });
//   });
// };

// // HTTP POST Request - Returns Resolved or Rejected Promise
// export const post = (path, data) => {
//   return new Promise((resolve, reject) => {
//     axios.post(`${SERVER_DOMAIN}${path}`, data, getHeaders())
//       .then(response => { resolve(response) })
//       .catch(error => { reject(handleError(error)) });
//   });
// };

// // HTTP DELETE Request - Returns Resolved or Rejected Promise
// export const del = (path) => {
//   return new Promise((resolve, reject) => {
//     axios.delete(`${SERVER_DOMAIN}${path}`, getHeaders())
//       .then(response => { resolve(response) })
//       .catch(error => { reject(handleError(error)) });
//   });
// };

export default ApiUtils;
