import React from 'react'
import './index.css'
import { BIRTHDAY, BIRTHDAY_YEAR } from '../../constant'


class Month extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            months: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", 
           "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ]
        }
    }

    daysInMonth (month, year) {
        return new Date(year, month, 0).getDate();
    }

    generateDayTitle() {
        let dayTitle = []
        let dayNumber = this.daysInMonth(this.props.monthValue, this.props.yearValue)
        for (let i=1; i<=31; i++) {
            if (i>dayNumber) {
                dayTitle.push(
                    <div key={i} className="day-not-exist"></div>
                )
                continue
            }
            let day = new Date(this.props.yearValue, this.props.monthValue-1, i);
            let currentDay = new Date()
            currentDay.setHours(0, 0, 0, 0)
            let classNames = "day-container"
            if (day.getMonth() === BIRTHDAY.getMonth() && day.getDate() === BIRTHDAY.getDate()) {
                if ((day.getFullYear() - BIRTHDAY_YEAR)%10===0 ) {
                    classNames += " important-birthday"
                } else {
                    classNames += " birthday"
                }
            }
            if (day.getTime() < currentDay.getTime()) {
                classNames += " past-day"
            } else if (day.getTime() === currentDay.getTime()) {
                classNames += " current-day"
            }
            if (this.props.showDate === true) {
                console.log(typeof this.props.showDate)
            }
            if (day.getFullYear() === currentDay.getFullYear()) {
                dayTitle.push(
                    <div key={i} className={classNames}>
                        <div className="day-date" style={{display: this.props.showDate? "inline" : "none"}}>{i}</div>
                    </div>
                )
            } else {
                dayTitle.push(
                    <div key={i} className={classNames}></div>
                )
            }
            
            
        }
        return dayTitle
    }

    render() {
        return (
            <div className="month-container">
                <div className="month-title">
                    {this.state.months[this.props.monthValue-1]}
                </div>
                <div style={{flexGrow: 1, display: "flex"}}>{this.generateDayTitle()}</div>
                
                
            </div>
        )
    }
}

export default Month;