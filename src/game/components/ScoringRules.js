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

export function ScoringRulesRefined(props) {
  return (
    <>
      <div id="farkle-rules" class={props.flexCol}>
        <div id="simple-score" class={props.flexRow}>
          <p>DiceImage1 = 100</p>
          <p>DiceImage5 = 50 </p>
        </div>
        <div id="combo-scores" class={props.flexRow}>
          <div id="set-of-3-combo-scores" class={props.flexCol}>
            <p>1, 1, 1 = 300</p>
            <p>2, 2, 2 = 200</p>
            <p>3, 3, 3 = 300</p>
            <p>4, 4, 4 = 400</p>
            <p>5, 5, 5 = 500</p>
            <p>6, 6, 6 = 600</p>
          </div>
          <div id="combo-scores" class={props.flexCol}>
            <p>Any 4 of the same dice = 1000</p>
            <p>Any 5 of the same dice = 2000</p>
            <p>6 of the same dice = 1500</p>
            <p>1-6 Straight = 1500</p>
            <p>3 sets of Pairs = 1500</p>
            <p>4 of the same dice, and a Pair = 150</p>
            <p>2 sets of Triplets = 2500</p>
          </div>
        </div>
        <div id="advanced-scoring">
          <p>A turn begins by rolling all six dice.</p>
          <p>You must hold at least 1 scorable dice</p>
          <p>per roll. If you can bank all 6 dice, you</p>
          <p>can continue to roll and stackscore. If</p>
          <p>you cannot hold a dice, you have FARKLED!</p>
          <p>A FARKLE! causes you to lose accumulated</p>
          <p>score during your turn, and end your turn.</p>
          <p>You may end your turn at anytime which will</p>
          <p>bank your accumulated score. To win the</p>
          <p>game you must pass a score of 10,000 pts.</p>
        </div>
      </div>
    </>
  );
}
