import React from 'react';
import styled, {css} from 'styled-components'
import { render, screen } from '@testing-library/react';


const Paragraph = styled.div`

  font-family: Merriweather;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 150%;
  /* identical to box height, or 24px */

  /* text / primary */
  color: #6D5F67;
  margin: ${props => props.paragraphMargin || ''};
  `;

<Paragraph></Paragraph>

export default Paragraph;