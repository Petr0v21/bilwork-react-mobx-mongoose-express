import React, { useState } from "react";
import SelectCity from "../Forms/SelectCity";

const Filter = () => {
  const [openf, setOpenf] = useState(false);
  const openFilter = () => {
    setOpenf(!openf);
  };
  if (!openf) {
    return <div onClick={openFilter}>Filter</div>;
  }

  return (
    <div className="FilterInputs">
      <div className="FilterOpen">
        <div className="FilterInputs">
          <input type="text" placeholder="What are you Find?" />
          <input type="text" placeholder="" />
          <SelectCity filt={true} />
        </div>
        <div className="ButtonsFilter">
          <div className="CleanFilter" onClick={openFilter}>
            Clean Filter
          </div>
          <div className="ApllyFilter">Apply </div>
        </div>
      </div>
    </div>
  );
};
export default Filter;
