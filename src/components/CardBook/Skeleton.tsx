import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton: React.FC = () => (
  <ContentLoader 
    speed={2}
    width={240}
    height={400}
    viewBox="0 0 240 400"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="71" y="74" rx="0" ry="0" width="0" height="1" /> 
    <rect x="60" y="20" rx="10" ry="10" width="120" height="170" /> 
    <rect x="0" y="263" rx="10" ry="10" width="220" height="20" /> 
    <rect x="201" y="292" rx="0" ry="0" width="1" height="0" /> 
    <rect x="0" y="300" rx="10" ry="10" width="150" height="20" /> 
    <rect x="0" y="220" rx="10" ry="10" width="100" height="20" />
  </ContentLoader>
)

export default Skeleton;



