import React, { useContext } from 'react';
import { ringContext } from '../Grandpa/Grandpa';

const Brother = () => {
   const gold = useContext(ringContext)
   return (
      <div>
         <h2>Brother</h2>
         <small>{gold}</small>
      </div>
   );
};

export default Brother;