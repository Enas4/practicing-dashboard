import axios from "axios";

const client = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

// Add a request interceptor
client.interceptors.request.use(
  function (config) {
    config.headers.token = "123";
    console.log("config: ", config);
    // Do something before request is sent
    console.log("request int");
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
client.interceptors.response.use(
  function (response) {
    response.data.chemical = { chem1: "stearic acid", chem2: "polysorbate" };
    console.log("response: ", response);
    console.log("response int");
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

//4 methods of axios
//returning get() promise
//first param is url second is config (optional)

export const get = (url, config = {}) => client.get(url, config);

export const post = (url, config = {}) => client.post(url, config);

export const put = (url, config = {}) => client.put(url, config);

export const remove = (url, config = {}) => client.remove(url, config);
