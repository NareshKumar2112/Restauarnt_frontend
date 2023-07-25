import React from "react";


export const reserveTable = (reservation) => {
    return {
      type: 'RESERVE_TABLE',
      payload: reservation,
    };
  };