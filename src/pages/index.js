import React from "react"

import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Tools from "../components/Tools";
import AboutUs from "../components/AboutUs";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <AboutUs />
      <Tools />
    </Layout>
  )
}
