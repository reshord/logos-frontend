import React from "react"
import ContentLoader from "react-content-loader"

const CardLoader = () => (
<ContentLoader 
    speed={2}
    width={280}
    height={355}
    viewBox="0 0 280 355"
    backgroundColor="#e1e0e1"
    foregroundColor="#ecebeb"
    style={{marginRight: 200, width: 400}}
  >
    <rect x="0" y="0" rx="0" ry="0" width="280" height="200" /> 
    <rect x="11" y="215" rx="0" ry="0" width="149" height="25" /> 
    <rect x="11" y="251" rx="0" ry="0" width="189" height="29" /> 
    <rect x="221" y="216" rx="0" ry="0" width="52" height="14" /> 
    <rect x="11" y="327" rx="0" ry="0" width="74" height="22" /> 
    <rect x="138" y="308" rx="0" ry="0" width="120" height="44" />
  </ContentLoader>
)

export default CardLoader