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
    if (value === "") {
      onInputX(0);
    } else {
      onInputX(value);
    }
  });

  const $yInput = document.querySelector(".yInput");

  $yInput.addEventListener("keyup", (e) => {
    const { value } = e.target;
    if (value === "") {
      onInputY(0);
    } else {
      onInputY(value);
    }
  });
}
