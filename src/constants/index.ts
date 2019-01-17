

export const apiPrefix = '/api/';

export const pageSize = 15;

export const paginationProps = {
    defaultCurrent: 1,
    total: 1,
    pageSize,
    defaultPageSize: pageSize,
    // showSizeChanger: true,
    hideOnSinglePage: true,
    // showQuickJumper:true,
    // showTotal:(total)=>{
    //     return `共 ${total} 条`;
    // }
};

// 两列布局
export const formItemLayout = {
    labelCol: {
        xs: { span: 8 },
        sm: { span: 6 },
        md: { span: 5 },
        lg: { span: 8 },
        xl: { span: 8 },
        xxl: { span: 4 },
    },
    wrapperCol: {
        xs: { span: 16 },
        sm: { span: 18 },
        md: { span: 19 },
        lg: { span: 16 },
        xl: { span: 16 },
        xxl: { span: 20 },
    },
};

// label占1/4 元素框占3/4
export const singleFormItemLayout = {
    labelCol: {
        xs: { span: 8 },
        sm: { span: 6 },
        md: { span: 5 },
        lg: { span: 4 },
        xl: { span: 4 },
        xxl: { span: 2 },
    },
    wrapperCol: {
        xs: { span: 16 },
        sm: { span: 18 },
        md: { span: 19 },
        lg: { span: 20 },
        xl: { span: 20 },
        xxl: { span: 22 },
    },
};

export const colItemLayout = {
    xs: 24, // <576px
    sm: 24, // ≥576px
    md: 24, // ≥768px
    lg: 12, // ≥992px
    xl: 12, // ≥1200px
    xxl: 12 // ≥1600px
};

// table 滚动宽度
export const scrollWidth = 1000;
