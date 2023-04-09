import React, { useContext } from 'react';
import { ringContext } from '../Grandpa/Grandpa';

const Bow = ({ring}) => {
   const angti = useContext(ringContext)
   return (
      <div>
         <h2>Bow</h2>
         <small>{angti}</small>
      </div>
   );
};

export default Bow;