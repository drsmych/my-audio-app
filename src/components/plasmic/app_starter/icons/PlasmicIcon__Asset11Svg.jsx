/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Asset11SvgIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 284.93 284.93"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g data-name={"Layer_1"}>
        <path
          d={
            "M239.83 100.63c-26.5.1-48.39-21.75-48.35-48.28.02-14.53 6.48-27.52 16.68-36.32C188.5 5.79 166.16 0 142.47 0 63.78 0 0 63.78 0 142.47s63.78 142.47 142.47 142.47 142.47-63.78 142.47-142.47c0-19.81-4.05-38.68-11.36-55.82-8.65 8.61-20.55 13.94-33.75 13.99z"
          }
          fill={"#fff"}
        ></path>

        <path
          d={
            "M239.97 12.32c22.02-.05 39.63 17.41 39.7 39.35.08 22.06-17.54 39.88-39.51 39.96-21.83.08-39.85-17.91-39.82-39.77.03-21.85 17.72-39.51 39.62-39.55z"
          }
          fill={"#4068b2"}
        ></path>

        <text
          transform={"translate(34.81 173.9)"}
          fill={"#231f20"}
          fontFamily={"Roboto-Bold,Roboto"}
          fontSize={"93.86"}
          fontWeight={"700"}
        >
          <tspan x={"0"} y={"0"}>
            Deep
          </tspan>
        </text>
      </g>
    </svg>
  );
}

export default Asset11SvgIcon;
/* prettier-ignore-end */
