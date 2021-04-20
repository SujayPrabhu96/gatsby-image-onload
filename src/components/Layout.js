import React, { useState } from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { constructFluidImage } from "../utils/constructMockImage"
import "../css/style.css"

const Layout = ({ title, image, children }) => {
  const [show, setShow] = useState(false)
  return (
    <>
      <div className="nav-element">
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/about">About</Link>
        </div>
      </div>
      <div>
        <GatsbyImage image={image} onLoad={() => setShow(true)} />
      </div>
      <div className="banner-title">
        <h1>{show && title}</h1>
      </div>
      <div>{children}</div>
    </>
  )
}

export default Layout
