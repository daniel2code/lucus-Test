import React, { useEffect, useState } from "react";

import { Box } from "../../../components/box";
import {
  Table,
  TableData,
  TableHead,
  TableRow,
} from "../../../components/tables";
import { Button } from "../../../components/buttonStyles";
import Pagination from "../../../components/pagination/index";
import { Text } from "./tableListStyles";
import { colorPallet } from "../../../config/theme"
import { useGetRequest } from "../../../helpers/requestHelpers";

const Index = () => {
  const { data, loading, makeGetRequest } = useGetRequest();

  const [tracker, setTracker] = useState(10);
  const [num, setNum] = useState(1);

  const updateTracker = (e) => {
    setTracker(e.target.value);
  };

  useEffect(() => {
    makeGetRequest("posts");
  }, [tracker, num]);

  console.log(data);

  const calculateTracker = () => {
    return num * tracker;
  };

  return (
    <Box
      display="flex"
      justify="flex-start"
      align="flex-start"
      pd="30px 5%"
      w="100%"
    >
      <Text fs="29px" fw="600">
        Table Data
      </Text>

      <Box w="100%" margin="50px 0px">
        <Table>
          <TableRow>
            <TableHead>Id</TableHead>
            <TableHead>Body</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>

          {data &&
            data.slice(0, calculateTracker()).map((item) => {
              return (
                <TableRow w="100%" bg="#1A1A20" h="50px" br="10px">
                  <TableData w="10%">{item?.userId}</TableData>
                  <TableData w="35%">{item?.title}</TableData>
                  <TableData w="45%">{item?.body}</TableData>
                  <TableData w="10%">
                    <Button
                      br="5px"
                      fs
                      h="30px"
                      w="55px"
                      bg={colorPallet.secondaryColor}
                      color={colorPallet.textColor}
                    >
                      Edit
                    </Button>
                  </TableData>
                </TableRow>
              );
            })}
        </Table>
      </Box>

      <Pagination
        tracker={tracker}
        updateTracker={updateTracker}
        data={data}
        num={num}
        setNum={setNum}
        // calculateTracker={calculateTracker}
      />
    </Box>
  );
};

export default Index;
