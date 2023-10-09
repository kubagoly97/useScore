import * as React from "react";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { useEffect } from "react";
export default function BasicDateCalendar({
  value,
  setValue,
  matchesData,
  setShowTable,
}) {
  return (
    <>
      <LocalizationProvider
        dateAdapter={AdapterDayjs}
        sx={{ flexGrow: 1, color: "white" }}
      >
        <DemoContainer components={["DateCalendar", "DateCalendar"]}>
          <DateCalendar
            onChange={(newValue) => {
              setValue(
                `${newValue.$y}-${newValue.$M + 1 < 10 ? 0 : ""}${
                  newValue.$M + 1
                }-${newValue.$D < 10 ? 0 : ""}${newValue.$D}`
              );
              setShowTable(false);
            }}
            sx={{
              color: "white",
              ".MuiButtonBase-root": { bgcolor: "#058C42" },
              ".Mui-selected": { bgcolor: "#16DB65" },
              ".MuiPickersDay-root.Mui-selected": { bgcolor: "#16DB65" },
              maxWidth: "100%",
            }}
          />
        </DemoContainer>
      </LocalizationProvider>
    </>
  );
}
