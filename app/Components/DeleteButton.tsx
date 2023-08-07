"use client"
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { deleteHabit } from "../actions";

export default function DeleteButton(habit:string) {
  return (
    //@ts-ignore
    <button onClick={() => deleteHabit(habit.habit)}>
      <DeleteOutlineIcon fontSize="small" color="error" />
    </button>
  );
}
