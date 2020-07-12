import React from "react"

import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Tools from "../components/Tools";
import AboutUs from "../components/AboutUs";
import Services from "../components/Services";
import HowWorks from "../components/HowWorks";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <AboutUs />
      <Tools />
      <Services />
      <HowWorks />
    </Layout>
  )
}
