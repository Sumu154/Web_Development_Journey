import React, { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)



// // evabe likha possible na -> onk boro code hoye jabe
// // const element = React.createElement('h1', null, 'Hello world!');
// const element = <h1> Hello world! </h1>
// console.log(element); 

// // const element2 = React.createElement('h1', {className: 'heading', 'hello world!'})
// const element2 = <h1 className='heading'> Hello world 2! </h1>
// console.log(element2)
  

// // multiline e likhbo evabe () diye
// const index=0;
// const element3 = (
//   <h1 className='heading' tabIndex={index}> 
//     Hello world! 
//   </h1>
// );
// console.log(element3)

//          // element1, element2, element3 egula react element but egula window te dekhabe na..
//          // karon render kora hoy nai..shudhu element banale hbe na..seta render o korte hbe
//          // render means ->  process of translating the React components into actual DOM elements jate window page e dekhte pari

// // // actually egula dom akare save hoy,,element3 is like a -> react element
// // // const element3 = {
// // //   type: 'h1',
// // //   props: {                   //properties always camelCase
// // //     className: 'heading',
// // //     tabIndex: 0,
// // //     Children: 'Hello world!',
// // //   },
// // // }


// // const element4 = (
// //   <h1 className='heading' tabIndex={index}> 
// //     <span className='text'> Hello world! </span>
// //     <img src="" alt="" />
// //   </h1>
// // );
// // console.log(element4)




// // // // react dom er kaj -> kothay element ta boshate chai oita thik kore di
// // 1. initial rendering -> root e element3 render
// const root = createRoot(document.getElementById('root'));            //createroot ekbar e kora jabe then barbar etate render korte hbe
// root.render(element3);



// //  2. re-rendering -> root e element5 replace holo..element3 er bodole..
// // also element5 1s porpor update hocce and 1s er porpor re-render hocce
// setInterval(() => {
//   const element5 = (
//     <h1 className="heading" tabIndex={index}> 
//       <span className="text"> Hello {new Date().toLocaleTimeString()} </span>
//     </h1>
//   );
//   root.render(element5);
// }, 1000);







