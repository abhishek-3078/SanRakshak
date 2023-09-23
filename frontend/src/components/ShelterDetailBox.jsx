import shelterData from '../data/shelterDetails'
import { AiOutlinePlus } from "react-icons/ai";
import ShelterDetailPopUpBox from './ShelterDetailPopUpBox';
import { useState , useEffect} from 'react';
import { MyContext } from './MyContext';
import { useContext } from 'react';
import {API} from '../constant'


function NewRowComponent(props) {
  const text = props.text;
  return <td className="p-2 text-left">
    {text}
  </td>
}


function ResourceHeading(props) {
  const title = props.title;
  return <th className="p-2 text-left">
    {title}
  </th>
}


function NewResourceComponent(props) {
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

const send = () => {
  console.log("hello");
  window.location.href = '/addShelter';
}


function NewRow(props) {
  const { optionSelected, setOptionSelected } = useContext(MyContext);
  const date = props.createdAt;
  const id = props.active;
  const isActive = {id}?"ACTIVE":"NOT ACTIVE";
  const area = props.area;
  const coordinator = props.coordinator;
  const type = props.type;
  const number = props.number;
  const styling = "p-2"

  function formatDateToDDMMYYYY(timestamp) {
    const date = new Date(timestamp);
  
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is zero-based
    const year = date.getFullYear();
  
    return `${day}/${month}/${year}`;
  }
  
  const timestamp = props.createdAt;
  const formattedDate = formatDateToDDMMYYYY(timestamp);
  console.log(formattedDate); // Output: "23/09/2023"

  return <>

    <tr className="hover:bg-[#C5C5C5] rounded-[10px] active:bg-[#c5c5c582]" onClick={() => {
      console.log(number);
      setOptionSelected(number);
    }}>
      <NewRowComponent text={formattedDate} />
      <NewRowComponent text={isActive} />
      <NewRowComponent text={`lat : ${props.latitude} lng : ${props.longitude}`}  />
      <NewRowComponent text={coordinator} />
      <NewRowComponent text={type} />
      <div className="w-[70px] h-full flex items-center justify-between m-3">
        
        <div className="w-[25px] h-[25px] hover:bg-[white] flex justify-center items-center rounded-[10px]">

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

// 
function ShelterDetailBox() {
  const { optionSelected, setOptionSelected } = useContext(MyContext)
  const [shelter,SetShelter] = useState([]);
  const [load,SetLoad] = useState(0);


  useEffect(() => {

    const getAlert = async () => {
        console.log("Hello");
        try {
            console.log("Yaha pahuch gayaa");

            // setShowLoader(true)
            const id_token = localStorage.getItem('idToken')
            const response = await fetch(`${API}/disaster/shelter`, {
                method: "GET",
                headers: {
                    'Authorization': id_token,
                    'Content-Type': "application/json"
                }
            });
            console.log("vgv:", response)
            if (response.ok) {
                const data = await response.json()
                console.log(data);
                console.log("abhishek ye raha data ", data);
                // setShowLoader(false);
                SetLoad(1);
                SetShelter(data.data);
                console.log("This is our alerts",data);
            }
            else {
                const data = await response.json()
                console.log(data);
                throw new Error('Network response was not ok');
            }
        }
        catch (error) {
            // alert(error);
            console.log("This is the erroe", error);
        }
    }

    getAlert();
}, [load])

const [dataObj, setDataObj] = useState({});



// const key = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${}`
  return (
    <>

      {/* <RescueServicesPage /> */}


      <div className="w-[90%] h-[auto] border-solid border-2 border-[#C5C5C5] bg-[#ffffff] rounded-[10px] m-5 p-3 flex flex-col">  {/* Shelter Info Box */}


        <div className="flex w-full h-[15%] mb-3"> {/*Heading */}



          <h1 className="text-2xl w-[70%] p-2 h-full flex align-center">Shelter Information</h1>

          <div className='w-[30%] flex justify-end items-center'>

            <button className="w-[100%] h-[90%] bg-blue-400 rounded-[10px] flex items-center justify-center p-3 hover:bg-blue-700 active:bg-blue-300" onClick={send}>


              <div className="h-[70%] w-[20%] flex items-center justify-center">

                {/* <img className="h-[30px] w-[30px]" src="https://cdn-icons-png.flaticon.com/128/10337/10337471.png" alt='+' /> */}
                <AiOutlinePlus color='white' size={30} />
              </div>

              <div className="w-[70%] text-[20px] font-[500] text-white" >
                Add New Shelter
              </div>


            </button>
          </div>



        </div>


        <div>
          <table className="p-5 w-full">
            <tr>
              <TableHeading title="Date Created" />
              <TableHeading title="Shelter Status" />
              <TableHeading title="Shelter Area" />
              <TableHeading title="Shelter Coordinator" />
              <TableHeading title="Shelter Type" />
            </tr>


            {
              shelter.map((shelter, index) => {
                console.log("SINGULAR SHELTER:", shelter, index);
                const latitude = shelter.coord.lat;
                const longitude = shelter.coord.lng;
                return <NewRow latitude = {latitude} longitude = {longitude} number={index} createdAt={shelter.createdAt} id={shelter.id} area={shelter.area} coordinator={shelter.coordinator} type={shelter.shelterType} />

              })
            }
          </table>
        </div>


      </div>





    </>
  )
}



function MainDisplayFunction() {

  const [optionSelected, setOptionSelected] = useState(-1);

  if (optionSelected === -1) {
    return <MyContext.Provider value={{ optionSelected, setOptionSelected }}>

      <ShelterDetailBox></ShelterDetailBox>
    </MyContext.Provider>
  }
  const shelter = shelterData[optionSelected];
  return <>
    <MyContext.Provider value={{ optionSelected, setOptionSelected }}>

      <ShelterDetailBox></ShelterDetailBox>
      <ShelterDetailPopUpBox id={shelter.id} name={shelter.name} coordinator={shelter.coordinator} area={shelter.area} createdAt={shelter.createdAt} type={shelter.type} resources={shelter.resources} />
    </MyContext.Provider>
  </>
}

export default ShelterDetailBox;
export { TableHeading, MainDisplayFunction }