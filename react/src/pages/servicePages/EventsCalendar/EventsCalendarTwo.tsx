import React, { ReactElement, ReactNode, useEffect, useState } from 'react';
import { Button, Card, Modal } from 'antd';

import { IPageData, IPageProps } from '../../../interfaces/page-data';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

const headerOptions = {
  left: 'prev,next today ',
  center: 'title',
  right: 'dayGridMonth,dayGridWeek,dayGridDay, dayGriList'
};

interface EventsCalendarTwoProps {
    events: any[]
}

//to do: make a type for the props here
const EventsCalendarTwo: React.FunctionComponent<EventsCalendarTwoProps> = (events) => {
  const [event, setEvent] = useState(null);
  const [modalVisibility, setModalVisibility] = useState(false);
  



 

  const setRelativeDemoDate = (day: number, hour: number = 0) => {
    const date = new Date();

    date.setDate(date.getDate() + day);
    date.setHours(date.getHours() + hour);

    return date;
  };


  const closeModal = () => setModalVisibility(false);

  const handleEventClick = (arg: any) => {
    setEvent(arg.event);
    setModalVisibility(true);
  };

  let modalBody, modalTitle, modalFooter;

  if (event) {
    modalBody = (
      <div className='d-flex flex-column'>
        <div className='event-time flex-column mb-4'>
          <h5 className='event-title m-0'>Event time</h5>
          <span>
            From: {event.start.toDateString()} - to: {event.end.toDateString()}
          </span>
        </div>

        <div className='event-desc flex-column'>
          <h5 className='event-title m-0'>Event description</h5>
          <span>{event.extendedProps.desc}</span>
        </div>
      </div>
    );

    modalTitle = (
      <div className='title-block p-0 m-0'>
        <h3 style={{ color: event.backgroundColor }} className='modal-title m-0'>
          {event.title}
        </h3>
      </div>
    );

    modalFooter = (
      <div className='d-flex justify-content-between modal-footer'>
        <Button onClick={closeModal} type='danger'>
          Close
        </Button>
        <Button type='primary'>Change event</Button>
      </div>
    );
  }

  return (
    <>
      <div className='mb-0'>
        <FullCalendar
          eventClick={handleEventClick}
          events={events}
          defaultView='dayGridMonth'
          plugins={[dayGridPlugin]}
          header={headerOptions}
          weekends
        />
      </div>

      <Modal
        title={modalTitle}
        footer={modalFooter}
        visible={modalVisibility}
        onCancel={closeModal}>
        {modalBody}
      </Modal>
    </>
  );
};

export default EventsCalendarTwo;
