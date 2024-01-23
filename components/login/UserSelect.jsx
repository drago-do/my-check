import React, { useState } from "react";
import Image from "next/image";

const users = [
  { id: 1, name: "userName1", image: "/404.png" },
  { id: 2, name: "userName2", image: "/404.png" },
  { id: 3, name: "userName3", image: "/404.png" },
  { id: 4, name: "userName4", image: "/404.png" },
  { id: 5, name: "userName4", image: "/404.png" },
  { id: 6, name: "userName4", image: "/404.png" },
  { id: 7, name: "userName4", image: "/404.png" },
  { id: 8, name: "userName4", image: "/404.png" },
  { id: 9, name: "userName4", image: "/404.png" },
];

export default function UserList({ handleUserChange, error }) {
  const [activeUserId, setActiveUserId] = useState(null);

  const handleUserClick = (userId) => {
    setActiveUserId(userId);
    handleUserChange(userId);
  };

  return (
    <div className="flex space-x-4 p-4 w-full overflow-scroll">
      {users.map((user) => (
        <div
          key={user.id}
          className={`flex flex-col items-center p-2 ${
            activeUserId === user.id
              ? `${error ? "bg-red-700" : "bg-blue-500"} text-white`
              : ""
          } rounded-lg shadow-md cursor-pointer transition`}
          onClick={() => handleUserClick(user.id)}
        >
          <Image
            src={user.image}
            alt={user.name}
            className="w-16 h-16 rounded-lg mb-2"
            width={40}
            height={40}
          />
          <span className="text-sm">{user.name}</span>
        </div>
      ))}
    </div>
  );
}
