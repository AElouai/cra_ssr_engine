// A simple helper function to prepare the HTML markup
const prepHTML = (data, { html, head, body }, preloadedState = {}) => {
  data = data.replace('<html lang="en">', `<html ${html}`);
  data = data.replace("</head>", `${head}</head>`);
  data = data.replace(
    '<div id="root"></div>',
    `<div id="root"></div><script>window.__PRELOADED_STATE__ = ${JSON.stringify(
      preloadedState
    ).replace(/</g, "\\\\\u003c")} </script>`
  );
  data = data.replace('<div id="root"></div>', `<div id="root">${body}</div>`);
  return data;
};

export const getHTML = (htmlData, helmet, routeMarkup, reduxState) => {
  return prepHTML(
    htmlData,
    {
      html: helmet.htmlAttributes.toString(),
      head:
        helmet.title.toString() +
        helmet.meta.toString() +
        helmet.link.toString(),
      body: routeMarkup
    },
    reduxState
  );
};
