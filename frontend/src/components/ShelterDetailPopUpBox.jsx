import React from 'react'
import { IoChevronBackCircleOutline } from "react-icons/io5";
import { TableHeading } from './ShelterDetailBox';
import { MyContext } from './MyContext';
import { useContext } from 'react';

// IoChevronBackCircleOutline



const GenerateField = (props) => {

    const title = props.title;
    const info = props.info;
    return <div className="flex w-[80%] h-[25px] m-1 bg-white"> {/*Field */}
    <div className="flex justify-center  items-center">
        <h1 className="text-[15px] font-semibold mr-3">{title}</h1>
    </div>
    <div className=" h-[auto] flex justify-start items-center">
        <h1 className="text-[15px] flex justify-center items-center">{info}</h1>
    </div>
</div>
}

const GenerateHeading = (props) => {
    const text = props.text;
    return <th className="border-2 border-solid border-[#D9D9D9] px-4">
        {text}
    </th>
}



const GenerateRow = (props) => {
    const name = props.resource_name;
    const qty = props.resource_qty;
    const id = props.resource_id;

    return <tr>
        <td className="p-2 text-left border-2 border-solid border-[#D9D9D9]">
            {name}
        </td>
        <td className="p-2 text-left border-2 border-solid border-[#D9D9D9]">
            {qty}
        </td>
        <td className="p-2 text-left border-2 border-solid border-[#D9D9D9]">
            {id}
        </td>
    </tr>
}

const ShelterDetailPopUpBox = ({id, name, area, coordinator, dateOfCreation, type, resources}) => {
    const {optionSelected, setOptionSelected} = useContext(MyContext);
    return (
        <div className="w-[40%] h-[auto] border-2 border-solid border-[#D9D9D9] flex flex-col items-center bg-[#ffffff] rounded-[30px] absolute top-[20vh] left-[60vh] overflow-x-hidden p-2">
            <div className="flex justify-between w-full">  {/*HEADER */}
                <div className="bg-white m-2" onClick={()=>{setOptionSelected(-1);}}>
                    <IoChevronBackCircleOutline color={"indigo"} size={45} />
                </div>
            </div>
            <div className="w-full flex justify-center items-center">

                <div className="text-[25px] w-[100%] m-3 p-2 bg-white">
                    <h1 className="text-center w-[100%] border-t-2 border-b-2 border-t-solid border-b-solid border-t-[#a82ea2] border-b-[#a82ea2] flex justify-center items-center">{name}</h1>
                </div>
            </div>

            <div className="w-full flex flex-col items-center justify-center"> {/*Prelimnary Details */}
                <GenerateField title="Area" info={area}></GenerateField>
                <GenerateField title="Type" info={type}></GenerateField>
                <GenerateField title="Coordinator" info={coordinator}></GenerateField>
                <GenerateField title="Shelter ID" info={id}></GenerateField>
                <GenerateField title="Date Created" info={dateOfCreation}></GenerateField>
            </div>



            <div> {/*Table Containing Additional Details */}
            <table className="m-1">
                <tr>
                    <GenerateHeading text="Resource Name"></GenerateHeading>
                    <GenerateHeading text="Resource Qty"></GenerateHeading>
                    <GenerateHeading text="Resource ID"></GenerateHeading>
                </tr>


                {console.log(resources)}
                <GenerateRow resource_id={resources[0].resource_id} resource_name={resources[0].resource_name} resource_qty={resources[0].resource_qty}></GenerateRow>

            {
                resources.map((resource)=>{
                    return <GenerateRow resource_id={resource.resource_id} resource_name={resource.resource_name} resource_qty={resource.resource_qty}></GenerateRow>
                })
            }
            </table>
            </div>
        </div>
    )
}

export default ShelterDetailPopUpBox