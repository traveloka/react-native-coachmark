import React from 'react';
import Coachmark from './Coachmark';

type Coachmarks = Array<React.RefObject<Coachmark> | Coachmark>;
export default class CoachmarkComposer {
  coachmarks: Coachmarks;
  constructor(coachmarks: Coachmarks) {
    this.coachmarks = coachmarks;
  }

  show() {
    return this.coachmarks.reduce((acc, coachmark) => {
      return acc.then(() => {
        const curr = coachmark as React.RefObject<Coachmark>;
        if (curr.current && curr.current.show) {
          return curr.current.show();
        }
        return (coachmark as Coachmark).show();
      });
    }, Promise.resolve());
  }
}
