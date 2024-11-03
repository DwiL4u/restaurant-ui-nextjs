"use client";

import React, { useState } from "react";
import Countdown from "react-countdown";

const CountDown = () => {
  const [date] = useState(new Date("2024-11-30T00:00:00"));
  return (
    <Countdown
      date={date}
      className="text-yellow-300 font-bold text-5xl"
      onComplete={() => console.log("Countdown finished!")}
    />
  );
};

export default CountDown;
