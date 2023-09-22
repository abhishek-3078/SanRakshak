import React from "react";

export default function AlertPage() {
  const expiry = [
    { id: "six", title: "6 hours", key: 1, value: 6 },
    { id: "twelve", title: "12 hours", key: 2, value: 12 },
    { id: "twentyFour", title: "24 hours", key: 3, value: 24 },
    { id: "noExpiry", title: "No expiry", key: 4, value: 0 },
  ];
  const target = [
    { id: "public", title: "Public", key: 1, value: "public" },
    { id: "department", title: "Department", key: 2, value: "department" },
    { id: "district", title: "District", key: 3, value: "district" },
  ];

  return (
    <div className="w-1/3">
      <div>
        <h1 className="text-2xl font-semibold text-blue-500 mx-4">
          Create an alert
        </h1>
        <div className="border-solid border-2 border-gray-500 py-4 px-4 rounded-md">
          <div className="mx-2">
            <h1 className="text-base font-medium">Alert Details</h1>
            <p className="text-gray-500">
              Choose the type of alert, target users and set an expiry on this
              alert.
            </p>
          </div>
          <div className="grid grid-cols-2 my-2">
            {/* {alert.map(({ id, type, title, key }) => {
              return (
                <div key={key} className="flex flex-col mx-2">
                  <label htmlFor={id}>{title}</label>
                  <input
                    className="outline-0 border-solid border-2 border-gray-300 rounded-sm w-auto"
                    type={type}
                    id={id}
                    name={id}
                  />
                </div>
              );
            })} */}
            <div className="flex flex-col mx-2">
              <label htmlFor="type">Type*</label>
              <input
                className="outline-0 border-solid border-2 border-gray-300 rounded-sm w-auto"
                type="text"
                id="type"
                name="type"
                placeholder="eg. Eathquake, cyclone.."
              />
            </div>
            {/* <div className="flex flex-col mx-2">
              <label htmlFor="rainfall">Rainfall(in cms)</label>
              <input
                className="outline-0 border-solid border-2 border-gray-300 rounded-sm w-auto"
                type="text"
                id="rainfall"
                name="rainfall"
              />
            </div> */}
            <div className="flex flex-col mx-2">
              <label htmlFor="title">Title</label>
              <input
                className="outline-0 border-solid border-2 border-gray-300 rounded-sm w-auto"
                type="text"
                id="title"
                name="title"
                placeholder="Title"
              />
            </div>
            <div className="flex flex-col mx-2">
            <label htmlFor="severity">Severity</label>
              <select
                name="severity"
                id="severity"
                className="outline-0 border-solid border-2 border-gray-300 rounded-sm w-auto"
              >
                <option value="0">Emergency</option>
                <option value="1">Disaster</option>
                <option value="2">Catastrophe</option>
              </select>
            </div>
          </div>
          <div className="mx-2 my-2">
            <h1>Description</h1>
            <textarea placeholder="Describe the conditions in brief." className="outline-0 border-solid resize-none w-full border-2 h-1/6 border-gray-300 rounded-sm"></textarea>
          </div>
          <div className="mx-2 my-2">
            <h1>Target</h1>
            <div className="flex space-x-3">
              {target.map(({ id, title, key, value }) => {
                return (
                  <div key={key} className="space-x-1">
                    <input
                      type="checkbox"
                      className="focus:ring-0"
                      id={id}
                      name={id}
                      value={value}
                    />
                    <label htmlFor={id}>{title}</label>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="mx-2 my-2">
            <h1>Expiry</h1>
            <div className="flex space-x-3">
              {expiry.map(({ id, title, key, value }) => {
                return (
                  <div key={key} className="space-x-1">
                    <input
                      type="radio"
                      id={id}
                      className="focus:ring-0"
                      name="expiryTime"
                      value={value}
                    />
                    <label htmlFor={id}>{title}</label>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="mx-2 my-2">
            <h1>Instructions</h1>
            <textarea placeholder="Instructions to be followed." className="outline-0 border-solid border-2 w-full h-1/6 resize-none border-gray-300 rounded-sm"></textarea>
          </div>
          <div className="mx-2 my-2">
            <h1>Attach Media</h1>
            <link
              rel="stylesheet"
              href="https://unpkg.com/flowbite@1.4.4/dist/flowbite.min.css"
            />
            <div class="max-w-2xl mx-auto">
              <label
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                for="file_input"
              >
                Upload file
              </label>
              <input
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                id="file_input"
                type="file"
              />
              <script src="https://unpkg.com/flowbite@1.4.0/dist/flowbite.js"></script>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
{
  /*  */
}
{
  /* <input type="checkbox" id="six" name="vehicle1" value="Bike" />
          <label htmlFor="six"> I have a bike</label>
          <input type="checkbox" id="twelve" name="vehicle2" value="Car" />
          <label htmlFor="twelve"> I have a car</label>
          <input type="checkbox" id="twentyFour" name="vehicle3" value="Boat" />
          <label htmlFor="twentyFour"> I have a boat</label>
          <input type="checkbox" id="noExpiry" name="vehicle3" value="Boat" />
          <label htmlFor="noExpiry"> I have a boat</label>
          <input type="submit" value="Submit" /> */
}
