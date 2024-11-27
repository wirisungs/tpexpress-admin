"use client";

import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

type UsernameContextType = {
  fullName: string | null;
  setFullName: Dispatch<SetStateAction<string | null>>;
};

const UsernameContext = createContext<UsernameContextType | null>(null);
export const UsernameProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [fullName, setFullName] = useState<string | null>(null);

  useEffect(() => {
    const storedUsername = localStorage.getItem("userName");
    if (storedUsername) {
      setFullName(storedUsername);
    }
  }, []);
  return (
    <UsernameContext.Provider value={{ fullName, setFullName }}>
      {children}
    </UsernameContext.Provider>
  );
};

export const useUserName = () => {
  const fullName = useContext(UsernameContext);
  if (!fullName) {
    throw new Error("fullName phải được sử dụng trong UserNameProvider");
  }
  return fullName;
};
