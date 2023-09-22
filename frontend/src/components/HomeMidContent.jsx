import React from 'react'

export default function HomeMidContent() {
  return (
    <div className='w-full mb-4'>
      <div className='mx-auto mt-6 px-6 py-1 mb-6 w-fit text-center text-4xl font-semibold text-white bg-[#f4b124]'>
        Here's how we can help
      </div>
      <div className='flex flex-row justify-evenly w-3/4 mx-auto'>
        <div className='border-2 border-solid border-gray-400 rounded-md w-1/4 py-2 px-6 hover:scale-105 duration-200 hover:shadow-lg shadow-md shadow-gray-500'>
            <div className='my-1'>
                <h1 className='text-lg font-semibold'>Early Warning and Alerts</h1>                
            </div>
            <div>
                <p className='text-gray-700'>The app can provide real-time alerts and early warnings about impending disasters. Users can receive notifications about weather conditions, geological activity, or other potential threats in their area, allowing them to take proactive measures.</p>
            </div>
        </div>
        <d className='border-2 border-solid border-gray-400 rounded-md w-1/4 py-2 px-6 hover:scale-105 duration-200 hover:shadow-lg shadow-md shadow-gray-500'>
            <div className='my-1'>
                <h1 className='text-lg font-semibold'>Crowdsourced Data</h1>                
            </div>
            <div>
                <p className='text-gray-700'>The app can collect crowdsourced data from users on road conditions, flooding, and other critical information, which can be used to update maps and inform emergency response efforts.</p>
            </div>
        </d>
        <d className='border-2 border-solid border-gray-400 rounded-md w-1/4 py-2 px-6 hover:scale-105 duration-200 hover:shadow-lg shadow-md shadow-gray-500'>
            <div className='my-1'>
                <h1 className='text-lg font-semibold'>Emergency Services Coordination</h1>                
            </div>
            <div>
                <p className='text-gray-700'>Emergency responders can use the app to coordinate their efforts more efficiently. It can help them track the location of affected individuals, assess the damage, and allocate resources where needed.</p>
            </div>
        </d>
      </div>
    </div>
  )
}
