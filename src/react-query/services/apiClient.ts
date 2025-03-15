import axios, { AxiosRequestConfig } from "axios";

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com"
})

class APIClient<T> {

  endPoint: string;

  constructor(endPoint: string) {
    this.endPoint = endPoint;
  }

  getAll = (params?: AxiosRequestConfig) => {
    return axiosInstance
      .get<T[]>(this.endPoint, params)
      .then(res => res.data)
  }

  post = (data: T) => {
    return axiosInstance
      .post(this.endPoint, data)
      .then(res => res.data)
  }
}

export default APIClient;