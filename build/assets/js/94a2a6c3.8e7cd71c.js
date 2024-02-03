"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1913],{3504:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>t,metadata:()=>l,toc:()=>i});var a=r(5893),s=r(1151);const t={},o="\u641c\u7d22\u8bfe\u7a0b\u529f\u80fd\u5b9e\u73b0",l={id:"Flask\u9879\u76ee:\u7f51\u6613\u4e91\u8bfe\u5802\u8bfe\u7a0b\u5206\u6790/\u641c\u7d22\u8bfe\u7a0b\u529f\u80fd\u5b9e\u73b0",title:"\u641c\u7d22\u8bfe\u7a0b\u529f\u80fd\u5b9e\u73b0",description:"routes.py \u6587\u4ef6\u4e2d\u521b\u5efasearch()\uff0c \u4ee3\u7801\u5982\u4e0b\uff1a",source:"@site/docs/Flask\u9879\u76ee:\u7f51\u6613\u4e91\u8bfe\u5802\u8bfe\u7a0b\u5206\u6790/8.\u641c\u7d22\u8bfe\u7a0b\u529f\u80fd\u5b9e\u73b0.md",sourceDirName:"Flask\u9879\u76ee:\u7f51\u6613\u4e91\u8bfe\u5802\u8bfe\u7a0b\u5206\u6790",slug:"/Flask\u9879\u76ee:\u7f51\u6613\u4e91\u8bfe\u5802\u8bfe\u7a0b\u5206\u6790/\u641c\u7d22\u8bfe\u7a0b\u529f\u80fd\u5b9e\u73b0",permalink:"/docs/Flask\u9879\u76ee:\u7f51\u6613\u4e91\u8bfe\u5802\u8bfe\u7a0b\u5206\u6790/\u641c\u7d22\u8bfe\u7a0b\u529f\u80fd\u5b9e\u73b0",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u5168\u90e8\u8bfe\u7a0b\u5206\u9875\u9875\u9762\u5b9e\u73b0",permalink:"/docs/Flask\u9879\u76ee:\u7f51\u6613\u4e91\u8bfe\u5802\u8bfe\u7a0b\u5206\u6790/\u5168\u90e8\u8bfe\u7a0b\u83b7\u53d6\u5206\u9875\u6570"},next:{title:"\u4f7f\u7528\u5b8f\u5b9e\u73b0\u5206\u9875\u529f\u80fd",permalink:"/docs/Flask\u9879\u76ee:\u7f51\u6613\u4e91\u8bfe\u5802\u8bfe\u7a0b\u5206\u6790/\u4f7f\u7528\u5b8f\u5b9e\u73b0\u5206\u9875\u529f\u80fd"}},c={},i=[];function u(e){const n={code:"code",h1:"h1",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"\u641c\u7d22\u8bfe\u7a0b\u529f\u80fd\u5b9e\u73b0",children:"\u641c\u7d22\u8bfe\u7a0b\u529f\u80fd\u5b9e\u73b0"}),"\n",(0,a.jsx)(n.p,{children:"routes.py \u6587\u4ef6\u4e2d\u521b\u5efasearch()\uff0c \u4ee3\u7801\u5982\u4e0b\uff1a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"from flask import render_template, request, redirect, url_for\n\n@app.route('/search/')\ndef search():\n    page = request.args.get('page',1,type=int)\n    keyword = request.args.get('keyword','')\n    # \u5982\u679c\u6ca1\u6709keyword,\u5c31\u8df3\u8f6c\u5230\u5168\u90e8\u8bfe\u7a0b\u9875\u9762\n    if not keyword:\n        return redirect(url_for('course_list'))\n    # \u6839\u636e\u8bfe\u7a0b\u540d\u79f0\u67e5\u8be2\n    condition1 = Course.product_name.like('%'+ keyword + '%')\n    # \u6839\u636e\u673a\u6784\u540d\u79f0\u67e5\u8be2\n    condition2 = Course.provider.like('%' + keyword + '%')\n    courses = Course.query.filter(or_(condition1,condition2)).paginate(page=page,per_page=20)\n    return render_template('search.html',courses=courses,keyword=keyword)\n"})}),"\n",(0,a.jsx)(n.p,{children:"base.html\u8bbe\u7f6e\u8df3\u8f6c\u8fde\u63a5\u548c\u8868\u5355\u63d0\u4ea4\u8def\u5f84\uff1a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-html",children:'<nav class="navbar navbar-expand-lg navbar-dark bg-dark">\n    <div class="container">\n        <a class="navbar-brand" href="/">\n            <span style="padding-left:5px">\u5927\u718a\u8bfe\u5802</span>\n        </a>\n        <div class="collapse navbar-collapse" id="navbarSupportedContent">\n            <ul class="navbar-nav" style="margin:0 30px">\n                <li class="nav-item">\n                    <a class="nav-link" href="{{url_for(\'index\')}}">\u9996\u9875 </a>\n                </li>\n                <li class="nav-item">\n                    <a class="nav-link" href="{{url_for(\'course_list\')}}">\u5168\u90e8\u8bfe\u7a0b</a>\n                </li>\n                <li class="nav-item">\n                    <a class="nav-link active" href="{{url_for(\'about\')}}">\u5173\u4e8e\u6211\u4eec</a>\n                </li>\n            </ul>\n            <form class="form-inline my-2 my-lg-0" method="get" action="{{url_for(\'search\')}}">\n                <input name="keyword" class="form-control mr-sm-2" type="search" placeholder="\u6839\u636e\u8bfe\u7a0b\u540d\u79f0\u67e5\u8be2" aria-label="\u6839\u636e\u8bfe\u7a0b\u540d\u79f0\u67e5\u8be2">\n                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>\n            </form>\n        </div>\n        <ul class="navbar-nav">\n            <li class="nav-item">\n                <a class="nav-link"  style="color:white;">\n                <button class="btn btn-outline-success" >\n                  \u767b\u5f55\n                </button>\n                </a>\n            </li>\n        </ul>\n    </div>\n</nav>\n'})})]})}function d(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>l,a:()=>o});var a=r(7294);const s={},t=a.createContext(s);function o(e){const n=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);