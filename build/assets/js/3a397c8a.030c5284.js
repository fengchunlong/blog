"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9105],{8428:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var t=s(5893),i=s(1151);const r={},d="[\u6a21\u578b]\u5220\u9664\u6570\u636e",l={id:"Django\u57fa\u7840\u6559\u7a0b/ORM\u5220\u9664\u6570\u636e",title:"[\u6a21\u578b]:ORM\u5220\u9664\u6570\u636e",description:"\u672c\u8282\u6211\u4eec\u6765\u4ecb\u7ecdORM\u589e\u5220\u6539\u67e5\u7684\u6700\u540e\u4e00\u4e2a:\u5220\u9664\u6570\u636e\u3002",source:"@site/docs/Django\u57fa\u7840\u6559\u7a0b/26.ORM\u5220\u9664\u6570\u636e.md",sourceDirName:"Django\u57fa\u7840\u6559\u7a0b",slug:"/Django\u57fa\u7840\u6559\u7a0b/ORM\u5220\u9664\u6570\u636e",permalink:"/docs/Django\u57fa\u7840\u6559\u7a0b/ORM\u5220\u9664\u6570\u636e",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:26,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"[\u6a21\u578b]:ORM\u66f4\u65b0\u6570\u636e",permalink:"/docs/Django\u57fa\u7840\u6559\u7a0b/ORM\u66f4\u65b0\u6570\u636e"},next:{title:"[Django\u540e\u53f0]: \u6ce8\u518c\u540e\u53f0\u6a21\u578b",permalink:"/docs/Django\u57fa\u7840\u6559\u7a0b/\u6ce8\u518c\u540e\u53f0\u6a21\u578b"}},o={},c=[{value:"\u5220\u96641\u6761\u8bb0\u5f55",id:"\u5220\u96641\u6761\u8bb0\u5f55",level:2},{value:"\u5220\u9664\u591a\u6761\u8bb0\u5f55",id:"\u5220\u9664\u591a\u6761\u8bb0\u5f55",level:2},{value:"\u5220\u9664\u5305\u542b\u5173\u8054\u5173\u7cfb\u7684\u6570\u636e",id:"\u5220\u9664\u5305\u542b\u5173\u8054\u5173\u7cfb\u7684\u6570\u636e",level:2}];function a(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"\u6a21\u578b\u5220\u9664\u6570\u636e",children:["[\u6a21\u578b]",":ORM","\u5220\u9664\u6570\u636e"]}),"\n",(0,t.jsxs)(n.p,{children:["\u672c\u8282\u6211\u4eec\u6765\u4ecb\u7ecdORM\u589e\u5220\u6539\u67e5\u7684\u6700\u540e\u4e00\u4e2a:\u5220\u9664\u6570\u636e\u3002\n\u5728\u5220\u9664\u6570\u636e\u7684\u65f6\u5019\u5462\uff0c\u901a\u5e38\u6709\u4e24\u79cd\u65b9\u5f0f\u3002\n",(0,t.jsx)(n.img,{alt:"\u56fe26-\u5220\u9664\u76842\u79cd\u65b9\u5f0f",src:s(5054).Z+"",width:"1410",height:"560"})]}),"\n",(0,t.jsx)(n.p,{children:"\u7b2c1\u79cd\u5c31\u662f\u7269\u7406\u5220\u9664,\n\u6240\u8c13\u7684\u7269\u7406\u5220\u9664\u5c31\u662f\u5c06\u5176\n\u4ece\u6211\u4eec\u7684\u78c1\u76d8\u4e2d\u8fdb\u884c\u5220\u9664\u3002\n\u90a3\u5220\u9664\u4ee5\u540e\u5462\uff0c\u5b83\u5c31\u4e0d\u80fd\u518d\u6062\u590d\u4e86,\n\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528delete\u65b9\u6cd5\u8fdb\u884c\u5220\u9664\u3002\n\u7b2c2\u79cd\u5462\u5c31\u662f\u903b\u8f91\u5220\u9664,\n\u903b\u8f91\u5220\u9664\u5462\uff0c\u5e76\u4e0d\u662f\u771f\u6b63\u7684\u5220\u9664,\n\u800c\u662f\u6dfb\u52a0\u4e00\u4e2a\u5b57\u6bb5\u3002\n\u6bd4\u5982\u8bf4\u6211\u4eec\u8bbe\u7f6e\u4e3astatus,\n\u7528\u4e8e\u8868\u793a\u5b83\u7684\u72b6\u6001,\n\u53ef\u4ee5\u7ed9\u5b83\u8bbe\u7f6e\u4e24\u4e2a\u503c,\n0\u548c1,\n\u5982\u679c\u662f1\u7684\u8bdd\u5c31\u6309\u7167\u8bb0\u5f55\u6765\u663e\u793a,\n\u5982\u679c\u662f0\u7684\u8fd9\u6761\u8bb0\u5f55\u5c31\u4e0d\u663e\u793a,\n\u901a\u8fc7\u63a7\u5236\u8fd9\u4e2a\u5b57\u6bb5\uff0c\u6211\u4eec\u5c31\u53ef\u4ee5\u8ba9\u8fd9\u6761\u8bb0\u5f55\u8fdb\u884c\u663e\u793a\u548c\u9690\u85cf\u3002\n\u4f46\u662f\u5b83\u4e5f\u6709\u9ebb\u70e6\u7684\u5730\u65b9,\n\u5c31\u662f\u6bcf\u6b21\u5728\u67e5\u8be2\u7684\u65f6\u5019\uff0c\u6211\u4eec\u90fd\u9700\u8981\u8bbe\u7f6e\u4e0a\u8fd9\u4e2a\u5b57\u6bb5,\n\u56e0\u4e3a\u5982\u679c\u4f60\u4e0d\u8bbe\u7f6e\uff0c\u5b83\u5c31\u9ed8\u8ba4\u4e0d\u663e\u793a\u7684,\n\u8fd9\u662f\u4e24\u79cd\u5e38\u7528\u7684\u5220\u9664\u65b9\u5f0f\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u5c0f\u4f19\u4f34\u53ef\u4ee5\u6839\u636e\u81ea\u5df1\u7684\u9700\u6c42\u6765\u8fdb\u884c\u8bbe\u7f6e,\n\u5982\u679c\u4f60\u60f3\u771f\u6b63\u7684\u5220\u9664\u5b83\uff0c\u5c31\u4f7f\u7528\u7269\u7406\u5220\u9664,\n\u5982\u679c\u4f60\u8fd8\u60f3\u4fdd\u7559,\n\u65b9\u4fbf\u4ee5\u540e\u67e5\u8be2\uff0c\u90a3\u4e48\u5c31\u53ef\u4ee5\u4f7f\u7528\u8fd9\u4e2a\u903b\u8f91\u5220\u9664\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u4f8b\u5982\u6211\u4eec\u4e00\u4e9b\u8ba2\u5355\u8868\u4e2d\u7684,\n\u8fd9\u4e2a\u8ba2\u5355\u6570\u636e,\n\u65f6\u95f4\u957f\u4e86\u8fd9\u4e9b\u8ba2\u5355\u5462,\n\u7528\u6237\u662f\u53ef\u4ee5\u8fdb\u884c\u5220\u9664\u7684,\n\u4f46\u662f\u5462\uff0c\u4e3a\u4e86\u65b9\u4fbf\u540e\u7eed\u6211\u4eec\u67e5\u627e\u8fd9\u4e2a\u8ba2\u5355,\n\u6240\u4ee5\u6211\u4eec\u4e0d\u4f1a\u4f7f\u7528\u771f\u6b63\u7684\u7269\u7406\u5220\u9664,\n\u800c\u662f\u4f7f\u7528\u903b\u8f91\u5220\u9664,\n\u5f53\u7528\u6237\u5220\u9664\u8fd9\u4e2a\u8ba2\u5355\u4ee5\u540e,\n\u53ea\u662f\u5728\u7528\u6237\u7684\u754c\u9762\u5b83\u4e0d\u663e\u793a\u800c\u5df2,\n\u56e0\u4e3a\u6211\u4eec\u5c06\u8fd9\u4e2a\u5b57\u6bb5\u8bbe\u7f6e\u4e3a\u4e860,\n\u4e0d\u663e\u793a,\n\u800c\u771f\u5b9e\u7684\u8fd9\u6761\u8bb0\u5f55\u662f\u5b58\u5728\u7684,\n\u90a3\u63a5\u4e0b\u6765\u54b1\u4eec\u91cd\u70b9\u8bb2\u89e3\u4e00\u4e0b\u8fd9\u4e2a\u7269\u7406\u5220\u9664\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u5220\u96641\u6761\u8bb0\u5f55",children:"\u5220\u96641\u6761\u8bb0\u5f55"}),"\n",(0,t.jsx)(n.p,{children:"\u5220\u9664\u7684\u65f6\u5019\u5462\uff0c\u6211\u4eec\u4e00\u5b9a\u8981\u77e5\u9053\u4f60\u8981\u5220\u9664\u7684\u662f\u54ea\u6761\u8bb0\u5f55,\n\u4e0d\u7136\u7684\u8bdd\u5462\uff0c\u5b83\u4f1a\u5168\u90e8\u90fd\u8fdb\u884c\u5220\u9664\u7684\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u6bd4\u5982\u8bf4\u73b0\u5728\u6211\u4eec\u8981\u628a\u8fd9\u4e2auser\u8868\u4e2d,id=4\u7684\u8fdb\u884c\u5220\u9664\u3002\u793a\u4f8b\u5982\u4e0b:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"user = User.objects.get(id=4)\nuser.delete()\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u6267\u884c\u5b8c\u53d1\u73b0\u6570\u636e\u5e93\u4e2did=4\u7684\u8bb0\u5f55\u4ee5\u53ca\u88ab\u5220\u9664\u4e86\u3002"}),"\n",(0,t.jsx)(n.admonition,{title:"\u6ce8\u610f",type:"danger",children:(0,t.jsx)(n.p,{children:"\u5220\u9664\u65f6\u4e00\u5b9a\u8981\u6ce8\u610f\u5220\u9664\u6761\u4ef6\uff0c\u5982\u679c\u6ca1\u6709\u5220\u9664\u7684\u6761\u4ef6\u7684\u8bdd\uff0c\u5219\u4f1a\u5220\u9664\u5168\u90e8\u6570\u636e\u3002"})}),"\n",(0,t.jsx)(n.h2,{id:"\u5220\u9664\u591a\u6761\u8bb0\u5f55",children:"\u5220\u9664\u591a\u6761\u8bb0\u5f55"}),"\n",(0,t.jsx)(n.p,{children:"\u6b64\u5916\uff0c\u6211\u4eec\u8fd8\u53ef\u4ee5\u5220\u9664\u591a\u6761\u8bb0\u5f55\u3002\u4f8b\u5982\uff0c\u5220\u9664user_id=3\u548cuser_id=4\u7684\u4e24\u6761\u8bb0\u5f55\uff0c\u793a\u4f8b\u5982\u4e0b\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# \u67e5\u8be2\u8981\u5220\u9664\u7684\u7528\u6237\n>>> users = User.objects.filter(id__in=[3, 4])\n# \u5220\u9664\u67e5\u8be2\u96c6\u5408\u4e2d\u7684\u5b9e\u4f8b\n>>> users.delete()\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u5220\u9664\u5305\u542b\u5173\u8054\u5173\u7cfb\u7684\u6570\u636e",children:"\u5220\u9664\u5305\u542b\u5173\u8054\u5173\u7cfb\u7684\u6570\u636e"}),"\n",(0,t.jsx)(n.p,{children:"\u5728\u5220\u9664\u7684\u65f6\u5019\u6211\u4eec\u7279\u522b\u9700\u8981\u6ce8\u610f\u4e00\u70b9\uff0c\u5c31\u662f\u8868\u4e4b\u95f4\u7684\u5173\u8054\u5173\u7cfb\u3002\u4f8b\u5982\uff0cUser\u8868\u548cArticle\u8868\u662f\u4e00\u5bf9\u591a\u5173\u7cfb\uff0c\u5728Article\u6a21\u578b\u4e2d\uff0c\u6709\u5982\u4e0b\u8bbe\u7f6e\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"class Article(model):\n    id = models.AutoField(primary_key=True)\n    title = models.CharField(max_length=120)\n    slug = models.CharField(max_length=200, default='')\n    content = models.TextField()\n    publish_date = models.DateTimeField()\n    user = models.ForeignKey(User, on_delete=models.CASCADE)\n"})}),"\n",(0,t.jsx)(n.p,{children:"user\u5b57\u6bb5\u8bbe\u7f6e\u4e86\u5916\u952e\u5c5e\u6027on_delete=models.CASCADE\uff0c \u7ea7\u8054\u5220\u9664\u3002\u4e5f\u5c31\u662f\uff0c\u5982\u679c\u5220\u9664\u4e00\u4e2a\u7528\u6237\u65f6\uff0c\u8fd9\u4e2a\u7528\u6237\u4e0b\u6709\u5bf9\u5e94\u7684\u6587\u7ae0\uff0c\u90a3\u4e48\u4e5f\u4f1a\u968f\u4e4b\u5220\u9664\u3002\n\u90a3\u5982\u679c\u4e0d\u8bbe\u7f6e\u8fd9\u4e2a\u5c5e\u6027\u7684\u8bdd\uff0c\u7528\u6237\u5220\u9664\u540e\uff0c\u8fd9\u4e2a\u6587\u7ae0\u4f1a\u4fdd\u5b58\u7740,\n\u4f46\u662f\u6211\u4eec\u5df2\u7ecf\u65e0\u6cd5\u901a\u8fc7user\u6765\u627e\u5230\u5b83\u7684id\u4e86\u3002\n\u6240\u4ee5\u5462\uff0c\u4e00\u822c\u60c5\u51b5\u4e0b,\n\u5f53\u6211\u4eec\u628a\u4e00\u4e2a\u7528\u6237\u90fd\u5220\u9664\u4e86,\n\u90a3\u4e48\u5b83\u7684\u6587\u7ae0\u4e5f\u4f1a\u81ea\u7136\u800c\u7136\u7684\u6d88\u5931\u4e86\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u672c\u8282\u6211\u4eec\u5c31\u4ecb\u7ecd\u5230\u8fd9\u91cc\uff0c\n\u5c0f\u4f19\u4f34\uff0c\u6211\u4eec\u4e0b\u8282\u518d\u89c1\u3002"})]})}function u(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},5054:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/\u56fe26-\u5220\u9664\u76842\u79cd\u65b9\u5f0f-b3e63041ec039fb46c626c70ff9b642f.png"},1151:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>d});var t=s(7294);const i={},r=t.createContext(i);function d(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);