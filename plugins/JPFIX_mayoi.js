// "迷いの森"でセーブすると場所の名前が"サイゴノ楽園"になるバグの修正
// `XX_BLUE.yamld`の`/Map_Display_Names/162`も参照すること
(() => {
  const target = DataManager.locationNamesPerLanguage[15];
  if (target[0] === 'LOST FOREST' && target[1] === 'サイゴノ楽園') {
    target[1] = '迷いの森';
  }
})();