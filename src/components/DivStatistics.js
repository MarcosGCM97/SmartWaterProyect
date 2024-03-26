
function DivStatistics({name, number, percentage, time, spanColor}) {
    return<div className='divStatistics'>
            <h3>{name}</h3>
            <p className='pNumber'>{number}</p>
            <p className='pTime'><span className={spanColor}>{percentage}</span>{time}</p>
          </div>
}

export default DivStatistics