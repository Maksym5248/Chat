import React from "react"
import {ActivityIndicator, View } from "react-native";
import PropTypes from "prop-types";


const Loading = ({size = 24, color = "grey"}) => (
  <View style={{
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }}>
    <ActivityIndicator
      animating
      size={size}
      color={color}
    />
  </View>
);

Loading.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string
};

Loading.defaultProps = {
  size: "large"
};

export default Loading
