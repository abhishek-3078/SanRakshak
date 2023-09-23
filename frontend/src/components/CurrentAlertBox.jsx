import React from "react";
import { MdKeyboardDoubleArrowRight, MdLocationOn } from "react-icons/md";
const CurrentAlertBox = (props) => {

    var clr;
    var sever;

    if(props.severity == '1'){
        sever = "Emergency"
    }
    else if(props.severity == '2'){
        sever = "Disaster"
    }
    else if(props.severity == '3'){
        sever = "Catastrophe"
    }

    if (props.severity == '1') {
        clr = 'bg-green-500'
    }
    else if (props.severity == '2') {
        clr = 'bg-yellow-500'
    }
    else{
        clr = 'bg-red-500'
    }

    function formatDate(timestamp) {
        const date = new Date(timestamp);
      
        const day = date.getDate();
        const monthNames = [
          'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
          'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        ];
        const monthIndex = date.getMonth();
        const year = date.getFullYear();
      
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';
      
        const formattedDate = `${day}${getDaySuffix(day)} ${monthNames[monthIndex]} ${year} | ${formatHour(hours)}:${formatMinute(minutes)} ${ampm}`;
      
        return formattedDate;
      }
      
      function getDaySuffix(day) {
        if (day >= 11 && day <= 13) {
          return 'th';
        }
        switch (day % 10) {
          case 1:
            return 'st';
          case 2:
            return 'nd';
          case 3:
            return 'rd';
          default:
            return 'th';
        }
      }
      
      function formatHour(hour) {
        return hour % 12 === 0 ? '12' : String(hour % 12);
      }
      
      function formatMinute(minute) {
        return String(minute).padStart(2, '0');
      }
      
      const timestamp = props.createdAt
      const formattedDate = formatDate(timestamp);
      console.log("This is the date now : ",formattedDate);

    return (
        <>

            <div className="md:min-w-[47%] md:max-w-[47%] min-w-[95%] max-w-[95%] rounded-md overflow-hidden shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] mt-3 mr-3 ">
                <div className={`flex ${clr} justify-between p-2 text-white text-xl`}>
                    <p>{props.title}</p>
                    <button className="hover:scale-[135%] transition duration-100"><MdKeyboardDoubleArrowRight color="white" size={30} /></button>
                </div>
                <div className="p-2">
                    <div className="flex justify-between text-[13px] font-semibold">
                        <p>{sever}</p>
                        <p className="text-[#b5b5b5]">{formattedDate}</p>
                    </div>
                    <div className="text-[13px] mt-2">
                        <p className="font-semibold">Description of the Alert : </p>
                        <p>{props.description}</p>
                    </div>
                    <div className="flex text-[#b5b5b5] text-[13px] mt-2">
                        <MdLocationOn color="#b5b5b5" size={18} />
                        <p>Affected Areas</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CurrentAlertBox;