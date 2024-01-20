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
  const r = 350
  const counts = imageLinks.length
  const perAngle = 360 / counts

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
      <div className="item_page homepage"></div>
    </div>
  )
}

export default App
