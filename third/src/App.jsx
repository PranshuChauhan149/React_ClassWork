import React, { useContext, useState } from "react";
import Box from "./components/box";
import Student from "./components/student";
import Inlinecss from "./components/Inlinecss";
import External from "./components/External";
import LaptopComponent from "./components/NewClassCompouent";
import { AppContext } from "./Context/AppContext";

const App = () => {
  // const [stu, ststuden] = useState({
  //   name: "pranshu chauhan",
  //   class: 12,
  //   rollno: 45,
  // });
  // const [a, seta] = useState([2, 4, 5, 6]);
  // console.log(a);

  // const [isShow, setShow] = useState(false);
const {setTheme,theme} = useContext(AppContext)
  return (
    <div className={`${theme ? "bg-black" : "bg-white"}  flex items-center justify-center h-screen w-screen gap-7`}>
      
      <button onClick={()=>setTheme((prev)=>!theme)} className="px-4 bg-black text-white">light</button>
      <button onClick={()=>setTheme((prev)=>!theme)} className="text-red bg-amber-400 px-4">dark</button>
      {/* // <Box /> */}
      {/* //{" "} */}
      {/* <Box color="green" student={student} />
  //     <Student name="pranshu" age="20" course="react" state="up" />
  //     <External/>
  //    <Inlinecss/> */}
      {/* //     this is student of {stu.name}                                                                                                                                                                                                                        */}
      {/* //     <button onClick={() => seta((prev) => [...prev, 5])}>Change</button> */}
       {/* <LaptopComponent /> */}
      {/* <input
        type={isShow ? "text" : "password"}
        placeholder="Enter yout password"
      />
      <button onClick={() => setShow(!isShow)}>
        {isShow ? "hide" : "show  "}
      </button> */}
    </div>
  );
};

export default App;
