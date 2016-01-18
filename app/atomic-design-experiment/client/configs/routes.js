import {injectDeps} from 'react-simple-di';
import {FlowRouter} from 'meteor/kadira:flow-router';

// Templates
import {default as OnePageView} from '/lib/client/patterns/templates/one-page-view.jsx';

// Routes
import {default as reactPattern} from './../pages/atoms/react-pattern.jsx';
import {default as headerBannerAlert} from './../pages/molecules/header-banner-alert.jsx';
import {default as headerBannerTitleText} from './../pages/molecules/header-banner-title-text.jsx';
import {default as headerBanner1} from './../pages/organisms/header-banner-1.jsx';

export const initRoutes = (context, actions) => {
  const OnePageViewCtx = injectDeps(context, actions)(OnePageView);
  const atomicDesignExperimentRoute = FlowRouter.group({
    prefix: '/atomic-design-experiment',
    name: 'atomic-design-experiment'
  });
  const atomRoute = atomicDesignExperimentRoute.group({
    prefix: '/atom',
    name: 'atom'
  });
  const moleculeRoute = atomicDesignExperimentRoute.group({
    prefix: '/molecule',
    name: 'molecule'
  });
  const organismRoute = atomicDesignExperimentRoute.group({
    prefix: '/organism',
    name: 'organism'
  });

  reactPattern(atomRoute, OnePageViewCtx);
  headerBannerAlert(moleculeRoute, OnePageViewCtx);
  headerBannerTitleText(moleculeRoute, OnePageViewCtx);
  headerBanner1(organismRoute, OnePageViewCtx);
};
