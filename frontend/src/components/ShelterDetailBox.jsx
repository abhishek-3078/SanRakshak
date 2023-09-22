import shelterData from '../data/shelterDetails'
import {AiOutlinePlus } from "react-icons/ai";
import ShelterDetailPopUpBox from './ShelterDetailPopUpBox';
import { useState } from 'react';
import { MyContext } from './MyContext';
import { useContext } from 'react';


function NewRowComponent(props){
  const text = props.text;
   return <td className="p-2 text-left">
    {text}
</td>
}


function ResourceHeading(props)
{
    const title = props.title;
    return <th className="p-2 text-left">
        {title}
    </th>
}


function NewResourceComponent(props)
{
    const name = props.resource_name;
    const id = props.resource_id;
    const qty = props.resource_qty;


    return <tr>
        <td className="p-2 text-left">
            {name}
        </td>
        <td className="p-2 text-left">
            {qty}
        </td>
        <td className="p2 text-left">
            {id}
        </td>
    </tr>
}


function NewRow(props) {
  const {optionSelected, setOptionSelected} = useContext(MyContext);
  const date = props.dateOfCreation;
  const id = props.id;
  const area = props.area;
  const coordinator = props.coordinator;
  const type = props.type;
  const number = props.number;
  const styling = "p-2"
    return <>

            <tr className="hover:bg-[#C5C5C5] rounded-[10px] active:bg-[#c5c5c582]" onClick={()=>{console.log(number);
             setOptionSelected(number);}}>
                <NewRowComponent text={date}/>
                <NewRowComponent text={id}/>
                <NewRowComponent text={area}/>
                <NewRowComponent text={coordinator}/>
                <NewRowComponent text={type}/>
                <div className="w-[70px] h-full flex items-center justify-between m-3">
                    <div className="w-[25px] h-[25px] hover:bg-[#C5C5C5] flex justify-center items-center rounded-[10px]">
                        <img className="w-[20px] h-[20px]" src="https://cdn-icons-png.flaticon.com/128/1828/1828911.png" alt="E" />
                    </div>
                    <div className="w-[25px] h-[25px] hover:bg-[#C5C5C5] flex justify-center items-center rounded-[10px]">

                            <img className="w-[20px] h-[20px]" src="https://cdn-icons-png.flaticon.com/128/484/484662.png" alt="G" />
                    </div>
                </div>

 
            </tr>



    </>
}



function TableHeading(props) {
  const title = props.title;
  const width = props.width;


  const styling = "border-black border-2 border-solid p-2"
  return <>
              <th className={`p-2 text-left`}>
                {title}
              </th>
  </>
}

function ShelterDetailBox() {
  const {optionSelected, setOptionSelected} = useContext(MyContext)
  return (
    <>

      {/* <RescueServicesPage /> */}


      <div className="w-[60%] h-[auto] border-solid border-2 border-[#C5C5C5] bg-[#ffffff] rounded-[10px] m-5 p-3 flex flex-col">  {/* Shelter Info Box */}


        <div className="flex w-full h-[15%] mb-3"> {/*Heading */}



          <h1 className="text-2xl w-[70%] p-2 h-full flex align-center">Shelter Information</h1>

          <div className='w-[30%] flex justify-end items-center'>

            <button className="w-[100%] h-[90%] bg-blue-400 rounded-[10px] flex items-center justify-center p-3 hover:bg-blue-700 active:bg-blue-300">


              <div className="h-[70%] w-[20%] flex items-center justify-center">

                {/* <img className="h-[30px] w-[30px]" src="https://cdn-icons-png.flaticon.com/128/10337/10337471.png" alt='+' /> */}
                <AiOutlinePlus color='white' size={30}/>
              </div>
              <div className="w-[70%] text-[20px] font-[500] text-white">
                Add New Shelter
              </div>


            </button>
          </div>



        </div>


        <div>
          <table className="p-5 w-full">
            <tr>
              <TableHeading title="Date Created"/>
              <TableHeading title="Shelter ID"/>
              <TableHeading title="Shelter Area" />
              <TableHeading title="Shelter Coordinator" />
              <TableHeading title="Shelter Type" />
            </tr>


            {
                shelterData.map((shelter,index)=>{
                console.log("SINGULAR SHELTER:",shelter,index);
                return<NewRow number={index} dateOfCreation={shelter.dateOfCreation} id={shelter.id} area={shelter.area} coordinator={shelter.coordinator} type={shelter.type}/>

                })
            }
          </table>
        </div>


      </div>



      

    </>
  )
}



function MainDisplayFunction(){

  const [optionSelected, setOptionSelected] = useState(-1);

  if(optionSelected===-1)
  {
    return<MyContext.Provider value={{optionSelected, setOptionSelected}}>

     <ShelterDetailBox></ShelterDetailBox>
    </MyContext.Provider>
  }
  const shelter = shelterData[optionSelected];
  return <>
  <MyContext.Provider value={{optionSelected, setOptionSelected}}>

  <ShelterDetailBox></ShelterDetailBox>
  <ShelterDetailPopUpBox id={shelter.id} name={shelter.name} coordinator={shelter.coordinator} area={shelter.area} dateOfCreation={shelter.dateOfCreation} type={shelter.type} resources={shelter.resources}/>
  </MyContext.Provider>
  </>
}

export default ShelterDetailBox;
export {TableHeading, MainDisplayFunction}