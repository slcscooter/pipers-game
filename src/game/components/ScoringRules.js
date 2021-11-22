export function ScoringRules(props) {
  return (
    <>
      <img
        id="farkle-rules"
        class="h-96 w-96 rounded-lg"
        src="https://www.ultraboardgames.com/farkle/gfx/nano1.jpg"
        alt="explanation of rules"
        hidden={props.hideRules}
      />
    </>
  );
}
