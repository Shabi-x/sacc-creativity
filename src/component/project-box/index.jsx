/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import './index.scss'
export default function Project({ src, title, name, toLinks }) {
  return (
    <div className="box">
      <div className="pro-logo">
        <img src={src} alt="" />
      </div>
      <div className="pro-title">{title}</div>
      <div className="pro-author">{name}</div>
    </div>
  )
}
