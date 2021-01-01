module.exports = {
    plugins: [
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: "G-62LWH56VMD",
                head: false,
            },
        },
        `gatsby-plugin-react-helmet`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images/`,
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
              name: "Alphanumeric",
              short_name: "Alphanumeric",
              start_url: "/",
              background_color: "#fff",
              theme_color: "#000",
              // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
              // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
              display: "standalone",
              icon: "src/images/gatsby-icon.png", // This path is relative to the root of the site.
              // An optional attribute which provides support for CORS check.
              // If you do not provide a crossOrigin option, it will skip CORS for manifest.
              // Any invalid keyword or empty string defaults to `anonymous`
              crossOrigin: `use-credentials`,
            },
          },
    ],
}