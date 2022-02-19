import React, {/* useEffect */ useState} from "react";
import { Button, Grid } from "@mui/material";
import FullCalendarCustom from "../components/FullCalendarCustom";
import ListTasks from "../components/ListTasks";
import {data} from "../data/data" 

//Pagina principal que renderiza el calendario
const CalendarPage = () => {

  //Estado que contiene las tareas
  const [tasks] = useState(data);

  //Renderizo la lista de tareas, el input de busqueda y el calendario cada uno con las props necesarias
  return (
    <Grid container spacing={3} >

      {/*Lista de Tareas*/}
      <Grid item lg={3} sm={3} md={3} xs={3}>
        <ListTasks tasks={tasks}/>
      </Grid>

      {/*Calendario*/}
      <Grid item lg={9} sm={9} md={9} xs={9}>
        <FullCalendarCustom/>
        <Button sx={{mt: 2}} variant="outlined" >Guardar</Button>
      </Grid>

    </Grid>
  );
};

export default CalendarPage;
