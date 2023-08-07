import { kv } from "@vercel/kv";
import Link from "next/link";
import React from "react";
import Calendar from "../Components/Calendar";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";


function getDaysInMonth(month: number, year: number) {
  const date = new Date(year, month, 1);
  const firstMonthWeekDay = date.getDay();
  const emptyDays = Array(firstMonthWeekDay).fill(null);
  const days = [...emptyDays];
  while (date.getMonth() === month) {
    days.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }
  return days;
}

export default async function Habit({
  params: { habit },
}: {
  params: { habit: string };
}) {
  const currentDate = new Date();
  const currentDay = currentDate.getDay();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  const decodedHabit = decodeURI(habit);
  const habitStreak: Record<string, boolean> | null = await kv.hget("habits", decodedHabit);
  const daysInMonth = getDaysInMonth(currentMonth, currentYear);
  return (
    <main className="container relative flex flex-col gap-8 px-12 pt-16">
      <h1 className="text-3xl text-white text-cente font-light font-display">
        {decodedHabit}
      </h1>
      <Link
        href={`/`}
        className="flex font-sans text-xs text-neutral-200 items-center justify-start"
      >
        <KeyboardArrowLeftIcon fontSize="medium" />
        Voltar
      </Link>
      <Calendar habit={decodedHabit} habitStreak={habitStreak} />
    </main>
  );
}
