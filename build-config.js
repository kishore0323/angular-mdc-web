/**
 * Build configuration for the packaging tool. This file will be automatically detected and used
 * to build the different packages inside of Angular MDC.
 */
const { join } = require('path');

const packageJson = require('./package.json');

/** Current version of the project*/
const buildVersion = packageJson.version;

/**
 * Required Angular version for all Angular Material packages. This version will be used
 * as the peer dependency version for Angular in all release packages.
 */
 const angularVersion = '>=6.0.0-beta.0 <7.0.0';

/** License that will be placed inside of all created bundles. */
const buildLicense = `/**
 * @license
 * Copyright (c) 2018 Dominic Carretto
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/trimox/angular-mdc-web/blob/master/LICENSE
 */`;

module.exports = {
  projectVersion: buildVersion,
  angularVersion: angularVersion,
  projectDir: __dirname,
  packagesDir: join(__dirname, 'packages'),
  outputDir: join(__dirname, 'dist'),
  licenseBanner: buildLicense
};
