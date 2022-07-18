import CheckBox from "@react-native-community/checkbox";
import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Alert, Modal, Pressable, TextInput } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addNewTodoAction, deleteById, getTodos, toggleID } from "../store/actions/todoActions";
import { styles, todoStyles } from "../style";


const ModalConfirm = ({ modalVisible, setModalVisible, handleDelete }) => {
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
            }}
        >
            <View style={todoStyles.centeredView}>
                <View style={todoStyles.modalView}>
                    <Text style={todoStyles.modalText}>Are you sure?</Text>
                    <View style={todoStyles.dFlex}>
                        <Pressable
                            style={[todoStyles.button, todoStyles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={todoStyles.textStyle}>Cancel</Text>
                        </Pressable>
                        <Pressable
                            style={[todoStyles.button, todoStyles.buttonClose]}
                            onPress={handleDelete}
                        >
                            <Text style={todoStyles.textStyle}>Ok</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const Item = ({ id, title, completed }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const dispatch = useDispatch();
    const dispatchToggleID = () => {
        const action = toggleID(id);
        dispatch(action);
    };

    const onPress = () => {
        setModalVisible(true)
    }

    const handleDelete = () => {
        const action = deleteById(id);
        dispatch(action);
        setModalVisible(false);
    }

    return (
        <View style={todoStyles.item}>
            <Text
                style={todoStyles.title}
                numberOfLines={1}
            >{title}</Text>
            <View style={todoStyles.dFlex}>
                <CheckBox
                    disabled={false}
                    value={completed}
                    onValueChange={dispatchToggleID}
                />
                <TouchableOpacity
                    style={todoStyles.padding}
                    onPress={onPress}
                >
                    <Text>Delete</Text>
                </TouchableOpacity>
            </View>
            <ModalConfirm
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                handleDelete={handleDelete}
            ></ModalConfirm>
        </View>
    )
};

const AddNewItem = ({ addNewTodo }) => {
    const [newItems, setNewItems] = useState('');

    return (
        <View style={todoStyles.item}>
            <TextInput
                style={todoStyles.input}
                value={newItems}
                onChangeText={(text) => setNewItems(text)}
            ></TextInput>
            <TouchableOpacity style={todoStyles.padding}>
                <Text onPress={() => {
                    addNewTodo(newItems)
                    setNewItems('')
                }}>Add new todo</Text>
            </TouchableOpacity>
        </View>
    )
}

const ToDoScreen: React.FC = () => {
    const dispatch = useDispatch();
    const todos = useSelector((state: any) => {
        return state?.todo?.todos
    })

    useEffect(() => {
        getTodos(dispatch);
    }, [])

    const addNewTodo = (value) => {
        if (value) {
            const action = addNewTodoAction(value);
            dispatch(action);
        }
    }

    return (
        <View style={todoStyles.container}>
            <AddNewItem
                addNewTodo={addNewTodo}
            ></AddNewItem>
            <FlatList
                data={todos}
                renderItem={({ item }) => {
                    return (
                        <Item
                            title={item.title}
                            id={item.id}
                            completed={item.completed}
                        />
                    )
                }}
                keyExtractor={item => item.id}
            >
            </FlatList>
        </View>
    )
}

export default ToDoScreen;