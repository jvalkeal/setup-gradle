import * as core from '@actions/core';
import * as gradleInstaller from './gradle-installer';

async function run() {
  try {
    const gradleVersion = core.getInput('gradle-version', {required: false});
    const gradleFile = core.getInput('gradle-file', {required: false}) || '';
    if (gradleVersion) {
      await gradleInstaller.getGradle(gradleVersion, gradleFile);
    }
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
