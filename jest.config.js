module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    coverageDirectory: 'src/tests/coverage',
    testRegex: "(/tests/.*|(\\.|/)(test|spec))\\.tsx?$"
};
