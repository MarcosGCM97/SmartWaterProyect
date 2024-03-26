
function InputPedidoList({name, type, value, classN, list1, list2, list3}) {
    return <label className={classN} for="frutas-personalizadas">{name}
          <input placeholder={value} className='inputWandH' type={type} id="frutas-personalizadas" list="frutas-lista"/>
          <datalist id="frutas-lista">
              <option value={list1}></option>
              <option value={list2}></option>
              <option value={list3}></option>
          </datalist></label>
}

export default InputPedidoList