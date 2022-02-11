module.exports = {
    description: '我的个人网站',
    base: './',
    themeConfig: {
        nav:[ // 导航栏配置
            {text: '首页', link: '/' },
            {text: '前端基础', link: '/basic/container/a' },
            {text: 'JavaScript', link: '/javascript/' }
        ],
        sidebar: {
            '/basic/container/': [
                'a',
                'b',
                'basic'
            ]
        }
    }
}