"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2343],{1468:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>r});var s=t(5893),a=t(1151);const i={},o="[\u6a21\u677f]:\u6a21\u677f\u4e2d\u7684\u53d8\u91cf",c={id:"Django\u57fa\u7840\u6559\u7a0b/\u6a21\u677f\u4e2d\u7684\u53d8\u91cf",title:"[\u6a21\u677f]:\u6a21\u677f\u4e2d\u7684\u53d8\u91cf",description:"\u524d\u9762\u6211\u4eec\u8bf4\u4e86\u6a21\u677f\uff0c\u5b83\u7684\u4e3b\u8981\u4f5c\u7528",source:"@site/docs/Django\u57fa\u7840\u6559\u7a0b/13.\u6a21\u677f\u4e2d\u7684\u53d8\u91cf.md",sourceDirName:"Django\u57fa\u7840\u6559\u7a0b",slug:"/Django\u57fa\u7840\u6559\u7a0b/\u6a21\u677f\u4e2d\u7684\u53d8\u91cf",permalink:"/docs/Django\u57fa\u7840\u6559\u7a0b/\u6a21\u677f\u4e2d\u7684\u53d8\u91cf",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:13,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"[\u6a21\u677f]:\u6a21\u677f\u5f15\u64ce",permalink:"/docs/Django\u57fa\u7840\u6559\u7a0b/\u6a21\u677f\u5f15\u64ce"},next:{title:"[\u6a21\u677f]:\u6a21\u677f\u6807\u7b7e",permalink:"/docs/Django\u57fa\u7840\u6559\u7a0b/\u6a21\u677f\u6807\u7b7e"}},l={},r=[];function p(n){const e={admonition:"admonition",code:"code",h1:"h1",p:"p",pre:"pre",...(0,a.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"\u6a21\u677f\u6a21\u677f\u4e2d\u7684\u53d8\u91cf",children:"[\u6a21\u677f]:\u6a21\u677f\u4e2d\u7684\u53d8\u91cf"}),"\n",(0,s.jsx)(e.p,{children:"\u524d\u9762\u6211\u4eec\u8bf4\u4e86\u6a21\u677f\uff0c\u5b83\u7684\u4e3b\u8981\u4f5c\u7528\n\u5c31\u662f\u751f\u6210\u52a8\u6001\u7684html\u5185\u5bb9\u3002\n\u6240\u4ee5\u5462\uff0c\n\u8981\u751f\u6210\u52a8\u6001\u7684\u53ef\u4ee5\u53d8\u5316\u7684\u4e1c\u897f\uff0c\n\u6211\u4eec\u5c31\u9700\u8981\u5728\u6a21\u677f\u4e2d\u8bbe\u7f6e\u53d8\u91cf\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u90a3\u4e48\u8fd9\u4e2a\u53d8\u91cf\u6709\u54ea\u4e9b\u7c7b\u578b\u5462\uff1f\n\u5c31\u662f\u6211\u4eecpython\u4e2d\u6700\u5e38\u89c1\u7684\u8fd9\u4e9b\u6570\u636e\u7c7b\u578b\uff0c\n\u5305\u62ec\u6570\u5b57\uff0c\u5b57\u7b26\u4e32\uff0c\u5217\u8868\u5143\u7ec4\uff0c\u5b57\u5178\uff0c\u96c6\u5408\u4ee5\u53ca\u5bf9\u8c61\u7b49\u7b49\u3002\n\u63a5\u4e0b\u6765\u6211\u4eec\u5c31\u4e3e\u4e00\u4e9b\u4f8b\u5b50\u6765\u5b9e\u73b0\u4e00\u4e0b\u6a21\u677f\u4e2d\u7684\u53d8\u91cf\uff0c\n\u6211\u4eec\u4ee5APP01\u4e2d\u7684\u8fd9\u91cc\u7684\u6587\u7ae0\u4e3a\u4f8b\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u5728URLs\u4e2d\u6211\u4eec\u5148\u6765\u8bbe\u7f6e\u8def\u7531\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",metastring:"title='demo/app01/urls.py'",children:"from . import views\n\nurlpatterns = [\n    path('list/', views.list),\n]\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u521b\u5efa\u89c6\u56fe\u6587\u4ef6\uff0c\u4ee3\u7801\u5982\u4e0b\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",metastring:"title='demo/app01/views.py'",children:'def list(request):\n    author = \'andy\'\n    article_number = 20\n    article_list = [\n        \'\u7b2c\u4e00\u7bc7\u6587\u7ae0: \u4ec0\u4e48\u662fdjango\',\n        \'\u7b2c\u4e8c\u7bc7\u6587\u7ae0: django\u7684mvt\u6a21\u5f0f\',\n        \'\u7b2c\u4e09\u7247\u6587\u7ae0: django\u7684\u89c6\u56fe\'\n    ]\n    info = {\n        \'name\': \'andy\',\n        \'age\': 30,\n        \'programming_language\': [\'python\',\'java\',\'c\']\n    }\n    content = """\n        <ul>\n        \n            <li class="rec_topics">\n                    <a href="https://www.douban.com/gallery/topic/3338353/?from=hot_topic_anony_sns" class="rec_topics_name">\u56de\u60f3\u9ad8\u8003\u540e\u7684\u6f2b\u6f2b\u957f\u5047</a>\n                    \n                    <span class="rec_topics_subtitle">291.9\u4e07\u6b21\u6d4f\u89c8</span>\n            </li>\n            <li class="rec_topics">\n                    <a href="https://www.douban.com/gallery/topic/3351426/?from=hot_topic_anony_sns" class="rec_topics_name">\u793e\u755c\u5165\u804c\u6ee1\u6708\u4ea4\u6d41\u4f1a</a>\n                    \n                    <span class="rec_topics_subtitle">57.1\u4e07\u6b21\u6d4f\u89c8</span>\n            </li>\n            <li class="rec_topics">\n                    <a href="https://www.douban.com/gallery/topic/3353372/?from=hot_topic_anony_sns" class="rec_topics_name">\u300a\u6bc1\u706d\u8005\u4e9a\u5df4\u987f\u300b\u7ebf\u4e0a\u5171\u8bfb\u4f1a</a>\n                    \n                    <span class="rec_topics_subtitle">1.4\u4e07\u6b21\u6d4f\u89c8</span>\n            </li>\n            <li class="rec_topics">\n                    <a href="https://www.douban.com/gallery/topic/3353174/?from=hot_topic_anony_sns" class="rec_topics_name">\u6211\u5bf9\u81ea\u5df1\u6709\u4e2a\u65b0\u53d1\u73b0</a>\n                    \n                    <span class="rec_topics_subtitle">10.7\u4e07\u6b21\u6d4f\u89c8</span>\n            </li>\n            <li class="rec_topics">\n                    <a href="https://www.douban.com/gallery/topic/3354110/?from=hot_topic_anony_sns" class="rec_topics_name">\u8349\u5c65\u866b\u8ba1\u5212\u5b9e\u8df5\u57fa\u5730</a>\n                    \n                    <span class="rec_topics_subtitle">\u65b0\u8bdd\u9898 \xb7 768\u6b21\u6d4f\u89c8</span>\n            </li>\n            <li class="rec_topics">\n                    <a href="https://www.douban.com/gallery/topic/3353775/?from=hot_topic_anony_sns" class="rec_topics_name">\u300a\u9152\u5427\u957f\u8c08\u300b\u7ebf\u4e0a\u5171\u8bfb\u4f1a</a>\n                    \n                    <span class="rec_topics_subtitle">\u65b0\u8bdd\u9898 \xb7 1.3\u4e07\u6b21\u6d4f\u89c8</span>\n            </li>\n    </ul>\n    """\n    return render(request,\'list.html\', {\n        \'author\': author,\n        \'number\': article_number,\n        \'article_list\': article_list,\n        \'info\': info,\n        \'content\': content\n    })\n\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u521b\u5efa\u6a21\u677f\u6a21\u677f\u6587\u4ef6\uff0c\u663e\u793a\u53d8\u91cf\u4fe1\u606f\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-html",metastring:"title='demo/templates/list.html'",children:'<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Document</title>\n</head>\n<body>\n  <h1>\u6587\u7ae0\u5217\u8868</h1>\n  <h2>\u4f5c\u8005\uff1a {{ author }}  \u6587\u7ae0\u6570\u91cf\uff1a{{ number }}</h2> \n  <ul>\n    <li>{{ article_list.0 }}</li>\n    <li>{{ article_list.1 }}</li>\n    <li>{{ article_list.2 }}</li>\n  </ul>\n  <p>{{ info.name|upper }} \u5e74\u9f84 {{ info.age}} \u6027\u522b {{ gender|default:\'\u672a\u77e5\' }}</p>\n  <p>\u559c\u6b22\u7684\u7f16\u7a0b\u8bed\u8a00\uff1a{{ info.programming_language}}</p>\n</body>\n</html>\n'})}),"\n",(0,s.jsx)(e.admonition,{title:"\u4ee3\u7801\u89e3\u6790",type:"info",children:(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"{{}}"})," \u7528\u6765\u89e3\u6790\u53d8\u91cf\u3002\n\u53d8\u91cf\u7684\u7c7b\u578b\u5982\u679c\u662f\u5217\u8868\uff0c\u53ef\u4ee5\u7528",(0,s.jsx)(e.code,{children:".n"}),"\u7684\u5f62\u5f0f\u83b7\u53d6\u4e0b\u6807\u662fn\u7684\u5143\u7d20\uff1b\n\u53d8\u91cf\u7684\u7c7b\u578b\u5982\u679c\u662f\u5b57\u5178\uff0c\u53ef\u4ee5\u7528",(0,s.jsx)(e.code,{children:".key"}),"\u7684\u5f62\u5f0f\u83b7\u53d6\u952e\u503c\u662fkey\u7684\u503c\uff1b"]})})]})}function d(n={}){const{wrapper:e}={...(0,a.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(p,{...n})}):p(n)}},1151:(n,e,t)=>{t.d(e,{Z:()=>c,a:()=>o});var s=t(7294);const a={},i=s.createContext(a);function o(n){const e=s.useContext(i);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:o(n.components),s.createElement(i.Provider,{value:e},n.children)}}}]);