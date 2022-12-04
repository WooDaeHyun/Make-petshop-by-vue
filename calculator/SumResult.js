export default function SumResult({ $target, initialState }) {
  const $div = document.createElement("div");

  $target.appendChild($div);

  this.state = initialState;

  this.setState = (nextState) => {
    console.log(this.state.x);
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    $div.innerHTML = `
      <p> --------------------- </p>
      <p>= ${this.state.result} </p>
    `;
  };
  this.render();
}
