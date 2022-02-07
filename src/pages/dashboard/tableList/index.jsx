import React, { useEffect } from "react";

import { Box } from "../../../components/box";
import {
  Table,
  TableData,
  TableHead,
  TableRow,
} from "../../../components/tables";
import { Text } from "./tableListStyles";
import { useGetRequest } from "../../../helpers/requestHelpers";

const Index = () => {
  const { data, loading, makeGetRequest } = useGetRequest();

  useEffect(() => {
    makeGetRequest("posts");
  }, []);

  console.log(data);

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
            data.slice(0, 25).map((item) => {
              return (
                <TableRow w="100%" bg="#1A1A20" h="50px" br="10px">
                  <TableData w="10%">{item?.userId}</TableData>
                  <TableData w="35%">{item?.title}</TableData>
                  <TableData w="45%">{item?.body}</TableData>
                  <TableData w="10%">{item?.id}</TableData>
                </TableRow>
              );
            })}
        </Table>
      </Box>
    </Box>
  );
};

export default Index;
