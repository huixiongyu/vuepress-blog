module.exports = {
    markdown: {
        lineNumbers: true
    },
    title: '灰熊の博客',
    description: '进击的全栈Coder',
    head: [
        ['link', { rel: 'icon', href: '/flower.ico' }],
    ],
    themeConfig: {
        nav: [
            { 
                text: "博客",
                link: "/blog/"
            },
            { 
                text: '阅读', 
                link: "/book/"
            },
            { 
                text: 'Github', 
                link: 'https://github.com/huixiongyu/blog'
            }
        ],
        sidebar: {
            '/blog/': [
                '',
                {
                    title: '生活',
                    collapsable: true,
                    children: [
                        '/blog/Life/my-action-list',
                        '/blog/Life/train-habit'
                    ]
                },
                {
                    title: '前端开发',
                    collapsable: true,
                    children: [
                        '/blog/JavaScript/fe-guide'
                    ]
                },
            ],
            '/book/': [
                '',
                'plan-and-record',
                {
                    title:'前端相关',
                    collapsable: true,
                    children:[
                      '/book/HTML&CSS/02-css-secrets'
                    ]
                },
                {
                    title:'JavaScript',
                    collapsable: true,
                    children:[
                      '/book/JavaScript/04-datastruct-JavaScript-description',
                      '/book/JavaScript/05-Eggjs-Practice'
                    ]
                },
                {
                    title:'Vue',
                    collapsable: true,
                    children:[
                      '/book/Vue/01-vue-up-and-running'
                    ]
                },
                {
                    title:'React',
                    collapsable: true,
                    children:[
                      '/book/React/00-reactjs-practice',
                      '/book/React/01-deep-learning-react-stack',
                      '/book/React/02-react-state-management-and-common-refator',
                      '/book/React/03-React-Native-develop-practice',
                    ]
                },
                {
                    title:'Angular',
                    collapsable: true,
                    children:[
                      '/book/Angular/01-angular-up-and-running',
                    ]
                },
                {
                    title:'小程序',
                    collapsable: true,
                    children:[
                      '/book/Mini/01-mini-program-practice'
                    ]
                },
                {
                    title: 'Python',
                    collapsable: true,
                    children:[
                        '/book/Python/03-Docker-Deep-Dive',
                        '/book/Python/04-datastruct-python-description',
                        '/book/Python/05-Python-tech-spiders'
                    ]
                },
                {
                    title: 'Java',
                    collapsable: true,
                    children: [
                        '/book/Java/00-Head-First-Design-Pattern'
                    ]
                },
                {
                    title: '数据库',
                    collapsable: true,
                    children:[
                        '/book/DB/01-left-mongodb-right-redis'
                    ]
                },
                {
                    title:'沟通',
                    collapsable: true,
                    children:[
                      '/book/communication/nonviolent-communication'
                    ]
                }
            ],
            '/': [
                ''
            ]
        },
        sidebarDepth: 2,
        displayAllHeaders: true,
        nextLinks: true,
        prevLinks: true,
        lastUpdated: '更新时间', 
        docsDir: 'docs',
        editLinks: true,
        editLinkText: '帮助我完善这篇内容🙏'
    }    
}

// 21:00
