import { useState } from 'react'
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
            简介
          </div>
          <div className="page-item" id="Creativity">
            创意园
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
