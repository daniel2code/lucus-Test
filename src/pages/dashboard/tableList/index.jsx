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
            <TableHead>Title</TableHead>
            <TableHead>Body</TableHead>
            <TableHead>ID</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>

          {[...Array(7)].map(() => {
            return (
              <TableRow w="100%" bg="#1A1A20" h="50px" br="10px">
                <TableData>Testing</TableData>
                <TableData>Testing</TableData>
                <TableData>Testing</TableData>
                <TableData>Testing</TableData>
              </TableRow>
            );
          })}
        </Table>
      </Box>
    </Box>
  );
};

export default Index;
