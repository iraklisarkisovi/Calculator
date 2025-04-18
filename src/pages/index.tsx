import { useEffect, useState } from "react";

 
const Numbers = [
  1,2,3,4,5,6,7,8,9,0
]

const Operations = [
  "-", "+", "/", "*"
]

export default function Home() {
  const [number, setNumber] = useState<string[]>([])
  const [output, setOutput] = useState<string>("");
  const [tof, seTof] = useState<boolean>(false);
  

  // useEffect(() => {
  //   console.log(number)
  //   console.log(output)
  // }, [number])
  
  const HandleNumber = (Num: string) => {
    setNumber([...number, Num])
  }

  const HandleAnswer = () => {
    setOutput(eval(number.join("")))
    seTof((prev) => !prev)
    console.log(output);
  }

  return (
    <>
      <div className="flex flex-col min-h-screen items-center justify-center">
        <div className="w-[700px] h-[700px] flex flex-col items-center justify-start bg-[#939393] rounded-xl">
          <div className="flex flex-row items-end justify-start w-[650px] h-[70px] bg-[#c1c1c1] rounded-xl m-5">
            <h1 className="text-3xl mb-3 text-black ml-10">{tof ? output : number}</h1>
            <div className="w-[20px] h-[5px] ml-1 mb-5 bg-[#000] animate-pulse">
              {/* outputunderlinedcursor */}
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center w-[650px] h-auto bg-[#7a7a7a] rounded-xl m-3">
            {Operations.map((item) => (
              <button
                key={item}
                className="p-9 rounded-xl cursor-pointer text-3xl m-2 bg-[#aaa]"
                onClick={() => HandleNumber(item)}
              >
                {item}
              </button>
            ))}
            <button
              className="p-9 rounded-xl cursor-pointer text-3xl m-2 bg-[#aaa]"
              onClick={() => {
                setNumber((prev) => {
                  const newArr = [...prev];
                  newArr.pop();
                  seTof(false);
                  return newArr;
                });
              }}
            >
              X
            </button>
            <button
              className="p-9 rounded-xl cursor-pointer text-3xl m-2 bg-[#aaa]"
              onClick={() => {
                setNumber([]);
                setOutput("")
                seTof(false);

              }}
            >
              C
            </button>
          </div>
          <div className="flex flex-wrap items-center justify-center w-[650px] h-[500px] bg-[#7a7a7a] rounded-xl m-3">
            {Numbers.map((item) => (
              <button
                key={item}
                className="p-10 rounded-xl cursor-pointer text-3xl m-2 bg-[#aaa]"
                onClick={() => HandleNumber(String(item))}
              >
                {item}
              </button>
            ))}
            <button
              className="p-9 rounded-xl cursor-pointer text-3xl m-2 bg-[#535353]"
              onClick={HandleAnswer}
            >
              =
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
