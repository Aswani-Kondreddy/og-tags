import React from "react"
import { JSONLD, Generic } from "react-structured-data"

export const SiteSchema = () => {
  return (
    <React.Fragment>
      <JSONLD dangerouslyExposeHtml>
        <Generic
          dangerouslyExposeHtml
          type="review"
          jsonldtype="WebSite"
          schema={{
            url: "https://stg.slurrp.com",
          }}
        ></Generic>
      </JSONLD>
    </React.Fragment>
  )
}

export default SiteSchema
