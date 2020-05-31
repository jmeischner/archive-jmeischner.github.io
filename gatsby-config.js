const path = require('path');

module.exports = {
  siteMetadata: {
    title: `Webpage of Jan meischner`,
    description: `This page contains the blog and some additional information about Jan Meischner`,
    author: `Jan Meischner`,
  },
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        src: path.join(__dirname, "src"),
        components: path.join(__dirname, "src/components"),
        base: path.join(__dirname, "src/components/base"),
        typography: path.join(__dirname, "src/components/typography"),
        pages: path.join(__dirname, "src/pages"),
        assets: path.join(__dirname, "src/images/assets"),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `articles`,
        path: `${__dirname}/articles`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 992,
              showCaptions: true,
              markdownCaptions: true,
              wrapperStyle: "margin: 15px 0;text-align:center;width:100%;"
            },
          },
          {
            resolve: `gatsby-remark-vscode`,
            options: {
              theme: {
                default: "Ayu Light",
                dark: "Ayu Dark",
              },
              inlineCode: {
                marker: '·',
                theme: "Ayu Light",
                className: "inlineCode"
              },
              extensions: [path.join(__dirname, "/ayu.vsix")],
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    `gatsby-plugin-styled-components`,
  ],
}
