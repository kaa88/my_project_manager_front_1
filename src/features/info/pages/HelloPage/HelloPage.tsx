import styles from "./HelloPage.module.scss";
import { ComponentPropsWithoutRef, useRef, useState } from "react";
import cn from "classnames";

import { PAGES } from "../../../../router";

import { Button, UpButton } from "../../../../ui/kit";

interface HelloPageProps extends ComponentPropsWithoutRef<"div"> {}

export const HelloPage = ({
  className,
  children,
  ...props
}: HelloPageProps): JSX.Element => {
  const mainRef = useRef<HTMLDivElement>(null);

  const [text, setText] = useState(0);

  const t = [];

  for (let i = 0; i < text; i++) {
    t.push(p);
  }

  return (
    <div className={cn([className, styles._])} ref={mainRef} {...props}>
      <p>HelloPage</p>
      <br />
      <Button href={PAGES.LOGIN}>LOGIN</Button>
      <Button href={PAGES.REGISTER}>REGISTER</Button>
      <button onClick={() => setText(text + 1)}>add text</button>
      <button onClick={() => setText(text - 1)}>remove text</button>
      {t}
      {p}
      <UpButton
        className={styles.upButton}
        scrollableRef={mainRef}
        refreshTrigger={text}
      />
    </div>
  );
};

const p = (
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti veniam
    dolores minima molestias assumenda corrupti aspernatur odio exercitationem?
    Autem quidem quam, voluptas reprehenderit nihil minus modi cum soluta quos
    assumenda cupiditate dolore rerum voluptates. Repellendus ut quisquam sed
    dolores atque porro consectetur quibusdam, repudiandae molestias beatae
    culpa quos quae a blanditiis aspernatur quod reprehenderit quidem itaque!
    Earum commodi eius quam corrupti, sit labore suscipit nemo doloremque
    beatae, adipisci cumque sunt maxime temporibus, molestias tempora assumenda.
    Adipisci rerum non quod repellat debitis, saepe dolorem voluptatum explicabo
    minus optio assumenda nostrum nam impedit doloribus ratione cum sunt, odio
    quo eveniet possimus excepturi reprehenderit veniam quibusdam. Sequi
    praesentium aut ducimus vitae non neque quaerat cumque voluptas provident
    dolore cupiditate possimus laboriosam, error nam tenetur fuga doloremque
    assumenda recusandae sit esse sunt eius facere. Laudantium repellat, vel
    impedit amet ratione architecto vero illo nesciunt est! Quisquam sapiente
    perspiciatis natus totam dolorum excepturi! Dolorem, molestiae soluta? Rerum
    illum perferendis quos vel magnam. Recusandae exercitationem minima quis,
    culpa molestias eum, harum ipsam id ab natus consectetur a quos possimus
    excepturi eligendi voluptates distinctio obcaecati dignissimos mollitia fuga
    blanditiis sunt. Reiciendis, provident, amet maxime obcaecati adipisci,
    architecto sed soluta laboriosam eaque dignissimos recusandae? Totam
    quibusdam sed aspernatur ad tempora voluptatum accusamus illo unde,
    perferendis quas tempore qui impedit distinctio earum corrupti vel veniam ab
    officiis facere obcaecati! Iste fugit aliquam suscipit maxime fugiat quasi
    voluptas ratione necessitatibus alias voluptatibus accusantium dignissimos
    sit tempore. Odit consequatur tenetur asperiores voluptatibus corporis,
    maxime ipsam optio rem sequi soluta ab neque at vel magni doloribus
    veritatis cumque ipsum autem culpa facere non quam repudiandae perferendis.
    Tempore perferendis laboriosam, eaque non doloremque qui expedita maiores
    fugiat amet, nesciunt architecto commodi, et esse magnam sint maxime autem!
    Debitis veritatis ipsa architecto veniam!
  </p>
);
