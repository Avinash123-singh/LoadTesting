import React from "react";

const TimeInfo = () => {
  return (
    <div className="w-full sm:w-full md:w-full lg:w-[25%] xl:w-[20%] ml-1 space-y-4">
      {/* Duration Box */}
      <div className="rounded-[10px] border-2 border-[#006064] p-4 flex flex-col items-center justify-center h-24">
        <div className="text-[14px] text-[#006064] font-medium text-center font-[Poppins]">
          Duration
        </div>
        <div className="text-[18px] text-[#006064] font-semibold text-center font-[Poppins]">
          32 min
        </div>
      </div>

      {/* Started On Box */}
      <div className="rounded-[10px] border-2 border-[#006064] p-4 flex flex-col items-center justify-center h-24">
        <div className="text-[14px] text-[#006064] font-medium text-center font-[Poppins]">
          Started On
        </div>
        <div className="text-[18px] text-[#006064] font-semibold text-center font-[Poppins]">
          3:10:04 PM
        </div>
      </div>

      {/* Session Rate Box */}
      <div className="rounded-[10px] border-2 border-[#006064] p-4 flex flex-col items-center justify-center h-24">
        <div className="text-[14px] text-[#006064] font-medium text-center font-[Poppins]">
          Session (rate, per min)
        </div>
        <div className="text-[18px] text-[#006064] font-semibold text-center font-[Poppins]">
          XXX
        </div>
      </div>
    </div>
  );
};

export default TimeInfo;
