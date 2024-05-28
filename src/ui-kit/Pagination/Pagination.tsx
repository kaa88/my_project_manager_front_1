import { ComponentPropsWithoutRef, memo } from "react";
import cn from "classnames";

import styles from "./Pagination.module.scss";
import { Icon } from "../";

interface PaginationProps extends ComponentPropsWithoutRef<"button"> {
  activePage: number;
  pageCount: number;
  onPageChange: (activePage: number) => void;
  loading?: boolean;
  compact?: boolean;
}

export const Pagination = memo(
  ({
    className,
    activePage: propActivePage,
    pageCount: propPageCount,
    onPageChange,
    loading,
    compact,
    disabled,
  }: PaginationProps): JSX.Element => {
    const pageCount = propPageCount > 0 ? propPageCount : 1;
    let activePage = propActivePage;

    if (activePage < 0) activePage = 0;
    if (activePage > pageCount - 1) activePage = pageCount - 1;

    const nullNumber = -1;
    let pages = [];

    if (compact) {
      pages[0] = 0;

      if (pageCount > 1) pages[1] = 1;
      // eslint-disable-next-line no-magic-numbers
      if (pageCount > 2) pages[2] = pageCount - 1;
      // eslint-disable-next-line no-magic-numbers
      if (pages[2] && pages[2] - pages[0] > 2) pages[1] = nullNumber;
    } else {
      const pageThreshold = 5;
      let visiblePagesStart = activePage - pageThreshold;
      let visiblePagesEnd = activePage + pageThreshold;

      if (visiblePagesStart < 0) visiblePagesStart = 0;
      if (visiblePagesEnd > pageCount - 1) visiblePagesEnd = pageCount - 1;

      for (let i = 0; i < pageCount; i++) {
        if (i >= visiblePagesStart && i <= visiblePagesEnd) pages.push(i);
      }

      if (pages[0] > 0) pages[0] = 0;
      if (pages[1] - pages[0] > 1) pages[1] = nullNumber;
      if (pages[pages.length - 1] < pageCount - 1)
        pages[pages.length - 1] = pageCount - 1;
      // eslint-disable-next-line no-magic-numbers
      if (pages[pages.length - 1] - pages[pages.length - 2] > 1)
        // eslint-disable-next-line no-magic-numbers
        pages[pages.length - 2] = nullNumber;
    }

    return (
      <div className={cn(className, styles._, disabled && styles.disabled)}>
        <button
          className={styles.prev}
          type="button"
          onClick={() => onPageChange(activePage - 1)}
          disabled={activePage === 0 || loading || disabled}
        >
          <Icon className={styles.icon} name="chevron" />
        </button>

        {pages.map((number, index) =>
          number === nullNumber ? (
            <button type="button" disabled key={"more" + index}>
              <Icon className={styles.icon} name="dots" />
            </button>
          ) : (
            <button
              className={cn(
                styles.page,
                number === activePage && styles.active
              )}
              type="button"
              onClick={
                number === activePage ? undefined : () => onPageChange(number)
              }
              disabled={number === activePage || loading || disabled}
              key={number}
            >
              {number + 1}
            </button>
          )
        )}

        <button
          className={styles.next}
          type="button"
          onClick={() => onPageChange(activePage + 1)}
          disabled={activePage === pageCount - 1 || loading || disabled}
        >
          <Icon className={styles.icon} name="chevron" />
        </button>
      </div>
    );
  }
);
