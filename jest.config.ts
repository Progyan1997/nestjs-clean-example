/**
 * Configuration for Jest for Unit Test Suite.
 */
import { pathsToModuleNameMapper } from "ts-jest";
import { Config } from "@jest/types";
import tsconfig = require("./tsconfig.json");

const configuration: Config.InitialOptions = {
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.ts"],
  coveragePathIgnorePatterns: [
    "src/configs",
    "src/main",
    "src/modules",
    "src/app.module",
  ],
  coverageDirectory: "coverage",
  moduleFileExtensions: ["js", "json", "ts"],
  moduleNameMapper: pathsToModuleNameMapper(tsconfig.compilerOptions.paths, {
    prefix: "<rootDir>/",
  }),
  rootDir: ".",
  testEnvironment: "node",
  testRegex: ".*\\.spec\\.ts$",
  transform: {
    "^.+\\.ts$": "ts-jest",
  },
};

export default configuration;
