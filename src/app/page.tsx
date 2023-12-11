"use client";

import Banner from "./components/Banner";
import Schedule from "./components/Schedule";
import Services from "./components/WorkServices";
import Headerr from "./components/header";
import { BrowserRouter } from 'react-router-dom'
import Routes from './Routes';

export default function Home() {
  return (
    <BrowserRouter>
       <Routes/>
      <Headerr />
      <Banner />
      <Schedule />
      <Services />
    </BrowserRouter>
  );
}
