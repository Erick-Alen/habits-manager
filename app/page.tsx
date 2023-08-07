import DayState from "./Components/DayState";
import Link from "next/link";
import { kv } from "@vercel/kv";
import DeleteButton from "./Components/DeleteButton";

//caso o habito exista, o conjunto será uma chave string e um valor booleano
export type Habits = {
  [habit: string]: Record<string, boolean>;
} | null;

export default async function Home() {
  const habits: Habits = await kv.hgetall("habits");
  const weekDays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];
  const todayWeekDay = new Date().getDay();
  const sortedWeekDays = weekDays
    .slice(todayWeekDay + 1)
    .concat(weekDays.slice(0, todayWeekDay + 1));

  const lastSevenDays = weekDays
    .map((_, index) => {
      const date = new Date();
      date.setDate(date.getDate() - index);
      return date.toISOString().slice(0, 10);
    })
    .reverse();

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
              {/* @ts-ignore */}
              <DeleteButton habit={habit} />
            </div>
            <Link href={`/${habit}`}>
              <section className="grid grid-cols-7 bg-neutral-800 rounded-md p-2">
                {sortedWeekDays.map((day, index) => (
                  <button key={day}>
                    <span className="font-sans text-xs text-white">{day}</span>
                    <DayState day={habitStreak[lastSevenDays[index]]} />
                  </button>
                ))}
              </section>
            </Link>
          </div>
        ))}
      <Link
        href={`new-habit`}
        className="fixed text-center bottom-10 w-1/2 left-1/2 -translate-x-1/2 text-neutral-200 bg-green-600 font-display font-regular text-2xl p-2 rounded-md"
      >
        Novo Hábito
      </Link>
    </main>
  );
}
