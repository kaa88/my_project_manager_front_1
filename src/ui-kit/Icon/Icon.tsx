import { ComponentPropsWithoutRef } from "react";
import cn from "classnames";

import styles from "./Icon.module.scss";

import {
  CgArrowLeftR,
  CgUser,
  CgTrello,
  CgMenuLeftAlt,
  CgLoadbarDoc,
  CgReadme,
  CgCalendarDates,
  CgChevronLeft,
  CgChevronDoubleLeft,
  CgMenuGridR,
  CgSpinner,
  CgSpinnerAlt,
  CgEye,
  CgEyeAlt,
  CgClose,
  CgCheck,
  CgMoreAlt,
} from "react-icons/cg";

// all arrows left

export const icons = {
  arrow_square: <CgArrowLeftR />,
  chevron: <CgChevronLeft />,
  chevron_double: <CgChevronDoubleLeft />,
  spinner: <CgSpinner />,
  spinner2: <CgSpinnerAlt />,
  check: <CgCheck />,
  cross: <CgClose />,
  eye: <CgEye />,
  eye_closed: <CgEyeAlt />,
  person: <CgUser />,
  board: <CgTrello />,
  calendar: <CgCalendarDates />,
  menu: <CgMenuGridR />,
  task: <CgLoadbarDoc />,
  list: <CgMenuLeftAlt />,
  book: <CgReadme />,
  dots: <CgMoreAlt />,
};

interface IconProps extends ComponentPropsWithoutRef<"div"> {
  name: keyof typeof icons;
  children?: undefined;
}

export const Icon = ({ className, name, ...props }: IconProps): JSX.Element => {
  return (
    <i className={cn(className, styles._)} {...props}>
      {icons[name]}
    </i>
  );
};
