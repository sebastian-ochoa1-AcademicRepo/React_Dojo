import React, { Fragment } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContentUser from "./CardContentUser";

//Mapeo los usuarios en una lista de cards
const ListTasks = ({tasks}) => {

  return (
    <Fragment>
      <div id="external-events">
        {tasks.map((singleTask, index) => (

          /*Enmaquetacion*/
          <Card
            key={index}
            className="fc-event"
            title={singleTask.nombre}
            id={singleTask.idus}
            color={singleTask.color}
            sx={{
              display: "flex",
              width: "100%",
            }}
            variant="outlined"
          >
            
            <Box
              sx={{ flexDirection: "column", width: "90%" }}
            >
              <CardContentUser task={singleTask} />
            </Box>
            
            <Box
              sx={{
                flexDirection: "column",
                bgcolor: `#${singleTask.color}`,
                width: "10%",
              }}
            >
            </Box>

          </Card>
        ))}
      </div>
    </Fragment>
  );
};

export default ListTasks;
