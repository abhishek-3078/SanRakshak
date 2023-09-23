import React, { useState } from "react";
import { ImCross } from 'react-icons/im';


const disasterArr = [
    {
        title: "Earthquake",
        content: "Monitor local news and weather reports through a battery-powered radio, TV, or a weather app on your smartphone. Follow instructions from local authorities and emergency services. Have an Emergency Kit Ready: Prepare an emergency kit with essential supplies like water, non-perishable food, a flashlight, batteries, a first-aid kit, medications, personal hygiene items, and important documents. Evacuate if Necessary: If authorities order an evacuation, follow their instructions promptly. Leave early to avoid traffic congestion and potential dangers. Stay Indoors if Sheltering-in-Place: If advised to stay indoors, close all doors and windows, turn off ventilation systems, and seal gaps to prevent the entry of hazardous substances or pollutants. Communicate: Contact family members or loved ones to let them know your status and whereabouts. Use text messages or social media to conserve phone battery and network resources. Assist Vulnerable Individuals: Check on neighbors, especially elderly or disabled individuals, and offer assistance if possible. Turn Off Utilities: Shut off gas, water, and electricity if instructed to do so or if you suspect damage to utility lines. Be Cautious with Open Flames: Avoid using candles or open flames for lighting, as they can pose fire hazards. Listen for Emergency Alerts: Pay attention to emergency alerts on your smartphone or radio for updates and instructions."
    },
    {
        title: "Tsunami",
        content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident quas, deserunt dolorem amet sapiente sunt veritatis tempore mollitia numquam accusantium eos ad. Facere labore necessitatibus blanditiis repudiandae consequuntur! Deserunt dolor reiciendis cupiditate odio quaerat magnam itaque? Fuga beatae iste enim fugit eos obcaecati tenetur veritatis quod culpa, doloribus pariatur sint ab autem ex ut tempora cum rerum facere? Impedit mollitia delectus incidunt dolore optio iste dolor! Hic ipsam dolores culpa! Possimus vel perspiciatis laudantium. Maxime, asperiores reprehenderit fugit mollitia voluptatum recusandae perferendis facilis alias quis ducimus! Temporibus, excepturi officiis! At veritatis, libero doloremque eligendi voluptatum cupiditate tempora voluptate nobis voluptatibus eum deserunt quis quidem repellat reprehenderit asperiores explicabo. Hic maiores blanditiis nobis quis iure aut in amet nemo laudantium reprehenderit autem dignissimos voluptatem earum recusandae modi adipisci deserunt sunt aliquam ab, dolorem dicta ducimus unde eius at. Iusto, cumque sapiente earum placeat dolorum enim debitis reiciendis vel molestiae, libero officiis ex, sequi repellendus modi similique provident magnam natus facere? Neque, recusandae unde dolor, facere quibusdam iste earum sapiente praesentium ducimus eos, adipisci suscipit dolorum provident rerum labore? Mollitia esse tenetur vitae, alias molestias ipsam consequatur ab facere ad eum minima non voluptatibus vel amet facilis sint illum recusandae, nostrum sed."
    },
    {
        title: "Cyclone",
        content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident quas, deserunt dolorem amet sapiente sunt veritatis tempore mollitia numquam accusantium eos ad. Facere labore necessitatibus blanditiis repudiandae consequuntur! Deserunt dolor reiciendis cupiditate odio quaerat magnam itaque? Fuga beatae iste enim fugit eos obcaecati tenetur veritatis quod culpa, doloribus pariatur sint ab autem ex ut tempora cum rerum facere? Impedit mollitia delectus incidunt dolore optio iste dolor! Hic ipsam dolores culpa! Possimus vel perspiciatis laudantium. Maxime, asperiores reprehenderit fugit mollitia voluptatum recusandae perferendis facilis alias quis ducimus! Temporibus, excepturi officiis! At veritatis, libero doloremque eligendi voluptatum cupiditate tempora voluptate nobis voluptatibus eum deserunt quis quidem repellat reprehenderit asperiores explicabo. Hic maiores blanditiis nobis quis iure aut in amet nemo laudantium reprehenderit autem dignissimos voluptatem earum recusandae modi adipisci deserunt sunt aliquam ab, dolorem dicta ducimus unde eius at. Iusto, cumque sapiente earum placeat dolorum enim debitis reiciendis vel molestiae, libero officiis ex, sequi repellendus modi similique provident magnam natus facere? Neque, recusandae unde dolor, facere quibusdam iste earum sapiente praesentium ducimus eos, adipisci suscipit dolorum provident rerum labore? Mollitia esse tenetur vitae, alias molestias ipsam consequatur ab facere ad eum minima non voluptatibus vel amet facilis sint illum recusandae, nostrum sed."
    },
    {
        title: "Floods",
        content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident quas, deserunt dolorem amet sapiente sunt veritatis tempore mollitia numquam accusantium eos ad. Facere labore necessitatibus blanditiis repudiandae consequuntur! Deserunt dolor reiciendis cupiditate odio quaerat magnam itaque? Fuga beatae iste enim fugit eos obcaecati tenetur veritatis quod culpa, doloribus pariatur sint ab autem ex ut tempora cum rerum facere? Impedit mollitia delectus incidunt dolore optio iste dolor! Hic ipsam dolores culpa! Possimus vel perspiciatis laudantium. Maxime, asperiores reprehenderit fugit mollitia voluptatum recusandae perferendis facilis alias quis ducimus! Temporibus, excepturi officiis! At veritatis, libero doloremque eligendi voluptatum cupiditate tempora voluptate nobis voluptatibus eum deserunt quis quidem repellat reprehenderit asperiores explicabo. Hic maiores blanditiis nobis quis iure aut in amet nemo laudantium reprehenderit autem dignissimos voluptatem earum recusandae modi adipisci deserunt sunt aliquam ab, dolorem dicta ducimus unde eius at. Iusto, cumque sapiente earum placeat dolorum enim debitis reiciendis vel molestiae, libero officiis ex, sequi repellendus modi similique provident magnam natus facere? Neque, recusandae unde dolor, facere quibusdam iste earum sapiente praesentium ducimus eos, adipisci suscipit dolorum provident rerum labore? Mollitia esse tenetur vitae, alias molestias ipsam consequatur ab facere ad eum minima non voluptatibus vel amet facilis sint illum recusandae, nostrum sed."
    },
    {
        title: "Landslide",
        content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident quas, deserunt dolorem amet sapiente sunt veritatis tempore mollitia numquam accusantium eos ad. Facere labore necessitatibus blanditiis repudiandae consequuntur! Deserunt dolor reiciendis cupiditate odio quaerat magnam itaque? Fuga beatae iste enim fugit eos obcaecati tenetur veritatis quod culpa, doloribus pariatur sint ab autem ex ut tempora cum rerum facere? Impedit mollitia delectus incidunt dolore optio iste dolor! Hic ipsam dolores culpa! Possimus vel perspiciatis laudantium. Maxime, asperiores reprehenderit fugit mollitia voluptatum recusandae perferendis facilis alias quis ducimus! Temporibus, excepturi officiis! At veritatis, libero doloremque eligendi voluptatum cupiditate tempora voluptate nobis voluptatibus eum deserunt quis quidem repellat reprehenderit asperiores explicabo. Hic maiores blanditiis nobis quis iure aut in amet nemo laudantium reprehenderit autem dignissimos voluptatem earum recusandae modi adipisci deserunt sunt aliquam ab, dolorem dicta ducimus unde eius at. Iusto, cumque sapiente earum placeat dolorum enim debitis reiciendis vel molestiae, libero officiis ex, sequi repellendus modi similique provident magnam natus facere? Neque, recusandae unde dolor, facere quibusdam iste earum sapiente praesentium ducimus eos, adipisci suscipit dolorum provident rerum labore? Mollitia esse tenetur vitae, alias molestias ipsam consequatur ab facere ad eum minima non voluptatibus vel amet facilis sint illum recusandae, nostrum sed."
    },
]



function RenderBox(props)
{
    const title = props.title;
    const content = props.content;
    const setIndex = props.func;

    return      ( <>
    <div className="h-3/4 w-3/4 left-48 border-solid border-2 rounded-md border-black fixed top-20 z-10 bg-white text-black px-16 py-6 ">
            <div onClick={()=>{setIndex(-1);}}>
                <ImCross className="my-4"></ImCross>
            </div>
            <h1 className="text-xl font-semibold  mb-2">{title}</h1>
            <p className="text-gray-600">
                {content}
            </p>
    </div></>)
}


function RenderOrNot(prop)
{
    const index = prop.index;
    const func = prop.func;
    console.log("INDEX: ", index)
    if(index===-1)
    {
        return;
    }
    else
    {
        return <RenderBox title={disasterArr[index].title} content={disasterArr[index].content} func={func}/>
    }
}
export default function AwarenessCards() {
    const [index, setIndex] = useState(-1);
  return (
    <div>
      <div>
        <div className="w-full mx-auto">
          <h1 className="mx-auto mt-6 px-6 py-2 shadow-lg shadow-orange-200 mb-6 w-fit text-center text-4xl font-semibold text-white bg-[#f4b124]">
            How to prepare for various natural disasters
          </h1>
        </div>
        <div className="grid grid-cols-6 mx-auto px-20">
          <div className="card1 border-solid col-span-2 my-4 border-2 border-gray-500 shadow-lg rounded-sm shadow-gray-500 w-[80%] mx-auto hover:-translate-y-5 duration-200"  onClick={()=>{setIndex(0);}}>
            <div className="w-full">
              <img
                className="w-full h-48"
                src="https://th.bing.com/th/id/OIP.Zv1XX2JldYmmScgde6J12AHaEo?pid=ImgDet&rs=1"
                alt="Error"
              />
            </div>
            <div className="description my-2 py-2 px-2 mx-2">
              <h1 className="text-lg font-semibold">Earthquake</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos fugiat cum incidunt quidem quasi illum inventore
                libero consequuntur. Officia, repellat sunt! Itaque voluptatum
                doloribus odio dolores nisi dolor facere veritatis!
              </p>
            </div>
          </div>
          <div className="card2 border-solid col-span-2 my-4 border-2 border-gray-500 shadow-lg rounded-sm shadow-gray-500 w-[80%] mx-auto hover:-translate-y-5 duration-200"   onClick={()=>{setIndex(1);}}>
            <div className="w-full">
              <img
                className="w-full h-48"
                src="https://images.pexels.com/photos/11117140/pexels-photo-11117140.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Error"
              />
            </div>
            <div className="description my-2 py-2 px-2 mx-2">
              <h1 className="text-lg font-semibold">Tsunami</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos fugiat cum incidunt quidem quasi illum inventore
                libero consequuntur. Officia, repellat sunt! Itaque voluptatum
                doloribus odio dolores nisi dolor facere veritatis!
              </p>
            </div>
          </div>
          <div className="card3 border-solid col-span-2 my-4 border-2 border-gray-500 shadow-lg rounded-sm shadow-gray-500 w-[80%] mx-auto hover:-translate-y-5 duration-200"   onClick={()=>{setIndex(2);}}>
            <div className="w-full">
              <img
                className="w-full h-48"
                src="https://th.bing.com/th?id=OSK.HERO4Jk2tB9BS53hPfHPeXcPLBtExvYitxIRb1HOwVwXbew&w=472&h=280&c=1&rs=2&o=6&dpr=1.3&pid=SANGAM"
                alt="Error"
              />
            </div>
            <div className="description my-2 py-2 px-2 mx-2">
              <h1 className="text-lg font-semibold">Cyclone</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos fugiat cum incidunt quidem quasi illum inventore
                libero consequuntur. Officia, repellat sunt! Itaque voluptatum
                doloribus odio dolores nisi dolor facere veritatis!
              </p>
            </div>
          </div>
          <div className="card4 border-solid col-span-2 my-4 col-start-2 border-2 border-gray-500 shadow-lg rounded-sm shadow-gray-500 w-[80%] mx-auto hover:-translate-y-5 duration-200"   onClick={()=>{setIndex(3);}}>
            <div className="w-full">
              <img
                className="w-full h-48"
                src="https://th.bing.com/th/id/OIP.-ooEBpj6beZuXlnb7_IZVAHaE8?pid=ImgDet&rs=1"
                alt="Error"
              />
            </div>
            <div className="description my-2 py-2 px-2 mx-2">
              <h1 className="text-lg font-semibold">Floods</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos fugiat cum incidunt quidem quasi illum inventore
                libero consequuntur. Officia, repellat sunt! Itaque voluptatum
                doloribus odio dolores nisi dolor facere veritatis!
              </p>
            </div>
          </div>
          <div className="card5 border-solid col-span-2 my-4 col-start-4 border-2 border-gray-500 shadow-lg rounded-sm shadow-gray-500 w-[80%] mx-auto hover:-translate-y-5 duration-200"   onClick={()=>{setIndex(4);}}>
            <div className="w-full">
              <img
                className="w-full h-48"
                src="https://www.theengineeringcommunity.org/wp-content/uploads/2018/11/Landslide.jpg"
                alt="Error"
              />
            </div>
            <div className="description my-2 py-2 px-2 mx-2">
              <h1 className="text-lg font-semibold">Landslide</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos fugiat cum incidunt quidem quasi illum inventore
                libero consequuntur. Officia, repellat sunt! Itaque voluptatum
                doloribus odio dolores nisi dolor facere veritatis!
              </p>
            </div>
          </div>
        </div>
      </div>

        <RenderOrNot index={index}  func={setIndex}/>
    </div>
  );
}
