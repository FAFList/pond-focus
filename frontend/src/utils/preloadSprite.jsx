
import sprite1 from "../assets/frog-sprite/Sprite1.png"
import sprite2 from "../assets/frog-sprite/Sprite2.png"
import sprite3 from "../assets/frog-sprite/Sprite3.png"
import sprite4 from "../assets/frog-sprite/Sprite4.png"
import sprite5 from "../assets/frog-sprite/Sprite5.png"
import sprite6 from "../assets/frog-sprite/Sprite6.png"
import sprite7 from "../assets/frog-sprite/Sprite7.png"
import sprite8 from "../assets/frog-sprite/Sprite8.png"
import sprite9 from "../assets/frog-sprite/Sprite9.png"
import sprite10 from "../assets/frog-sprite/Sprite10.png"
export const sprites = [
  sprite1,
  sprite2,
  sprite3,
  sprite4,
  sprite5,
  sprite6,
  sprite7,
  sprite8,
  sprite9,
  sprite10
];
export function preloadSprites() {
  sprites.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
}