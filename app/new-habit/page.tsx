import Link from "next/link";
import React from "react";

export default function newHabit() {
  async function newHabit(formData: FormData) {
    "use server";
    const habit = formData.get("habit")
    console.log(habit)
  }
  return (
    <main className="container relative flex flex-col gap-8 px-12 pt-16">
      <h1 className=" text-4xl font-light text-white text-center font-display">
        Novo hábito
      </h1>
      <form action={newHabit} className="flex flex-col gap-4 mt-4">
        <input
          type="text"
          name="habit"
          id="habit"
          className="p-2 font-sans text-xl text-white rounded-md bg-neutral-800"
        />

        <button className=" text-neutral-200 bg-green-600 font-display font-regular text-2xl p-2 rounded-md">
          Cadastrar
        </button>
        <Link
          className=" text-red-700 text-center bg-neutral-800 font-display font-regular text-2xl p-2 rounded-md"
          href={`/`}
        >
          <button>Cancelar</button>
        </Link>
      </form>
    </main>
  );
}
