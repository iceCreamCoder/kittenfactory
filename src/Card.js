import React from 'react';


const Card = ({name, email, id}) => {
   return(
       <div className="bg-light-pink tc d dib pa3 br3 ma2 grow bw2 shadow-5">
        <img
               src={`https://robohash.org/${id}?set=set4`} alt="kitten"
            /> >
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
        
     </div>
    </div>
   ) 
}

export default Card;