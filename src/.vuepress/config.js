module.exports = {
    title: 'HelloWorld',
    description: '我的个人网站',
    base: './',
    themeConfig: {
        nav:[ // 导航栏配置
            {text: '首页', link: '/' },
            {text: '前端基础', link: '/basic/container/a' },
            {text: 'JavaScript', link: '/javascript/container/原型与原型链' },
            {text: 'Vue', link: '/vue/' },
            {text: 'CSS', link: '/css/' }
        ],
        sidebar: {
            '/basic/container/': [
                'a',
                'b',
                'basic'
            ],
            '/javascript/container/': [
                '原型与原型链',
                '作用域'
            ]
        }
    }
}