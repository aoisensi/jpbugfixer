// スペース元旦那が感情変化時にフラッシュエフェクトが入らないバグの修正
// Omori BASE.js:2745
(() => {
  const vanilla = Game_Enemy.prototype.refreshEmotionStateTransform;

  Game_Enemy.prototype.refreshEmotionStateTransform = function() {
    if (!this.isDead() && !this._isStateTransforming) {
      var emotion = this.getStateEmotion();
      var baseId = this.enemy().meta.TransformBaseID;
      baseId = baseId ? Number(baseId) : this._enemyId;
      var transformId = this._enemyId;
      switch (emotion) {
        case 'normal': transformId = baseId; break;
        case 'happy': transformId = baseId + 1; break;
        case 'sad': transformId = baseId + 2; break;
        case 'angry': transformId = baseId + 3; break;
      }
      if (transformId !== this._enemyId) {
        if(this.name() === "スペース元旦那") {
          $gameScreen.setFlashWait(60)
          $gameScreen.startFlash([255,255,255,255], 130)
        }
      };
    };
    vanilla.call(this);
  };
})();