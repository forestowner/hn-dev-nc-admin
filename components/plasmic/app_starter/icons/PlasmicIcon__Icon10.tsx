// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon10IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon10Icon(props: Icon10IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 55 20"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M22.055 11.938l.945-.876L20.164 8V0H0v20h20.164v-6.125h-1.26v4.875h-8.696v-2.313h-1.26v2.313H1.26V9.812h7.688v2.626h1.26V8.562H1.26V1.25h17.644V4.5h-3.78v1.25h3.78v2.688l3.15 3.5zM43.5 17.86c-5.147 0-9.272-3.967-11.247-7.366L32 10.057l.253-.437c2.002-3.452 6.144-7.48 11.247-7.48s9.245 4.028 11.247 7.48l.253.437-.253.437c-1.967 3.399-6.1 7.366-11.247 7.366zm-9.464-7.812c1.818 2.893 5.278 6.065 9.464 6.065 4.186 0 7.646-3.172 9.464-6.065-1.844-2.945-5.322-6.17-9.464-6.17s-7.62 3.234-9.464 6.17z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M43.5 13.491a3.494 3.494 0 01-3.495-3.495A3.494 3.494 0 0143.5 6.5a3.494 3.494 0 013.495 3.496A3.494 3.494 0 0143.5 13.49zm0-5.243c-.961 0-1.748.786-1.748 1.748 0 .96.787 1.747 1.748 1.747s1.748-.786 1.748-1.747c0-.962-.787-1.748-1.748-1.748z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon10Icon;
/* prettier-ignore-end */
