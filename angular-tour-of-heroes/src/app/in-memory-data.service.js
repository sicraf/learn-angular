"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var heroes = [
            { id: 0, name: 'Zero' },
            { id: 11, name: '影流之镰 凯隐' },
            { id: 12, name: '逆羽 霞' },
            { id: 13, name: '幻翎 洛' },
            { id: 14, name: '青钢影 卡蜜尔' },
            { id: 15, name: '翠神 艾翁' },
            { id: 16, name: '暴怒骑士	克烈' },
            { id: 17, name: '岩雀 塔莉垭' },
            { id: 18, name: '铸星龙王	奥瑞利安·索尔' },
            { id: 19, name: '戏命师 烬' },
            { id: 20, name: '海兽祭司	俄洛伊' }
        ];
        return { heroes: heroes };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map