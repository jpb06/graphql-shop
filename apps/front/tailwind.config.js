const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const { join } = require('path');
const plugin = require('tailwindcss/plugin');

// Rotate Y utilities
const rotateY = plugin(function ({ addUtilities }) {
  addUtilities({
    '.rotate-y-180': {
      transform: 'rotateY(180deg)',
    },
  });

  addUtilities({
    '.backface-visible': {
      'backface-visibility': 'visible',
    },
    '.backface-hidden': {
      'backface-visibility': 'hidden',
    },
  });

  addUtilities({
    '.transform-style-flat': {
      'transform-style': 'flat',
    },
    '.transform-style-3d': {
      'transform-style': 'preserve-3d',
    },
  });
});

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/*!(*.stories|*.spec).{ts,tsx}'),
    join(__dirname, '../../libs/frontend/components/src/**/*.{ts,tsx}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      fontFamily: {
        'credit-card': [
          'Bitstream Vera Sans Mono',
          'Consolas',
          'Courier',
          'monospace',
        ],
      },
      backgroundImage: {
        'credit-card-1': "url('/credit-cards/1.jpg')",
        'credit-card-2': "url('/credit-cards/2.jpg')",
        'credit-card-3': "url('/credit-cards/3.jpg')",
        'credit-card-4': "url('/credit-cards/4.jpg')",
        'credit-card-5': "url('/credit-cards/5.jpg')",
        'credit-card-6': "url('/credit-cards/6.jpg')",
        'credit-card-7': "url('/credit-cards/7.jpg')",
        'credit-card-8': "url('/credit-cards/8.jpg')",
        'credit-card-9': "url('/credit-cards/9.jpg')",
        'credit-card-10': "url('/credit-cards/10.jpg')",
        'credit-card-11': "url('/credit-cards/11.jpg')",
        'credit-card-12': "url('/credit-cards/12.jpg')",
        'credit-card-13': "url('/credit-cards/13.jpg')",
        'credit-card-14': "url('/credit-cards/14.jpg')",
        'credit-card-15': "url('/credit-cards/15.jpg')",

        'credit-card-chip':
          "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9Ijc2IiB2aWV3Qm94PSIwIDAgMTAwIDc2IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIj48ZGVmcz48bGluZWFyR3JhZGllbnQgeDE9IjEwMCUiIHkxPSIwJSIgeDI9IjAlIiB5Mj0iMTAwJSIgaWQ9ImEiPjxzdG9wIHN0b3AtY29sb3I9IiNGM0QwOEYiIG9mZnNldD0iMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjRkFENzY2IiBvZmZzZXQ9IjEwMCUiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cGF0aCBkPSJNOTIuNzI3IDc1LjQ1NWgtODUuNDU1Yy00IDAtNy4yNzMtMy4yNzMtNy4yNzMtNy4yNzN2LTYwLjkwOWMwLTQgMy4yNzMtNy4yNzMgNy4yNzMtNy4yNzNoODUuNDU1YzQgMCA3LjI3MyAzLjI3MyA3LjI3MyA3LjI3M3Y2MC45MDljMCA0LTMuMjczIDcuMjczLTcuMjczIDcuMjczIiBmaWxsPSJ1cmwoI2EpIi8+PHBhdGggZD0iTTcyLjEyMyAyOC40ODVoMjcuODc4di0xLjgxOGgtMjkuNjQ4Yy0uOTY1IDAtMS44MzIuNjAxLTIuMTcyIDEuNTA0LTIuMjg3IDYuMDcyLTIuNDMzIDEyLjU5NC0uNDM4IDE5Ljg0Mi40NTUgMS42NTQuNDM1IDMuNC0uMSA1LjAzLTIuMDM2IDYuMTk1LTcuNzc5IDE5Ljk4OC0xOC41NTEgMTkuOTg4LTExLjAwOCAwLTE2LjA5Ni0xNS42OTktMTcuMzM0LTIxLjk1Mi0uMTU1LS43ODQtLjEyMi0xLjU5Mi4xMDctMi4zNTcgMS42OTUtNS42NDggMi4wOTQtMTAuNjQtLjAxNi0xOS41OS0uMjA1LS44Ny0uMTgyLTEuNzgzLjA0OC0yLjY0NiA0LjQ4LTE2Ljc1NSAxMi44ODItMjAuMTQ3IDEyLjk2NS0yMC4xNzkuMzU2LS4xMzIuNTkzLS40NzIuNTkzLS44NTJ2LTUuNDU1aC0xLjgxOHYzLjc3NmMwIC42NS0uMzMyIDEuMjUyLS44ODQgMS41OTYtMi44MDMgMS43NDItOC45MDQgNi45MzYtMTIuNTU3IDIwLjQ1Ni0uMTguNjY4LS43ODEgMS4xMzYtMS40NzMgMS4xMzNsLTI4LjcyMi0uMTM5djEuODE4bDI3LjQxNi4xMzNjMS40NjguMDA3IDIuNzM1IDEuMDQxIDMuMDM3IDIuNDc4IDEuNDE2IDYuNzQxIDEuMjE5IDExLjAzOS4wODIgMTUuNDU4LS4zMTYgMS4yMy0xLjQyIDIuMDk2LTIuNjkgMi4xMDlsLTI3Ljg0NC4yN3YxLjgxOWwyOC42MDUtLjI3OGMuNjkzLS4wMDcgMS4yOTYuNDczIDEuNDM1IDEuMTUyIDEuNDQyIDcuMDQxIDYuODg3IDIzLjA3IDE5LjA1IDIzLjA3IDYuMzY4IDAgMTIuMDYyLTQuMjUgMTYuNDY3LTEyLjI5IDIuNjQ0LTQuODI4IDQuMDY3LTkuNTkxIDQuNTQxLTExLjM0NmgyOS45MDF2LTEuODE4aC0yOC4wMTZjLTEuMTU4IDAtMi4xODMtLjc3Mi0yLjQ4OS0xLjg4OS0xLjY5Mi02LjE2NC0xLjc2MS0xMS43NTUtLjItMTYuOTU5LjM3MS0xLjIzNSAxLjUzOC0yLjA2MSAyLjgyNy0yLjA2MXptLTE3LjE1LTIxLjkxNGMuMDQ1LjAyMiA0LjUxOSAyLjMyMiA5LjI1MyAxMC4wNDEuMTcyLjI4LjQ3LjQzNC43NzYuNDM0LjE5OCAwIC4zOTktLjA2NC41NzEtLjIwMi4zNjUtLjI5Mi40MTYtLjgzNy4xNzItMS4yMzUtMy41Ny01LjgwNS03LjAyNC04LjcxLTguNzc1LTkuOTMxLS40My0uMjk5LS42OC0uNzkyLS42OC0xLjMxNXYtNC4zNjNoLTEuODE4djUuNzU4YzAgLjM0NS4xOTUuNjU5LjUwMi44MTN6IiBmaWxsPSIjMEMwMjAwIi8+PC9zdmc+')",
        visa: "url('/credit-cards/visa.png')",
        amex: "url('data:image/gif;base64,R0lGODlhIwAjAPcAAHiqzHzD2zuly1Oz0onR5SqBugBElwA4kkOqzVqXw+Ty8yyKvpHV5QB7s/v99yRprvP5+P///JO403vI3miqy4jN4Easzyh5tWW82SuPwDajyyZxsoHN4dzt8iSDuhiXwUuszMPi7PP29Y/O3+719qrW4il8tiZsrzp6tMjd5oXQ4kONvQFbo33K4YPE2uPq8RVmq8nk7ESkyyd1s///+ymEuqXF3CZvsCWZxGm/2oTO4S+bx0SbxC2ZxXK91vL69VGHuhtzsiFkqkOUwuTw71Wny2W31OLu8I/U5Cl+t3fH3un09SFusbTM4m7B2Ym510yv0Rx7tR5krCV9uLTN2xNUopPE2ih2tC6QwYvQ4WzB3IzS5qPR3QFpqiZ2tAJ4rShzs7La5m261SueyH+91unw8nPF3T+ozSJmrJvH20GFugFnpzmXviJorjOLu4TO5Atsqi+extLp8qrM24LJ3lOSv///+AAphyl1sw98tCKCtyRnrWvC2hVhp37M4ZrO3idxtCZrsCuSwieSvvj9+l651hGLuxaRv4LP5Fy31S6UwgBhpx2NwHjJ4SpurApkpiNiqzyFswmDtlau0UF9sRR3su7y8iuHvGO61j2exkCBtlq11QGGuCF2tbnS5SFxsS2XxDCYxCVhrCuGu3/N5GC10yFiqli00l2z0Pz++Q9Zome/2kmHuSGWwwyNu3LD3SRkqwBRn83o7hZeqihusDGhx3fG2ylxtC6Ywxl/tR9eqiBfq4vU5d/r7nq/2Bx1ro/W5JjO4DqTwG2fyCuAuuv08y57t+zy8+z39Sp/t3fB1xRvqCSJvhhgpSBtsCl8syVxsJ6/2iWdyABppQ1kqyRjrANwsPj79/r7/HnH4kmQwf77+FWdxn/L5KDB1qHP36vH3RCSwJO0zyhlq//9+0SfxpPL3LfU5rTW6B1tsr3d6QCEs67O4QCIvAuOt3m2002gxtfi49fp7Nvm7iibwyqcxPL3/CN0si2SwxKBuTWCtDKAuTdxrz2IvW3D3////yH5BAAAAAAALAAAAAAjACMAAAj/AEfQqVAhy4gsBCvQoRNAmQ8xRlBNAiFDRjkeQ4as2KhGjSZNKJpNaOSHFKI3iBCRatHIjL9VGBINgGJBQK0eoARlWFCjQJIpF+7N+NSnQgsOFQgoJaCCQwslZrSsKrSJ5hkNO0Lh2zmqALEkF/DgcVaUg4otBJDwUoqo2wRbTnJgkgniahxcOheM6mniwhUwRLMgIrAFCTAkat9w8KPkVQ4MhQaAQCBgBy5FXGsQ6/uXbJY3aRmIZrBWx1Mzj2VCQaAhTg9FWBZc0sx5BpM+nwnwGg2MlwrTE1DHnMnaNWbZtP2CuS1YN4PDSNA6teV4OJQzAuKAOj67wDPltytw/3iTZQuvLWibPo2LadMAC1d3gNqq12uSK3/D+9HxBq1SHYsFx94pUNTVGi74xLZXMn3NgMdtOihB0mItmJaNGXzAFNlqV0mDgyDMMOOBHlNE0UknnziTTh+25OBHDnxwoIQ/WiiRoVQEzjTGB/RIkk8GeegRRRdB3MMCDDD00YcT/5AQAQ0Q/DMBBHbQ0GQH2PyjQAd2/BPBP/8cAeY/Xf5Dg5USGCBLCJzE8I8hpWjJCTq+ZFJKDKjUI4Y7MQzyzxd69LIGHP/Uccc/EgzjyQH/gPBPEf8YAUIELhgRBh2ouEDEKS50gIMsRcCTxj8UhJGAPADUgQIVADShZitWjP8Rhi8d0ENGCOb44kIMEUyiQQCHKJBJEWT8w8IKy2iTwA91GBCNq2KQ8E8HAvjwjwYQyPFHMDJMEgIqcvyDQAk8/ONGFwCAGckj9vxzQBOL0rDEBxGQE4GYS5BASCrYQIBMKgpw8c812xCBzA///DLMwMdQASYABgggDQJjaFCLNIeEo7Er7XCyTgMgd7FGF4uwEAsLJRugsgEHHGBALNchcAZrCIBJwhL/lPCHlxBAQEMEDpBwDQ12iFAM0UbTELQlrGkggABjWPDPIQ41YKUkbMDDxjspVEJBEL3oUwcrR4xNSRkoAEGJDDvsEEctrcjwjytcfPOPJA38k4ECNLD/8AQ3NOzDjjFPSDDPAeKUccQd3rxQTiigZMVIJm+GoM4/DXzxjzA1cIPMOXAAsMY2n9hgA5jgHHC6NwbwgA8+ioQy+Z8UUDANmV9E8U8Kx1iRLgAAaMIKJfEAAYQjKaTNzxAZYNE8IxmYiQzOaczxTyoRGOCGl9Y/KUIZRR8jwj/HWGLHEAukn/4leeTifhTWWFNJJXAU0AkccDyiPzVKsqDKLLGIhSpUcYAhjOISCESgBxaoBw90ZQoQ7Esn7nGPTzDBGc5owwOkIIU2cHAWVVhBAWpAwhLuhRheSQaD+nKBC8xgBmDYwAZucIJABOIBD0ADGqQQQp8Q44dALEAy05KwwhZeYQZ/AQQgoEGLGuIwh3tAAySq0A8TmCAJVryiCYxxARb6xQt4mMEtNgANGtbwhjgUghDGsYsqqKGFLfTiFYzohReCYQYbAMQNmuhEHLZBjWioRhvVgMQreOGL+HGQg25xCyUykY8n2AMO0SAENMCiGqLgoSbAwElFwhAMgGikDJloxjPiUJKVhIUoRCGENqJAibCMJTQAIcMTmDEQfXxAFFNZjWrAwhS6qIIjblDGGxjTmLRI5gmWicsHoLENe9iDEPYAC1VCQgimEEUbAwIAOw==')",
        mastercard:
          "url('data:image/gif;base64,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')",
      },
      keyframes: {
        // Blow modal
        'blow-modal': {
          from: {
            transform: 'scale(0)',
          },
          to: {
            transform: 'scale(1)',
          },
        },
        'blow-modal-close': {
          from: {
            transform: 'scale(1)',
            opacity: '1',
            visibility: 'visible',
          },
          to: {
            transform: 'scale(0)',
            opacity: '0',
            visibility: 'hidden',
          },
        },
        'blow-wrapper': {
          '0%': {
            transform: 'scale(1)',
            opacity: 1,
          },
          '100%': {
            transform: 'scale(0.9)',
            opacity: 0.6,
          },
        },
        'blow-wrapper-close': {
          '0%': {
            transform: 'scale(0.9)',
            opacity: 0.6,
          },
          '100%': {
            transform: 'scale(1)',
            opacity: 1,
          },
        },
        // Move modal
        'move-modal': {
          from: {
            transform: 'translateY(450px)',
          },
          to: {
            transform: 'translateY(0)',
          },
        },
        'move-modal-close': {
          from: {
            opacity: '1',
            transform: 'translateY(0px)',
            visibility: 'visible',
          },
          to: {
            opacity: '0',
            transform: 'translateY(450px)',
            visibility: 'hidden',
          },
        },
        'move-wrapper': {
          from: {
            transform: 'translateY(0%)',
          },
          to: {
            transform: 'translateY(-100%)',
          },
        },
        'move-wrapper-close': {
          from: {
            transform: 'translateY(-100%)',
          },
          to: {
            transform: 'translateY(0%)',
          },
        },
        // Misc
        'pulse-quiet': {
          '0%, 100%': {
            opacity: 1,
          },
          '50%': {
            opacity: 0.9,
          },
        },
      },
      animation: {
        // Blow modal
        'blow-modal':
          'blow-modal .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards',
        'blow-modal-close':
          'blow-modal-close .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards',
        'blow-wrapper':
          'blow-wrapper .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards',
        'blow-wrapper-close':
          'blow-wrapper-close .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards',
        // Move modal
        'move-modal':
          'move-modal .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards',
        'move-modal-close':
          'move-modal-close .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards',
        'move-wrapper':
          'move-wrapper .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards',
        'move-wrapper-close':
          'move-wrapper-close .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards',
        // Misc
        'spin-once': 'spin 1.4s linear',
        'pulse-quiet': 'pulse-quiet 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;',
      },
    },
  },
  plugins: [rotateY],
};
