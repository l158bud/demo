onEvent("button1", "click", function( ) {
  setScreen("screen2");
  write("Hi ");
  write(getText("text_input1"));
});
onEvent("button2", "click", function( ) {
  deleteElement("text_input1");
  setScreen("screen2");
});