import React from 'react';
import Helmet from "react-helmet"
import SiteSchema from './siteSchema';
import WebSchema from './webSchema';

function MetaSchema({
    title,
    description,
    image,
    siteName,
    }) {
    return (
        <>
            <Helmet>
                <title>{title}</title>
                <meta name='title' content={title} />
                <meta name="description" content={description} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="twitter:title" content={title} />
                <meta property="twitter:description" content={description} />
                <meta
                    property="og:image"
                    content={
                        image
                            ? image
                            : "https://images.slurrp.com/prod/static_img/homeSlurrp.png"
                    }
                />
                <meta
                    property="og:image:secure_url"
                    content={
                        image
                            ? image
                            : "https://images.slurrp.com/prod/static_img/homeSlurrp.png"
                    }
                />
                <meta property="og:image:width" content={image ? "180" : "100"} />
                <meta property="og:image:height" content={image ? "110" : "80"} />
            </Helmet>
            <WebSchema title={title} description={description} siteName={siteName} />
      <SiteSchema />
        </>
    );
}

export default MetaSchema;