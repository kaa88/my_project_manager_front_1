import { ComponentPropsWithoutRef, MouseEvent, ChangeEvent } from "react";

import styles from "./DropdownMultiselect.module.scss";

import { Checkbox, Dropdown, DropdownItem } from "../";

export interface DropdownMultiselectItem extends DropdownItem {
  selected?: boolean;
}

interface DropdownMultiselectProps
  extends Omit<ComponentPropsWithoutRef<"button">, "onChange"> {
  onChange: (newList: DropdownMultiselectItem[]) => void;
  list: DropdownMultiselectItem[];
  children?: undefined;
}

export const DropdownMultiselect = ({
  className,
  onChange,
  list,
  disabled,
}: DropdownMultiselectProps): JSX.Element => {
  const preventWindowCLoseEvent = (
    e: MouseEvent<HTMLButtonElement | HTMLDivElement>
  ) => {
    e.stopPropagation();
  };

  const handleChangeList = (e: ChangeEvent<HTMLInputElement>): void => {
    const newList = [...list];
    const i = newList.findIndex(
      (item) => item.key.toString() === e.target.dataset.key
    );

    if (i >= 0) {
      newList[i].selected = e.target.checked;
      onChange(newList);
    }
  };

  const selectedLength = list.reduce(
    (count, item) => (item.selected ? count + 1 : count),
    0
  );

  const listEl = (
    <div className={styles.list} onClick={preventWindowCLoseEvent}>
      {list.map((item) => (
        <Checkbox
          className={styles.checkbox}
          checked={item.selected}
          onChange={handleChangeList}
          data-key={item.key}
          clickableLabel={true}
          key={item.key}
        >
          {item.value}
        </Checkbox>
      ))}
    </div>
  );

  return (
    <Dropdown
      className={className}
      title={`${selectedLength ? selectedLength : "not"} selected`}
      customList={listEl}
      disabled={disabled}
    />
  );
};
