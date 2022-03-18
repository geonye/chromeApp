const colors = [
    "#ef5777",
    "#575fcf",
    "#4bcffa",
    "#34e7e4",
    "#0be881",
    "#f53b57",
    "#3c40c6",
    "#0fbcf9",
    "#00d8d6",
    "#05c46b",
    "#ffc048",
    "#ffdd59",
    "#ff5e57",
    "#d2dae2",
    "#485460",
    "#ffa801",
    "#ffd32a",
    "#ff3f34"
  ];

  const body = document.querySelector("body");
  const btn = document.querySelector("button");

  function onClickHandle() {
    const Color1 = colors[Math.floor(Math.random() * colors.length)];
    const Color2 = colors[Math.floor(Math.random() * colors.length)];

    if(Color1 === Color2) { //선택된 두 가지 색상이 겹치는 것을 방지하기 위한 코드
      return onClickHandle();
    }

    document.body.style.background = `linear-gradient(0.25turn, ${Color1}, ${Color2})`;
  }

  btn.addEventListener("click", onClickHandle);