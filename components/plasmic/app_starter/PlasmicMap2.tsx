// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: vStZs4oovvtk4EJiDhWZhg
// Component: Goxso8ZulYvQ

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: vStZs4oovvtk4EJiDhWZhg/projectcss
import sty from "./PlasmicMap2.module.css"; // plasmic-import: Goxso8ZulYvQ/css

import Icon18Icon from "./icons/PlasmicIcon__Icon18"; // plasmic-import: RPnA0ySejbc7/icon
import Icon19Icon from "./icons/PlasmicIcon__Icon19"; // plasmic-import: MNpyKEAuhnIb/icon

createPlasmicElementProxy;

export type PlasmicMap2__VariantMembers = {
  unnamedVariant: "unnamedVariant";
};
export type PlasmicMap2__VariantsArgs = {
  unnamedVariant?: SingleBooleanChoiceArg<"unnamedVariant">;
};
type VariantPropType = keyof PlasmicMap2__VariantsArgs;
export const PlasmicMap2__VariantProps = new Array<VariantPropType>(
  "unnamedVariant"
);

export type PlasmicMap2__ArgsType = {};
type ArgPropType = keyof PlasmicMap2__ArgsType;
export const PlasmicMap2__ArgProps = new Array<ArgPropType>();

export type PlasmicMap2__OverridesType = {
  frame2321?: Flex__<"div">;
  frame2322?: Flex__<"div">;
};

export interface DefaultMap2Props {
  unnamedVariant?: SingleBooleanChoiceArg<"unnamedVariant">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicMap2__RenderFunc(props: {
  variants: PlasmicMap2__VariantsArgs;
  args: PlasmicMap2__ArgsType;
  overrides: PlasmicMap2__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = useCurrentUser?.() || {};

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "unnamedVariant",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.unnamedVariant
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  return (
    <Stack__
      as={"div"}
      data-plasmic-name={"frame2321"}
      data-plasmic-override={overrides.frame2321}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        plasmic_plasmic_rich_components_css.plasmic_tokens,
        sty.frame2321,
        {
          [sty.frame2321unnamedVariant]: hasVariant(
            $state,
            "unnamedVariant",
            "unnamedVariant"
          )
        }
      )}
    >
      <Icon18Icon
        className={classNames(projectcss.all, sty.svg__tVcor)}
        role={"img"}
      />

      {false ? (
        <Icon19Icon
          className={classNames(projectcss.all, sty.svg___5DeGc)}
          role={"img"}
        />
      ) : null}
      <PlasmicImg__
        alt={""}
        className={classNames(sty.img__rAs3, {
          [sty.imgunnamedVariant__rAs3PsvT]: hasVariant(
            $state,
            "unnamedVariant",
            "unnamedVariant"
          )
        })}
        displayHeight={"auto"}
        displayMaxHeight={"none"}
        displayMaxWidth={"100%"}
        displayMinHeight={"0"}
        displayMinWidth={"0"}
        displayWidth={"45px"}
        loading={"lazy"}
        src={{
          src: "/plasmic/app_starter/images/image24.svg",
          fullWidth: 46,
          fullHeight: 46,
          aspectRatio: 1
        }}
      />

      {false ? (
        <Stack__
          as={"div"}
          data-plasmic-name={"frame2322"}
          data-plasmic-override={overrides.frame2322}
          hasGap={true}
          className={classNames(projectcss.all, sty.frame2322)}
        >
          <Icon18Icon
            className={classNames(projectcss.all, sty.svg__curzs)}
            role={"img"}
          />

          {false ? (
            <Icon19Icon
              className={classNames(projectcss.all, sty.svg__qKtjl)}
              role={"img"}
            />
          ) : null}
          <PlasmicImg__
            alt={""}
            className={classNames(sty.img__qPbEt)}
            displayHeight={"auto"}
            displayMaxHeight={"none"}
            displayMaxWidth={"100%"}
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={"45px"}
            loading={"lazy"}
            src={{
              src: "/plasmic/app_starter/images/image24.svg",
              fullWidth: 46,
              fullHeight: 46,
              aspectRatio: 1
            }}
          />
        </Stack__>
      ) : null}
    </Stack__>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  frame2321: ["frame2321", "frame2322"],
  frame2322: ["frame2322"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  frame2321: "div";
  frame2322: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicMap2__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicMap2__VariantsArgs;
    args?: PlasmicMap2__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicMap2__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicMap2__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicMap2__ArgProps,
          internalVariantPropNames: PlasmicMap2__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicMap2__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "frame2321") {
    func.displayName = "PlasmicMap2";
  } else {
    func.displayName = `PlasmicMap2.${nodeName}`;
  }
  return func;
}

export const PlasmicMap2 = Object.assign(
  // Top-level PlasmicMap2 renders the root element
  makeNodeComponent("frame2321"),
  {
    // Helper components rendering sub-elements
    frame2322: makeNodeComponent("frame2322"),

    // Metadata about props expected for PlasmicMap2
    internalVariantProps: PlasmicMap2__VariantProps,
    internalArgProps: PlasmicMap2__ArgProps
  }
);

export default PlasmicMap2;
/* prettier-ignore-end */
