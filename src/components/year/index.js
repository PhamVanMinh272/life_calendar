import React from 'react'
import './index.css'
import Month from '../month'
import { BIRTHDAY_YEAR, CUNRRENT_DATE } from '../../constant'


class Year extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showDate: false
        }
    }

    generateMonthList() {
        let monthList = []
        for (let i=1; i<13; i++) {
            let month = i
            monthList.push(<Month key={month} showDate={this.state.showDate} monthValue={month} yearValue={this.props.yearValue} />)
        }
        return monthList
    }

    handleClickShowDate(status) {
        this.setState({
          showDate: !status
        })
    }

    render() {
        return (
            <div className="year-container">
                <div>
                    {this.props.yearValue} - {this.props.yearValue - BIRTHDAY_YEAR} years old
                    {
                        CUNRRENT_DATE.getFullYear()===this.props.yearValue
                        ?
                        <button className="show-date" onClick={() => this.handleClickShowDate(this.state.showDate)}>
                            Show Date
                        </button>
                        : ""
                    }
                    
                </div>
                {this.generateMonthList()}
            </div>
        )
    }
}

export default Year;