<h1 align="center">
  <a href="https://www.eldercactus.com/">
    Elder Cactus
  </a>
</h1>

[![Netlify Status](https://api.netlify.com/api/v1/badges/89ddbc6a-ae07-4842-ae60-854e20d43530/deploy-status)](https://app.netlify.com/sites/elder-cactus/deploys)

## ➕ Add a new Comic

1. Navigate to the [Admin center](https://eldercactus.com/admin/).

1. Login with your GitHub account.

1. You should be greeted with the **`Contents`** tab.

   - **`Contents`**:
     - Shows the Collections drawer on the left, and the Contents of the selected Collection in the main body.
     - Collections are groups of Posts. You have a [Collection of Comics](https://www.eldercactus.com/admin/#/collections/comics). You could also have a Collection of Blog Posts or Newsletter Posts. To setup a new Collection, you need to [configure `static/admin/config.yml`](https://www.netlifycms.org/docs/configuration-options/#collections).
     - Contents are the Posts themselves (i.e. each Comic is a piece of Content).
     - Posts that appear in this tab are live on the production deployment.
   - **[`Workflow`](https://www.eldercactus.com/admin/#/workflow)**:
     - This setup is optional, and you can turn it off in [`static/admin/config.yml`](https://www.netlifycms.org/docs/configuration-options/#publish-mode).
     - All Posts in this tab are actually [Pull Requests](https://github.com/gregbrimble/elder-cactus/pulls).
     - **None of the Posts in the `Workflow` tab will appear on the production deployment until they are `Published`**. The various states that a Post can be in (`Drafts`, `In Review`, `Ready`) are non-functional. They are just to allow you to keep track of the these Posts.
   - **`Media`**
     - This modal allows you to upload/delete existing Media (images) to be available to Posts.

1. [Click the `New Comic` button](https://www.eldercactus.com/admin/#/collections/comics/new).

1. Fill in the information:

   - Title
   - Publish Date (used to determine the order of the Comics)
   - Comic
     - Select `Choose an image`, and either select an existing piece of Media, or select `Upload new`.
   - Tags (used to group Posts into categories e.g. God Comics)
   - Description (optional—if no description is provided, the default website description will be used on the Post page)

1. Click **`Save`**.

   The Comic is now available in the **`Workflow`** tab under the `Drafts` state. After a short while, a Preview will be generated (click `Check for Preview` or refresh the page). **A Preview is an entire separate deployment to production, but with the new Post included.** (e.g. https://deploy-preview-13--elder-cactus.netlify.com/temp-test/). This lets you confirm how the new Comic will be displayed before publishing it to the production deployment.

1. Once you're satisfied with the new Comic, select `Publish → Publish Now`.

   Again, after a short while, the Comic should appear on the production deployment identically to how it appeared in the Preview.

1. (Optional) To delete a Comic, navigate to the `Contents` tab, select the Comic you wish to remove, and click `Delete published entry`.

# That's probably all you ever need.

**Everything below is for if you decide to do some custom development in the future.**

## 🚀 Quick start

1. **Install the prerequisites.**

   - [Node.js](https://nodejs.org/en/)
   - [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

1. **Clone this repository locally.**

   ```sh
   git clone git@github.com:gregbrimble/elder-cactus.git
   ```

1. **Start developing.**

   Navigate into your new site’s directory and start it up.

   ```sh
   cd elder-cactus/
   npm install
   npm run develop
   ```

1. **Open the source code and start editing!**

   Elder Cactus is now running at `http://localhost:8000`!

   _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is the GraphQL API used to build the site. Read more on the [Gatsby website](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

   Open the `elder-cactus` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── content
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

1.  **`/content`**:

1.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

1.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

1.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

1.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

1.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

1.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

1.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

1.  **`LICENSE`**: Gatsby is licensed under the MIT license.

1.  **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

1.  **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

1.  **`README.md`**: A text file containing useful reference information about your project.

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

## 💫 Deploy

[Already done](https://app.netlify.com/sites/elder-cactus/), but if you ever need it again:

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/gregbrimble/elder-cactus)
