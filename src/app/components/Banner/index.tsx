import Image from "next/image";
import { ContainerBanner, ContainerImage, LogoBanner, TextLogo } from "./style";
import Avatar from "@mui/material/Avatar";

export default function Banner() {
  return (
    <>
      <ContainerBanner>
        <ContainerImage>
          <Image src="/reforma-de-barbearia.jpg" alt="banner" layout="fill" />
        </ContainerImage>
      </ContainerBanner>
      <LogoBanner>
        <Avatar
          alt="Remy Sharp"
          src="/logotipo-do-polo-de-barbeiro_1415-692.avif"
          sx={{ width: 250, height: 250 }}
        />
      </LogoBanner>
      <TextLogo>
        <h2>Nome Barbearia</h2>
      </TextLogo>
    </>
  );
}
