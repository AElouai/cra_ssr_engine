import path from "path";
import fs from "fs";
import Helmet from "react-helmet";
import { switchPath } from "../";

import { getHTML } from "./html";
import { createServerStaticStore } from "./store";


export const sendFileToHtml = ({
  rootReducer,
  filePathName,
  component,
  res,
  req
}) => {
  const filePath = path.resolve(__dirname, filePathName);

  fs.readFile(filePath, "utf8", (err, htmlData) => {
      //TODO manage error page
    // If there's an error... serve up something nasty
    if (err) {
      console.error("Read error", err);
      return res.status(404).end();
    }

    switchPath(req.path).then(reduxState => {
      const routeMarkup = createServerStaticStore({
        rootReducer,
        component,
        path: req.path
      });
      // Let Helmet know to insert the right tags
      const helmet = Helmet.renderStatic();

      // generate
      const html = getHTML(htmlData, helmet, routeMarkup, reduxState);
      // Send HTML Data with State
      // Todo i should probably add a option to disable sending State data with this responce
      res.send(html);
    });
  });
};