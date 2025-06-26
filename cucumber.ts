import { spawn, exec } from 'child_process';
import dotenv from 'dotenv';

dotenv.config();

const cucumberArgs = [
  '--require-module', 'ts-node/register',
  '--require', 'test/steps/*.ts',
  '--require', 'src/hooks/*.ts',
  '--format', 'json:reports/cucumber_report.json',
  'test/features/*.feature'
];

const cucumberProcess = spawn(
  'node',
  ['node_modules/@cucumber/cucumber/bin/cucumber-js', ...cucumberArgs],
  {
    stdio: 'inherit',
    env: process.env,
  }
);

cucumberProcess.on('close', (code) => {
  process.exit(code ?? 1);
});