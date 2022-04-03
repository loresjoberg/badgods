import React, {ReactElement} from 'react';
import './_StageFixed.scss';

export type StageFixedProps = {
  children: ReactElement;
}

export default function StageFixed({children}: StageFixedProps) {
  return (<div className={"StageFixed Stage"}>{children}</div>);
}
