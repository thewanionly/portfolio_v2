# My Portfolio (v2)

My portfolio website where my personal and professional information are displayed and my front-end web development skills are showcased.

This is the second version of my portfolio site. This is built using React, NextJS, TypeScript, Styled Components, and many other front-end tools.

<br>

## Development

---

<br>

### Running the app

<br>
In your terminal window, run the ff:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

<br>

### Running the test files

<br>

In your terminal window, run the ff:

```bash
npm run test
```

<br>

## Using Netlify CMS

---

<br>

I'm using Netlify CMS to manage the content of this website. Netlify CMS is an open-source CMS that allows us to easily manage our content via a friendly and intuitive UI. The content are stored in this repository, the same repository where our codes are hosted.

### Setting up Netlify CMS:

1. Add `admin` folder under `public` folder in your root. (In NextJS, we store the admin folder in public but this varies on other static site generator tools)

2. Create `index.html` inside the `admin` folder. This is the entry point for the Netlify CMS admin interface. This means that users navigate to `<yoursite>.com/admin/` to access it. This file is a basic HTML stater page that loads the Netlify CMS JavaScript file. Here's a sample content of your index.html:

   ```
   <!doctype html>
   <html>
   <head>
     <meta charset="utf-8" />
     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
     <title>Content Manager</title>
   </head>
   <body>
     <!-- Include the script that builds the page and powers Netlify CMS -->
     <script src="https://unpkg.com/netlify-cms@^2.0.0/dist/netlify-cms.js"></script>
   </body>
   </html>
   ```

   In the code above, we are pulling the Netlify CMS JavaScript file via CDN. The `script` is loaded from the `unpkg` CDN.

   Another alternative way of installing is through npm. This is not the approach that I took so I won't be including it here but I think it's worth to mention it here. Read [here](https://www.netlifycms.org/docs/add-to-your-site/#installing-with-npm) to know more.

3. Create `config.yml` inside the `admin` folder. This is where we define the configuration and schema of our collections (i.e. our content). Here's a sample content of your config.yml:

   ```
   backend:
     name: git-gateway
     branch: main # Branch to update (optional; defaults to master)
   media_folder: public/img # Media files will be stored in the repo under public/img
   public_folder: img
   collections:
     - name: "pages"
       label: "Pages"
       files:
       - label: "Home"
         name: "home"
         file: "content/home.md" # This is where your content will be stored, relative to the root.
         fields:
           - { label: "Title", name: "title", widget: "string"}
           - { label: "Publish Date", name: "date", widget: "datetime" }
           - { label: "Body", name: "body", widget: "markdown"}
           - label: 'Cats'
             name: "cats"
             widget: list
             fields:
               - { label: "Name", name: "name", widget: "string"}
               - { label: "Description", name: "description", widget: "text"}
   ```

   Read [here](https://www.netlifycms.org/docs/add-to-your-site/#configuration) to know more.

   To help us in editing yaml files and prevent any syntax errors, install the YAML VSCode extension.

4. Install `frontmatter-markdown-loader`. This library enables us to load markdown files directly in our React components:

   ```
   npm install --save-dev frontmatter-markdown-loader
   ```

   We also need to install @babel/core and @babel/preset-react has to be installed as dependencies of frontmatter-markdown-loader

   ```
   npm install --save-dev @babel/core @babel/preset-react
   ```

5. Add an `md` file. Where you'll add this depends on your configuration in your `config.yml` file. In the setup we did in #3, we have to add our `home.md` under `content` folder in the root.

   ```
   ---
   title: Awesome kitties
   date: 2019-03-17T19:31:20.591Z
   cats:
     - description: 'Maru is a Scottish Fold from Japan, and he loves boxes.'
       name: Maru (まる)
     - description: Lil Bub is an American celebrity cat known for her unique appearance.
       name: Lil Bub
     - description: 'Grumpy cat is an American celebrity cat known for her grumpy appearance.'
       name: Grumpy cat (Tardar Sauce)
   ---
   Welcome to my awesome page about cats of the internet.

   This page is built with NextJS, and content is managed in Netlify CMS
   ```

   This file will be overridden once we make changes to the Netlify CMS user interface later on.

6. We need to tell webpack how to load markdown files. Create a new `next.config.js` file at the root of your project with the ff content:

   ```
   module.exports = {
       webpack: (cfg) => {
           cfg.module.rules.push(
               {
                   test: /\.md$/,
                   loader: 'frontmatter-markdown-loader',
                   options: { mode: ['react-component'] }
               }
           )
           return cfg;
       }
   }
   ```

7. Add some content to our `page/index.(ts|tsx)` file. With a little help of our webpack loader, we can now easily import `md` files:

   ```
   import Head from "next/head"
   import { Component } from 'react'
   import { attributes, react as HomeContent } from '../content/home.md';

   export default class Home extends Component {
     render() {
       let { title, cats } = attributes;
       return (
         <>
           <Head>
             <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
           </Head>
           <article>
             <h1>{title}</h1>
             <HomeContent />
             <ul>
               {cats.map((cat, k) => (
                 <li key={k}>
                   <h2>{cat.name}</h2>
                   <p>{cat.description}</p>
                 </li>
               ))}
             </ul>
           </article>
         </>
       )
     }
   }
   ```

8. Since we are using TypeScript, we need to tell it about the type of `attributes` we defined above. In your root directory, add a `global.d.ts` file.

   ```
   declare module '*.md' {
     import React from 'react'
     const react: React.VFC
     export { react }
   }
   ```

9. There are errors that will occur when we try to deploy our app in Netlify using NextJS around image optimization. At the time of writing, the current workaround is to disable this default image optimization of NextJS by adding the following in your `next.config.js`:

   ```
   module.exports = {
     ...
     images: {
       unoptimized: true,
     },
   }

   ```

10. Add an `export` script in your package.json. This will be run when we deploy our app.

    ```
    npm run build && next export
    ```

11. Push your app to GitHub. After that, go to Netlify and deploy a new site from GitHub repository. Under the final step (Build options, and deploy!), make sure you enter the following:

    ```
    Build command:       npm run export
    Publish directory:   out
    ```

    Read more [here](https://www.netlifycms.org/docs/nextjs/#publishing-to-github-and-netlify).

12. Enable identity and git gateway. This allow you to manage CMS admin users via GitHub. This essentially means that when you go to Netlify CMS UI, you can login via GitHub. Follow the steps [here](https://www.netlifycms.org/docs/nextjs/#enable-identity-and-git-gateway) to enable this feature.

13. Since we are testing our components using jest, loading the markdown file in jest environment is not as easy as it sounds. Normally we would use a transformer such as [jest-transformer-mdx](https://github.com/bitttttten/jest-transformer-mdx) to transform md files in our jest environment. However at the time of writing, there are issues with the library that is preventing us from successfully loading md files in jest environment (See issue [here](https://github.com/bitttttten/jest-transformer-mdx/issues/25)).

    To work this around, I have decided to do the ff: instead of loading the md files in the each of the components, I loaded the md files in `pages/index.tsx` , in a `getStaticProps` function. This will load all the md files at build time and return the markdown files' attributes as props to the index component. When the index is mounted in the client side, it will initialize the `content` state, which is accessible via React context API. The components that will try to use the `content` state would access it via `useContext` hook.

    This pattern makes it easy for our test files to mock the `content` state. Instead of worrying about transforming md files, we just need to mock the `useContext` hook and return our own mocked data. We can then test our components if they are reading the using the data returned from `useContext` hook.

Sources:
[1] https://www.netlifycms.org/docs/add-to-your-site/
[2] https://www.netlifycms.org/docs/nextjs/

<br>

### To access the Netlify CMS content manager site:

1. Go to `<webiste_name>.com/admin`
2. Login via GitHub
3. In here you can edit and publish your collections. This will automatically push to the `main` branch.
4. Because it changed our repository, it will trigger a deployment in Netlify and it will deploy a new site so be very careful.

<br>

### To add a new content/collection to the app:

In this instruction, I'm going to refer to collection and content as the same thing.

1. Add collection config in `public/admin/config.yml`. Read [here](https://www.netlifycms.org/docs/widgets) about adding fields and widgets in Netlify CMS.
2. Add the TypeScript types of your content in `Content.types.ts`
3. Add initial value of the new content in `Context.context.ts`. I find it really helpful to declare my types in #2 as a class so I can easily initialize the content's value (i.e. by doing `new Content()`).
4. Create default md file of your content in `content` folder. Make sure the fields matches the one that you declared in your `config.yml` file
5. In `pages/index.tsx` getStaticProps function, load the md file and return the attributes as props. Make sure the content follow the type schema you declared for that specific content.
6. For usage in our application's components, access the `content` value from `useContentContext` custom hook. Destructure the values that you need from the `content` state.
7. For usage in our test files, first, create a mocked content data in `common/tests/mocks/mockedData.ts`. Next, in your test files, mock the import path to `useContentContext` and return a mocked version of the `useContentContext` hook with a `content` property that contains your mockedData. Finally in your tests, you can use the mockedData to test our components if they are reading the using the data returned from `useContentContext` hook.
