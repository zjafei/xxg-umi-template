import { isUrl } from "@/utils";
import memoizeOne from "memoize-one";
import { isEqual } from "lodash";

/**
 * 单项菜单的属性
 */
export interface IMenuItemProps {
    name: string,    // 名称 建议字符串，如果是多语言的情况 最终的多语言key为:menu.[父级].[name]
    icon?: string,   // 使用的图标 一般指类型
    selfIcon?: boolean,  // 是否使用自定义图标，是则使用自定义组件中的icon
    path: string,    // 路径,只需要写子菜单的，将自动拼接父级
    children?: IMenuItemProps[], // 子菜单    
    authority?: string | string[],   // 该菜单需要的权限 支持字符串或者字符串数组(子菜单默认集成父级的)
    hideInBreadcrumb?: boolean,  // 是否在面包屑中隐藏
    hideInMenu?: boolean,    // 是否在菜单中隐藏
}

function formatter(data: IMenuItemProps[], parentPath: string = '/', parentAuthority: string | string[] = '') {
    return data.map(item => {
        let { path } = item;
        if (!isUrl(path)) {
            path = parentPath + item.path;
        }
        const result = {
            ...item,
            path,
            authority: item.authority || parentAuthority,
        };
        if (item.children) {
            result.children = formatter(item.children, `${parentPath}${item.path}/`, item.authority);
        }
        return result;
    });
}

const getMenus = memoizeOne(
    (datas: IMenuItemProps[], permissions: string[]) => {
        const allMenus= formatter(datas);
        return allMenus;
    },
    isEqual
)

export default getMenus;