import './App.css';
import Statistics from './images/Statistics.png'
//importacion de iconos de la libreria 'react-icons'
import { FaHome, FaRegBell  } from "react-icons/fa"
//importacion de los componentes
import Nav from './components/Nav'
import DivClients from './components/DivClients';
import DivStatistics from './components/DivStatistics';
import FormOrder from './components/FormOrder';


function App() {
  return (
    <div className="App">
      <h1 className='h1Title'><FaHome/>Inicio <FaRegBell className='belltitle'/></h1>
      <Nav />
      <section className='sectionStatistics'>
        <DivStatistics name='Clientes Nuevos' number='18' percentage='+8.2%' time='En el ultimo mes' spanColor='spanPercGreen'n/>
        <DivStatistics name='Préstamos activos' number='25' percentage='+8.2%' time='En el ultimo mes' spanColor='spanPercRed' />
        <DivStatistics name='Pedidos totales' number='1.236' percentage='+8.2%' time='En el ultimo mes' spanColor='spanPercGreen' />
        <DivStatistics name='Ingresos totales' number='1.783 Bs' percentage='+8.2%' time='En el ultimo mes' spanColor='spanPercGreen' />
      </section>
      <section className='sectionFastTask'>
        <h3 className='h3FastTask'>Acciones rápidas</h3>
        <DivClients />
        <FormOrder />
      </section>
      <figure className='figureStatistics'>
        <img src={Statistics} className='imgStatistics' alt='Statistics'/>
      </figure>
    </div>
  );
}

export default App;
