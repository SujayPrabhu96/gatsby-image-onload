import React from "react"
import Layout from "../components/Layout"
import { constructFluidImage } from "../utils/constructMockImage"

const Home = () => {
  return (
    <div>
      <Layout
        title="Home"
        image={constructFluidImage({ width: 1000, height: 700 })}
      >
        <h4>Hello world</h4>
      </Layout>
    </div>
  )
}

export default Home
