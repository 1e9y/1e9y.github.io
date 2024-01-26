/** @type {import('astro/config').AstroUserConfig} */
export default {
  // Set the site directory to `site`.
  // The rest of the directory names are whole words, and I don't want `src` to stand out.
  srcDir: "site",

  // Do not minify HTML. Let the source be readable!
  compressHTML: false,

  site: 'https://ka.works',
};
