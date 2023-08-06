// import { useState } from "react";
import Image from "next/image";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import DayState from "./Components/DayState";
import Link from "next/link";
export default function Home() {
  // const [dayResult, setDayResult] = useState();
  const habits = {
    "Dormir cedo": {
      "2023-08-03": true,
      "2023-08-02": true,
      "2023-08-01": true,
    },
    Alongar: {
      "2023-08-03": true,
      "2023-08-02": true,
      "2023-08-01": true,
    },
  };
  const weekDays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];
  const todayWeekDay = new Date().getDay();
  console.log(todayWeekDay)
  const sortedWeekDays = weekDays
    .slice(todayWeekDay + 1)
    .concat(weekDays.slice(0, todayWeekDay + 1));
  const handleHabit = () => {
    console.log("alteração de estado");
    // dayResult === true ? setDayResult(!dayResult) : setDayResult(true);
  };
  return (
    <main className="container relative flex flex-col gap-8 px-4 pt-16">
      {habits === null ||
        (Object.keys(habits).length === 0 && (
          <h1 className="mt-20 text-4xl font-light text-gray-100 font-display">
            Você não tem hábitos cadastrados
          </h1>
        ))}
      {habits !== null &&
        Object.entries(habits).map(([habit, habitStreak]) => (
          <div key={habit} className="flex flex-col gap-1">
            <div className="flex justify-between items-center font-sans text-md">
              <span>
                {habit}
                {/* - {JSON.stringify(habitStreak)} */}
              </span>
              <button>
                <DeleteOutlineIcon fontSize="small" color="error" />
              </button>
            </div>
            <section className="grid grid-cols-7 bg-neutral-800 rounded-md p-2">
              {sortedWeekDays.map((day) => (
                <button
                  // onClick={handleHabit}
                  key={day}>
                  <span className="font-sans text-xs text-white">{day}</span>
                  <DayState day={false} />
                </button>
              ))}
            </section>
          </div>
        ))}
      <Link href={`new-habit`} className="fixed text-center bottom-10 w-1/2 left-1/2 -translate-x-1/2 text-neutral-200 bg-green-600 font-display font-regular text-2xl p-2 rounded-md">Novo Hábito</Link>
    </main>
  );
}
