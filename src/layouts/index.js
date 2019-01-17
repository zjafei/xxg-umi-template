import React, { PureComponent } from 'react';
import {withRouter,router,dynamic } from 'umi';
import {pick} from 'lodash';
import {getToken} from '@/utils/store';

const BasicLayout = dynamic({
  loader: () => import('./BasicLayout'),
});

const BlankLayout = dynamic({
  loader: () => import('./BlankLayout'),
});

@withRouter
class Index extends PureComponent {
  componentDidUpdate(prevProps) {
    const { location } = this.props;
    if (location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  componentDidMount(){
    const token=getToken();
    const {location}=this.props;
    // 没登录 跳到登录页面
    if(!token){
      if(!location.pathname.startsWith('/anonymous')){
        router.push({
          pathname: '/anonymous/account/Login',
          query:{
            redirect:location.pathname
          }
        })
      }
    }else{
      if(location.pathname.startsWith('/anonymous'))
      {
        router.push({
          pathname: '/'
        })
      }
    }
  }

  render() {
    const { location } = this.props;
    const props=pick(this.props,'children','location');
    if (location.pathname.startsWith('/anonymous')) {
      return (
        <BlankLayout {...props} />
      )
    }
    return (
      <BasicLayout {...props} />
    );
  }
}

export default Index;
