import React, { FunctionComponent } from "react";

const SpeedSelector: FunctionComponent<{
  speed: number;
  changeSpeed: (num: number) => void;
}> = ({
  speed,
  changeSpeed,
}: {
  speed: number;
  changeSpeed: (num: number) => void;
}) => (
  <>
    <div>
      Speed:
      {speed}
    </div>
    <input
      type="range"
      min={1}
      max={15}
      value={speed}
      onChange={(event): void => changeSpeed((event as any).target.value)}
    />
  </>
);

export default SpeedSelector;
