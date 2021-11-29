import PropTypes  from 'prop-types';
import React from 'react'


const Profil = (props) => {
    console.log(props)
    return (
        <div>
            <h1>Full Name:{props.fullname}</h1>
            <h1>Bio:{props.bio}</h1>
            <h1>Profession {props.profession}</h1>
            <button onClick={()=>props.handle(props.fullname)}>click me</button>
            <div> {props.children} </div>

        </div>
    ); 
}
Profil.defaultProps={
    fullname:'your full name',
    bio:'this is a bio',
    profession:'your profession'
}
Profil.PropTypes={
fullname:PropTypes.string,
bio:PropTypes.string,
profession:PropTypes.string,
handle:PropTypes.func 
}



export default Profil
