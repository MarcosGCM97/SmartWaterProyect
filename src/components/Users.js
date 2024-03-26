

function Users({name, image, date, bs}) {
    return <div className='divUsers'>
      <img className='imgUser' src={image} alt="User's Pic" />
      <p className='pNameUser'>{name}</p>
      <p className='pDateUser'>{date}</p>
      <p className='pBsUser'>{bs}</p>
    </div>
}

export default Users