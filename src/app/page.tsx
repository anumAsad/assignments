import Image from "next/image";

export default function Home() {
  return (
   <div className="grid grid-cols-10 grid-rows-5 gap-x-5 gap-y m-6
    bg-amber-100  place-content-center w-3/5 min-h-screen	 " >

    <div className="bg-teal-300 row-span-5 col-span-2  text-center"><b>AG1</b> 
    <br></br>2 of 10</div>
    <div className="bg-amber-200 col-span-6 text-center "><b>AG2</b> 
    <br></br>6 of 10</div>
    <div className="bg-teal-300 row-span-5 col-span-2 text-center "><b>AG3</b> 
    <br></br>2 of 10(omega)</div>
    <div className="bg-red-300 text-center col-span-3"><b>AG4</b> 
    <br></br>3 of 6</div>
    <div className="bg-red-300 text-center col-span-3"  ><b>AG5</b> 
    <br></br>3 of 6(omega)</div>
    <div className="bg-orange-400 row-span-3 col-span-2 text-center"><b>AG6</b> 
    <br></br>2 of 6</div>
    <div className="bg-yellow-300 col-span-4 text-center" ><b>AG7</b> 
    <br></br>4 of 6(omega)</div>
    <div className="bg-red-300  text-center col-span-2 "><b>AG8</b> 
    <br></br>2 of 4</div>
    <div className="bg-red-300  text-center col-span-2"><b>AG9</b> 
    <br></br>2 of 4(omega)</div>
    <div className="bg-pink-300  text-center col-span-4"><b>AG10</b> 
    <br></br>auto</div>

    
   </div>
   
   
    
  );
}