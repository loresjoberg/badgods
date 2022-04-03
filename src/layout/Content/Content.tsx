import React, {ReactElement} from 'react';
import './_Content.scss';
import 'swiper/css/bundle';

export type ContentProps = {
  children: ReactElement;
}

export default function Content({children}: ContentProps) {


  return (
    <div className={"Content"}>
      {children}
    </div>
  );

}
