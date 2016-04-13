

function Sizer(targetButton) {

  targetButton.addClass(Sizer._globalClass);

  targetButton.on(Sizer._closeEvent,() => this._closePanel());
}

Sizer.prototype = {
  openPanel:function () {
    // 在打开之前先关闭其它所有面板
    $(Sizer._globalClass).trigger(Sizer._closeEvent);
    //....

  }
}

Sizer._guid = guid();
Sizer._globalClass = "sizer"+Sizer._guid;
Sizer._closeEvent = Sizer._guid + "_closeSizerPanel";

