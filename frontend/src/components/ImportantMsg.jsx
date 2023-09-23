function ImportantMsg({id,msg}){
    return(
        <div className="flex justify-center items-center w-full text-white font-bold text-xl border-2 border-solid">
            {msg}
        </div>
    )
}
export default ImportantMsg;