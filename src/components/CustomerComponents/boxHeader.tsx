import React from "react";

const boxHeader = () => {
  return (
    <div className="boxHeader flex flex-row">
      <div className="basicDetail flex flex-row bg-white w-full p-6 rounded-md gap-4 ">
        <div className="detail flex flex-row flex-1 gap-4">
          <div className="profileAvt w-[116px] h-[116px] rounded-full bg-slate-300" />
          <div className="flex flex-col justify-center gap-1">
            <p className="Name font-bold text-base">
              {customer ? customer.cus_Name : ""}
            </p>
            <div className="textIcon flex flex-row items-center justify-between gap-3">
              <p className="Gmail text-xs text-navbarText">
                {customer ? customer.cus_Email : ""}
              </p>
              <EditIC width={16} height={16} stroke={"#007AFF"} />
            </div>
            <div className="textIcon flex flex-row items-center justify-between gap-3">
              <p className="Sdt text-xs text-navbarText">0383478483</p>
              <EditIC width={16} height={16} stroke={"#007AFF"} />
            </div>
            <div className="textIcon flex flex-row items-center justify-between gap-3">
              <p className="Address text-xs text-navbarText text-wrap">
                {customer ? customer.cus_Address : ""}
              </p>
              <EditIC width={16} height={16} stroke={"#007AFF"} />
            </div>
          </div>
        </div>

        <div className="detail flex flex-row flex-1 gap-12 justify-center items-center">
          <div className="senderCounterTitle flex flex-col items-center gap-3">
            <p className="text-base text-navbarText font-bold">Đơn gửi</p>
            <p className="senderCounter text-normalText font-bold text-sm">
              23
            </p>
          </div>
          {/* <div className="receiverCounterTitle flex flex-col items-center gap-3">
                      <p className="text-base text-navbarText font-bold">
                        Đơn nhận
                      </p>
                      <p className="receiverCounter text-normalText font-bold text-sm">
                        3
                      </p>
                    </div> */}
          <div className="cancelCounterTitle flex flex-col items-center gap-3">
            <p className="text-base text-navbarText font-bold">Đơn hủy</p>
            <p className="cancelCounter text-normalText font-bold text-sm">1</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default boxHeader;
