import Notification from "./Notification"

function Button({name, icon, classN, notification}) {
    return <button className={classN} for="list" list='list'>
              {icon} {name} <Notification number={notification}/>
          </button>
}

export default Button