/*
 * v2 palette for SOGo
 *
 * Replaces js/theme.js (mailcow: data/conf/sogo/custom-theme.js). SOGo uses these palettes
 * at runtime for md-colors (inline colours) and its mdColors stylesheet (.md-fg / .md-bg),
 * even when the theme CSS is static. Each hue below is set for the role SOGo gives it,
 * so it matches v2-theme.css.
 */
(function() {
  'use strict';

  angular.module('SOGo.Common')
    .config(configure);

  configure.$inject = ['$mdThemingProvider'];
  function configure($mdThemingProvider) {

    // Primary: text on the dark surfaces
    //   default, hue-1 (500, 600): ink-muted (subheads, quota, calendar labels)
    //   hue-2 (800): ink (calendar day numbers and dates)
    //   400: magenta-ink (week days in the calendar list)
    $mdThemingProvider.definePalette('v2-ink', {
      '50': 'f1e9dc',
      '100': 'f1e9dc',
      '200': 'a89d92',
      '300': 'a89d92',
      '400': 'ff5fae',
      '500': 'a89d92',
      '600': 'a89d92',
      '700': '7a7069',
      '800': 'f1e9dc',
      '900': 'f1e9dc',
      'A100': 'ffc163',
      'A200': 'ffb03b',
      'A400': 'ff4a2e',
      'A700': 'ff5fae',
      'contrastDefaultColor': 'dark'
    });

    // Accent: heat
    //   default, hue-2 (500, A200): magenta (today, active toggles, ripples)
    //   hue-1 (A100): ink (text on the sign-in panel)
    //   600: magenta-ink (expand buttons), 400: ink-muted (drag handles)
    $mdThemingProvider.definePalette('v2-heat', {
      '50': 'ffc163',
      '100': 'ffc163',
      '200': 'ff5fae',
      '300': 'ff5fae',
      '400': 'a89d92',
      '500': 'ff2e93',
      '600': 'ff5fae',
      '700': 'ff2e93',
      '800': 'ff4a2e',
      '900': 'ff4a2e',
      'A100': 'f1e9dc',
      'A200': 'ff2e93',
      'A400': 'ff4a2e',
      'A700': 'ffb03b',
      'contrastDefaultColor': 'dark'
    });

    // Warn: ember
    $mdThemingProvider.definePalette('v2-ember', {
      '50': 'ff7a5e',
      '100': 'ff7a5e',
      '200': 'ff7a5e',
      '300': 'ff7a5e',
      '400': 'ff4a2e',
      '500': 'ff4a2e',
      '600': 'ff4a2e',
      '700': 'ff4a2e',
      '800': 'ff4a2e',
      '900': 'ff4a2e',
      'A100': 'ff7a5e',
      'A200': 'ff4a2e',
      'A400': 'ff4a2e',
      'A700': 'ff4a2e',
      'contrastDefaultColor': 'dark'
    });

    // Background: warm soot
    //   200: ground-raised (detail column), 300: ground-sunken (side navigation)
    //   500, 600: ink-muted (quiet text), 700: ink
    //   default, hue-1 (50, A100): ground; hue-2 (A200): ground-raised; hue-3 (900): ground-sunken
    $mdThemingProvider.definePalette('v2-ground', {
      '50': '0e0c0b',
      '100': '0e0c0b',
      '200': '191614',
      '300': '070605',
      '400': '2d2825',
      '500': 'a89d92',
      '600': 'a89d92',
      '700': 'f1e9dc',
      '800': '191614',
      '900': '070605',
      '1000': '6a2cf0',
      'A100': '0e0c0b',
      'A200': '191614',
      'A400': '070605',
      'A700': '070605',
      'contrastDefaultColor': 'light'
    });

    $mdThemingProvider.theme('default')
      .primaryPalette('v2-ink', {
        'default': '500',
        'hue-1': '600',
        'hue-2': '800',
        'hue-3': 'A700'
      })
      .accentPalette('v2-heat', {
        'default': '500',
        'hue-1': 'A100',
        'hue-2': 'A200',
        'hue-3': 'A700'
      })
      .warnPalette('v2-ember', {
        'default': '500',
        'hue-1': '500',
        'hue-2': '700',
        'hue-3': 'A100'
      })
      .backgroundPalette('v2-ground', {
        'default': '50',
        'hue-1': 'A100',
        'hue-2': 'A200',
        'hue-3': '900'
      })
      .dark();

    $mdThemingProvider.generateThemesOnDemand(true);
  }
})();
