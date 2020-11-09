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

const PageEventCalendar: React.FC<IPageProps> = props => {
  const [event, setEvent] = useState(null);
  const [modalVisibility, setModalVisibility] = useState(false);
  const { onSetPage } = props;

  const pageData: IPageData = {
    title: 'Event calendar',
    loaded: true,
    breadcrumbs: [
      {
        title: 'Home',
        route: 'dashboard'
      },
      {
        title: 'User Pages ',
        route: 'dashboard'
      },
      {
        title: 'Event Calendar'
      }
    ]
  };

  useEffect(() => onSetPage(pageData), []);

  const setDate = (day: number, hour: number = 0) => {
    const date = new Date();

    date.setDate(date.getDate() + day);
    date.setHours(date.getHours() + hour);

    return date;
  };

  const events = [
    {
      title: 'Project review',
      color: '#fc8b37',
      start: setDate(0, 2),
      end: setDate(0, 3),
      desc:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    },
    {
      title: 'Project review',
      start: setDate(1, -1),
      end: setDate(1, 3),
      desc:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    },
    {
      title: 'Meeting',
      color: '#2fa7ff',
      start: setDate(1),
      end: setDate(1, 3),
      desc:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    },
    {
      title: 'Event',
      color: '#7cdb86',
      start: setDate(1, -3),
      end: setDate(1, -2),
      desc:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    },
    {
      title: 'Long event',
      color: '#f741b5',
      textColor: '#000',
      start: setDate(3, -5),
      end: setDate(4),
      desc:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    },
    {
      title: 'Event',
      color: '#f741b5',
      textColor: '#000',
      start: setDate(5, 10),
      end: setDate(6),
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
      <Card className='mb-0'>
        <FullCalendar
          eventClick={handleEventClick}
          events={events}
          defaultView='dayGridMonth'
          plugins={[dayGridPlugin]}
          header={headerOptions}
          weekends
        />
      </Card>

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

export default PageEventCalendar;
