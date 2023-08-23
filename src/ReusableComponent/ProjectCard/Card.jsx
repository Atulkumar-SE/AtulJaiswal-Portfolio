import {BsArrowRight} from 'react-icons/bs'
import { Link } from "react-router-dom";

export function Card(props) {
  return (
    <div className=" w-fit h-fit p-4 flex flex-col gap-5 rounded-xl hover:scale-105 duration-300 shadow-[0px_8px_30px_0px_rgba(0,0,0,0.3)]">
      <div className=" flex items-center justify-center overflow-hidden">
        <img src={props.thumbnail} alt={props.title}  className=" rounded-xl"/>
      </div>
      <div className="flex flex-col gap-5">
      <h1 className="text-[2rem] font-semibold">
        {props.title}
      </h1>
        <div className="flex justify-between  ">
        <h3 className="flex items-center gap-3 text-[1rem]">Demo <BsArrowRight/></h3>
        <div className="flex gap-5 text-[1.5rem]">
          {props.media.map((list, index) => (
            <div key={index} className="">
              <Link to={list.path} className="hover:text-blue-700">{list.icon}</Link>
            </div>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
}

