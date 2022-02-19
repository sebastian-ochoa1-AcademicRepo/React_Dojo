import React, { useEffect, Fragment} from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";

//COmponente que controla el calendario
const FullCalendarCustom = () => {

  //Controlo el drag and drop del calendario
  useEffect(() => {

    //Obtengo los elementos que se pueden arrastrar
    let draggableItems = document.getElementById("external-events");
    //Creo una instancia del drag y asigno los items que puede arrastrar mediante la clase fc-event y obtengo
    
    //Los datos que me interesan
    new Draggable(draggableItems, {
      itemSelector: ".fc-event",
      eventData: function (eventItem) {
        let id = eventItem.getAttribute("id");
        let title = eventItem.getAttribute("title");
        let color = `#${eventItem.getAttribute("color")}`;
        return {
          id: id,
          title: title,
          color: color,
        };
      },
    });
  }, []);

  //Renderizo el calendario con cada una de sus props
  return (
    <Fragment>
      <FullCalendar
        headerToolbar={{
          left: "prev",
          center: "title",
          right: "next",
        }}
        height={650}
        rerenderDelay={10}
        eventDurationEditable={false}
        editable={true}
        selectable={false}
        locale="es"
        droppable={true}
        plugins={[dayGridPlugin, interactionPlugin]}
        dragScroll={false}
        dayMaxEventRows={3}
      />
      
    </Fragment>
  );
};

export default FullCalendarCustom;
