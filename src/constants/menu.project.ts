import { IMenuItemProps } from "@/utils/menu";

export const permissions={
  project:{
    base:`app.project`, // 项目菜单权限
    siteOverView:`app.project.siteOverView`, // 中心概况
    projectOverView:`app.project.projectOverView`, // 中心概况
  }
}

const menus:IMenuItemProps[] = [
  {
    name: 'project',
    icon: 'project',
    path: 'project',
    authority:permissions.project.base,
    children: [
      {
        name: 'siteOverView',
        path: 'siteOverView',
      },
      {
        name: 'projectOverView',
        path: 'projectOverView',
      }
    ],
  },
];

export default menus;