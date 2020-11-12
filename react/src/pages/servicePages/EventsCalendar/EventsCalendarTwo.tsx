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

//to do: make a type for the props here
const EventsCalendarTwo: React.FunctionComponent = () => {
  const [event, setEvent] = useState(null);
  const [modalVisibility, setModalVisibility] = useState(false);
  



 

  const setRelativeDemoDate = (day: number, hour: number = 0) => {
    const date = new Date();

    date.setDate(date.getDate() + day);
    date.setHours(date.getHours() + hour);

    return date;
  };

  const events = [
    {
        title: 'Attend math tutoring',
        lastUpdatedEpoch : '1605213733',
        lastUpdatedAuthor : {uuid: '123e4567-e89b-12d3-a456-426655440000', name: 'George Felippe', relationshipToUser: 'Sponser'},
        lastUpdatedSection : '',
        EpochStartDate: '1605213733',
        EpochEndDate: '1605973238',
        time: '11:55',
        date: 'Oct 5th',
        color: '#f4e4f2',
        start: setRelativeDemoDate(0, 2),
        end: setRelativeDemoDate(0, 3),
        isStepCurrent: 'false',
        isStepStarted: 'false',
        stepCompletionPercentage: 0,
        isStepMarkedCompleteBySponsee: 'false',
        isStepMarkedCompleteBySponser: 'false',
        bounty: 15.00,
        points: 200,
        desc: 'Oct 5th | $15 | 20pts',
        settlementCriterian: [],
        content:
          'Morbi venenatis ligula non enim porttitor, ac mattis massa gravida. Aliquam ut odio et enim pretium laoreet. Vivamus ac laoreet lacus. Phasellus ac erat non libero iaculis placerat. Donec in suscipit dui, et elementum tortor.',
        authorAvatar: 'user1',
        authorUuid: '123e4567-e89b-12d3-a456-426655440000',
      },
    {
      title: 'Project review',
      color: '#eaf6ff',
      start: setRelativeDemoDate(1, -1),
      end: setRelativeDemoDate(1, 3),
      desc:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    },
    {
      title: 'Meeting',
      color: '#eaf6ff',
      start: setRelativeDemoDate(1),
      end: setRelativeDemoDate(1, 3),
      desc:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    },
    {
      title: 'Event',
      color: '#eaf6ff',
      start: setRelativeDemoDate(1, -3),
      end: setRelativeDemoDate(1, -2),
      desc:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    },
    {
      title: 'Long event',
      color: '#eaf6ff',
      textColor: '#000',
      start: setRelativeDemoDate(3, -5),
      end: setRelativeDemoDate(4),
      desc:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    },
    {
      title: 'Event',
      color: '#eaf6ff',
      textColor: '#000',
      start: setRelativeDemoDate(5, 10),
      end: setRelativeDemoDate(6),
      desc:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    }
  ];

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
