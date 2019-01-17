import modelExtend from 'dva-model-extend'
import { router } from "umi";
import { getNotifys,getProjectMenus,getCurrentUser,login } from "@/services/common/global";
import { model } from '@/utils/model';
import {savePermissions,saveToken} from '@/utils/store';

export default modelExtend(model, {
    namespace:'global',
    state: {
        notify: {
            MessageCount: 0,
            NotifyCount: 0
        },
        menus: [],// 有权限的菜单列表
        userInfo:{}, // 用户信息
        permissions:[] // 当前用户的权限列表
    },
    effects: {
        *fetchNotifys({ payload }, { call, put }) {
            const result = yield call(getNotifys);
            yield put({
                type: 'updateState',
                payload: {
                    notify:result
                }
            })
        },
        // 当前用户及菜单数据
        *fetchCurrent({payload},{call,put}){
            const currentUser=yield call(getCurrentUser);
            const menus=yield call(getProjectMenus,payload);
            
            yield savePermissions(currentUser.permissions);

            yield put({
                type:'updateState',
                payload:{
                    userInfo:currentUser.userInfo,
                    permissions:currentUser.permissions,
                    menus
                }
            })
        },
        *login({payload},{call,put}){
            const result=yield call(login,payload);
            yield saveToken(result.token);
            yield put(router.push(payload.redirect||'/'))
        }
    }
})