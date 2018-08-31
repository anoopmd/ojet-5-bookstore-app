/**
 * @license
 * Copyright (c) 2014, 2018, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
'use strict';

/**
 * Example of Require.js boostrap javascript
 */

requirejs.config(
{
  baseUrl: './',

  // Path mappings for the logical module names
  // Update the main-release-paths.json for release mode when updating the mappings
  paths:
//injector:mainReleasePaths

{
  "knockout":"web/js/libs/knockout/knockout-3.4.2.debug",
  "jquery":"web/js/libs/jquery/jquery-3.3.1",
  "jqueryui-amd":"web/js/libs/jquery/jqueryui-amd-1.12.1",
  "promise":"web/js/libs/es6-promise/es6-promise",
  "hammerjs":"web/js/libs/hammer/hammer-2.0.8",
  "ojdnd":"web/js/libs/dnd-polyfill/dnd-polyfill-1.0.0",
  "ojs":"web/js/libs/oj/v5.1.0/debug",
  "ojL10n":"web/js/libs/oj/v5.1.0/ojL10n",
  "ojtranslations":"web/js/libs/oj/v5.1.0/resources",
  "text":"web/js/libs/require/text",
  "signals":"web/js/libs/js-signals/signals",
  "customElements":"web/js/libs/webcomponents/custom-elements.min",
  "css":"web/js/libs/require-css/css",
  "mockjax":"node_modules/jquery-mockjax/dist/jquery.mockjax"
}

//endinjector
  ,
  // Shim configurations for modules that do not expose AMD
  shim:
  {
    'jquery':
    {
      exports: ['jQuery', '$']
    }
  }
}
);