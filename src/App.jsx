import Head from './components/head';
import Card from "./components/card";
import Footer from './components/footer';

const App = () =>{
  
  return (
    <>
      <Head title="Galería de Imágenes con"/>
      <Card/>
      {/* <Card img="450_1000.jpeg" textimg="Imagen de la Caratula de la Película Joker 2019" nombre="JOKER" descripcion='La película ha sido muy aclamada por la crítica por la actuación de Phoenix y por su exploración de temas profundos y oscuros, como la locura, la violencia y la desesperación. Además, "Joker" ha tenido un gran éxito en taquilla y ha sido nominada a varios premios importantes, incluyendo el Premio de la Academia a Mejor Película y Mejor actor para Phoenix. Si te gustan las películas de cómic y te interesa una exploración profunda y oscura de un personaje famoso, es posible que disfrutes viendo "Joker"'/> */}
      <Footer footer=" © 2020-2021 Santiago, Chile Ð€IMØ§¯®Ã§Iv Todos los derechos reservados."/>
    </>
  );
};

export default App;
