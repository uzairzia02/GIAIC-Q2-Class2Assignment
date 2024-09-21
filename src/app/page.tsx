import Image from "next/image";
import profilePic from "./profilePicPng.png";

export default function Home() {
  return (
    <>
      <div className="mainContainer">
        <div className="description">
          Hi everyone, <br />
          My name is <span className="greenColor">Uzair Zia</span> <br />
          <br />
          <p className="shortDescription">I am student of GIAIC</p>
          <p className="aboutMe">
            At GIAC, I completed Quarter 1 with a focus on learning TypeScript.
            Now in Quarter 2, I am learning Next.js
          </p>
        </div>
        <div className="image">
          <Image src={profilePic} alt="profilepic" height={800} width={700} />
        </div>
      </div>
    </>
  );
}
