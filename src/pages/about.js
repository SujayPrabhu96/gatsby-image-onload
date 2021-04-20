import React from "react"
import Layout from "../components/Layout"
import { constructFluidImage } from "../utils/constructMockImage"

const About = () => {
  return (
    <div>
      <Layout
        title="About"
        image={constructFluidImage({ width: 1000, height: 600 })}
      >
        <h4>About Us</h4>
      </Layout>
    </div>
  )
}

export default About
