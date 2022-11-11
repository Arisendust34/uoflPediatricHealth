import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef,
} from '@angular/core';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours,
} from 'date-fns';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView,
} from 'angular-calendar';
import { EventColor } from 'calendar-utils';

const colors: Record<string, EventColor> = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3',
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF',
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA',
  },
  orange: {
    primary: '#D1E8FF',
    secondary: '#ffaa80',
  },
  purple: {
    primary: '#D1E8FF',
    secondary: '#d699ff',
  }
};

@Component({
  selector: 'weekCalendarSchedule',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    `
      h3 {
        margin: 0 0 10px;
      }

      pre {
        background-color: #f5f5f5;
        padding: 15px;
      }
    `,
  ],
  templateUrl: 'calendar.component.html',
})
export class CalendarComponent {
  @ViewChild('modalContent', { static: true }) modalContent!: TemplateRef<any>;

  view: CalendarView = CalendarView.Month;

  CalendarView = CalendarView;

  viewDate: Date = new Date();

  modalData!: {
    action: string;
    event: CalendarEvent;
  };

  actions: CalendarEventAction[] = [
    {
      label: '<i class="fas fa-fw fa-pencil-alt"></i>',
      a11yLabel: 'Edit',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent('Edited', event);
      },
    },
    {
      label: '<i class="fas fa-fw fa-trash-alt"></i>',
      a11yLabel: 'Delete',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter((iEvent) => iEvent !== event);
        this.handleEvent('Deleted', event);
      },
    },
  ];

  refresh = new Subject<void>();

  //Default calendar events:
  events: CalendarEvent[] = [
    /* Yellow block: */
    {
      start: addHours((new Date(2022, 9, 6)), 7), //year, month-1, day
      end: addHours((new Date(2022, 9, 6)), 15),
      title: 'Caparell',
      color: { ...colors['yellow'] },
      actions: this.actions,
      resizable: {
        beforeStart: true,
        afterEnd: true,
      },
      draggable: true,
    },
    {
      start: addHours((new Date(2022, 9, 7)), 7),
      end: addHours((new Date(2022, 9, 7)), 15),
      title: 'Klensch',
      color: { ...colors['yellow'] },
      actions: this.actions,
      resizable: {
        beforeStart: true,
        afterEnd: true,
      },
      draggable: true,
    },
    {
      start: addHours((new Date(2022, 9, 8)), 7),
      end: addHours((new Date(2022, 9, 8)), 15),
      title: 'Hart',
      color: { ...colors['yellow'] },
      actions: this.actions,
      resizable: {
        beforeStart: true,
        afterEnd: true,
      },
      draggable: true,
    },
    {
      start: addHours((new Date(2022, 9, 6)), 9),
      end: addHours((new Date(2022,9, 6)), 17),
      title: 'Lund',
      color: { ...colors['yellow'] },
      actions: this.actions,
      resizable: {
        beforeStart: true,
        afterEnd: true,
      },
      draggable: true,
    },
    {
      start: addHours((new Date(2022, 9, 7)), 9),
      end: addHours((new Date(2022,9, 7)), 17),
      title: 'Spurlin',
      color: { ...colors['yellow'] },
      actions: this.actions,
      resizable: {
        beforeStart: true,
        afterEnd: true,
      },
      draggable: true,
    },
    {
      start: addHours((new Date(2022, 9, 8)), 9),
      end: addHours((new Date(2022,9, 8)), 17),
      title: 'Eastep',
      color: { ...colors['yellow'] },
      actions: this.actions,
      resizable: {
        beforeStart: true,
        afterEnd: true,
      },
      draggable: true,
    },
    /* Orange block: */
    {
      start: addHours((new Date(2022, 9, 7)), 11),
      end: addHours((new Date(2022,9, 7)), 19),
      title: 'Magloire',
      color: { ...colors['orange'] },
      actions: this.actions,
      resizable: {
        beforeStart: true,
        afterEnd: true,
      },
      draggable: true,
    },
    /* Red block: */
    {
      start: addHours((new Date(2022, 9, 6)), 15),
      end: addHours((new Date(2022,9, 6)), 23),
      title: 'Lund',
      color: { ...colors['red'] },
      actions: this.actions,
      resizable: {
        beforeStart: true,
        afterEnd: true,
      },
      draggable: true,
    },
    {
      start: addHours((new Date(2022, 9, 7)), 15),
      end: addHours((new Date(2022,9, 7)), 23),
      title: 'Spurlin',
      color: { ...colors['red'] },
      actions: this.actions,
      resizable: {
        beforeStart: true,
        afterEnd: true,
      },
      draggable: true,
    },
    {
      start: addHours((new Date(2022, 9, 8)), 15),
      end: addHours((new Date(2022,9, 8)), 23),
      title: 'Eastep',
      color: { ...colors['red'] },
      actions: this.actions,
      resizable: {
        beforeStart: true,
        afterEnd: true,
      },
      draggable: true,
    },
    /* Purple Block (5p): */
    {
      start: addHours((new Date(2022, 9, 6)), 17),
      end: addHours((new Date(2022,9, 6)), 25),
      title: 'Eastep',
      color: { ...colors['purple'] },
      actions: this.actions,
      resizable: {
        beforeStart: true,
        afterEnd: true,
      },
      draggable: true,
    },
    {
      start: addHours((new Date(2022, 9, 7)), 17),
      end: addHours((new Date(2022,9, 7)), 25),
      title: 'Poteh',
      color: { ...colors['purple'] },
      actions: this.actions,
      resizable: {
        beforeStart: true,
        afterEnd: true,
      },
      draggable: true,
    },
    {
      start: addHours((new Date(2022, 9, 8)), 17),
      end: addHours((new Date(2022,9, 8)), 25),
      title: 'Caperell',
      color: { ...colors['purple'] },
      actions: this.actions,
      resizable: {
        beforeStart: true,
        afterEnd: true,
      },
      draggable: true,
    },
    /* 7p */
    {
      start: addHours((new Date(2022, 9, 6)), 19),
      end: addHours((new Date(2022,9, 6)), 27),
      title: 'Hart',
      color: { ...colors['purple'] },
      actions: this.actions,
      resizable: {
        beforeStart: true,
        afterEnd: true,
      },
      draggable: true,
    },
    {
      start: addHours((new Date(2022, 9, 7)), 19),
      end: addHours((new Date(2022,9, 7)), 27),
      title: 'Lund',
      color: { ...colors['purple'] },
      actions: this.actions,
      resizable: {
        beforeStart: true,
        afterEnd: true,
      },
      draggable: true,
    },
    {
      start: addHours((new Date(2022, 9, 8)), 19),
      end: addHours((new Date(2022,9, 8)), 27),
      title: 'Lund',
      color: { ...colors['purple'] },
      actions: this.actions,
      resizable: {
        beforeStart: true,
        afterEnd: true,
      },
      draggable: true,
    },
    {
      start: addHours((new Date(2022, 9, 8)), 19),
      end: addHours((new Date(2022,9, 8)), 27),
      title: 'Bhargava',
      color: { ...colors['purple'] },
      actions: this.actions,
      resizable: {
        beforeStart: true,
        afterEnd: true,
      },
      draggable: true,
    },  
    /* 9p */
    {
      start: addHours((new Date(2022, 9, 6)), 21),
      end: addHours((new Date(2022,9, 6)), 29),
      title: 'Laniewicz',
      color: { ...colors['purple'] },
      actions: this.actions,
      resizable: {
        beforeStart: true,
        afterEnd: true,
      },
      draggable: true,
    },
    {
      start: addHours((new Date(2022, 9, 7)), 21),
      end: addHours((new Date(2022,9, 7)), 29),
      title: 'Anderson',
      color: { ...colors['purple'] },
      actions: this.actions,
      resizable: {
        beforeStart: true,
        afterEnd: true,
      },
      draggable: true,
    },
    {
      start: addHours((new Date(2022, 9, 8)), 21),
      end: addHours((new Date(2022,9, 8)), 29),
      title: 'Anderson',
      color: { ...colors['purple'] },
      actions: this.actions,
      resizable: {
        beforeStart: true,
        afterEnd: true,
      },
      draggable: true,
    },
  ];

  activeDayIsOpen: boolean = true;

  constructor(private modal: NgbModal) {}

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }
  }

  eventTimesChanged({
    event,
    newStart,
    newEnd,
  }: CalendarEventTimesChangedEvent): void {
    this.events = this.events.map((iEvent) => {
      if (iEvent === event) {
        return {
          ...event,
          start: newStart,
          end: newEnd,
        };
      }
      return iEvent;
    });
    this.handleEvent('Dropped or resized', event);
  }

  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event, action };
    this.modal.open(this.modalContent, { size: 'lg' });
  }

  addEvent(): void {
    this.events = [
      ...this.events,
      {
        title: 'New event',
        start: startOfDay(new Date()),
        end: endOfDay(new Date()),
        color: colors['red'],
        draggable: true,
        resizable: {
          beforeStart: true,
          afterEnd: true,
        },
      },
    ];
  }

  deleteEvent(eventToDelete: CalendarEvent) {
    this.events = this.events.filter((event) => event !== eventToDelete);
  }

  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }
}
