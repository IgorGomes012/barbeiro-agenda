"use client";

import Banner from "./components/Banner";
import Schedule from "./components/Schedule";
import Services from "./components/WorkServices";
import Headerr from "./components/header";

export default function Home() {
  return (
    <>
      <Headerr />
      <Banner />
      <Schedule />
      <Services />
    </>
  );
}
