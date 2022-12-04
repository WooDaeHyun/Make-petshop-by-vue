import NumberForm from "./NumberForm.js";
import SumResult from "./SumResult.js";

export default function App({ $target }) {
  this.state = {
    x: 0,
    y: 0,
    result: 0,
  };

  this.setState = () => {
    console.log(this.state);
    sumResult.setState({
      ...this.state,
    });
  };

  new NumberForm({
    $target,
    initialState: this.state,
    onInputX: (x) => {
      this.state.x = parseInt(x);
      this.state.result = this.state.x + this.state.y;
      this.setState();
    },
    onInputY: (y) => {
      this.state.y = parseInt(y);
      this.state.result = this.state.x + this.state.y;
      this.setState();
    },
  });

  const sumResult = new SumResult({
    $target,
    initialState: this.state,
  });
}
