"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7266],{2693:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>t,toc:()=>o});var a=s(5893),l=s(1151);const r={},i="\u8bbe\u8ba1\u6570\u636e\u8868",t={id:"Flask\u9879\u76ee:\u7f51\u6613\u4e91\u8bfe\u5802\u8bfe\u7a0b\u5206\u6790/\u8bbe\u8ba1\u6570\u636e\u8868",title:"\u8bbe\u8ba1\u6570\u636e\u8868",description:"\u5b89\u88c5flask_migrate",source:"@site/docs/Flask\u9879\u76ee:\u7f51\u6613\u4e91\u8bfe\u5802\u8bfe\u7a0b\u5206\u6790/1.\u8bbe\u8ba1\u6570\u636e\u8868.md",sourceDirName:"Flask\u9879\u76ee:\u7f51\u6613\u4e91\u8bfe\u5802\u8bfe\u7a0b\u5206\u6790",slug:"/Flask\u9879\u76ee:\u7f51\u6613\u4e91\u8bfe\u5802\u8bfe\u7a0b\u5206\u6790/\u8bbe\u8ba1\u6570\u636e\u8868",permalink:"/docs/Flask\u9879\u76ee:\u7f51\u6613\u4e91\u8bfe\u5802\u8bfe\u7a0b\u5206\u6790/\u8bbe\u8ba1\u6570\u636e\u8868",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Flask\u9879\u76ee:\u7f51\u6613\u4e91\u8bfe\u5802\u8bfe\u7a0b\u5206\u6790/1.\u8bbe\u8ba1\u6570\u636e\u8868.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u9879\u76ee\u7b80\u4ecb",permalink:"/docs/Django+Vue\u5f00\u53d1\u7535\u5f71\u9879\u76ee/\u9879\u76ee\u7b80\u4ecb"},next:{title:"\u7ec4\u7ec7\u76ee\u5f55\u7ed3\u6784",permalink:"/docs/Flask\u9879\u76ee:\u7f51\u6613\u4e91\u8bfe\u5802\u8bfe\u7a0b\u5206\u6790/\u7ec4\u7ec7\u76ee\u5f55\u7ed3\u6784"}},c={},o=[{value:"\u6267\u884cSQL\u8bed\u53e5\u586b\u5145\u6570\u636e",id:"\u6267\u884csql\u8bed\u53e5\u586b\u5145\u6570\u636e",level:3}];function d(e){const n={code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"\u8bbe\u8ba1\u6570\u636e\u8868",children:"\u8bbe\u8ba1\u6570\u636e\u8868"}),"\n",(0,a.jsx)(n.p,{children:"\u5b89\u88c5flask_migrate"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"pip install flask_migrate\n"})}),"\n",(0,a.jsx)(n.p,{children:"manage.py\u4ee3\u7801\u5982\u4e0b\uff1a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"# manage.py \nfrom flask import Flask\nfrom flask_sqlalchemy import SQLAlchemy\nfrom datetime import datetime\nfrom flask_migrate import Migrate\n\n\napp = Flask(__name__)\napp.config['SECRET_KEY'] = 'daxiongketang'\napp.config['SQLALCHEMY_DATABASE_URI'] = (\n    'mysql+pymysql://root:andy123456@localhost/daxiong?charset=utf8mb4'\n)\n\ndb = SQLAlchemy(app)\nmigrate = Migrate(app, db)\n\n\n@app.route('/')\ndef index():\n    return \"hello world\"\n  \n\nif __name__ == \"__main__\":\n\t\tapp.run()\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u8bbe\u7f6eFLASK_APP:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"windows\u7cfb\u7edf\u8bbe\u7f6e\u5982\u4e0b\uff1a"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"set FLASK_APP=manage.py\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"mac\u7cfb\u7edf\u7528\u6237\u8bbe\u7f6e\u5982\u4e0b\uff1a"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"export FLASK_APP=manage.py\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u6267\u884c\u6570\u636e\u8fc1\u79fb\uff1a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"flask db init\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"flask db migrate\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"flask db upgrade\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u6267\u884c\u5b8c\u6bd5\u540e\uff0c\u68c0\u67e5\u6570\u636e\u5e93\u4e2d\u662f\u5426\u65b0\u589e\u4e863\u5f20\u8868\uff1a"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"alembic_version \u8fc1\u79fb\u8868"}),"\n",(0,a.jsx)(n.li,{children:"course \u8bfe\u7a0b\u8868"}),"\n",(0,a.jsx)(n.li,{children:"sale \u9500\u91cf\u8868"}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"\u6267\u884csql\u8bed\u53e5\u586b\u5145\u6570\u636e",children:"\u6267\u884cSQL\u8bed\u53e5\u586b\u5145\u6570\u636e"}),"\n",(0,a.jsx)(n.p,{children:"\u4f7f\u7528navicat \u6216\u5176\u4ed6\u547d\u4ee4\u884c\u5de5\u5177\uff0c\u6267\u884cSQL\u8bed\u53e5, \u4f8b\u5982\uff1a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"BEGIN;\nINSERT INTO `course` VALUES ();\nINSERT INTO `course` VALUES ();\nCOMMIT;\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u6267\u884c\u5b8c\u6210\u540e\uff0c\u68c0\u67e5\u6570\u636e\u5e93\u4e2d\u662f\u5426\u65b0\u589e\u4e86\u6570\u636e\u3002"})]})}function p(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>t,a:()=>i});var a=s(7294);const l={},r=a.createContext(l);function i(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);