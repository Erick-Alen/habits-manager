"use server"
import { kv } from "@vercel/kv"
import { revalidatePath } from "next/cache"

export async function deleteHabit(habit: string) {
  await kv.hdel("habits", habit)
  console.log("deletou", habit)
  revalidatePath("/")
}

type toggleHabitProps = {
  habit: string,
  habitStreak: any,
  date: string|null,
  done?: boolean
}

export async function toggleHabit({ habit, habitStreak, date, done }: toggleHabitProps) {
  console.log("habit", habit)
  console.log("habitStreak", habitStreak)
  console.log("date", date)
  console.log("done", done)
  if (!habitStreak || !date) {
    return;
  }
  const updatedHabitStreak = {
    [habit]: {
      ...habitStreak,
      [date]: done === undefined ? true : !done
    }
  }
  console.log(updatedHabitStreak)

  try {
    // Ensure that kv is properly initialized before calling hset
    await kv.hset("habits", updatedHabitStreak)
    revalidatePath("/")
  } catch (error) {
    // Handle any errors that occur during the process
    console.error(error);
  }

}
