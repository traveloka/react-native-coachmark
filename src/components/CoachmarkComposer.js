export default class CoachmarkComposer {
  constructor(coachmarks) {
    this.coachmarks = coachmarks;
  }

  show() {
    return this.coachmarks.reduce((acc, curr) => {
      return acc.then(() => {
        if (curr.current && curr.current.show) return curr.current.show();
        return curr.show();
      });
    }, Promise.resolve());
  }
}
