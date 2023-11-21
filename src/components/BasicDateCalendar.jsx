import * as React from "react";
import dayjs from "dayjs";
import Badge from "@mui/material/Badge";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { PickersDay } from "@mui/x-date-pickers/PickersDay";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { DayCalendarSkeleton } from "@mui/x-date-pickers/DayCalendarSkeleton";
import { useState, useEffect } from "react";
/**
 * Mimic fetch with abort controller https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort
 * ⚠️ No IE11 support
 */
function fakeFetch(matchesData, date, { signal }) {
  return new Promise((resolve, reject) => {
    const timeout = setTimeout(() => {
      const daysInMonth = date.daysInMonth();
      // console.log(
      //   date,
      //   `${date.$M === 11 ? date.$y + 1 : date.$y}-${date.$M < 8 ? "0" : ""}${
      //     date.$M === 11 ? "01" : date.$M + 2
      //   }`
      // );
      console.log(
        matchesData.slice(
          matchesData.findIndex((match) =>
            match.match_date.includes(
              `${date.$y}-${date.$M < 9 ? "0" : ""}${date.$M + 1}`
            )
          ),
          matchesData.findIndex((match) =>
            match.match_date.includes(
              `${date.$M === 11 ? date.$y + 1 : date.$y}-${
                date.$M < 8 ? "0" : ""
              }${date.$M === 11 ? "01" : date.$M + 2}`
            )
          )
        ).length > 10
          ? matchesData.slice(
              matchesData.findIndex((match) =>
                match.match_date.includes(
                  `${date.$y}-${date.$M < 9 ? "0" : ""}${date.$M + 1}`
                )
              ),
              matchesData.findIndex((match) =>
                match.match_date.includes(
                  `${date.$M === 11 ? date.$y + 1 : date.$y}-${
                    date.$M < 8 ? "0" : ""
                  }${date.$M === 11 ? "02" : date.$M + 2}`
                )
              )
            )
          : matchesData.slice(
              matchesData.findIndex((match) =>
                match.match_date.includes(
                  `${date.$y}-${date.$M < 9 ? "0" : ""}${date.$M + 1}`
                )
              ),
              matchesData.findIndex((match) =>
                match.match_date.includes(
                  `${date.$M === 11 ? date.$y + 1 : date.$y}-${
                    date.$M < 8 ? "0" : ""
                  }${date.$M === 11 ? "01" : date.$M + 2}`
                )
              )
            )
      );
      let daysToHighlight =
        matchesData.slice(
          matchesData.findIndex((match) =>
            match.match_date.includes(
              `${date.$y}-${date.$M < 9 ? "0" : ""}${date.$M + 1}`
            )
          ),
          matchesData.findIndex((match) =>
            match.match_date.includes(
              `${date.$M === 11 ? date.$y + 1 : date.$y}-${
                date.$M < 8 ? "0" : ""
              }${date.$M === 11 ? "01" : date.$M + 2}`
            )
          )
        ).length > 10
          ? matchesData
              .slice(
                matchesData.findIndex((match) =>
                  match.match_date.includes(
                    `${date.$y}-${date.$M < 9 ? "0" : ""}${date.$M + 1}`
                  )
                ),
                matchesData.findIndex((match) =>
                  match.match_date.includes(
                    `${date.$M === 11 ? date.$y + 1 : date.$y}-${
                      date.$M < 8 ? "0" : ""
                    }${date.$M === 11 ? "02" : date.$M + 2}`
                  )
                )
              )
              .map((match) => Number(match.match_date.slice(8)))
          : matchesData
              .slice(
                matchesData.findIndex((match) =>
                  match.match_date.includes(
                    `${date.$y}-${date.$M < 9 ? "0" : ""}${date.$M + 1}`
                  )
                ),
                matchesData.findIndex((match) =>
                  match.match_date.includes(
                    `${date.$M === 11 ? date.$y + 1 : date.$y}-${
                      date.$M < 8 ? "0" : ""
                    }${date.$M === 11 ? "01" : date.$M + 2}`
                  )
                )
              )
              .map((match) => Number(match.match_date.slice(8)));
      resolve({ daysToHighlight });
    }, 500);
    signal.onabort = () => {
      clearTimeout(timeout);
      reject(new DOMException("aborted", "AbortError"));
    };
  });
}

let initialValue = dayjs(new Date().toJSON().slice(0, 10));

function ServerDay(props) {
  const { highlightedDays = [], day, outsideCurrentMonth, ...other } = props;

  const isSelected =
    !props.outsideCurrentMonth &&
    highlightedDays.indexOf(props.day.date()) >= 0;

  return (
    <Badge
      key={props.day.toString()}
      overlap="circular"
      badgeContent={isSelected ? "⚽️" : undefined}
    >
      <PickersDay
        {...other}
        outsideCurrentMonth={outsideCurrentMonth}
        day={day}
      />
    </Badge>
  );
}

export default function DateCalendarServerRequest({
  value,
  setValue,
  setShowTable,
  matchesData,
  month,
}) {
  const requestAbortController = React.useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [highlightedDays, setHighlightedDays] = useState([1, 2, 3, 4, 5, 6]);

  const fetchHighlightedDays = (date) => {
    const controller = new AbortController();
    fakeFetch(matchesData, date, {
      signal: controller.signal,
    })
      .then(({ daysToHighlight }) => {
        setHighlightedDays(daysToHighlight);
        setIsLoading(false);
      })
      .catch((error) => {
        // ignore the error if it's caused by `controller.abort`
        if (error.name !== "AbortError") {
          throw error;
        }
      });

    requestAbortController.current = controller;
  };

  const handleMonthChange = (date) => {
    if (requestAbortController.current) {
      //  setMonth()
      console.log(`${date.$y}-${date.$M < 9 ? "0" : ""}${date.$M + 1}`);
      // make sure that you are aborting useless requests
      // because it is possible to switch between months pretty quickly
      requestAbortController.current.abort();
    }

    setIsLoading(true);
    setHighlightedDays([]);
    fetchHighlightedDays(date);
  };

  useEffect(() => {
    fetchHighlightedDays(initialValue);
    // abort request on unmount
    return () => requestAbortController.current?.abort();
  }, []);

  return (
    <LocalizationProvider
      dateAdapter={AdapterDayjs}
      sx={{ flexGrow: 1, color: "white" }}
    >
      <DateCalendar
        sx={{
          color: "white",
          ".MuiButtonBase-root": { bgcolor: "#058C42" },
          ".Mui-selected": { bgcolor: "#16DB65" },
          ".MuiPickersDay-root.Mui-selected": { bgcolor: "#16DB65" },
          maxWidth: "100%",
        }}
        defaultValue={initialValue}
        onChange={(newValue) => {
          setValue(
            `${newValue.$y}-${newValue.$M + 1 < 10 ? 0 : ""}${
              newValue.$M + 1
            }-${newValue.$D < 10 ? 0 : ""}${newValue.$D}`
          );
          setShowTable(false);
          // console.log(
          //   matchesData.findIndex((match) =>
          //     match.match_date.includes("2023-11")
          //   ),
          //   matchesData
          //     .slice(
          //       matchesData.findIndex((match) =>
          //         match.match_date.includes("2023-11")
          //       ),
          //       matchesData.findIndex((match) =>
          //         match.match_date.includes("2023-12")
          //       )
          //     )
          //     .map((match) => Number(match.match_date.slice(8)))
          // );
          console.log(highlightedDays);
        }}
        loading={isLoading}
        onMonthChange={handleMonthChange}
        renderLoading={() => <DayCalendarSkeleton />}
        slots={{
          day: ServerDay,
        }}
        slotProps={{
          day: {
            highlightedDays,
          },
        }}
      />
    </LocalizationProvider>
  );
}

// import * as React from "react";
// import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
// import { useState } from "react";

// export default function BasicDateCalendar({ value, setValue, setShowTable }) {
//   const [highlightedDays, setHighlightedDays] = useState([1, 2, 13]);
//   return (
//     <>
//       <LocalizationProvider
//         dateAdapter={AdapterDayjs}
//         sx={{ flexGrow: 1, color: "white" }}
//       >
//         <DemoContainer components={["DateCalendar"]}>
//           <DemoItem>
//             <DateCalendar
//               onChange={(newValue) => {
//                 setValue(
//                   `${newValue.$y}-${newValue.$M + 1 < 10 ? 0 : ""}${
//                     newValue.$M + 1
//                   }-${newValue.$D < 10 ? 0 : ""}${newValue.$D}`
//                 );
//                 setShowTable(false);
//               }}
//               sx={{
//                 color: "white",
//                 ".MuiButtonBase-root": { bgcolor: "#058C42" },
//                 ".Mui-selected": { bgcolor: "#16DB65" },
//                 ".MuiPickersDay-root.Mui-selected": { bgcolor: "#16DB65" },
//                 maxWidth: "100%",
//               }}
//             />
//           </DemoItem>
//         </DemoContainer>
//       </LocalizationProvider>
//     </>
//   );
// }
