import { get,post } from "@/utils/request";
import projectMenus from "@/constants/menu.project"; // 项目菜单
// import projectMenus from "@/constants/menu.project"; // sis菜单 ...

export async function getNotifys(){
  return get({
      url:`/api/global/login`
  });
}

// 获取当前菜单(可以从后端获取有权限的菜单)
export async function getProjectMenus(){
  return new Promise(resolve=>{
    switch(name){
      default:
        resolve(projectMenus);
        break;
    }    
  })
}

// 拉取当前用户信息(包括基础信息、访问权限信息等)
export async function getCurrentUser(){
  return get({
    url:`/api/global/getCurrentUser`
  })
}

// 登录
export async function login(data){
  return post({
    url:`/api/global/login`,
    data
  })
}