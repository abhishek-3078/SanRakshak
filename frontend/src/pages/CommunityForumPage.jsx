import React,{useState} from 'react'
import NavSide from '../components/NavSide'
import { MainDisplayFunction } from '../components/ShelterDetailBox'
import NewNavSide from "../components/NewNavSide";
import BurgerContext from '../contexts/BurgerContext'
import Navbar from '../components/Navbar';
import AgencyStatBox from '../components/AgencyStatBox';
import CommentLayout from '../components/CommentLayout';


const commentObj = {
    profilePhoto :"https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg",
    userName : "Archit Chetan Chhajed",
    heading: "Road No.108 is now clear of all roadblocks as the avalanche cleared the debri",
    content : "This morning an avalanche occured on the hill near the Bedi Road, Jamanagar, we were 50 people travelling. Thank God, none of us got hurt, but now the road is clear towards the Jamangar Medical Aid Camp. We are all heading towards there only.",
    arrOfImages : ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVwqJuC0OPRsmFipjvEAE3snWaFl-PjrJ9eQ&usqp=CAU"]
}
const CommunityForumPage = () => {
    const [isBurgerOn, setIsBurgerOn] = useState(false);

    function handleBurgerClick(isBur) {
        setIsBurgerOn(isBur);
    }


    async function handleSubmit(){
        const obj = {
            title: document.getElementById('title'),
            content: document.getElementById('content'),
            disaster:"650de82f43f92c9332c8a7ff"
        }

        try{
        const id_token = localStorage.getItem('idToken')
        const response = await fetch(`${API}/forum/post`, {
          method: "POST",
          headers: {
            'Content-Type': "application/json"
          },
          body: JSON.stringify(obj)
        });
        console.log("vgv:", response)
        if (response.ok) {
          const data = await response.json()
          console.log(data);
        }
        else {
          throw new Error('Network response was not ok');
        }
      }
      catch (error) {
        alert(error);
        console.log("This is the erroe", error);
      }
    }
  return (
    <BurgerContext.Provider value={isBurgerOn}>
            <section className="flex flex-col">
                <div>
                    <Navbar handleBurgerClick={handleBurgerClick} color="#6A8BFF" />
                </div>
                <div className="flex">
                    <div>
                        <NewNavSide />
                    </div>
                    <div className="w-full flex flex-col justify-center items-center pt-10">
                        <div className="w-[98%] h-[auto] border-2 border-solid border-black flex flex-col items-center bg-gradient-to-br from-zinc-900 to-gray-900"> {/*For A Diaster */}

                            <div className="w-full h-[15%] flex justify-center items-center">
                                <h1 className="mb-4 p-2 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-4xl dark:text-white">Jamnagar Floods Emergency Discussion Forum</h1>
                            </div>
                            <div className="w-[95%] h-[auto] border-2 border-solid border-red-500 p-3 bg-gradient-to-br from-slate-900 to-slate-800 text-white flex m-2">
                                <div className="w-[50px] h-[50px]">
                                <img className="w-full h-full rounded-[30px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQZkZhjF_61mP8eGHBMIKaSKTwg2nmNx1k88updr0MBA&s" alt="P"></img>
                                </div>
                                <div className="w-[100%]">

                                    <input id="title" className="w-[100%] m-2 p-1 text-black" type="text"></input>
                                    <textarea id="content" className="m-2 h-[20vh] w-[100%] resize-none text-black"></textarea>
                                    <input className="m-2" type="file" accept="image"></input>
                                    <div className="w-full m-2">
                                        <button className="w-[120px] h-[40px] rounded-[20px] p-2 bg-green-400 hover:bg-green-500 active:bg-green-600" onSubmit={handleSubmit}>Submit Post</button>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full flex flex-col items-center">
                                <CommentLayout profilePhoto={commentObj.profilePhoto} heading={commentObj.heading} content={commentObj.content} userName={commentObj.userName} arrOfImages={commentObj.arrOfImages}  />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </BurgerContext.Provider>
  )
}

export default CommunityForumPage