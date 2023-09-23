import Navbar from '../components/Navbar';
import ShelterForm from "../components/ShelterForm";
import AddLocationOnMap from "../components/AddLocationOnMap";
import CurrentAlerts from '../components/CurrentAlerts';
import { useState ,useEffect} from "react";
import BurgerContext from '../contexts/BurgerContext'
import PreviousAlerts from "../components/PreviousAlerts";
import NavSide from "../components/NavSide";
import { API } from '../constant';
import { useNavigate } from 'react-router-dom';

const communityList = () => {
    const navigate=useNavigate()
        const [isBurgerOn, setIsBurgerOn] = useState(false);
    
        function handleBurgerClick(isBur) {
            setIsBurgerOn(isBur);
        }
    const [forum,setForum]=useState([])
  const getForumList=async()=>{
    try{
    const res=await fetch(`${API}/disaster`)
    const data=await res.json()
    if(res.ok){
      setForum(data)
      console.log(data)
    }else{
      swal("Error",data.error, "error");
     
    }
    }catch(e){
      swal("Error", e.message, "error");
    }
  }

 useEffect(()=>{
    getForumList()
 },[])
   // import NewNavSide from "../components/NewNavSide";



    return (<>
        <BurgerContext.Provider value={isBurgerOn}>
            <section className="flex flex-col">
                <div>
                    <Navbar handleBurgerClick={handleBurgerClick} color="#F56868" />
                </div>
                <div className="flex">
                    <div>
                        <NavSide />
                    </div>
                    <div className="w-full bg-[#f5f5f5]">
                    {forum.map((data=>{
            return <div key={data._id}  onClick={()=>navigate(`/publicforum/${data._id}`)} className='border-b-2 cursor-pointer'>
              <p className='font-bold text-xl'>{data.name}</p>
              <p>{data.description}</p>
              </div>
          }))}
                    </div>
                </div>
            </section>
        </BurgerContext.Provider>
    </>)
  }
export default communityList