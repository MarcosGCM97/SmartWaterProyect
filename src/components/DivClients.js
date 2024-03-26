import Users from "./Users"
import imgMen from '../images/imgMen.jpg'
import imgWomen from '../images/imgWomen.png'
import { RiPlayList2Line } from "react-icons/ri";


function DivClients({icon}) {
    return <div className='divClients'>
      <h3>Clientes <span className='spanH3'>Vista Rapida</span></h3>
      <RiPlayList2Line className='iconFastTask'/>
      <Users name='Daniela Ayala' image={imgWomen} date='20/01/2023' bs='100 Bs.' />
      <Users name='Rubén González' image={imgMen} date='20/01/2023' bs='100 Bs.' />
      <Users name='Mariana Reyes' image={imgWomen} date='20/01/2023' bs='100 Bs.' />
      <Users name='Juli Espinoza' image={imgMen} date='20/01/2023' bs='100 Bs.' />
    </div>
}

export default DivClients