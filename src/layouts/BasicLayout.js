import React, { PureComponent } from 'react';
import { Layout, Menu, Icon } from "antd";
import {withRouter} from 'umi';
import { connect } from 'dva';
import { isEmpty } from "lodash";
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import GlobalFooter from "@/components/GlobalFooter";
import PageLoading from "@/components/PageLoading";
import styles from './BasicLayout.less';

const { Header, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;

@withRouter
@connect(({global})=>({
    menus:global.menus,
    userInfo:global.userInfo,
    permissions:global.permissions
}))
class BasicLayout extends PureComponent {
  state = {
    collapsed: false,
  };

  componentDidMount() {
    const {dispatch}=this.props;
    dispatch({
      type: 'global/fetchCurrent',
    });
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    const {children,location,menus,userInfo,permissions}=this.props;
    if(isEmpty(menus)||isEmpty(userInfo)||isEmpty(permissions)){
      return <PageLoading fullScreen={true} />
    }
    // const accessMenus=getMenus(menus,permissions);
    return (
      <Layout className={styles['wt-layout']}>
        <Sider
          trigger={null}
          collapsible={true}
          collapsed={this.state.collapsed}
        >
          <div className="logo" />
          <Menu
            defaultOpenKeys={['sub1']}
            defaultSelectedKeys={['1']}
            mode="inline"
          >
            <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
              <Menu.Item key="1">Option 1</Menu.Item>
              <Menu.Item key="2">Option 2</Menu.Item>
              <Menu.Item key="3">Option 3</Menu.Item>
              <Menu.Item key="4">Option 4</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigtion Two</span></span>}>
              <Menu.Item key="5">Option 5</Menu.Item>
              <Menu.Item key="6">Option 6</Menu.Item>
              <SubMenu key="sub3" title="Submenu">
                <Menu.Item key="7">Option 7</Menu.Item>
                <Menu.Item key="8">Option 8</Menu.Item>
              </SubMenu>
            </SubMenu>
            <SubMenu key="sub4" title={<span><Icon type="setting" /><span>Navigation Three</span></span>}>
              <Menu.Item key="9">Option 9</Menu.Item>
              <Menu.Item key="10">Option 10</Menu.Item>
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content style={{ margin: '24px 16px 0' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
            <TransitionGroup>
              <CSSTransition
                key={location.pathname}
                classNames="page-slider"
                timeout={300}
                unmountOnExit={true}
              >
                {children}
              </CSSTransition>
            </TransitionGroup>
            </div>
          </Content>
          <GlobalFooter style={{ textAlign: 'center' }}>
            XXG-UMI-TEMPLATE ©2018
          </GlobalFooter>
        </Layout>
      </Layout>
    )
  }
}

export default BasicLayout;
