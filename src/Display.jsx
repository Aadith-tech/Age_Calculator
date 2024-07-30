const Display = (props) => {
  let data = "";
  let data2 = "";
  let data3 = "";

  if (props.color === "red") {
    data =
      "font-extrabold tracking-[3px] relative right-[105px] text-[10px] text-[red] ";
    data2 =
      "text-[red] font-extrabold tracking-[3px] relative right-5 text-[10px]";
    data3 =
      " text-[red] font-extrabold tracking-[3px] relative left-10 text-[10px]";
  } else {
    data =
      "font-extrabold tracking-[3px] relative right-[105px] text-[10px] text-[#716f6f] ";
    data2 =
      "text-[#716f6f] font-extrabold tracking-[3px] relative right-5 text-[10px]";
    data3 =
      " text-[#716f6f] font-extrabold tracking-[3px] relative left-10 text-[10px]";
  }

  return (
    <>
      <div className="flex justify-center gap-5 mb-1 mt-28">
        <label htmlFor="day" className={data}>
          DAY
        </label>
        <label htmlFor="month" className={data2}>
          MONTH
        </label>
        <label htmlFor="year" className={data3}>
          YEAR
        </label>
      </div>
    </>
  );
};

export default Display;
