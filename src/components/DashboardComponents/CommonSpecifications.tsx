import React, { ReactNode } from "react";
import DecreaseIC from "@/Svg/decrease";
import IncreaseIC from "@/Svg/increaseIC";

type type = "none" | "percent" | "price";

interface SpecificationsProps {
  fluctuationType: type;
  fluctuationValue?: number;
  quantity: number;
  subtitle: string;
  color: string;
  icon: ReactNode;
}
const CommonSpecifications: React.FC<SpecificationsProps> = ({
  fluctuationType,
  fluctuationValue,
  quantity,
  subtitle,
  color,
  icon,
}) => {
  return (
    <div className="flex flex-row gap-3 px-8 py-6 w-[212px] h-[116px] bg-white rounded-md shadow-md">
      <div className="icon-box flex items-center justify-center">
        <div
          style={{ backgroundColor: `${color}` }}
          className="flex w-12 h-12 rounded-full items-center justify-center"
        >
          <div className="icon">{icon}</div>
        </div>
      </div>
      <div className="info flex flex-col justify-center">
        <p className="text-normalText text-2xl font-bold">{quantity}</p>
        <p className="text-xs text-subtitleText ">{subtitle}</p>

        {/* Kiểm tra type là price hay percent */}
        {fluctuationType === "price" ? (
          <div className="fluctuation flex flex-row items-center gap-[2px]">
            {/* Kiểm tra giá trị fluctuationValue lớn hay bé hơn 0 */}
            {fluctuationValue !== undefined && fluctuationValue < 0 ? (
              <p className="text-xs text-error">{fluctuationValue}đ</p>
            ) : fluctuationValue !== undefined && fluctuationValue > 0 ? (
              <p className="text-xs text-success">{fluctuationValue}đ</p>
            ) : (
              ""
            )}

            {/* Kiểm tra giá trị fluctuationValue lớn hay bé hơn 0 để đặt icon*/}
            {fluctuationValue !== undefined && fluctuationValue < 0 ? (
              <DecreaseIC fill="#F61317" width="16px" height="16px" />
            ) : fluctuationValue !== undefined && fluctuationValue > 0 ? (
              <IncreaseIC fill="#0DA651" width="16px" height="16px" />
            ) : (
              ""
            )}
          </div>
        ) : fluctuationType === "percent" ? (
          <div className="fluctuation flex flex-row items-center gap-[2px]">
            {/* Kiểm tra giá trị fluctuationValue lớn hay bé hơn 0 */}
            {fluctuationValue !== undefined && fluctuationValue < 0 ? (
              <p className="text-xs text-error">{fluctuationValue}%</p>
            ) : fluctuationValue !== undefined && fluctuationValue > 0 ? (
              <p className="text-xs text-success">{fluctuationValue}%</p>
            ) : (
              ""
            )}

            {/* Kiểm tra giá trị fluctuationValue lớn hay bé hơn 0 để đặt icon*/}
            {fluctuationValue !== undefined && fluctuationValue < 0 ? (
              <DecreaseIC fill="#F61317" width="16px" height="16px" />
            ) : fluctuationValue !== undefined && fluctuationValue > 0 ? (
              <IncreaseIC fill="#0DA651" width="16px" height="16px" />
            ) : (
              ""
            )}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default CommonSpecifications;
