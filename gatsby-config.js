module.exports = {
  siteMetadata: {
    title: "Samuel Titiloye - Software Developer",
    author: "Samuel Titiloye",
    description: "Samuel Titiloye - Software Developer"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: 'black',
        theme_color: 'black',
        display: 'minimal-ui',
        icon: 'src/images/headshot.jpg', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
