import { useLayoutEffect, ComponentPropsWithoutRef } from "react";

import { Outlet, useLocation, useNavigate } from "react-router-dom";

import styles from "./AuthLayout.module.scss";
import { TechnicalWorkAlert } from "../../TechnicalWorkAlert/TechnicalWorkAlert";

const IS_TECHNICAL_ALERT = process.env.REACT_APP_IS_TECHNICAL_WORK === "true";

interface AuthLayoutProps extends ComponentPropsWithoutRef<"div"> {
  variant?: "default" | "error";
}

export const AuthLayout = ({
  variant = "default",
  children,
}: AuthLayoutProps): JSX.Element => {
  // const navigate = useNavigate();
  // const authStatuses = useAppSelector((state) => state.authStatus);
  // const auth = useAppSelector((state) => state.auth);
  // const { isLogin } = auth.auth;
  // const { logOutPath } = auth;

  // Scroll main content to top on route change
  // const location = useLocation();

  // useLayoutEffect(() => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "instant",
  //   });
  // }, [location.pathname]);
  // /Scroll main content to top on route change

  // const isConnectPending =
  //   authStatuses.fetchProviderLogin.status === STATUS_PENDING;

  return (
    <div className={styles._}>
      {IS_TECHNICAL_ALERT && (
        <TechnicalWorkAlert className={styles.techAlert} />
      )}

      <main className={styles.main}>
        <div className={styles.info}>
          <h2>my_project_manager</h2>
          {/* <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quidem
            tempore neque repudiandae quaerat provident minus, accusantium
            aliquid doloremque vitae dignissimos nemo sunt soluta impedit. Eaque
            odio fugit similique exercitationem? Atque voluptates eveniet, nam
            quisquam porro libero sed deserunt. Vel, voluptates! Officia
            accusantium dolores ducimus eum modi mollitia pariatur fugit dolorem
            impedit quis molestias velit obcaecati libero ad animi, adipisci
            asperiores ex facilis blanditiis quam? Expedita numquam, aperiam,
            omnis corporis beatae voluptatem tenetur quidem vero mollitia in
            possimus quia id consequatur, cumque unde repellendus autem
            exercitationem molestiae quis officiis. Veritatis neque quod eos
            cupiditate magnam blanditiis. Amet, maiores recusandae hic eveniet
            quos vitae odio dolore sint voluptatum aliquid, et modi
            consequuntur. Hic aut dignissimos mollitia debitis delectus animi
            sapiente, maxime recusandae eius officia repellendus tenetur
            praesentium corrupti natus quaerat sequi esse cum? Veniam officiis
            dolorem iste sunt ipsam obcaecati provident accusamus dicta
            voluptatum placeat ex impedit facilis excepturi recusandae, corporis
            similique ducimus quod ipsa nisi consequatur. Asperiores, quas
            placeat optio vero omnis dolores culpa doloribus in dolore deleniti
            sequi amet qui accusantium esse aperiam sed molestiae tempora cumque
            veniam et. Eos fugit aut aperiam corporis dolore modi, libero
            obcaecati et sed dolor necessitatibus? Dignissimos expedita hic
            labore doloremque atque, reprehenderit maxime itaque facilis id
            corrupti impedit. Sequi minima rerum temporibus libero numquam optio
            iure voluptates laboriosam commodi asperiores corporis, placeat
            accusantium odio, assumenda porro expedita sunt qui quidem. Error
            debitis eum tenetur aliquid inventore id qui adipisci et
            voluptatibus veniam iure iusto optio omnis, quo voluptatem
            consectetur corporis explicabo quis unde? Unde et, non blanditiis
            sed similique nemo, accusamus maiores quia eius, vel esse cum.
            Quisquam aperiam nulla accusantium sunt id dolorum soluta minima
            porro omnis accusamus consectetur reprehenderit eligendi fuga optio
            asperiores amet a, sapiente corporis qui, dolores architecto
            quaerat. Numquam placeat distinctio itaque quae? Beatae dolores
            itaque incidunt, eligendi et sed nisi magni nihil nesciunt dicta rem
            dolorem! Provident eaque expedita ullam molestiae, aliquid quibusdam
            eius reprehenderit similique nulla ipsam natus repellendus? Quia
            ratione eligendi itaque ipsum, quo perferendis magnam at qui.
            Aspernatur fugit adipisci aliquam! Cum delectus fuga quae
            repudiandae dignissimos quisquam nemo ea deserunt cupiditate
            voluptas illum temporibus distinctio, facilis, harum debitis. Omnis
            perferendis iure minima inventore quia incidunt odit recusandae a
            vel neque eaque delectus, vitae molestiae eveniet velit asperiores
            quisquam excepturi labore aut enim temporibus et natus error
            repellat. Animi quae harum, quo cupiditate officiis, deleniti vel
            odio voluptate quas eos hic quos suscipit eum. Blanditiis reiciendis
            asperiores aut vel! Inventore eaque deleniti quisquam dolores. At
            voluptatum nemo officia id eveniet excepturi blanditiis facere.
            Voluptas libero assumenda cupiditate nulla provident culpa ut qui,
            iusto doloremque fuga veritatis, veniam soluta voluptates impedit,
            maxime est at commodi aliquam. Culpa, nam omnis! Quae minus animi
            suscipit similique alias necessitatibus repellat laborum corporis,
            in totam, ab qui iste praesentium, impedit odit! Ad delectus
            cupiditate quia eum cum ratione cumque facilis dicta odit. Obcaecati
            quidem quisquam non sit quo rem praesentium aperiam officiis? Ad
            quisquam beatae culpa dolor saepe, fuga magnam cumque dolorem
            repellendus ullam praesentium assumenda! At cumque aliquid aut
            repudiandae error ullam eveniet, quod quo quae illo odio saepe
            numquam expedita, sapiente consequatur voluptates nobis. Officia,
            perspiciatis facere provident autem dolorem accusantium earum cumque
            ducimus maxime accusamus fugiat hic necessitatibus excepturi?
            Dolores, nihil. Exercitationem ullam modi consectetur eligendi
            recusandae tempora atque molestiae quos eum in. Molestiae,
            assumenda? Numquam laborum, totam dolor minus, similique voluptas
            magni, et unde adipisci quae consequuntur nobis culpa odit? Officia
            ipsum adipisci ea sunt pariatur neque quasi optio dolore error eum
            consequuntur itaque quo dicta architecto suscipit temporibus,
            tempora sequi inventore soluta nemo incidunt repudiandae corrupti
            veritatis. Tenetur ipsam fugiat sequi ratione modi ducimus deleniti
            rem repellendus voluptas ex voluptatum mollitia minima beatae,
            placeat id fuga eius? Ad aliquam ex, accusantium quas laboriosam
            atque quaerat recusandae fugiat maxime, odit accusamus omnis
            sapiente quisquam, quod non temporibus. Qui facilis culpa, earum
            distinctio eius ut iusto natus. Sed dolorum nam consequatur.
            Laudantium vitae officia aliquid blanditiis. Fugiat obcaecati
            reiciendis aspernatur hic corrupti odit quidem praesentium aperiam
            illo facilis? Dolore repudiandae pariatur ut enim culpa a,
            reprehenderit delectus suscipit facilis. Magni, laborum, veritatis
            eaque sequi saepe vero neque dignissimos alias fuga illo mollitia.
            Vero harum fuga accusamus expedita voluptas recusandae quis laborum,
            similique rerum impedit, unde aut, totam cupiditate vitae
            reprehenderit maiores enim dignissimos sint repellat. Enim
            necessitatibus porro neque repudiandae, tenetur illo. Nam quam
            temporibus voluptatibus quis sunt accusantium itaque nesciunt ipsam
            distinctio? Rerum delectus dolorem nesciunt neque, possimus iste
            autem sit voluptates assumenda illo suscipit atque, velit impedit
            quas natus quia dolore cumque praesentium. Ea rerum voluptas
            quibusdam laboriosam eligendi, quasi, alias facilis blanditiis
            consectetur deleniti officiis voluptates sunt harum quas? Totam quas
            sint modi ratione quod aut culpa accusantium ad ducimus, labore
            perspiciatis suscipit, sit veritatis repudiandae animi pariatur
            minus, deserunt sapiente necessitatibus eius adipisci nobis.
            Laboriosam, quia facilis, vitae debitis iure ab autem cumque cum
            corrupti harum veniam. At illo aut assumenda eius cum est voluptatem
            quidem, id molestias incidunt ullam. Tempora atque velit, eius neque
            praesentium repellendus rem libero reiciendis voluptatum non facere
            nisi dignissimos natus quo saepe dolor hic et perspiciatis
            architecto adipisci assumenda! Numquam esse distinctio inventore et
            quibusdam veniam labore eaque, repellat quos sed? Quasi enim, in
            aperiam mollitia harum, molestiae eos eum veritatis cum, ullam iste!
            Repellat inventore odio neque qui sed quasi nemo. Optio labore
            aperiam at ratione, sed eius. Officia aspernatur alias cum, impedit
            quod velit maiores amet fuga sed iusto voluptatibus accusantium
            soluta delectus sit autem! Amet, laudantium? Provident eos non velit
            hic totam nostrum perspiciatis excepturi, nihil repellendus
            voluptate. Eaque odit, sit distinctio exercitationem odio expedita,
            possimus magni, sunt nihil officia illum nemo perferendis voluptatem
            tempore similique ut aperiam sed atque perspiciatis fugit quibusdam
            quasi reprehenderit? Error, blanditiis. Saepe blanditiis
            necessitatibus a reiciendis odit aliquid laudantium molestias quia
            quas. Similique cum obcaecati modi nulla sunt sequi consequatur
            atque laborum minima aliquam, dolorem temporibus totam debitis,
            tempore, quam corrupti fugit eos odio magni nesciunt! Ipsum
            eligendi, ipsam quae fugit porro dolores asperiores sequi.
            Consequatur iste, fugiat vitae voluptas error corrupti sed eos eum
            quo.
          </p> */}
        </div>
        <div className={styles.content}>
          <div className={styles.scrollContainer}>
            <div className={styles.container}>{children || <Outlet />}</div>
          </div>
        </div>
      </main>
    </div>
  );
};
