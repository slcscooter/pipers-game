import { flexCol, flexRow } from "../game.css";
import {
  rollImage1,
  rollImage2,
  rollImage3,
  rollImage4,
  rollImage5,
  rollImage6,
} from "../refs/imageRefs";

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
          <div
            id="farkle-rules-body"
            class={flexCol + " content-center items-center justify-center"}
          >
            <div id="combo-scores" class={flexRow}>
              <div
                id="set-of-3-combo-scores"
                class={flexCol + " content-center items-center justify-center"}
              >
                <div id="single-dice-value-1-points" class={flexRow}>
                  <img
                    id="dice-image-1"
                    class="h-8 w-8"
                    src={rollImage1}
                    alt="Dice Value 1"
                  />
                  <div
                    class={
                      flexCol + " items-center content-center justify-center"
                    }
                  >
                    <p class="content-center items-center justify-center">
                      = 100
                    </p>
                  </div>
                </div>
                <div id="triple-combo-value-1-points" class={flexRow}>
                  <img
                    id="dice-image-1a"
                    class="h-8 w-8"
                    src={rollImage1}
                    alt="Dice Value 1"
                  />
                  <img
                    id="dice-image-1b"
                    class="h-8 w-8"
                    src={rollImage1}
                    alt="Dice Value 1"
                  />
                  <img
                    id="dice-image-1c"
                    class="h-8 w-8"
                    src={rollImage1}
                    alt="Dice Value 1"
                  />
                  <div
                    class={
                      flexCol + " items-center content-center justify-center"
                    }
                  >
                    <p class="content-center items-center justify-center">
                      = 300
                    </p>
                  </div>
                </div>
                <div id="triple-combo-value-2-points" class={flexRow}>
                  <img
                    id="dice-image-2a"
                    class="h-8 w-8"
                    src={rollImage2}
                    alt="Dice Value 2"
                  />
                  <img
                    id="dice-image-2b"
                    class="h-8 w-8"
                    src={rollImage2}
                    alt="Dice Value 2"
                  />
                  <img
                    id="dice-image-2c"
                    class="h-8 w-8"
                    src={rollImage2}
                    alt="Dice Value 2"
                  />
                  <div
                    class={
                      flexCol + " items-center content-center justify-center"
                    }
                  >
                    <p class="content-center items-center justify-center">
                      = 200
                    </p>
                  </div>
                </div>
                <div id="triple-combo-value-3-points" class={flexRow}>
                  <img
                    id="dice-image-3a"
                    class="h-8 w-8"
                    src={rollImage3}
                    alt="Dice Value 3"
                  />
                  <img
                    id="dice-image-3b"
                    class="h-8 w-8"
                    src={rollImage3}
                    alt="Dice Value 3"
                  />
                  <img
                    id="dice-image-3c"
                    class="h-8 w-8"
                    src={rollImage3}
                    alt="Dice Value 3"
                  />
                  <div
                    class={
                      flexCol + " items-center content-center justify-center"
                    }
                  >
                    <p class="content-center items-center justify-center">
                      = 300
                    </p>
                  </div>
                </div>
                <div id="triple-combo-value-4-points" class={flexRow}>
                  <img
                    id="dice-image-4a"
                    class="h-8 w-8"
                    src={rollImage4}
                    alt="Dice Value 4"
                  />
                  <img
                    id="dice-image-4b"
                    class="h-8 w-8"
                    src={rollImage4}
                    alt="Dice Value 4"
                  />
                  <img
                    id="dice-image-4c"
                    class="h-8 w-8"
                    src={rollImage4}
                    alt="Dice Value 4"
                  />
                  <div
                    class={
                      flexCol + " items-center content-center justify-center"
                    }
                  >
                    <p class="content-center items-center justify-center">
                      = 400
                    </p>
                  </div>
                </div>
                <div id="triple-combo-value-5-points" class={flexRow}>
                  <img
                    id="dice-image-5a"
                    class="h-8 w-8"
                    src={rollImage1}
                    alt="Dice Value 5"
                  />
                  <img
                    id="dice-image-5b"
                    class="h-8 w-8"
                    src={rollImage5}
                    alt="Dice Value 5"
                  />
                  <img
                    id="dice-image-5c"
                    class="h-8 w-8"
                    src={rollImage5}
                    alt="Dice Value 5"
                  />
                  <div
                    class={
                      flexCol + " items-center content-center justify-center"
                    }
                  >
                    <p class="content-center items-center justify-center">
                      = 500
                    </p>
                  </div>
                </div>
                <div id="triple-combo-value-6-points" class={flexRow}>
                  <img
                    id="dice-image-6a"
                    class="h-8 w-8"
                    src={rollImage6}
                    alt="Dice Value 6"
                  />
                  <img
                    id="dice-image-6b"
                    class="h-8 w-8"
                    src={rollImage6}
                    alt="Dice Value 6"
                  />
                  <img
                    id="dice-image-6c"
                    class="h-8 w-8"
                    src={rollImage6}
                    alt="Dice Value 6"
                  />
                  <div
                    class={
                      flexCol + " items-center content-center justify-center"
                    }
                  >
                    <p class="content-center items-center justify-center">
                      = 600
                    </p>
                  </div>
                </div>
                <div id="4-combo-same-dice-value-points" class={flexRow}>
                  <div
                    class={
                      flexCol + " items-center content-center justify-center"
                    }
                  >
                    <p class="content-center items-center justify-center">
                      Any 4
                    </p>
                  </div>
                  <img
                    id="dice-image-4d"
                    class="h-8 w-8"
                    src={rollImage4}
                    alt="Dice Value 4"
                  />
                  <div
                    class={
                      flexCol + " items-center content-center justify-center"
                    }
                  >
                    <p class="content-center items-center justify-center">
                      = 1000
                    </p>
                  </div>
                </div>
              </div>
              <div
                id="combo-scores"
                class={flexCol + " content-center items-center justify-center"}
              >
                <div id="single-dice-value-5-points" class={flexRow}>
                  <img
                    id="dice-image-5"
                    class="h-8 w-8"
                    src={rollImage1}
                    alt="Dice Value 5"
                  />
                  <div
                    class={
                      flexCol + " items-center content-center justify-center"
                    }
                  >
                    <p class="content-center items-center justify-center">
                      = 50
                    </p>
                  </div>
                </div>
                <div id="5-combo-same-dice-value-points" class={flexRow}>
                  <div
                    class={
                      flexCol + " items-center content-center justify-center"
                    }
                  >
                    <p class="content-center items-center justify-center">
                      Any 5
                    </p>
                  </div>
                  <img
                    id="dice-image-5d"
                    class="h-8 w-8"
                    src={rollImage5}
                    alt="Dice Value 5"
                  />
                  <div
                    class={
                      flexCol + " items-center content-center justify-center"
                    }
                  >
                    <p class="content-center items-center justify-center">
                      = 2000
                    </p>
                  </div>
                </div>
                <div id="6-combo-same-dice-value-points" class={flexRow}>
                  <div
                    class={
                      flexCol + " items-center content-center justify-center"
                    }
                  >
                    <p class="content-center items-center justify-center">
                      Any 6
                    </p>
                  </div>
                  <img
                    id="dice-image-6d"
                    class="h-8 w-8"
                    src={rollImage6}
                    alt="Dice Value 6"
                  />
                  <div
                    class={
                      flexCol + " items-center content-center justify-center"
                    }
                  >
                    <p class="content-center items-center justify-center">
                      = 3000
                    </p>
                  </div>
                </div>
                <div id="1-6-dice-value-points" class={flexRow}>
                  <div
                    class={
                      flexCol + " items-center content-center justify-center"
                    }
                  >
                    <p class="content-center items-center justify-center">
                      1-6
                    </p>
                  </div>
                  <div class={flexCol}>
                    <div class={flexRow}>
                      <img
                        id="dice-image-1f"
                        class="h-8 w-8"
                        src={rollImage1}
                        alt="Dice Value 1"
                      />
                      <img
                        id="dice-image-2e"
                        class="h-8 w-8"
                        src={rollImage2}
                        alt="Dice Value 2"
                      />
                      <img
                        id="dice-image-3e"
                        class="h-8 w-8"
                        src={rollImage3}
                        alt="Dice Value 3"
                      />
                    </div>
                    <div class={flexRow}>
                      <img
                        id="dice-image-4e"
                        class="h-8 w-8"
                        src={rollImage4}
                        alt="Dice Value 4"
                      />
                      <img
                        id="dice-image-5e"
                        class="h-8 w-8"
                        src={rollImage5}
                        alt="Dice Value 5"
                      />
                      <img
                        id="dice-image-6e"
                        class="h-8 w-8"
                        src={rollImage6}
                        alt="Dice Value 6"
                      />
                    </div>
                  </div>
                  <div
                    class={
                      flexCol + " items-center content-center justify-center"
                    }
                  >
                    <p class="content-center items-center justify-center">
                      = 1500
                    </p>
                  </div>
                </div>
                <div
                  id="4-dice-single=plus-pair-dice-value-points"
                  class={flexRow}
                >
                  <div
                    class={
                      flexCol + " items-center content-center justify-center"
                    }
                  >
                    <p class="content-center items-center justify-center">
                      Any 4
                    </p>
                  </div>
                  <img
                    id="dice-image-2d"
                    class="h-8 w-8"
                    src={rollImage2}
                    alt="Dice Value 2"
                  />
                  <div
                    class={
                      flexCol + " items-center content-center justify-center"
                    }
                  >
                    <p class="content-center items-center justify-center">
                      {` + a pair`}
                    </p>
                  </div>
                  <img
                    id="dice-image-3d"
                    class="h-8 w-8"
                    src={rollImage3}
                    alt="Dice Value 3"
                  />
                  <div
                    class={
                      flexCol + " items-center content-center justify-center"
                    }
                  >
                    <p class="content-center items-center justify-center">
                      = 1500
                    </p>
                  </div>
                </div>
                <div id="3-pairs-dice-value-points" class={flexRow}>
                  <div
                    class={
                      flexCol + " items-center content-center justify-center"
                    }
                  >
                    <p class="content-center items-center justify-center">
                      3 Pairs
                    </p>
                  </div>
                  <img
                    id="dice-image-1d"
                    class="h-8 w-8"
                    src={rollImage1}
                    alt="Dice Value 1"
                  />
                  <img
                    id="dice-image-1e"
                    class="h-8 w-8"
                    src={rollImage1}
                    alt="Dice Value 1"
                  />
                  <div
                    class={
                      flexCol + " items-center content-center justify-center"
                    }
                  >
                    <p class="content-center items-center justify-center">
                      = 1500
                    </p>
                  </div>
                </div>
                <div id="2-triples-dice-value-points" class={flexRow}>
                  <div
                    class={
                      flexCol + " items-center content-center justify-center"
                    }
                  >
                    <p class="content-center items-center justify-center">
                      3 Triples
                    </p>
                  </div>
                  <img
                    id="dice-image-1i"
                    class="h-8 w-8"
                    src={rollImage1}
                    alt="Dice Value 1"
                  />
                  <img
                    id="dice-image-1g"
                    class="h-8 w-8"
                    src={rollImage1}
                    alt="Dice Value 1"
                  />
                  <img
                    id="dice-image-1h"
                    class="h-8 w-8"
                    src={rollImage1}
                    alt="Dice Value 1"
                  />
                  <div
                    class={
                      flexCol + " items-center content-center justify-center"
                    }
                  >
                    <p class="content-center items-center justify-center">
                      = 2500
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="advanced-scoring"
              class={flexCol + " content-left items-left justify-left"}
            >
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
