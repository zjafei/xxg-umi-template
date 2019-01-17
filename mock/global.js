// 代码中会兼容本地 service mock 以及部署站点的静态数据
export default {
    'GET /api/global/getCurrentUser': (req, res) => {
        res.send({
            data: {
                userInfo: {
                    id: '10000',
                    name: '谢新根',
                    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
                },
                permissions: [
                    "app.project",
                ]
            },
            errors: null,
            message: null,
            notice: false,
            success: true,
            unAuthed: false,
            unLogined: false,
        });
    },
    'GET /api/global/getNotifys': (req, res) => {
        res.send({
            data: {
                messageCount: 10,
                notifyCount: 20
            },
            errors: null,
            message: null,
            notice: false,
            success: true,
            unAuthed: false,
            unLogined: false,
        });
    },
    'POST /api/global/login': (req, res) => {
        res.send({
            data: {
               token:'token00000001'
            },
            errors: null,
            message: null,
            notice: false,
            success: true,
            unAuthed: false,
            unLogined: false,
        });
    },
    'GET /api/user/loginout': (req, res) => {
        res.send({
            data: {},
            errors: null,
            message: null,
            notice: false,
            success: true,
            unAuthed: false,
            unLogined: false,
        });
    },
    'GET /api/global/error': (req, res) => {
        res.status(200).send({
            data: {},
            errors: null,
            message: null,
            notice: false,
            success: true,
            unAuthed: false,
            unLogined: false,
        });
    },
    'GET /api/global/500': (req, res) => {
        res.status(500).send({
            data: {},
            errors: '对象不能为空',
            message: '出错啦',
            notice: false,
            success: true,
            unAuthed: false,
            unLogined: false,
        });
    },
    'GET /api/global/404': (req, res) => {
        res.status(404).send({
            data: {},
            errors: '没有找到页面',
            message: '出错啦',
            notice: false,
            success: true,
            unAuthed: false,
            unLogined: false
        });
    }
};
