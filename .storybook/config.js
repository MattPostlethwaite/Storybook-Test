import { configure } from "@storybook/react"

// automatically import all files ending in *.stories.js
// configure(require("../src/Storybook/contents.story.js"), module)
configure(
  [
    require.context(
      "../src/Storybook/Introduction",
      true,
      /Introduction\.story\.js$/
    ),
    require.context("../src/Components", true, /\.story\.js$/)
  ],
  module
)
