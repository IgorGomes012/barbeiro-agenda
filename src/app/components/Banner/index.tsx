import Image from "next/image";
import { ContainerBanner, ContainerImage } from './style'

export default function Banner (){
    return(
        <>
        <ContainerBanner>
          <ContainerImage>
           <Image 
            src="/reforma-de-barbearia.jpg"
            alt="banner"
            layout='fill'   
            />   
           </ContainerImage>   
          </ContainerBanner>  
        </>
    );
}