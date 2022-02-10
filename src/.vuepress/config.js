module.exports = {
    // theme: '@vuepress/blog',
    description: '我的个人网站',
    themeConfig: {
        nav:[ // 导航栏配置
            {text: '前端基础', link: '../01.html' },
            {text: '算法题库', link: '/algorithm/'},
            {text: '微博', link: 'https://baidu.com'}      
        ],
        sidebar: 'auto', // 侧边栏配置
        sidebarDepth: 2, // 侧边栏显示2级
    }
}