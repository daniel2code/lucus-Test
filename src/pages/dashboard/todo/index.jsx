import React, { useState } from "react";

import TodoList from "./todoList/index";
import Toaster from "../../../components/toaster/index";
import { Background, ContentBox, SmallText } from "./todoStyles";
import { Box } from "../../../components/box";
import { Input, FormBox } from "../../../components/inputStyles";
import { Button } from "../../../components/buttonStyles";
import { Image } from "../../../components/image";
import { colorPallet } from "../../../config/theme";
import todoIcon from "../../../assets/to-do-list.png";

const Index = () => {
  const [list, setList] = useState([]);
  const [isEditing, setIsEdting] = useState(false);
  const [editId, setEditId] = useState(null);
  const [todo, setTodo] = useState("");
  const [message, setMessage] = useState("");
  const [openToaster, setOpenToaster] = useState(false);

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(todo);
    if (!todo) {
      setMessage({ error: true, text: "Todo must not be empty" });
      setOpenToaster(true);
    } else if (todo && isEditing) {
      setList(
        list.map((item) => {
          if (item.id === editId) {
            return { ...item, title: todo };
          }
          return item;
        })
      );

      setTodo("");
      setEditId(null);
      setIsEdting(false);
      setMessage({ error: false, text: "Todo value changed" });
      setOpenToaster(true);
    } else {
      setMessage({ error: false, text: "Todo successfully added to the list" });
      setOpenToaster(true);
      const newTodo = { id: new Date().getTime().toString(), title: todo };
      setList([...list, newTodo]);
      setTodo("");
    }
  };

  const removeItem = (id) => {
    setMessage({ error: true, text: "Todo removed" });
    setOpenToaster(true);
    setList(list.filter((item) => item.id !== id));
  };

  const editItem = (id) => {
    const editItem = list.find((item) => item.id === id);
    setIsEdting(true);
    setEditId(id);
    setTodo(editItem.title);
  };

  const clearList = () => {
    setTodo([]);
    window.location.reload(false);
  };

  return (
    <React.Fragment>
      <Box w="100%">
        <Background />

        <ContentBox>
          <Box w="600px">
            <Toaster
              open={openToaster}
              message={message}
              setOpen={setOpenToaster}
            />
            <Box
              display="flex"
              align="center"
              justify="center"
              direction="row"
              gap="13px"
              pd="20px"
              bg="#1A1A20"
              w="100%"
              h="60px"
              radius="10px"
            >
              <FormBox
                pd="0px 0px 10px 0px"
                style={{
                  display: "flex",
                  width: "100%",
                  gridGap: "13px",
                  alignItems: "flex-end",
                }}
                onSubmit={handleSubmit}
              >
                <Image alt="icon" w="20px" h="20px" src={todoIcon} />
                <Input
                  bg="transparent"
                  bb="1px solid gray"
                  br="0px"
                  placeholder="Create a new todo"
                  type="text"
                  value={todo}
                  onChange={handleChange}
                />
                <Button
                  w="70px"
                  h="30px"
                  br="7px"
                  bg={colorPallet.secondaryColor}
                  color="white"
                >
                  {isEditing ? "Edit" : "Save"}
                </Button>
              </FormBox>
            </Box>

            {/* Return nothing if todo array is empty */}
            {list.length === 0 ? (
              <SmallText fs="24px" fw="600" mt="45px">
                No todo's yet{" "}
              </SmallText>
            ) : (
              <Box w="100%" margin="40px 0px 0px 0px">
                {list.map((item) => {
                  return (
                    <TodoList
                      todo={item.title}
                      id={item.id}
                      removeItem={removeItem}
                      editItem={editItem}
                      key={item.id}
                    />
                  );
                })}
              </Box>
            )}

            <Box
              display="flex"
              align="center"
              justify="space-between"
              direction="row"
              gap="13px"
              pd="20px"
              bg="#1A1A20"
              w="100%"
              h="60px"
              radius="2px"
            >
              <SmallText>
                Total todos:{" "}
                <span style={{ fontWeight: "600" }}>{list.length}</span>
              </SmallText>

              {/* Hide the clear button when the todo list is empty */}
              {list.length === 0 ? (
                ""
              ) : (
                <Button
                  bg="red"
                  w="70px"
                  h="30px"
                  color="white"
                  br="5px"
                  onClick={clearList}
                >
                  Clear
                </Button>
              )}
            </Box>
          </Box>
        </ContentBox>
      </Box>
    </React.Fragment>
  );
};

export default Index;
