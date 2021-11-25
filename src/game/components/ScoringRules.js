import {
  centered,
  centeredFlexCol,
  flexCol,
  flexRow,
  leftFlexCol,
} from "../game.css";
import { DiceImage } from "../refs/imageRefs";

export function ScoringRulesRefined() {
  return (
    <>
      <div id="frackle-rules">
        <div id="frackle-content">
          <div id="frackle-rules-header">
            <p id="frackle-rules-title" class="text-4xl mb-4">
              Frackle Rules
            </p>
          </div>
          <div id="frackle-rules-body" class={centeredFlexCol}>
            <div id="single-dice-values" class={flexRow + " m-0.5"}>
              <div id="single-dice-value-1-points" class={flexRow}>
                <DiceImage dice={1} />
                <div class={centeredFlexCol}>
                  <p class={centered}>= 100</p>
                </div>
              </div>
              <div id="single-dice-value-5-points" class={flexRow}>
                <DiceImage dice={5} />
                <div class={centeredFlexCol}>
                  <p class={centered}>= 50</p>
                </div>
              </div>
            </div>
            <div id="combo-scores-container" class={flexRow + " m-0.5"}>
              <div id="set-of-3-combo-scores" class={centeredFlexCol}>
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
                <div id="4-1-combos--dice-value-points" class={flexRow}>
                  <div class={centeredFlexCol}>
                    <p class={centered}>4</p>
                  </div>
                  <DiceImage dice={1} />
                  <div class={centeredFlexCol}>
                    <p class={centered}>= 2000</p>
                  </div>
                </div>
                <div id="5-1-combo-dice-value-points" class={flexRow}>
                  <div class={centeredFlexCol}>
                    <p class={centered}>5</p>
                  </div>
                  <DiceImage dice={1} />
                  <div class={centeredFlexCol}>
                    <p class={centered}>= 3000</p>
                  </div>
                </div>
                <div id="6-1-combo-dice-value-points" class={flexRow}>
                  <div class={centeredFlexCol}>
                    <p class={centered}>6</p>
                  </div>
                  <DiceImage dice={1} />
                  <div class={centeredFlexCol}>
                    <p class={centered}>= 5000</p>
                  </div>
                </div>
              </div>
              <div id="combo-scores" class={centeredFlexCol}>
                <div id="4-combo-same-dice-value-points" class={flexRow}>
                  <div class={centeredFlexCol}>
                    <p class={centered}>Any 4</p>
                  </div>
                  <DiceImage dice={4} />
                  <div class={centeredFlexCol}>
                    <p class={centered}>= 1000</p>
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
                <div id="small-straight-dice-value-points" class={flexRow}>
                  <div class={centeredFlexCol}>
                    <p class={centered}>{`Straight `}</p>
                    <p class={centered}>{`[1-5], [2-6]`}</p>
                  </div>
                  <div class={centeredFlexCol}>
                    <div class={flexRow}>
                      <div class="opacity-50">
                        <DiceImage dice={1} />
                      </div>
                      <DiceImage dice={2} />
                      <DiceImage dice={3} />
                    </div>
                    <div class={flexRow}>
                      <DiceImage dice={4} />
                      <DiceImage dice={5} />
                      <div class="opacity-50">
                        <DiceImage dice={6} />
                      </div>
                    </div>
                  </div>
                  <div class={centeredFlexCol}>
                    <p class={centered}>= 1000</p>
                  </div>
                </div>
                <div id="large-straight-dice-value-points" class={flexRow}>
                  <div class={centeredFlexCol}>
                    <p class={centered}>Large straight</p>
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
            <div id="advanced-scoring" class={leftFlexCol + " m-0.5"}>
              <p class="text-left max-w-lg">
                This is farkle with a twist. Some scores have changed, and you
                don't need to bank to start. Just roll and hit 10,000 pts!.
              </p>
              <p class="text-left max-w-lg">
                A turn begins by rolling all six dice. You must hold at least 1
                scorable dice per roll. If you can bank all 6 dice, you can
                continue to roll and stackscore. If you cannot hold a dice, you
                have FRACKLED! A FRACKLE! causes you to lose accumulated score
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
