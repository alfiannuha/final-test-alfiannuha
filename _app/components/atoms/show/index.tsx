/* eslint-disable import/no-unresolved */
import { ShowProps } from "@/atoms/show/types";

const Show: React.FC<ShowProps> = ({ when, children }) => {
  if (when) {
    return children;
  }
  return null;
};

export default Show;
