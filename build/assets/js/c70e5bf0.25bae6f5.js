"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7951],{3833:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>r,contentTitle:()=>d,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var t=s(5893),i=s(1151);const a={sidebar_position:18},d="[\u6a21\u578b]:\u914d\u7f6eMySQL",o={id:"Django\u57fa\u7840\u6559\u7a0b/\u914d\u7f6emysql",title:"[\u6a21\u578b]:\u914d\u7f6eMySQL",description:"\u672c\u8282\u6211\u4eec\u6765\u4ecb\u7ecd\u4e00\u4e0b\u5982\u4f55\u5728Django\u4e2d\u914d\u7f6eMySQL\u6570\u636e\u5e93\u3002",source:"@site/docs/Django\u57fa\u7840\u6559\u7a0b/18.\u914d\u7f6emysql.md",sourceDirName:"Django\u57fa\u7840\u6559\u7a0b",slug:"/Django\u57fa\u7840\u6559\u7a0b/\u914d\u7f6emysql",permalink:"/docs/Django\u57fa\u7840\u6559\u7a0b/\u914d\u7f6emysql",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Django\u57fa\u7840\u6559\u7a0b/18.\u914d\u7f6emysql.md",tags:[],version:"current",sidebarPosition:18,frontMatter:{sidebar_position:18},sidebar:"tutorialSidebar",previous:{title:"[\u6a21\u578b]:\u4ec0\u4e48\u662fORM",permalink:"/docs/Django\u57fa\u7840\u6559\u7a0b/\u4ec0\u4e48\u662fORM"},next:{title:"[\u6a21\u578b]:\u521b\u5efa\u6a21\u578b",permalink:"/docs/Django\u57fa\u7840\u6559\u7a0b/\u521b\u5efa\u6a21\u578b"}},r={},l=[{value:"settings\u4e2d\u914d\u7f6eMySQL",id:"settings\u4e2d\u914d\u7f6emysql",level:2},{value:"\u8fde\u63a5MySQL",id:"\u8fde\u63a5mysql",level:2},{value:"\u6267\u884c\u6570\u636e\u8fc1\u79fb\u64cd\u4f5c",id:"\u6267\u884c\u6570\u636e\u8fc1\u79fb\u64cd\u4f5c",level:2}];function c(n){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",...(0,i.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"\u6a21\u578b\u914d\u7f6emysql",children:"[\u6a21\u578b]:\u914d\u7f6eMySQL"}),"\n",(0,t.jsx)(e.p,{children:"\u672c\u8282\u6211\u4eec\u6765\u4ecb\u7ecd\u4e00\u4e0b\u5982\u4f55\u5728Django\u4e2d\u914d\u7f6eMySQL\u6570\u636e\u5e93\u3002\n\u5728Django\u4e2d\u9ed8\u8ba4\u4f7f\u7528\u7684\u6570\u636e\u5e93\u5462\u662fSQLlite,\n\u800c\u6211\u4eec\u540e\u9762\u8981\u8bb2\u89e3\u7684\u9879\u76ee\u4e2d\u5e94\u7528\u5230\u7684\u662fMySQL\u3002\n\u6240\u4ee5\u5462\uff0c\u54b1\u4eec\u8fd9\u91cc\u9700\u8981\u5148\u6765\u914d\u7f6e\u4e00\u4e0b\uff0cMySQL\u6570\u636e\u5e93\u3002"}),"\n",(0,t.jsx)(e.h2,{id:"settings\u4e2d\u914d\u7f6emysql",children:"settings\u4e2d\u914d\u7f6eMySQL"}),"\n",(0,t.jsx)(e.p,{children:"\u5728\u5168\u5c40\u914d\u7f6e\u6587\u4ef6\u4e2d\uff0c\u914d\u7f6eMySQL\u3002"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",metastring:"title='demo/demo/settings.py'",children:"# \u6ce8\u91ca\u4e0b\u9762\u7684\u4ee3\u7801\n# DATABASES = {\n#     'default': {\n#         'ENGINE': 'django.db.backends.sqlite3',\n#         'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),\n#     }\n# }\n# \u65b0\u589e\u4ee3\u7801\nDATABASES = {\n   'default': {\n       # \u4f7f\u7528mysql\u6570\u636e\u5e93\n       'ENGINE': 'django.db.backends.mysql',  \n       # \u6570\u636e\u5e93\u540d\u79f0  \n       'NAME': 'django_demo',\n       # \u6570\u636e\u5e93\u5730\u5740,\u8fd9\u91cc\u662f\u672c\u5730\n       'HOST': '127.0.0.1',\n       # \u6570\u636e\u5e93\u7528\u6237\u540d\n       'USER': 'root',\n       # \u6570\u636e\u5e93\u5bc6\u7801\n       'PASSWORD': 'andy123456'\n   }\n}\n"})}),"\n",(0,t.jsx)(e.p,{children:"\u63a5\u4e0b\u6765\u9700\u8981\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a'django_demo'\u7684\u6570\u636e\u5e93\u3002"}),"\n",(0,t.jsx)(e.admonition,{type:"tip",children:(0,t.jsxs)(e.p,{children:["\u4f60\u53ef\u4ee5\u4f7f\u7528MySQL\u53ef\u89c6\u5316\u5de5\u5177\uff0c\u6216\u8005MySQL\u547d\u4ee4\u3002\u5c0f\u4f19\u4f34\u53ef\u4ee5\u89c2\u770b\u5927\u718a\u8bfe\u5802",(0,t.jsx)(e.a,{href:"https://study.163.com/course/introduction/1209570828.htm?share=2&shareId=480000001946434",children:"\u300aPython\u96f6\u57fa\u7840\u5165\u95e8\u52a8\u753b\u8bfe\u300b"}),"\u3002"]})}),"\n",(0,t.jsx)(e.p,{children:"\u6211\u4eec\u76f4\u63a5\u4f7f\u7528mysql\u547d\u4ee4\u6765\u521b\u5efa\u6570\u636e\u5e93\u3002\u5148\u6765\u8fde\u63a5MySQL\u3002"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"mysql -u root -p\n```bash\n\u8f93\u5165\u5bc6\u7801\u3002\u8fde\u63a5\u6210\u529f\u540e\uff0c\u7ee7\u7eed\u8f93\u5165\u547d\u4ee4\u521b\u5efa\u6570\u636e\u5e93:\n```bash\ncreate database django-demo\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u8fde\u63a5mysql",children:"\u8fde\u63a5MySQL"}),"\n",(0,t.jsx)(e.p,{children:"\u63a5\u4e0b\u6765\u5728\u8fde\u63a5\u6570\u636e\u5e93\u7684\u65f6\u5019\uff0c\u6211\u4eec\u9700\u8981\u4f7f\u7528\u4e00\u4e2a\u6570\u636e\u5e93\u5f15\u64cePyMySQL.\n\u8fd9\u662f\u4e00\u4e2a\u7b2c\u4e09\u65b9\u6a21\u5757\uff0c\u6211\u4eec\u9700\u8981\u5148\u6765\u5b89\u88c5\u4e00\u4e0b\uff0c\n\u542f\u52a8\u6211\u4eec\u7684\u865a\u62df\u73af\u5883\uff0c\u8f93\u5165\u5982\u4e0b\u547d\u4ee4\u8fdb\u884c\u5b89\u88c5:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"pip install pymysql\n"})}),"\n",(0,t.jsx)(e.p,{children:"\u63a5\u4e0b\u6765\u54b1\u4eec\u9700\u8981\u914d\u7f6e\u4e00\u4e0b\u3002\u5728\u8fd9\u4e2ademo\u5168\u5c40\u914d\u7f6e\u6587\u4ef6\u4e2d\u54b1\u4eec\u627e\u5230init.py,\n\u8fd9\u662f\u521d\u59cb\u5316\u6587\u4ef6, \u6211\u4eec\u6dfb\u52a0\u5982\u4e0b\u4ee3\u7801\uff1a"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",metastring:"title='demo/demo/__init__.py'",children:"import pymysql\n# \u8ba9PyMySQL\u517c\u5bb9MySQLdb\u63a5\u53e3\npymysql.install_as_MySQLdb()\n"})}),"\n",(0,t.jsx)(e.admonition,{title:"\u4ee3\u7801\u89e3\u6790",type:"info",children:(0,t.jsx)(e.p,{children:"\u8fd9\u6bb5\u4ee3\u7801\u7684\u4f5c\u7528\u662f\u8ba9PyMySQL\u5305\u517c\u5bb9\u4ee3\u66ffMySQLdb\u5305,\u6765\u8fde\u63a5MySQL\u6570\u636e\u5e93\u3002\nPython\u8fde\u63a5MySQL\u6570\u636e\u5e93\u9700\u8981\u4f7f\u7528MySQLdb\u6a21\u5757\u3002\u4f46\u662f\u5728\u65b0\u7248\u672c\u7684Python\u4e2d,\u9700\u8981\u5b89\u88c5PyMySQL\u6a21\u5757,\u7136\u540e\u8ba9PyMySQL\u517c\u5bb9\u6a21\u62dfMySQLdb\u7684\u63a5\u53e3,\u4ece\u800c\u8fbe\u5230\u8fde\u63a5MySQL\u7684\u76ee\u7684\u3002"})}),"\n",(0,t.jsx)(e.h2,{id:"\u6267\u884c\u6570\u636e\u8fc1\u79fb\u64cd\u4f5c",children:"\u6267\u884c\u6570\u636e\u8fc1\u79fb\u64cd\u4f5c"}),"\n",(0,t.jsx)(e.p,{children:"\u914d\u7f6e\u5b8c\u4e86MySQL\u4ee5\u540e\uff0c\u63a5\u4e0b\u6765\u54b1\u4eec\u6765\u6267\u884c\u6570\u636e\u5e93\u8fc1\u79fb\u547d\u4ee4\u3002\n\u6211\u4eec\u4e00\u5f20\u8868\u90fd\u6ca1\u6709\u5efa\u7acb\uff0c\u90a3\u4e3a\u4ec0\u4e48\u76f4\u63a5\u53ef\u4ee5\u6267\u884c\u8fd9\u4e2a\u6570\u636e\u5e93\u8fc1\u79fb\u5462\uff1f\n\u8fd9\u662f\u56e0\u4e3apython\u81ea\u5e26\u4e86\u4e00\u4e2a\u540e\u53f0\uff0c\n\u8fd9\u4e2a\u540e\u53f0\u5c31\u4f7f\u7528\u5230\u4e86\u5f88\u591a\u7684\u6570\u636e\u8868\uff0c\n\u6240\u4ee5\u5b83\u5df2\u7ecf\u7ed9\u6211\u4eec\u51c6\u5907\u597d\u4e86\u8fd9\u6837\u7684\u6587\u4ef6\uff0c\n\u54b1\u4eec\u76f4\u63a5\u751f\u6210\u8fc1\u79fb\u6587\u4ef6\u5c31OK\u4e86\u3002"}),"\n",(0,t.jsx)(e.p,{children:"\u6211\u4eec\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u547d\u4ee4\u884c\u7684\u65b9\u5f0f\u6267\u884c\u8fc1\u79fb\u6570\u636e\u5e93\u3002"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"python manage.py migrate\n"})}),"\n",(0,t.jsx)(e.admonition,{type:"tip",children:(0,t.jsx)(e.p,{children:"\u8fd8\u8bb0\u5f97\u6211\u4eec\u53ea\u7528\u8fc7python manage.py --help\u547d\u4ee4\u5417\uff1f\u8fd9\u91cc\u5c31\u5305\u542b\u8fd9\u4e2amigrate\uff0c \u6240\u4ee5\u8bb0\u4e0d\u4f4f\u6ca1\u5173\u7cfb\uff0c\u6267\u884c--help\u67e5\u770b\u4e00\u4e0b\u5373\u53ef\u3002"})}),"\n",(0,t.jsx)(e.p,{children:"\u6267\u884c\u6210\u529f\u4e86\uff0c \u8bf4\u660e\u5b83\u81ea\u52a8\u5df2\u7ecf\u5c31\u521b\u5efa\u4e86\u81ea\u5e26\u7684\u6570\u636e\u8868\u3002\n\u53ef\u4ee5\u662f\u4f7f\u7528mysql\u7684show table\u547d\u4ee4\u67e5\u770b\uff0c\u5982\u4e0b\u56fe\u6240\u793a\u3002"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{alt:"\u56fe18-\u8fc1\u79fb\u540e\u521b\u5efa\u7684\u8868",src:s(9599).Z+"",width:"1020",height:"702"})}),"\n",(0,t.jsx)(e.p,{children:"\u4e0a\u56fe\u53ef\u4ee5\u770b\u5230\u65b0\u589e\u4e8610\u5f20\u8868\uff0c\n\u90fd\u662f\u7cfb\u7edf\u81ea\u52a8\u751f\u6210\u7684\uff0c\n\u5c31\u662f\u56e0\u4e3a\u8fd9\u91cc\u6267\u884c\u4e86\u4e00\u4e2a\u8fc1\u79fb\u6587\u4ef6\u3002"}),"\n",(0,t.jsx)(e.p,{children:"\u90a3\u63a5\u4e0b\u6765\u5462\uff0c\u6211\u4eec\u6765\u542f\u52a8\u670d\u52a1\uff0c\u6267\u884c"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"python manage.py runserver\n"})}),"\n",(0,t.jsx)(e.admonition,{type:"tip",children:(0,t.jsx)(e.p,{children:"\u5c0f\u4f19\u4f34\u53ef\u4ee5\u901a\u8fc7\u952e\u76d8\u4e2d\u7684\u5411\u4e0a\u7684\u7bad\u5934\u56de\u5230\u4e0a\u4e00\u4e2a\u547d\u4ee4\u3002"})}),"\n",(0,t.jsx)(e.p,{children:"\u6211\u4eec\u73b0\u5728\u5c31\u53ef\u4ee5\u8bbf\u95ee\u540e\u53f0\u4e86\u3002\u5728\u6d4f\u89c8\u5668\u4e2d\u8f93\u5165\u7f51\u5740:127.0.0.1:8000/admin,\n\u6211\u4eec\u5c31\u5df2\u7ecf\u8fdb\u5165\u5230\u4e86Django\u81ea\u5e26\u7684\u4e00\u4e2a\u540e\u53f0\u3002\u8fd0\u884c\u7ed3\u679c\u5982\u4e0b\u56fe\u3002"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{alt:"\u56fe18-\u540e\u53f0\u767b\u5f55\u9875",src:s(9591).Z+"",width:"1716",height:"620"})}),"\n",(0,t.jsx)(e.p,{children:"\u53ea\u662f\u73b0\u5728\u6211\u4eec\u8fd8\u6ca1\u6709\u521b\u5efa\u7528\u6237\u540d\u548c\u5bc6\u7801,\n\u540e\u9762\u6211\u4eec\u5728\u8bb2\u89e3Django\u540e\u53f0\u7684\u65f6\u5019\uff0c\u518d\u6765\u8be6\u7ec6\u4ecb\u7ecd\u5b83,\n\u90a3\u8fd9\u4e5f\u8bc1\u660e\u4e86\u6211\u4eec\u521a\u624d\u521b\u5efa\u7684\u8fd9\u4e9b\u8868\u5df2\u7ecf\u751f\u6548\u4e86.\n\u597d\u672c\u8282\u6211\u4eec\u5148\u4ecb\u7ecd\u5230\u8fd9\u91cc,\n\u5c0f\u4f19\u4f34\uff0c\u6211\u4eec\u4e0b\u8282\u518d\u89c1\u3002"})]})}function h(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(c,{...n})}):c(n)}},9591:(n,e,s)=>{s.d(e,{Z:()=>t});const t=s.p+"assets/images/\u56fe18-\u540e\u53f0\u767b\u5f55\u9875-add111e06a41c6c09ffe27aa4dc592be.png"},9599:(n,e,s)=>{s.d(e,{Z:()=>t});const t=s.p+"assets/images/\u56fe18-\u8fc1\u79fb\u540e\u521b\u5efa\u7684\u8868-8348301953eec2d058805b048e254bd5.png"},1151:(n,e,s)=>{s.d(e,{Z:()=>o,a:()=>d});var t=s(7294);const i={},a=t.createContext(i);function d(n){const e=t.useContext(a);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:d(n.components),t.createElement(a.Provider,{value:e},n.children)}}}]);