import { MAX_POS } from "../constant";
import { getRandomInteger } from "./number";

export function getInitialTileList() {
  const tileList = [];
  const tile1 = makeTile(tileList);
  tileList.push(tile1);
  const tile2 = makeTile(tileList);
  tileList.push(tile2);
  return tileList;
}

function checkCollsion(tileList, tile) {
  return tileList.some((item) => item.x === tile.x && item.y === tile.y);
}

export function makeTile(tileList) {
  let tile;
  while (!tile || checkCollsion(tileList, tile)) {
    tile = {
      x: getRandomInteger(1, MAX_POS),
      y: getRandomInteger(1, MAX_POS),
      value: 2,
    };
  }
  return tile;
}
