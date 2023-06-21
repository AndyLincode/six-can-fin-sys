export default function Home() {
  return (
    <main className="h-[100vh]">
      <div className="top-container bg-[#274B8A] h-[35%] border-b-2 border-white flex justify-center items-center relative">
        <svg viewBox="0 0 100 100" width="100%" height="auto">
          <path id="MyPath" fill="none" d="m-78,65c60,-30 200,-30 250,0" />
          <path id="MyEngPath" fill="none"  d="m-78,75c100,-30 200,-30 250,0" />
          <text fill="#AFC8E8" fontWeight="bold" fontSize="22px" textLength='258%'>
            <textPath href="#MyPath">自動理財管理系統</textPath>
          </text>
          <text fill="#AFC8E8" fontWeight="bold" fontSize="6px" textLength='252%'>
            <textPath href="#MyEngPath">
              Automatic Financial Management System
            </textPath>
          </text>
        </svg>
        <p className="sub-title text-white text-2xl absolute bottom-12"><span className="font-black">·</span> 六罐子理財法 <span className="font-black">·</span></p>
      </div>
      <div className="bottom-container bg-[#4874B4] h-[65%] flex justify-center relative">
        <div className="form-wrap bg-[#AFC8E8] w-[30%] h-fit py-5 flex items-center flex-col absolute top-[-6%] rounded-2xl">
          <button className=" outline outline-3 outline-white rounded-xl w-[70%] my-3 bg-[#AFC8E8] font-bold text-white">收入</button>
          <button className=" outline outline-3 outline-white rounded-xl w-[70%] my-3 bg-[#AFC8E8] font-bold text-white">支出</button>
          <div className="fee-item w-full flex justify-center">
            <select name="item" id="item" className="outline outline-3 outline-white rounded-xl w-[32%] my-3 bg-[#AFC8E8] font-bold text-white mr-8 px-2">
              <option value="-" selected>項目</option>
            </select>
            <input type="text" className="outline outline-3 outline-white rounded-xl w-[32%] my-3 bg-[#AFC8E8] font-bold text-white" />
          </div>
          
        </div>
      </div>
    </main>
  );
}
