import React from 'react'
import './index.css'
import { MAX_AGE, BIRTHDAY_YEAR } from '../../constant'


class EventProgressBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    generateAges() {
        let currentDay = new Date()
        let yourAge = currentDay.getFullYear()-BIRTHDAY_YEAR
        let lifePercent = (yourAge/MAX_AGE)*100

        return <div className="personal-age-progress" style={{width: lifePercent.toString() + "%"}} >Your age {yourAge}</div>
    }


    
    render() {
        return (
            <div className="event-progress-container">
                <div className="age-mark">
                    {this.generateAges()}
                    <div className="age-mark-line"></div>
                </div>
                <div className="age-progress">
                    <div className="ten-age">1 - 10</div>
                    <div className="twenty-age">11 - 20</div>
                    <div className="thirty-age">21 - 30</div>
                    <div className="fourty-age">31 - 40</div>
                    <div className="fifty-age">41 - 50</div>
                    <div className="sixty-age">51 - 60</div>
                    <div className="seventy-age">61 - 70</div>
                </div>
                <div className="career-progress">
                    <div className="primary-school">Primary School</div>
                    <div className="secondary-school">Secondary</div>
                    <div className="high-school">High</div>
                    <div className="university">University</div>
                    <div className="professional">Professional</div>
                    <div className="retirement">Retirement</div>
                </div>
            </div>
        )
    }
}

export default EventProgressBar;