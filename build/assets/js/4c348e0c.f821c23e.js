"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4651],{4675:(a,n,e)=>{e.r(n),e.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var t=e(5893),r=e(1151);const s={},i="\u4f7f\u7528\u5b8f\u5b9e\u73b0\u5206\u9875\u529f\u80fd",c={id:"Flask\u9879\u76ee:\u7f51\u6613\u4e91\u8bfe\u5802\u8bfe\u7a0b\u5206\u6790/\u4f7f\u7528\u5b8f\u5b9e\u73b0\u5206\u9875\u529f\u80fd",title:"\u4f7f\u7528\u5b8f\u5b9e\u73b0\u5206\u9875\u529f\u80fd",description:"templates\u4e0b\u521b\u5efapage.html\uff0c\u4f7f\u7528\u5b8f\uff0c \u4ee3\u7801\u5982\u4e0b\uff1a",source:"@site/docs/Flask\u9879\u76ee:\u7f51\u6613\u4e91\u8bfe\u5802\u8bfe\u7a0b\u5206\u6790/9.\u4f7f\u7528\u5b8f\u5b9e\u73b0\u5206\u9875\u529f\u80fd.md",sourceDirName:"Flask\u9879\u76ee:\u7f51\u6613\u4e91\u8bfe\u5802\u8bfe\u7a0b\u5206\u6790",slug:"/Flask\u9879\u76ee:\u7f51\u6613\u4e91\u8bfe\u5802\u8bfe\u7a0b\u5206\u6790/\u4f7f\u7528\u5b8f\u5b9e\u73b0\u5206\u9875\u529f\u80fd",permalink:"/docs/Flask\u9879\u76ee:\u7f51\u6613\u4e91\u8bfe\u5802\u8bfe\u7a0b\u5206\u6790/\u4f7f\u7528\u5b8f\u5b9e\u73b0\u5206\u9875\u529f\u80fd",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u641c\u7d22\u8bfe\u7a0b\u529f\u80fd\u5b9e\u73b0",permalink:"/docs/Flask\u9879\u76ee:\u7f51\u6613\u4e91\u8bfe\u5802\u8bfe\u7a0b\u5206\u6790/\u641c\u7d22\u8bfe\u7a0b\u529f\u80fd\u5b9e\u73b0"},next:{title:"\u521b\u5efa\u7528\u6237",permalink:"/docs/Flask\u9879\u76ee:\u7f51\u6613\u4e91\u8bfe\u5802\u8bfe\u7a0b\u5206\u6790/\u7528\u6237\u6a21\u5757"}},l={},d=[];function o(a){const n={code:"code",h1:"h1",p:"p",pre:"pre",...(0,r.a)(),...a.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"\u4f7f\u7528\u5b8f\u5b9e\u73b0\u5206\u9875\u529f\u80fd",children:"\u4f7f\u7528\u5b8f\u5b9e\u73b0\u5206\u9875\u529f\u80fd"}),"\n",(0,t.jsx)(n.p,{children:"templates\u4e0b\u521b\u5efapage.html\uff0c\u4f7f\u7528\u5b8f\uff0c \u4ee3\u7801\u5982\u4e0b\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'{% macro page(data) %}\n<nav aria-label="Page navigation example">\n  <ul class="pagination justify-content-end">\n    <li class="page-item">\n      <a class="page-link" href="javascript:;" data-page="1">\u9996\u9875</a>\n    </li>\n    {% if data.has_prev %}\n        <li class="page-item">\n            <a class="page-link" href="javascript:;" data-page="{{data.prev_num}}">\u4e0a\u4e00\u9875</a>\n        </li>\n    {% else %}\n        <li class="page-item disabled">\n            <a class="page-link" href="#">\u4e0a\u4e00\u9875</a>\n        </li>\n    {% endif %}\n    \x3c!--    \u8fed\u4ee3\u6bcf\u4e00\u9875  --\x3e\n      {% for v in data.iter_pages() %}\n          {% if v %}\n            {% if data.page == v  %}\n            <li class="page-item active">\n                <a class="page-link" href="#">{{ v }}</a>\n            </li>\n            {% else %}\n            <li class="page-item">\n                <a class="page-link" href="javascript:;" data-page="{{ v }}">{{ v }}</a>\n            </li>\n            {% endif %}\n          {% else %}\n            <li class="page-item">\n                <a class="page-link" href="javascript:;">...</a>\n            </li>\n          {%  endif %}\n      {% endfor %}\n\n    {% if data.has_next %}\n        <li class="page-item">\n            <a class="page-link" href="javascript:;" data-page="{{data.next_num}}">\u4e0b\u4e00\u9875</a>\n        </li>\n    {% else %}\n        <li class="page-item disabled">\n            <a class="page-link" href="#">\u4e0b\u4e00\u9875</a>\n        </li>\n    {% endif %}\n\n    <li class="page-item">\n        <a class="page-link" href="javascript:;" data-page="{{data.pages}}">\u5c3e\u9875</a>\n    </li>\n  </ul>\n</nav>\n{% endmacro %}\n'})}),"\n",(0,t.jsx)(n.p,{children:"templates\u7684search\u6587\u4ef6\u5f15\u5165page.html,  search.html\u4ee3\u7801\u5982\u4e0b\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:"{% extends 'base.html' %}\n{% import 'page.html' as pg %}\n{% block content %}\n\n<div class=\"container\">\n\x3c!-- \u5206\u9875\u5f00\u59cb --\x3e\n    {{ pg.page(courses) }}\n\x3c!-- \u5206\u9875\u7ed3\u675f --\x3e\n  {% else%}\n    <div style=\"text-align:center;\">\n        <img src=\"{{url_for('static',filename='images/no_results.png')}}\" width=\"35%\" height=\"35%\">\n        <h4>\u6682\u65e0\u76f8\u5173\u7ed3\u679c</h4>\n        <p>\u6362\u4e2a\u641c\u7d22\u5173\u952e\u8bcd\u8bd5\u8bd5\u5427\uff1a)</p>\n    </div>\n  {% endif %}\n</div>\n<script>\n    $(\".page-link\").click(function(){\n        var page = $(this).data('page')\n        matchUrl('page',page);  // \u751f\u6210URL\n    })\n<\/script>\n{% endblock %}\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u4fee\u6539courses.html \uff0c \u4ee3\u7801\u5982\u4e0b\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'{% extends \'base.html\' %}\n{% import \'page.html\' as pg %}\n{% block content %}\n\n<div class="container">\n<div class="m-filter">\n    <div class="mc">\n        <dl class="item fore1">\n            <dt>\u5206\u7c7b\uff1a</dt>\n            <dd>\n                <a href="javascript:;" class="tag" data-tag="common" class="curr" >\u7efc\u5408</a>\n                <a href="javascript:;" class="tag" data-tag="free">\u514d\u8d39</a>\n                <a href="javascript:;" class="tag" data-tag="1-100">100\u5143\u4ee5\u5185</a>\n                <a href="javascript:;" class="tag" data-tag="100-200">100-200\u5143</a>\n                <a href="javascript:;" class="tag" data-tag="200-300">200-300\u5143</a>\n                <a href="javascript:;" class="tag" data-tag="300-400">300-400\u5143</a>\n                <a href="javascript:;" class="tag" data-tag="400-500">400-500\u5143</a>\n                <a href="javascript:;" class="tag" data-tag="500-gt">500\u5143\u4ee5\u4e0a</a>\n            </dd>\n        </dl>\n        <dl class="item fore2">\n            <dt>\u6392\u5e8f\uff1a</dt>\n            <dd>\n                <a href="javascript:;" id="score" class="order" data-order="score">\u8bc4\u5206\n                    <img src="{{url_for(\'static\',filename=\'images/arrow_desc.png\')}}"\n                         height="12px" width="12px" >\n                </a>\n                <a href="javascript:;" id="learner_count" class="order" data-order="learner_count">\u5b66\u4e60\u4eba\u6570\n                    <img src="{{url_for(\'static\',filename=\'images/arrow_desc.png\')}}"\n                         height="12px" width="12px" >\n                </a>\n                <a href="javascript:;" id="price" class="order" data-order="price-desc">\u4ef7\u683c\n                    <img src="{{url_for(\'static\',filename=\'images/arrow_order.png\')}}"\n                         height="15px" width="15px" >\n                </a>\n            </dd>\n        </dl>\n    </div>\n</div>\n\n\x3c!-- \u663e\u793a\u8bfe\u7a0b\u5f00\u59cb --\x3e\n<div class="row" style="text-align:center;">\n    {% for course in courses.items %}\n    <div class="col-sm-3" style="padding: 20px">\n        <a href="/course/{{course.course_id}}" style="text-decoration: none;color:inherit;">\n        <div class="card" style="height:280px">\n            <img src="{{course.big_img_url}}" class="card-img-top"\n                 alt="..." height="170px">\n            <div class="card-body">\n                <p class="card-title" style="font-weight: bold;">{{course.product_name[0:20]}}</p>\n                <p class="card-text">\n                    {% if not course.original_price %}\n                        \u514d\u8d39\n                    {% elif course.discount_rate %}\n                        \uffe5{{course.discount_price}}\u5143\n                    {% else %}\n                        \uffe5{{course.original_price}}\u5143\n                    {% endif %}\n                </p>\n            </div>\n        </div>\n        </a>\n    </div>\n    {% endfor %}\n</div>\n\x3c!-- \u663e\u793a\u8bfe\u7a0b\u7ed3\u675f --\x3e\n\x3c!-- \u5206\u9875\u5f00\u59cb --\x3e\n{{ pg.page(courses) }}\n\x3c!-- \u5206\u9875\u7ed3\u675f --\x3e\n</div>\n\n<script>\n\n// \u83b7\u53d6tag\n$(".tag").click(function(){\n   var data_tag = $(this).data("tag");\n   matchUrl(\'tag\',data_tag);\n});\n// \u83b7\u53d6order\n$(".order").click(function(){\n   var data_order = $(this).data(\'order\') // \u83b7\u53d6order \u53c2\u6570\u503c\n   // \u70b9\u51fb\u4ef7\u683c\u65f6\uff0c\u66f4\u7ed9\u4ef7\u683c\u6392\u5e8f\u65b9\u5f0f\n   if(data_order.indexOf("price") != -1){\n       if(data_order == "price-desc"){         // \u5982\u679c\u964d\u5e8f\uff0c\u6539\u4e3a\u5347\u5e8f\n           data_order = "price-asc";\n       }else if(data_order == "price-asc"){    // \u5982\u679c\u5347\u5e8f\uff0c\u6539\u4e3a\u964d\u5e8f\n           data_order = "price-desc";\n       }\n       $(this).attr(\'data-order\',data_order)   // \u4fee\u6539data-order\u5c5e\u6027\u503c\n   }\n   matchUrl(\'order\',data_order);  // \u751f\u6210URL\n});\n\n// \u6dfb\u52a0\u9009\u4e2d\u6837\u5f0f\n$(document).ready(function(){\n    // \u6e05\u9664\u539f\u6765\u9009\u4e2d\u7684\u9009\u9879\n    $(".curr").removeClass("curr");\n    // \u83b7\u53d6tag\u503c\uff0c\u9ed8\u8ba4\u4e3a"common"\n    var tag =  getUrlParam(\'tag\') ? getUrlParam(\'tag\') : "common" ;\n    // \u4e3atag\u6dfb\u52a0\u9009\u4e2d\u6837\u5f0f\n    $(".tag").each(function(){\n        if($(this).data("tag") == tag){\n            $(this).addClass("curr");\n        }\n    });\n    // \u4e3aorder\u6dfb\u52a0\u9009\u4e2d\u6837\u5f0f\n    var order = getUrlParam("order");\n    if (order.indexOf("price") != -1){\n        $("#price").attr("data-order",order);\n        $("#price").addClass("curr");\n    }\n    $("#"+order).addClass("curr");\n});\n\n$(".page-link").click(function(){\n    var page = $(this).data(\'page\')\n    matchUrl(\'page\',page);  // \u751f\u6210URL\n})\n\n<\/script>\n\n\n{% endblock %}\n'})})]})}function p(a={}){const{wrapper:n}={...(0,r.a)(),...a.components};return n?(0,t.jsx)(n,{...a,children:(0,t.jsx)(o,{...a})}):o(a)}},1151:(a,n,e)=>{e.d(n,{Z:()=>c,a:()=>i});var t=e(7294);const r={},s=t.createContext(r);function i(a){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof a?a(n):{...n,...a}}),[n,a])}function c(a){let n;return n=a.disableParentContext?"function"==typeof a.components?a.components(r):a.components||r:i(a.components),t.createElement(s.Provider,{value:n},a.children)}}}]);