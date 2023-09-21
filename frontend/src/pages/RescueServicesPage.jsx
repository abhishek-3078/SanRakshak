import ImportantInfoBox from "../components/ImportantInfoBox";
import NavSide from "../components/NavSide";
import Navbar from "../components/Navbar"
import UserMap from "../components/UserMap"
import MissingPeopleDash from "../components/MissingPeopleDash";

function RescueServices(){
    return(
        <>
          <section className="flex flex-col">
                <div>
                    <Navbar></Navbar>
                </div>
                <div className="flex">
                    <div>
                        <NavSide></NavSide>
                    </div>
                    <div className="w-full">
                        <div>
                            <div className="w-full mt-3">
                                <ImportantInfoBox />
                            </div>
                            <div className="flex w-[80vw] mt-10 mx-auto justify-between space-x-5">
                                    <UserMap></UserMap>
                                    <MissingPeopleDash></MissingPeopleDash>
                            </div>
                        </div>
                    </div>
                </div>
          </section>
        </>
    )
}
export default RescueServices;