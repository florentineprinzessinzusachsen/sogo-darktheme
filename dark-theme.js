/*
 * sogo-darktheme palette for SOGo
 *
 * Replaces js/theme.js (mailcow: data/conf/sogo/custom-theme.js). SOGo uses these palettes
 * at runtime for md-colors (inline colours) and its mdColors stylesheet (.md-fg / .md-bg),
 * even when the theme CSS is static. Each hue below is set for the role SOGo gives it,
 * so it matches custom-theme.css.
 */
(function() {
  'use strict';

  angular.module('SOGo.Common')
    .config(configure);

  configure.$inject = ['$mdThemingProvider'];
  function configure($mdThemingProvider) {

    // Primary: text on the dark surfaces
    //   default, hue-1 (500, 600): muted text (subheads, quota, calendar labels)
    //   hue-2 (800): text (calendar day numbers and dates)
    //   400: link blue (week days in the calendar list)
    $mdThemingProvider.definePalette('dark-ink', {
      '50': 'e5e5e5',
      '100': 'e5e5e5',
      '200': 'b3b3b3',
      '300': 'b3b3b3',
      '400': '6cc6e9',
      '500': 'b3b3b3',
      '600': 'b3b3b3',
      '700': '757575',
      '800': 'e5e5e5',
      '900': 'e5e5e5',
      'A100': 'e5e5e5',
      'A200': 'e5e5e5',
      'A400': 'b3b3b3',
      'A700': '6cc6e9',
      'contrastDefaultColor': 'dark'
    });

    // Accent: blue
    //   default, hue-2 (500, A200): blue fills (today, ripples)
    //   hue-1 (A100): text on the sign-in panel
    //   600: link blue (expand buttons), 400: muted (drag handles)
    $mdThemingProvider.definePalette('dark-blue', {
      '50': '6cc6e9',
      '100': '6cc6e9',
      '200': '6cc6e9',
      '300': '6cc6e9',
      '400': 'b3b3b3',
      '500': '0378a6',
      '600': '6cc6e9',
      '700': '0367a6',
      '800': '0367a6',
      '900': '0367a6',
      'A100': 'e5e5e5',
      'A200': '0378a6',
      'A400': '0367a6',
      'A700': '0367a6',
      'contrastDefaultColor': 'light'
    });

    // Background: the grey surfaces
    //   200: detail column, 300: side navigation
    //   500, 600: muted text, 700: text
    //   default, hue-1 (50, A100): list column; hue-2 (A200): detail; hue-3 (900): side navigation
    $mdThemingProvider.definePalette('dark-grey', {
      '50': '282828',
      '100': '282828',
      '200': '343434',
      '300': '212121',
      '400': '424242',
      '500': 'b3b3b3',
      '600': 'b3b3b3',
      '700': 'e5e5e5',
      '800': '343434',
      '900': '212121',
      '1000': '757575',
      'A100': '282828',
      'A200': '343434',
      'A400': '212121',
      'A700': '212121',
      'contrastDefaultColor': 'light'
    });

    $mdThemingProvider.theme('default')
      .primaryPalette('dark-ink', {
        'default': '500',
        'hue-1': '600',
        'hue-2': '800',
        'hue-3': 'A700'
      })
      .accentPalette('dark-blue', {
        'default': '500',
        'hue-1': 'A100',
        'hue-2': 'A200',
        'hue-3': 'A700'
      })
      .warnPalette('deep-orange')
      .backgroundPalette('dark-grey', {
        'default': '50',
        'hue-1': 'A100',
        'hue-2': 'A200',
        'hue-3': '900'
      })
      .dark();

    $mdThemingProvider.generateThemesOnDemand(true);
  }
})();
