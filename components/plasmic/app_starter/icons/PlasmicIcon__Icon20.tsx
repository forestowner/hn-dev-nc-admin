// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon20IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon20Icon(props: Icon20IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 23 20"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M22.055 11.938l.945-.876L20.164 8V0H0v20h20.164v-6.125h-1.26v4.875h-8.696v-2.313h-1.26v2.313H1.26V9.812h7.688v2.626h1.26V8.562H1.26V1.25h17.644V4.5h-3.78v1.25h3.78v2.688l3.15 3.5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon20Icon;
/* prettier-ignore-end */
