"use client";

import * as React from "react";
import { DayPicker } from "react-day-picker";
import { ChevronRightIcon, ChevronLeftIcon } from "./icons";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = false,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={"p-3 w-full " + className}
      classNames={{
        months: "day-picker-months",
        month: "day-picker-month",
        caption: "day-picker-caption",
        caption_label: "day-picker-caption_label",
        nav: "day-picker-nav",
        nav_button: "day-picker-nav_button",
        nav_button_previous: "day-picker-nav_button_previous ",
        nav_button_next: "day-picker-nav_button_next",
        table: "day-picker-table",
        head_row: "day-picker-head_row",
        head_cell: "day-picker-head_cell",
        row: "day-picker-row",
        cell: "day-picker-cell ",
        day: "day-picker-day",
        day_range_end: "day-range-end day-picker-day_range_end",
        day_selected: "day-picker-day_selected",
        day_today: "day-picker-day_today",
        day_outside:
          "day-outside day-picker-day_outside aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
        day_disabled: "day-picker-day_disabled",
        day_range_middle:
          "aria-selected:bg-accent aria-selected:text-accent-foreground day-picker-day_range_middle",
        day_hidden: "day-picker-day_hidden",
        ...classNames,
      }}
      components={{
        IconLeft: ({ ...props }) => <ChevronLeftIcon {...props} />,
        IconRight: ({ ...props }) => <ChevronRightIcon {...props} />,
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
