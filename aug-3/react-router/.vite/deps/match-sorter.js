import {
  __commonJS,
  __toESM
} from "./chunk-WNKWOKNR.js";

// node_modules/remove-accents/index.js
var require_remove_accents = __commonJS({
  "node_modules/remove-accents/index.js"(exports, module) {
    var characterMap = {
      "À": "A",
      "Á": "A",
      "Â": "A",
      "Ã": "A",
      "Ä": "A",
      "Å": "A",
      "Ấ": "A",
      "Ắ": "A",
      "Ẳ": "A",
      "Ẵ": "A",
      "Ặ": "A",
      "Æ": "AE",
      "Ầ": "A",
      "Ằ": "A",
      "Ȃ": "A",
      "Ç": "C",
      "Ḉ": "C",
      "È": "E",
      "É": "E",
      "Ê": "E",
      "Ë": "E",
      "Ế": "E",
      "Ḗ": "E",
      "Ề": "E",
      "Ḕ": "E",
      "Ḝ": "E",
      "Ȇ": "E",
      "Ì": "I",
      "Í": "I",
      "Î": "I",
      "Ï": "I",
      "Ḯ": "I",
      "Ȋ": "I",
      "Ð": "D",
      "Ñ": "N",
      "Ò": "O",
      "Ó": "O",
      "Ô": "O",
      "Õ": "O",
      "Ö": "O",
      "Ø": "O",
      "Ố": "O",
      "Ṍ": "O",
      "Ṓ": "O",
      "Ȏ": "O",
      "Ù": "U",
      "Ú": "U",
      "Û": "U",
      "Ü": "U",
      "Ý": "Y",
      "à": "a",
      "á": "a",
      "â": "a",
      "ã": "a",
      "ä": "a",
      "å": "a",
      "ấ": "a",
      "ắ": "a",
      "ẳ": "a",
      "ẵ": "a",
      "ặ": "a",
      "æ": "ae",
      "ầ": "a",
      "ằ": "a",
      "ȃ": "a",
      "ç": "c",
      "ḉ": "c",
      "è": "e",
      "é": "e",
      "ê": "e",
      "ë": "e",
      "ế": "e",
      "ḗ": "e",
      "ề": "e",
      "ḕ": "e",
      "ḝ": "e",
      "ȇ": "e",
      "ì": "i",
      "í": "i",
      "î": "i",
      "ï": "i",
      "ḯ": "i",
      "ȋ": "i",
      "ð": "d",
      "ñ": "n",
      "ò": "o",
      "ó": "o",
      "ô": "o",
      "õ": "o",
      "ö": "o",
      "ø": "o",
      "ố": "o",
      "ṍ": "o",
      "ṓ": "o",
      "ȏ": "o",
      "ù": "u",
      "ú": "u",
      "û": "u",
      "ü": "u",
      "ý": "y",
      "ÿ": "y",
      "Ā": "A",
      "ā": "a",
      "Ă": "A",
      "ă": "a",
      "Ą": "A",
      "ą": "a",
      "Ć": "C",
      "ć": "c",
      "Ĉ": "C",
      "ĉ": "c",
      "Ċ": "C",
      "ċ": "c",
      "Č": "C",
      "č": "c",
      "C̆": "C",
      "c̆": "c",
      "Ď": "D",
      "ď": "d",
      "Đ": "D",
      "đ": "d",
      "Ē": "E",
      "ē": "e",
      "Ĕ": "E",
      "ĕ": "e",
      "Ė": "E",
      "ė": "e",
      "Ę": "E",
      "ę": "e",
      "Ě": "E",
      "ě": "e",
      "Ĝ": "G",
      "Ǵ": "G",
      "ĝ": "g",
      "ǵ": "g",
      "Ğ": "G",
      "ğ": "g",
      "Ġ": "G",
      "ġ": "g",
      "Ģ": "G",
      "ģ": "g",
      "Ĥ": "H",
      "ĥ": "h",
      "Ħ": "H",
      "ħ": "h",
      "Ḫ": "H",
      "ḫ": "h",
      "Ĩ": "I",
      "ĩ": "i",
      "Ī": "I",
      "ī": "i",
      "Ĭ": "I",
      "ĭ": "i",
      "Į": "I",
      "į": "i",
      "İ": "I",
      "ı": "i",
      "Ĳ": "IJ",
      "ĳ": "ij",
      "Ĵ": "J",
      "ĵ": "j",
      "Ķ": "K",
      "ķ": "k",
      "Ḱ": "K",
      "ḱ": "k",
      "K̆": "K",
      "k̆": "k",
      "Ĺ": "L",
      "ĺ": "l",
      "Ļ": "L",
      "ļ": "l",
      "Ľ": "L",
      "ľ": "l",
      "Ŀ": "L",
      "ŀ": "l",
      "Ł": "l",
      "ł": "l",
      "Ḿ": "M",
      "ḿ": "m",
      "M̆": "M",
      "m̆": "m",
      "Ń": "N",
      "ń": "n",
      "Ņ": "N",
      "ņ": "n",
      "Ň": "N",
      "ň": "n",
      "ŉ": "n",
      "N̆": "N",
      "n̆": "n",
      "Ō": "O",
      "ō": "o",
      "Ŏ": "O",
      "ŏ": "o",
      "Ő": "O",
      "ő": "o",
      "Œ": "OE",
      "œ": "oe",
      "P̆": "P",
      "p̆": "p",
      "Ŕ": "R",
      "ŕ": "r",
      "Ŗ": "R",
      "ŗ": "r",
      "Ř": "R",
      "ř": "r",
      "R̆": "R",
      "r̆": "r",
      "Ȓ": "R",
      "ȓ": "r",
      "Ś": "S",
      "ś": "s",
      "Ŝ": "S",
      "ŝ": "s",
      "Ş": "S",
      "Ș": "S",
      "ș": "s",
      "ş": "s",
      "Š": "S",
      "š": "s",
      "Ţ": "T",
      "ţ": "t",
      "ț": "t",
      "Ț": "T",
      "Ť": "T",
      "ť": "t",
      "Ŧ": "T",
      "ŧ": "t",
      "T̆": "T",
      "t̆": "t",
      "Ũ": "U",
      "ũ": "u",
      "Ū": "U",
      "ū": "u",
      "Ŭ": "U",
      "ŭ": "u",
      "Ů": "U",
      "ů": "u",
      "Ű": "U",
      "ű": "u",
      "Ų": "U",
      "ų": "u",
      "Ȗ": "U",
      "ȗ": "u",
      "V̆": "V",
      "v̆": "v",
      "Ŵ": "W",
      "ŵ": "w",
      "Ẃ": "W",
      "ẃ": "w",
      "X̆": "X",
      "x̆": "x",
      "Ŷ": "Y",
      "ŷ": "y",
      "Ÿ": "Y",
      "Y̆": "Y",
      "y̆": "y",
      "Ź": "Z",
      "ź": "z",
      "Ż": "Z",
      "ż": "z",
      "Ž": "Z",
      "ž": "z",
      "ſ": "s",
      "ƒ": "f",
      "Ơ": "O",
      "ơ": "o",
      "Ư": "U",
      "ư": "u",
      "Ǎ": "A",
      "ǎ": "a",
      "Ǐ": "I",
      "ǐ": "i",
      "Ǒ": "O",
      "ǒ": "o",
      "Ǔ": "U",
      "ǔ": "u",
      "Ǖ": "U",
      "ǖ": "u",
      "Ǘ": "U",
      "ǘ": "u",
      "Ǚ": "U",
      "ǚ": "u",
      "Ǜ": "U",
      "ǜ": "u",
      "Ứ": "U",
      "ứ": "u",
      "Ṹ": "U",
      "ṹ": "u",
      "Ǻ": "A",
      "ǻ": "a",
      "Ǽ": "AE",
      "ǽ": "ae",
      "Ǿ": "O",
      "ǿ": "o",
      "Þ": "TH",
      "þ": "th",
      "Ṕ": "P",
      "ṕ": "p",
      "Ṥ": "S",
      "ṥ": "s",
      "X́": "X",
      "x́": "x",
      "Ѓ": "Г",
      "ѓ": "г",
      "Ќ": "К",
      "ќ": "к",
      "A̋": "A",
      "a̋": "a",
      "E̋": "E",
      "e̋": "e",
      "I̋": "I",
      "i̋": "i",
      "Ǹ": "N",
      "ǹ": "n",
      "Ồ": "O",
      "ồ": "o",
      "Ṑ": "O",
      "ṑ": "o",
      "Ừ": "U",
      "ừ": "u",
      "Ẁ": "W",
      "ẁ": "w",
      "Ỳ": "Y",
      "ỳ": "y",
      "Ȁ": "A",
      "ȁ": "a",
      "Ȅ": "E",
      "ȅ": "e",
      "Ȉ": "I",
      "ȉ": "i",
      "Ȍ": "O",
      "ȍ": "o",
      "Ȑ": "R",
      "ȑ": "r",
      "Ȕ": "U",
      "ȕ": "u",
      "B̌": "B",
      "b̌": "b",
      "Č̣": "C",
      "č̣": "c",
      "Ê̌": "E",
      "ê̌": "e",
      "F̌": "F",
      "f̌": "f",
      "Ǧ": "G",
      "ǧ": "g",
      "Ȟ": "H",
      "ȟ": "h",
      "J̌": "J",
      "ǰ": "j",
      "Ǩ": "K",
      "ǩ": "k",
      "M̌": "M",
      "m̌": "m",
      "P̌": "P",
      "p̌": "p",
      "Q̌": "Q",
      "q̌": "q",
      "Ř̩": "R",
      "ř̩": "r",
      "Ṧ": "S",
      "ṧ": "s",
      "V̌": "V",
      "v̌": "v",
      "W̌": "W",
      "w̌": "w",
      "X̌": "X",
      "x̌": "x",
      "Y̌": "Y",
      "y̌": "y",
      "A̧": "A",
      "a̧": "a",
      "B̧": "B",
      "b̧": "b",
      "Ḑ": "D",
      "ḑ": "d",
      "Ȩ": "E",
      "ȩ": "e",
      "Ɛ̧": "E",
      "ɛ̧": "e",
      "Ḩ": "H",
      "ḩ": "h",
      "I̧": "I",
      "i̧": "i",
      "Ɨ̧": "I",
      "ɨ̧": "i",
      "M̧": "M",
      "m̧": "m",
      "O̧": "O",
      "o̧": "o",
      "Q̧": "Q",
      "q̧": "q",
      "U̧": "U",
      "u̧": "u",
      "X̧": "X",
      "x̧": "x",
      "Z̧": "Z",
      "z̧": "z"
    };
    var chars = Object.keys(characterMap).join("|");
    var allAccents = new RegExp(chars, "g");
    var firstAccent = new RegExp(chars, "");
    var removeAccents2 = function(string) {
      return string.replace(allAccents, function(match) {
        return characterMap[match];
      });
    };
    var hasAccents = function(string) {
      return !!string.match(firstAccent);
    };
    module.exports = removeAccents2;
    module.exports.has = hasAccents;
    module.exports.remove = removeAccents2;
  }
});

// node_modules/@babel/runtime/helpers/esm/extends.js
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

// node_modules/match-sorter/dist/match-sorter.esm.js
var import_remove_accents = __toESM(require_remove_accents());
var rankings = {
  CASE_SENSITIVE_EQUAL: 7,
  EQUAL: 6,
  STARTS_WITH: 5,
  WORD_STARTS_WITH: 4,
  CONTAINS: 3,
  ACRONYM: 2,
  MATCHES: 1,
  NO_MATCH: 0
};
matchSorter.rankings = rankings;
var defaultBaseSortFn = function defaultBaseSortFn2(a, b) {
  return String(a.rankedValue).localeCompare(String(b.rankedValue));
};
function matchSorter(items, value, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, keys = _options.keys, _options$threshold = _options.threshold, threshold = _options$threshold === void 0 ? rankings.MATCHES : _options$threshold, _options$baseSort = _options.baseSort, baseSort = _options$baseSort === void 0 ? defaultBaseSortFn : _options$baseSort, _options$sorter = _options.sorter, sorter = _options$sorter === void 0 ? function(matchedItems2) {
    return matchedItems2.sort(function(a, b) {
      return sortRankedValues(a, b, baseSort);
    });
  } : _options$sorter;
  var matchedItems = items.reduce(reduceItemsToRanked, []);
  return sorter(matchedItems).map(function(_ref) {
    var item = _ref.item;
    return item;
  });
  function reduceItemsToRanked(matches, item, index) {
    var rankingInfo = getHighestRanking(item, keys, value, options);
    var rank = rankingInfo.rank, _rankingInfo$keyThres = rankingInfo.keyThreshold, keyThreshold = _rankingInfo$keyThres === void 0 ? threshold : _rankingInfo$keyThres;
    if (rank >= keyThreshold) {
      matches.push(_extends({}, rankingInfo, {
        item,
        index
      }));
    }
    return matches;
  }
}
function getHighestRanking(item, keys, value, options) {
  if (!keys) {
    var stringItem = item;
    return {
      // ends up being duplicate of 'item' in matches but consistent
      rankedValue: stringItem,
      rank: getMatchRanking(stringItem, value, options),
      keyIndex: -1,
      keyThreshold: options.threshold
    };
  }
  var valuesToRank = getAllValuesToRank(item, keys);
  return valuesToRank.reduce(function(_ref2, _ref3, i) {
    var rank = _ref2.rank, rankedValue = _ref2.rankedValue, keyIndex = _ref2.keyIndex, keyThreshold = _ref2.keyThreshold;
    var itemValue = _ref3.itemValue, attributes = _ref3.attributes;
    var newRank = getMatchRanking(itemValue, value, options);
    var newRankedValue = rankedValue;
    var minRanking = attributes.minRanking, maxRanking = attributes.maxRanking, threshold = attributes.threshold;
    if (newRank < minRanking && newRank >= rankings.MATCHES) {
      newRank = minRanking;
    } else if (newRank > maxRanking) {
      newRank = maxRanking;
    }
    if (newRank > rank) {
      rank = newRank;
      keyIndex = i;
      keyThreshold = threshold;
      newRankedValue = itemValue;
    }
    return {
      rankedValue: newRankedValue,
      rank,
      keyIndex,
      keyThreshold
    };
  }, {
    rankedValue: item,
    rank: rankings.NO_MATCH,
    keyIndex: -1,
    keyThreshold: options.threshold
  });
}
function getMatchRanking(testString, stringToRank, options) {
  testString = prepareValueForComparison(testString, options);
  stringToRank = prepareValueForComparison(stringToRank, options);
  if (stringToRank.length > testString.length) {
    return rankings.NO_MATCH;
  }
  if (testString === stringToRank) {
    return rankings.CASE_SENSITIVE_EQUAL;
  }
  testString = testString.toLowerCase();
  stringToRank = stringToRank.toLowerCase();
  if (testString === stringToRank) {
    return rankings.EQUAL;
  }
  if (testString.startsWith(stringToRank)) {
    return rankings.STARTS_WITH;
  }
  if (testString.includes(" " + stringToRank)) {
    return rankings.WORD_STARTS_WITH;
  }
  if (testString.includes(stringToRank)) {
    return rankings.CONTAINS;
  } else if (stringToRank.length === 1) {
    return rankings.NO_MATCH;
  }
  if (getAcronym(testString).includes(stringToRank)) {
    return rankings.ACRONYM;
  }
  return getClosenessRanking(testString, stringToRank);
}
function getAcronym(string) {
  var acronym = "";
  var wordsInString = string.split(" ");
  wordsInString.forEach(function(wordInString) {
    var splitByHyphenWords = wordInString.split("-");
    splitByHyphenWords.forEach(function(splitByHyphenWord) {
      acronym += splitByHyphenWord.substr(0, 1);
    });
  });
  return acronym;
}
function getClosenessRanking(testString, stringToRank) {
  var matchingInOrderCharCount = 0;
  var charNumber = 0;
  function findMatchingCharacter(matchChar2, string, index) {
    for (var j = index, J = string.length; j < J; j++) {
      var stringChar = string[j];
      if (stringChar === matchChar2) {
        matchingInOrderCharCount += 1;
        return j + 1;
      }
    }
    return -1;
  }
  function getRanking(spread2) {
    var spreadPercentage = 1 / spread2;
    var inOrderPercentage = matchingInOrderCharCount / stringToRank.length;
    var ranking = rankings.MATCHES + inOrderPercentage * spreadPercentage;
    return ranking;
  }
  var firstIndex = findMatchingCharacter(stringToRank[0], testString, 0);
  if (firstIndex < 0) {
    return rankings.NO_MATCH;
  }
  charNumber = firstIndex;
  for (var i = 1, I = stringToRank.length; i < I; i++) {
    var matchChar = stringToRank[i];
    charNumber = findMatchingCharacter(matchChar, testString, charNumber);
    var found = charNumber > -1;
    if (!found) {
      return rankings.NO_MATCH;
    }
  }
  var spread = charNumber - firstIndex;
  return getRanking(spread);
}
function sortRankedValues(a, b, baseSort) {
  var aFirst = -1;
  var bFirst = 1;
  var aRank = a.rank, aKeyIndex = a.keyIndex;
  var bRank = b.rank, bKeyIndex = b.keyIndex;
  var same = aRank === bRank;
  if (same) {
    if (aKeyIndex === bKeyIndex) {
      return baseSort(a, b);
    } else {
      return aKeyIndex < bKeyIndex ? aFirst : bFirst;
    }
  } else {
    return aRank > bRank ? aFirst : bFirst;
  }
}
function prepareValueForComparison(value, _ref4) {
  var keepDiacritics = _ref4.keepDiacritics;
  value = "" + value;
  if (!keepDiacritics) {
    value = (0, import_remove_accents.default)(value);
  }
  return value;
}
function getItemValues(item, key) {
  if (typeof key === "object") {
    key = key.key;
  }
  var value;
  if (typeof key === "function") {
    value = key(item);
  } else if (item == null) {
    value = null;
  } else if (Object.hasOwnProperty.call(item, key)) {
    value = item[key];
  } else if (key.includes(".")) {
    return getNestedValues(key, item);
  } else {
    value = null;
  }
  if (value == null) {
    return [];
  }
  if (Array.isArray(value)) {
    return value;
  }
  return [String(value)];
}
function getNestedValues(path, item) {
  var keys = path.split(".");
  var values = [item];
  for (var i = 0, I = keys.length; i < I; i++) {
    var nestedKey = keys[i];
    var nestedValues = [];
    for (var j = 0, J = values.length; j < J; j++) {
      var nestedItem = values[j];
      if (nestedItem == null)
        continue;
      if (Object.hasOwnProperty.call(nestedItem, nestedKey)) {
        var nestedValue = nestedItem[nestedKey];
        if (nestedValue != null) {
          nestedValues.push(nestedValue);
        }
      } else if (nestedKey === "*") {
        nestedValues = nestedValues.concat(nestedItem);
      }
    }
    values = nestedValues;
  }
  if (Array.isArray(values[0])) {
    var result = [];
    return result.concat.apply(result, values);
  }
  return values;
}
function getAllValuesToRank(item, keys) {
  var allValues = [];
  for (var j = 0, J = keys.length; j < J; j++) {
    var key = keys[j];
    var attributes = getKeyAttributes(key);
    var itemValues = getItemValues(item, key);
    for (var i = 0, I = itemValues.length; i < I; i++) {
      allValues.push({
        itemValue: itemValues[i],
        attributes
      });
    }
  }
  return allValues;
}
var defaultKeyAttributes = {
  maxRanking: Infinity,
  minRanking: -Infinity
};
function getKeyAttributes(key) {
  if (typeof key === "string") {
    return defaultKeyAttributes;
  }
  return _extends({}, defaultKeyAttributes, key);
}
export {
  defaultBaseSortFn,
  matchSorter,
  rankings
};
//# sourceMappingURL=match-sorter.js.map
