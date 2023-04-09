import React, { useContext } from 'react';
import { ringContext } from '../Grandpa/Grandpa';

const Aunty = () => {
   const sunar = useContext(ringContext)
   return (
      <div>
         <h2>Aunty</h2>
         <h3>{sunar}</h3>
      </div>
   );
};

export default Aunty;