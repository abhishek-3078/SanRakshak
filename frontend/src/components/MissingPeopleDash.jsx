import React from 'react'
import './NewsBoxUser.css'

const title= "This is the title"
const text = "Contains detail about the news, the person went missing on the evening of the 29th at Jamnanagar. She is 6 years old and has a ponytail a the back of her head"
const link = ""



const MissingPersonItem = (props) => {
    const title = props.title;
    const text = props.text;
    const link = props.link;
    return (
        <div className="bg-blue">
            <div className="">
                <h1>Daughter Missing</h1>
            </div>


            <div className="">
                <div className="">
                </div>
            </div>
        </div>
    )
}
const NewsItem = (props) => {

    const title = props.title;
    const text = props.text;
    const link = props.link;
    return (
        <div className="newsItem">
            <div className="newsItemHeading">
                <h1>Title</h1>
            </div>


            <div className="newsItemDetail overflow-auto">
                <div className="newsBody overflow-auto">
                    Contains detail about the news, the person went missing on the evening of the 29th at Jamnanagar. She is 6 years old and has a ponytail a the back of her head.
                </div>
            </div>
        </div>
    )
}

const MissingPeopleDash = () => {
  return (<>
    <div className="newsboxUser w-full h-full">
        <div className="newsboxUserHeading">
            <h1>News/Missing People</h1>
        </div>


        <div className="multipleNewsItemContainer">
            <NewsItem title={title} text={text} link={link}></NewsItem>
            <NewsItem title={title} text={text} link={link}></NewsItem>
            <NewsItem title={title} text={text} link={link}></NewsItem>
            <NewsItem title={title} text={text} link={link}></NewsItem>
            <NewsItem title={title} text={text} link={link}></NewsItem>

            {/* <MissingPersonItem title={title} text={text} link={link}/> */}
        </div>
    </div>
  </>
  )
}

export default MissingPeopleDash