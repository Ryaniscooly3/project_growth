import React from "react";
const VineList = ({ vines, mids }) => {
  return (
    <div className="vine-list">
      {vines.map((vine, i) => (
        <div
          className={`vine${vine.imageNumber % 2 === 0 ? `Even` : `Odd`}`}
          key={i}
        >
          <div className="front">
            <span>
              <img alt={vine.imageNumber} src={vine.src} />
            </span>
          </div>
          {mids.map((mids, i) => (
          <div className="mid">
              <div className="behind" key={i}>
                <img
                  alt={mids.imageNumber}
                  src={mids.src}
                  height="200px"
                  width="200px"
                />
              </div>
          </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default VineList;
