import React from "react"
import { JSONLD, Generic } from "react-structured-data"

export const WebSchema = ({ title, description, siteName }) => {
  return (
    <React.Fragment>
      <JSONLD dangerouslyExposeHtml>
        <Generic
          dangerouslyExposeHtml
          type="review"
          jsonldtype="WebPage"
          schema={{
            name: title,
            description: description,
          }}
        >
          <Generic
            type="publisher"
            jsonldtype="Organization"
            schema={{ name: siteName }}
          />
        </Generic>
      </JSONLD>
    </React.Fragment>
  )
}

export default WebSchema
