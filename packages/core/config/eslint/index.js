module.exports = {
  "extends": [
    "airbnb",
    "airbnb/hooks",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "settings": {
    "import/resolver": {
      "node": {
        "extensions": [
          ".tsx",
          ".ts",
          "js"
        ]
      },
      "alias": {
        "map": [
          [
            "@",
            "src/"
          ],
          [
            "@mobile",
            "src/platforms/mobile/"
          ],
          [
            "@mobile-native",
            "src/platforms/mobile/_native/"
          ],
          [
            "@mobile-browser",
            "src/platforms/mobile/_browser/"
          ],
          [
            "@pc",
            "src/platforms/pc/"
          ],
          [
            "@pc-native",
            "src/platforms/pc/_native/"
          ],
          [
            "@pc-browser",
            "src/platforms/pc/_browser/"
          ]
        ],
        "extensions": [
          ".ts",
          ".tsx",
          ".js",
          "jsx"
        ]
      },
      "typescript": {}
    }
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "sourceType": "module",
    "allowImportExportEverywhere": true,
    "tsconfigRootDir": ""
  },
  "rules": {
    "no-shadow": "off",
    "no-use-before-define": "off",
    "import/no-unresolved": "error",
    "@typescript-eslint/camelcase": 0,
    "@typescript-eslint/no-var-requires": 0,
    "@typescript-eslint/no-shadow": [
      "error"
    ],
    "jsx-a11y/control-has-associated-label": 0,
    "no-underscore-dangle": 0,
    "no-param-reassign": 0,
    "@typescript-eslint/explicit-function-return-type": 0,
    "react/require-default-props": 0,
    "react/jsx-props-no-spreading": 0,
    "react/jsx-filename-extension": [
      "error",
      {
        "extensions": [
          ".js",
          ".jsx",
          ".ts",
          ".tsx"
        ]
      }
    ],
    "react/function-component-definition": [
      2,
      {
        "namedComponents": [
          "arrow-function",
          "function-declaration",
          "function-expression"
        ]
      }
    ],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "mjs": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
    ],
    "import/prefer-default-export": 0,
    "strict": 0,
    "no-console": 0,
    "@typescript-eslint/ban-ts-ignore": 0,
    "global-require": 0,
    "react/forbid-prop-types": 0,
    "jsx-a11y/href-no-hash": 0,
    "jsx-a11y/no-static-element-interactions": 0,
    "jsx-a11y/no-noninteractive-element-interactions": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/anchor-is-valid": 0,
    "jsx-a11y/iframe-has-title": 0,
    "jsx-a11y/label-has-for": 0,
    "jsx-a11y/no-redundant-roles": 0,
    "react/react-in-jsx-scope": 0,
    "react/prop-types": 0,
    "react/no-unknown-property": [
      "error",
      {
        "ignore": [
          "styleName"
        ]
      }
    ],
    "prefer-destructuring": "warn",
    "max-len": [
      "error",
      120
    ],
    "object-curly-newline": 0,
    "react-hooks/exhaustive-deps": 0,
    "@typescript-eslint/no-explicit-any": [
      "off"
    ],
    "prefer-arrow-callback": [
      "error",
      {
        "allowNamedFunctions": true
      }
    ]
  },
  "env": {
    "browser": true,
    "node": true
  },
  "plugins": [
    "@typescript-eslint",
    "react",
    "jsx-a11y",
    "import"
  ],
  "globals": {
    "DEBUG": true
  },
  "ignorePatterns": [
    "**/*.js",
    "!src"
  ]
}