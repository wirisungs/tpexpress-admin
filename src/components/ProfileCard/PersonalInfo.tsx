import React from 'react';

interface PersonalInfoProps {
    name: string;
    email: string;
    phone: string;
    address: string;
    avatarSrc: string;
}

<<<<<<< Updated upstream
const PersonalInfo: React.FC<PersonalInfoProps> = ({ name, email, phone, address, avatarSrc }) => {
    return (
        <div className="flex gap-4 items-center self-stretch my-auto text-base min-w-[240px] text-stone-500">
            <img loading="lazy" src={avatarSrc} alt={`Avatar of ${name}`} className="object-contain shrink-0 self-stretch my-auto rounded-full aspect-square shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[116px]" />
            <div className="flex flex-col justify-center self-stretch my-auto">
                <h2 className="text-2xl font-bold text-zinc-900">{name}</h2>
                <div className="flex gap-3 justify-center items-center self-start mt-1 whitespace-nowrap">
                    <span className="self-stretch my-auto">{email}</span>
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/dc0f2a230dc91a4851ef133df079d62b8a86b023b5a88d59eb2e8e467f597e27?placeholderIfAbsent=true&apiKey=15b59fc130e4444f91de6f123898acea" alt="" className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square" />
                </div>
                <div className="flex gap-3 justify-center items-center self-start mt-1 whitespace-nowrap">
                    <span className="self-stretch my-auto">{phone}</span>
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/dc0f2a230dc91a4851ef133df079d62b8a86b023b5a88d59eb2e8e467f597e27?placeholderIfAbsent=true&apiKey=15b59fc130e4444f91de6f123898acea" alt="" className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square" />
                </div>
                <div className="flex gap-3 justify-center items-center mt-1">
                    <span className="self-stretch my-auto">{address}</span>
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/dc0f2a230dc91a4851ef133df079d62b8a86b023b5a88d59eb2e8e467f597e27?placeholderIfAbsent=true&apiKey=15b59fc130e4444f91de6f123898acea" alt="" className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square" />
                </div>
            </div>
=======
const PersonalInfo: React.FC<PersonalInfoProps> = ({
  name,
  email,
  phone,
  address,
  avatarSrc,
}) => {
  return (
    <div className="flex gap-4 items-center self-stretch my-auto text-xs min-w-[240px] text-stone-500">
      <Image
        loading="lazy"
        src={avatarSrc}
        alt={`Avatar of ${name}`}
        className="object-contain shrink-0 self-stretch my-auto rounded-full aspect-square shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[116px]"
      />
      <div className="flex flex-col justify-center self-stretch my-auto">
        <h2 className="text-2xl font-bold text-zinc-900">{name}</h2>
        <div className="flex gap-3 justify-center items-center self-start mt-1 whitespace-nowrap">
          <span className="self-stretch my-auto">{email}</span>
          <Image
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/dc0f2a230dc91a4851ef133df079d62b8a86b023b5a88d59eb2e8e467f597e27?placeholderIfAbsent=true&apiKey=15b59fc130e4444f91de6f123898acea"
            alt=""
            className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
          />
>>>>>>> Stashed changes
        </div>
    );
};

export default PersonalInfo;