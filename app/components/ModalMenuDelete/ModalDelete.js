import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, View, Modal, TouchableOpacity, Text } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        justifyContent: "center",
        alignItems: "stretch",
        padding: 5
    },
    containerButton: {
        borderRadius: 5,
        flexDirection: "row",
        justifyContent: "center",
        padding: 5,
        backgroundColor: "grey"
    }
});

const ModalDelete = ({ offVisibleModalVisible, visible }) => (
        <Modal
            animationType="fade"
            transparent={true}
            visible={visible}
            onRequestClose={() => {alert("меню закрито")}}
        >
            <TouchableOpacity style={styles.container} onPress={offVisibleModalVisible}>
                <View style={styles.containerButton}>
                    <TouchableOpacity onPress={() => null}>
                        <Text>Видалити</Text>
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
        </Modal>
    );


ModalDelete.propTypes = {
    offVisibleModalVisible: PropTypes.func,
    visible: PropTypes.bool
};

export default ModalDelete;
