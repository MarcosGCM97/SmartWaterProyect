import Button from "./Button"
import InputPedidoCant from './InputPedidoCant'
import InputPedidoList from './InputPedidoList'
import { RiPlayList2Line } from "react-icons/ri";

function FormOrder() {
    return <form className='formOrder'>
      <h3>Realizar Pedido</h3>
      <RiPlayList2Line className='iconFastTask'/>
      <InputPedidoList classN='inputClientList' type='text' value='Cliente' list1='Daniela Ayala' list2='Rubén González' list3='Maria Reyes'/>
      <InputPedidoList classN='inputBottleList' type='text' value='Botellon 20 Lts' list1='Botellon 20 Lts' list2='Botellon 10 Lts' list3='Botellon 5 Lts'/>
      <InputPedidoCant classN='inputCant' type='number' name='Cantidad'/>
      <InputPedidoCant classN='inputBs' type='number' name='Bs'/>
      <Button classN='btnOrder' name='Realizar Pedido' />
    </form>
  }

  export default FormOrder