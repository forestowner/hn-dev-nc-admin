// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon21IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon21Icon(props: Icon21IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 23 16"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M11.5 15.72c-5.147 0-9.272-3.967-11.247-7.366L0 7.917l.253-.437C2.255 4.028 6.397 0 11.5 0s9.245 4.028 11.247 7.48l.253.437-.253.437c-1.967 3.4-6.1 7.367-11.247 7.367zM2.036 7.909c1.818 2.893 5.278 6.065 9.464 6.065 4.186 0 7.646-3.172 9.464-6.065C19.12 4.963 15.642 1.74 11.5 1.74S3.88 4.973 2.036 7.91z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M11.5 11.351a3.494 3.494 0 01-3.495-3.495A3.494 3.494 0 0111.5 4.361a3.495 3.495 0 110 6.99zm0-5.243c-.961 0-1.748.787-1.748 1.748s.787 1.748 1.748 1.748 1.748-.787 1.748-1.748-.787-1.748-1.748-1.748z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon21Icon;
/* prettier-ignore-end */
