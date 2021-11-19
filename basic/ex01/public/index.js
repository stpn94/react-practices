const App = function () {
  //Dom API
  //element가 component 이다.
  const app = document.createElement("h1");
  app.textContent = "Hello World";
  return app;
};

//Rendering 랜더링이라고 한다.
document.getElementById("root").appendChild(App());
