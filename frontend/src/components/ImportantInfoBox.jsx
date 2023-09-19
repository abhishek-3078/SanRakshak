import ImportantMsg from "./ImportantMsg";
import MoveButton from "./MoveButton";

function ImportantInfoBox(){
    return(
        <div className="flex relative bg-[#FF6A56] w-[70vw] h-[150px] rounded-xl">
            <MoveButton posLeft="20"><img className="w-5 h-5" src="https://cdn-icons-png.flaticon.com/128/81/81037.png" alt="imgerror" /></MoveButton>
            <MoveButton posLeft="830" ><img className="w-5 h-5" src="https://cdn-icons-png.flaticon.com/128/5343/5343102.png" alt="imgerror" /></MoveButton>

            <ImportantMsg msg="hello aman"></ImportantMsg>
        </div>
    )
}
export default ImportantInfoBox;