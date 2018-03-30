var myApp = angular.module("myApp");

myApp.constant('Type',{
    0: '首页Banner',
    1: '找职位Banner',
    2: '找精英Banner',
    3: '行业大图'
})
myApp.constant('Status',{
    1: '上线',
    2: '草稿'
})
myApp.constant('Industry',{
    0:'移动互联网',
    1:'电子商务',
    2:'企业服务',
    3:'O2O',
    4:'教育',
    5:'金融',
    6:'游戏'
})
myApp.constant("sidebar",[
    {
        firstList:"信息管理",
        secondList:[
            {title: "公司列表", url: ".company" , urls: "*.company"},
            {title: "职位列表", url: ".job" , urls: "*.job"}
        ],
        isShow : false
    },
    {
        firstList:"Article管理",
        secondList:[
            {title: "Article列表", url: ".articleList({page:1,size:10})" , urls: "*.articleList"},
            {title: "文章管理", url: ".text" , urls: "*.text"}
        ],
        isShow : false
    }
])
