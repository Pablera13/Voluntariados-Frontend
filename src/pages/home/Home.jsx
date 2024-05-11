import React from "react";
import HeroImage from "../home/components/HeroImage";
import HorizontalImage from "../home/components/HorizontalCard";
import { Container } from "react-bootstrap";
import Section from "./components/Section";
import About from "./components/About";

function Home() {
  return (
    <>
      <main className="h-100 d-flex flex-column main-container">
        

        <HeroImage/>
     
        <About/>
        <section className="mt-4">
          <Section/>
        </section>
     

        <br />
      </main>
    </>
  );
}

export default Home;
