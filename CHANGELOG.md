# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [1.4.2](https://github.com/merceyz/typescript-to-proptypes/compare/v1.4.1...v1.4.2) (2020-03-27)

### Bug Fixes

- build had a broken output ([97b0326](https://github.com/merceyz/typescript-to-proptypes/commit/97b0326c8b3b811fd5167cefa95a5dc1aa22a212))

### [1.4.1](https://github.com/merceyz/typescript-to-proptypes/compare/v1.4.0...v1.4.1) (2020-03-27)

### Bug Fixes

- include string literal object keys as used ([#5](https://github.com/merceyz/typescript-to-proptypes/issues/5)) ([3fd7b70](https://github.com/merceyz/typescript-to-proptypes/commit/3fd7b703d30e650e6692f87d3929d4ae67314cb6))
- unknown can be optional ([#7](https://github.com/merceyz/typescript-to-proptypes/issues/7)) ([c5e8ca3](https://github.com/merceyz/typescript-to-proptypes/commit/c5e8ca31e2cae20216b1f7e45c9f3ef5198b2f93))

## [1.4.0](https://github.com/merceyz/typescript-to-proptypes/compare/v1.3.0...v1.4.0) (2019-11-16)

### Bug Fixes

- **parser:** handle prop of type ReactElement ([adfcca4](https://github.com/merceyz/typescript-to-proptypes/commit/adfcca4))

### Features

- **parser:** support forwardRef ([3f5c0c9](https://github.com/merceyz/typescript-to-proptypes/commit/3f5c0c9)), closes [#2](https://github.com/merceyz/typescript-to-proptypes/issues/2)

## [1.3.0](https://github.com/merceyz/typescript-to-proptypes/compare/v1.2.5...v1.3.0) (2019-09-03)

### Features

- **generator:** add comment to proptype blocks ([2c5627e](https://github.com/merceyz/typescript-to-proptypes/commit/2c5627e))

### [1.2.5](https://github.com/merceyz/typescript-to-proptypes/compare/v1.2.4...v1.2.5) (2019-09-03)

### Bug Fixes

- **parser:** use doctrine to unwrap comments ([53a9d43](https://github.com/merceyz/typescript-to-proptypes/commit/53a9d43))

### Tests

- add missing test config ([d00c7f2](https://github.com/merceyz/typescript-to-proptypes/commit/d00c7f2))

### [1.2.4](https://github.com/merceyz/typescript-to-proptypes/compare/v1.2.3...v1.2.4) (2019-08-16)

### Bug Fixes

- **injector:** use require.resolve ([b9d04ea](https://github.com/merceyz/typescript-to-proptypes/commit/b9d04ea))

### [1.2.3](https://github.com/merceyz/typescript-to-proptypes/compare/v1.2.2...v1.2.3) (2019-07-24)

### Bug Fixes

- **parser:** handle return type of JSX.Element | null ([cbe5564](https://github.com/merceyz/typescript-to-proptypes/commit/cbe5564))

### [1.2.2](https://github.com/merceyz/typescript-to-proptypes/compare/v1.2.1...v1.2.2) (2019-07-23)

### Bug Fixes

- **parser:** remove leftover asterisk ([2e720df](https://github.com/merceyz/typescript-to-proptypes/commit/2e720df))

### [1.2.1](https://github.com/merceyz/typescript-to-proptypes/compare/v1.2.0...v1.2.1) (2019-07-23)

### Bug Fixes

- **parser:** handle single line comments ([0025d53](https://github.com/merceyz/typescript-to-proptypes/commit/0025d53))

## [1.2.0](https://github.com/merceyz/typescript-to-proptypes/compare/v1.1.0...v1.2.0) (2019-07-23)

### Bug Fixes

- **generator:** multiline comments ([d576597](https://github.com/merceyz/typescript-to-proptypes/commit/d576597))
- **generator:** sort interface correctly ([f88c5fb](https://github.com/merceyz/typescript-to-proptypes/commit/f88c5fb))
- **generator:** wrap prop name in quotes ([709a819](https://github.com/merceyz/typescript-to-proptypes/commit/709a819))
- **parser:** don't modify comments ([95cd63e](https://github.com/merceyz/typescript-to-proptypes/commit/95cd63e))
- **parser:** fallback to object if element is undefined ([eadaf3f](https://github.com/merceyz/typescript-to-proptypes/commit/eadaf3f))
- **parser:** handle comments with just tags ([d0b0a82](https://github.com/merceyz/typescript-to-proptypes/commit/d0b0a82))
- **parser:** handle comments with tags ([ad4dddd](https://github.com/merceyz/typescript-to-proptypes/commit/ad4dddd))
- **parser:** handle optional any ([30f56ec](https://github.com/merceyz/typescript-to-proptypes/commit/30f56ec))
- **parser:** handle optional React.ElementType ([c7a87fd](https://github.com/merceyz/typescript-to-proptypes/commit/c7a87fd))
- **parser:** treat ComponentType as elementType ([53f1e21](https://github.com/merceyz/typescript-to-proptypes/commit/53f1e21))
- export typescript as ts ([ba90e22](https://github.com/merceyz/typescript-to-proptypes/commit/ba90e22))

### Features

- **generator:** support instanceOf ([6bd563a](https://github.com/merceyz/typescript-to-proptypes/commit/6bd563a))
- **injector:** control included props ([4f8eaa1](https://github.com/merceyz/typescript-to-proptypes/commit/4f8eaa1))
- **injector:** remove existing proptypes ([d2a978c](https://github.com/merceyz/typescript-to-proptypes/commit/d2a978c))
- **parser:** check const declarations of React.ComponentType ([cbd2eb6](https://github.com/merceyz/typescript-to-proptypes/commit/cbd2eb6))
- **parser:** handle React.Component and Element instanceOf ([570d73b](https://github.com/merceyz/typescript-to-proptypes/commit/570d73b))
- **parser:** support elementType ([448d5a6](https://github.com/merceyz/typescript-to-proptypes/commit/448d5a6))

## [1.1.0](https://github.com/merceyz/typescript-to-proptypes/compare/v1.0.4...v1.1.0) (2019-07-15)

### Bug Fixes

- **generator:** don't pass shouldInclude on interfaceNode ([1302502](https://github.com/merceyz/typescript-to-proptypes/commit/1302502))

### Features

- **parser:** circular references ([7de51cc](https://github.com/merceyz/typescript-to-proptypes/commit/7de51cc))
- **parser:** control included proptypes ([2952e78](https://github.com/merceyz/typescript-to-proptypes/commit/2952e78))
- **parser:** objects / shapes ([81f1a82](https://github.com/merceyz/typescript-to-proptypes/commit/81f1a82))

### [1.0.4](https://github.com/merceyz/typescript-to-proptypes/compare/v1.0.3...v1.0.4) (2019-07-10)

### Bug Fixes

- **generator:** omit null if proptype is optional ([21351a4](https://github.com/merceyz/typescript-to-proptypes/commit/21351a4))
- **parser:** reactnode should make proptype optional ([c84b611](https://github.com/merceyz/typescript-to-proptypes/commit/c84b611))

### [1.0.3](https://github.com/merceyz/typescript-to-proptypes/compare/v1.0.2...v1.0.3) (2019-07-10)

### Bug Fixes

- export types ([7583291](https://github.com/merceyz/typescript-to-proptypes/commit/7583291))

### [1.0.2](https://github.com/merceyz/typescript-to-proptypes/compare/v1.0.1...v1.0.2) (2019-07-09)

### Bug Fixes

- **injector:** don't visit FunctionDeclarations more than once ([236276b](https://github.com/merceyz/typescript-to-proptypes/commit/236276b))

### [1.0.1](https://github.com/merceyz/typescript-to-proptypes/compare/v1.0.0...v1.0.1) (2019-07-09)

### Bug Fixes

- **injector:** don't import prop-types if it's already imported ([9d4dfd1](https://github.com/merceyz/typescript-to-proptypes/commit/9d4dfd1))
- **injector:** insert import after the first one ([6cb31a0](https://github.com/merceyz/typescript-to-proptypes/commit/6cb31a0))

## 1.0.0 (2019-07-08)

### Build System

- disable incremental ([37b0277](https://github.com/merceyz/typescript-to-proptypes/commit/37b0277))
