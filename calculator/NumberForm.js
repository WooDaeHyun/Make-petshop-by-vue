export default function NumberForm({ $target, onInputX, onInputY }) {
  const $div = document.createElement("div");

  $target.appendChild($div);

  this.render = () => {
    $div.innerHTML = `
      <p> x <input class='xInput' type='number' /></p>
      <p> y <input class='yInput' type='number' /></p>
    `;
  };
  this.render();

  const $xInput = document.querySelector(".xInput");

  $xInput.addEventListener("keyup", (e) => {
    const { value } = e.target;
    if (!isNaN(value)) {
      onInputX(value);
    }
  });

  const $yInput = document.querySelector(".yInput");

  $yInput.addEventListener("keyup", (e) => {
    const { value } = e.target;
    if (!isNaN(value)) {
      onInputY(value);
    }
  });
}
