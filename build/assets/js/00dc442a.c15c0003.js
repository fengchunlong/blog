"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[140],{9822:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>c,default:()=>o,frontMatter:()=>l,metadata:()=>d,toc:()=>a});var i=s(5893),r=s(1151);const l={},c="[\u6a21\u578b]\u65b0\u589e\u6570\u636e",d={id:"Django\u57fa\u7840\u6559\u7a0b/ORM\u65b0\u589e\u6570\u636e",title:"[\u6a21\u578b]:ORM\u65b0\u589e\u6570\u636e",description:"\u4ece\u672c\u8282\u5f00\u59cb\u6211\u4eec\u8981\u4ecb\u7ecdORM\u7684\u589e\u5220\u6539\u67e5\u64cd\u4f5c,",source:"@site/docs/Django\u57fa\u7840\u6559\u7a0b/21.ORM\u65b0\u589e\u6570\u636e.md",sourceDirName:"Django\u57fa\u7840\u6559\u7a0b",slug:"/Django\u57fa\u7840\u6559\u7a0b/ORM\u65b0\u589e\u6570\u636e",permalink:"/docs/Django\u57fa\u7840\u6559\u7a0b/ORM\u65b0\u589e\u6570\u636e",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:21,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"[\u6a21\u578b]:\u8bbe\u7f6eMeta\u5143\u6570\u636e",permalink:"/docs/Django\u57fa\u7840\u6559\u7a0b/\u8bbe\u7f6emeta\u539f\u6570\u636e"},next:{title:"[\u6a21\u578b]:ORM\u67e5\u8be2\u6570\u636e",permalink:"/docs/Django\u57fa\u7840\u6559\u7a0b/ORM\u67e5\u8be2\u6570\u636e"}},t={},a=[{value:"\u65b9\u5f0f1\uff1asave\u4fdd\u5b58",id:"\u65b9\u5f0f1save\u4fdd\u5b58",level:2},{value:"\u65b9\u5f0f2\uff1acreate()\u65b0\u589e",id:"\u65b9\u5f0f2create\u65b0\u589e",level:2},{value:"\u65b9\u5f0f3\uff1abulk create \u6279\u91cf\u521b\u5efa",id:"\u65b9\u5f0f3bulk-create-\u6279\u91cf\u521b\u5efa",level:2},{value:"\u8868\u5173\u8054\u7684\u4f7f\u7528",id:"\u8868\u5173\u8054\u7684\u4f7f\u7528",level:2},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"\u6a21\u578b\u65b0\u589e\u6570\u636e",children:["[\u6a21\u578b]",":ORM","\u65b0\u589e\u6570\u636e"]}),"\n",(0,i.jsx)(n.p,{children:"\u4ece\u672c\u8282\u5f00\u59cb\u6211\u4eec\u8981\u4ecb\u7ecdORM\u7684\u589e\u5220\u6539\u67e5\u64cd\u4f5c,\n\u4e5f\u5c31\u662f\u6211\u4eec\u5e38\u8bf4\u7684crud,"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"c\u4ee3\u8868\u7740create,\u589e\u52a0\u7684\u610f\u601d,\u4e5f\u53ef\u4ee5\u53eb\u63d2\u5165\u3002"}),"\n",(0,i.jsx)(n.li,{children:"r\u4ee3\u8868\u7740read\u5c31\u662f\u8bfb\u53d6\u3002\u6216\u8005\u53eb\u67e5\u8be2\u3002"}),"\n",(0,i.jsx)(n.li,{children:"u\u4ee3\u8868\u7740update,\u4fee\u6539\u3002"}),"\n",(0,i.jsx)(n.li,{children:"d\u4ee3\u8868\u7740delete,\u5220\u9664\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u672c\u8282\u6211\u4eec\u5148\u6765\u4ecb\u7ecd\u65b0\u589e\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u5728Django\u4e2d\u65b0\u589e\u6570\u636e\u4e3b\u8981\u6709\u4e09\u79cd\u65b9\u5f0f, \u5982\u4e0b\u56fe\u6240\u793a\u3002"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"\u56fe21-\u65b0\u589e\u6570\u636e\u76843\u79cd\u65b9\u5f0f",src:s(6363).Z+"",width:"1154",height:"574"})}),"\n",(0,i.jsx)(n.p,{children:"\u63a5\u4e0b\u6765\u54b1\u4eec\u5c31\u901a\u8fc7\u4ee3\u7801\u6765\u6f14\u793a\u5982\u4f55\u5b9e\u73b0orm\u7684\u65b0\u589e\u6570\u636e\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u90a3\u4e48\u5728\u6f14\u793a\u7684\u65f6\u5019\u5462\uff0c\u901a\u5e38\u6211\u4eec\u5c31\u4f7f\u7528,\nDjango\u4e2d\u7684shell,\n\u8fd9\u4e2ashell\u5176\u5b9e\u5c31\u662f\u4e00\u79cd\u8bed\u53e5\u884c\u7684\u65b9\u5f0f\u3002\n\u4e0d\u7136\u7684\u8bdd\uff0c\u6bcf\u6b21\u6211\u4eec\u90fd\u9700\u8981\u8fd0\u884c\u7a0b\u5e8f\u6765\u6267\u884c,\n\u8fd9\u6837\u7684\u8bdd\u5c31\u5f88\u9ebb\u70e6\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u6240\u4ee5\u5462\uff0c\u6211\u4eec\u540e\u9762\u7684\u589e\u5220\u6539\u67e5\u64cd\u4f5c,\n\u90fd\u662f\u76f4\u63a5\u901a\u8fc7shell\u6765\u6f14\u793a\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u8bed\u53e5\u6765\u542f\u52a8shell, \u8bed\u53e5\u5982\u4e0b\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"python manage.py shell \n"})}),"\n",(0,i.jsx)(n.p,{children:"\u542f\u52a8\u540e\u5982\u4e0b\u56fe\u6240\u793a\u3002\n![\u56fe21-\u542f\u52a8shell])(imgs/\u56fe21-\u542f\u52a8shell.png)"}),"\n",(0,i.jsx)(n.p,{children:"\u6211\u4eec\u5c31\u5df2\u7ecf\u542f\u52a8\u4e86\u8fd9\u4e2ashell,\n\u63a5\u4e0b\u6765\u6211\u4eec\u5728\u8fd9\u91cc\u64cd\u4f5c\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u65b9\u5f0f1save\u4fdd\u5b58",children:"\u65b9\u5f0f1\uff1asave\u4fdd\u5b58"}),"\n",(0,i.jsx)(n.p,{children:"\u90a3\u9996\u5148\u6211\u4eec\u8981\u64cd\u4f5c\u4e00\u4e2a\u6a21\u578b\uff0c\u5c31\u9700\u8981\u5148\u628a\u8fd9\u4e2a\u6a21\u578b\u5bfc\u5165\u8fdb\u6765, \u4ee3\u7801\u5982\u4e0b:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:">>> from account.models import User\n>>> user_obj = User(username='andy', password='123456', email='andy@qq.com')\n>>> user_obje.save()\n"})}),"\n",(0,i.jsxs)(n.admonition,{title:"\u4ee3\u7801\u89e3\u6790",type:"info",children:[(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u4eceaccount\u5e94\u7528\u7684models.py\u6587\u4ef6\u4e2d\u5bfc\u5165User\u6a21\u578b\u7c7b"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u521b\u5efa\u4e00\u4e2aUser\u5bf9\u8c61,\u7528\u6237\u540d\u662f'andy',\u5bc6\u7801\u662f'123456',\u90ae\u7bb1\u662f'",(0,i.jsx)(n.a,{href:"mailto:andy@qq.com",children:"andy@qq.com"}),"'"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u8c03\u7528save()\u65b9\u6cd5\u5c06\u8fd9\u4e2a\u7528\u6237\u5bf9\u8c61\u4fdd\u5b58\u5230\u6570\u636e\u5e93\u4e2d"}),"\n"]}),"\n"]}),(0,i.jsx)(n.p,{children:"\u6240\u4ee5\u8fd9\u6bb5\u4ee3\u7801\u7684\u4f5c\u7528\u5c31\u662f\u5728Django\u9879\u76ee\u4e2d\u901a\u8fc7\u6a21\u578b\u7c7b\u521b\u5efa\u4e86\u4e00\u4e2a\u65b0\u7684\u7528\u6237,\u5e76\u4fdd\u5b58\u5230\u4e86\u6570\u636e\u5e93\u3002"})]}),"\n",(0,i.jsx)(n.p,{children:"\u6267\u884c\u5b8c\u6210\u4ee5\u540e,\u6211\u4eec\u518d\u6765\u5237\u65b0\u8fd9\u4e2a\u6570\u636e\u5e93,\n\u6b64\u65f6\u6211\u4eec\u5c31\u770b\u5230\u8fd9\u91cc\u65b0\u589e\u4e86\u4e00\u6761\u8bb0\u5f55\u3002\u5982\u4e0b\u56fe\u6240\u793a\u3002"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"\u56fe21-\u65b0\u589e\u8bb0\u5f55",src:s(148).Z+"",width:"1460",height:"272"})}),"\n",(0,i.jsx)(n.p,{children:"username\u662fAndy,\n\u5b83\u7684ID\u662f1,\nusername\u662fandy,\n\u8fd8\u6709password\uff0cEmail\u3002"}),"\n",(0,i.jsxs)(n.admonition,{title:"\u6ce8\u610f",type:"warning",children:[(0,i.jsx)(n.p,{children:"\u521b\u5efa\u65f6\u95f4\u548c\u66f4\u65b0\u65f6\u95f4\u662f\u5b83\u81ea\u52a8\u589e\u52a0\u7684\uff0c\u4e0d\u9700\u8981\u8bbe\u7f6e\u3002\u5982\u679c\u4f60\u60f3\u8bbe\u7f6e\u8fd9\u4e2a\u5b57\u6bb5\u4e5f\u53ef\u4ee5\uff0c\u56e0\u4e3a\u6211\u4eec\u5728\u5b9a\u4e49\u6a21\u578b\u65f6\uff0c\u8bbe\u7f6e\u4e86"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"editable=True\n"})})]}),"\n",(0,i.jsx)(n.p,{children:"\u4ee5\u4e0a\u5c31\u662f\u65b9\u5f0f\u4e00\u4f7f\u7528save\u7684\u4f7f\u7528\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u65b9\u5f0f2create\u65b0\u589e",children:"\u65b9\u5f0f2\uff1acreate()\u65b0\u589e"}),"\n",(0,i.jsx)(n.p,{children:"\u597d\uff0c\u90a3\u63a5\u4e0b\u6765\u54b1\u4eec\u770b\u65b9\u5f0f2\uff0c\u4f7f\u7528create\u3002\n\u5728shell\u4e2d\uff0c\u6211\u4eec\u7f16\u5199\u5982\u4e0b\u8bed\u53e5:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"user2 = User.objects.create(username='zhangsan', password='111111',email='zhangsan@qq.com')\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u6267\u884c\u5b8c\u6210\u540e\uff0c\u67e5\u770b\u6570\u636e\u5e93\uff0c\u53c8\u65b0\u589e\u4e86\u4e00\u6761\u8bb0\u5f55\u3002\u5982\u4e0b\u56fe\u6240\u793a\u3002\n",(0,i.jsx)(n.img,{alt:"\u56fe21-\u65b0\u589e\u7b2c2\u6761\u8bb0\u5f55",src:s(3979).Z+"",width:"1612",height:"248"})]}),"\n",(0,i.jsx)(n.admonition,{title:"\u8bf4\u660e",type:"info",children:(0,i.jsx)(n.p,{children:"\u76f4\u63a5\u8c03\u7528user.object\u7684create\u65b9\u6cd5,\u5c31\u53ef\u4ee5\u8fdb\u884c\u521b\u5efa\u3002\n\u800c\u4f7f\u7528save\u7684\u65f6\u5019\u5462\uff0c\u9700\u8981\u5148\u6765\u5b9e\u4f8b\u5316\u8fd9\u4e2a\u6a21\u578b,\n\u7136\u540e\u8c03\u7528\u5b83\u7684save\u65b9\u6cd5\u3002"})}),"\n",(0,i.jsx)(n.h2,{id:"\u65b9\u5f0f3bulk-create-\u6279\u91cf\u521b\u5efa",children:"\u65b9\u5f0f3\uff1abulk create \u6279\u91cf\u521b\u5efa"}),"\n",(0,i.jsx)(n.p,{children:"\u65e2\u7136\u8981\u540c\u65f6\u521b\u5efa\u591a\u6761\u8bb0\u5f55\uff0c\u6240\u4ee5\u5462\uff0c\u54b1\u4eec\u9700\u8981\u5148\u6765\u5b9e\u4f8b\u5316\u591a\u4e2a\u7528\u6237,\u7136\u540e\u518d\u6279\u91cf\u7684\u521b\u5efa\u3002\u8bed\u53e5\u5982\u4e0b\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:">>> user3 = User.objects.create(username='lisi', password='222222',email='lisi@qq.com')\n>>> user4 = User.objects.create(username='lisi', password='222222',email='lisi@qq.com')\n>>> user_list = [user3, user4]\n>>> User.objects.bulk_create(user_list)\n"})}),"\n",(0,i.jsxs)(n.admonition,{title:"\u4ee3\u7801\u89e3\u6790",type:"info",children:[(0,i.jsx)(n.p,{children:"\u8fd9\u6bb5\u4ee3\u7801\u7684\u610f\u601d\u662f:"}),(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u4f7f\u7528User\u6a21\u578b\u7c7b\u7684objects\u7ba1\u7406\u5668\u7684create()\u65b9\u6cd5\u521b\u5efa\u4e86\u4e24\u4e2a\u7528\u6237\u5bf9\u8c61user3\u548cuser4\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u521b\u5efa\u4e86\u4e00\u4e2a\u5217\u8868user_list,\u5305\u542b\u4e86user3\u548cuser4\u8fd9\u4e24\u4e2a\u7528\u6237\u5bf9\u8c61\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u8c03\u7528User\u6a21\u578b\u7ba1\u7406\u5668objects\u7684bulk_create()\u65b9\u6cd5,\u6279\u91cf\u63d2\u5165user_list\u4e2d\u7684\u591a\u4e2a\u7528\u6237\u5bf9\u8c61\u3002"}),"\n"]}),"\n"]}),(0,i.jsx)(n.p,{children:"\u5177\u4f53\u6765\u8bf4:"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"user3\u548cuser4\u901a\u8fc7create()\u65b9\u6cd5\u521b\u5efa,\u76f8\u5f53\u4e8e:"}),"\n",(0,i.jsxs)(n.p,{children:["user3 = User(username='lisi', password='222222',email='",(0,i.jsx)(n.a,{href:"mailto:lisi@qq.com",children:"lisi@qq.com"}),"')\nuser3.save()"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"bulk_create()\u65b9\u6cd5\u53ef\u4ee5\u6279\u91cf\u63d2\u5165\u591a\u4e2a\u5bf9\u8c61\u5230\u6570\u636e\u5e93,\u907f\u514d\u591a\u6b21IO\u64cd\u4f5c\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u8be5\u65b9\u6cd5\u63a5\u6536\u4e00\u4e2a\u5305\u542b\u591a\u4e2a\u6a21\u578b\u5b9e\u4f8b\u7684\u53ef\u8fed\u4ee3\u5bf9\u8c61,\u5982\u8fd9\u91cc\u7684user_list\u3002"}),"\n"]}),"\n"]}),(0,i.jsx)(n.p,{children:"\u6240\u4ee5\u8fd9\u6bb5\u4ee3\u7801\u4f7f\u7528\u4e86bulk_create()\u65b9\u6cd5,\u901a\u8fc7\u4e00\u6761SQL\u8bed\u53e5,\u6279\u91cf\u63d2\u5165\u4e86user_list\u4e2d\u7684\u4e24\u4e2a\u7528\u6237\u5230\u6570\u636e\u5e93\u3002"}),(0,i.jsx)(n.p,{children:"\u76f8\u6bd4\u9010\u4e2a\u8c03\u7528save(),bulk_create()\u65b9\u6cd5\u53ef\u4ee5\u5927\u5927\u63d0\u9ad8\u6570\u636e\u63d2\u5165\u7684\u6548\u7387\u3002"})]}),"\n",(0,i.jsx)(n.p,{children:"\u6211\u4eec\u6765\u8fd0\u884c\u770b\u4e00\u4e0b\u6548\u679c,\n\u8fd9\u4e2a\u65f6\u5019\u518d\u6765\u5237\u65b0\u6211\u4eec\u7684\u6570\u636e\u5e93,\n\u6b64\u65f6\u5230\u8fd9\u91cc\u5c31\u65b0\u589e\u4e86,\n\u674e\u56db\u548c\u738b\u4e94,\n\u4e5f\u5c31\u662f\u8bf4\u6211\u4eec\u4e00\u6b21\u6027\u5c31\u589e\u52a0\u4e86\u4e24\u6761\u8bb0\u5f55\u3002\n\u5982\u4e0b\u56fe\u6240\u793a\u3002"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"\u56fe21-\u6279\u91cf\u6dfb\u52a0",src:s(234).Z+"",width:"1444",height:"332"})}),"\n",(0,i.jsx)(n.h2,{id:"\u8868\u5173\u8054\u7684\u4f7f\u7528",children:"\u8868\u5173\u8054\u7684\u4f7f\u7528"}),"\n",(0,i.jsx)(n.p,{children:"\u9664\u6b64\u4e4b\u5916\u8fd8\u6709\u4e00\u70b9\u9700\u8981\u7279\u522b\u6ce8\u610f\u7684\u5c31\u662f,\n\u6211\u4eec\u5728\u63d2\u5165\u7684\u65f6\u5019\u8981\u8003\u8651\u5230\u5173\u8054\u7684\u60c5\u51b5\u3002\n\u6bd4\u5982\u8bf4,Article\u548cUser\u5b83\u4fe9\u4e4b\u95f4\u6709\u5173\u8054\u5173\u7cfb\u3002\u65b0\u589eArticle\u6570\u636e\u7684\u65f6\u5019\uff0c\n\u9700\u8981\u586b\u5199\u662f\u8c01\u521b\u5efa\u7684\u3002\u56de\u987e\u4e00\u4e0b\u6211\u4eec\u7684Article\u6a21\u578b:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",metastring:"title='demo/app01/models.py'",children:"class Article(model):\n    id = models.IntegerField(primary_key=True)\n    title = models.CharField(max_length=120)\n    slug = models.CharField(max_length=200, default='')\n    content = models.TextField()\n    publish_date = models.DateTimeField()\n    user = models.ForeignKey(User, on_delete=models.CASCADE)\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u4e0a\u9762\u4ee3\u7801\u4e2d\u6709\u4e00\u4e2auser,\n\u8fd9\u91cc\u5b83\u662f\u4f5c\u4e3a\u4e00\u4e2a\u5916\u952e,\n\u90a3\u5e94\u8be5\u600e\u4e48\u586b\u5462\uff1f\n\u5728shell\u4e2d\u8f93\u5165\u5982\u4e0b\u8bed\u53e5:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:">>> from app01.models import Article\n>>> from datetime import datetime\n>>> now = datetime.now()\n>>> article1 = Article(title='fisrt aritle', content='the first', publish_date=now);\n>>> article1.save()\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u6b64\u65f6\u5c31\u4f1a\u62a5\u9519\uff0c\u5982\u4e0b\u9519\u8bef:\n",(0,i.jsx)(n.img,{alt:"\u56fe21-\u5173\u8054\u8868\u62a5\u9519",src:s(2768).Z+"",width:"1636",height:"336"})]}),"\n",(0,i.jsx)(n.p,{children:"\u8fd9\u91cc\u63d0\u793a\u6211\u4eec,user_id\u4e0d\u80fd\u4e3anull\u3002\n\u4e5f\u5c31\u662f\u8bf4\u6211\u4eec\u9700\u8981\u8bbe\u7f6e\u4e00\u4e2auser_id\u3002\n\u4f46\u662f\u6211\u4eec\u5728\u521b\u5efa\u8fd9\u4e2a\u8868\u7684\u65f6\u5019\uff0c\u6211\u4eec\u5e76\u6ca1\u6709\u4f7f\u7528user_id,\n\u800c\u662f\u4f7f\u7528\u4e86\u4e00\u4e2auser\u7c7b\u3002\n\u6240\u4ee5\uff0c\u8fd9\u91cc\u6211\u4eec\u5728\u4f20\u9012\u7684\u65f6\u5019\u5e94\u8be5\u7ed9\u5b83\u4f20\u4e00\u4e2auser\u7c7b\u5bf9\u8c61\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u6211\u4eec\u770b\u4e00\u4e0b\uff0c\u521a\u624d\u6211\u4eec\u521b\u5efauser\u7684\u65f6\u5019\uff0c\u5b9e\u4f8b\u5316\u4e86\u4e00\u4e2a\nuser_obj\u5bf9\u8c61\uff0c\u5728\u5b9e\u4f8b\u5316Article\u6a21\u578b\u7684\u65f6\u5019\uff0c\u6211\u4eec\u5c31\u6765\u4f7f\u7528\u4ed6\u3002\n\u6211\u4eec\u8c03\u7528\u4e00\u4e0b\u5b83\u7684username\u5c5e\u6027\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:">>> article1 = Article(title='fisrt aritle', content='the first', publish_date=now, user=user_obj);\n>>> article1.save()\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u8fd9\u4e00\u6b21\u5c31\u4fdd\u5b58\u6210\u529f\u4e86\u3002Article\u8868\u5c31\u65b0\u589e\u4e86\u4e00\u6761\u8bb0\u5f55\uff0c\u5176\u4e2duser_id\u5b57\u6bb5\u5c31\u662f\u5173\u8054\u7684User\u8868\u7684id\u5b57\u6bb5\u3002\n2\u4e2a\u8868\u7684\u5173\u8054\u5173\u7cfb\u5982\u4e0b\u56fe\u6240\u793a\u3002"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"\u56fe21-user\u8868user_id\u4e3a1",src:s(2297).Z+"",width:"1422",height:"322"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"\u56fe21-article\u8868user_id\u4e3a1",src:s(4240).Z+"",width:"1614",height:"256"})}),"\n",(0,i.jsx)(n.h2,{id:"\u603b\u7ed3",children:"\u603b\u7ed3"}),"\n",(0,i.jsx)(n.p,{children:"\u73b0\u5728\u5462\uff0c\u6211\u4eec\u5c31\u4ecb\u7ecd\u5b8c\u4e86orm\u65b0\u589e\u6570\u636e\u7684\u4e09\u79cd\u65b9\u5f0f,"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u7b2c1\u79cd\u4f7f\u7528save"}),"\n",(0,i.jsx)(n.li,{children:"\u7b2c2\u79cd\u4f7f\u7528create"}),"\n",(0,i.jsx)(n.li,{children:"\u7b2c3\u79cd\u662fbulk create"}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{title:"\u6ce8\u610f",type:"danger",children:(0,i.jsx)(n.p,{children:"\u5982\u679c\u67d0\u4e9b\u8868\u5b58\u5728\u5173\u8054\u5173\u7cfb\uff0c\u6211\u4eec\u5c31\u9700\u8981\u6ce8\u610f,\nArticle\u5b9e\u4f8b\u5316\u5728\u8d4b\u503c\u7684\u65f6\u5019\uff0c\u8fd9\u91cc\u9700\u8981\u8d4b\u503cUser\u5b9e\u4f8b\u5316\u7684\u540d\u5b57,\n\u800c\u4e0d\u662f\u4e00\u4e2a\u5177\u4f53\u7684user_id\u3002\n\u5728\u4fdd\u5b58\u7684\u65f6\u5019\u5b83\u81ea\u52a8\u7684\u5c31\u4f1a\u5c06\u8fd9\u4e2a\u5b57\u6bb5\u8f6c\u5316\u4e3auser_id\u5b57\u6bb5,\n\u5b58\u7684\u503c\u5c31\u662f\u5bf9\u5e94\u7684User\u8868\u7684id, \u4e5f\u5c31\u662fUser\u8868\u7684\u4e3b\u952e\u3002"})}),"\n",(0,i.jsx)(n.p,{children:"\u597d,\n\u672c\u8282\u8bfe\u6211\u4eec\u5c31\u5148\u4ecb\u7ecd\u5230\u8fd9\u91cc,\n\u5c0f\u4f19\u4f34\u4eec\uff0c\u6211\u4eec\u4e0b\u8282\u518d\u89c1\u3002"})]})}function o(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},4240:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/\u56fe21-article\u8868user_id\u4e3a1-594b069e62a657e44d3e743635d53d66.png"},2297:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/\u56fe21-user\u8868user_id\u4e3a1-a01e70cb58d6ff48401db896998993cc.png"},2768:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/\u56fe21-\u5173\u8054\u8868\u62a5\u9519-47b64c0015391f4d398d8adcb036a058.png"},234:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/\u56fe21-\u6279\u91cf\u6dfb\u52a0-fc21e30aed9c1a8c8027ae733ec4c463.png"},6363:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/\u56fe21-\u65b0\u589e\u6570\u636e\u76843\u79cd\u65b9\u5f0f-029d083a8258bc40a19c1f54d8fc8a68.png"},3979:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/\u56fe21-\u65b0\u589e\u7b2c2\u6761\u8bb0\u5f55-6dfd847d4f786c887f3bc33f6e6453d9.png"},148:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/\u56fe21-\u65b0\u589e\u8bb0\u5f55-7d6a57f08bf25b3618b01bf5e5bb1bdb.png"},1151:(e,n,s)=>{s.d(n,{Z:()=>d,a:()=>c});var i=s(7294);const r={},l=i.createContext(r);function c(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);