import React from 'react';
import Bow from '../Bow/Bow';

const Ami = ({ring}) => {
   return (
      <div>
         <h2>Ami</h2>
         <section className='flex'>
            <Bow ring={ring}></Bow>
         </section>
      </div>
   );
};

export default Ami;