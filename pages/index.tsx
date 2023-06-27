// "use client";
import "@/public/globals.css";
import "@/public/style.scss";
import { useState } from "react";
import dayjs from "dayjs";
import Bottles from "@/components/Bottles";

export default function Home() {
  const [item, setItem] = useState("");
  const [date, setDate] = useState(dayjs().format("YYYY-MM-DD"));
  const [type, setType] = useState("");
  return (
    <main className="h-[100vh] min-h-screen">
      <div className="top-container bg-[#274B8A] h-[35%] border-b-2 border-white flex justify-center items-center relative">
        <svg viewBox="0 0 100 100" width="100%" height="auto">
          <path id="MyPath" fill="none" d="m-78,60c55,-32 195,-30 250,0" />
          <path id="MyEngPath" fill="none" d="m-78,70c95,-32 195,-30 250,0" />
          <text
            fill="#AFC8E8"
            fontWeight="bold"
            fontSize="22px"
            textLength="258%"
          >
            <textPath href="#MyPath">自動理財管理系統</textPath>
          </text>
          <text
            fill="#AFC8E8"
            fontWeight="bold"
            fontSize="6px"
            textLength="252%"
          >
            <textPath href="#MyEngPath">
              Automatic Financial Management System
            </textPath>
          </text>
        </svg>
        <p className="sub-title text-white text-2xl absolute bottom-[30%]">
          <span className="font-black">·</span> 六罐子理財法{" "}
          <span className="font-black">·</span>
        </p>
      </div>
      <div className="bottom-container bg-[#4874B4] h-[65%] flex justify-center relative">
        <div className="form-wrap bg-[#AFC8E8] w-[28%]  min-h-fit pt-6 pb-8 flex items-center flex-col absolute top-[-10%] rounded-2xl border-4 border-white">
          <button
            onClick={() => setType("revenue")}
            className={` outline outline-3 outline-white rounded-xl w-[70%] my-6  font-bold text-white  ${
              type === "revenue" ? "bg-[#4874B4]" : "bg-[#AFC8E8] "
            }`}
          >
            收入
          </button>
          <button
            onClick={() => setType("cost")}
            className={` outline outline-3 outline-white rounded-xl w-[70%] my-6  font-bold text-white  ${
              type === "cost" ? "bg-[#4874B4]" : "bg-[#AFC8E8] "
            }`}
          >
            支出
          </button>
          <div className="fee-item w-full flex justify-center">
            <select
              name="item"
              id="item"
              value={item}
              onChange={(e) => setItem(e.target.value)}
              className="outline outline-3 outline-white rounded-xl w-[32%] my-6 bg-[#AFC8E8] font-bold text-white mr-8 px-2"
            >
              <option value="-">項目</option>
            </select>
            <input
              type="text"
              className="outline outline-3 outline-white rounded-xl w-[32%] my-6 bg-[#AFC8E8] font-bold text-white text-center placeholder:text-white focus:placeholder:text-[#ffffff44] focus:outline-2"
              placeholder="備註"
            />
          </div>
          <input
            type="date"
            name=""
            id=""
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
            className=" outline outline-3 outline-white rounded-xl w-[70%] my-6 bg-[#AFC8E8] font-bold text-white px-5"
          />
          <button className=" outline outline-3 outline-white rounded-2xl my-2 px-5 py-1 bg-[#AFC8E8] font-bold text-white hover:bg-white hover:text-[#4874B4]">
            確定
          </button>
          <Bottles />
        </div>
      </div>
      <div className="total-mount fixed bottom-0 w-36 border border-white flex flex-col justify-center items-center bg-[#AFC8E8] text-white font-bold py-3 rounded-2xl">
        <p>目前總資產</p>
        <p>$ 111,111</p>
      </div>
    </main>
  );
}
