import ImportantMsg from "./ImportantMsg";
import importantMsgData from "../data/ImportInfo";
import { useState } from "react";

function ImportantInfoBox(){
    const [msgIndex,setMsgIndex] = useState(0);
    const messageObj = importantMsgData[msgIndex];
    console.log(messageObj);
    // function loadNextMsg(){
    //     if(msgIndex == importantMsgData.length-1){
    //         setInterval(()=>{
    //             setMsgIndex(0);
    //         },3000)
    //     }else{
    //         setInterval(()=>{
    //             setMsgIndex(msgIndex+1);
    //         },3000)
    //     }
    // }
    // loadNextMsg();
    return(
        
        <div className="flex relative bg-[#FF6A56] w-[80vw] h-[150px] rounded-xl mx-auto">
           {msgIndex > 0 && <button onClick={()=>setMsgIndex(msgIndex-1)}  className={` flex justify-center items-center rounded-full absolute bg-transparent opacity-80 h-12 w-12 top-[35%] border-red-500 border-2 text-[30px] left-[20px] hover:bg-white`} >
                <img className="w-5 h-5" src="https://cdn-icons-png.flaticon.com/128/81/81037.png" alt="imgerror" />
            </button>}

            <ImportantMsg id={messageObj.id} msg={messageObj.msg}></ImportantMsg>

           {msgIndex < importantMsgData.length - 1 && <button onClick={()=>setMsgIndex(msgIndex+1)} className={` flex justify-center items-center rounded-full absolute bg-transparent opacity-80 h-12 w-12 top-[35%] border-red-500 border-2 text-[30px] left-[960px] hover:bg-white`} >
                <img className="w-5 h-5" src="https://cdn-icons-png.flaticon.com/128/5343/5343102.png" alt="imgerror" />
            </button>}
        </div>
    )
}
export default ImportantInfoBox;