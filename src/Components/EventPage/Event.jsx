import React, { useState } from "react";

const Event = ({ event }) => {
  const [registered, setRegistered] = useState(false);

  const handleRegistration = () => {
    setRegistered(true);
  };

  const buttonText = registered ? "Join Group" : "Register";
  const registrationStatus = registered ? "Registered" : "Not Registered";

  return (
    <div className="bg-white p-4 shadow-lg rounded-lg">
      <h2 className="text-xl font-semibold">{event.title}</h2>
      <p className="text-gray-500">{event.date}</p>
      <p className="mt-2">{event.description}</p>
      <div className="mt-4">
        <button
          onClick={handleRegistration}
          className={`px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300 ease-in-out ${
            registered ? "bg-green-500 hover:bg-green-600" : ""
          }`}
        >
          {buttonText}
        </button>
        <span className="ml-2 font-semibold">{registrationStatus}</span>
      </div>
      {registered && (
        <a
          href={event.link}
          className="block mt-2 text-blue-500 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Event Link
        </a>
      )}
    </div>
  );
};

export default Event;
