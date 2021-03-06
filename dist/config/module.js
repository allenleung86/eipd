NV.config = {
    "appList": [
        {
            "id": "16",
            "name": "待办事项",
            "weight": "1",
            "tmpl": "TodoList",
            "proxy": true,
            "dataurl": "http://10.0.250.60/dataCenter/dt",
            "redirurl": "http://10.0.250.60/dataCenter/redir?p5=1",
            "zoomRateW": 1.35,
            "zoomRateH": 1.62,
            "formatter": "TodoFilter",
            "refresh": 7,
            "rightTag0": {
                "field": "date"
            },
            "hoverLink": {
                "type": "Dialog",
                "target": "TodoConfigDialog",
                "title": "设置"
            },
            "linkTarget": "ToReadRedirect"
        },{
            "id": "81",
            "name": "已办事项",
            "weight": "1",
            "tmpl": "TodoList",
            "proxy": true,
            "dataurl": "http://10.0.250.60/dataCenter/dt",
            "redirurl": "http://10.0.250.60/dataCenter/redir",
            "zoomRateW": 1.35,
            "zoomRateH": 1.62,
            "refresh": 7,
            "isNew": "false",
            "hoverLink": {
                "type": "RefreshIcon"
            }
        }, {
            "id": "1111",
            "name": "新OA待办",
            "weight": "1",
            "tmpl": "TodoList",
            "proxy": true,
            "dataurl": "http://10.0.250.60/dataCenter/dt",
            "redirurl": "http://10.0.250.60/dataCenter/redir?p5=1",
            "zoomRateW": 1.35,
            "zoomRateH": 1.62,
            "refresh": 7
        }, {
            "id": "2",
            "name": "OA公告",
            "tmpl": "TodoList",
            "proxy": true,
            "dataurl": "http://10.0.250.60/dataCenter/dt",
            "dtlurl": "http://10.0.250.60/dataCenter/visit",
            //"dtlCache"	:{"mode":"HALF","uid":false, "exp":60},
            "readurl": "http://10.0.250.60/dataCenter/read",
            "redirurl": "http://10.0.250.60/dataCenter/redir",
            "link": "http://oa.gdyd.com/gdyd/ioboard.nsf/myview?openform&view=&vwPublicedcount=20",
            "zoomRateW": 1.35,
            "zoomRateH": 1.62,
            "refresh": 17,
            "linkTarget": "CommonView"
        }, {
            "id": "222",
            "name": "旧OA公告",
            "tmpl": "StdList",
            "proxy": true,
            "dataurl": "http://10.0.250.60/dataCenter/dt",
            "dtlurl": "http://10.0.250.60/dataCenter/visit",
            //"dtlCache"	:{"mode":"HALF","uid":false, "exp":60},
            "readurl": "http://10.0.250.60/dataCenter/read",
            "redirurl": "http://10.0.250.60/dataCenter/redir",
            "link": "http://oa.gdyd.com/gdyd/ioboard.nsf/myview?openform&view=vwPubliced&count=20",
            "zoomRateW": 1.35,
            "zoomRateH": 1.62,
            "refresh": 17
        }, {
            "id": "7",
            "name": "OA待阅",
            "tmpl": "TodoList",
            "proxy": true,
            "dataurl": "http://eip-db1.gdyd.com/dataCenter/dt",
            "dtlurl": "http://eip-db1.gdyd.com/dataCenter/visit",
            //"dtlCache"	:{"mode":"HALF","uid":false, "exp":60},
            "redirurl": "http://eip-db1.gdyd.com/dataCenter/redir",
            "readurl": "http://eip-db1.gdyd.com/dataCenter/read",
            "link": "http://oa2.gdyd.com/indishare/office.nsf/(frame)/tree",
            "zoomRateW": 1.35,
            "zoomRateH": 1.62,
            "zoomRateH1x2": 1.5,
            "refresh": 29,
            "linkTarget": "ToReadRedirect",
            "allowResize": ["1x1", "1x2"]
        }, {
            "id": "777",
            "name": "旧OA公文阅览",
            "weight": "4",
            "tmpl": "StdList",
            "proxy": true,
            "dataurl": "http://10.0.250.60/dataCenter/dt",
            "dtlurl": "http://10.0.250.60/dataCenter/visit",
            //"dtlCache"	:{"mode":"HALF","uid":false, "exp":60},
            "redirurl": "http://10.0.250.60/dataCenter/redir",
            "readurl": "http://10.0.250.60/dataCenter/read",
            "link": "http://oa.gdyd.com/gdyd/gwyl.nsf/",
            "zoomRateW": 1.35,
            "zoomRateH": 1.62,
            "refresh": 29
        }, {
            "id": "3",
            "name": "内部邮箱",
            "weight": "3",
            "proxy": true,
            "tmpl": "TodoList",
            "dataurl": "http://10.0.250.60/dataCenter/dt",
            "redirurl": "http://10.0.250.60/dataCenter/redir",
            "link": "mailFrame",
            "zoomRateW": 1.35,
            "zoomRateH": 1.62,
            "refresh": 8,
            "linkTarget": "IntMailRedirect",
            "hoverLink": {
                "type": "NewWindow",
                "title": "写邮件",
                "link": "${redirurl}?p0=${id}&p2=${userId}&p4=1&p3=newMail",
                "parser": "Redir"
            }
        },
        // {
        //     "id": "23",
        //     "name": "外部邮箱",
        //     "weight": "3",
        //     "tmpl": "TodoList",
        //     "proxy": true,
        //     "dataurl": "http://10.0.250.60/dataCenter/dt",
        //     "redirurl": "http://10.0.250.60/dataCenter/redir",
        //     "link": "mailFrame",
        //     "zoomRateW": 1.35,
        //     "zoomRateH": 1.62,
        //     "refresh": 23,
        //     "linkTarget": "IntMailRedirect",
        //     "hoverLink": {
        //         "type": "NewWindow",
        //         "title": "写邮件",
        //         "link": "${redirurl}?p0=${id}&p2=${userId}&p4=1&p3=newMail",
        //         "parser": "Redir"
        //     }
        //     /*"formatter": "TodoFilter",
        //      "refresh": 7,
        //      "link": 'http://eip-db1.gdyd.com/SSO/extLogin.do?appId=qiyemail',
        //      "downloadUrl": "http://10.133.96.91/dataCenter/downloadqiyemail",
        //      "getMailContentUrl": "http://10.133.96.91/dataCenter/visit",
        //      "proxyTimeout": 3600*/
        // },
        /*{
            "id": "4",
            "name": "月上网电量",
            "type": "BI",
            "weight": "5",
            "tmpl": "StdImg",
            "proxy": true,
            "dataurl": "http://10.0.250.60/dataCenter/dt",
            "imgsrc": "http://eip-app.gdyd.com:7777/BIParam/chart?id=swdl",
            "link": "http://10.192.100.48:9704/analytics/saw.dll?PortalPages&PortalPath=/users/YDEIP/_Portal&Page=SYGDL_LJ_SEP&Done=Colse&NQUser=ydeip&NQPassword=ydeip",
            "mHeight": "280",
            "mWidth": "280",
            "heightLimit": "132"
        }, {
            "id": "5",
            "name": "实时负荷",
            "type": "BI",
            "weight": "6",
            "tmpl": "StdImg",
            "proxy": true,
            "dataurl": "http://10.0.250.60/dataCenter/dt",
            "imgsrc": "http://eip-app.gdyd.com:7777/BIParam/chart?id=fh",
            "link": "http://eip-app.gdyd.com:7777/ydeip/chart/rdata.jsp",
            "mHeight": "1",
            "pHeight": "1.5",
            "heightLimit": "132",
            "zoomRateH": 1.5
        },*/ {
            "id": "6",
            "name": "山西能源存煤",
            "type": "BI",
            "weight": "6",
            "tmpl": "StdImg",
            "proxy": true,
            "dataurl": "http://10.0.250.60/dataCenter/dt",
            "imgsrc": "http://eip-app.gdyd.com:7777/BIParam/chart?id=mkc",
            "link": "http://10.0.250.61/eip/?q=page/jtcm",
            "mHeight": "240",
            "mWidth": "280"
        },
        {
            "id": "8",
            "name": "突发事件",
            "type": "消息",
            "weight": "8",
            "tmpl": "Accident",
            "proxy": true,
            "dataurl": "http://10.0.250.60/dataCenter/dt",
            "dtlurl": "http://10.0.250.60/dataCenter/visit",
            "zoomRateW": 1.35,
            "zoomRateH": 1.62,
            "modal": true,
            "pageIndex": "1",
            "pageRange": "8"
        }, {
            "id": "9",
            "name": "山西能源新闻",
            "type": "新闻",
            "weight": "9",
            "tmpl": "TodoList",
            "proxy": true,
            "dataurl": "http://10.0.250.60/dataCenter/dt?p5=1&p6=2",
            "dtlurl": "http://10.0.250.60/dataCenter/visit",
            //"dtlCache"	:{"mode":"HALF","uid":false, "exp":200},
            "readurl": "http://10.0.250.60/dataCenter/read?p5=1&p6=2",
            "link": "http://www.gdyd.com/news/",
            "zoomRateW": 1.35,
            "zoomRateH": 1.62,
            "pageIndex": "1",
            "pageRange": "8",
            "pageTotal": "999",
            "linkTarget": "CommonView",
            "rightTag0": {
                "field": "date"
            },
            "rightTag1": {
                "field": "news_type"
            }
        }, {
            "id": "10",
            "name": "山西能源新闻new",
            "type": "新闻",
            "weight": "9",
            "tmpl": "StdList",
            "proxy": true,
            "dataurl": "http://10.0.250.60/dataCenter/dt?p5=1&p6=2",
            "dtlurl": "http://10.0.250.60/dataCenter/visit",
            //"dtlCache"	:{"mode":"HALF","uid":false, "exp":200},
            "readurl": "http://10.0.250.60/dataCenter/read?p5=1&p6=2",
            "link": "http://www.gdyd.com/news/",
            "zoomRateW": 1.35,
            "zoomRateH": 1.62,
            "pageIndex": "1",
            "pageRange": "8",
            "pageTotal": "999"
        }, {
            "id": "13",
            "name": "新浪新闻",
            "type": "新闻",
            "weight": "13",
            "tmpl": "TodoList",
            "proxy": true,
            "dataurl": "http://10.0.250.60/dataCenter/dt",
            "dtlurl": "http://10.0.250.60/dataCenter/visit",
            //"dtlCache"	:{"mode":"HALF","uid":false, "exp":20},
            "readurl": "http://10.0.250.60/dataCenter/read",
            "link": "http://news.sina.com.cn/",
            "allowResize": ["1x1", "1x2"],
            "zoomRateW1x1": 1.35,
            "zoomRateH1x1": 1.62,
            "zoomRateW1x2": 1.35,
            "zoomRateH1x2": 1.2,
            "pageIndex": "1",
            "pageRange": "8",
            "pageTotal": "24",
            "refresh": 21,
            "linkTarget": "CommonView",
            "hoverLink": {
                "type": "ReadAll"
            }
        }, {
            "id": "10009",
            "name": "财务部指标",
            "type": "数据指标",
            "weight": "14",
            "tmpl": "CompIndex",
            "proxy": true,
            //"dataurl": "http://10.0.250.60/cache/dashboard.json?json_callback=json_callback",
            "dataurl": "http://10.0.250.60/dataCenter/dt",
            //"realurl": "http://10.0.250.60/TaskMgr/dt?p0=15",
            "realurl": "http://10.0.250.60/dataCenter/dt",
            "mHeight": "360",
            "mWidth": "450",
            //"zoomRateW": 1.35,
            //"zoomRateH": 1.62,
            "callback": "dashboard",
            "formatter": "CompIndex"
        }, {
            "id": "19",
            "name": "ERP模块",
            "type": "应用链接",
            "weight": "19",
            "mHeight": "175",
            "mWidth": "280",
            "tmpl": "ErpLink",
            "tmpl_sub_id": "1"
        }, {
            "id": "39",
            "name": "新软件试用",
            "type": "应用链接",
            "weight": "19",
            "mHeight": "175",
            "mWidth": "280",
            "tmpl": "ErpLink",
            "tmpl_sub_id": "2"
        }, {
            "id": "20",
            "name": "航运模块",
            "type": "应用链接",
            "weight": "20",
            "mHeight": "175",
            "mWidth": "280",
            "socURL": "http://10.0.250.60/SSO/extLogin.do?appId=SOC",
            "tmpl": "ShipLink"
        }, {
            "id": "26",
            "name": "外部相关信息",
            "type": "stdList",
            "weight": "26",
            "tmpl": "OtherList",
            "proxy": true,
            "dataurl": "http://10.0.250.60/dataCenter/dt",
            "mHeight": "175",
            "mWidth": "280"
        },
        {
            "id": "30",
            "name": "实时山西能源库存资金排名",
            "type": "虚拟仓库",
            "weight": "30",
            "tmpl": "vtlRepo",
            //"proxy"		:true,
            //"dataurl"	:"http://10.0.250.60/dataCenter/dt",
            "link": "http://10.0.17.81/fc/ChartShow?fcNo=f2d4516f-2565-4c47-99dd-218fb5a0ba0e&year=2012",
            "mHeight": "370",
            "mWidth": "480",
            "ext_js": "http://10.0.17.81/fc/getjson?chartKey=",
            "ext_css": "http://10.0.17.81/Content/themes/css/eipChart.css",
            "2d_id": "eip-groupinventoryrank",
            "3d_id": "groupinventoryrank"
        }, {
            "id": "31",
            "name": "山西能源入库占维护资金比",
            "type": "虚拟仓库",
            "weight": "30",
            "tmpl": "vtlRepo",
            //"proxy"		:true,
            //"dataurl"	:"http://10.0.250.60/dataCenter/dt",
            "link": "http://10.0.17.81/fc/ChartShow?fcNo=f05ebed0-953a-4d97-b9a0-641938d31e6a&year=2012",
            "mHeight": "370",
            "mWidth": "480",
            "ext_js": "http://10.0.17.81/fc/getjson?chartKey=",
            "ext_css": "http://10.0.17.81/Content/themes/css/eipChart.css",
            "2d_id": "eip-groupstockmaintainscale",
            "3d_id": "groupstockmaintainscale"
        }, {
            "id": "32",
            "name": "山西能源年度库存资金使用情况",
            "type": "虚拟仓库",
            "weight": "31",
            "tmpl": "vtlRepo",
            //"proxy"		:true,
            //"dataurl"	:"http://10.0.250.60/dataCenter/dt",
            "link": "http://10.0.17.81/fc/ChartShow?fcNo=b2f1dc74d-af837-4a11-8f97-c81a2c2343bd3&year=2012",
            "mHeight": "370",
            "mWidth": "480",
            "ext_js": "http://10.0.17.81/fc/getjson?chartKey=",
            "ext_css": "http://10.0.17.81/Content/themes/css/eipChart.css",
            "2d_id": "eip-groupstockusageyear",
            "3d_id": "groupstockusageyear"
        }, {
            "id": "33",
            "name": "单位千瓦库存资金排名",
            "type": "虚拟仓库",
            "weight": "32",
            "tmpl": "vtlRepo",
            //"proxy"		:true,
            //"dataurl"	:"http://10.0.250.60/dataCenter/dt",
            "link": "http://10.0.17.81/fc/ChartShow?fcNo=e25d0a82-0235-4616-b0d3-71306a88a033&year=2012",
            "mHeight": "370",
            "mWidth": "480",
            "ext_js": "http://10.0.17.81/fc/getjson?chartKey=",
            "ext_css": "http://10.0.17.81/Content/themes/css/eipChart.css",
            "2d_id": "eip-companymwinventoryrank",
            "3d_id": "companymwinventoryrank"
        }, {
            "id": "34",
            "name": "月累计出入库资金",
            "type": "虚拟仓库",
            "weight": "32",
            "tmpl": "vtlRepo",
            //"proxy"		:true,
            //"dataurl"	:"http://10.0.250.60/dataCenter/dt",
            "link": "http://10.0.17.81/fc/ChartShow?fcNo=5eeb5b0d-d371-401f-a2ec-15bb5400e24f&year=2012",
            "mHeight": "370",
            "mWidth": "480",
            "ext_js": "http://10.0.17.81/fc/getjson?chartKey=",
            "ext_css": "http://10.0.17.81/Content/themes/css/eipChart.css",
            "2d_id": "eip-groupinventorymonth",
            "3d_id": "groupinventorymonth"
        }, {
            "id": "35",
            "name": "年累计出入库资金",
            "type": "虚拟仓库",
            "weight": "32",
            "tmpl": "vtlRepo",
            //"proxy"		:true,
            //"dataurl"	:"http://10.0.250.60/dataCenter/dt",
            "link": "http://10.0.17.81/fc/ChartShow?fcNo=f2d4516f-2565-4c47-99dd-218fb5a0ba0e&year=2012",
            "mHeight": "360",
            "mWidth": "480",
            "ext_js": "http://10.0.17.81/fc/getjson?chartKey=",
            "ext_css": "http://10.0.17.81/Content/themes/css/eipChart.css",
            "2d_id": "eip-groupinventoryyear",
            "3d_id": "groupinventoryyear"
        },
        {
            "id": "coalrate",
            "name": "实时煤耗",
            "type": "iframe",
            "tmpl": "CoalRate",
            "proxy": true,
            "dataurl": "http://xzb.gdyd.com/xzb/findCoalInfoForEIP.action",
            //"dataurl"	:"http://10.133.96.202/xzb/xzb/findCoalInfoForEIP.action",
            //"dataurl"	:"http://127.0.0.1/eip-gdyd/t/coalrate.json",
            "src": "http://xzb.gdyd.com/coalRate/CoalRate4EIP.jsp?valueType=21&queryType=plant",
            "link": "http://xzb.gdyd.com/coalRate/timerCoalRate.jsp?valueType=21&queryType=plant",
            "mHeight": "290",
            "mWidth": "280"
        },
        {
            "id": "101",
            "name": "公共应用",
            "type": "应用链接",
            "redirurl": "http://10.0.250.60/dataCenter/redir",
            "ssourl": "http://10.0.250.60/SSO",
            "extMailUrl": "http://10.0.250.60/SSO/extLogin.do?appId=qiyemail",
            "dataurl": "static/data/public_app.json",
            "weight": "101",
            "tmpl": "Icons",
            "zoomRateW": 1,
            "zoomRateH": 1,
            "isPublic": "true"
        }, {
            "id": "102",
            "name": "我的应用",
            "type": "应用链接",
            "weight": "102",
            "tmpl": "MyLink",
            "dataurl": "../getUserLink.htm",
            "mHeight": "230",
            "mWidth": "280",
            "pageIndex": 1,
            "pageRange": 6,
            "isPublic": "true",
            "zoomRateW": 1,
            "zoomRateH": 1,
            "hoverLink": {
                "type": "Dialog",
                "target": "MyAppManagement",
                "title": "设置应用"
            }
        }, {
            "id": "38",
            "name": "163邮箱",
            "type": "OA",
            "weight": "1",
            "tmpl": "ImapMail",
            "proxy": true,
            //"dataurl"	:"http://10.0.250.60/dataCenter/dt",
            "dataurl": "http://10.0.250.60/dataCenter/dt",
            //"redirurl"	:"http://10.0.250.60/dataCenter/redir?p5=1",
            "mHeight": "284",
            "mWidth": "400",
            "pHeight": "460",
            "pWidth": "540",
            "pageIndex": "1",
            "pageRange": "8",
            "pageTotal": "64",
            "refresh": 7,
            "jumpTo": "http://10.0.250.60/SSO/extLogin.do?appId=163mail",
            "downloadUrl": "http://10.0.250.60/dataCenter/download163mail",
            "getMailContentUrl": "http://10.0.250.60/dataCenter/visit"
        },
        {
            "id": "41",
            "name": "采购方交易金额排名",
            "type": "B2B",
            "weight": "16",
            "tmpl": "b2bStatistics",
            "proxy": true,
            "dataurl": "http://10.0.250.60/dataCenter/dt",
            "mHeight": "240",
            "mWidth": "280",
            "flag": "purchaser"
        },
        {
            "id": "42",
            "name": "供方金额排名",
            "type": "B2B",
            "weight": "16",
            "tmpl": "b2bStatistics",
            "proxy": true,
            "dataurl": "http://10.0.250.60/dataCenter/dt",
            "mHeight": "240",
            "mWidth": "280",
            "flag": "supplier"
        },
        {
            "id": "43",
            "name": "采购方发布数量排名",
            "type": "B2B",
            "weight": "16",
            "tmpl": "b2bStatistics",
            "proxy": true,
            "dataurl": "http://10.0.250.60/dataCenter/dt",
            "mHeight": "240",
            "mWidth": "280",
            "flag": "issue"
        },
        {
            "id": "44",
            "name": "询价成本降低统计",
            "type": "B2B",
            "weight": "16",
            "tmpl": "b2bStatistics",
            "proxy": true,
            "dataurl": "http://10.0.250.60/dataCenter/dt",
            "mHeight": "240",
            "mWidth": "280",
            "flag": "savaAmount"
        }, {
            "id": "55",
            "name": "知识库",
            "type": "ITC",
            "tmpl": "RssList",
            "proxy": true,
            "dataurl": "http://10.0.250.60/dataCenter/dt",
            "dtlurl": "http://10.0.250.60/dataCenter/visit",
            "readurl": "http://10.0.250.60/dataCenter/read",
            "link": "http://10.0.250.61/kt",
            "mHeight": "284",
            "mWidth": "400",
            "pageIndex": "1",
            "pageRange": "8",
            "pageTotal": "24",
            "refresh": 29,
            "OA2Url": "http://testoa.gdyd.com.cn/",
            "OA2ToRead": true

        }, {
            "id": "61",
            "name": "法务快讯",
            "type": "FWGL",
            "tmpl": "TodoList",
            "proxy": true,
            "dataurl": "http://10.0.250.60/dataCenter/dt",
            "dtlurl": "http://10.0.250.60/dataCenter/visit",
            "redirurl": "http://10.0.250.60/dataCenter/redir",
            "mHeight": "284",
            "mWidth": "400",
            "pHeight": "460",
            "pWidth": "540",
            "pageIndex": "1",
            "pageRange": "8",
            "pageTotal": "24",
            "refresh": 17
        }, {
            "id": "62",
            "name": "公司公告",
            "tmpl": "TodoList",
            "proxy": true,
            "dataurl": "http://10.0.250.60/dataCenter/dt",
            "dtlurl": "http://10.0.250.60/dataCenter/visit",
            //"dtlCache"	:{"mode":"HALF","uid":false, "exp":60},
            "readurl": "http://10.0.250.60/dataCenter/read",
            "redirurl": "http://10.0.250.60/dataCenter/redir",
            "link": "http://oa.gdyd.com/gdyd/ioboard.nsf/myview?openform&view=&vwPublicedcount=20",
            "zoomRateW": 1.35,
            "zoomRateH": 1.62,
            "refresh": 17,
            "linkTarget": "CommonView"
        }/*,{
            "id": "1002",
            "name": "年度采购金额占比",
            "tmpl": "Chart",
            "tokenLogin": "TIMSS",
            "w": 2,
            "chartOptions": {
                "type": "pie",
                "options": {
                    "legend": {
                        "position": "right",
                        "labels": {
                            "padding": 4
                        }
                    }
                }
            },
            "proxy": true,
            "dataurl": "${TIMSS}/purchase/purreport/majorPurchaseStatistic.do",
            "directProxy": true,
            "formatter": "HighChartPie"
        },{
            "id": "1003",
            "name": "请假日历",
            "tmpl": "Calendar",
            "tokenLogin": "TIMSS",
            "proxy": true,
            "directProxy": true,
            "formatter": "TIMSSLeaveCalendar",
            "dataurl": "${TIMSS}/attendance/leave/queryCalendarByMonth.do?year=2016&month=10"
        },{
            "id": "1000",
            "name": "TIMSS快捷入口",
            "tmpl": "Icons",
            "proxy": true,
            "dataurl": "${TIMSS}/EipInterface/Desktop/getFavRoute.do",
            "directProxy": true,
            "tokenLogin": "TIMSS",
            "formatter": "TIMSSEntry",
            "privilege": "homepage_portal",
            "noItemsMsg": "请先将鼠标移动至本卡片\n单击右上角设置按钮选择快捷方式",
            "zoomRateW": 1,
            "zoomRateH": 1,
            "hoverLink": {
                "type": "DynamicLink",
                "title": "设置",
                "link": "Redirect:TIMSSEntry"
            }
        }*/,{
            "id": "10004",
            "name": "采购库存统计",
            "tmpl": "BigNumber",
            "proxy": true,
            "dataurl": "http://10.0.250.60/bignumber"
        }
    ],
    "baseUrl": {
        "TIMSS": "http://10.133.96.195:8080/timss2sit",
        "DATACENTER": "http://10.0.250.60:8080/dataCenter"
    },
    "skinList": [],
    'skinHandlerUrl': '/eip/uploadSkinHandler.do',
    //皮肤和略缩图的url前缀
    'skinUrlPrefix': '/eip-skin/',
    'skinThumbUrlPrefix': '/eip-skin/thumb/',
    "defaultSkin": { "id": "8", "name": "blue-light win", "img": "http://eip3.gdyd.com/img/bg-blue-win.jpg" },
    "forceSkin": null,  //平时用这个
    //"forceSkin": {name:'red-light', img: 'http://10.133.96.242/imgs/skinbg/efb19c28-4a5d-4cba-960f-91dae71166f0.jpg'}, //特殊日子用这个
    "rbacUrl": "http://10.0.250.60/rbac/rbac_getdata.json.jsp", //权限系统的数据接口url
    "rbacGUIUrl": "http://10.0.250.60/rbac/index.jsp", //权限系统的管理员url
    "defaultApps": [
        {
            "id": "16",
            "name": "待办",
            "userOrder": "0",
            "userId": "1"
        }, {
            "id": "2",
            "name": "山西能源公告",
            "userOrder": "1",
            "userId": "1"
        }, {
            "id": "101",
            "name": "公共应用",
            "userOrder": "2",
            "userId": "1",
            "isPublic": "true"
        }, {
            "id": "102",
            "name": "我的应用",
            "userOrder": "3",
            "userId": "1",
            "isPublic": "true"
        }, {
            "id": "9",
            "name": "山西能源新闻",
            "userOrder": "4",
            "userId": "1"
        }, {
            "id": "3",
            "name": "内部邮箱",
            "userOrder": "7",
            "userId": "1"
        },
        /*{
            "id": "26",
            "name": "外部邮箱",
            "userOrder": "8",
            "userId": "1"
        },*/
        {
            "id": "62",
            "name": "公司公告",
            "userOrder": "62",
            "userId": "1"
        },
        {
            "id": "10009",
            "name": "财务部指标",
            "userOrder": "62",
            "userId": "1"
        }
    ],
    "title": "山西能源门户网站",
    "userAppUrl": "../",
    "userInfoUrl": "http://10.0.16.201/addressbook/userAction.do",
    "tmplUrl": "./",
    "ssoUrl": "http://10.0.250.60/SSO",
    "pwdUrl": "http://10.0.250.60/dataCenter/redir?p0=3&p3=chgPwd",
    "getMsgUrl": "http://10.133.96.91:8090/dataCenter/dt?p0=30&p3=20&p4=1",
    "visitMsgUrl": "http://10.0.250.60/dataCenter/visit?p0=30&p4=msg&p9=0",
    "cacheHost": "127.0.0.1",
    "msgRefreshInterval": 10,
    "convDocUrl": "http://10.0.250.57/eip-docx-2.0/docx/api",
    "links": {},
    "tokenLogin": {
        "TIMSS": {
            "dataCenterURL": "http://10.0.250.60/dataCenter/dt",
            "appId": 1001,
            "expire": 1800
        }
    },
    fakeUserId: "890157"
}
