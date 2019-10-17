import { configure } from "@storybook/react"

// automatically import all files ending in *.stories.js
configure(require("../src/Storybook/contents.story.js"), module)
