// import AccountMenu from "../../components/AccountMenu/AccountMenu";
// import Icon from "../../components/ui/Icon/Icon";
// import { setSidebarCollapsed } from "../../features/ui/uiSlice";
// import { useAppDispatch, useAppSelector } from "../../store/hooks";

// import styles from "./AccountSidebar.module.scss";

// const AccountSidebar = (): JSX.Element => {
//   const dispatch = useAppDispatch();
//   const { isSidebarCollapsed } = useAppSelector((state) => state.ui);

//   const toggleSidebar = (): void => {
//     dispatch(setSidebarCollapsed(isSidebarCollapsed ? false : true));
//   };

//   return (
//     <div
//       className={`${styles.sidebar} ${
//         isSidebarCollapsed ? styles.collapsed : ""
//       }`}
//     >
//       <button className={styles.toggleButton} onClick={toggleSidebar}>
//         <Icon className={styles.toggleButtonIcon} name="chevron" />
//       </button>
//       <AccountMenu className={styles.menu} collapsed={isSidebarCollapsed} />
//     </div>
//   );
// };

// export default AccountSidebar;
export default {};
