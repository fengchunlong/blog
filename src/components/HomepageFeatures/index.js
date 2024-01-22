import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
    {
    link: 'https://study.163.com/course/courseMain.htm?share=2&shareId=480000001946434&courseId=1209570828&_trace_c_p_k2_=06131da2d2d44fa5b96faef87c84b1c5',
    title: 'Python零基础入门动画课',
    img: require('@site/static/img/donghuake.jpeg').default,
    description: (
      <>
      网易云课堂金云奖课程，全网已售6000+。本套课程针对零基础小白，使用动画的方式教大家快速上手Python。
      整体课程大约550-600节（1080P超清），包含Python基础知识、Python进阶知识、Python框架和5大Python项目），
      持续更新大量练习题和实例。
      </>
    ),
  },


  {
    link: 'https://study.163.com/course/courseMain.htm?share=2&shareId=480000001946434&courseId=1211902802&_trace_c_p_k2_=723e8376a73c44d6932742f1641752f7',
    title: 'Python小白办公自动化实用高薪课',
    img: require('@site/static/img/autowork.jpg').default,
    description: (
      <>
      网易云课堂严选课程。本套课程包含：Python操作Excel、Python操作Word、Python操作PPT、Python操作PDF、
      Python自动化视频剪辑、Python操作图片、 Python自动操控电脑、 Python自动发发邮件、 Python自动化控制浏览器...
      </>
    ),
  },
  {
    link: 'https://study.163.com/course/courseMain.htm?share=2&shareId=480000001946434&courseId=1213363801&_trace_c_p_k2_=4101e466e6f34d39a5fc140d755077d8',
    title: 'ChatGPT+Python项目实战',
    img: require('@site/static/img/chatgpt.jpg').default,
    description: (
      <>
      网易云课堂严选课程。本课程针对小白同学从0到1理解ChatGPT是什么，如何使用ChatGPT，并通过大量实用案例带你掌握这门技术。课程中教你实现
      AI绘画，AI问答，AI写代码，AI改bug等教你制作属于自己的应用程序，从而真正掌握ChatGPT这门人工智能技术，并开发出属于
      自己的人工智能产品。
      </>
    ),
  },
  {
    link: 'https://study.163.com/course/courseMain.htm?share=2&shareId=480000001946434&courseId=1213432812&_trace_c_p_k2_=6d1748c901db4f27a8784603b65a555e',
    title: 'Django + Vue 全栈开发',
    img: require('@site/static/img/django-vue.jpeg').default,
    description: (
      <>
      网易云课堂严选课程。本课程针对web开发同学，从0开始学习Django框架，并结合前端Vue框架， 实现Django框架+前后端分离项目。
      本套课程包含Django框架基础知识、Django视图和模板、Django框架和模型和django框架后台、Django框架实战：开发企业官网、
      Rest Framework 、Vue前端、Vue+Django开发电影项目。
      </>
    ),
  },
  {
    link: 'https://study.163.com/course/courseMain.htm?share=2&shareId=480000001946434&courseId=1213370806&_trace_c_p_k2_=101100a8e6564892a7aa27dd56ec4fcd',
    title: 'Python爬虫案例项目实战高薪课',
    img: require('@site/static/img/spider.jpg').default,
    description: (
      <>
      网易云课堂严选课程。本课程针对web开发同学，从0开始学习Django框架，并结合前端Vue框架， 实现Django框架+前后端分离项目。
      本套课程包含Django框架基础知识、Django视图和模板、Django框架和模型和django框架后台、Django框架实战：开发企业官网、
      Rest Framework 、Vue前端、Vue+Django开发电影项目。
      </>
    ),
  },
];

function Feature({link, img, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <a herf={link} >
        <div className="text--center">
          <img className='img--border' src={img} role="img" />
        </div>
      </a>
      <div className="text--center padding-horiz--md">
        <a href={link} >
        <Heading as="h3">{title}</Heading>
        </a>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <h1 className='text--center'> Andy讲Python系列 </h1>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
