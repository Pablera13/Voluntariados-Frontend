import React from "react";
import HeroImage from "../home/components/HeroImage";
import HorizontalImage from "../home/components/HorizontalCard";
import { Container } from "react-bootstrap";

function Home() {
  return (
    <>
      <main className="h-100 d-flex flex-column">
        <HeroImage />
        <section className="d-flex  justify-content-center mt-5">
          <HorizontalImage
            image={
              "https://sabatica.org/wp-content/uploads/2020/03/Voluntariado-en-Costa-Rica-Sabatica-31.jpg"
            }
            title={"Voluntariado en Costa Rica"}
            text={
              "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bitlonger. lore This is a wider card with supporting text below as anatural"
            }
            textButton={'Ser parte'}
            linkButton={'/volunteering'}
          />
          
        </section>

        <section className="d-flex  justify-content-center mt-5">
          <HorizontalImage
            image={
              "https://biomentalcenter.com/wp-content/uploads/2023/04/recreativas.jpg"
            }
            title={"Actividades de las empresas"}
            text={
              "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bitlonger. lore This is a wider card with supporting text below as anatural"
            }
            textButton={'Ser parte'}
            linkButton={'/activities'}
          />
          
        </section>

        <br />
      </main>
    </>
  );
}

export default Home;
