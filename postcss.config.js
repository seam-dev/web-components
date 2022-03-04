const OpenProps = require('open-props');

OpenProps['--seam-button-radius'] = 'var(--radius-3)';
OpenProps['--seam-button-primary'] = 'linear-gradient(to bottom, rgb(96 165 250), rgb(59 130 246))';
OpenProps['--seam-button-primary--hover'] = 'linear-gradient(to bottom, rgb(59 130 246), rgb(37 99 235))';
OpenProps['--seam-button-primary--active'] = 'linear-gradient(to bottom, rgb(147 197 253), rgb(96 165 250))';
OpenProps['--seam-button-horizontal-padding'] = '1rem';
OpenProps['--seam-button-vertical-padding'] = '0.75rem';
OpenProps['--seam-text-base'] = '0.875rem';
OpenProps['--seam-primary'] = 'blue';

module.exports = {
  plugins: {
    'tailwindcss': {},
    'postcss-custom-media': {
      importFrom: [
        './node_modules/open-props/media.min.css',
      ]
    },
    '@csstools/postcss-sass': {},
    'postcss-jit-props': {
      ...OpenProps,
      files: [
        './node_modules/open-props/src/extra/normalize.css',
      ],
      custom_selector: ':host'
    },
  }
}