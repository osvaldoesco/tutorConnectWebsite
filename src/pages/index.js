import React from "react"

import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Tools from "../components/Tools";
import AboutUs from "../components/AboutUs";
import Services from "../components/Services";
import HowWorks from "../components/HowWorks";
import Tutors from "../components/Tutors";
import Subjects from "../components/Subjects";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <AboutUs />
      <Tools />
      <Services />
      <Subjects />
      <HowWorks />
      <Tutors />
    </Layout>
  )
}
