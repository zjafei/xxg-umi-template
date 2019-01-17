import request, { RequestOptionsInit } from 'umi-request';
import { omit, assign } from 'lodash';
import { notification } from 'antd';
import { getToken } from "@/utils/store";

interface IRequestOption extends RequestOptionsInit {
  showTip?: boolean, // 操作成功是否提示
  url: string, // 请求的url
}

// request拦截器,请求头增加Authorization token等信息
request.interceptors.request.use((url, options) => {
  assign(options.headers, {
    'Authorization':getToken()
    // '.AspNetCore.Culture':
  })
  return ({
    options
  });
});

// // response拦截器, 处理response
// request.interceptors.response.use((response, options) => {
//   // response.headers.append('interceptors', 'yes yo');
//   debugger;
//   if (response.status === 200) {
//     return response.json().then(result=>{
//       debugger;
//       return result.data;
//     })
//   }
//   return response;
// });

export const fetch = (opt: IRequestOption) => {
  const options = omit(opt, 'url');
  const fetchOption: RequestOptionsInit = {
    requestType: 'json',
    responseType: 'json',
    showTip: true,
    errorHandler: (error) => {
      const { Message = "出错啦！！！", Errors = "请联系管理员或重试。" } = error["data"];
      notification.error({
        message: Message,
        description: Errors
      });
    },
    ...options
  }
  const { url } = opt;
  return request(url, fetchOption).then(result=>{
    return result.data;
  });
}

export const get = (opt: IRequestOption) => {
  const options = omit(opt, 'data');
  return fetch({
    ...options,
    method: 'get',
    params: opt.data,
    showTip: false
  });
};

export const post = (opt: IRequestOption) => {
  return fetch({
    ...opt,
    method: 'post',
    showTip: true
  });
};

export const put = (opt: IRequestOption) => {
  return fetch({
    ...opt,
    method: 'put',
    showTip: true
  });
};

export const patch = (opt: IRequestOption) => {
  return fetch({
    ...opt,
    method: 'patch',
    showTip: true
  });
};

export const del = (opt: IRequestOption) => {
  return fetch({
    ...opt,
    method: 'delete',
    showTip: true
  });
};

export default fetch;