
return dc;}
    if(typeof define === "function" && define.amd) {
        define(["d3"], _dc);
    } else if(typeof module === "object" && module.exports) {
        var _d3 = require('d3');
        module.exports = _dc(_d3);
    } else {
        this.dc = _dc(d3);
    }
}
)();
