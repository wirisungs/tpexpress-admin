import React, { useEffect, useState } from "react";

const Nameplate = React.memo(({ token }: { token: string | undefined }) => {
  const [userName, setUserName] = useState<string>("");
  const [userRole, setUserRole] = useState<string>("");
  // Lưu lại thông tin khi chuyển trang và so sánh để không thay tạo hiệu ứng reload
  const [userSaveName, setUserSaveName] = useState<string>("");
  const [userSaveRole, setUserSaveRole] = useState<string>("");

  const getData = async (token: string) => {
    const res = await fetch("http://localhost:5000/api/user/me", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then(async (res) => {
      const payload = await res.json();
      const resultData = {
        status: res.status,
        payload,
      };
      if (!res.ok) {
        throw resultData;
      }
      return resultData;
    });
    setUserName(res.payload.data?.userName);
    setUserRole(res.payload.data?.userRole);
  };

  useEffect(() => {
    if (userName !== userSaveName || userRole !== userSaveRole) {
      setUserSaveName(userName);
      setUserSaveRole(userRole);
    }
  }, [userName, userRole, userSaveName, userSaveRole]);

  useEffect(() => {
    if (token) {
      getData(token);
    }
  }, [token]); // Thêm dependency token để gọi lại khi token thay đổi

  return (
    <div className="flex flex-col pl-8 pb-4 pt-6 pr-6 h-[78px]">
      <div className="flex flex-row justify-between gap-3 w-full items-center">
        <p className="Username flex text-base font-bold h-full items-center text-ellipsis">
          {userSaveName}
        </p>
      </div>
      <p className="Username flex text-xs text-subtitleText h-full items-center text-ellipsis">
        {userSaveRole === "Driver" ? "Tài xế" : "Quản trị viên"}
      </p>
    </div>
  );
});

Nameplate.displayName = "Nameplate"; // Đặt displayName cho component

export default Nameplate;
