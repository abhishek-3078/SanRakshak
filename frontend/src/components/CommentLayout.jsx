import React from 'react'
import { useState } from 'react';
import { AiFillLike, AiFillDislike } from 'react-icons/ai';
// AiOutlineLike
// AiFillDislike



const Image = (props) => {
    const link = props.link;
    return (
        <img src={link} alt="Image"></img>
    )
}


const CommentLayout = (props) => {
    const profilePhoto =props.profilePhoto;
    const userName = props.userName;
    const heading = props.heading;
    const content = props.content;
    const arrOfImages = props.arrOfImages;
    const media = "";
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);
    const [likeState, setLikeState] = useState(0);
    const [colorLike, setColorLike] = useState("");
    const [colorDislike, setColorDislike] = useState("");


    console.log("INITIAL LIKE STATE: ", likeState );
    function handleLikeClick()
    {
        if(likeState==1)
        {
            setLikes(likes-1);
            setColorLike("");
            setLikeState(0);
        }
        else if(likeState==0)
        {
            setLikes(likes+1);
            setColorLike("green");
            setColorDislike("");
            setLikeState(1);
        }
        else
        {
            setLikes(likes+1);
            setColorLike("green");
            setColorDislike("");
            setLikeState(1);

            setDislikes(dislikes-1);
        }
        console.log("LIKE STATE: ",likeState);
    }


    function handleDislikeClick()
    {
        if(likeState==1)
        {
            setLikes(likes-1);
            setColorLike("");
            setLikeState(-1);

            setDislikes(dislikes+1);
            setColorDislike("orange");
        }
        else if(likeState==0)
        {
            setDislikes(dislikes+1);
            setColorDislike("orange");
            setColorLike("");
            setLikeState(-1);
        }
        else
        {
            setDislikes(dislikes-1);
            setColorDislike("");
            setLikeState(0);
        }
        console.log("LIKE STATE",likeState);
    }
  return (
    <div className="w-[95%] h-[auto]  m-3 bg-gradient-to-br from-blue-300 to-blue-500 text-white">
        <div className="w-[100%] h-[50px] flex items-center ">   
            <div className="w-[4%]">
                <img className="w-full h-[100%] rounded-[25px] " src={profilePhoto} alt="P"></img>
            </div>

            <div className="w-[30%] text-[15px] pl-5">
                {userName}
            </div>

            <div className="flex justify-end items-center w-[66%]">
                <div onClick={()=>{handleLikeClick();}} className="p-1 flex m-r-2">
                    <AiFillLike color={colorLike} size={25}/>
                </div>
                    <div className="min-w-[5%]">
                        {likes}
                    </div>

                <div onClick={()=>{handleDislikeClick();}} className="p-1 flex m-r-2">
                    <AiFillDislike color={colorDislike} size={25}/>
                </div>
                    <div className="min-w-[5%]">
                        {dislikes}
                    </div>
            </div>
        </div>



        <div>
            <h1 className="text-[25px] font-semibold text-left bg-[#343434] p-3 mt-2">{heading}</h1>
        </div>


        <div>
            <p className="p-3 font-semibold text-left bg-[#343434]">
                {content}
            </p>
        </div>


        <div className="p-2 m-2 flex justify-center">

        {
            arrOfImages.map((image)=>{
                return <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVwqJuC0OPRsmFipjvEAE3snWaFl-PjrJ9eQ&usqp=CAU" alt="Image"></img>
            })

        }


        </div>
    </div>
  )
}

export default CommentLayout