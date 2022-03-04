
function a(arg)
{
  console.log("Neki kod");
  console.log("nesto");
  arg();
}

function hello()
{
  console.log("Hello wolrd");
}
a(hello);
