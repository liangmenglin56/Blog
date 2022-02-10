module.exports = {
    // theme: '@vuepress/blog',
    description: '我的个人网站',
    base: "./",
    themeConfig: {
        nav:[ // 导航栏配置
            {text: '前端基础', link: '.vuepress/dist/index.html' },
            {text: '算法题库', link: '/algorithm/'},
            {text: '微博', link: 'https://baidu.com'}      
        ],
        // sidebar: 'auto', // 侧边栏配置
        // sidebarDepth: 2, // 侧边栏显示2级
        sidebar: [
            ['/', '简介'],
            ['/pageone/index1.md', '第一页标题'],// index这个名称不能使用
            ['/pagetwo/feedback.md', '第二页标题'],
            {
            title: "多级",
            collapsable: true,
            children:[
                ['/pagethree/1.md', '页面1'],
                ['/pagethree/2.md', '页面2']
            ]
        },
        ]
    }
}