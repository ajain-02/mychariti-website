import React from "react";

export default function CharityItem() {
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <div
        style={{
          flex: 0.1,
        }}
      >
        LOGO
      </div>
      <div
        style={{
            display: "flex",
            flexDirection: "row",
            justifyContent:"space-around",
            height: "250px"

        }}
      >
        <div
         style={{
            flex: 0.1,
          }}
        >
          nAME
        </div>
        <div
         
        >
          REVENUE
        </div>
        <div
         
        >
          RANK
        </div>
      </div>
      {/* <div
        style={{
          display: "flex",
        }}
      >
        INDICATOR
      </div>{" "}
      <div
        style={{
          display: "flex",
        }}
      >
        DESCRIPTION
      </div>
      <div
        style={{
          display: "flex",
        }}
      >
        TAGS
      </div> */}
    </div>
  );
}
