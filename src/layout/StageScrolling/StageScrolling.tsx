import React, {ReactElement} from 'react';
import './_StageScrolling.scss';

export type StageScrollingProps = {
  children: ReactElement;
}

export default function StageScrolling({children}: StageScrollingProps) {
  return (<div className={"StageScrolling Stage"}><div className={"StageScrolling-Inner"}>{children}</div></div>);
}
