import { useState } from 'react'
import Project from '../src/component/project-box'
import ProjectList from './component/project-box/lists'
import './App.scss'

function App() {
  const imageLinks = [
    '../src/img/lsj_img/r1.png',
    '../src/img/lsj_img/r2.png',
    '../src/img/lsj_img/r3.png',
    '../src/img/lsj_img/r4.png',
    '../src/img/lsj_img/r5.png',
    '../src/img/lsj_img/r6.png',
    '../src/img/lsj_img/r7.png',
    '../src/img/lsj_img/r8.png',
    '../src/img/lsj_img/r9.png',
    '../src/img/lsj_img/r10.png',
    '../src/img/lsj_img/r11.png',
    '../src/img/lsj_img/r12.png',
    '../src/img/lsj_img/r13.png',
    '../src/img/lsj_img/r14.png',
    '../src/img/lsj_img/r15.png',
    '../src/img/lsj_img/r16.png',
    '../src/img/lsj_img/r17.png',
    '../src/img/lsj_img/r18.png',
  ]

  const hyperLinks = [
    { link: '#HomePage', text: '主页', id: 'HomePage' },
    { link: '#Introduction', text: '简介', id: 'Introduction' },
    { link: '#Creativity', text: '创意园', id: 'Creativity' },
  ]
  const introduction = {
    title: '欢迎来到计软网安院科协！',
    content:
      '计算机学院、软件学院科协(SACC)成立于1987年，是计算机学院分团委领导下以科学技术交流为目的的学生组织，其宗旨在于营造科技氛围，提高科技素质，造就科技人才。该协会以学院的特色专业为依托，结合学院专业学科及学生的实际情况，围绕当今科技领域的热点问题，积极组织在校学生参加科技活动，开展技术交流，培养学生的脑力思维，提高科技认知能力及动手能力。多年来科协培育出了一大批优秀人才，多人就业于国内外知名企业。\n 南京邮电大学计算机学院、软件学院、网络空间安全学院科学与技术协会（简称南邮计软网安院科协）是在校党委领导下，校团委、院分团委指导下，依照国家法规和学校规章制度，独立开展活动的学生科学文化学术组织。\n 本协会宗旨：以“增强科技意识，活跃学术气氛，提高创新能力，培养科技人才”为目标，广泛深入地开展各种学术性、实践性、社会性的第二课堂活动，为同学成长创造条件，为树立良好的学风和校风做出贡献。\n本协会任务：计软网安院科协本着学以致用的原则，结合邮电高校的特点，广泛而深入地开展各项具有学术性、知识性、实践性的科技、科普活动，团结和领导全院同学树立科学意识，培养实践能力，并通过实践巩固和深化同学们的专业知识，同时拓宽同学视野，优化知识结构，努力培养同学成为符合现代邮电事业要求的人才。',
  }
  const r = 350
  const counts = imageLinks.length
  const perAngle = 360 / counts

  const [activeLinkIndex, setActiveLinkIndex] = useState(null)

  const handleLinkClick = (index) => {
    setActiveLinkIndex(index)
  }
  return (
    <div className="container">
      <div className="item_page logo-adv">
        <div className="girl">
          <img src="../src/img/lsj_img/girl.png" />
        </div>
        <div className="content">
          <div className="center-logo">
            <img src="../src/img/lsj_img/logo.png" />
          </div>
          {imageLinks.map((link, index) => {
            let angle = perAngle * index
            angle = (Math.PI / 180) * angle
            const x = Math.sin(angle) * r
            const y = -Math.cos(angle) * r
            return (
              <div
                className="item"
                key={index}
                style={{ transform: `translate(${x}px, ${y}px)` }}>
                <img src={link} />
              </div>
            )
          })}
        </div>
      </div>
      <div className="item_page homepage">
        <div className="header-bar">
          <div className="header-logo">
            <img src="../src/img/lsj_img/header.png" />
          </div>
          <div className="link-groups">
            {hyperLinks.map((link, index) => {
              return (
                <a
                  href={link.link}
                  key={index}
                  className={`header-link ${
                    activeLinkIndex === index ? 'active' : ''
                  }`}
                  onClick={() => handleLinkClick(index)}>
                  {link.text}
                </a>
              )
            })}
          </div>
        </div>

        <div className="page-container">
          <div className="page-item" id="HomePage">
            主页
          </div>
          <div className="page-item" id="Introduction">
            <div className="introduction">
              <div className="intro-title">{introduction.title}</div>
              <div className="intro-content">
                {introduction.content.split('\n').map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </div>
            </div>
            <img src="../src/img/lsj_img/tran1.png" alt="" />
            <img src="../src/img/lsj_img/tran2.png" alt="" />
          </div>
          <div className="page-item" id="Creativity">
            <div className="cre-title">
              <img src="../src/img/lsj_img/createList.png" alt="" />
              创意园
            </div>
            <div className="pro-list">
              {ProjectList.map((item) => (
                <Project
                  key={item.id}
                  src={item.logoSrc}
                  title={item.Project_Title}
                  name={item.Project_author}
                  toLinks={item.Project_path}></Project>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
