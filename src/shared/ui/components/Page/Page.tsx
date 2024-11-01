import { ReactNode } from "react";
import { PageTitle } from "../../../router";

interface PageProps {
  title?: string;
  children?: ReactNode;
}

export const Page = ({ title, children }: PageProps): JSX.Element => {
  return (
    <>
      <PageTitle title={title} />
      {children}
    </>
  );
};
