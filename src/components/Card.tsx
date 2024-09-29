import React from "react";

type CardProps = {
  id: number;
  company: string;
  title: string;
  desc: string;
  skills: string[];
};

type ListProps = {
  items: string[];
};

const MySkills: React.FC<ListProps> = ({ items }) => {
  return (
    <>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </>
  );
};

const Card = ({ id, company, title, desc, skills }: CardProps) => {
  console.log({ skills });
  return (
    <div key={id} className="myCard">
      <h3>{title}</h3>
      <p>{desc}</p>
      <ul>
        <MySkills items={skills} />
      </ul>
    </div>
  );
};

export default Card;
