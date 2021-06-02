import React from 'react'
import styled, {css} from 'styled-components'

const Button = styled.button`
     font-size:30px;
     line-height:35px;
     font-weight:bold;
     background: red;
     border: 1px solid #e3e3e3;
     color:green;

     ${props => props.primary && css`
          background-color:green;
          color:red;
     `}
`


export default function MyStyleComponents() {
     return (
          <div>
               <Button>Styled Components</Button>
               <Button primary>Styled Components Primary</Button>
          </div>
     )
}

