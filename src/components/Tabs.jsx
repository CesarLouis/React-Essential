export default function ({ children, button, ButtonContainer = "menu" }) {
  return (
    <>
      <ButtonContainer>{button}</ButtonContainer>
      {children}
    </>
  );
}
