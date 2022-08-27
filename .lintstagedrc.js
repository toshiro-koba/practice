const path = require('path')

module.exports = {
  '*.{js,ts,jsx,tsx}': (absolutePaths) => {
    const cwd = process.cwd()
    const relativePaths = absolutePaths.map((file) => path.relative(cwd, file)).join(' ')
    return [`eslint --fix ${relativePaths}`, `prettier --write ${relativePaths}`]
  },
}
