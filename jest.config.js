const nextJest = require('next/jest')
 
// Providing the path to your Next.js app which will enable loading next.config.js and .env files
const createJestConfig = nextJest({ dir: './' })
 
// Any custom config you want to pass to Jest
const customJestConfig = {
  //下記のエラーになるのでコメントアウト
  //  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],

  //Module <rootDir>/jest.setup.js in the setupFilesAfterEnv option was not found.
  //<rootDir> is: /home/aibizsasaki/nextjs/whiteboard
  //
  //Configuration Documentation:
  //https://jestjs.io/docs/configuration
}
 
// createJestConfig is exported in this way to ensure that next/jest can load the Next.js configuration, which is async
module.exports = createJestConfig(customJestConfig)