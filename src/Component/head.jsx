import React from 'react';
import Helmet from 'react-helmet';

function Head(props) {
    return(
      <Helmet>
        <title>[FR] Skull RP</title>
        <link rel="shortcut icon" href={props.Logo} />
        <meta name="twitter:title" content="[FR] Skull RP - Serveur GTA V RP" />
        <meta name="twitter:description" content="Serveur GTA V RP Français, rejoins nous !" />
        <meta name="twitter:image" content={'http://skull-rp.foxstud.io/'+props.Preview} />
        <meta property="og:title" content="[FR] Skull RP - Serveur GTA V RP" />
        <meta property="og:description" content="Serveur GTA V RP Français, rejoins nous !" />
        <meta property="og:image" content={'http://skull-rp.foxstud.io/'+props.Preview} />
        <meta property="og:image:width" content="1218" />
        <meta property="og:image:height" content="608" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:image:type" content="image/png" />
    </Helmet>
    )
};

export default Head;