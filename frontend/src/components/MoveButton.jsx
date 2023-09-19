function MoveButton({posLeft,children}){
    return(
        <div className={` flex justify-center items-center rounded-full absolute bg-white opacity-80 h-12 w-12 top-[35%] border-red-500 border-2 text-[30px] left-[${posLeft}px]`} >
            {children}
        </div>
    )
}
export default MoveButton;