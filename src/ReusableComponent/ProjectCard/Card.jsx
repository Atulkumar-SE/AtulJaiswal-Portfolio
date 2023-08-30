import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

export function Card(props) {
  return (
    <div
      className=" w-[18rem] h-[20rem]  flex flex-col gap-5 justify-end rounded-xl hover:scale-105 group duration-300 shadow-[0px_8px_30px_0px_rgba(0,0,0,0.3)] overflow-hidden"
      style={{
        backgroundImage: `url(${props.thumbnail})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className=" h-[6rem] group-hover:h-[13rem] duration-200 flex flex-col gap-14 p-5 text-white bg-[#00000099] rounded-lg">
        <h1 className="text-[1.2rem] font-semibold">{props.title}</h1>
        <div className="flex justify-between  ">
          <h3 className="flex items-center gap-3 text-[1rem]">
            Demo <BsArrowRight />
          </h3>
          <div className="flex gap-5 text-[2rem]">
            {props.media.map((list, index) => (
              <div key={index} className="">
                <Link to={list.path} className="hover:text-[#f8f05a]">
                  {list.icon}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
