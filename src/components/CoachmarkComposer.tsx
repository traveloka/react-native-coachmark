import React from 'react';
import Coachmark from './Coachmark';

export default class CoachmarkComposer {
  coachmarks: Array<React.RefObject<Coachmark> | Coachmark>;
  constructor(coachmarks) {
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
