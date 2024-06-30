import axios from 'axios'
import qs from 'qs'

const service = axios.create({
  baseURL: '/api',
  timeout: 3000,
  withCredentials: true
})

// 添加请求拦截器
service.interceptors.request.use(config => {
  if(config.data){
    config.data=qs.stringify(config.data);
  }
  return config;
}, error => {
  return Promise.reject(error);
});

// 添加响应拦截器
service.interceptors.response.use(response => {
  if (response.status === 200) {
    return response;
  }

}, error => {
  return Promise.reject(error);
});

export default service