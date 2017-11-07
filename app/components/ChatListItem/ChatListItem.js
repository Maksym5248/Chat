import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Avatar from "../Avatar/index";

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: "#F5FCFF"
  },
  wrapperIsNew: {
    flexDirection: "row",
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: "#bfcee3"
  },
  wrapperContent: {
    padding: 5,
    width: "80%",
    height: 80
  },
  headerContent: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  headerTitle: {
    fontSize: 18
  },
  content: {
    fontSize: 15
  }
});



const ChatListItem = ({ onVisibleModalVisible, dispatch, user }) => {
    const title = "Костін Максим";
    const date = "20.10.2017";
    const isNew = "Нове";

  return (
     <TouchableOpacity  onLongPress={() => onVisibleModalVisible()} onPress={(e) => dispatch({type: "CurrentChat"})}>
         <View style={styles.wrapper}>
             <View >
                 <Avatar/>
             </View>
             <View style={styles.wrapperContent}>
                 <View style={styles.headerContent}>
                     <Text style={styles.headerTitle}>
                         {title}
                     </Text>
                     <Text>
                         {isNew}
                     </Text>
                     <Text>
                         {date}
                     </Text>
                 </View>
                 <Text style={styles.content}>
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, provident, quae. Assumenda dignissimos eaque molestiae nobis placeat. Ab architecto fugit maxime minima mollitia neque temporibus.
                 </Text>
             </View>
         </View>
     </TouchableOpacity>
  );
};

ChatListItem.propTypes = {
  user: PropTypes.object.isRequired,
  onVisibleModalVisible: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(ChatListItem);
