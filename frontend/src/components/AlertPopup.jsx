function AlertPopup(){
    return(
        <div className="flex flex-col w-[40vw] h-[30vw] rounded-lg border-2 border-[#C5C5C5] px-5 py-2 overflow-auto">
            <div className="">
                <div className="w-full flex items-center justify-between">
                    <div className=""> 
                        <img className="w-10 h-10 cursor-pointer" src="https://cdn-icons-png.flaticon.com/128/54/54476.png" alt="" />
                    </div>
                    <div className="">
                        <h1 className="font-bold text-[25px]">Heading of the Alert</h1>
                    </div>
                </div>
                <div>
                    <div className="float-right">
                        <p>20th september 2023|1:50pm</p>
                    </div>
                </div>
            </div>
            <div className="flex w-full space-x-5">
                <div className="">
                    <div className="w-full flex items-center">
                        <img className="w-10 h-10" src="https://cdn-icons-png.flaticon.com/128/4201/4201973.png" alt="" />
                        <h2 className="font-bold ">Thread Level</h2>
                    </div>
                    <div>
                        <p className="text-sm">A single line that discribes what that threat means</p>
                    </div>
                </div>
                <div className="flex space-x-1 items-center">
                    <img className="w-7 h-7" src="https://cdn-icons-png.flaticon.com/128/1483/1483285.png" alt="" />
                    <p className="text-sm">Affected Areas</p>
                </div>
            </div>
            <div className="my-3">
                <p className="font-[500]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum omnis maiores cupiditate commodi nesciunt dolorum illo! Est minus eos neque fugit totam, reprehenderit expedita velit libero, aliquid dicta fuga, dolorem nemo cupiditate ab dolor et vitae consectetur quas iste ea repudiandae tempora 
                </p>
            </div>
            <div>
                <h2 className="font-bold text-[20px] ">
                    <u>Neccesary Step To Be Taken</u>
                </h2>
                <ul>
                    <li className="list-disc mx-3">Tip1</li>
                    <li className="list-disc mx-3">Tip2</li>
                    <li className="list-disc mx-3">Tip3</li>
                </ul>
            </div>
        </div>
    )
}
export default AlertPopup;