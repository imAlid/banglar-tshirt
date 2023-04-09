import React from 'react';
import Ami from '../Ami/Ami';
import Brother from '../Brother/Brother';
import Sister from '../Sister/Sister';

const Father = ({ring}) => {
   return (
      <div>
         <h2>Father</h2>
         <section className='flex'>
            <Ami ring={ring}></Ami>
            <Brother></Brother>
            <Sister></Sister>
         </section>
      </div>
   );
};

export default Father;