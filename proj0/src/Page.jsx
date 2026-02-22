// import React from 'react'

// const Page = () => {
//   let marks = 90;

//   return (
//     <>
//       <h1>My marks were : {marks}</h1>
//       <button onClick={() => {
//         marks = 100;
//         console.log(marks);
//       }}>Update</button>
//     </>
//   )
// }

// export default Page





import React, { useState } from 'react'

const Page = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count: {count}</h1>

      <button onClick={() => setCount(prev=> prev-1)}>
        Decrement
      </button>

      <button onClick={() => setCount(prev => prev + 1)}>
        Increment
      </button>
    </div>
  )
}

export default Page