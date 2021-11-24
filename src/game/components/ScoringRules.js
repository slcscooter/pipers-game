import {
  centered,
  centeredFlexCol,
  flexCol,
  flexRow,
  leftFlexCol,
} from "../game.css";
import { DiceImage } from "../refs/imageRefs";

export function ScoringRulesRefined(props) {
  return (
    <>
      <div id="farkle-rules">
        <div id="farkle-content">
          <div id="farkle-rules-header">
            <p id="farkle-rules-title" class="text-4xl mb-4">
              Farkle Rules
            </p>
          </div>
          <div id="farkle-rules-body" class={centeredFlexCol}>
            <div id="combo-scores" class={flexRow}>
              <div id="set-of-3-combo-scores" class={centeredFlexCol}>
                <div id="single-dice-value-1-points" class={flexRow}>
                  <DiceImage dice={1} />
                  <div class={centeredFlexCol}>
                    <p class={centered}>= 100</p>
                  </div>
                </div>
                <div id="triple-combo-value-1-points" class={flexRow}>
                  <DiceImage dice={1} />
                  <DiceImage dice={1} />
                  <DiceImage dice={1} />
                  <div class={centeredFlexCol}>
                    <p class={centered}>= 300</p>
                  </div>
                </div>
                <div id="triple-combo-value-2-points" class={flexRow}>
                  <DiceImage dice={2} />
                  <DiceImage dice={2} />
                  <DiceImage dice={2} />
                  <div class={centeredFlexCol}>
                    <p class={centered}>= 200</p>
                  </div>
                </div>
                <div id="triple-combo-value-3-points" class={flexRow}>
                  <DiceImage dice={3} />
                  <DiceImage dice={3} />
                  <DiceImage dice={3} />
                  <div class={centeredFlexCol}>
                    <p class={centered}>= 300</p>
                  </div>
                </div>
                <div id="triple-combo-value-4-points" class={flexRow}>
                  <DiceImage dice={4} />
                  <DiceImage dice={4} />
                  <DiceImage dice={4} />
                  <div class={centeredFlexCol}>
                    <p class={centered}>= 400</p>
                  </div>
                </div>
                <div id="triple-combo-value-5-points" class={flexRow}>
                  <DiceImage dice={5} />
                  <DiceImage dice={5} />
                  <DiceImage dice={5} />
                  <div class={centeredFlexCol}>
                    <p class={centered}>= 500</p>
                  </div>
                </div>
                <div id="triple-combo-value-6-points" class={flexRow}>
                  <DiceImage dice={6} />
                  <DiceImage dice={6} />
                  <DiceImage dice={6} />
                  <div class={centeredFlexCol}>
                    <p class={centered}>= 600</p>
                  </div>
                </div>
                <div id="4-combo-same-dice-value-points" class={flexRow}>
                  <div class={centeredFlexCol}>
                    <p class={centered}>Any 4</p>
                  </div>
                  <DiceImage dice={4} />
                  <div class={centeredFlexCol}>
                    <p class={centered}>= 1000</p>
                  </div>
                </div>
              </div>
              <div id="combo-scores" class={centeredFlexCol}>
                <div id="single-dice-value-5-points" class={flexRow}>
                  <DiceImage dice={5} />
                  <div class={centeredFlexCol}>
                    <p class={centered}>= 50</p>
                  </div>
                </div>
                <div id="5-combo-same-dice-value-points" class={flexRow}>
                  <div class={centeredFlexCol}>
                    <p class={centered}>Any 5</p>
                  </div>
                  <DiceImage dice={5} />
                  <div class={centeredFlexCol}>
                    <p class={centered}>= 2000</p>
                  </div>
                </div>
                <div id="6-combo-same-dice-value-points" class={flexRow}>
                  <div class={centeredFlexCol}>
                    <p class={centered}>Any 6</p>
                  </div>
                  <DiceImage dice={6} />
                  <div class={centeredFlexCol}>
                    <p class={centered}>= 3000</p>
                  </div>
                </div>
                <div id="1-6-dice-value-points" class={flexRow}>
                  <div class={centeredFlexCol}>
                    <p class={centered}>1-6</p>
                  </div>
                  <div class={flexCol}>
                    <div class={flexRow}>
                      <DiceImage dice={1} />
                      <DiceImage dice={2} />
                      <DiceImage dice={3} />
                    </div>
                    <div class={flexRow}>
                      <DiceImage dice={4} />
                      <DiceImage dice={5} />
                      <DiceImage dice={6} />
                    </div>
                  </div>
                  <div class={centeredFlexCol}>
                    <p class={centered}>= 1500</p>
                  </div>
                </div>
                <div
                  id="4-dice-single=plus-pair-dice-value-points"
                  class={flexRow}
                >
                  <div class={centeredFlexCol}>
                    <p class={centered}>Any 4</p>
                  </div>
                  <DiceImage dice={2} />
                  <div class={centeredFlexCol}>
                    <p class={centered}>{` + a pair`}</p>
                  </div>
                  <DiceImage dice={3} />
                  <div class={centeredFlexCol}>
                    <p class={centered}>= 1500</p>
                  </div>
                </div>
                <div id="3-pairs-dice-value-points" class={flexRow}>
                  <div class={centeredFlexCol}>
                    <p class={centered}>3 Pairs</p>
                  </div>
                  <DiceImage dice={2} />
                  <DiceImage dice={2} />
                  <div class={centeredFlexCol}>
                    <p class={centered}>= 1500</p>
                  </div>
                </div>
                <div id="2-triples-dice-value-points" class={flexRow}>
                  <div class={centeredFlexCol}>
                    <p class={centered}>2 Triples</p>
                  </div>
                  <DiceImage dice={3} />
                  <DiceImage dice={3} />
                  <DiceImage dice={3} />
                  <div class={centeredFlexCol}>
                    <p class={centered}>= 2500</p>
                  </div>
                </div>
              </div>
            </div>
            <div id="advanced-scoring" class={leftFlexCol}>
              <p class="text-left max-w-lg">
                A turn begins by rolling all six dice. You must hold at least 1
                scorable dice per roll. If you can bank all 6 dice, you can
                continue to roll and stackscore. If you cannot hold a dice, you
                have FARKLED! A FARKLE! causes you to lose accumulated score
                during your turn, and end your turn. You may end your turn at
                anytime which will bank your accumulated score. To win the game
                you must pass a score of 10,000 pts. The first person to score
                10,000 pts wins.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
