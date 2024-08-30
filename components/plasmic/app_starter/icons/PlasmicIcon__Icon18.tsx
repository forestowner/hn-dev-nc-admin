// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon18IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon18Icon(props: Icon18IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 26 27"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M24.374 9.667A1.625 1.625 0 0122.75 8.04V6.9a.325.325 0 00-.555-.23l-4.622 4.623a1.625 1.625 0 11-2.299-2.299l4.623-4.622a.325.325 0 00-.23-.555h-1.143a1.625 1.625 0 110-3.25h5.851A1.622 1.622 0 0126 2.19v5.85c0 .898-.728 1.626-1.626 1.626zm-22.752 7.8c.897 0 1.625.727 1.625 1.625v1.143a.325.325 0 00.555.23l4.623-4.624a1.625 1.625 0 112.299 2.299L6.1 22.763a.325.325 0 00.23.555h1.143a1.625 1.625 0 110 3.25H1.621a1.625 1.625 0 01-1.625-1.624v-5.852c0-.898.728-1.625 1.626-1.625z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon18Icon;
/* prettier-ignore-end */
