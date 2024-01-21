/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom'

import './index.scss'
export default function Project({ src, title, name, toLinks }) {
  const navigate = useNavigate()
  return (
    <div
      className="box"
      onClick={() => {
        navigate(toLinks)
      }}>
      <div className="pro-logo">
        <img src={src} alt="" />
      </div>
      <div className="pro-title">{title}</div>
      <div className="pro-author">{name}</div>
    </div>
  )
}
