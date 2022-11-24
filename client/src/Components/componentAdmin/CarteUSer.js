import React from 'react'
import './CarteUser.css'
const CarteUSer = ({user}) => {
  
  return (
    <div>
            <ul class="tilesWrap">
	<li>
	
		<h3>{user.name}</h3>
		<p>
		{user.email}
		</p>
		
	</li>
  </ul>
    </div>
  )
}

export default CarteUSer