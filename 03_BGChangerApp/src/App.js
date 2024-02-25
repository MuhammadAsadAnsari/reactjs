import { useEffect, useState } from "react";

function App() {
  const [bool,setbool] = useState(true)
  // const [color, setcolor] = useState("olive");
  console.log(bool);
  useEffect(()=>{
    alert("I AM Clicked "+bool)
  },[bool])
  return (
    <>
      {/* <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}> */}
      <h1> {bool}</h1>
        {/* <div className="fixed flex flex-wrap justify-center bg-white rounded-3xl px-3 py-2 shadow-lg bottom-12"> */}
         {/* <button className="outline-none px-4 py-1 rounded-full" style={{ backgroundColor : "red" }} onClick={()=>{setcolor("red")}}>Red</button>
          <button className="outline-none px-4 py-1 rounded-full" style={{ backgroundColor: "green" }} onClick={() => { setcolor("green") }}>Green</button>

          <button className="outline-none px-4 py-1 rounded-full" style={{ backgroundColor: "blue" }} onClick={() => { setcolor("blue") }}>Blue</button> */}
          <button className="outline-none px-4 py-1 rounded-full"  onClick={() => {setbool(!bool) }}>change bol</button>

        {/* </div> */}
      {/* </div> */}
    </>
  );
}

export default App;
