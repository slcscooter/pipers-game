export const rollImage =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/2-Dice-Icon.svg/240px-2-Dice-Icon.svg.png";
export const rollImage6 =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Dice-6a.svg/240px-Dice-6a.svg.png";
export const rollImage5 =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Dice-5.svg/240px-Dice-5.svg.png";
export const rollImage4 =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Dice-4.svg/240px-Dice-4.svg.png";
export const rollImage3 =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Dice-3.svg/240px-Dice-3.svg.png";
export const rollImage2 =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Dice-2.svg/240px-Dice-2.svg.png";
export const rollImage1 =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Dice-1.svg/240px-Dice-1.svg.png";

export function DiceImage(props) {
  return (
    <>
      <img
        id={`dice-image-${props.dice}`}
        class="h-8 w-8"
        src={
          props.dice === 1
            ? rollImage1
            : props.dice === 2
            ? rollImage2
            : props.dice === 3
            ? rollImage3
            : props.dice === 4
            ? rollImage4
            : props.dice === 5
            ? rollImage5
            : rollImage6
        }
        alt={`Dice value is ${props.dice}`}
      />
    </>
  );
}
