(function() { 

var js, newark;
js = (typeof window == 'undefined') ? global : window;
newark = {};
newark["core::js"] = js;
newark["core::newark"] = newark;
if (typeof require != 'undefined') {
  newark["core::require"] = require;
};

// prelude.newark

(function () {
  var x_0_0, x_0_1, x_0_2, x_0_3, x_0_4, x_0_5, x_0_6, x_0_7, x_0_8, x_0_9, x_0_10, x_0_11, x_0_12, x_0_13, x_0_14, x_0_15, x_0_16, x_0_17, x_0_18, x_0_19, x_0_20, x_0_21, x_0_22, x_0_23, x_0_24, x_0_25, x_0_26, x_0_27, x_0_28, x_0_29, x_0_30, x_0_31, x_0_32, x_0_33, x_0_34, x_0_35, x_0_36, x_0_37, x_0_38, x_0_39, x_0_40, x_0_41, x_0_42, x_0_43, x_0_44, x_0_45, x_0_46, x_0_47, x_0_48, x_0_49, x_0_50, x_0_51, x_0_52, x_0_53, x_0_54, x_0_55, x_0_56, x_0_57, x_0_58, x_0_59, x_0_60, x_0_61, x_0_62, x_0_63, x_0_64, x_0_65, x_0_66, x_0_67, x_0_68;
  newark["prelude::*debug*"] = true;
  newark["prelude::+"] = null;
  newark["prelude::-"] = null;
  newark["prelude::*"] = null;
  newark["prelude::/"] = null;
  newark["prelude::mod"] = null;
  newark["prelude::div"] = null;
  newark["prelude::<"] = null;
  newark["prelude::<="] = null;
  newark["prelude::="] = null;
  newark["prelude::>="] = null;
  newark["prelude::>"] = null;
  newark["prelude::nil?"] = null;
  newark["prelude::bit-shift-left"] = null;
  newark["prelude::bit-shift-right"] = null;
  newark["prelude::bit-shift-right*"] = null;
  newark["prelude::has-property?"] = null;
  newark["prelude::delete-property!"] = null;
  newark["prelude::instanceof"] = null;
  newark["prelude::typeof"] = null;
  newark["prelude::object"] = (function () {
    var x_1_0, x_1_1, x_1_2, x_1_3, x_1_4, x_1_5, x_1_6, x_1_7;
    x_1_0 = [];
    x_1_0.length = arguments.length-0;
    for (var i = 0, ii = arguments.length; i<ii; i++) { 
      x_1_0[i-0] = arguments[i];
    };
    label_1_0:{
      x_1_2 = newark["core::js"]["Object"]();
      x_1_3 = x_1_0["length"];
      x_1_4 = 0;
      label_1_1:for(;;) {
        x_1_5 = (x_1_4 === x_1_3);
        if (!(x_1_5 == null || x_1_5 === false)) {
          break label_1_1;
        };
        x_1_6 = x_1_0[x_1_4];
        x_1_4 = (x_1_4 + 1);
        x_1_7 = x_1_0[x_1_4];
        x_1_4 = (x_1_4 + 1);
        x_1_2[x_1_6] = x_1_7;
      };
      x_1_1 = x_1_2;
    };
    return x_1_1;
  });
  newark["prelude::object"][":name"] = "object";
  newark["prelude::+"] = (function () {
    var x_1_0, x_1_1, x_1_2, x_1_3, x_1_4, x_1_5, x_1_6, x_1_7, x_1_8, x_1_9, x_1_10;
    x_1_0 = [];
    x_1_0.length = arguments.length-0;
    for (var i = 0, ii = arguments.length; i<ii; i++) { 
      x_1_0[i-0] = arguments[i];
    };
    label_1_0:{
      x_1_2 = x_1_0["length"];
      x_1_3 = (x_1_2 === 0);
      if (!(x_1_3 == null || x_1_3 === false)) {
        x_1_1 = 0;
      } else {
        x_1_4 = (x_1_2 === 1);
        if (!(x_1_4 == null || x_1_4 === false)) {
          x_1_1 = x_1_0["0"];
        } else {
          x_1_5 = (x_1_0["0"] + x_1_0["1"]);
          x_1_6 = 2;
          x_1_7 = x_1_0;
          x_1_8 = x_1_7["length"];
          label_1_1:for(;;) {
            x_1_9 = (x_1_6 < x_1_8);
            if (!(x_1_9 == null || x_1_9 === false)) {
              x_1_10 = x_1_7[x_1_6];
              x_1_5 = (x_1_5 + x_1_6);
              x_1_6 = (x_1_6 + 1);
            } else {
              break label_1_1;
            };
          };
          x_1_1 = x_1_5;
        };
      };
    };
    return x_1_1;
  });
  newark["prelude::+"][":name"] = "+";
  newark["prelude::*"] = (function () {
    var x_1_0, x_1_1, x_1_2, x_1_3, x_1_4, x_1_5, x_1_6, x_1_7, x_1_8, x_1_9, x_1_10;
    x_1_0 = [];
    x_1_0.length = arguments.length-0;
    for (var i = 0, ii = arguments.length; i<ii; i++) { 
      x_1_0[i-0] = arguments[i];
    };
    label_1_0:{
      x_1_2 = x_1_0["length"];
      x_1_3 = (x_1_2 === 0);
      if (!(x_1_3 == null || x_1_3 === false)) {
        x_1_1 = 1;
      } else {
        x_1_4 = (x_1_2 === 1);
        if (!(x_1_4 == null || x_1_4 === false)) {
          x_1_1 = x_1_0["0"];
        } else {
          x_1_5 = (x_1_0["0"] * x_1_0["1"]);
          x_1_6 = 2;
          x_1_7 = x_1_0;
          x_1_8 = x_1_7["length"];
          label_1_1:for(;;) {
            x_1_9 = (x_1_6 < x_1_8);
            if (!(x_1_9 == null || x_1_9 === false)) {
              x_1_10 = x_1_7[x_1_6];
              x_1_5 = (x_1_5 * x_1_10);
              x_1_6 = (x_1_6 + 1);
            } else {
              break label_1_1;
            };
          };
          x_1_1 = x_1_5;
        };
      };
    };
    return x_1_1;
  });
  newark["prelude::*"][":name"] = "*";
  newark["prelude::-"] = (function () {
    var x_1_0, x_1_1, x_1_2, x_1_3, x_1_4, x_1_5, x_1_6, x_1_7, x_1_8, x_1_9, x_1_10, x_1_11;
    x_1_0 = [];
    x_1_0.length = arguments.length-0;
    for (var i = 0, ii = arguments.length; i<ii; i++) { 
      x_1_0[i-0] = arguments[i];
    };
    label_1_0:{
      x_1_2 = x_1_0["length"];
      x_1_3 = (x_1_2 === 0);
      if (!(x_1_3 == null || x_1_3 === false)) {
        x_1_4 = newark["core::js"]["Error"]("- requires at least one argument");
        throw x_1_4;
      } else {
        x_1_5 = (x_1_2 === 1);
        if (!(x_1_5 == null || x_1_5 === false)) {
          x_1_1 = (- x_1_0["0"]);
        } else {
          x_1_6 = (x_1_0["0"] * x_1_0["1"]);
          x_1_7 = 2;
          x_1_8 = x_1_0;
          x_1_9 = x_1_8["length"];
          label_1_1:for(;;) {
            x_1_10 = (x_1_7 < x_1_9);
            if (!(x_1_10 == null || x_1_10 === false)) {
              x_1_11 = x_1_8[x_1_7];
              x_1_6 = (x_1_6 - x_1_11);
              x_1_7 = (x_1_7 + 1);
            } else {
              break label_1_1;
            };
          };
          x_1_1 = x_1_6;
        };
      };
    };
    return x_1_1;
  });
  newark["prelude::-"][":name"] = "-";
  newark["prelude::/"] = (function () {
    var x_1_0, x_1_1, x_1_2, x_1_3, x_1_4, x_1_5, x_1_6, x_1_7, x_1_8, x_1_9, x_1_10, x_1_11;
    x_1_0 = [];
    x_1_0.length = arguments.length-0;
    for (var i = 0, ii = arguments.length; i<ii; i++) { 
      x_1_0[i-0] = arguments[i];
    };
    label_1_0:{
      x_1_2 = x_1_0["length"];
      x_1_3 = (x_1_2 === 0);
      if (!(x_1_3 == null || x_1_3 === false)) {
        x_1_4 = newark["core::js"]["Error"]("/ requires at least one argument");
        throw x_1_4;
      } else {
        x_1_5 = (x_1_2 === 1);
        if (!(x_1_5 == null || x_1_5 === false)) {
          x_1_1 = (1 / x_1_0["0"]);
        } else {
          x_1_6 = (x_1_0["0"] * x_1_0["1"]);
          x_1_7 = 2;
          x_1_8 = x_1_0;
          x_1_9 = x_1_8["length"];
          label_1_1:for(;;) {
            x_1_10 = (x_1_7 < x_1_9);
            if (!(x_1_10 == null || x_1_10 === false)) {
              x_1_11 = x_1_8[x_1_7];
              x_1_6 = (x_1_6 / x_1_11);
              x_1_7 = (x_1_7 + 1);
            } else {
              break label_1_1;
            };
          };
          x_1_1 = x_1_6;
        };
      };
    };
    return x_1_1;
  });
  newark["prelude::/"][":name"] = "/";
  newark["prelude::mod"] = (function (a_1_0, a_1_1) {
    var x_1_0;
    label_1_0:{
      x_1_0 = (a_1_0 % a_1_1);
    };
    return x_1_0;
  });
  newark["prelude::mod"][":name"] = "mod";
  newark["prelude::not"] = (function (a_1_0) {
    var x_1_0;
    label_1_0:{
      if (!(a_1_0 == null || a_1_0 === false)) {
        x_1_0 = false;
      } else {
        x_1_0 = true;
      };
    };
    return x_1_0;
  });
  newark["prelude::not"][":name"] = "not";
  newark["prelude::fn?"] = (function (a_1_0) {
    var x_1_0, x_1_1;
    label_1_0:{
      x_1_1 = (typeof a_1_0);
      x_1_0 = (x_1_1 === "function");
    };
    return x_1_0;
  });
  newark["prelude::fn?"][":name"] = "fn?";
  newark["prelude::undefined?"] = (function (a_1_0) {
    var x_1_0, x_1_1;
    label_1_0:{
      x_1_1 = (typeof a_1_0);
      x_1_0 = (x_1_1 === "undefined");
    };
    return x_1_0;
  });
  newark["prelude::undefined?"][":name"] = "undefined?";
  newark["prelude::defined?"] = (function (a_1_0) {
    var x_1_0, x_1_1;
    label_1_0:{
      x_1_1 = newark["prelude::undefined?"](a_1_0);
      x_1_0 = newark["prelude::not"](x_1_1);
    };
    return x_1_0;
  });
  newark["prelude::defined?"][":name"] = "defined?";
  newark["prelude::nil-vtable"] = newark["core::js"]["Object"]();
  x_0_1 = 0;
  newark["prelude::next-generic-id"] = (function () {
    var x_1_0;
    x_0_1 = (x_0_1 + 1);
    x_1_0 = ("GFN#" + x_0_1);
    return x_1_0;
  });
  newark["prelude::extend-generic*"] = (function (a_1_0, a_1_1, a_1_2) {
    var x_1_0, x_1_1, x_1_2, x_1_3;
    label_1_0:{
      x_1_2 = (a_1_1 == null);
      if (!(x_1_2 == null || x_1_2 === false)) {
        x_1_1 = newark["prelude::nil-vtable"];
      } else {
        x_1_3 = newark["prelude::fn?"](a_1_1);
        if (!(x_1_3 == null || x_1_3 === false)) {
          x_1_1 = a_1_1["prototype"];
        } else if (!(true == null || true === false)) {
          x_1_1 = a_1_1;
        } else {
          x_1_1 = null;
        };
      };
      x_1_1[a_1_0[":generic-id"]] = a_1_2;
    };
    return x_1_0;
  });
  newark["prelude::extend-generic*"][":name"] = "extend-generic*";
  x_0_4 = newark["prelude::next-generic-id"]();
  x_0_2 = (x_0_4 + ":" + "traverse");
  x_0_3 = (function (a_1_0, a_1_1) {
    var x_1_0, x_1_1, x_1_2, x_1_3, x_1_4;
    label_1_0:{
      x_1_3 = (a_1_1 == null);
      if (!(x_1_3 == null || x_1_3 === false)) {
        x_1_1 = newark["prelude::nil-vtable"];
      } else {
        x_1_1 = a_1_1;
      };
      x_1_4 = x_1_1[x_0_2];
      if (!(x_1_4 == null || x_1_4 === false)) {
        x_1_2 = x_1_4;
      } else {
        x_1_2 = x_0_3[":default"];
      };
      x_1_0 = x_1_2(a_1_0, a_1_1);
    };
    return x_1_0;
  });
  x_0_3[":name"] = "traverse";
  x_0_3[":generic-id"] = x_0_2;
  newark["prelude::traverse"] = x_0_3;
  x_0_5 = (function (a_1_0, a_1_1) {
    var x_1_0, x_1_1, x_1_2, x_1_3, x_1_4, x_1_5;
    x_1_1 = 0;
    x_1_2 = a_1_1;
    x_1_3 = x_1_2["length"];
    label_1_0:for(;;) {
      x_1_4 = (x_1_1 < x_1_3);
      if (!(x_1_4 == null || x_1_4 === false)) {
        x_1_5 = x_1_2[x_1_1];
        a_1_0(x_1_5);
        x_1_1 = (x_1_1 + 1);
      } else {
        x_1_0 = null;
        break label_1_0;
      };
    };
    return x_1_0;
  });
  newark["prelude::extend-generic*"](newark["prelude::traverse"], newark["core::js"]["Array"], x_0_5);
  x_0_6 = (function (a_1_0, a_1_1) {
    var x_1_0, x_1_1, x_1_2, x_1_3, x_1_4, x_1_5;
    x_1_1 = 0;
    x_1_2 = a_1_1;
    x_1_3 = x_1_2["length"];
    label_1_0:for(;;) {
      x_1_4 = (x_1_1 < x_1_3);
      if (!(x_1_4 == null || x_1_4 === false)) {
        x_1_5 = x_1_2[x_1_1];
        a_1_0(x_1_5);
        x_1_1 = (x_1_1 + 1);
      } else {
        x_1_0 = null;
        break label_1_0;
      };
    };
    return x_1_0;
  });
  newark["prelude::extend-generic*"](newark["prelude::traverse"], newark["core::js"]["String"], x_0_6);
  newark["prelude::get-name"] = (function (a_1_0) {
    var x_1_0, x_1_1;
    label_1_0:{
      if (!(a_1_0 == null || a_1_0 === false)) {
        x_1_1 = a_1_0["name"];
        if (!(x_1_1 == null || x_1_1 === false)) {
          x_1_0 = x_1_1;
        } else {
          x_1_0 = a_1_0[":name"];
        };
      } else {
        x_1_0 = null;
      };
    };
    return x_1_0;
  });
  newark["prelude::get-name"][":name"] = "get-name";
  newark["prelude::pr"] = (function () {
    var x_1_0, x_1_1;
    x_1_0 = [];
    x_1_0.length = arguments.length-0;
    for (var i = 0, ii = arguments.length; i<ii; i++) { 
      x_1_0[i-0] = arguments[i];
    };
    label_1_0:{
      x_1_1 = newark["prelude::represent-array"](x_1_0, newark["prelude::*out*"], true);
    };
    return x_1_1;
  });
  newark["prelude::pr"][":name"] = "pr";
  newark["prelude::prn"] = (function () {
    var x_1_0, x_1_1;
    x_1_0 = [];
    x_1_0.length = arguments.length-0;
    for (var i = 0, ii = arguments.length; i<ii; i++) { 
      x_1_0[i-0] = arguments[i];
    };
    label_1_0:{
      newark["prelude::represent-array"](x_1_0, newark["prelude::*out*"], true);
      x_1_1 = newark["prelude::*out*"]("\n");
    };
    return x_1_1;
  });
  newark["prelude::prn"][":name"] = "prn";
  newark["prelude::print"] = (function () {
    var x_1_0, x_1_1;
    x_1_0 = [];
    x_1_0.length = arguments.length-0;
    for (var i = 0, ii = arguments.length; i<ii; i++) { 
      x_1_0[i-0] = arguments[i];
    };
    label_1_0:{
      x_1_1 = newark["prelude::represent-array"](x_1_0, newark["prelude::*out*"], false);
    };
    return x_1_1;
  });
  newark["prelude::print"][":name"] = "print";
  newark["prelude::println"] = (function () {
    var x_1_0, x_1_1;
    x_1_0 = [];
    x_1_0.length = arguments.length-0;
    for (var i = 0, ii = arguments.length; i<ii; i++) { 
      x_1_0[i-0] = arguments[i];
    };
    label_1_0:{
      newark["prelude::represent-array"](x_1_0, newark["prelude::*out*"], false);
      x_1_1 = newark["prelude::*out*"]("\n");
    };
    return x_1_1;
  });
  newark["prelude::println"][":name"] = "println";
  x_0_7 = newark["prelude::defined?"](newark["core::js"]["process"]);
  if (!(x_0_7 == null || x_0_7 === false)) {
    newark["prelude::*out*"] = (function (a_1_0) {
      var x_1_0;
      x_1_0 = newark["core::js"]["process"]["stdout"]["write"](a_1_0);
      return x_1_0;
    });
  } else {
    x_0_8 = newark["prelude::defined?"](newark["core::js"]["console"]);
    if (!(x_0_8 == null || x_0_8 === false)) {
      newark["prelude::*out*"] = (function (a_1_0) {
        var x_1_0;
        x_1_0 = newark["core::js"]["console"]["log"](a_1_0);
        return x_1_0;
      });
    } else if (!(true == null || true === false)) {
      newark["prelude::*out*"] = (function () {
        var x_1_0;
        x_1_0 = null;
        return x_1_0;
      });
    } else {
      newark["prelude::*out*"] = null;
    };
  };
  newark["prelude::call-with-output-port"] = (function (a_1_0, a_1_1) {
    var x_1_0, x_1_1;
    label_1_0:{
      x_1_1 = newark["prelude::*out*"];
      try {
        newark["prelude::*out*"] = a_1_0;
        x_1_0 = a_1_1();
      } finally {
        newark["prelude::*out*"] = x_1_1;
      };
    };
    return x_1_0;
  });
  newark["prelude::call-with-output-port"][":name"] = "call-with-output-port";
  newark["prelude::pr-str"] = (function () {
    var x_1_0, x_1_1, x_1_2, x_1_3, x_1_4;
    x_1_0 = [];
    x_1_0.length = arguments.length-0;
    for (var i = 0, ii = arguments.length; i<ii; i++) { 
      x_1_0[i-0] = arguments[i];
    };
    label_1_0:{
      x_1_2 = [];
      x_1_3 = (function (a_2_0) {
        var x_2_0;
        x_2_0 = x_1_2["push"](a_2_0);
        return x_2_0;
      });
      x_1_4 = (function () {
        var x_2_0;
        x_2_0 = newark["prelude::pr"]["apply"](null, x_1_0);
        return x_2_0;
      });
      newark["prelude::call-with-output-port"](x_1_3, x_1_4);
      x_1_1 = x_1_2["join"]("");
    };
    return x_1_1;
  });
  newark["prelude::pr-str"][":name"] = "pr-str";
  newark["prelude::print-str"] = (function () {
    var x_1_0, x_1_1, x_1_2, x_1_3, x_1_4;
    x_1_0 = [];
    x_1_0.length = arguments.length-0;
    for (var i = 0, ii = arguments.length; i<ii; i++) { 
      x_1_0[i-0] = arguments[i];
    };
    label_1_0:{
      x_1_2 = [];
      x_1_3 = (function (a_2_0) {
        var x_2_0;
        x_2_0 = x_1_2["push"](a_2_0);
        return x_2_0;
      });
      x_1_4 = (function () {
        var x_2_0;
        x_2_0 = newark["prelude::print"]["apply"](null, x_1_0);
        return x_2_0;
      });
      newark["prelude::call-with-output-port"](x_1_3, x_1_4);
      x_1_1 = x_1_2["join"]("");
    };
    return x_1_1;
  });
  newark["prelude::print-str"][":name"] = "print-str";
  newark["prelude::*keyword-interns*"] = newark["core::js"]["Object"]();
  newark["prelude::List"] = (function (a_1_0, a_1_1, a_1_2) {
    var x_1_0, x_1_1, x_1_2;
    x_1_0 = this;
    x_1_2 = (x_1_0 instanceof newark["prelude::List"]);
    if (!(x_1_2 == null || x_1_2 === false)) {
      x_1_0["head"] = a_1_0;
      x_1_0["tail"] = a_1_1;
      x_1_0["size"] = a_1_2;
      x_1_1 = x_1_0;
    } else {
      x_1_1 = new newark["prelude::List"](a_1_0, a_1_1, a_1_2);
    };
    return x_1_1;
  });
  newark["prelude::List"][":name"] = "List";
  newark["prelude::Keyword"] = (function (a_1_0) {
    var x_1_0, x_1_1, x_1_2;
    x_1_0 = this;
    x_1_2 = (x_1_0 instanceof newark["prelude::Keyword"]);
    if (!(x_1_2 == null || x_1_2 === false)) {
      x_1_0["name"] = a_1_0;
      x_1_1 = x_1_0;
    } else {
      x_1_1 = new newark["prelude::Keyword"](a_1_0);
    };
    return x_1_1;
  });
  newark["prelude::Keyword"][":name"] = "Keyword";
  newark["prelude::Symbol"] = (function (a_1_0, a_1_1, a_1_2, a_1_3) {
    var x_1_0, x_1_1, x_1_2;
    x_1_0 = this;
    x_1_2 = (x_1_0 instanceof newark["prelude::Symbol"]);
    if (!(x_1_2 == null || x_1_2 === false)) {
      x_1_0["name"] = a_1_0;
      x_1_0["qualifier"] = a_1_1;
      x_1_0["child"] = a_1_2;
      x_1_0["tag"] = a_1_3;
      x_1_1 = x_1_0;
    } else {
      x_1_1 = new newark["prelude::Symbol"](a_1_0, a_1_1, a_1_2, a_1_3);
    };
    return x_1_1;
  });
  newark["prelude::Symbol"][":name"] = "Symbol";
  newark["prelude::Keyword"]["prototype"]["toString"] = (function () {
    var x_1_0, x_1_1;
    x_1_0 = this;
    x_1_1 = x_1_0["name"];
    return x_1_1;
  });
  newark["prelude::make-keyword"] = (function (a_1_0) {
    var x_1_0, x_1_1, x_1_2, x_1_3;
    label_1_0:{
      x_1_1 = (":" + a_1_0);
      x_1_2 = newark["prelude::*keyword-interns*"][x_1_1];
      if (!(x_1_2 == null || x_1_2 === false)) {
        x_1_0 = x_1_2;
      } else {
        x_1_3 = new newark["prelude::Keyword"](a_1_0);
        newark["prelude::*keyword-interns*"][x_1_1] = x_1_3;
        x_1_0 = x_1_3;
      };
    };
    return x_1_0;
  });
  newark["prelude::make-keyword"][":name"] = "make-keyword";
  newark["prelude::make-symbol"] = (function (a_1_0) {
    var x_1_0;
    label_1_0:{
      x_1_0 = new newark["prelude::Symbol"](a_1_0, null, null, null);
    };
    return x_1_0;
  });
  newark["prelude::make-symbol"][":name"] = "make-symbol";
  newark["prelude::make-qualified-symbol"] = (function (a_1_0, a_1_1) {
    var x_1_0;
    label_1_0:{
      x_1_0 = new newark["prelude::Symbol"](a_1_1, a_1_0, null, null);
    };
    return x_1_0;
  });
  newark["prelude::make-qualified-symbol"][":name"] = "make-qualified-symbol";
  newark["prelude::make-tagged-symbol"] = (function (a_1_0, a_1_1) {
    var x_1_0;
    label_1_0:{
      x_1_0 = new newark["prelude::Symbol"](a_1_0["name"], null, a_1_0, a_1_1);
    };
    return x_1_0;
  });
  newark["prelude::make-tagged-symbol"][":name"] = "make-tagged-symbol";
  newark["prelude::keyword?"] = (function (a_1_0) {
    var x_1_0;
    label_1_0:{
      x_1_0 = (a_1_0 instanceof newark["prelude::Keyword"]);
    };
    return x_1_0;
  });
  newark["prelude::keyword?"][":name"] = "keyword?";
  newark["prelude::symbol?"] = (function (a_1_0) {
    var x_1_0;
    label_1_0:{
      x_1_0 = (a_1_0 instanceof newark["prelude::Symbol"]);
    };
    return x_1_0;
  });
  newark["prelude::symbol?"][":name"] = "symbol?";
  newark["prelude::qualified-symbol?"] = (function (a_1_0) {
    var x_1_0, x_1_1, x_1_2;
    label_1_0:{
      x_1_1 = (a_1_0 instanceof newark["prelude::Symbol"]);
      if (!(x_1_1 == null || x_1_1 === false)) {
        x_1_2 = (a_1_0["qualifier"] == null);
        x_1_0 = newark["prelude::not"](x_1_2);
      } else {
        x_1_0 = x_1_1;
      };
    };
    return x_1_0;
  });
  newark["prelude::qualified-symbol?"][":name"] = "qualified-symbol?";
  newark["prelude::tagged-symbol?"] = (function (a_1_0) {
    var x_1_0, x_1_1, x_1_2;
    label_1_0:{
      x_1_1 = (a_1_0 instanceof newark["prelude::Symbol"]);
      if (!(x_1_1 == null || x_1_1 === false)) {
        x_1_2 = (a_1_0["tag"] == null);
        x_1_0 = newark["prelude::not"](x_1_2);
      } else {
        x_1_0 = x_1_1;
      };
    };
    return x_1_0;
  });
  newark["prelude::tagged-symbol?"][":name"] = "tagged-symbol?";
  newark["prelude::list?"] = (function (a_1_0) {
    var x_1_0;
    label_1_0:{
      x_1_0 = (a_1_0 instanceof newark["prelude::List"]);
    };
    return x_1_0;
  });
  newark["prelude::list?"][":name"] = "list?";
  x_0_9 = newark["core::js"]["Array"]["isArray"];
  if (!(x_0_9 == null || x_0_9 === false)) {
    newark["prelude::array?"] = x_0_9;
  } else {
    newark["prelude::array?"] = (function (a_1_0) {
      var x_1_0;
      x_1_0 = (a_1_0 instanceof newark["core::js"]["Array"]);
      return x_1_0;
    });
  };
  newark["prelude::string?"] = (function (a_1_0) {
    var x_1_0, x_1_1;
    label_1_0:{
      x_1_1 = (typeof a_1_0);
      x_1_0 = (x_1_1 === "string");
    };
    return x_1_0;
  });
  newark["prelude::string?"][":name"] = "string?";
  newark["prelude::number?"] = (function (a_1_0) {
    var x_1_0, x_1_1;
    label_1_0:{
      x_1_1 = (typeof a_1_0);
      x_1_0 = (x_1_1 === "number");
    };
    return x_1_0;
  });
  newark["prelude::number?"][":name"] = "number?";
  newark["prelude::boolean?"] = (function (a_1_0) {
    var x_1_0, x_1_1;
    label_1_0:{
      x_1_1 = (typeof a_1_0);
      x_1_0 = (x_1_1 === "boolean");
    };
    return x_1_0;
  });
  newark["prelude::boolean?"][":name"] = "boolean?";
  newark["prelude::fn?"] = (function (a_1_0) {
    var x_1_0, x_1_1;
    label_1_0:{
      x_1_1 = (typeof a_1_0);
      x_1_0 = (x_1_1 === "function");
    };
    return x_1_0;
  });
  newark["prelude::fn?"][":name"] = "fn?";
  newark["prelude::get-typename"] = (function (a_1_0) {
    var x_1_0, x_1_1, x_1_2, x_1_3, x_1_4, x_1_5;
    label_1_0:{
      x_1_1 = a_1_0["constructor"];
      if (!(x_1_1 == null || x_1_1 === false)) {
        x_1_3 = x_1_1[":name"];
        if (!(x_1_3 == null || x_1_3 === false)) {
          x_1_2 = x_1_3;
        } else {
          x_1_2 = x_1_1["name"];
        };
      } else {
        x_1_2 = null;
      };
      x_1_5 = x_1_2;
      if (!(x_1_5 == null || x_1_5 === false)) {
        x_1_4 = x_1_5;
      } else {
        x_1_4 = "Object";
      };
      x_1_0 = x_1_4;
    };
    return x_1_0;
  });
  newark["prelude::get-typename"][":name"] = "get-typename";
  newark["prelude::represent-properties"] = (function (a_1_0, a_1_1, a_1_2) {
    var x_1_0, x_1_1, x_1_2, x_1_3, x_1_4;
    label_1_0:{
      x_1_1 = false;
      label_1_1:for(x_1_2 in a_1_0) {
        x_1_3 = a_1_0["hasOwnProperty"](x_1_2);
        if (!(x_1_3 == null || x_1_3 === false)) {
          if (!(x_1_1 == null || x_1_1 === false)) {
            a_1_1(", ");
          } else {
            x_1_1 = true;
          };
          x_1_4 = newark["core::js"]["JSON"]["stringify"](x_1_2);
          a_1_1(x_1_4);
          a_1_1(": ");
          x_1_0 = newark["prelude::represent"](a_1_0[x_1_2], a_1_1, a_1_2);
        } else {
          x_1_0 = null;
        };
      };
    };
    return x_1_0;
  });
  newark["prelude::represent-properties"][":name"] = "represent-properties";
  newark["prelude::represent-object"] = (function (a_1_0, a_1_1, a_1_2) {
    var x_1_0, x_1_1, x_1_2, x_1_3, x_1_4;
    label_1_0:{
      x_1_1 = a_1_0["constructor"];
      x_1_3 = (x_1_1 === newark["core::js"]["Object"]);
      if (!(x_1_3 == null || x_1_3 === false)) {
        x_1_2 = x_1_3;
      } else {
        x_1_2 = newark["prelude::not"](x_1_1);
      };
      if (!(x_1_2 == null || x_1_2 === false)) {
        a_1_1("#{");
        newark["prelude::represent-properties"](a_1_0, a_1_1, a_1_2);
        x_1_0 = a_1_1("}");
      } else {
        a_1_1("#<");
        x_1_4 = newark["prelude::get-typename"](a_1_0);
        a_1_1(x_1_4);
        a_1_1(" ");
        newark["prelude::represent-properties"](a_1_0, a_1_1, a_1_2);
        x_1_0 = a_1_1(">");
      };
    };
    return x_1_0;
  });
  newark["prelude::represent-object"][":name"] = "represent-object";
  newark["prelude::represent-array"] = (function (a_1_0, a_1_1, a_1_2) {
    var x_1_0, x_1_1, x_1_2, x_1_3, x_1_4, x_1_5, x_1_6;
    label_1_0:{
      x_1_1 = false;
      x_1_2 = 0;
      x_1_3 = a_1_0;
      x_1_4 = x_1_3["length"];
      label_1_1:for(;;) {
        x_1_5 = (x_1_2 < x_1_4);
        if (!(x_1_5 == null || x_1_5 === false)) {
          x_1_6 = x_1_3[x_1_2];
          if (!(x_1_1 == null || x_1_1 === false)) {
            a_1_1(" ");
          } else {
            x_1_1 = true;
          };
          newark["prelude::represent"](x_1_6, a_1_1, a_1_2);
          x_1_2 = (x_1_2 + 1);
        } else {
          x_1_0 = null;
          break label_1_1;
        };
      };
    };
    return x_1_0;
  });
  newark["prelude::represent-array"][":name"] = "represent-array";
  x_0_12 = newark["prelude::next-generic-id"]();
  x_0_10 = (x_0_12 + ":" + "represent");
  x_0_11 = (function (a_1_0, a_1_1, a_1_2) {
    var x_1_0, x_1_1, x_1_2, x_1_3, x_1_4;
    label_1_0:{
      x_1_3 = (a_1_0 == null);
      if (!(x_1_3 == null || x_1_3 === false)) {
        x_1_1 = newark["prelude::nil-vtable"];
      } else {
        x_1_1 = a_1_0;
      };
      x_1_4 = x_1_1[x_0_10];
      if (!(x_1_4 == null || x_1_4 === false)) {
        x_1_2 = x_1_4;
      } else {
        x_1_2 = x_0_11[":default"];
      };
      x_1_0 = x_1_2(a_1_0, a_1_1, a_1_2);
    };
    return x_1_0;
  });
  x_0_11[":name"] = "represent";
  x_0_11[":generic-id"] = x_0_10;
  newark["prelude::represent"] = x_0_11;
  newark["prelude::represent"][":default"] = newark["prelude::represent-object"];
  x_0_13 = (function (a_1_0, a_1_1, a_1_2) {
    var x_1_0;
    x_1_0 = a_1_1("#nil");
    return x_1_0;
  });
  newark["prelude::extend-generic*"](newark["prelude::represent"], null, x_0_13);
  x_0_14 = (function (a_1_0, a_1_1, a_1_2) {
    var x_1_0;
    if (!(a_1_0 == null || a_1_0 === false)) {
      x_1_0 = a_1_1("#t");
    } else {
      x_1_0 = a_1_1("#f");
    };
    return x_1_0;
  });
  newark["prelude::extend-generic*"](newark["prelude::represent"], newark["core::js"]["Boolean"], x_0_14);
  x_0_15 = (function (a_1_0, a_1_1, a_1_2) {
    var x_1_0, x_1_1;
    if (!(a_1_2 == null || a_1_2 === false)) {
      x_1_1 = newark["core::js"]["JSON"]["stringify"](a_1_0);
    } else {
      x_1_1 = a_1_0;
    };
    x_1_0 = a_1_1(x_1_1);
    return x_1_0;
  });
  newark["prelude::extend-generic*"](newark["prelude::represent"], newark["core::js"]["String"], x_0_15);
  x_0_16 = (function (a_1_0, a_1_1, a_1_2) {
    var x_1_0, x_1_1, x_1_2, x_1_3;
    x_1_2 = (a_1_0 === a_1_0);
    x_1_1 = newark["prelude::not"](x_1_2);
    if (!(x_1_1 == null || x_1_1 === false)) {
      x_1_0 = a_1_1("#NaN");
    } else {
      x_1_3 = ("" + a_1_0);
      x_1_0 = a_1_1(x_1_3);
    };
    return x_1_0;
  });
  newark["prelude::extend-generic*"](newark["prelude::represent"], newark["core::js"]["Number"], x_0_16);
  x_0_17 = (function (a_1_0, a_1_1, a_1_2) {
    var x_1_0;
    a_1_1("[");
    newark["prelude::represent-array"](a_1_0, a_1_1, a_1_2);
    x_1_0 = a_1_1("]");
    return x_1_0;
  });
  newark["prelude::extend-generic*"](newark["prelude::represent"], newark["core::js"]["Array"], x_0_17);
  x_0_18 = (function (a_1_0, a_1_1, a_1_2) {
    var x_1_0, x_1_1, x_1_2;
    x_1_1 = newark["prelude::get-name"](a_1_0);
    if (!(x_1_1 == null || x_1_1 === false)) {
      x_1_2 = ("<fn:" + x_1_1 + ">");
    } else {
      x_1_2 = "<fn>";
    };
    x_1_0 = a_1_1(x_1_2);
    return x_1_0;
  });
  newark["prelude::extend-generic*"](newark["prelude::represent"], newark["core::js"]["Function"], x_0_18);
  x_0_19 = (function (a_1_0, a_1_1, a_1_2) {
    var x_1_0, x_1_1, x_1_2;
    x_1_1 = newark["prelude::qualified-symbol?"](a_1_0);
    if (!(x_1_1 == null || x_1_1 === false)) {
      a_1_1(a_1_0["qualifier"]);
      a_1_1("::");
      x_1_0 = a_1_1(a_1_0["name"]);
    } else {
      x_1_2 = newark["prelude::tagged-symbol?"](a_1_0);
      if (!(x_1_2 == null || x_1_2 === false)) {
        x_1_0 = newark["prelude::represent"](a_1_0["child"], a_1_1, a_1_2);
      } else if (!(true == null || true === false)) {
        x_1_0 = a_1_1(a_1_0["name"]);
      } else {
        x_1_0 = null;
      };
    };
    return x_1_0;
  });
  newark["prelude::extend-generic*"](newark["prelude::represent"], newark["prelude::Symbol"], x_0_19);
  x_0_20 = (function (a_1_0, a_1_1, a_1_2) {
    var x_1_0, x_1_1;
    x_1_1 = (":" + a_1_0["name"]);
    x_1_0 = a_1_1(x_1_1);
    return x_1_0;
  });
  newark["prelude::extend-generic*"](newark["prelude::represent"], newark["prelude::Keyword"], x_0_20);
  x_0_21 = (function (a_1_0, a_1_1, a_1_2) {
    var x_1_0, x_1_1;
    a_1_1("(");
    x_1_1 = newark["prelude::list->array"](a_1_0);
    newark["prelude::represent-array"](x_1_1, a_1_1, a_1_2);
    x_1_0 = a_1_1(")");
    return x_1_0;
  });
  newark["prelude::extend-generic*"](newark["prelude::represent"], newark["prelude::List"], x_0_21);
  newark["prelude::array->list"] = (function (a_1_0) {
    var x_1_0, x_1_1, x_1_2, x_1_3, x_1_4;
    label_1_0:{
      x_1_1 = new newark["prelude::List"](null, null, 0);
      x_1_2 = 0;
      x_1_3 = a_1_0["length"];
      label_1_1:for(;;) {
        x_1_4 = (x_1_3 === 0);
        if (!(x_1_4 == null || x_1_4 === false)) {
          x_1_0 = x_1_1;
          break label_1_1;
        } else {
          x_1_3 = (x_1_3 - 1);
          x_1_2 = (x_1_2 + 1);
          x_1_1 = new newark["prelude::List"](a_1_0[x_1_3], x_1_1, x_1_2);
        };
      };
    };
    return x_1_0;
  });
  newark["prelude::array->list"][":name"] = "array->list";
  newark["prelude::list->array"] = (function (a_1_0) {
    var x_1_0, x_1_1, x_1_2, x_1_3, x_1_4, x_1_5, x_1_6;
    label_1_0:{
      x_1_1 = [];
      x_1_2 = a_1_0["size"];
      x_1_3 = 0;
      x_1_1["length"] = x_1_2;
      x_1_4 = a_1_0;
      label_1_1:for(;;) {
        x_1_5 = (x_1_4["size"] === 0);
        if (!(x_1_5 == null || x_1_5 === false)) {
          break label_1_1;
        };
        x_1_6 = x_1_4["head"];
        x_1_1[x_1_3] = x_1_6;
        x_1_3 = (x_1_3 + 1);
        x_1_4 = x_1_4["tail"];
      };
      x_1_0 = x_1_1;
    };
    return x_1_0;
  });
  newark["prelude::list->array"][":name"] = "list->array";
  x_0_24 = newark["prelude::next-generic-id"]();
  x_0_22 = (x_0_24 + ":" + "to-array");
  x_0_23 = (function (a_1_0) {
    var x_1_0, x_1_1, x_1_2, x_1_3, x_1_4;
    label_1_0:{
      x_1_3 = (a_1_0 == null);
      if (!(x_1_3 == null || x_1_3 === false)) {
        x_1_1 = newark["prelude::nil-vtable"];
      } else {
        x_1_1 = a_1_0;
      };
      x_1_4 = x_1_1[x_0_22];
      if (!(x_1_4 == null || x_1_4 === false)) {
        x_1_2 = x_1_4;
      } else {
        x_1_2 = x_0_23[":default"];
      };
      x_1_0 = x_1_2(a_1_0);
    };
    return x_1_0;
  });
  x_0_23[":name"] = "to-array";
  x_0_23[":generic-id"] = x_0_22;
  newark["prelude::to-array"] = x_0_23;
  x_0_25 = (function (a_1_0) {
    var x_1_0;
    x_1_0 = a_1_0;
    return x_1_0;
  });
  newark["prelude::extend-generic*"](newark["prelude::to-array"], newark["core::js"]["Array"], x_0_25);
  x_0_26 = (function (a_1_0) {
    var x_1_0;
    x_1_0 = newark["core::js"]["Array"]["prototype"]["slice"]["call"](a_1_0);
    return x_1_0;
  });
  newark["prelude::extend-generic*"](newark["prelude::to-array"], newark["core::js"]["String"], x_0_26);
  newark["prelude::extend-generic*"](newark["prelude::to-array"], newark["prelude::List"], newark["prelude::list->array"]);
  x_0_29 = newark["prelude::next-generic-id"]();
  x_0_27 = (x_0_29 + ":" + "from-array");
  x_0_28 = (function (a_1_0, a_1_1) {
    var x_1_0, x_1_1, x_1_2, x_1_3, x_1_4;
    label_1_0:{
      x_1_3 = (a_1_0 == null);
      if (!(x_1_3 == null || x_1_3 === false)) {
        x_1_1 = newark["prelude::nil-vtable"];
      } else {
        x_1_1 = a_1_0;
      };
      x_1_4 = x_1_1[x_0_27];
      if (!(x_1_4 == null || x_1_4 === false)) {
        x_1_2 = x_1_4;
      } else {
        x_1_2 = x_0_28[":default"];
      };
      x_1_0 = x_1_2(a_1_0, a_1_1);
    };
    return x_1_0;
  });
  x_0_28[":name"] = "from-array";
  x_0_28[":generic-id"] = x_0_27;
  newark["prelude::from-array"] = x_0_28;
  x_0_30 = (function (a_1_0, a_1_1) {
    var x_1_0;
    x_1_0 = a_1_1["slice"]();
    return x_1_0;
  });
  newark["prelude::extend-generic*"](newark["prelude::from-array"], newark["core::js"]["Array"], x_0_30);
  x_0_31 = (function (a_1_0, a_1_1) {
    var x_1_0;
    x_1_0 = a_1_1["join"]("");
    return x_1_0;
  });
  newark["prelude::extend-generic*"](newark["prelude::from-array"], newark["core::js"]["String"], x_0_31);
  x_0_32 = (function (a_1_0, a_1_1) {
    var x_1_0;
    x_1_0 = newark["prelude::array->list"](a_1_1);
    return x_1_0;
  });
  newark["prelude::extend-generic*"](newark["prelude::from-array"], newark["prelude::List"], x_0_32);
  x_0_35 = newark["prelude::next-generic-id"]();
  x_0_33 = (x_0_35 + ":" + "len");
  x_0_34 = (function (a_1_0) {
    var x_1_0, x_1_1, x_1_2, x_1_3, x_1_4;
    label_1_0:{
      x_1_3 = (a_1_0 == null);
      if (!(x_1_3 == null || x_1_3 === false)) {
        x_1_1 = newark["prelude::nil-vtable"];
      } else {
        x_1_1 = a_1_0;
      };
      x_1_4 = x_1_1[x_0_33];
      if (!(x_1_4 == null || x_1_4 === false)) {
        x_1_2 = x_1_4;
      } else {
        x_1_2 = x_0_34[":default"];
      };
      x_1_0 = x_1_2(a_1_0);
    };
    return x_1_0;
  });
  x_0_34[":name"] = "len";
  x_0_34[":generic-id"] = x_0_33;
  newark["prelude::len"] = x_0_34;
  x_0_36 = (function (a_1_0) {
    var x_1_0;
    x_1_0 = a_1_0["length"];
    return x_1_0;
  });
  newark["prelude::extend-generic*"](newark["prelude::len"], newark["core::js"]["Array"], x_0_36);
  x_0_37 = (function (a_1_0) {
    var x_1_0;
    x_1_0 = a_1_0["length"];
    return x_1_0;
  });
  newark["prelude::extend-generic*"](newark["prelude::len"], newark["core::js"]["String"], x_0_37);
  x_0_38 = (function (a_1_0) {
    var x_1_0;
    x_1_0 = a_1_0["size"];
    return x_1_0;
  });
  newark["prelude::extend-generic*"](newark["prelude::len"], newark["prelude::List"], x_0_38);
  newark["prelude::reverse-array"] = (function (a_1_0) {
    var x_1_0, x_1_1, x_1_2, x_1_3, x_1_4, x_1_5, x_1_6, x_1_7;
    label_1_0:{
      x_1_1 = a_1_0["length"];
      x_1_2 = [];
      x_1_2["length"] = x_1_1;
      x_1_3 = 0;
      x_1_4 = x_1_1;
      label_1_1:for(;;) {
        x_1_5 = (x_1_3 >= x_1_4);
        if (!(x_1_5 == null || x_1_5 === false)) {
          break label_1_1;
        };
        x_1_6 = x_1_3;
        x_1_7 = (x_1_1 - x_1_6 - 1);
        x_1_2[x_1_6] = a_1_0[x_1_7];
        x_1_3 = (x_1_3 + 1);
      };
      x_1_0 = x_1_2;
    };
    return x_1_0;
  });
  newark["prelude::reverse-array"][":name"] = "reverse-array";
  x_0_41 = newark["prelude::next-generic-id"]();
  x_0_39 = (x_0_41 + ":" + "reverse");
  x_0_40 = (function (a_1_0) {
    var x_1_0, x_1_1, x_1_2, x_1_3, x_1_4;
    label_1_0:{
      x_1_3 = (a_1_0 == null);
      if (!(x_1_3 == null || x_1_3 === false)) {
        x_1_1 = newark["prelude::nil-vtable"];
      } else {
        x_1_1 = a_1_0;
      };
      x_1_4 = x_1_1[x_0_39];
      if (!(x_1_4 == null || x_1_4 === false)) {
        x_1_2 = x_1_4;
      } else {
        x_1_2 = x_0_40[":default"];
      };
      x_1_0 = x_1_2(a_1_0);
    };
    return x_1_0;
  });
  x_0_40[":name"] = "reverse";
  x_0_40[":generic-id"] = x_0_39;
  newark["prelude::reverse"] = x_0_40;
  newark["prelude::extend-generic*"](newark["prelude::reverse"], newark["core::js"]["Array"], newark["prelude::reverse-array"]);
  x_0_42 = (function (a_1_0) {
    var x_1_0, x_1_1;
    x_1_1 = newark["prelude::reverse-array"](a_1_0);
    x_1_0 = x_1_1["join"]("");
    return x_1_0;
  });
  newark["prelude::extend-generic*"](newark["prelude::reverse"], newark["core::js"]["String"], x_0_42);
  x_0_43 = (function (a_1_0) {
    var x_1_0, x_1_1, x_1_2, x_1_3, x_1_4;
    x_1_1 = newark["prelude::list"]();
    x_1_2 = a_1_0;
    label_1_0:for(;;) {
      x_1_3 = (x_1_2["size"] === 0);
      if (!(x_1_3 == null || x_1_3 === false)) {
        break label_1_0;
      };
      x_1_4 = x_1_2["head"];
      x_1_1 = newark["prelude::cons"](x_1_4, x_1_1);
      x_1_2 = x_1_2["tail"];
    };
    x_1_0 = x_1_1;
    return x_1_0;
  });
  newark["prelude::extend-generic*"](newark["prelude::reverse"], newark["prelude::List"], x_0_43);
  x_0_46 = newark["prelude::next-generic-id"]();
  x_0_44 = (x_0_46 + ":" + "empty?");
  x_0_45 = (function (a_1_0) {
    var x_1_0, x_1_1, x_1_2, x_1_3, x_1_4;
    label_1_0:{
      x_1_3 = (a_1_0 == null);
      if (!(x_1_3 == null || x_1_3 === false)) {
        x_1_1 = newark["prelude::nil-vtable"];
      } else {
        x_1_1 = a_1_0;
      };
      x_1_4 = x_1_1[x_0_44];
      if (!(x_1_4 == null || x_1_4 === false)) {
        x_1_2 = x_1_4;
      } else {
        x_1_2 = x_0_45[":default"];
      };
      x_1_0 = x_1_2(a_1_0);
    };
    return x_1_0;
  });
  x_0_45[":name"] = "empty?";
  x_0_45[":generic-id"] = x_0_44;
  newark["prelude::empty?"] = x_0_45;
  x_0_47 = (function (a_1_0) {
    var x_1_0;
    x_1_0 = true;
    return x_1_0;
  });
  newark["prelude::extend-generic*"](newark["prelude::empty?"], null, x_0_47);
  x_0_48 = (function (a_1_0) {
    var x_1_0;
    x_1_0 = (a_1_0["length"] === 0);
    return x_1_0;
  });
  newark["prelude::extend-generic*"](newark["prelude::empty?"], newark["core::js"]["Array"], x_0_48);
  x_0_49 = (function (a_1_0) {
    var x_1_0;
    x_1_0 = (a_1_0["length"] === 0);
    return x_1_0;
  });
  newark["prelude::extend-generic*"](newark["prelude::empty?"], newark["core::js"]["String"], x_0_49);
  x_0_50 = (function (a_1_0) {
    var x_1_0;
    x_1_0 = (a_1_0["size"] === 0);
    return x_1_0;
  });
  newark["prelude::extend-generic*"](newark["prelude::empty?"], newark["prelude::List"], x_0_50);
  x_0_53 = newark["prelude::next-generic-id"]();
  x_0_51 = (x_0_53 + ":" + "rest");
  x_0_52 = (function (a_1_0) {
    var x_1_0, x_1_1, x_1_2, x_1_3, x_1_4;
    label_1_0:{
      x_1_3 = (a_1_0 == null);
      if (!(x_1_3 == null || x_1_3 === false)) {
        x_1_1 = newark["prelude::nil-vtable"];
      } else {
        x_1_1 = a_1_0;
      };
      x_1_4 = x_1_1[x_0_51];
      if (!(x_1_4 == null || x_1_4 === false)) {
        x_1_2 = x_1_4;
      } else {
        x_1_2 = x_0_52[":default"];
      };
      x_1_0 = x_1_2(a_1_0);
    };
    return x_1_0;
  });
  x_0_52[":name"] = "rest";
  x_0_52[":generic-id"] = x_0_51;
  newark["prelude::rest"] = x_0_52;
  x_0_54 = (function (a_1_0) {
    var x_1_0;
    x_1_0 = a_1_0["slice"](1);
    return x_1_0;
  });
  newark["prelude::extend-generic*"](newark["prelude::rest"], newark["core::js"]["Array"], x_0_54);
  x_0_55 = (function (a_1_0) {
    var x_1_0;
    x_1_0 = a_1_0["substring"](1);
    return x_1_0;
  });
  newark["prelude::extend-generic*"](newark["prelude::rest"], newark["core::js"]["String"], x_0_55);
  x_0_56 = (function (a_1_0) {
    var x_1_0, x_1_1;
    x_1_1 = (a_1_0["size"] === 0);
    if (!(x_1_1 == null || x_1_1 === false)) {
      x_1_0 = a_1_0;
    } else {
      x_1_0 = a_1_0["tail"];
    };
    return x_1_0;
  });
  newark["prelude::extend-generic*"](newark["prelude::rest"], newark["prelude::List"], x_0_56);
  newark["prelude::rest"][":default"] = (function (a_1_0) {
    var x_1_0;
    x_1_0 = newark["prelude::drop"](1, a_1_0);
    return x_1_0;
  });
  x_0_59 = newark["prelude::next-generic-id"]();
  x_0_57 = (x_0_59 + ":" + "first");
  x_0_58 = (function (a_1_0) {
    var x_1_0, x_1_1, x_1_2, x_1_3, x_1_4;
    label_1_0:{
      x_1_3 = (a_1_0 == null);
      if (!(x_1_3 == null || x_1_3 === false)) {
        x_1_1 = newark["prelude::nil-vtable"];
      } else {
        x_1_1 = a_1_0;
      };
      x_1_4 = x_1_1[x_0_57];
      if (!(x_1_4 == null || x_1_4 === false)) {
        x_1_2 = x_1_4;
      } else {
        x_1_2 = x_0_58[":default"];
      };
      x_1_0 = x_1_2(a_1_0);
    };
    return x_1_0;
  });
  x_0_58[":name"] = "first";
  x_0_58[":generic-id"] = x_0_57;
  newark["prelude::first"] = x_0_58;
  x_0_60 = (function (a_1_0) {
    var x_1_0;
    x_1_0 = a_1_0[0];
    return x_1_0;
  });
  newark["prelude::extend-generic*"](newark["prelude::first"], newark["core::js"]["Array"], x_0_60);
  x_0_61 = (function (a_1_0) {
    var x_1_0;
    x_1_0 = a_1_0[0];
    return x_1_0;
  });
  newark["prelude::extend-generic*"](newark["prelude::first"], newark["core::js"]["String"], x_0_61);
  x_0_62 = (function (a_1_0) {
    var x_1_0;
    x_1_0 = a_1_0["head"];
    return x_1_0;
  });
  newark["prelude::extend-generic*"](newark["prelude::first"], newark["prelude::List"], x_0_62);
  newark["prelude::first"][":default"] = (function (a_1_0) {
    var x_1_0, x_1_1;
    x_1_1 = newark["prelude::to-array"](a_1_0);
    x_1_0 = x_1_1[0];
    return x_1_0;
  });
  x_0_65 = newark["prelude::next-generic-id"]();
  x_0_63 = (x_0_65 + ":" + "nth");
  x_0_64 = (function (a_1_0, a_1_1) {
    var x_1_0, x_1_1, x_1_2, x_1_3, x_1_4;
    label_1_0:{
      x_1_3 = (a_1_0 == null);
      if (!(x_1_3 == null || x_1_3 === false)) {
        x_1_1 = newark["prelude::nil-vtable"];
      } else {
        x_1_1 = a_1_0;
      };
      x_1_4 = x_1_1[x_0_63];
      if (!(x_1_4 == null || x_1_4 === false)) {
        x_1_2 = x_1_4;
      } else {
        x_1_2 = x_0_64[":default"];
      };
      x_1_0 = x_1_2(a_1_0, a_1_1);
    };
    return x_1_0;
  });
  x_0_64[":name"] = "nth";
  x_0_64[":generic-id"] = x_0_63;
  newark["prelude::nth"] = x_0_64;
  x_0_66 = (function (a_1_0, a_1_1) {
    var x_1_0, x_1_1;
    x_1_1 = (a_1_1 - 1);
    x_1_0 = a_1_0[x_1_1];
    return x_1_0;
  });
  newark["prelude::extend-generic*"](newark["prelude::nth"], newark["core::js"]["Array"], x_0_66);
  x_0_67 = (function (a_1_0, a_1_1) {
    var x_1_0, x_1_1;
    x_1_1 = (a_1_1 - 1);
    x_1_0 = a_1_0[x_1_1];
    return x_1_0;
  });
  newark["prelude::extend-generic*"](newark["prelude::nth"], newark["core::js"]["String"], x_0_67);
  x_0_68 = (function (a_1_0, a_1_1) {
    var x_1_0, x_1_1, x_1_2, x_1_3, x_1_4, x_1_5, x_1_6;
    x_1_1 = (a_1_1 <= a_1_0["size"]);
    if (!(x_1_1 == null || x_1_1 === false)) {
      label_1_0:{
        x_1_2 = 1;
        x_1_3 = a_1_0;
        label_1_1:for(;;) {
          x_1_4 = (x_1_3["size"] === 0);
          if (!(x_1_4 == null || x_1_4 === false)) {
            x_1_0 = null;
            break label_1_1;
          };
          x_1_5 = x_1_3["head"];
          x_1_6 = (x_1_2 === a_1_1);
          if (!(x_1_6 == null || x_1_6 === false)) {
            x_1_0 = x_1_5;
            break label_1_0;
          } else {
            x_1_2 = (x_1_2 + 1);
          };
          x_1_3 = x_1_3["tail"];
        };
      };
    } else {
      x_1_0 = null;
    };
    return x_1_0;
  });
  newark["prelude::extend-generic*"](newark["prelude::nth"], newark["prelude::List"], x_0_68);
  newark["prelude::nth"][":default"] = (function (a_1_0, a_1_1) {
    var x_1_0, x_1_1, x_1_2;
    x_1_1 = newark["prelude::to-array"](a_1_0);
    x_1_2 = (a_1_1 - 1);
    x_1_0 = x_1_1[x_1_2];
    return x_1_0;
  });
  newark["prelude::second"] = (function (a_1_0) {
    var x_1_0;
    label_1_0:{
      x_1_0 = newark["prelude::nth"](a_1_0, 2);
    };
    return x_1_0;
  });
  newark["prelude::second"][":name"] = "second";
  newark["prelude::third"] = (function (a_1_0) {
    var x_1_0;
    label_1_0:{
      x_1_0 = newark["prelude::nth"](a_1_0, 3);
    };
    return x_1_0;
  });
  newark["prelude::third"][":name"] = "third";
  newark["prelude::fourth"] = (function (a_1_0) {
    var x_1_0;
    label_1_0:{
      x_1_0 = newark["prelude::nth"](a_1_0, 4);
    };
    return x_1_0;
  });
  newark["prelude::fourth"][":name"] = "fourth";
  newark["prelude::fifth"] = (function (a_1_0) {
    var x_1_0;
    label_1_0:{
      x_1_0 = newark["prelude::nth"](a_1_0, 5);
    };
    return x_1_0;
  });
  newark["prelude::fifth"][":name"] = "fifth";
  newark["prelude::sixth"] = (function (a_1_0) {
    var x_1_0;
    label_1_0:{
      x_1_0 = newark["prelude::nth"](a_1_0, 6);
    };
    return x_1_0;
  });
  newark["prelude::sixth"][":name"] = "sixth";
  newark["prelude::seventh"] = (function (a_1_0) {
    var x_1_0;
    label_1_0:{
      x_1_0 = newark["prelude::nth"](a_1_0, 7);
    };
    return x_1_0;
  });
  newark["prelude::seventh"][":name"] = "seventh";
  newark["prelude::eighth"] = (function (a_1_0) {
    var x_1_0;
    label_1_0:{
      x_1_0 = newark["prelude::nth"](a_1_0, 8);
    };
    return x_1_0;
  });
  newark["prelude::eighth"][":name"] = "eighth";
  newark["prelude::ninth"] = (function (a_1_0) {
    var x_1_0;
    label_1_0:{
      x_1_0 = newark["prelude::nth"](a_1_0, 9);
    };
    return x_1_0;
  });
  newark["prelude::ninth"][":name"] = "ninth";
  newark["prelude::map"] = (function (a_1_0, a_1_1) {
    var x_1_0, x_1_1, x_1_2, x_1_3, x_1_4, x_1_5, x_1_6, x_1_7;
    label_1_0:{
      x_1_1 = newark["prelude::to-array"](a_1_1);
      x_1_2 = [];
      x_1_2["length"] = x_1_1["length"];
      x_1_3 = 0;
      x_1_4 = x_1_1;
      x_1_5 = x_1_4["length"];
      label_1_1:for(;;) {
        x_1_6 = (x_1_3 < x_1_5);
        if (!(x_1_6 == null || x_1_6 === false)) {
          x_1_7 = x_1_4[x_1_3];
          x_1_2[x_1_3] = a_1_0(x_1_7);
          x_1_3 = (x_1_3 + 1);
        } else {
          break label_1_1;
        };
      };
      x_1_0 = newark["prelude::from-array"](a_1_1, x_1_2);
    };
    return x_1_0;
  });
  newark["prelude::map"][":name"] = "map";
  newark["prelude::apply"] = (function (a_1_0) {
    var x_1_0, x_1_1, x_1_2, x_1_3, x_1_4, x_1_5, x_1_6, x_1_7, x_1_8, x_1_9, x_1_10, x_1_11, x_1_12, x_1_13;
    x_1_0 = [];
    x_1_0.length = arguments.length-1;
    for (var i = 1, ii = arguments.length; i<ii; i++) { 
      x_1_0[i-1] = arguments[i];
    };
    label_1_0:{
      x_1_2 = x_1_0["length"];
      x_1_3 = x_1_2;
      x_1_4 = (x_1_3 === 0);
      if (!(x_1_4 == null || x_1_4 === false)) {
        x_1_1 = a_1_0();
      } else {
        x_1_5 = (x_1_3 === 1);
        if (!(x_1_5 == null || x_1_5 === false)) {
          x_1_6 = newark["prelude::to-array"](x_1_0["0"]);
          x_1_1 = a_1_0["apply"](null, x_1_6);
        } else {
          x_1_8 = (x_1_2 - 1);
          x_1_7 = newark["prelude::to-array"](x_1_0[x_1_8]);
          x_1_9 = 0;
          x_1_10 = (x_1_2 - 1);
          label_1_1:for(;;) {
            x_1_11 = (x_1_9 >= x_1_10);
            if (!(x_1_11 == null || x_1_11 === false)) {
              break label_1_1;
            };
            x_1_12 = x_1_9;
            x_1_13 = (x_1_2 - x_1_12 - 2);
            x_1_7["unshift"](x_1_0[x_1_13]);
            x_1_9 = (x_1_9 + 1);
          };
          x_1_1 = a_1_0["apply"](null, x_1_7);
        };
      };
    };
    return x_1_1;
  });
  newark["prelude::apply"][":name"] = "apply";
  newark["prelude::map*"] = (function (a_1_0) {
    var x_1_0, x_1_1, x_1_2, x_1_3, x_1_4, x_1_5, x_1_6, x_1_7, x_1_8, x_1_9, x_1_10, x_1_11, x_1_12, x_1_13, x_1_14, x_1_15, x_1_16, x_1_17, x_1_18, x_1_19, x_1_20, x_1_21, x_1_22, x_1_23, x_1_24, x_1_25, x_1_26;
    x_1_0 = [];
    x_1_0.length = arguments.length-1;
    for (var i = 1, ii = arguments.length; i<ii; i++) { 
      x_1_0[i-1] = arguments[i];
    };
    label_1_0:{
      x_1_2 = false;
      x_1_3 = x_1_0["length"];
      x_1_4 = [];
      x_1_5 = [];
      x_1_6 = [];
      x_1_6["length"] = x_1_3;
      x_1_7 = 0;
      x_1_8 = x_1_0;
      x_1_9 = x_1_8["length"];
      label_1_1:for(;;) {
        x_1_10 = (x_1_7 < x_1_9);
        if (!(x_1_10 == null || x_1_10 === false)) {
          x_1_11 = x_1_8[x_1_7];
          x_1_12 = newark["prelude::to-array"](x_1_11);
          x_1_13 = x_1_12["length"];
          x_1_15 = newark["prelude::not"](x_1_2);
          if (!(x_1_15 == null || x_1_15 === false)) {
            x_1_14 = x_1_15;
          } else {
            x_1_14 = (x_1_13 < x_1_2);
          };
          if (!(x_1_14 == null || x_1_14 === false)) {
            x_1_2 = x_1_13;
          };
          x_1_6[x_1_7] = x_1_12;
          x_1_7 = (x_1_7 + 1);
        } else {
          break label_1_1;
        };
      };
      x_1_5["length"] = x_1_2;
      x_1_16 = 0;
      x_1_17 = x_1_2;
      label_1_2:for(;;) {
        x_1_18 = (x_1_16 >= x_1_17);
        if (!(x_1_18 == null || x_1_18 === false)) {
          break label_1_2;
        };
        x_1_19 = x_1_16;
        x_1_20 = [];
        x_1_21 = 0;
        x_1_22 = x_1_6;
        x_1_23 = x_1_22["length"];
        label_1_3:for(;;) {
          x_1_24 = (x_1_21 < x_1_23);
          if (!(x_1_24 == null || x_1_24 === false)) {
            x_1_25 = x_1_22[x_1_21];
            x_1_20["push"](x_1_25[x_1_19]);
            x_1_21 = (x_1_21 + 1);
          } else {
            break label_1_3;
          };
        };
        x_1_5[x_1_19] = a_1_0["apply"](null, x_1_20);
        x_1_16 = (x_1_16 + 1);
      };
      x_1_26 = newark["prelude::first"](x_1_0);
      x_1_1 = newark["prelude::from-array"](x_1_26, x_1_5);
    };
    return x_1_1;
  });
  newark["prelude::map*"][":name"] = "map*";
  newark["prelude::filter"] = (function (a_1_0, a_1_1) {
    var x_1_0, x_1_1, x_1_2, x_1_3, x_1_4, x_1_5, x_1_6, x_1_7, x_1_8, x_1_9;
    label_1_0:{
      x_1_1 = newark["prelude::to-array"](a_1_1);
      x_1_2 = [];
      x_1_3 = 0;
      x_1_4 = 0;
      x_1_5 = x_1_1;
      x_1_6 = x_1_5["length"];
      label_1_1:for(;;) {
        x_1_7 = (x_1_4 < x_1_6);
        if (!(x_1_7 == null || x_1_7 === false)) {
          x_1_8 = x_1_5[x_1_4];
          x_1_9 = a_1_0(x_1_8);
          if (!(x_1_9 == null || x_1_9 === false)) {
            x_1_2[x_1_3] = x_1_8;
            x_1_3 = (x_1_3 + 1);
          };
          x_1_4 = (x_1_4 + 1);
        } else {
          break label_1_1;
        };
      };
      x_1_0 = newark["prelude::from-array"](a_1_1, x_1_2);
    };
    return x_1_0;
  });
  newark["prelude::filter"][":name"] = "filter";
  newark["prelude::take"] = (function (a_1_0, a_1_1) {
    var x_1_0, x_1_1, x_1_2;
    label_1_0:{
      x_1_1 = newark["prelude::to-array"](a_1_1);
      x_1_2 = x_1_1["slice"](0, a_1_0);
      x_1_0 = newark["prelude::from-array"](a_1_1, x_1_2);
    };
    return x_1_0;
  });
  newark["prelude::take"][":name"] = "take";
  newark["prelude::drop"] = (function (a_1_0, a_1_1) {
    var x_1_0, x_1_1, x_1_2;
    label_1_0:{
      x_1_1 = newark["prelude::to-array"](a_1_1);
      x_1_2 = x_1_1["slice"](a_1_0);
      x_1_0 = newark["prelude::from-array"](a_1_1, x_1_2);
    };
    return x_1_0;
  });
  newark["prelude::drop"][":name"] = "drop";
  newark["prelude::list"] = (function () {
    var x_1_0, x_1_1;
    x_1_0 = [];
    x_1_0.length = arguments.length-0;
    for (var i = 0, ii = arguments.length; i<ii; i++) { 
      x_1_0[i-0] = arguments[i];
    };
    label_1_0:{
      x_1_1 = newark["prelude::array->list"](x_1_0);
    };
    return x_1_1;
  });
  newark["prelude::list"][":name"] = "list";
  newark["prelude::cons"] = (function (a_1_0, a_1_1) {
    var x_1_0, x_1_1, x_1_2, x_1_3, x_1_4, x_1_5, x_1_6, x_1_7, x_1_8, x_1_9;
    label_1_0:{
      if (!(newark["prelude::*debug*"] == null || newark["prelude::*debug*"] === false)) {
        x_1_2 = newark["prelude::list?"](a_1_1);
        x_1_1 = newark["prelude::not"](x_1_2);
        if (!(x_1_1 == null || x_1_1 === false)) {
          x_1_7 = newark["prelude::make-symbol"]("list?");
          x_1_8 = newark["prelude::make-symbol"]("xs");
          x_1_6 = newark["prelude::list"](x_1_7, x_1_8);
          x_1_5 = newark["prelude::pr-str"](x_1_6);
          x_1_4 = ("assert failed: " + x_1_5);
          x_1_3 = newark["core::js"]["Error"](x_1_4);
          throw x_1_3;
        };
      };
      x_1_9 = (a_1_1["size"] + 1);
      x_1_0 = new newark["prelude::List"](a_1_0, a_1_1, x_1_9);
    };
    return x_1_0;
  });
  newark["prelude::cons"][":name"] = "cons";
  return x_0_0;
})();

// model.newark

(function () {
  var x_0_0, x_0_1, x_0_2, x_0_3, x_0_4, x_0_5, x_0_6, x_0_7;
  x_0_7 = newark["prelude::make-keyword"]("models");
  newark["prelude::Keyword"]["prototype"]["toString"] = (function () {
    var x_1_0, x_1_1;
    x_1_0 = this;
    x_1_1 = x_1_0["name"];
    return x_1_1;
  });
  newark["model::*db*"] = newark["core::js"]["Object"]();
  newark["model::Collection"] = (function (a_1_0, a_1_1, a_1_2) {
    var x_1_0, x_1_1, x_1_2;
    x_1_0 = this;
    x_1_2 = (x_1_0 instanceof newark["model::Collection"]);
    if (!(x_1_2 == null || x_1_2 === false)) {
      x_1_0["type"] = a_1_0;
      x_1_0["models"] = a_1_1;
      x_1_0["next-id"] = a_1_2;
      x_1_1 = x_1_0;
    } else {
      x_1_1 = new newark["model::Collection"](a_1_0, a_1_1, a_1_2);
    };
    return x_1_1;
  });
  newark["model::Collection"][":name"] = "Collection";
  newark["model::Model"] = (function (a_1_0, a_1_1, a_1_2) {
    var x_1_0, x_1_1, x_1_2;
    x_1_0 = this;
    x_1_2 = (x_1_0 instanceof newark["model::Model"]);
    if (!(x_1_2 == null || x_1_2 === false)) {
      x_1_0["type"] = a_1_0;
      x_1_0["id"] = a_1_1;
      x_1_0["attributes"] = a_1_2;
      x_1_1 = x_1_0;
    } else {
      x_1_1 = new newark["model::Model"](a_1_0, a_1_1, a_1_2);
    };
    return x_1_1;
  });
  newark["model::Model"][":name"] = "Model";
  x_0_3 = newark["prelude::next-generic-id"]();
  x_0_1 = (x_0_3 + ":" + "to-name");
  x_0_2 = (function (a_1_0) {
    var x_1_0, x_1_1, x_1_2, x_1_3, x_1_4;
    label_1_0:{
      x_1_3 = (a_1_0 == null);
      if (!(x_1_3 == null || x_1_3 === false)) {
        x_1_1 = newark["prelude::nil-vtable"];
      } else {
        x_1_1 = a_1_0;
      };
      x_1_4 = x_1_1[x_0_1];
      if (!(x_1_4 == null || x_1_4 === false)) {
        x_1_2 = x_1_4;
      } else {
        x_1_2 = x_0_2[":default"];
      };
      x_1_0 = x_1_2(a_1_0);
    };
    return x_1_0;
  });
  x_0_2[":name"] = "to-name";
  x_0_2[":generic-id"] = x_0_1;
  newark["model::to-name"] = x_0_2;
  x_0_4 = (function (a_1_0) {
    var x_1_0;
    x_1_0 = a_1_0;
    return x_1_0;
  });
  newark["prelude::extend-generic*"](newark["model::to-name"], newark["core::js"]["String"], x_0_4);
  x_0_5 = (function (a_1_0) {
    var x_1_0;
    x_1_0 = a_1_0["name"];
    return x_1_0;
  });
  newark["prelude::extend-generic*"](newark["model::to-name"], newark["prelude::Keyword"], x_0_5);
  x_0_6 = (function (a_1_0) {
    var x_1_0;
    x_1_0 = newark["prelude::pr-str"](a_1_0);
    return x_1_0;
  });
  newark["prelude::extend-generic*"](newark["model::to-name"], newark["prelude::Symbol"], x_0_6);
  newark["model::-make-object"] = (function (a_1_0) {
    var x_1_0, x_1_1, x_1_2, x_1_3, x_1_4, x_1_5, x_1_6;
    label_1_0:{
      x_1_1 = newark["core::js"]["Object"]();
      x_1_2 = a_1_0["length"];
      x_1_3 = 0;
      label_1_1:for(;;) {
        x_1_4 = (x_1_3 === x_1_2);
        if (!(x_1_4 == null || x_1_4 === false)) {
          break label_1_1;
        };
        x_1_5 = newark["model::to-name"](a_1_0[x_1_3]);
        x_1_6 = (x_1_3 + 1);
        x_1_1[x_1_5] = a_1_0[x_1_6];
        x_1_3 = (x_1_3 + 2);
      };
      x_1_0 = x_1_1;
    };
    return x_1_0;
  });
  newark["model::-make-object"][":name"] = "-make-object";
  newark["model::-make-collection"] = (function (a_1_0) {
    var x_1_0, x_1_1;
    label_1_0:{
      x_1_1 = new newark["model::Collection"](a_1_0, [], 0);
      newark["model::*db*"][a_1_0["name"]] = x_1_1;
      x_1_0 = x_1_1;
    };
    return x_1_0;
  });
  newark["model::-make-collection"][":name"] = "-make-collection";
  newark["model::get-collection"] = (function (a_1_0) {
    var x_1_0, x_1_1;
    label_1_0:{
      x_1_1 = newark["model::*db*"][a_1_0["name"]];
      if (!(x_1_1 == null || x_1_1 === false)) {
        x_1_0 = x_1_1;
      } else {
        x_1_0 = newark["model::-make-collection"](a_1_0);
      };
    };
    return x_1_0;
  });
  newark["model::get-collection"][":name"] = "get-collection";
  newark["model::by-id"] = (function (a_1_0, a_1_1) {
    var x_1_0, x_1_1;
    label_1_0:{
      x_1_1 = newark["model::get-collection"](a_1_0);
      x_1_0 = x_1_1[x_0_7][a_1_1];
    };
    return x_1_0;
  });
  newark["model::by-id"][":name"] = "by-id";
  newark["model::next-id"] = (function (a_1_0) {
    var x_1_0, x_1_1, x_1_2;
    label_1_0:{
      x_1_1 = newark["model::get-collection"](a_1_0);
      x_1_2 = x_1_1["next-id"];
      x_1_1["next-id"] = (x_1_1["next-id"] + 1);
      x_1_0 = x_1_2;
    };
    return x_1_0;
  });
  newark["model::next-id"][":name"] = "next-id";
  newark["model::publish"] = (function (a_1_0) {
    var x_1_0, x_1_1, x_1_2, x_1_3, x_1_4, x_1_5, x_1_6, x_1_7;
    x_1_0 = [];
    x_1_0.length = arguments.length-1;
    for (var i = 1, ii = arguments.length; i<ii; i++) { 
      x_1_0[i-1] = arguments[i];
    };
    label_1_0:{
      x_1_2 = a_1_0["-subscribers"];
      if (!(x_1_2 == null || x_1_2 === false)) {
        x_1_3 = 0;
        x_1_4 = a_1_0["-subscribers"];
        x_1_5 = x_1_4["length"];
        label_1_1:for(;;) {
          x_1_6 = (x_1_3 < x_1_5);
          if (!(x_1_6 == null || x_1_6 === false)) {
            x_1_7 = x_1_4[x_1_3];
            newark["prelude::apply"](x_1_7, x_1_0);
            x_1_3 = (x_1_3 + 1);
          } else {
            x_1_1 = null;
            break label_1_1;
          };
        };
      } else {
        x_1_1 = null;
      };
    };
    return x_1_1;
  });
  newark["model::publish"][":name"] = "publish";
  newark["model::subscribe"] = (function (a_1_0, a_1_1) {
    var x_1_0, x_1_1;
    label_1_0:{
      x_1_1 = newark["prelude::not"](a_1_0["-subscribers"]);
      if (!(x_1_1 == null || x_1_1 === false)) {
        a_1_0["-subscribers"] = [];
      };
      x_1_0 = a_1_0["-subscribers"]["push"](a_1_1);
    };
    return x_1_0;
  });
  newark["model::subscribe"][":name"] = "subscribe";
  newark["model::make-model"] = (function (a_1_0) {
    var x_1_0, x_1_1, x_1_2, x_1_3, x_1_4, x_1_5;
    x_1_0 = [];
    x_1_0.length = arguments.length-1;
    for (var i = 1, ii = arguments.length; i<ii; i++) { 
      x_1_0[i-1] = arguments[i];
    };
    label_1_0:{
      x_1_2 = newark["model::get-collection"](a_1_0);
      x_1_3 = newark["model::next-id"](a_1_0);
      x_1_5 = newark["model::-make-object"](x_1_0);
      x_1_4 = new newark["model::Model"](a_1_0, x_1_3, x_1_5);
      x_1_2["models"][x_1_3] = x_1_4;
      x_1_1 = x_1_4;
    };
    return x_1_1;
  });
  newark["model::make-model"][":name"] = "make-model";
  newark["model::get"] = (function (a_1_0, a_1_1, a_1_2) {
    var x_1_0, x_1_1;
    label_1_0:{
      x_1_1 = a_1_0["attributes"]["hasOwnProperty"](a_1_1);
      if (!(x_1_1 == null || x_1_1 === false)) {
        x_1_0 = a_1_0["attributes"][a_1_1];
      } else {
        x_1_0 = a_1_2;
      };
    };
    return x_1_0;
  });
  newark["model::get"][":name"] = "get";
  newark["model::set"] = (function (a_1_0, a_1_1, a_1_2) {
    var x_1_0;
    label_1_0:{
      a_1_0["attributes"][a_1_1] = a_1_2;
    };
    return x_1_0;
  });
  newark["model::set"][":name"] = "set";
  return x_0_0;
})();

// dom.newark

(function () {
  var x_0_0, x_0_1, x_0_2, x_0_3, x_0_4, x_0_5, x_0_6;
  newark["dom::make-text"] = (function (a_1_0) {
    var x_1_0;
    label_1_0:{
      x_1_0 = a_1_0["createTextNode"]();
    };
    return x_1_0;
  });
  newark["dom::make-text"][":name"] = "make-text";
  newark["dom::make-element"] = (function (a_1_0) {
    var x_1_0;
    label_1_0:{
      x_1_0 = newark["core::js"]["document"]["createElement"](a_1_0);
    };
    return x_1_0;
  });
  newark["dom::make-element"][":name"] = "make-element";
  newark["dom::make-fragment"] = (function (a_1_0) {
    var x_1_0;
    label_1_0:{
      x_1_0 = newark["core::js"]["document"]["createDocumentFragment"](a_1_0);
    };
    return x_1_0;
  });
  newark["dom::make-fragment"][":name"] = "make-fragment";
  newark["dom::by-id"] = (function (a_1_0) {
    var x_1_0;
    label_1_0:{
      x_1_0 = newark["core::js"]["document"]["getElementById"](a_1_0);
    };
    return x_1_0;
  });
  newark["dom::by-id"][":name"] = "by-id";
  newark["dom::html*"] = (function (a_1_0, a_1_1) {
    var x_1_0, x_1_1, x_1_2, x_1_3, x_1_4, x_1_5, x_1_6, x_1_7, x_1_8;
    label_1_0:{
      x_1_2 = a_1_1;
      if (!(x_1_2 == null || x_1_2 === false)) {
        x_1_1 = x_1_2;
      } else {
        x_1_1 = newark["dom::make-fragment"]();
      };
      x_1_3 = 0;
      x_1_4 = a_1_0;
      x_1_5 = x_1_4["length"];
      label_1_1:for(;;) {
        x_1_6 = (x_1_3 < x_1_5);
        if (!(x_1_6 == null || x_1_6 === false)) {
          x_1_7 = x_1_4[x_1_3];
          x_1_8 = newark["dom::html"](x_1_7);
          x_1_1["appendChild"](x_1_8);
          x_1_3 = (x_1_3 + 1);
        } else {
          break label_1_1;
        };
      };
      x_1_0 = x_1_1;
    };
    return x_1_0;
  });
  newark["dom::html*"][":name"] = "html*";
  newark["dom::lexer"] = newark["core::js"]["RegExp"]("([^\\s\\.#]+)(?:#([^\\s\\.#]+))?(?:\\.([^\\s#]+))?");
  newark["dom::html*"] = (function (a_1_0, a_1_1, a_1_2) {
    var x_1_0, x_1_1, x_1_2, x_1_3, x_1_4, x_1_5, x_1_6;
    label_1_0:{
      x_1_1 = 0;
      x_1_2 = (a_1_0["length"] - a_1_2);
      label_1_1:for(;;) {
        x_1_3 = (x_1_1 >= x_1_2);
        if (!(x_1_3 == null || x_1_3 === false)) {
          break label_1_1;
        };
        x_1_4 = x_1_1;
        x_1_6 = (x_1_4 + a_1_2);
        x_1_5 = newark["dom::html"](a_1_0[x_1_6]);
        a_1_1["appendChild"](x_1_5);
        x_1_1 = (x_1_1 + 1);
      };
      x_1_0 = a_1_1;
    };
    return x_1_0;
  });
  newark["dom::html*"][":name"] = "html*";
  x_0_3 = newark["prelude::next-generic-id"]();
  x_0_1 = (x_0_3 + ":" + "html");
  x_0_2 = (function (a_1_0) {
    var x_1_0, x_1_1, x_1_2, x_1_3, x_1_4;
    label_1_0:{
      x_1_3 = (a_1_0 == null);
      if (!(x_1_3 == null || x_1_3 === false)) {
        x_1_1 = newark["prelude::nil-vtable"];
      } else {
        x_1_1 = a_1_0;
      };
      x_1_4 = x_1_1[x_0_1];
      if (!(x_1_4 == null || x_1_4 === false)) {
        x_1_2 = x_1_4;
      } else {
        x_1_2 = x_0_2[":default"];
      };
      x_1_0 = x_1_2(a_1_0);
    };
    return x_1_0;
  });
  x_0_2[":name"] = "html";
  x_0_2[":generic-id"] = x_0_1;
  newark["dom::html"] = x_0_2;
  x_0_4 = (function (a_1_0) {
    var x_1_0;
    x_1_0 = a_1_0;
    return x_1_0;
  });
  newark["prelude::extend-generic*"](newark["dom::html"], newark["core::js"]["Node"], x_0_4);
  x_0_5 = (function (a_1_0) {
    var x_1_0;
    x_1_0 = newark["core::js"]["document"]["createTextNode"](a_1_0);
    return x_1_0;
  });
  newark["prelude::extend-generic*"](newark["dom::html"], newark["core::js"]["String"], x_0_5);
  x_0_6 = (function (a_1_0) {
    var x_1_0, x_1_1, x_1_2, x_1_3, x_1_4, x_1_5, x_1_6;
    x_1_1 = newark["prelude::keyword?"](a_1_0["0"]);
    if (!(x_1_1 == null || x_1_1 === false)) {
      x_1_2 = newark["dom::lexer"]["exec"](a_1_0["0"]["name"]);
      x_1_3 = newark["dom::make-element"](x_1_2["1"]);
      x_1_4 = x_1_2["2"];
      if (!(x_1_4 == null || x_1_4 === false)) {
        x_1_3["id"] = x_1_2["2"];
      };
      x_1_5 = x_1_2["3"];
      if (!(x_1_5 == null || x_1_5 === false)) {
        x_1_3["className"] = x_1_2["3"]["replace"](".", " ");
      };
      x_1_0 = newark["dom::html*"](a_1_0, x_1_3, 1);
    } else {
      x_1_6 = newark["dom::make-fragment"]();
      x_1_0 = newark["dom::html*"](a_1_0, x_1_6, 0);
    };
    return x_1_0;
  });
  x_0_0 = newark["prelude::extend-generic*"](newark["dom::html"], newark["core::js"]["Array"], x_0_6);
  return x_0_0;
})();

// poet-page.newark

(function () {
  var x_0_0, x_0_1, x_0_2, x_0_3, x_0_4, x_0_5, x_0_6, x_0_7, x_0_8, x_0_9, x_0_10, x_0_11, x_0_12;
  x_0_7 = newark["prelude::make-keyword"]("y-pos");
  x_0_8 = newark["prelude::make-keyword"]("color");
  x_0_10 = newark["prelude::make-keyword"]("canvas#fun-with-balls");
  x_0_4 = newark["prelude::make-keyword"]("x-vel");
  x_0_9 = newark["prelude::make-keyword"]("accel");
  x_0_5 = newark["prelude::make-keyword"]("y-vel");
  x_0_11 = newark["prelude::make-keyword"]("models");
  x_0_2 = newark["prelude::make-keyword"]("radius");
  x_0_3 = newark["prelude::make-keyword"]("mass");
  x_0_1 = newark["prelude::make-keyword"]("ball");
  x_0_6 = newark["prelude::make-keyword"]("x-pos");
  newark["poet-page::num-balls"] = 200;
  newark["poet-page::max-radius"] = 30;
  newark["poet-page::min-radius"] = 10;
  newark["poet-page::max-mass"] = 10;
  newark["poet-page::min-mass"] = 1;
  newark["poet-page::max-speed"] = 8;
  newark["poet-page::min-speed"] = -8;
  newark["poet-page::canvas"] = null;
  newark["poet-page::-width"] = null;
  newark["poet-page::-height"] = null;
  newark["poet-page::-step"] = 0.2;
  newark["poet-page::resize!"] = (function () {
    var x_1_0, x_1_1, x_1_2;
    label_1_0:{
      x_1_2 = (newark["poet-page::-width"] === newark["core::js"]["innerWidth"]);
      if (!(x_1_2 == null || x_1_2 === false)) {
        x_1_1 = (newark["poet-page::-height"] === newark["core::js"]["innerHeight"]);
      } else {
        x_1_1 = x_1_2;
      };
      if (!(x_1_1 == null || x_1_1 === false)) {
        x_1_0 = null;
      } else {
        newark["poet-page::-width"] = newark["core::js"]["innerWidth"];
        newark["poet-page::-height"] = newark["core::js"]["innerHeight"];
        newark["poet-page::canvas"]["width"] = newark["poet-page::-width"];
        newark["poet-page::canvas"]["height"] = newark["poet-page::-height"];
      };
    };
    return x_1_0;
  });
  newark["poet-page::resize!"][":name"] = "resize!";
  newark["poet-page::get-context"] = (function () {
    var x_1_0;
    label_1_0:{
      x_1_0 = newark["poet-page::canvas"]["getContext"]("2d");
    };
    return x_1_0;
  });
  newark["poet-page::get-context"][":name"] = "get-context";
  newark["poet-page::rotate-about"] = (function (a_1_0, a_1_1, a_1_2) {
    var x_1_0, x_1_1, x_1_2, x_1_3, x_1_4, x_1_5;
    label_1_0:{
      x_1_2 = a_1_2;
      if (!(x_1_2 == null || x_1_2 === false)) {
        x_1_1 = x_1_2;
      } else {
        x_1_1 = newark["poet-page::get-context"]();
      };
      x_1_3 = x_1_1;
      x_1_3["translate"](a_1_0["0"], a_1_0["1"]);
      x_1_3["rotate"](a_1_1);
      x_1_4 = (- a_1_0["0"]);
      x_1_5 = (- a_1_0["1"]);
      x_1_3["translate"](x_1_4, x_1_5);
      x_1_0 = x_1_3;
    };
    return x_1_0;
  });
  newark["poet-page::rotate-about"][":name"] = "rotate-about";
  newark["poet-page::random"] = (function (a_1_0, a_1_1) {
    var x_1_0, x_1_1, x_1_2, x_1_3, x_1_4, x_1_5;
    label_1_0:{
      if (!(a_1_1 == null || a_1_1 === false)) {
        x_1_1 = a_1_0;
      } else {
        x_1_1 = 0;
      };
      if (!(a_1_1 == null || a_1_1 === false)) {
        x_1_2 = a_1_1;
      } else {
        x_1_2 = a_1_0;
      };
      x_1_4 = newark["core::js"]["Math"]["random"]();
      x_1_5 = (x_1_2 - x_1_1);
      x_1_3 = (x_1_4 * x_1_5);
      x_1_0 = (x_1_3 + x_1_1);
    };
    return x_1_0;
  });
  newark["poet-page::random"][":name"] = "random";
  newark["poet-page::random-int"] = (function (a_1_0, a_1_1) {
    var x_1_0, x_1_1;
    label_1_0:{
      x_1_1 = newark["poet-page::random"](a_1_0, a_1_1);
      x_1_0 = newark["core::js"]["Math"]["floor"](x_1_1);
    };
    return x_1_0;
  });
  newark["poet-page::random-int"][":name"] = "random-int";
  newark["poet-page::random-color"] = (function () {
    var x_1_0, x_1_1, x_1_2, x_1_3;
    label_1_0:{
      x_1_1 = newark["poet-page::random-int"](255);
      x_1_2 = newark["poet-page::random-int"](255);
      x_1_3 = newark["poet-page::random-int"](255);
      x_1_0 = ("rgb(" + x_1_1 + "," + x_1_2 + "," + x_1_3 + ")");
    };
    return x_1_0;
  });
  newark["poet-page::random-color"][":name"] = "random-color";
  newark["poet-page::tau"] = (newark["core::js"]["Math"]["PI"] * 2);
  newark["poet-page::make-balls"] = (function (a_1_0) {
    var x_1_0, x_1_1, x_1_2, x_1_3, x_1_4, x_1_5, x_1_6, x_1_7, x_1_8, x_1_9, x_1_10, x_1_11, x_1_12, x_1_13, x_1_14, x_1_15;
    label_1_0:{
      x_1_2 = a_1_0;
      if (!(x_1_2 == null || x_1_2 === false)) {
        x_1_1 = x_1_2;
      } else {
        x_1_1 = 0;
      };
      x_1_3 = 0;
      x_1_4 = x_1_1;
      label_1_1:for(;;) {
        x_1_5 = (x_1_3 >= x_1_4);
        if (!(x_1_5 == null || x_1_5 === false)) {
          x_1_0 = null;
          break label_1_1;
        };
        x_1_6 = x_1_3;
        x_1_7 = newark["poet-page::random-int"](newark["poet-page::max-radius"], newark["poet-page::min-radius"]);
        x_1_8 = newark["poet-page::random-int"](newark["poet-page::max-mass"], newark["poet-page::min-mass"]);
        x_1_9 = newark["poet-page::random"](newark["poet-page::max-speed"], newark["poet-page::min-speed"]);
        x_1_10 = newark["poet-page::random"](newark["poet-page::max-speed"], newark["poet-page::min-speed"]);
        x_1_12 = (newark["poet-page::-width"] - x_1_7);
        x_1_11 = newark["poet-page::random"](x_1_7, x_1_12);
        x_1_14 = (newark["poet-page::-height"] - x_1_7);
        x_1_13 = newark["poet-page::random"](x_1_7, x_1_14);
        x_1_15 = newark["poet-page::random-color"]();
        newark["model::make-model"](x_0_1, x_0_2, x_1_7, x_0_3, x_1_8, x_0_4, x_1_9, x_0_5, x_1_10, x_0_6, x_1_11, x_0_7, x_1_13, x_0_8, x_1_15, x_0_9, 0.5);
        x_1_3 = (x_1_3 + 1);
      };
    };
    return x_1_0;
  });
  newark["poet-page::make-balls"][":name"] = "make-balls";
  newark["poet-page::init"] = (function () {
    var x_1_0;
    label_1_0:{
      newark["poet-page::canvas"] = newark["dom::html"]([x_0_10]);
      newark["core::js"]["document"]["body"]["appendChild"](newark["poet-page::canvas"]);
      newark["poet-page::resize!"]();
      x_1_0 = newark["poet-page::make-balls"](newark["poet-page::num-balls"]);
    };
    return x_1_0;
  });
  newark["poet-page::init"][":name"] = "init";
  newark["poet-page::draw-ball"] = (function (a_1_0) {
    var x_1_0, x_1_1, x_1_2, x_1_3, x_1_4, x_1_5, x_1_6, x_1_7, x_1_8;
    label_1_0:{
      x_1_1 = newark["poet-page::get-context"]();
      x_1_2 = a_1_0["attributes"];
      x_1_3 = x_1_2["x-pos"];
      x_1_4 = x_1_2["y-pos"];
      x_1_5 = x_1_2["radius"];
      x_1_6 = x_1_2["mass"];
      x_1_7 = x_1_2["color"];
      x_1_1["fillStyle"] = x_1_7;
      x_1_8 = x_1_1;
      x_1_8["beginPath"]();
      x_1_8["arc"](x_1_3, x_1_4, x_1_5, 0, newark["poet-page::tau"], false);
      x_1_8["closePath"]();
      x_1_8["stroke"]();
      x_1_8["fill"]();
      x_1_0 = x_1_8;
    };
    return x_1_0;
  });
  newark["poet-page::draw-ball"][":name"] = "draw-ball";
  newark["poet-page::draw-balls"] = (function () {
    var x_1_0, x_1_1, x_1_2, x_1_3, x_1_4, x_1_5, x_1_6;
    label_1_0:{
      x_1_1 = 0;
      x_1_3 = newark["model::get-collection"](x_0_1);
      x_1_2 = x_1_3[x_0_11];
      x_1_4 = x_1_2["length"];
      label_1_1:for(;;) {
        x_1_5 = (x_1_1 < x_1_4);
        if (!(x_1_5 == null || x_1_5 === false)) {
          x_1_6 = x_1_2[x_1_1];
          newark["poet-page::draw-ball"](x_1_6);
          x_1_1 = (x_1_1 + 1);
        } else {
          x_1_0 = null;
          break label_1_1;
        };
      };
    };
    return x_1_0;
  });
  newark["poet-page::draw-balls"][":name"] = "draw-balls";
  newark["poet-page::move-ball"] = (function (a_1_0) {
    var x_1_0, x_1_1, x_1_2, x_1_3, x_1_4, x_1_5, x_1_6, x_1_7, x_1_8, x_1_9, x_1_10, x_1_11, x_1_12, x_1_13, x_1_14, x_1_15, x_1_16, x_1_17, x_1_18, x_1_19, x_1_20, x_1_21, x_1_22;
    label_1_0:{
      x_1_1 = a_1_0["attributes"];
      x_1_2 = x_1_1["radius"];
      x_1_3 = x_1_1["x-pos"];
      x_1_4 = x_1_1["y-pos"];
      x_1_5 = x_1_1["x-vel"];
      x_1_6 = x_1_1["y-vel"];
      x_1_8 = (x_1_5 * newark["poet-page::-step"]);
      x_1_7 = (x_1_3 + x_1_8);
      x_1_10 = (x_1_6 * newark["poet-page::-step"]);
      x_1_9 = (x_1_4 + x_1_10);
      x_1_12 = (x_1_7 - x_1_2);
      x_1_11 = (x_1_12 < 0);
      if (!(x_1_11 == null || x_1_11 === false)) {
        x_1_13 = (- x_1_5);
        newark["model::set"](a_1_0, x_0_4, x_1_13);
        x_1_7 = x_1_2;
      } else {
        x_1_15 = (x_1_7 + x_1_2);
        x_1_14 = (x_1_15 > newark["poet-page::-width"]);
        if (!(x_1_14 == null || x_1_14 === false)) {
          x_1_16 = (- x_1_5);
          newark["model::set"](a_1_0, x_0_4, x_1_16);
          x_1_7 = (newark["poet-page::-width"] - x_1_2);
        };
      };
      x_1_18 = (x_1_9 - x_1_2);
      x_1_17 = (x_1_18 < 0);
      if (!(x_1_17 == null || x_1_17 === false)) {
        x_1_19 = (- x_1_6);
        newark["model::set"](a_1_0, x_0_5, x_1_19);
        x_1_9 = x_1_2;
      } else {
        x_1_21 = (x_1_9 + x_1_2);
        x_1_20 = (x_1_21 > newark["poet-page::-height"]);
        if (!(x_1_20 == null || x_1_20 === false)) {
          x_1_22 = (- x_1_6);
          newark["model::set"](a_1_0, x_0_5, x_1_22);
          x_1_9 = (newark["poet-page::-height"] - x_1_2);
        };
      };
      newark["model::set"](a_1_0, x_0_6, x_1_7);
      x_1_0 = newark["model::set"](a_1_0, x_0_7, x_1_9);
    };
    return x_1_0;
  });
  newark["poet-page::move-ball"][":name"] = "move-ball";
  newark["poet-page::move-balls"] = (function () {
    var x_1_0, x_1_1, x_1_2, x_1_3, x_1_4, x_1_5, x_1_6;
    label_1_0:{
      x_1_1 = 0;
      x_1_3 = newark["model::get-collection"](x_0_1);
      x_1_2 = x_1_3[x_0_11];
      x_1_4 = x_1_2["length"];
      label_1_1:for(;;) {
        x_1_5 = (x_1_1 < x_1_4);
        if (!(x_1_5 == null || x_1_5 === false)) {
          x_1_6 = x_1_2[x_1_1];
          newark["poet-page::move-ball"](x_1_6);
          x_1_1 = (x_1_1 + 1);
        } else {
          x_1_0 = null;
          break label_1_1;
        };
      };
    };
    return x_1_0;
  });
  newark["poet-page::move-balls"][":name"] = "move-balls";
  newark["poet-page::render"] = (function () {
    var x_1_0, x_1_1;
    label_1_0:{
      newark["poet-page::resize!"]();
      x_1_1 = newark["poet-page::get-context"]();
      x_1_1["clearRect"](0, 0, newark["poet-page::-width"], newark["poet-page::-height"]);
      x_1_0 = newark["poet-page::draw-balls"]();
    };
    return x_1_0;
  });
  newark["poet-page::render"][":name"] = "render";
  newark["poet-page::update"] = (function () {
    var x_1_0;
    label_1_0:{
      x_1_0 = newark["poet-page::move-balls"]();
    };
    return x_1_0;
  });
  newark["poet-page::update"][":name"] = "update";
  newark["poet-page::main"] = (function () {
    var x_1_0;
    label_1_0:{
      newark["poet-page::update"]();
      x_1_0 = newark["poet-page::render"]();
    };
    return x_1_0;
  });
  newark["poet-page::main"][":name"] = "main";
  x_0_12 = newark["core::js"]["onload"];
  newark["core::js"]["onload"] = (function () {
    var x_1_0, x_1_1;
    if (!(x_0_12 == null || x_0_12 === false)) {
      x_0_12();
    };
    newark["poet-page::init"]();
    newark["core::js"]["setInterval"](newark["poet-page::main"], 2);
    x_1_1 = newark["model::get-collection"](x_0_1);
    x_1_0 = newark["core::js"]["console"]["log"](x_1_1);
    return x_1_0;
  });
  return x_0_0;
})();

})();