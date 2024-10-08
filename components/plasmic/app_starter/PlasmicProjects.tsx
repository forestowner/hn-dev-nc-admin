// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: vStZs4oovvtk4EJiDhWZhg
// Component: knviSbvzqyHO

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
import * as plasmicAuth from "@plasmicapp/react-web/lib/auth";
import { usePlasmicDataSourceContext } from "@plasmicapp/data-sources-context";

import PageLayout from "../../PageLayout"; // plasmic-import: u4-THcRWcR5h/component
import { AntdInput } from "@plasmicpkgs/antd5/skinny/registerInput";
import { inputHelpers as AntdInput_Helpers } from "@plasmicpkgs/antd5/skinny/registerInput";
import { AntdButton } from "@plasmicpkgs/antd5/skinny/registerButton";
import { CmsQueryRepeater } from "@plasmicpkgs/plasmic-cms";
import Tilt from "@plasmicpkgs/react-parallax-tilt";
import { CmsRowField } from "@plasmicpkgs/plasmic-cms";
import { Fetcher } from "@plasmicapp/react-web/lib/data-sources";

import { useScreenVariants as useScreenVariantssoBw3NbEif13 } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: soBw3nbEIF13/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: vStZs4oovvtk4EJiDhWZhg/projectcss
import sty from "./PlasmicProjects.module.css"; // plasmic-import: knviSbvzqyHO/css

import Icon6Icon from "./icons/PlasmicIcon__Icon6"; // plasmic-import: PpAKhxcYa1Y-/icon

createPlasmicElementProxy;

export type PlasmicProjects__VariantMembers = {};
export type PlasmicProjects__VariantsArgs = {};
type VariantPropType = keyof PlasmicProjects__VariantsArgs;
export const PlasmicProjects__VariantProps = new Array<VariantPropType>();

export type PlasmicProjects__ArgsType = {};
type ArgPropType = keyof PlasmicProjects__ArgsType;
export const PlasmicProjects__ArgProps = new Array<ArgPropType>();

export type PlasmicProjects__OverridesType = {
  root?: Flex__<"div">;
  pageLayout?: Flex__<typeof PageLayout>;
  input?: Flex__<typeof AntdInput>;
  button?: Flex__<typeof AntdButton>;
  svg?: Flex__<"svg">;
  h6Bold700LineHeight12?: Flex__<"div">;
  cmsDataFetcher?: Flex__<typeof CmsQueryRepeater>;
  tilt?: Flex__<typeof Tilt>;
};

export interface DefaultProjectsProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicProjects__RenderFunc(props: {
  variants: PlasmicProjects__VariantsArgs;
  args: PlasmicProjects__ArgsType;
  overrides: PlasmicProjects__OverridesType;
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
        path: "input.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        onMutate: generateOnMutateForSpec("value", AntdInput_Helpers)
      },
      {
        path: "unnamedGroupOfVariants",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          $props.unnamedGroupOfVariants
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

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantssoBw3NbEif13()
  });

  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">{PlasmicProjects.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicProjects.pageMetadata.title}
        />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicProjects.pageMetadata.title}
        />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_antd_5_hostless_css.plasmic_tokens,
            plasmic_plasmic_rich_components_css.plasmic_tokens,
            sty.root
          )}
        >
          <PageLayout
            data-plasmic-name={"pageLayout"}
            data-plasmic-override={overrides.pageLayout}
            className={classNames("__wab_instance", sty.pageLayout)}
          >
            <DataCtxReader__>
              {$ctx => (
                <React.Fragment>
                  <section
                    className={classNames(projectcss.all, sty.section__hDcZ5)}
                  >
                    {(() => {
                      const child$Props = {
                        className: classNames("__wab_instance", sty.input),
                        onChange: generateStateOnChangePropForCodeComponents(
                          $state,
                          "value",
                          ["input", "value"],
                          AntdInput_Helpers
                        ),
                        value: generateStateValueProp($state, [
                          "input",
                          "value"
                        ])
                      };
                      initializeCodeComponentStates(
                        $state,
                        [
                          {
                            name: "value",
                            plasmicStateName: "input.value"
                          }
                        ],
                        [],
                        AntdInput_Helpers ?? {},
                        child$Props
                      );

                      return (
                        <AntdInput
                          data-plasmic-name={"input"}
                          data-plasmic-override={overrides.input}
                          {...child$Props}
                        />
                      );
                    })()}
                    <AntdButton
                      data-plasmic-name={"button"}
                      data-plasmic-override={overrides.button}
                      className={classNames("__wab_instance", sty.button)}
                      onClick={async () => {
                        const $steps = {};

                        $steps["goToHomepage"] = true
                          ? (() => {
                              const actionArgs = { destination: `/projects` };
                              return (({ destination }) => {
                                if (
                                  typeof destination === "string" &&
                                  destination.startsWith("#")
                                ) {
                                  document
                                    .getElementById(destination.substr(1))
                                    .scrollIntoView({ behavior: "smooth" });
                                } else {
                                  __nextRouter?.push(destination);
                                }
                              })?.apply(null, [actionArgs]);
                            })()
                          : undefined;
                        if (
                          $steps["goToHomepage"] != null &&
                          typeof $steps["goToHomepage"] === "object" &&
                          typeof $steps["goToHomepage"].then === "function"
                        ) {
                          $steps["goToHomepage"] = await $steps["goToHomepage"];
                        }
                      }}
                    >
                      <Icon6Icon
                        data-plasmic-name={"svg"}
                        data-plasmic-override={overrides.svg}
                        className={classNames(projectcss.all, sty.svg)}
                        role={"img"}
                      />

                      <div
                        data-plasmic-name={"h6Bold700LineHeight12"}
                        data-plasmic-override={overrides.h6Bold700LineHeight12}
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.h6Bold700LineHeight12
                        )}
                      >
                        {"New Plan"}
                      </div>
                    </AntdButton>
                  </section>
                  <section
                    className={classNames(projectcss.all, sty.section__eQjKs)}
                  >
                    {(_par =>
                      !_par ? [] : Array.isArray(_par) ? _par : [_par])(
                      (() => {
                        try {
                          return [2];
                        } catch (e) {
                          if (
                            e instanceof TypeError ||
                            e?.plasmicType === "PlasmicUndefinedDataError"
                          ) {
                            return [];
                          }
                          throw e;
                        }
                      })()
                    ).map((__plasmic_item_0, __plasmic_idx_0) => {
                      const currentItem = __plasmic_item_0;
                      const currentIndex = __plasmic_idx_0;
                      return (
                        <CmsQueryRepeater
                          data-plasmic-name={"cmsDataFetcher"}
                          data-plasmic-override={overrides.cmsDataFetcher}
                          className={classNames(
                            "__wab_instance",
                            sty.cmsDataFetcher
                          )}
                          desc={false}
                          emptyMessage={
                            <DataCtxReader__>
                              {$ctx => (
                                <div
                                  className={classNames(
                                    projectcss.all,
                                    projectcss.__wab_text,
                                    sty.text__htaV3
                                  )}
                                >
                                  {"No matching published entries found."}
                                </div>
                              )}
                            </DataCtxReader__>
                          }
                          forceEmptyState={false}
                          forceLoadingState={false}
                          key={currentIndex}
                          limit={0}
                          loadingMessage={
                            <DataCtxReader__>
                              {$ctx => (
                                <div
                                  className={classNames(
                                    projectcss.all,
                                    projectcss.__wab_text,
                                    sty.text__scLvo
                                  )}
                                >
                                  {"Loading..."}
                                </div>
                              )}
                            </DataCtxReader__>
                          }
                          noAutoRepeat={false}
                          noLayout={false}
                          useDraft={false}
                        >
                          <DataCtxReader__>
                            {$ctx => (
                              <Tilt
                                data-plasmic-name={"tilt"}
                                data-plasmic-override={overrides.tilt}
                                className={classNames(
                                  "__wab_instance",
                                  sty.tilt
                                )}
                                glareBorderRadius={"3px"}
                                glareEnable={false}
                                glarePosition={"all"}
                                tiltEnable={true}
                                tiltReverse={true}
                              >
                                <div
                                  className={classNames(
                                    projectcss.all,
                                    sty.freeBox__ruVql
                                  )}
                                  onAnimationStart={async event => {
                                    const $steps = {};

                                    $steps["updateInputValue"] = true
                                      ? (() => {
                                          const actionArgs = {
                                            variable: {
                                              objRoot: $state,
                                              variablePath: ["input", "value"]
                                            },
                                            operation: 0
                                          };
                                          return (({
                                            variable,
                                            value,
                                            startIndex,
                                            deleteCount
                                          }) => {
                                            if (!variable) {
                                              return;
                                            }
                                            const { objRoot, variablePath } =
                                              variable;

                                            $stateSet(
                                              objRoot,
                                              variablePath,
                                              value
                                            );
                                            return value;
                                          })?.apply(null, [actionArgs]);
                                        })()
                                      : undefined;
                                    if (
                                      $steps["updateInputValue"] != null &&
                                      typeof $steps["updateInputValue"] ===
                                        "object" &&
                                      typeof $steps["updateInputValue"].then ===
                                        "function"
                                    ) {
                                      $steps["updateInputValue"] = await $steps[
                                        "updateInputValue"
                                      ];
                                    }
                                  }}
                                  onClick={async event => {
                                    const $steps = {};

                                    $steps["goToPage"] =
                                      $ctx.plasmicCmsHousesItem.data.status !==
                                      "Build in Progress"
                                        ? (() => {
                                            const actionArgs = {
                                              destination: `/new-page`
                                            };
                                            return (({ destination }) => {
                                              if (
                                                typeof destination ===
                                                  "string" &&
                                                destination.startsWith("#")
                                              ) {
                                                document
                                                  .getElementById(
                                                    destination.substr(1)
                                                  )
                                                  .scrollIntoView({
                                                    behavior: "smooth"
                                                  });
                                              } else {
                                                __nextRouter?.push(destination);
                                              }
                                            })?.apply(null, [actionArgs]);
                                          })()
                                        : undefined;
                                    if (
                                      $steps["goToPage"] != null &&
                                      typeof $steps["goToPage"] === "object" &&
                                      typeof $steps["goToPage"].then ===
                                        "function"
                                    ) {
                                      $steps["goToPage"] = await $steps[
                                        "goToPage"
                                      ];
                                    }
                                  }}
                                >
                                  <div
                                    className={classNames(
                                      projectcss.all,
                                      sty.freeBox___8P6Iz
                                    )}
                                  >
                                    <CmsRowField
                                      className={classNames(
                                        "__wab_instance",
                                        sty.cmsEntryField__yD0Xy
                                      )}
                                      field={"coverImage"}
                                      themeResetClassName={classNames(
                                        projectcss.root_reset,
                                        projectcss.root_reset_tags,
                                        projectcss.plasmic_default_styles,
                                        projectcss.plasmic_mixins,
                                        projectcss.plasmic_tokens,
                                        plasmic_antd_5_hostless_css.plasmic_tokens,
                                        plasmic_plasmic_rich_components_css.plasmic_tokens
                                      )}
                                    />

                                    <div
                                      className={classNames(
                                        projectcss.all,
                                        sty.freeBox__phg7Z
                                      )}
                                    >
                                      {(() => {
                                        try {
                                          return (
                                            $ctx.plasmicCmsHousesItem.data
                                              .status !== "Finished"
                                          );
                                        } catch (e) {
                                          if (
                                            e instanceof TypeError ||
                                            e?.plasmicType ===
                                              "PlasmicUndefinedDataError"
                                          ) {
                                            return true;
                                          }
                                          throw e;
                                        }
                                      })() ? (
                                        <CmsRowField
                                          className={classNames(
                                            "__wab_instance",
                                            sty.cmsEntryField___4ZJpk
                                          )}
                                          field={"status"}
                                          themeResetClassName={classNames(
                                            projectcss.root_reset,
                                            projectcss.root_reset_tags,
                                            projectcss.plasmic_default_styles,
                                            projectcss.plasmic_mixins,
                                            projectcss.plasmic_tokens,
                                            plasmic_antd_5_hostless_css.plasmic_tokens,
                                            plasmic_plasmic_rich_components_css.plasmic_tokens
                                          )}
                                        />
                                      ) : null}
                                    </div>
                                  </div>
                                  <CmsRowField
                                    className={classNames(
                                      "__wab_instance",
                                      sty.cmsEntryField__ip2Ts
                                    )}
                                    field={"title"}
                                    themeResetClassName={classNames(
                                      projectcss.root_reset,
                                      projectcss.root_reset_tags,
                                      projectcss.plasmic_default_styles,
                                      projectcss.plasmic_mixins,
                                      projectcss.plasmic_tokens,
                                      plasmic_antd_5_hostless_css.plasmic_tokens,
                                      plasmic_plasmic_rich_components_css.plasmic_tokens
                                    )}
                                  />

                                  <div
                                    className={classNames(
                                      projectcss.all,
                                      sty.freeBox__fo2Uj
                                    )}
                                  >
                                    <div
                                      className={classNames(
                                        projectcss.all,
                                        sty.freeBox__ygo3X
                                      )}
                                    >
                                      <CmsRowField
                                        className={classNames(
                                          "__wab_instance",
                                          sty.cmsEntryField__mpq65
                                        )}
                                        field={"bedrooms"}
                                        themeResetClassName={classNames(
                                          projectcss.root_reset,
                                          projectcss.root_reset_tags,
                                          projectcss.plasmic_default_styles,
                                          projectcss.plasmic_mixins,
                                          projectcss.plasmic_tokens,
                                          plasmic_antd_5_hostless_css.plasmic_tokens,
                                          plasmic_plasmic_rich_components_css.plasmic_tokens
                                        )}
                                      />

                                      <div
                                        className={classNames(
                                          projectcss.all,
                                          projectcss.__wab_text,
                                          sty.text__dqOfH
                                        )}
                                      >
                                        {"Bedrooms"}
                                      </div>
                                    </div>
                                    <div
                                      className={classNames(
                                        projectcss.all,
                                        sty.freeBox__q9Svg
                                      )}
                                    >
                                      <CmsRowField
                                        className={classNames(
                                          "__wab_instance",
                                          sty.cmsEntryField__x7CNi
                                        )}
                                        field={"bathrooms"}
                                        themeResetClassName={classNames(
                                          projectcss.root_reset,
                                          projectcss.root_reset_tags,
                                          projectcss.plasmic_default_styles,
                                          projectcss.plasmic_mixins,
                                          projectcss.plasmic_tokens,
                                          plasmic_antd_5_hostless_css.plasmic_tokens,
                                          plasmic_plasmic_rich_components_css.plasmic_tokens
                                        )}
                                      />

                                      <div
                                        className={classNames(
                                          projectcss.all,
                                          projectcss.__wab_text,
                                          sty.text__xG1Zz
                                        )}
                                      >
                                        {"Bathrooms"}
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className={classNames(
                                      projectcss.all,
                                      sty.freeBox__iiEr8
                                    )}
                                  >
                                    <CmsRowField
                                      className={classNames(
                                        "__wab_instance",
                                        sty.cmsEntryField__tmx6C
                                      )}
                                      field={"squareFeet"}
                                      themeResetClassName={classNames(
                                        projectcss.root_reset,
                                        projectcss.root_reset_tags,
                                        projectcss.plasmic_default_styles,
                                        projectcss.plasmic_mixins,
                                        projectcss.plasmic_tokens,
                                        plasmic_antd_5_hostless_css.plasmic_tokens,
                                        plasmic_plasmic_rich_components_css.plasmic_tokens
                                      )}
                                    />

                                    <div
                                      className={classNames(
                                        projectcss.all,
                                        projectcss.__wab_text,
                                        sty.text___5H5HI
                                      )}
                                    >
                                      {"Heated Sqft"}
                                    </div>
                                  </div>
                                  <div
                                    className={classNames(
                                      projectcss.all,
                                      sty.freeBox___3Qi2O
                                    )}
                                  >
                                    <div
                                      className={classNames(
                                        projectcss.all,
                                        projectcss.__wab_text,
                                        sty.text__dxiZr
                                      )}
                                    >
                                      {"("}
                                    </div>
                                    <CmsRowField
                                      className={classNames(
                                        "__wab_instance",
                                        sty.cmsEntryField___5CGdv
                                      )}
                                      field={"totalSquareFeet"}
                                      themeResetClassName={classNames(
                                        projectcss.root_reset,
                                        projectcss.root_reset_tags,
                                        projectcss.plasmic_default_styles,
                                        projectcss.plasmic_mixins,
                                        projectcss.plasmic_tokens,
                                        plasmic_antd_5_hostless_css.plasmic_tokens,
                                        plasmic_plasmic_rich_components_css.plasmic_tokens
                                      )}
                                    />

                                    <div
                                      className={classNames(
                                        projectcss.all,
                                        projectcss.__wab_text,
                                        sty.text__k0Kji
                                      )}
                                    >
                                      {" Total Sqft)"}
                                    </div>
                                  </div>
                                </div>
                              </Tilt>
                            )}
                          </DataCtxReader__>
                        </CmsQueryRepeater>
                      );
                    })}
                  </section>
                </React.Fragment>
              )}
            </DataCtxReader__>
          </PageLayout>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "pageLayout",
    "input",
    "button",
    "svg",
    "h6Bold700LineHeight12",
    "cmsDataFetcher",
    "tilt"
  ],
  pageLayout: [
    "pageLayout",
    "input",
    "button",
    "svg",
    "h6Bold700LineHeight12",
    "cmsDataFetcher",
    "tilt"
  ],
  input: ["input"],
  button: ["button", "svg", "h6Bold700LineHeight12"],
  svg: ["svg"],
  h6Bold700LineHeight12: ["h6Bold700LineHeight12"],
  cmsDataFetcher: ["cmsDataFetcher", "tilt"],
  tilt: ["tilt"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  pageLayout: typeof PageLayout;
  input: typeof AntdInput;
  button: typeof AntdButton;
  svg: "svg";
  h6Bold700LineHeight12: "div";
  cmsDataFetcher: typeof CmsQueryRepeater;
  tilt: typeof Tilt;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicProjects__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicProjects__VariantsArgs;
    args?: PlasmicProjects__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicProjects__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicProjects__ArgsType,
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
          internalArgPropNames: PlasmicProjects__ArgProps,
          internalVariantPropNames: PlasmicProjects__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicProjects__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicProjects";
  } else {
    func.displayName = `PlasmicProjects.${nodeName}`;
  }
  return func;
}

function withUsePlasmicAuth<P extends object>(
  WrappedComponent: React.ComponentType<P>
) {
  const WithUsePlasmicAuthComponent: React.FC<P> = props => {
    const dataSourceCtx = usePlasmicDataSourceContext() ?? {};
    const { isUserLoading, user, token } = plasmicAuth.usePlasmicAuth({
      appId: "vStZs4oovvtk4EJiDhWZhg"
    });

    return (
      <PlasmicDataSourceContextProvider__
        value={{
          ...dataSourceCtx,
          isUserLoading,
          userAuthToken: token,
          user
        }}
      >
        <WrappedComponent {...props} />
      </PlasmicDataSourceContextProvider__>
    );
  };
  return WithUsePlasmicAuthComponent;
}

export const PlasmicProjects = Object.assign(
  // Top-level PlasmicProjects renders the root element
  withUsePlasmicAuth(makeNodeComponent("root")),
  {
    // Helper components rendering sub-elements
    pageLayout: makeNodeComponent("pageLayout"),
    input: makeNodeComponent("input"),
    button: makeNodeComponent("button"),
    svg: makeNodeComponent("svg"),
    h6Bold700LineHeight12: makeNodeComponent("h6Bold700LineHeight12"),
    cmsDataFetcher: makeNodeComponent("cmsDataFetcher"),
    tilt: makeNodeComponent("tilt"),

    // Metadata about props expected for PlasmicProjects
    internalVariantProps: PlasmicProjects__VariantProps,
    internalArgProps: PlasmicProjects__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "projects",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicProjects;
/* prettier-ignore-end */
