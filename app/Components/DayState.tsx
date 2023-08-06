import React from "react";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

interface DayProps {
  day: boolean | undefined;
}
export default function DayState({ day }: DayProps) {
  return (
    <div>
      {day === true ? (
        <CheckIcon fontSize="small" color="success" />
      ) : day == false ? (
        <CloseIcon fontSize="small" color="error" />
      ) : (
        <FiberManualRecordIcon fontSize="small" />
      )}
    </div>
  );
}
