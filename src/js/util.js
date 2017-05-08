var _infoFn = function(actionEvent) { return { condition : actionEvent["condition"] } };
var getColorGameUtteranceActionPairs = function(game) {
    return gameppl.rgame.getGameUtteranceActionPairs(game, gameppl.rgame.senders.SPEAKER, _infoFn);
};


module.exports = {
    getColorGameUtteranceActionPairs : getColorGameUtteranceActionPairs
};