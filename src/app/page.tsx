"use client";

import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Schedule from "./components/Schedule";
import Services from "./components/WorkServices";
import Headerr from "./components/header";
import { BrowserRouter } from 'react-router-dom'

export default function Home() {
  return (
    <BrowserRouter>
      <Headerr />
      <Banner />
      <Schedule />
      <Services />
      <Footer />
    </BrowserRouter>
  );
}
