export type CalendarType = 'year' | 'month' | 'week';

export interface CalendarOption {
    type? : CalendarType
    selectDate? : string
    selectYear? : string,
    selectMonth? : string
    range? : number[]
    events? : Event[]
}

export interface CalendarData {
    type : CalendarType
    today : string
    selectDate? : string
    selectYear? : string,
    selectMonth? : string
    dateList : DateData[]
    events? : Event[]
    setEvent : Function
    getEvent : Function
    addEvent : Function
    deleteEvent : Function
    getDateEventMap : Function
    getAllEvent : Function
}

export interface DateData {
    text? : string
    date? : string
    dayOfMonth? : string
    dayOfWeek? :  number
    month? : string
    year? : string
}

export interface Event {
    id : string
    date : string
    time : string
    title : string
}

export interface DateEventMap {
    [key : string] : Event[];
}