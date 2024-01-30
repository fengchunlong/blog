"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7569],{2743:(n,e,a)=>{a.r(e),a.d(e,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>d,toc:()=>s});var r=a(5893),t=a(1151);const o={},l="\u7ec4\u7ec7\u76ee\u5f55\u7ed3\u6784",d={id:"Flask\u9879\u76ee:\u7f51\u6613\u4e91\u8bfe\u5802\u8bfe\u7a0b\u5206\u6790/\u7ec4\u7ec7\u76ee\u5f55\u7ed3\u6784",title:"\u7ec4\u7ec7\u76ee\u5f55\u7ed3\u6784",description:"\u4e3a\u4e86\u8ba9\u9879\u76ee\u66f4\u52a0\u6e05\u6670\uff0c\u6211\u4eec\u9700\u8981\u91cd\u65b0\u7ec4\u7ec7\u4e00\u4e0b\u76ee\u5f55\u7ed3\u6784\uff0c\u9996\u5148\u5bf9\u76ee\u5f55\u7ed3\u6784\u8fdb\u884c\u62c6\u5206\u3002",source:"@site/docs/Flask\u9879\u76ee:\u7f51\u6613\u4e91\u8bfe\u5802\u8bfe\u7a0b\u5206\u6790/2.\u7ec4\u7ec7\u76ee\u5f55\u7ed3\u6784.md",sourceDirName:"Flask\u9879\u76ee:\u7f51\u6613\u4e91\u8bfe\u5802\u8bfe\u7a0b\u5206\u6790",slug:"/Flask\u9879\u76ee:\u7f51\u6613\u4e91\u8bfe\u5802\u8bfe\u7a0b\u5206\u6790/\u7ec4\u7ec7\u76ee\u5f55\u7ed3\u6784",permalink:"/docs/Flask\u9879\u76ee:\u7f51\u6613\u4e91\u8bfe\u5802\u8bfe\u7a0b\u5206\u6790/\u7ec4\u7ec7\u76ee\u5f55\u7ed3\u6784",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Flask\u9879\u76ee:\u7f51\u6613\u4e91\u8bfe\u5802\u8bfe\u7a0b\u5206\u6790/2.\u7ec4\u7ec7\u76ee\u5f55\u7ed3\u6784.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u8bbe\u8ba1\u6570\u636e\u8868",permalink:"/docs/Flask\u9879\u76ee:\u7f51\u6613\u4e91\u8bfe\u5802\u8bfe\u7a0b\u5206\u6790/\u8bbe\u8ba1\u6570\u636e\u8868"},next:{title:"Bootstrap\u524d\u7aef\u6846\u67b6\u7b80\u4ecb",permalink:"/docs/Flask\u9879\u76ee:\u7f51\u6613\u4e91\u8bfe\u5802\u8bfe\u7a0b\u5206\u6790/Bootstrap\u524d\u7aef\u6846\u67b6\u7b80\u4ecb"}},i={},s=[{value:"\u62c6\u5206\u524d",id:"\u62c6\u5206\u524d",level:2},{value:"\u62c6\u5206\u540e",id:"\u62c6\u5206\u540e",level:2}];function p(n){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"\u7ec4\u7ec7\u76ee\u5f55\u7ed3\u6784",children:"\u7ec4\u7ec7\u76ee\u5f55\u7ed3\u6784"}),"\n",(0,r.jsx)(e.p,{children:"\u4e3a\u4e86\u8ba9\u9879\u76ee\u66f4\u52a0\u6e05\u6670\uff0c\u6211\u4eec\u9700\u8981\u91cd\u65b0\u7ec4\u7ec7\u4e00\u4e0b\u76ee\u5f55\u7ed3\u6784\uff0c\u9996\u5148\u5bf9\u76ee\u5f55\u7ed3\u6784\u8fdb\u884c\u62c6\u5206\u3002"}),"\n",(0,r.jsx)(e.h2,{id:"\u62c6\u5206\u524d",children:"\u62c6\u5206\u524d"}),"\n",(0,r.jsx)(e.p,{children:"\u539f\u59cbmanage.py\u6587\u4ef6\u4ee3\u7801\u5982\u4e0b\uff1a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:"# manage.py \nfrom flask import Flask\nfrom flask_sqlalchemy import SQLAlchemy\nfrom datetime import datetime\nfrom flask_migrate import Migrate\n\n\napp = Flask(__name__)\napp.config['SECRET_KEY'] = 'daxiongketang'\napp.config['SQLALCHEMY_DATABASE_URI'] = (\n    'mysql+pymysql://root:andy123456@localhost/daxiong?charset=utf8mb4'\n)\n\ndb = SQLAlchemy(app)\nmigrate = Migrate(app, db)\n\n\n@app.route('/')\ndef index():\n    return \"hello world\"\n  \n\nif __name__ == \"__main__\":\n\t\tapp.run()\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u62c6\u5206\u540e",children:"\u62c6\u5206\u540e"}),"\n",(0,r.jsx)(e.p,{children:"\u62c6\u5206\u540e\u76ee\u5f55\u7ed3\u6784\u5982\u4e0b\uff1a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"\u251c\u2500\u2500 app\n\u2502\xa0\xa0 \u251c\u2500\u2500 __init__.py\n\u2502\xa0\xa0 \u251c\u2500\u2500 models.py\n\u2502\xa0\xa0 \u251c\u2500\u2500 routes.py\n\u251c\u2500\u2500 manage.py\n\u251c\u2500\u2500 migrations\n\u2514\u2500\u2500 venv\n"})}),"\n",(0,r.jsx)(e.p,{children:"manage.py\u6587\u4ef6\u4ee3\u7801\u5982\u4e0b"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:"# manage.py\nfrom app import app\n\n\nif __name__ == '__main__':\n    app.run(debug=True)\n"})}),"\n",(0,r.jsx)(e.p,{children:"app\u4e0b__init__.py\u4ee3\u7801\u5982\u4e0b\uff1a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:"# app/__init__.py\nfrom flask import Flask\nfrom flask_sqlalchemy import SQLAlchemy\nfrom flask_migrate import Migrate\n\n\napp = Flask(__name__)\napp.config['SECRET_KEY'] = 'daxiongketang'\napp.config['SQLALCHEMY_DATABASE_URI'] = (\n    'mysql+pymysql://root:andy123456@localhost/daxiong?charset=utf8mb4'\n)\n\ndb = SQLAlchemy(app)\nmigrate = Migrate(app, db)\nlogin_manager = LoginManager(app)\n\n# \u5bfc\u5165\u8def\u7531\nfrom app import routes\n"})}),"\n",(0,r.jsx)(e.p,{children:"app\u4e0bmodels.py\u4ee3\u7801\u5982\u4e0b\uff1a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:"from app import db\nfrom datetime import datetime\n\n\nclass Course(db.Model):\n    course_id = db.Column(db.String(100), primary_key=True, nullable=False)\n    product_id = db.Column(db.String(100), nullable=False)\n    product_type = db.Column(db.Integer, nullable=False)\n    product_name = db.Column(db.String(125), nullable=False)\n    provider = db.Column(db.String(125), nullable=False)\n    score = db.Column(db.Float(2))\n    score_level = db.Column(db.Integer)\n    learner_count = db.Column(db.Integer)\n    lesson_count = db.Column(db.Integer)\n    lector_name = db.Column(db.String(125))\n    original_price = db.Column(db.Float(2))\n    discount_price = db.Column(db.Float(2))\n    discount_rate = db.Column(db.Float(2))\n    img_url = db.Column(db.String(125))\n    big_img_url = db.Column(db.String(125))\n    description = db.Column(db.Text)\n\n\nclass Sale(db.Model):\n    id = db.Column(db.Integer, autoincrement=True, primary_key=True, nullable=False)\n    course_id = db.Column(db.String(100), db.ForeignKey('course.course_id'))\n    product_name = db.Column(db.String(125), nullable=False)\n    learner_count = db.Column(db.Integer)\n    create_time = db.Column(db.Date, default=datetime.today())\n    course = db.relationship('Course', backref=db.backref('Sale', lazy='dynamic'))\n\n"})}),"\n",(0,r.jsx)(e.p,{children:"app\u4e0broutes.py\u4ee3\u7801\u5982\u4e0b\uff1a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:'#app/routes.py\nfrom app import app\n\n\n@app.route\ndef index():\n\t\treturn "hello world"\n    \n'})})]})}function c(n={}){const{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(p,{...n})}):p(n)}},1151:(n,e,a)=>{a.d(e,{Z:()=>d,a:()=>l});var r=a(7294);const t={},o=r.createContext(t);function l(n){const e=r.useContext(o);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:l(n.components),r.createElement(o.Provider,{value:e},n.children)}}}]);