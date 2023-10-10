import Carousel from 'react-bootstrap/Carousel';

function DarkVariantExample() {
  return (
    <Carousel data-bs-theme="white" style={{width:"100%",height:"400px"}}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://files.clicrdc.com.br/wp-content/uploads/2020/02/84499462-3308142842534715-9172919094683369472-o.jpg"
          alt="First slide"
          style={{objectFit:"cover",width:"100%",height:"400px"}}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://s2.glbimg.com/MxsC0WeD6soMDOuYCYqMNvB2XmU=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2021/X/H/xt0wq1TRmhvJBIAabVLQ/ssp-alagamento.png"
          alt="Second slide"
          style={{objectFit:"cover",width:"100%",height:"400px"}}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://conteudo.imguol.com.br/c/noticias/0b/2019/01/08/8jan2019--moradores-enfrentam-varios-pontos-de-alagamento-no-bairro-do-cambuci-zona-sul-da-capital-paulista-apos-as-fortes-chuvas-que-atingiram-a-cidade-na-tarde-desta-nesta-terca-feira-1546978189443_v2_1920x1279.jpg"
          alt="Third slide"
          style={{objectFit:"cover",width:"100%",height:"400px"}}
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;