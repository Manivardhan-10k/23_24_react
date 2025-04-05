import React, { memo, useEffect } from 'react';

const Child = memo(({ fun }) => {
  console.log("Child rendering");
  console.log(fun);


  useEffect(()=>{
   let  sum=0
    for (let i =0;i<1000000;i++){
        sum+=i
    
    }
  },[])

  return (
    <div>
      Child

      <button onClick={fun}>dec</button>
    </div>
  );
});

export default Child;
