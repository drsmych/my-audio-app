/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: arPJ2mTnAS5GNcPYTirhFr
// Component: r7DdHzAofmHi
import * as React from "react";
import {
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  useCurrentUser
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv
} from "@plasmicapp/react-web/lib/host";
import * as plasmicAuth from "@plasmicapp/react-web/lib/auth";
import { usePlasmicDataSourceContext } from "@plasmicapp/data-sources-context";
import PageLayout from "../../PageLayout"; // plasmic-import: A2ZUyja4uXKy/component
import { AntdButton } from "@plasmicpkgs/antd5/skinny/registerButton";
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "../app_starter/plasmic.module.css"; // plasmic-import: arPJ2mTnAS5GNcPYTirhFr/projectcss
import sty from "./PlasmicHome.module.css"; // plasmic-import: r7DdHzAofmHi/css

createPlasmicElementProxy;

export const PlasmicHome__VariantProps = new Array();

export const PlasmicHome__ArgProps = new Array();

const $$ = {};

function PlasmicHome__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );
  const $props = {
    ...args,
    ...variants
  };
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const currentUser = useCurrentUser?.() || {};
  return (
    <React.Fragment>
      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"homepage"}
          data-plasmic-override={overrides.homepage}
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
            sty.homepage
          )}
        >
          <PageLayout
            data-plasmic-name={"homepageLayout"}
            data-plasmic-override={overrides.homepageLayout}
            className={classNames("__wab_instance", sty.homepageLayout)}
          >
            <DataCtxReader__>
              {$ctx => (
                <section
                  data-plasmic-name={"section"}
                  data-plasmic-override={overrides.section}
                  className={classNames(projectcss.all, sty.section)}
                >
                  <div
                    data-plasmic-name={"promptText"}
                    data-plasmic-override={overrides.promptText}
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.promptText
                    )}
                  >
                    {"<some text>"}
                  </div>
                  <div
                    className={classNames(projectcss.all, sty.freeBox__eFycg)}
                  >
                    <div
                      className={classNames(projectcss.all, sty.freeBox__wCr8E)}
                    >
                      <AntdButton
                        data-plasmic-name={"buttonA"}
                        data-plasmic-override={overrides.buttonA}
                        className={classNames("__wab_instance", sty.buttonA)}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__y6NgX
                          )}
                        >
                          {"A"}
                        </div>
                      </AntdButton>
                      <AntdButton
                        data-plasmic-name={"buttonC"}
                        data-plasmic-override={overrides.buttonC}
                        className={classNames("__wab_instance", sty.buttonC)}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text___8VOnd
                          )}
                        >
                          {"C"}
                        </div>
                      </AntdButton>
                    </div>
                    <div
                      className={classNames(projectcss.all, sty.freeBox__tisQz)}
                    >
                      <AntdButton
                        data-plasmic-name={"buttonB"}
                        data-plasmic-override={overrides.buttonB}
                        className={classNames("__wab_instance", sty.buttonB)}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__mS4Q
                          )}
                        >
                          {"B"}
                        </div>
                      </AntdButton>
                      <AntdButton
                        data-plasmic-name={"buttonD"}
                        data-plasmic-override={overrides.buttonD}
                        className={classNames("__wab_instance", sty.buttonD)}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__xPuXf
                          )}
                        >
                          {"D"}
                        </div>
                      </AntdButton>
                    </div>
                  </div>
                </section>
              )}
            </DataCtxReader__>
          </PageLayout>
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  homepage: [
    "homepage",
    "homepageLayout",
    "section",
    "promptText",
    "buttonA",
    "buttonC",
    "buttonB",
    "buttonD"
  ],

  homepageLayout: [
    "homepageLayout",
    "section",
    "promptText",
    "buttonA",
    "buttonC",
    "buttonB",
    "buttonD"
  ],

  section: [
    "section",
    "promptText",
    "buttonA",
    "buttonC",
    "buttonB",
    "buttonD"
  ],

  promptText: ["promptText"],
  buttonA: ["buttonA"],
  buttonC: ["buttonC"],
  buttonB: ["buttonB"],
  buttonD: ["buttonD"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicHome__ArgProps,
          internalVariantPropNames: PlasmicHome__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicHome__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "homepage") {
    func.displayName = "PlasmicHome";
  } else {
    func.displayName = `PlasmicHome.${nodeName}`;
  }
  return func;
}

function withUsePlasmicAuth(WrappedComponent) {
  const WithUsePlasmicAuthComponent = props => {
    const dataSourceCtx = usePlasmicDataSourceContext() ?? {};
    const { isUserLoading, user, token } = plasmicAuth.usePlasmicAuth({
      appId: "arPJ2mTnAS5GNcPYTirhFr"
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

export const PlasmicHome = Object.assign(
  // Top-level PlasmicHome renders the root element
  withUsePlasmicAuth(makeNodeComponent("homepage")),
  {
    // Helper components rendering sub-elements
    homepageLayout: makeNodeComponent("homepageLayout"),
    section: makeNodeComponent("section"),
    promptText: makeNodeComponent("promptText"),
    buttonA: makeNodeComponent("buttonA"),
    buttonC: makeNodeComponent("buttonC"),
    buttonB: makeNodeComponent("buttonB"),
    buttonD: makeNodeComponent("buttonD"),
    // Metadata about props expected for PlasmicHome
    internalVariantProps: PlasmicHome__VariantProps,
    internalArgProps: PlasmicHome__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicHome;
/* prettier-ignore-end */
