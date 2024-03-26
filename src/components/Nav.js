import Button from "./Button"
//importacion de iconos de la libreria 'react-icons'
import { FaHome, FaTruck, FaChartPie } from "react-icons/fa";
import { FaUsers, FaMoneyBillTrendUp } from "react-icons/fa6";
import { SiGooglemaps } from "react-icons/si";
import { MdOutlinePlaylistAddCheckCircle } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { TbPigMoney } from "react-icons/tb";
import { DiAptana } from "react-icons/di";
import { CiLogout } from "react-icons/ci";

function Nav() {
    return <div className='nav'>
      <h3 className='h3Nav'><span className='blue'>Smart</span>water</h3>
      <Button classN='btnNav' icon={<FaHome/>} name='Inicio'/>
      <Button classN='btnNav' icon={<FaUsers/>} name='Clientes'/>
      <Button classN='btnNav' icon={<SiGooglemaps/>} name='Mapa de Clientes'/>
      <Button classN='btnNav' icon={<FaTruck/>} name='Monitoreo de Distribuidores'/>
      <Button classN='btnNav' icon={<FaMoneyBillTrendUp/>} name='Ventas'/>
      <Button classN='btnNav' notification='1' icon={<MdOutlinePlaylistAddCheckCircle/>} name='Pedidos'/>
      <Button classN='btnNav' icon={<GiReceiveMoney/>} name='Préstamos'/>
      <Button classN='btnNav' icon={<TbPigMoney/>} name='Finanzas'/>
      <Button classN='btnNav' icon={<FaChartPie/>} name='Reportes'/>
      <Button classN='btnNav' icon={<DiAptana/>} name='Configuracion'/>
      <Button classN='btnNavClose' icon={<CiLogout/>} name='Salir'/>
    </div>
  }

export default Nav