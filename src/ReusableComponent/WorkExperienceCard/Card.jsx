import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'


export function Card(props) {

  useEffect(() =>{
    AOS.init({duration:1000})
  },[]);

  return (
    <div data-aos="fade-up" >
    <div  className="w-[100%] sm:w-[80%] m-auto  bg-[color:var(--white)]  shadow-[7px_10px_25px_1px_#000000ad] hover:scale-105 duration-200 rounded-lg">
      <div 
        key={props.id}
        className=" md:flex justify-center items-center  rounded-lg"
      >
        <div className=" flex justify-center items-center">
          <img
            src={props.brandlogo}
            alt="Brand"
            className="w-[60%] md:w-[100%] "
          />
        </div>
        <div className=" flex flex-col justify-center items-center  px-10 py-10 rounded-lg">
          <h1 className="text-[2rem] text-center">{props.jobtitle}</h1>
          <h5 className="text-[1.5rem]">{props.company}</h5>
          <h6 className="text-[.9rem]">{props.duration}</h6>

          <ul>
            {props.responsibility.map((list, index) => (
              <div key={index} className="flex text-[1.2rem]">
                {/* <div className="text-[1.5rem] font-extrabold ">
                  <li></li>
                </div> */}
               <li type="1" > {list}</li>
              </div>
            ))}
          </ul>
        </div>
      </div>
      </div>
    </div>
  );
}
