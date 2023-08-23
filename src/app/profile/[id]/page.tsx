import React from "react";

export default function userProfile({ params }: any) {
  return (
    <div className="py-4">
      <h1>
        userProfile :{" "}
        <span className="bg-orange-500 px-2 py-1 text-black font-bold">
          {params.id}
        </span>
      </h1>
    </div>
  );
}
