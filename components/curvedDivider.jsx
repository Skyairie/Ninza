import React from "react";
import { Dimensions } from "react-native"; // Import Dimensions to get screen width
import Svg, { Path } from "react-native-svg";

const CurvedDivider = () => {
  const screenWidth = Dimensions.get("window").width; // Get screen width

  return (
    <Svg height="20" width={screenWidth}>
      <Path
        d={`M0 10 C${screenWidth / 4} 0, ${
          screenWidth * 0.75
        } 20, ${screenWidth} 10 L${screenWidth} 10 L0 10 Z`}
        fill="#284D76"
      />
    </Svg>
  );
};
export default CurvedDivider;