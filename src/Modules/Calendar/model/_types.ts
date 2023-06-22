export interface CalendarAPI {
    goNextMonth : Function
    goPrevMonth : Function
}

export type CalendarType = 'year' | 'month' | 'week';

export interface CalendarOption {
    stDate? : Date
    isVerticalScroll? : boolean
    overType? : 'hide'|'show'|'none'
    onClick? : Function
    onDragStart? : Function
    onDragEnd? : Function
    calendarType? : 'dayOfMonth' | 'monthOfYear' | 'dayOfWeek'
    year? : number | string
    month? : number | string
    width? : number | string
    height? : number | string
    events? : Event[]
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
    id? : string
    start? : string
    end? : string
    title? : string
    isAllDay? : boolean
    startDate? : Date
    endDate? : Date
    
}
