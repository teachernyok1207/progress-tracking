import React from 'react'
import styled,{ keyframes } from 'styled-components'

// Animation
const ProgressMove = keyframes`
    0%{
        width: 0%;
    }25%{
        width: ${({progress}) => progress || '0%'};
    }50%{
        width: ${({progress}) => progress || '0%'};
    }75%{
        width: ${({progress}) => progress || '0%'};
    }100%{
        width: ${({progress}) => progress || '0%'};
    }
`

const StyledText = keyframes `
    0%{
        opacity: 0%;
    }100%{
        opacity: 100%;
    }
`

// Styled Components
const StyledSection = styled.div`
  background-color: #ffffff;
  border: solid 3px grey;
  margin: 4px;
  width: 300px;
  height: 50px;
  border-radius: 10px;
  display: flex;
  justify-content: left;
  font-size: 40px;
  color: #013201;
`

const WeekdayTitle = styled.div`
  display: flex;
  justify-content: center;
  min-width: 50px;
  border-right: solid 3px lightgrey;
`

const WeekendTitle = styled(WeekdayTitle)`
    background-color: lightgrey;
    border-radius: 7px 0 0 7px;
`

const ProgressSection = styled.div`
    width: 250px;
`

const ProgressBar = styled.div`
    background-color: ${({progress}) => {
       let numeric =  progress.slice(0,-1)
       let integer = parseInt(numeric)
       
       if (integer >= 100) return '#01CB01';
       else if (integer >= 75) return '#FFFF00';
       else if (integer >= 50) return '#B85E12';
       else if (integer >= 25) return '#FFA500';
       else return '#FF0000';
    }};
    
    border-radius: ${({progress}) => {
       let numeric =  progress.slice(0,-1)
       let integer = parseInt(numeric)
       
       if (integer >= 100) return '0px 7px 7px 0px';
       else return '0px';
    }};
    
    display: flex;
    justify-content: right;
    align-items: center;
    height: 50px;
    width: ${({progress}) => progress || '0%'};
    animation: 3s ${ProgressMove} ease;
`

const TodayProgressBar = styled(ProgressBar)`
    background-color: purple;
    color: white;
`

const Text = styled.p`
    font-size: 0.75rem;
    margin-right: 5px;
    animation: 3s ${StyledText} ease-in; 
`

// Displaying Components
const Section = ({text, progress, day}) => {
    let today = new Date()
    let dayOfTheWeek = today.getDay()
    
    const isWeekend = text === 'S'
    
    const isToday = day === dayOfTheWeek
    
    return (
        <div>
            <StyledSection>
                {isWeekend && <WeekendTitle>{text}</WeekendTitle>}
                {!isWeekend && <WeekdayTitle>{text}</WeekdayTitle>}
                <ProgressSection>
                   {isToday && <TodayProgressBar progress={progress}><Text>Today: {progress}</Text></TodayProgressBar>}
                   {!isToday && <ProgressBar progress={progress}><Text>{progress}</Text></ProgressBar>}
                </ProgressSection>
            </StyledSection>
        </div>
    )
}

export default Section