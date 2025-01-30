"use client";
import { CMSHackathon } from "@/lib/cms.types";
import { useMemo, useRef, useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import isLeapYear from "dayjs/plugin/isLeapYear";
import LocaleData from "dayjs/plugin/localeData";
import customParseFormat from "dayjs/plugin/customParseFormat";
import cn from "classnames";

dayjs.extend(customParseFormat);
dayjs.extend(LocaleData);

type GeneratedObjectType = {
  days: number[];
  day: number;
  prevMonthDays: number[];
  remainingDays: number[];
  months: string[];
};

type HackathonCalendarProps = {
  hackathons: CMSHackathon[];
};

export const calendarObjectGenerator = (
  currentDate: Dayjs,
): GeneratedObjectType => {
  const numOfDaysInPrevMonth = currentDate.subtract(1, "month").daysInMonth();
  const firstDayOfCurrentMonth = currentDate.startOf("month").day();

  return {
    days: Array.from(
      { length: currentDate.daysInMonth() },
      (_, index) => index + 1,
    ),
    day: Number(currentDate.format("DD")),
    months: currentDate.localeData().months(),

    //read explanation
    prevMonthDays: Array.from(
      { length: firstDayOfCurrentMonth },
      (_, index) => numOfDaysInPrevMonth - index,
    ).reverse(),

    remainingDays: Array.from(
      { length: 6 - currentDate.endOf("month").day() },
      (_, index) => index + 1,
    ),
  };
};

export const HackathonCalendar = ({ hackathons }: HackathonCalendarProps) => {
  const [activeDate, setActiveDate] = useState(dayjs());

  // Создать массив с днями
  const dates = useMemo(() => {
    return calendarObjectGenerator(activeDate);
  }, [activeDate]);

  const monthHackathons = useMemo(() => {
    return hackathons.filter((hackathon) => {
      const startDate = dayjs(hackathon.from_date);
      return (
        startDate.get("month") === activeDate.get("month") &&
        startDate.get("year") === activeDate.get("year")
      );
    });
  }, [hackathons, activeDate]);

  return (
    <div className="p-[40px] card rounded-[20px] w-full">
      <div className="w-full bg-white/[3%] text-white rounded-lg flex flex-col gap-[15px] z-50 p-[15px]">
        <div />
        <header className="text-center mb-4 flex justify-between z-[100]">
          <button
            onClick={() => setActiveDate((p) => dayjs(p.subtract(1, "month")))}
          >
            <svg
              width="12"
              height="13"
              viewBox="0 0 12 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 0.789062L2.62281 5.2709C2.14315 5.67069 2.14315 6.40743 2.62281 6.80722L8 11.2891"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <h2 className="text-[13px] text-crop font-[600] uppercase">
            {activeDate.format("MMMM YYYY")}
          </h2>
          <button
            onClick={() => setActiveDate((p) => dayjs(p.add(1, "month")))}
          >
            <svg
              width="8"
              height="13"
              viewBox="0 0 8 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 12.2109L6.37719 7.7291C6.85685 7.32931 6.85685 6.59257 6.37719 6.19278L1 1.71094"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </header>
        <div className="bg-[#404C5D] h-[1px]"></div>
        <div className="w-full border-collapse">
          <div>
            <div className="py-[8px] text-white/50 uppercase text-[12px] font-[500] grid grid-cols-7">
              <div>Mo</div>
              <div>Tu</div>
              <div>We</div>
              <div>Th</div>
              <div>Fr</div>
              <div>Sa</div>
              <div>Su</div>
            </div>
          </div>
          <div className="grid grid-cols-7 z-[100] relative">
            {dates.prevMonthDays.map((date, i) => (
              <div
                key={i}
                className="h-[100px] border border-white/[3%] flex flex-col justify-between"
              >
                <div className="mr-[10px] mt-[10px] text-end text-white/20">
                  {date}
                </div>
              </div>
            ))}
            {dates.days.map((date, i) => (
              <div
                id={date + "-" + activeDate.format("MM-YYYY")}
                key={i}
                className="h-[100px] border border-white/[3%] relative"
              >
                <div className="mr-[10px] mt-[10px] text-end  flex flex-col justify-between mb-[2px]">
                  {date}
                </div>
                {monthHackathons.map((item, i) => {
                  const start_date = dayjs(item.from_date).get("date");
                  const end_date = dayjs(item.due_date).get("date");
                  const is_beginning = start_date === date;
                  const is_ending = end_date === date;
                  const is_in_between = start_date <= date && end_date >= date;
                  const text = `${item.name}: ${activeDate.format("MMMM")} ${start_date}-${end_date}`;
                  if (!is_in_between) return null;
                  return (
                    <div
                      className={cn(
                        "bg-nuah-green-light absolute text-nuah-dark h-[22px] mr-[-1px] text-[10px] font-[700] text-start pl-[10px] flex items-center leading-[10px]",
                        {
                          "rounded-l-[5px]": is_beginning,
                          "rounded-r-[5px]": is_ending,
                          "w-[calc(100%_+_3px)]": !is_beginning,
                          [`z-[200]`]: is_beginning,
                        },
                      )}
                      style={
                        is_beginning
                          ? {
                              width: `${text.length}ch`,
                            }
                          : undefined
                      }
                      key={i}
                    >
                      {is_beginning && text}
                    </div>
                  );
                })}
              </div>
            ))}
            {dates.remainingDays.map((date, i) => (
              <div key={i} className="h-[100px] border border-white/[3%]">
                <div className="mr-[10px] mt-[10px] text-end text-white/20 flex flex-col justify-between">
                  {date}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * 
 * {/* {[...Array(Math.ceil(dates.length / 7))].map((_, rowIndex) => (
              <tr key={rowIndex}>
                {dates
                  .slice(rowIndex * 7, rowIndex * 7 + 7)
                  .map((date, colIndex) => (
                    <td
                      id={`${date}`}
                      key={colIndex}
                      className={`h-[100px] align-top border border-white/[3%]`}
                    >
                      <div className="flex flex-row-reverse mr-[10px] mt-[10px]">
                        {date}
                      </div>
                      {date === 21 && (
                        <div className="text-xs mt-2 bg-cyan-500">
                          48-Hour Beginner Hackathon: September 21-22
                        </div>
                      )} 
                      </td>
                    ))}
                </tr>
              ))}
 */
