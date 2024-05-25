import {
  ChangeEvent,
  ComponentPropsWithoutRef,
  useEffect,
  useRef,
  useState,
} from "react";
import cn from "classnames";
import styles from "./WikiPage.module.scss";
import {
  Button,
  Checkbox,
  Dropdown,
  DropdownMultiselect,
  InputNumber,
  InputPassword,
  InputText,
  Spinner,
  UpButton,
  Pagination,
  DropdownItem,
  DropdownMultiselectItem,
} from "../../../ui-kit";

import { CgMenuGridR as Icon } from "react-icons/cg";
import { useAppSelector } from "../../../store/hooks";

interface WikiPageProps extends ComponentPropsWithoutRef<"div"> {}

export const WikiPage = ({
  className,
  children,
  ...props
}: WikiPageProps): JSX.Element => {
  const [dis, setDis] = useState(false);

  const [dropItem, setDropItem] = useState<DropdownItem | null>(null);
  const dropItems = [
    { key: "opt1", value: "option1" },
    { key: "opt2", value: "option2" },
    { key: "opt3", value: "option3" },
    { key: "opt4", value: "option4" },
  ];

  const [dropMultItems, setDropMultItems] =
    useState<DropdownMultiselectItem[]>(dropItems);

  const [inputNumberValue, setInputNumberValue] = useState(0);
  const handleInputNumberChange = (value: number) => {
    setInputNumberValue(value);
  };
  console.log("inputNumberValue", inputNumberValue);
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
    setInputNumberValue(inputNumberValue + 10);
  };

  const [paginationPage, setPaginationPage] = useState(3);

  const upBtnContentRef = useRef<HTMLDivElement>(null);

  return (
    <div className={cn([className, styles._])} {...props} ref={upBtnContentRef}>
      WikiPage <br /> <br />
      <div
      // style={{ display: "flex", alignItems: "center" }}
      >
        <Button size="small">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae,
          tempore? Earum sit est aliquid recusandae esse non error minima
          distinctio? Ex vero quod animi architecto, sint quo laboriosam
          laudantium. Sunt ex dignissimos deleniti rem odit adipisci expedita ad
          nobis eligendi deserunt. Error quos tempore quia ullam hic ducimus
          cumque impedit vel fuga, rerum suscipit iure libero dolore voluptas
          eaque magni quod blanditiis quibusdam sint fugit illo vitae quae!
          Voluptatem illum quo nemo iusto cupiditate deleniti, sint numquam fuga
          optio rem, expedita ut ducimus, architecto aut a quaerat quas vitae
          dolor officia! Aperiam, repellat ab quod fuga quia distinctio vitae
          pariatur.
        </Button>
        <Button size="small" icon={<Icon />} style={{ width: "300px" }}>
          Primary icon
        </Button>
        <Button size="small" icon={<Icon />}></Button>
        <Button icon={<Icon />} disabled>
          Primary disabled
        </Button>
        <Button size="large" variant="secondary">
          Secondary
        </Button>
        <Button
          size="large"
          variant="secondary"
          icon={<Icon />}
          onMouseEnter={() => setDis(true)}
          onMouseLeave={() => setDis(false)}
          onClick={() => console.log("click")}
        >
          Secondary icon
        </Button>
        <Button variant="secondary" icon={<Icon />} disabled={!dis}>
          Secondary disabled
        </Button>
      </div>
      <Button variant="link">Link</Button>
      <Button variant="link" icon={<Icon />}>
        Link icon
      </Button>
      <Button variant="link" disabled>
        Link disabled
      </Button>
      <span>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa
        doloremque enim consequatur laborum non, dolorum officia velit ipsam
        minus magni ipsum praesentium nemo! Sequi voluptas explicabo at quisquam
        a, minus id eius mollitia quis blanditiis, ea iste omnis, nulla fugiat?
        Sint nihil quae dolor ab ipsam modi, nostrum voluptates, voluptas dicta
        excepturi quas animi. Architecto impedit aliquam obcaecati iusto est
        quas mollitia minus voluptatem expedita ex debitis, consequatur, unde
        perferendis in ad nobis quidem consequuntur quod laboriosam deleniti at
        provident! Nesciunt eum dignissimos quasi ex eveniet libero ut ad hic.
        Saepe consectetur aliquam maxime eligendi rerum architecto quas possimus
        adipisci.
      </span>
      <Checkbox clickableLabel variant="switch">
        Checkbox
      </Checkbox>
      <Checkbox>Checkbox</Checkbox>
      <Dropdown
        list={dropItems}
        selected={dropItem?.key}
        title={dropItem?.value || "Select"}
        onChange={(item) => setDropItem(item)}
        disabled={dis}
      />
      <Dropdown
        list={dropItems}
        selected={dropItem?.key}
        title={dropItem?.value || "Pick one"}
        onChange={(item) => setDropItem(item)}
        disabled={dis}
      />
      <DropdownMultiselect
        list={dropMultItems}
        onChange={(newList) => setDropMultItems(newList)}
      />
      <InputText
        value={inputValue}
        onChange={handleInputChange}
        placeholder="InputText"
        disabled={dis}
        state="error"
      />
      <InputPassword
        value={inputValue}
        onChange={handleInputChange}
        placeholder="InputPassword"
        disabled={dis}
        state="error"
      />
      <InputNumber
        value={inputNumberValue}
        onChange={handleInputNumberChange}
        disabled={dis}
        min={0}
        max={100}
        state="error"
      />
      <Pagination
        activePage={paginationPage}
        pageCount={50}
        onPageChange={(page) => setPaginationPage(page)}
        disabled={dis}
      ></Pagination>
      <Spinner hidden={dis}></Spinner>
      <Spinner size="small" hidden={dis}></Spinner>
      <UpButton
        autoHide={false}
        scrollableRef={upBtnContentRef}
        scrollBehavior="smooth"
      ></UpButton>
    </div>
  );
};
