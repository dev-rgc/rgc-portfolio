import React from "react";

type CardProps = {
  id: number;
  company: string;
  title: string;
  desc: string[];
  skills: string[];
};

type ListProps = {
  items: string[];
};

const Descriptions: React.FC<ListProps> = ({ items }) => {
  return (
    <>
      {items.map((item, index) => (
        <p className="text-sm" key={index}>
          - {item}
        </p>
      ))}
    </>
  );
};

const MySkills: React.FC<ListProps> = ({ items }) => {
  return (
    <>
      {items.map((item, index) => (
        <li
          className="bg-[#3a86ff] bg-opacity-40 rounded-full px-4 m-0 text-xs text-[#3a86ff]"
          key={index}
        >
          {item}
        </li>
      ))}
    </>
  );
};

const Card = ({ id, company, title, desc, skills }: CardProps) => {
  console.log({ skills });
  return (
    <div
      key={id}
      className="border-double border-4 border-[#3a86ff] rounded-lg p-3 my-3 shadow-md shadow-black mr-4"
    >
      <h3 className="text-[#f8f9fa]">{title}</h3>
      <div className="my-3">
        <Descriptions items={desc} />
      </div>
      <ul className="flex flex-row flex-wrap justify-start gap-2 m-0 p-0">
        <MySkills items={skills} />
      </ul>
    </div>
  );
};

export default Card;
