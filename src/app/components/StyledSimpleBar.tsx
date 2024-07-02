'use client';
import styled from 'styled-components';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

const StyledSimpleBar = styled(SimpleBar)`
  .simplebar-scrollbar::before {
    background-color: #888;
    border-radius: 10px; /* Customize thumb color */
  }

  .simplebar-track.simplebar-vertical {
    width: 4px !important; /* Smaller width */
  }

  .simplebar-track.simplebar-horizontal {
    height: 2px; /* Smaller height */
  }
`;

export default StyledSimpleBar;
