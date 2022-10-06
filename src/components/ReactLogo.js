export function ReactLogo(image, logo) {
  return image === logo ? (
    <>
      <img id="react-logo" src={image} className="App-logo" alt="logo" />
    </>
  ) : (
    <>
      <img id="react-logo" src={image} className="App-logo-no-spin" alt="logo" />
    </>
  );
}
