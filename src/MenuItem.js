import React from 'react'




const MenuItem = (props) => {
    
    return(
       
        <li className='item'>
            
            <a href={props.item.link}>{props.item.title} </a>
           

        {
           
        props.item.title === "Services" && <ul className='sub'>
    {
        props.item.subMenu.map(el => <li><a href= '#'>{el}</a></li>)
        }
        </ul>}
            
      
        </li>
 
    )
}

export default MenuItem