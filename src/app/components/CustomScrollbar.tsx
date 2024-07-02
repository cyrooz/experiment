'use client';
import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';
import styled from 'styled-components';

const CustomScrollbars = ({ children }: { children: React.ReactNode }) => (
  <Scrollbars
    renderTrackVertical={({ style, ...props }) =>
      <div {...props} style={{ ...style, width: '16px', backgroundColor: 'var(--scrollbar-track-color)', borderRadius: '10px' }} />}
    renderThumbVertical={({ style, ...props }) =>
      <div {...props} style={{ ...style, backgroundColor: 'var(--scrollbar-thumb-color)', borderRadius: '10px' }} />}
    renderTrackHorizontal={({ style, ...props }) =>
      <div {...props} style={{ ...style, display: 'none' }} />} // Hide horizontal scrollbar
    renderThumbHorizontal={({ style, ...props }) =>
      <div {...props} style={{ ...style, display: 'none' }} />} // Hide horizontal thumb
    autoHide
    autoHideTimeout={1000}
    autoHideDuration={200}
  >
    {children}
  </Scrollbars>
);

export default CustomScrollbars;
