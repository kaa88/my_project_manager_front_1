import styles from "./ProfilePage.module.scss";
import { ComponentPropsWithoutRef, useRef, useState } from "react";
import cn from "classnames";
import { BurgerMenu } from "../../../widgets/ui/components/BurgerMenu/BurgerMenu";
import { Modal, Button } from "../../../shared/ui";
import { PageTitle } from "../../../shared/router";

interface ProfilePageProps extends ComponentPropsWithoutRef<"div"> {}

export const ProfilePage = ({
  className,
  children,
  ...props
}: ProfilePageProps): JSX.Element => {
  const [isModalActive, setIsModalActive] = useState(false);
  const [isModalActive2, setIsModalActive2] = useState(false);
  const [menuActive, setMenuActive] = useState(false);

  const ref = useRef<HTMLInputElement>(null);

  return (
    <>
      <PageTitle />
      <div className={cn([className, styles._])} {...props}>
        <button onClick={() => setIsModalActive(true)}>modal</button>
        <Modal
          active={isModalActive}
          onClose={() => setIsModalActive(false)}
          onOpen={() => console.log("modal is open")}
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            veniam dolores minima molestias assumenda corrupti aspernatur odio
            exercitationem? Autem quidem quam, voluptas reprehenderit nihil
            minus modi cum soluta quos assumenda cupiditate dolore rerum
            voluptates. Repellendus ut quisquam sed dolores atque porro
            consectetur quibusdam, repudiandae molestias beatae culpa quos quae
            a blanditiis aspernatur quod reprehenderit quidem itaque! Earum
            commodi eius quam corrupti, sit labore suscipit nemo doloremque
            beatae, adipisci cumque sunt maxime temporibus, molestias tempora
            assumenda. Adipisci rerum non quod repellat debitis, saepe dolorem
            voluptatum explicabo minus optio assumenda nostrum nam impedit
            doloribus ratione cum sunt, odio quo eveniet possimus excepturi
            reprehenderit veniam quibusdam. Sequi praesentium aut ducimus vitae
            non neque quaerat cumque voluptas provident dolore cupiditate
            possimus laboriosam, error nam tenetur fuga doloremque assumenda
            recusandae sit esse sunt eius facere. Laudantium repellat, vel
            impedit amet ratione architecto vero illo nesciunt est! Quisquam
            sapiente perspiciatis natus totam dolorum excepturi! Dolorem,
            molestiae soluta? Rerum illum perferendis quos vel magnam.
            Recusandae exercitationem minima quis, culpa molestias eum, harum
            ipsam id ab natus consectetur a quos possimus excepturi eligendi
            voluptates distinctio obcaecati dignissimos mollitia fuga blanditiis
            sunt. Reiciendis, provident, amet maxime obcaecati adipisci,
            architecto sed soluta laboriosam eaque dignissimos recusandae? Totam
            quibusdam sed aspernatur ad tempora voluptatum accusamus illo unde,
            perferendis quas tempore qui impedit distinctio earum corrupti vel
            veniam ab officiis facere obcaecati! Iste fugit aliquam suscipit
            maxime fugiat voluptatem repellat accusamus eius velit ab laudantium
            quisquam ex saepe ducimus quae nisi nesciunt dicta nostrum quos eos
            aspernatur, dolor esse. Necessitatibus quaerat explicabo nam
            sapiente at unde aut asperiores dolore voluptate sit, non provident
            debitis magnam deserunt praesentium, corrupti rem voluptas cum.
            Natus nostrum a id numquam quae delectus autem fuga. Distinctio
            corporis tempore asperiores eaque consequuntur. Nulla eligendi
            voluptate fugit suscipit? Deleniti libero incidunt animi distinctio
            dignissimos molestiae beatae cum praesentium magnam, soluta
            voluptates nulla similique vero esse, dolore quam perferendis id
            itaque non dolorem magni unde minus. Eius repudiandae tempore non
            autem numquam accusantium quia modi nam molestias. Quam reiciendis
            officiis, quisquam nihil sunt commodi. Itaque labore natus
            voluptates exercitationem dolor odio corporis temporibus non eos
            sint, accusamus iusto et, repudiandae at expedita id ea cupiditate
            nisi quia vel quas. Vitae aliquam, accusantium quas nam nisi quia
            nulla commodi numquam neque, porro quis? Eligendi accusamus repellat
            officiis iure sunt velit praesentium maxime cumque sapiente quos
            officia voluptatum reiciendis, voluptatibus architecto eius nobis
            tenetur laborum quae. Modi ut, quam quos quas vel illo. Officia
            animi odio soluta vero qui mollitia modi velit consequuntur magni
            quod inventore quibusdam ut officiis totam, similique quasi voluptas
            ratione necessitatibus alias voluptatibus accusantium dignissimos
            sit tempore. Odit consequatur tenetur asperiores voluptatibus
            corporis, maxime ipsam optio rem sequi soluta ab neque at vel magni
            doloribus veritatis cumque ipsum autem culpa facere non quam
            repudiandae perferendis. Tempore perferendis laboriosam, eaque non
            doloremque qui expedita maiores fugiat amet, nesciunt architecto
            commodi, et esse magnam sint maxime autem! Debitis veritatis ipsa
            architecto veniam!
          </p>
        </Modal>
        <button onClick={() => setIsModalActive2(true)}>modal2</button>
        <Modal
          active={isModalActive2}
          onClose={() => setIsModalActive2(false)}
          focusedElementRef={ref}
        >
          modal2
          <input type="text" ref={ref} />
          <input type="text" />
        </Modal>
        <button onClick={() => setMenuActive(true)}>BurgerMenu</button>
        <BurgerMenu active={menuActive} onClose={() => setMenuActive(false)}>
          BurgerMenu
        </BurgerMenu>
        ProfilePage
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          veniam dolores minima molestias assumenda corrupti aspernatur odio
          exercitationem? Autem quidem quam, voluptas reprehenderit nihil minus
          modi cum soluta quos assumenda cupiditate dolore rerum voluptates.
          Repellendus ut quisquam sed dolores atque porro consectetur quibusdam,
          repudiandae molestias beatae culpa quos quae a blanditiis aspernatur
          quod reprehenderit quidem itaque! Earum commodi eius quam corrupti,
          sit labore suscipit nemo doloremque beatae, adipisci cumque sunt
          maxime temporibus, molestias tempora assumenda. Adipisci rerum non
          quod repellat debitis, saepe dolorem voluptatum explicabo minus optio
          assumenda nostrum nam impedit doloribus ratione cum sunt, odio quo
          eveniet possimus excepturi reprehenderit veniam quibusdam. Sequi
          praesentium aut ducimus vitae non neque quaerat cumque voluptas
          provident dolore cupiditate possimus laboriosam, error nam tenetur
          fuga doloremque assumenda recusandae sit esse sunt eius facere.
          Laudantium repellat, vel impedit amet ratione architecto vero illo
          nesciunt est! Quisquam sapiente perspiciatis natus totam dolorum
          excepturi! Dolorem, molestiae soluta? Rerum illum perferendis quos vel
          magnam. Recusandae exercitationem minima quis, culpa molestias eum,
          harum ipsam id ab natus consectetur a quos possimus excepturi eligendi
          voluptates distinctio obcaecati dignissimos mollitia fuga blanditiis
          sunt. Reiciendis, provident, amet maxime obcaecati adipisci,
          architecto sed soluta laboriosam eaque dignissimos recusandae? Totam
          quibusdam sed aspernatur ad tempora voluptatum accusamus illo unde,
          perferendis quas tempore qui impedit distinctio earum corrupti vel
          veniam ab officiis facere obcaecati! Iste fugit aliquam suscipit
          maxime fugiat voluptatem repellat accusamus eius velit ab laudantium
          quisquam ex saepe ducimus quae nisi nesciunt dicta nostrum quos eos
          aspernatur, dolor esse. Necessitatibus quaerat explicabo nam sapiente
          at unde aut asperiores dolore voluptate sit, non provident debitis
          magnam deserunt praesentium, corrupti rem voluptas cum. Natus nostrum
          a id numquam quae delectus autem fuga. Distinctio corporis tempore
          asperiores eaque consequuntur. Nulla eligendi voluptate fugit
          suscipit? Deleniti libero incidunt animi distinctio dignissimos
          molestiae beatae cum praesentium magnam, soluta voluptates nulla
          similique vero esse, dolore quam perferendis id itaque non dolorem
          magni unde minus. Eius repudiandae tempore non autem numquam
          accusantium quia modi nam molestias. Quam reiciendis officiis,
          quisquam nihil sunt commodi. Itaque labore natus voluptates
          exercitationem dolor odio corporis temporibus non eos sint, accusamus
          iusto et, repudiandae at expedita id ea cupiditate nisi quia vel quas.
          Vitae aliquam, accusantium quas nam nisi quia nulla commodi numquam
          neque, porro quis? Eligendi accusamus repellat officiis iure sunt
          velit praesentium maxime cumque sapiente quos officia voluptatum
          reiciendis, voluptatibus architecto eius nobis tenetur laborum quae.
          Modi ut, quam quos quas vel illo. Officia animi odio soluta vero qui
          mollitia modi velit consequuntur magni quod inventore quibusdam ut
          officiis totam, similique quasi voluptas ratione necessitatibus alias
          voluptatibus accusantium dignissimos sit tempore. Odit consequatur
          tenetur asperiores voluptatibus corporis, maxime ipsam optio rem sequi
          soluta ab neque at vel magni doloribus veritatis cumque ipsum autem
          culpa facere non quam repudiandae perferendis. Tempore perferendis
          laboriosam, eaque non doloremque qui expedita maiores fugiat amet,
          nesciunt architecto commodi, et esse magnam sint maxime autem! Debitis
          veritatis ipsa architecto veniam!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          veniam dolores minima molestias assumenda corrupti aspernatur odio
          exercitationem? Autem quidem quam, voluptas reprehenderit nihil minus
          modi cum soluta quos assumenda cupiditate dolore rerum voluptates.
          Repellendus ut quisquam sed dolores atque porro consectetur quibusdam,
          repudiandae molestias beatae culpa quos quae a blanditiis aspernatur
          quod reprehenderit quidem itaque! Earum commodi eius quam corrupti,
          sit labore suscipit nemo doloremque beatae, adipisci cumque sunt
          maxime temporibus, molestias tempora assumenda. Adipisci rerum non
          quod repellat debitis, saepe dolorem voluptatum explicabo minus optio
          assumenda nostrum nam impedit doloribus ratione cum sunt, odio quo
          eveniet possimus excepturi reprehenderit veniam quibusdam. Sequi
          praesentium aut ducimus vitae non neque quaerat cumque voluptas
          provident dolore cupiditate possimus laboriosam, error nam tenetur
          fuga doloremque assumenda recusandae sit esse sunt eius facere.
          Laudantium repellat, vel impedit amet ratione architecto vero illo
          nesciunt est! Quisquam sapiente perspiciatis natus totam dolorum
          excepturi! Dolorem, molestiae soluta? Rerum illum perferendis quos vel
          magnam. Recusandae exercitationem minima quis, culpa molestias eum,
          harum ipsam id ab natus consectetur a quos possimus excepturi eligendi
          voluptates distinctio obcaecati dignissimos mollitia fuga blanditiis
          sunt. Reiciendis, provident, amet maxime obcaecati adipisci,
          architecto sed soluta laboriosam eaque dignissimos recusandae? Totam
          quibusdam sed aspernatur ad tempora voluptatum accusamus illo unde,
          perferendis quas tempore qui impedit distinctio earum corrupti vel
          veniam ab officiis facere obcaecati! Iste fugit aliquam suscipit
          maxime fugiat voluptatem repellat accusamus eius velit ab laudantium
          quisquam ex saepe ducimus quae nisi nesciunt dicta nostrum quos eos
          aspernatur, dolor esse. Necessitatibus quaerat explicabo nam sapiente
          at unde aut asperiores dolore voluptate sit, non provident debitis
          magnam deserunt praesentium, corrupti rem voluptas cum. Natus nostrum
          a id numquam quae delectus autem fuga. Distinctio corporis tempore
          asperiores eaque consequuntur. Nulla eligendi voluptate fugit
          suscipit? Deleniti libero incidunt animi distinctio dignissimos
          molestiae beatae cum praesentium magnam, soluta voluptates nulla
          similique vero esse, dolore quam perferendis id itaque non dolorem
          magni unde minus. Eius repudiandae tempore non autem numquam
          accusantium quia modi nam molestias. Quam reiciendis officiis,
          quisquam nihil sunt commodi. Itaque labore natus voluptates
          exercitationem dolor odio corporis temporibus non eos sint, accusamus
          iusto et, repudiandae at expedita id ea cupiditate nisi quia vel quas.
          Vitae aliquam, accusantium quas nam nisi quia nulla commodi numquam
          neque, porro quis? Eligendi accusamus repellat officiis iure sunt
          velit praesentium maxime cumque sapiente quos officia voluptatum
          reiciendis, voluptatibus architecto eius nobis tenetur laborum quae.
          Modi ut, quam quos quas vel illo. Officia animi odio soluta vero qui
          mollitia modi velit consequuntur magni quod inventore quibusdam ut
          officiis totam, similique quasi voluptas ratione necessitatibus alias
          voluptatibus accusantium dignissimos sit tempore. Odit consequatur
          tenetur asperiores voluptatibus corporis, maxime ipsam optio rem sequi
          soluta ab neque at vel magni doloribus veritatis cumque ipsum autem
          culpa facere non quam repudiandae perferendis. Tempore perferendis
          laboriosam, eaque non doloremque qui expedita maiores fugiat amet,
          nesciunt architecto commodi, et esse magnam sint maxime autem! Debitis
          veritatis ipsa architecto veniam!
        </p>
        <Button href="/">HELLO PAGE</Button>
      </div>
    </>
  );
};
