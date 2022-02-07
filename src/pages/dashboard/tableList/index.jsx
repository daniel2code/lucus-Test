import React, { useEffect, useState } from "react";

import { Box } from "../../../components/box";
import {
  Table,
  TableData,
  TableHead,
  TableRow,
} from "../../../components/tables";
import { Select, Options } from "../../../components/inputStyles";
import { Button } from "../../../components/buttonStyles";
import Pagination from "../../../components/pagination/index";
// import Modal from "../../../components/modals/index";
import { Text } from "./tableListStyles";
import { colorPallet } from "../../../config/theme";
import { useGetRequest } from "../../../helpers/requestHelpers";

const Index = () => {
  const { makeGetRequest } = useGetRequest();

  const [tableData, setTableData] = useState(null);
  const [tracker, setTracker] = useState(10);
  const [num, setNum] = useState(1);
  const [filterNum, setFilterNum] = useState(1);

  const updateTracker = (e) => {
    setTracker(e.target.value);
  };

  useEffect(() => {
    makeGetRequest("posts", setTableData);
  }, [tracker, num, filterNum]);

  // Create a slice calculator
  const calculateTracker = () => {
    return num * tracker;
  };

  // Filter data according to select result
  const filterData = () => {
    setTableData(tableData.filter((item) => item.userId === +filterNum));
  };

  return (
    <Box
      display="flex"
      justify="flex-start"
      align="flex-start"
      pd="30px 5%"
      w="100%"
      style={{ position: "relative" }}
    >
      {/* <Modal /> */}

      <Box display="flex" direction="row" justify="space-between" w="100%">
        <Text fs="29px" fw="600">
          Table Data
        </Text>

        <Box display="flex" direction="row" align="center" gap="15px">
          <Text>Filter by ID:</Text>
          <Select br="5px" onChange={(e) => setFilterNum(e.target.value)}>
            <Options value="1">1</Options>
            <Options value="2">2</Options>
            <Options value="3">3</Options>
            <Options value="4">4</Options>
            <Options value="5">5</Options>
            <Options value="6">6</Options>
            <Options value="7">7</Options>
            <Options value="8">8</Options>
            <Options value="9">9</Options>
            <Options value="10">10</Options>
          </Select>

          <Button
            br="5px"
            fs
            h="30px"
            w="55px"
            bg={colorPallet.secondaryColor}
            color={colorPallet.textColor}
            onClick={() => filterData()}
          >
            Filter
          </Button>
        </Box>
      </Box>

      <Box w="100%" margin="50px 0px">
        <Table>
          <TableRow>
            <TableHead>Id</TableHead>
            <TableHead>Body</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>

          {tableData &&
            tableData.slice(0, calculateTracker()).map((item) => {
              return (
                <TableRow w="100%" bg="#1A1A20" h="50px" br="10px" key={item.id}>
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
        data={tableData}
        num={num}
        setNum={setNum}
      />
    </Box>
  );
};

export default Index;
