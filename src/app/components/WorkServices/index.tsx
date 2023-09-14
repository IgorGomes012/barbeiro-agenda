import Image from "next/image";
import { ServicesDiv, TitleServices, ServicesTitle } from "./style";

export default function Services() {
  return (
    <>
      <TitleServices style={{ margin: "120px 0px 0 0" }}>
        Nossos Serviços
      </TitleServices>

      <ServicesDiv>
        <Image
          style={{ margin: "0 30px 0 0", borderRadius: "20px" }}
          src="/logotipo-do-polo-de-barbeiro_1415-692.avif"
          alt="banner"
          height={250}
          width={250}
        />
        <Image
          style={{ margin: "0 30px 0 0", borderRadius: "20px" }}
          src="/logotipo-do-polo-de-barbeiro_1415-692.avif"
          alt="banner"
          height={250}
          width={250}
        />
        <Image
          style={{ margin: "0 30px 0 0", borderRadius: "20px" }}
          src="/logotipo-do-polo-de-barbeiro_1415-692.avif"
          alt="banner"
          height={250}
          width={250}
        />
      </ServicesDiv>
      <ServicesDiv>
        <Image
          style={{ margin: "0 30px 0 0", borderRadius: "20px" }}
          src="/logotipo-do-polo-de-barbeiro_1415-692.avif"
          alt="banner"
          height={250}
          width={250}
        />
        <Image
          style={{ margin: "0 30px 0 0", borderRadius: "20px" }}
          src="/logotipo-do-polo-de-barbeiro_1415-692.avif"
          alt="banner"
          height={250}
          width={250}
        />
        <Image
          style={{ margin: "0 30px 0 0", borderRadius: "20px" }}
          src="/logotipo-do-polo-de-barbeiro_1415-692.avif"
          alt="banner"
          height={250}
          width={250}
        />
      </ServicesDiv>
    </>
  );
}
