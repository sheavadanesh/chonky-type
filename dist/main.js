/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/cat.js":
/*!********************!*\
  !*** ./src/cat.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Cat {\n    constructor(ctx, canvas) {\n        this.ctx = ctx;\n        this.canvas = canvas;\n        this.fat = 0;\n        this.fishEaten = 0;\n        this.eat = false;\n\n        this.catImg = new Image();\n        this.catEatingImg = new Image();\n        this.cat5Img = new Image();\n        this.cat5EatingImg = new Image();\n        this.cat10Img = new Image();\n        this.cat10EatingImg = new Image();\n        this.cat15Img = new Image();\n        this.cat15EatingImg = new Image();\n        this.cat20Img = new Image();\n        this.catImg.src = './dist/assets/cat.png';\n        this.catEatingImg.src = './dist/assets/catEating.png';\n        this.cat5Img.src = './dist/assets/cat5.png';\n        this.cat5EatingImg.src = './dist/assets/cat5eating.png';\n        this.cat10Img.src = './dist/assets/cat10.png';\n        this.cat10EatingImg.src = './dist/assets/cat10eating.png';\n        this.cat15Img.src = './dist/assets/cat15.png';\n        this.cat15EatingImg.src = './dist/assets/cat15eating.png';\n        this.cat20Img.src = './dist/assets/cat20.png';\n    }\n\n    drawEating() {\n        if (this.fat === 0) {\n            this.ctx.drawImage(this.catEatingImg,\n                480, 190,\n                360, 250);\n        } else if (this.fat === 5) {\n            this.ctx.drawImage(this.cat5EatingImg,\n                480, 190,\n                360, 250);\n        } else if (this.fat === 10) {\n            this.ctx.drawImage(this.cat10EatingImg,\n                480, 190,\n                360, 250);\n        } else if (this.fat === 15) {\n            this.ctx.drawImage(this.cat15EatingImg,\n                480, 190,\n                360, 250);\n        }; \n    }\n\n    draw() {\n        if (this.fat === 0){\n            this.ctx.drawImage(this.catImg,\n                                480, 190,\n                                360, 250);\n        } else if (this.fat === 5) {\n            this.ctx.drawImage(this.cat5Img,\n                                480, 190,\n                                360, 250);\n        } else if (this.fat === 10) {\n            this.ctx.drawImage(this.cat10Img,\n                                480, 190,\n                                360, 250);\n        } else if (this.fat === 15) {\n            this.ctx.drawImage(this.cat15Img,\n                                480, 190,\n                                360, 250);\n        } else if (this.fat === 20) {\n            this.ctx.drawImage(this.cat20Img,\n                                480, 190,\n                                360, 250);\n        };\n    }\n\n    drawFishEaten() {\n        this.ctx.beginPath();\n            this.ctx.fillStyle ='black';\n            this.ctx.font = 'bold 18px \"Jua\"';\n            this.ctx.fillText(\"Fish eaten : \" + this.fishEaten.toString(), this.canvas.width - 210, 50);\n            this.ctx.fill();\n        this.ctx.closePath();\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Cat);\n\n//# sourceURL=webpack:///./src/cat.js?");

/***/ }),

/***/ "./src/dictionary.js":
/*!***************************!*\
  !*** ./src/dictionary.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Dictionary {\n    constructor() {\n        this.words = [\"ability\", \"able\", \"about\", \"above\", \"accept\", \"according\", \"account\", \"across\",\n            \"act\", \"action\", \"activity\", \"actually\", \"add\", \"address\",\n            \"admit\", \"adult\", \"affect\", \"after\", \"again\", \"against\", \"age\", \"agency\",\n            \"agent\", \"ago\", \"agree\", \"agreement\", \"ahead\", \"air\", \"all\", \"allow\", \"almost\",\n            \"alone\", \"along\", \"already\", \"also\", \"although\", \"always\", \"American\", \"among\",\n            \"amount\", \"analysis\", \"and\", \"animal\", \"another\", \"answer\", \"any\", \"anyone\",\n            \"anything\", \"appear\", \"apply\", \"approach\", \"area\", \"argue\", \"arm\", \"around\",\n            \"arrive\", \"art\", \"article\", \"artist\", \"ask\", \"assume\", \"attack\",\n            \"attention\", \"attorney\", \"audience\", \"author\", \"authority\", \"available\",\n            \"avoid\", \"away\", \"baby\", \"back\", \"bad\", \"bag\", \"ball\", \"bank\", \"bar\", \"base\",\n            \"be\", \"beat\", \"beautiful\", \"because\", \"become\", \"bed\", \"before\", \"begin\",\n            \"behavior\", \"behind\", \"believe\", \"benefit\", \"best\", \"better\", \"between\",\n            \"beyond\", \"big\", \"bill\", \"billion\", \"bit\", \"black\", \"blood\", \"blue\", \"board\",\n            \"body\", \"book\", \"born\", \"both\", \"box\", \"boy\", \"break\", \"bring\", \"brother\",\n            \"budget\", \"build\", \"building\", \"business\", \"but\", \"buy\", \"call\",\n            \"camera\", \"campaign\", \"can\", \"cancer\", \"candidate\", \"capital\", \"car\",\n            \"card\", \"care\", \"career\", \"carry\", \"case\", \"catch\", \"cause\", \"cell\", \"center\",\n            \"central\", \"century\", \"certain\", \"certainly\", \"chair\", \"challenge\", \"chance\",\n            \"change\", \"character\", \"charge\", \"check\", \"child\", \"choice\", \"choose\", \"church\",\n            \"citizen\", \"city\", \"civil\", \"claim\", \"class\", \"clear\", \"clearly\", \"close\",\n            \"coach\", \"cold\", \"collection\", \"college\", \"color\", \"come\", \"commercial\",\n            \"common\", \"community\", \"company\", \"compare\", \"computer\", \"concern\",\n            \"condition\", \"conference\", \"Congress\", \"consider\", \"consumer\", \"contain\",\n            \"continue\", \"control\", \"cost\", \"could\", \"country\", \"couple\", \"course\",\n            \"court\", \"cover\", \"create\", \"crime\", \"cultural\", \"culture\", \"cup\", \"current\",\n            \"customer\", \"cut\", \"dark\", \"data\", \"daughter\", \"day\", \"dead\", \"deal\", \"death\",\n            \"debate\", \"decade\", \"decide\", \"decision\", \"deep\", \"defense\", \"degree\",\n            \"democratic\", \"describe\", \"design\", \"despite\", \"detail\",\n            \"determine\", \"develop\", \"development\", \"die\", \"difference\", \"different\",\n            \"difficult\", \"dinner\", \"direction\", \"director\", \"discover\", \"discuss\",\n            \"discussion\", \"disease\", \"do\", \"doctor\", \"dog\", \"door\", \"down\", \"draw\",\n            \"dream\", \"drive\", \"drop\", \"drug\", \"during\", \"each\", \"early\", \"east\", \"easy\",\n            \"eat\", \"economic\", \"economy\", \"edge\", \"education\", \"effect\", \"effort\", \"eight\",\n            \"either\", \"election\", \"else\", \"employee\", \"end\", \"energy\", \"enjoy\", \"enough\",\n            \"enter\", \"entire\", \"environment\", \"environmental\", \"especially\", \"establish\",\n            \"even\", \"evening\", \"event\", \"ever\", \"every\", \"everybody\", \"everyone\",\n            \"everything\", \"evidence\", \"exactly\", \"example\", \"executive\", \"exist\",\n            \"expect\", \"experience\", \"expert\", \"explain\", \"eye\", \"face\", \"fact\", \"factor\",\n            \"fail\", \"fall\", \"family\", \"far\", \"fast\", \"father\", \"fear\", \"federal\", \"feel\",\n            \"feeling\", \"few\", \"field\", \"fight\", \"figure\", \"fill\", \"film\", \"final\",\n            \"finally\", \"financial\", \"find\", \"fine\", \"finger\", \"finish\", \"fire\", \"firm\",\n            \"first\", \"fish\", \"five\", \"floor\", \"fly\", \"focus\", \"follow\", \"food\", \"foot\",\n            \"for\", \"force\", \"foreign\", \"forget\", \"form\", \"former\", \"forward\", \"four\",\n            \"free\", \"friend\", \"from\", \"front\", \"full\", \"fund\", \"future\", \"game\", \"garden\",\n            \"gas\", \"general\", \"generation\", \"get\", \"girl\", \"give\", \"glass\", \"go\", \"goal\",\n            \"good\", \"government\", \"great\", \"green\", \"ground\", \"group\", \"grow\", \"growth\",\n            \"guess\", \"gun\", \"guy\", \"hair\", \"half\", \"hand\", \"hang\", \"happen\", \"happy\", \"hard\",\n            \"have\", \"he\", \"head\", \"health\", \"hear\", \"heart\", \"heat\", \"heavy\", \"help\", \"her\",\n            \"here\", \"herself\", \"high\", \"him\", \"himself\", \"his\", \"history\", \"hit\", \"hold\",\n            \"home\", \"hope\", \"hospital\", \"hot\", \"hotel\", \"hour\", \"house\", \"how\", \"however\",\n            \"huge\", \"human\", \"hundred\", \"husband\", \"idea\", \"identify\", \"image\",\n            \"imagine\", \"impact\", \"important\", \"improve\", \"include\", \"including\",\n            \"increase\", \"indeed\", \"indicate\", \"individual\", \"industry\", \"information\",\n            \"inside\", \"instead\", \"institution\", \"interest\", \"interesting\", \"international\",\n            \"interview\", \"into\", \"investment\", \"involve\", \"issue\", \"it\", \"item\", \"its\",\n            \"itself\", \"job\", \"join\", \"just\", \"keep\", \"key\", \"kid\", \"kill\", \"kind\", \"kitchen\",\n            \"know\", \"knowledge\", \"land\", \"language\", \"large\", \"last\", \"late\", \"later\",\n            \"laugh\", \"law\", \"lawyer\", \"lay\", \"lead\", \"leader\", \"learn\", \"least\", \"leave\",\n            \"left\", \"leg\", \"legal\", \"less\", \"let\", \"letter\", \"level\", \"lie\", \"life\", \"light\",\n            \"like\", \"likely\", \"line\", \"list\", \"listen\", \"little\", \"live\", \"local\", \"long\",\n            \"look\", \"lose\", \"loss\", \"lot\", \"love\", \"low\", \"machine\", \"magazine\", \"main\",\n            \"maintain\", \"major\", \"majority\", \"make\", \"man\", \"manage\", \"management\",\n            \"manager\", \"many\", \"market\", \"marriage\", \"material\", \"matter\", \"may\", \"maybe\",\n            \"mean\", \"measure\", \"media\", \"medical\", \"meet\", \"meeting\", \"member\",\n            \"memory\", \"mention\", \"message\", \"method\", \"middle\", \"might\", \"military\",\n            \"million\", \"mind\", \"minute\", \"miss\", \"mission\", \"model\", \"modern\", \"moment\",\n            \"money\", \"month\", \"more\", \"morning\", \"most\", \"mother\", \"mouth\", \"move\",\n            \"movement\", \"movie\", \"much\", \"music\", \"must\", \"myself\",\n            \"name\", \"nation\", \"national\", \"natural\", \"nature\", \"near\", \"nearly\",\n            \"necessary\", \"need\", \"network\", \"never\", \"new\", \"news\", \"newspaper\", \"next\",\n            \"nice\", \"night\", \"none\", \"nor\", \"north\", \"not\", \"note\", \"nothing\",\n            \"notice\", \"now\", \"number\", \"occur\", \"off\", \"offer\", \"office\",\n            \"officer\", \"official\", \"often\", \"oil\", \"old\", \"once\", \"one\",\n            \"only\", \"onto\", \"open\", \"operation\", \"opportunity\", \"option\", \"order\",\n            \"organization\", \"other\", \"others\", \"our\", \"out\", \"outside\", \"over\", \"own\",\n            \"owner\", \"page\", \"pain\", \"painting\", \"paper\", \"parent\", \"part\", \"participant\",\n            \"particular\", \"particularly\", \"partner\", \"party\", \"pass\", \"past\", \"patient\",\n            \"pattern\", \"pay\", \"peace\", \"people\", \"per\", \"perform\", \"performance\",\n            \"perhaps\", \"period\", \"person\", \"personal\", \"phone\", \"physical\", \"pick\",\n            \"picture\", \"piece\", \"place\", \"plan\", \"plant\", \"play\", \"player\", \"point\",\n            \"police\", \"policy\", \"political\", \"politics\", \"poor\", \"popular\", \"population\",\n            \"position\", \"positive\", \"possible\", \"power\", \"practice\", \"prepare\", \"present\",\n            \"president\", \"pressure\", \"pretty\", \"prevent\", \"price\", \"private\", \"probably\",\n            \"problem\", \"process\", \"produce\", \"product\", \"production\", \"professional\",\n            \"professor\", \"program\", \"project\", \"property\", \"protect\", \"prove\", \"provide\",\n            \"public\", \"pull\", \"purpose\", \"push\", \"put\", \"quality\", \"question\", \"quickly\",\n            \"quite\", \"race\", \"radio\", \"raise\", \"range\", \"rate\", \"rather\", \"reach\", \"read\",\n            \"ready\", \"real\", \"reality\", \"realize\", \"really\", \"reason\", \"receive\", \"recent\",\n            \"recently\", \"recognize\", \"record\", \"red\", \"reduce\", \"reflect\", \"region\",\n            \"relate\", \"relationship\", \"religious\", \"remain\", \"remember\", \"remove\",\n            \"report\", \"represent\", \"require\", \"research\", \"resource\",\n            \"respond\", \"response\", \"rest\", \"result\", \"return\", \"reveal\",\n            \"rich\", \"right\", \"rise\", \"risk\", \"road\", \"rock\", \"role\", \"room\", \"rule\",\n            \"run\", \"safe\", \"same\", \"save\", \"say\", \"scene\", \"school\", \"science\",\n            \"scientist\", \"score\", \"sea\", \"season\", \"seat\", \"second\", \"section\",\n            \"security\", \"see\", \"seek\", \"seem\", \"sell\", \"send\", \"senior\", \"sense\",\n            \"series\", \"serious\", \"serve\", \"service\", \"set\", \"seven\", \"several\",\n            \"shake\", \"share\", \"she\", \"shoot\", \"short\", \"shot\", \"should\", \"shoulder\",\n            \"show\", \"side\", \"sign\", \"significant\", \"similar\", \"simple\", \"simply\",\n            \"since\", \"sing\", \"single\", \"sister\", \"sit\", \"site\", \"situation\", \"six\",\n            \"size\", \"skill\", \"skin\", \"small\", \"smile\", \"so\", \"social\", \"society\",\n            \"soldier\", \"some\", \"somebody\", \"someone\", \"something\", \"sometimes\",\n            \"son\", \"song\", \"soon\", \"sort\", \"sound\", \"source\", \"south\", \"southern\",\n            \"space\", \"speak\", \"special\", \"specific\", \"speech\", \"spend\", \"sport\",\n            \"spring\", \"staff\", \"stage\", \"stand\", \"standard\", \"star\", \"start\",\n            \"state\", \"statement\", \"station\", \"stay\", \"step\", \"still\", \"stock\",\n            \"stop\", \"store\", \"story\", \"strategy\", \"street\", \"strong\", \"structure\",\n            \"student\", \"study\", \"stuff\", \"style\", \"subject\", \"success\",\n            \"successful\", \"such\", \"suddenly\", \"suffer\", \"suggest\", \"summer\",\n            \"support\", \"sure\", \"surface\", \"system\", \"table\", \"take\", \"talk\",\n            \"task\", \"tax\", \"teach\", \"teacher\", \"team\", \"technology\", \"television\",\n            \"tell\", \"ten\", \"tend\", \"term\", \"test\", \"than\", \"thank\", \"that\", \"the\",\n            \"their\", \"them\", \"themselves\", \"then\", \"theory\", \"there\", \"these\", \"they\",\n            \"thing\", \"think\", \"third\", \"this\", \"those\", \"though\", \"thought\",\n            \"thousand\", \"threat\", \"three\", \"through\", \"throughout\", \"throw\",\n            \"thus\", \"time\", \"today\", \"together\", \"tonight\", \"too\", \"top\",\n            \"total\", \"tough\", \"toward\", \"town\", \"trade\", \"traditional\", \"training\",\n            \"travel\", \"treat\", \"treatment\", \"tree\", \"trial\", \"trip\", \"trouble\",\n            \"true\", \"truth\", \"try\", \"turn\", \"two\", \"type\", \"under\",\n            \"understand\", \"unit\", \"until\", \"upon\", \"use\", \"usually\",\n            \"value\", \"various\", \"very\", \"victim\", \"view\", \"violence\", \"visit\",\n            \"voice\", \"vote\", \"wait\", \"walk\", \"wall\", \"want\", \"war\", \"watch\",\n            \"water\", \"way\", \"we\", \"weapon\", \"wear\", \"week\", \"weight\", \"well\",\n            \"west\", \"western\", \"what\", \"whatever\", \"when\", \"where\", \"whether\",\n            \"which\", \"while\", \"white\", \"who\", \"whole\", \"whom\", \"whose\", \"why\",\n            \"wide\", \"wife\", \"will\", \"win\", \"wind\", \"window\", \"wish\", \"with\",\n            \"within\", \"without\", \"woman\", \"wonder\", \"word\", \"work\", \"worker\",\n            \"world\", \"worry\", \"would\", \"write\", \"writer\", \"wrong\", \"yard\", \"yeah\",\n            \"year\", \"yes\", \"yet\", \"you\", \"young\", \"your\", \"yourself\",\n            \"abode\", \"access\"]\n    };\n\n    randomWord() {\n        const idx = Math.floor(Math.random() * this.words.length);\n        return this.words[idx];\n    };\n\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dictionary);\n\n//# sourceURL=webpack:///./src/dictionary.js?");

/***/ }),

/***/ "./src/fish.js":
/*!*********************!*\
  !*** ./src/fish.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Fish {\n    constructor(ctx, canvas, word, x, y, color, eaten) {\n        this.ctx = ctx;\n        this.canvas = canvas;\n        this.x = x;\n        this.y = y;\n        this.word = word;\n        this.color = color;\n        this.eaten = eaten;\n\n        this.orangeFishImg = new Image();\n        this.grayFishImg = new Image();\n        this.orangeFishImg.src = './dist/assets/orange_fish.png';\n        this.grayFishImg.src = './dist/assets/gray_fish.png';\n    }\n\n    draw() {\n        this.ctx.beginPath();\n            if (this.color === 'orange') {\n                this.ctx.drawImage(this.orangeFishImg, this.x, this.y, 60, 50);\n            } else {\n                this.ctx.drawImage(this.grayFishImg, this.x, this.y, 60, 50);\n            }\n            this.ctx.fillStyle = 'black';\n            this.ctx.font = '16px \"Jua\"';\n            this.ctx.margin = '15px';\n            this.ctx.padding = '30px';\n            this.ctx.textBaseline = 'middle';\n            this.ctx.fillText((`        ${this.word}`), this.x + 20, this.y + 7);\n            this.ctx.fill();\n        this.ctx.closePath();\n    }\n\n    move() {\n        this.x += 0.2;\n    }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Fish);\n\n//# sourceURL=webpack:///./src/fish.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _cat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cat */ \"./src/cat.js\");\n/* harmony import */ var _fish__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fish */ \"./src/fish.js\");\n/* harmony import */ var _dictionary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dictionary */ \"./src/dictionary.js\");\n/* harmony import */ var _game_over__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game_over */ \"./src/game_over.js\");\n\n\n\n\n\nclass Game {\n    constructor(page, ctx, canvas, input) {\n        this.page = page;\n        this.ctx = ctx;\n        this.canvas = canvas;\n        this.input = input;\n        \n        this.cat = new _cat__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx, canvas);\n        this.dictionary = new _dictionary__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n        this.gameOver = new _game_over__WEBPACK_IMPORTED_MODULE_3__[\"default\"](ctx, canvas);\n        \n        this.fish = [];\n        this.fishCount = 0;\n        this.count = 0;\n        this.cat.fat = 0;\n        this.eaten = false;\n        this.inputTimer = 0;\n        this.typeStart = 0;\n        this.typeEnd = 0;\n        this.then = Date.now();\n\n        this.resetGame = this.resetGame.bind(this);\n        // this.startTimer = this.startTimer.bind(this);\n        this.populateFishArray = this.populateFishArray.bind(this);\n        this.addFish = this.addFish.bind(this);\n        this.handleFish = this.handleFish.bind(this);\n        this.startGame = this.startGame.bind(this);\n        this.render = this.render.bind(this);\n        this.gameLoop = this.gameLoop.bind(this);\n        this.gameOverFunc = this.gameOverFunc.bind(this);\n        this.gameOverAnimate = this.gameOverAnimate.bind(this);\n        // this.slowIterate = this.slowIterate.bind(this);\n        // this.addFishSet = this.addFishSet.bind(this);\n\n    }\n\n    resetGame() {\n        \n        this.fish = [];\n        this.cat.fishEaten = 0;\n        this.fishCount = 0;\n        this.count = 0;\n        this.cat.fat = 0;\n        this.cat.eat = false;\n        this.eaten = false;\n    }\n\n    // startTimer(e) {\n    //     if (this.typeStart === 0 && e.target.value !== ' ') {\n    //         this.typeStart = Date.now();\n    //     }\n    // }\n\n    populateFishArray() {\n        \n        let x = 12;\n        let y = Math.floor((Math.random() * 220) + 170);\n        let colors = ['orange', 'gray'];\n        let color = colors[Math.floor(Math.random() * 2)];\n        let word = this.dictionary.randomWord();\n        let newFish = new _fish__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.ctx, this.canvas, word, x, y, color, this.eaten);\n\n        if (this.cat.fat === 0) {\n            if (this.fish.length < (this.cat.fat + 10)) {\n                this.fish.push(newFish);\n            }\n            return this.fish;\n\n        } else if (this.cat.fat === 5) {\n            if (this.fish.length < (this.cat.fat + 22)) {\n                this.fish.push(newFish);\n            }\n            return this.fish;\n\n        } else if (this.cat.fat === 10) {\n            if (this.fish.length < (this.cat.fat + 34)) {\n                this.fish.push(newFish);\n            }\n            return this.fish;\n\n        } else if (this.cat.fat === 15) {\n            if (this.fish.length < (this.cat.fat + 47)) {\n                this.fish.push(newFish);\n            }\n            return this.fish;\n        } \n    }\n\n    slowIterate(arr) {\n        if (arr.length === 0) {\n            return;\n        }\n        let f = arr[0];\n        if (delta > interval) {\n            if (f.eaten === false) {\n                f.move();\n                f.draw();\n                if (f.x >= 410) {\n                    f.eaten = true;\n                }\n            }\n        }\n        setTimeout(() => {\n            slowIterate(arr.slice(1));\n        }, 1000);\n    }\n\n    addFish() {\n        \n        let interval = 100;\n        let now = Date.now();\n        let delta = now - this.then;\n        \n        // this.slowIterate(this.fish);\n\n        this.fish.forEach(f => {\n            if (delta > interval) {\n                // this.then = now - (delta % interval);\n                if (f.eaten === false) {\n                    f.move();\n                    f.draw();\n                    if (f.x >= 410) {\n                        f.eaten = true;\n                    }\n                }\n            }\n        })\n        // var interval = 1000; // how much time should the delay between two iterations be (in milliseconds)?\n        // this.fish.forEach(function (f, index) {\n        //     setTimeout(function () {\n        //         if (delta > interval) {\n        //         // this.then = now - (delta % interval);\n        //         if (f.eaten === false) {\n        //             f.move();\n        //             f.draw();\n        //             if (f.x >= 410) {\n        //                 f.eaten = true;\n        //             }\n        //         }\n        //     }\n        //     }, interval);\n        // });\n    }\n    \n    handleFish(e) {\n        if (e.keyCode === 32 || e.keyCode === 13) {\n            let typedVal = this.input.value.trim();\n            this.fish.forEach(f => {\n                if (typedVal === f.word) {\n                    f.eaten = true;\n                    f.word = null;\n                    f = null;\n                    this.cat.fishEaten += 1;\n                    if (this.cat.fishEaten === 10 \n                        || this.cat.fishEaten === 22\n                        || this.cat.fishEaten === 34\n                        || this.cat.fishEaten === 46) {\n                        this.cat.fat += 5;\n                    };\n                    if (this.cat.fat === 20) {\n                        debugger\n                        this.gameOverFunc();\n                    }\n                    this.cat.draw();\n                    \n                    this.input.value = '';\n                    this.typeStart = 0;\n\n                };\n            });\n        }\n    }\n\n    startGame(e) {\n        \n        if (e.button === 0) {\n            this.canvas.removeEventListener('click', this.startGame);\n            this.resetGame();\n            this.gameLoop();\n            this.input.disabled = false;\n            this.input.style.display = 'block';\n            this.input.focus();\n        }\n    }\n\n    gameLoop() {\n        \n        this.render();\n    }\n\n    gameOverFunc() {\n        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\n        this.fish = [];\n        this.fishCount = 0;\n        this.count = 0;\n        this.cat.eat = false;\n        this.eaten = false;\n        this.canvas.removeEventListener('click', this.input.focus());\n        this.input.removeEventListener('keydown', this.handleFish);\n\n        this.input.value = '';\n        this.input.disabled = true;\n        this.input.style.display = 'none';\n\n        // this.GameOver.endCounter\n        // this.canvas.className = 'game-over-canvas';\n        debugger\n        this.gameOverAnimate();\n    }\n\n    gameOverAnimate() {\n        debugger\n        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\n        \n        this.gameOver.draw20Win();\n        this.gameOver.drawWinMessage();\n        this.gameOver.drawFishEaten(this.cat.fishEaten);\n        this.gameOver.drawPlayAgain();\n    }\n\n    render() {\n        \n        requestAnimationFrame(this.render);\n\n        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\n        this.canvas.addEventListener('click', this.input.focus());\n        this.input.addEventListener('keydown', this.handleFish);\n\n        \n\n        this.populateFishArray();\n        \n        this.addFish();\n        \n        this.cat.drawFishEaten();\n        \n        this.cat.draw();\n        \n        \n    }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_over.js":
/*!**************************!*\
  !*** ./src/game_over.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass GameOver {\n    constructor(ctx, canvas) {\n        this.ctx = ctx;\n        this.canvas = canvas;\n    }\n\n    draw20Win() {\n        this.ctx.clearRect(0, 0, 800, 600);\n        debugger\n        this.ctx.beginPath();\n            this.ctx.fillStyle = 'black';\n            this.ctx.font = 'bold 40px \"Jua\"';\n            this.ctx.textAlign = 'center';\n            this.ctx.fillText('Chonk status: MEGACHONK!!', 400, 110);\n            this.ctx.fill();\n        this.ctx.closePath();\n        this.drawWinMessage();\n    }\n\n    draw15Win() {\n        this.ctx.beginPath();\n            this.ctx.fillStyle = 'black';\n            this.ctx.font = 'bold 40px \"Jua\"';\n            this.ctx.textAlign = 'center';\n            this.ctx.fillText('Chonk status: A CHONKY BOI!', 400, 110);\n            this.ctx.fill();\n        this.ctx.closePath();\n        this.drawLoseMessage();\n    }\n\n    draw10Win() {\n        this.ctx.beginPath();\n            this.ctx.fillStyle = 'black';\n            this.ctx.font = 'bold 40px \"Jua\"';\n            this.ctx.textAlign = 'center';\n            this.ctx.fillText('Chonk status: Slight chonker!', 400, 110);\n            this.ctx.fill();\n        this.ctx.closePath();\n        this.drawLoseMessage();\n    }\n\n    draw5Win() {\n        this.ctx.beginPath();\n            this.ctx.fillStyle = 'black';\n            this.ctx.font = 'bold 40px \"Jua\"';\n            this.ctx.textAlign = 'center';\n            this.ctx.fillText('Chonk status: Not very chonky.', 400, 110);\n            this.ctx.fill();\n        this.ctx.closePath();\n        this.drawLoseMessage();\n    }\n\n    draw0Win() {\n        this.ctx.beginPath();\n            this.ctx.fillStyle = 'black';\n            this.ctx.font = 'bold 40px \"Jua\"';\n            this.ctx.textAlign = 'center';\n            this.ctx.fillText('Chonk status: A fine boi, but not chonky at all.', 400, 110);\n            this.ctx.fill();\n        this.ctx.closePath();\n        this.drawLoseMessage();\n    }\n\n    drawWinMessage() {\n        debugger\n        this.ctx.beginPath();\n            this.ctx.fillStyle = 'black';\n            this.ctx.font = '20px \"Jua\"';\n            this.ctx.textAlign = 'center';\n            this.ctx.fillText('He is the chonkiest boi thanks to you!', 400, 150);\n            this.ctx.fill();\n        this.ctx.closePath();\n    }\n\n    drawLoseMessage() {\n        this.ctx.beginPath();\n        this.ctx.fillStyle = 'black';\n        this.ctx.font = '20px \"Jua\"';\n        this.ctx.textAlign = 'center';\n        this.ctx.fillText('...but he is still hungry :(', 400, 150);\n        this.ctx.fill();\n        this.ctx.closePath();\n    }\n\n    drawFishEaten(fishCount) {\n        debugger\n        this.ctx.beginPath();\n            this.ctx.fillStyle = 'black';\n            this.ctx.font = 'bold 20px \"Jua\"';\n            this.textAlign = 'center';\n            this.ctx.fillText('Fish eaten: ' + `${fishCount}`, 400, 200);\n    }\n\n    drawPlayAgain() {\n        debugger\n        this.ctx.beginPath();\n            this.ctx.fillStyle = 'red';\n            this.ctx.textAlign = 'center';\n            this.ctx.font = 'bold 30px \"Jua\"';\n            this.ctx.fillText('Play Again', 400, 300);\n            this.ctx.fill();\n        this.ctx.closePath();\n    }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameOver);\n\n//# sourceURL=webpack:///./src/game_over.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _start__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./start */ \"./src/start.js\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n    const canvas = document.getElementById('main-canvas');\n    const ctx = canvas.getContext('2d');\n    const page = document.getElementById('page');\n    const input = document.getElementById('user-input');\n\n    const start = new _start__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx, canvas);\n    const game = new _game__WEBPACK_IMPORTED_MODULE_1__[\"default\"](page, ctx, canvas, input)\n    \n    setTimeout(() => {\n        start.drawTitle();\n        start.drawHeaderMessage();\n    }, 500)\n    start.drawCat();\n    \n    let count = 0;\n    function flashyText() {\n        ctx.clearRect(345, 520, 110, 110);\n        count ++;\n        if (count % 2 === 1) {\n            start.drawStart();\n        } else {\n            null;\n        }\n        canvas.addEventListener('click', game.startGame);\n    }\n    input.style.display = 'none';\n    window.startInterval = setInterval(flashyText, 900);\n    \n})\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/start.js":
/*!**********************!*\
  !*** ./src/start.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Start {\n    constructor(ctx, canvas) {\n        this.ctx = ctx;\n        this.canvas = canvas;\n        this.catImg = new Image();\n        this.catImg.src = './dist/assets/cat.png';\n    }\n\n    drawStart() {\n        this.ctx.beginPath();\n            this.ctx.fillStyle = 'red';\n            this.ctx.font = 'bold 40px \"Jua\"';\n            this.ctx.textAlign = 'center';\n            this.ctx.fillText('Start', (this.canvas.width/2), 550);\n            this.ctx.fill();\n        this.ctx.closePath();\n    }\n\n    drawTitle() {\n        this.ctx.beginPath();\n            this.ctx.fillStyle = 'black';\n            this.ctx.font = 'bold 55px \"Jua\"';\n            this.textAlign = 'center';\n            this.justifyContent = 'center';\n            this.ctx.fillText('Chonky Type', 249, 100);\n            this.ctx.fill();\n        this.ctx.closePath();\n        \n    }\n\n    drawHeaderMessage() {\n        this.ctx.beginPath();\n            this.ctx.fillStyle = 'black';\n            this.ctx.font = '24px \"Jua\"';\n            this.ctx.textAlign = 'center';\n            this.ctx.fillText('Try to get the cat as fat and as chonky as you can!',\n                                (this.canvas.width/2), \n                                180);\n            this.ctx.fill();\n        this.ctx.closePath();\n    }\n\n    drawCat() {\n        this.catImg.onload = () => this.ctx.drawImage(this.catImg, 220, 225, 360, 250);\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Start);\n\n//# sourceURL=webpack:///./src/start.js?");

/***/ })

/******/ });