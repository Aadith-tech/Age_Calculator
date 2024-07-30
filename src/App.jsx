import "../dist/output.css";
import icon from "./assets/icon-arrow.svg";
import { useState } from "react";
import Dayerror from "./Dayerror";
import Montherror from "./Montherror";
import Yearerror from "./Yearerror";

import Error from "./Error";
import { useEffect } from "react";
import Display from "./Display";
const data = [
  {
    jan: 31,
    date: 31,
  },
  {
    feb: 28,
    date: 28,
  },
  {
    mar: 31,
    date: 31,
  },
  {
    apr: 30,
    date: 30,
  },
  {
    may: 31,
    date: 31,
  },
  {
    jun: 30,
    date: 30,
  },
  {
    jul: 31,
    date: 31,
  },
  {
    aug: 31,
    date: 31,
  },
  {
    sep: 30,
    date: 30,
  },
  {
    oct: 31,
    date: 31,
  },
  {
    nov: 30,
    date: 30,
  },
  {
    dec: 31,
    date: 31,
  },
];

const fullMonths = [
  "jan",
  "feb",
  "mar",
  "apr",
  "may",
  "jun",
  "jul",
  "aug",
  "sep",
  "oct",
  "nov",
  "dec",
];
const Data = new Date();
function App() {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [displayed, setDisplay] = useState("");
  const [displayed1, setDisplay1] = useState("");
  const [displayed2, setDisplay2] = useState("");
  const [dayerror, setDayError] = useState(false);
  const [montherror, setMonthError] = useState(false);
  const [yearerror, setYearError] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (month > 12) {
      setMonthError(true);
    }

    if (day > data[month - 1]?.date) {
      setDayError(true);
    }

    if (year > Data.getFullYear()) {
      setYearError(true);
    }

    if (
      /^[a-zA-Z0-9]*[a-zA-Z][a-zA-Z0-9]*$/.test(month) ||
      /^[a-zA-Z0-9]*[a-zA-Z][a-zA-Z0-9]*$/.test(day) ||
      /^[a-zA-Z0-9]*[a-zA-Z][a-zA-Z0-9]*$/.test(year)
    ) {
      alert("Sorry, invalid Input");

      setDisplay("");
      setDisplay1("");
      setDisplay2("");

      setDay("");
      setMonth("");
      setYear("");
    }

    return () => [
      setDayError(false),
      setMonthError(false),
      setYearError(false),
    ];
  });

  const getDays = (data) => {
    const someomth = Data.getUTCMonth();
    const currmonth = fullMonths[someomth];
    const actualdays = data.slice(someomth + 1, data.length);
    const todaydays = data[someomth][currmonth] - Data.getDay();
    const res = actualdays.map((val) => {
      return val.date;
    });
    const value = res.reduce((val, acc) => {
      return acc + val;
    }, 0);
    return value + todaydays;
  };

  const yuup = getDays(data);

  const userDays = () => {
    const usermonth = month - 1;
    const usercurrmonth = fullMonths[usermonth];
    const useractualdays = data.slice(usermonth + 1, data.length);
    const usertodaydays = data[usermonth][usercurrmonth] - day;

    const userres = useractualdays.map((val) => {
      return val.date;
    });
    const uservalue = userres.reduce((val, acc) => {
      return acc + val;
    }, 0);
    return uservalue + usertodaydays;
  };

  const theDay = (e) => {
    setDay(e.target.value);
    setError(false);
  };
  const theMonth = (e) => {
    setMonth(e.target.value);
    setError(false);
  };

  const theYear = (e) => {
    setYear(e.target.value);
    setError(false);
  };

  let press = null;
  let yuup1 = null;

  press = () => {
    if (day === "" || month === "" || year === "") {
      setError(true);

      setDisplay("");
      setDisplay1("");
      setDisplay2("");
    }

    if (day && month && year && !dayerror && !yearerror && !montherror) {
      if (month) {
        yuup1 = userDays(data);
      }
      const newYear = Data.getFullYear() - year;
      const newMonth = month - (Data.getUTCMonth() + 1);
      const lossp = yuup - yuup1;

      setDisplay(newYear);
      setDisplay1(newMonth);
      setDisplay2(lossp);

      setDay("");
      setMonth("");
      setYear("");
    }
  };

  return (
    <>
      <main className="rounded-2xl mx-auto max-w-[650px] bg-white min-h-[500px] rounded-br-[200px]">
        <div className="relative right-[75px] top-[50px]">
          {dayerror || montherror || yearerror || error ? (
            <Display color="red" />
          ) : (
            <Display />
          )}

          <div className="grid grid-cols-6 gap-x-[135px] ">
            {dayerror || error ? (
              <input
                className=" col-start-2  text-[32px] cursor-pointer caret-[#854dff] outline-none focus:border-none focus:outline-1 focus:outline-[red] rounded-md w-28 h-14 border border-[red] indent-5 "
                type="text"
                id="day"
                onChange={theDay}
                placeholder="DD"
                value={day}
                required
              />
            ) : (
              <input
                className=" col-start-2  text-[32px] cursor-pointer caret-[#854dff] outline-none focus:border-none focus:outline-1 focus:outline-[#854dff] rounded-md w-28 h-14 border border-[#dbdbdb] indent-5"
                type="text"
                id="day"
                onChange={theDay}
                placeholder="DD"
                value={day}
                required
              />
            )}
            {montherror || error ? (
              <input
                className=" col-start-3 text-[32px] cursor-pointer caret-[#854dff] outline-none focus:border-none focus:outline-1 focus:outline-[red] rounded-md w-28 h-14 border border-[red] indent-5"
                type="text"
                id="month"
                onChange={theMonth}
                placeholder="MM"
                value={month}
                required
              />
            ) : (
              <input
                className=" col-start-3   text-[32px] cursor-pointer caret-[#854dff] outline-none focus:border-none focus:outline-1 focus:outline-[#854dff] rounded-md w-28 h-14 border border-[#dbdbdb] indent-5"
                type="text"
                id="month"
                onChange={theMonth}
                placeholder="MM"
                value={month}
                required
              />
            )}

            {yearerror || error ? (
              <input
                className=" col-start-4 text-[32px] cursor-pointer caret-[#854dff] outline-none focus:border-none focus:outline-1 focus:outline-[red] rounded-md w-28 h-14 border border-[red] indent-3"
                type="text"
                id="year"
                onChange={theYear}
                placeholder="YYYY"
                value={year}
                required
              />
            ) : (
              <input
                className=" col-start-4 text-[32px] cursor-pointer caret-[#854dff] outline-none focus:border-none focus:outline-1 focus:outline-[#854dff] rounded-md w-28 h-14  border border-[#dbdbdb] indent-3"
                type="text"
                id="year"
                onChange={theYear}
                placeholder="YYYY"
                value={year}
                required
              />
            )}

            {dayerror ? <Dayerror /> : null}
            {montherror ? <Montherror /> : null}
            {yearerror ? <Yearerror /> : null}
          </div>
        </div>
        {error ? <Error /> : null}

        <hr className="relative max-w-[480px] top-32  sm:top-32 lg:top-32 md:top-32 left-14" />

        <div className=" lg:left-[220px] sm:left-[-30px] relative left-[-10px] flex items-center justify-center mt-16 md:left-[220px] md:top-7 sm:top-7 top-7 ">
          <img
            className="py-3 px-3 rounded-full hover:bg-black cursor-pointer bg-[#854dff]"
            src={icon}
            alt="arrow icon"
            onClick={press}
          />
        </div>
        <section className="grid grid-cols-3 gap-x-5">
          {displayed ? (
            <>
              <span className="text-[#854dff]  place-self-end font-extrabold col-start-1 text-[85px]">
                {Math.abs(displayed)}
              </span>
              <span className="text-[black] font-extrabold text-[85px]">
                years
              </span>
            </>
          ) : (
            <>
              <span className="text-[#854dff] place-self-end col-start-1 font-extrabold text-[85px]">
                - -
              </span>
              <span className="text-[black] font-extrabold text-[85px]">
                years
              </span>
            </>
          )}

          {displayed1 ? (
            <>
              <span className="text-[#854dff] place-self-end row-start-2 font-extrabold text-[85px]">
                {Math.abs(displayed1)}{" "}
              </span>
              <span className="text-[black] row-start-2 font-extrabold text-[85px]">
                months
              </span>
            </>
          ) : (
            <>
              <span className="text-[#854dff] place-self-end row-start-2 font-extrabold text-[85px]">
                - -
              </span>
              <span className="text-[black] row-start-2 font-extrabold text-[85px]">
                months
              </span>
            </>
          )}

          {displayed2 ? (
            <>
              <span className="text-[#854dff] place-self-end row-start-3 font-extrabold text-[85px]">
                {Math.abs(displayed2)}
              </span>
              <span className="text-[black] row-start-3 font-extrabold text-[85px]">
                days
              </span>
            </>
          ) : (
            <>
              <span className="text-[#854dff] place-self-end row-start-3 font-extrabold text-[85px]">
                - -
              </span>
              <span className="text-[black] row-start-3 font-extrabold text-[85px]">
                days
              </span>
            </>
          )}
        </section>
      </main>
    </>
  );
}

export default App;
