import { ComponentPropsWithoutRef } from "react";
import cn from "classnames";
import styles from "./HelloPage.module.scss";
import { Button } from "../../../ui-kit";
import { PAGES } from "../../../router/const";

interface HelloPageProps extends ComponentPropsWithoutRef<"div"> {}

export const HelloPage = ({
  className,
  children,
  ...props
}: HelloPageProps): JSX.Element => {
  return (
    <div className={cn([className, styles._])} {...props}>
      <p>HelloPage</p>
      <br />
      <Button href={PAGES.LOGIN}>LOGIN</Button>
      <Button href={PAGES.REGISTER}>REGISTER</Button>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti veniam
        dolores minima molestias assumenda corrupti aspernatur odio
        exercitationem? Autem quidem quam, voluptas reprehenderit nihil minus
        modi cum soluta quos assumenda cupiditate dolore rerum voluptates.
        Repellendus ut quisquam sed dolores atque porro consectetur quibusdam,
        repudiandae molestias beatae culpa quos quae a blanditiis aspernatur
        quod reprehenderit quidem itaque! Earum commodi eius quam corrupti, sit
        labore suscipit nemo doloremque beatae, adipisci cumque sunt maxime
        temporibus, molestias tempora assumenda. Adipisci rerum non quod
        repellat debitis, saepe dolorem voluptatum explicabo minus optio
        assumenda nostrum nam impedit doloribus ratione cum sunt, odio quo
        eveniet possimus excepturi reprehenderit veniam quibusdam. Sequi
        praesentium aut ducimus vitae non neque quaerat cumque voluptas
        provident dolore cupiditate possimus laboriosam, error nam tenetur fuga
        doloremque assumenda recusandae sit esse sunt eius facere. Laudantium
        repellat, vel impedit amet ratione architecto vero illo nesciunt est!
        Quisquam sapiente perspiciatis natus totam dolorum excepturi! Dolorem,
        molestiae soluta? Rerum illum perferendis quos vel magnam. Recusandae
        exercitationem minima quis, culpa molestias eum, harum ipsam id ab natus
        consectetur a quos possimus excepturi eligendi voluptates distinctio
        obcaecati dignissimos mollitia fuga blanditiis sunt. Reiciendis,
        provident, amet maxime obcaecati adipisci, architecto sed soluta
        laboriosam eaque dignissimos recusandae? Totam quibusdam sed aspernatur
        ad tempora voluptatum accusamus illo unde, perferendis quas tempore qui
        impedit distinctio earum corrupti vel veniam ab officiis facere
        obcaecati! Iste fugit aliquam suscipit maxime fugiat voluptatem repellat
        accusamus eius velit ab laudantium quisquam ex saepe ducimus quae nisi
        nesciunt dicta nostrum quos eos aspernatur, dolor esse. Necessitatibus
        quaerat explicabo nam sapiente at unde aut asperiores dolore voluptate
        sit, non provident debitis magnam deserunt praesentium, corrupti rem
        voluptas cum. Natus nostrum a id numquam quae delectus autem fuga.
        Distinctio corporis tempore asperiores eaque consequuntur. Nulla
        eligendi voluptate fugit suscipit? Deleniti libero incidunt animi
        distinctio dignissimos molestiae beatae cum praesentium magnam, soluta
        voluptates nulla similique vero esse, dolore quam perferendis id itaque
        non dolorem magni unde minus. Eius repudiandae tempore non autem numquam
        accusantium quia modi nam molestias. Quam reiciendis officiis, quisquam
        nihil sunt commodi. Itaque labore natus voluptates exercitationem dolor
        odio corporis temporibus non eos sint, accusamus iusto et, repudiandae
        at expedita id ea cupiditate nisi quia vel quas. Vitae aliquam,
        accusantium quas nam nisi quia nulla commodi numquam neque, porro quis?
        Eligendi accusamus repellat officiis iure sunt velit praesentium maxime
        cumque sapiente quos officia voluptatum reiciendis, voluptatibus
        architecto eius nobis tenetur laborum quae. Modi ut, quam quos quas vel
        illo. Officia animi odio soluta vero qui mollitia modi velit
        consequuntur magni quod inventore quibusdam ut officiis totam, similique
        quasi voluptas ratione necessitatibus alias voluptatibus accusantium
        dignissimos sit tempore. Odit consequatur tenetur asperiores
        voluptatibus corporis, maxime ipsam optio rem sequi soluta ab neque at
        vel magni doloribus veritatis cumque ipsum autem culpa facere non quam
        repudiandae perferendis. Tempore perferendis laboriosam, eaque non
        doloremque qui expedita maiores fugiat amet, nesciunt architecto
        commodi, et esse magnam sint maxime autem! Debitis veritatis ipsa
        architecto veniam!
      </p>
    </div>
  );
};
