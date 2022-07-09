const pi = 3.145296;
//here we will see how to export multiple functions

function dpi() {
  return 2 * pi;
}
function tpi() {
  return 3 * pi;
}
export default pi;
export { dpi, tpi };
