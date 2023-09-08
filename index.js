import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import Section from './components/Section'

const Title = styled.h1`
  color: #FDF61C;
  margin-bottom: 0px;
`

const SubTitle = styled.p`
  font-size: 1rem;
  color: #FFFFFF;
  margin-top: 0px;
  margin-bottom: 15px;
`

const Remarks = styled.p`
  font-size: 0.75rem;
  color: #FFFFFF;
  margin-top: 10px;
`

class Main extends React.Component {
  render() {
    return (
      <div>
        <Title>Progress Tracker</Title>
        <SubTitle>Showing my Work Progress</SubTitle>
        <div>
          <Section text='M' progress='20%' day={1}/>
          <Section text='T' progress='30%' day={2}/>
          <Section text='W' progress='45%' day={3}/>
          <Section text='T' progress='55%'day={4}/>
          <Section text='F' progress='68%'day={5}/>
          <Section text='S' progress='89%'day={6}/>
          <Section text='S' progress='100%'day={7}/>
        </div>
        <Remarks>A project from "Learn Styled Components in React" course</Remarks>
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('root'))


// TO DO:
// make a ProgressBar component
// pass through a progress value
// make width dependant on progress value
// make color dependant on progress value