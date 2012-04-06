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
    var x_1_0, x_1_1, x_1_2, x_1_3;
    label_1_0:{
      label_1_1:for(x_1_1 in a_1_0) {
        x_1_2 = a_1_0["hasOwnProperty"](x_1_1);
        if (!(x_1_2 == null || x_1_2 === false)) {
          a_1_1(" [");
          x_1_3 = newark["core::js"]["JSON"]["stringify"](x_1_1);
          a_1_1(x_1_3);
          a_1_1(" ");
          newark["prelude::represent"](a_1_0[x_1_1], a_1_1, a_1_2, newark["prelude::?"]);
          x_1_0 = a_1_1("]");
        } else {
          x_1_0 = null;
        };
      };
    };
    return x_1_0;
  });
  newark["prelude::represent-properties"][":name"] = "represent-properties";
  newark["prelude::represent-object"] = (function (a_1_0, a_1_1, a_1_2) {
    var x_1_0, x_1_1;
    label_1_0:{
      a_1_1("#<");
      x_1_1 = newark["prelude::get-typename"](a_1_0);
      a_1_1(x_1_1);
      newark["prelude::represent-properties"](a_1_0, a_1_1, a_1_2);
      x_1_0 = a_1_1(">");
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

// poet/reader.newark

(function () {
  var x_0_0, x_0_1, x_0_2, x_0_3, x_0_4, x_0_5, x_0_6, x_0_7, x_0_8, x_0_9, x_0_10, x_0_11, x_0_12, x_0_13, x_0_14, x_0_15, x_0_16, x_0_17, x_0_18;
  x_0_5 = newark["prelude::make-keyword"]("origin");
  x_0_9 = newark["prelude::make-keyword"]("last-offset");
  x_0_4 = newark["prelude::make-keyword"]("input");
  x_0_10 = newark["prelude::make-keyword"]("last-line");
  x_0_11 = newark["prelude::make-keyword"]("last-column");
  x_0_6 = newark["prelude::make-keyword"]("offset");
  x_0_7 = newark["prelude::make-keyword"]("line");
  x_0_8 = newark["prelude::make-keyword"]("column");
  x_0_13 = newark["prelude::make-keyword"]("else");
  x_0_3 = newark["prelude::make-keyword"]("recoverable");
  x_0_1 = {};
  newark["poet/reader::reader-macros"] = x_0_1;
  x_0_2 = {};
  newark["poet/reader::dispatch-reader-macros"] = x_0_2;
  newark["poet/reader::eof-error!"] = (function (a_1_0) {
    var x_1_0, x_1_1, x_1_2, x_1_3;
    label_1_0:{
      x_1_3 = a_1_0;
      if (!(x_1_3 == null || x_1_3 === false)) {
        x_1_2 = x_1_3;
      } else {
        x_1_2 = "EOF";
      };
      x_1_1 = newark["core::js"]["Error"](x_1_2);
      x_1_1[x_0_3] = true;
      throw x_1_1;
    };
    return x_1_0;
  });
  newark["poet/reader::eof-error!"][":name"] = "eof-error!";
  newark["poet/reader::newline-regex"] = newark["core::js"]["RegExp"]("[\n\f\r]");
  newark["poet/reader::whitespace-regex"] = newark["core::js"]["RegExp"]("\\s");
  newark["poet/reader::int-regex"] = newark["core::js"]["RegExp"]("^(-|\\+)?(0|([1-9][0-9]*))$");
  newark["poet/reader::oct-regex"] = newark["core::js"]["RegExp"]("^(-|\\+)?0[0-7]+$");
  newark["poet/reader::hex-regex"] = newark["core::js"]["RegExp"]("^(-|\\+)?0[xX][0-9a-fA-F]+$");
  newark["poet/reader::float-regex"] = newark["core::js"]["RegExp"]("^(-|\\+)?(0|([1-9][0-9]*))\\.(0|([1-9][0-9]*))$");
  newark["poet/reader::qualified-symbol-regex"] = newark["core::js"]["RegExp"]("[^:]+::[^:]+");
  newark["poet/reader::constituent-regex"] = newark["core::js"]["RegExp"]("#");
  newark["poet/reader::terminal?"] = (function (a_1_0) {
    var x_1_0, x_1_1, x_1_2;
    label_1_0:{
      x_1_1 = (a_1_0 == null);
      if (!(x_1_1 == null || x_1_1 === false)) {
        x_1_0 = x_1_1;
      } else {
        x_1_2 = newark["poet/reader::whitespace-regex"]["test"](a_1_0);
        if (!(x_1_2 == null || x_1_2 === false)) {
          x_1_0 = x_1_2;
        } else {
          x_1_0 = newark["poet/reader::reader-macros"][a_1_0];
        };
      };
    };
    return x_1_0;
  });
  newark["poet/reader::terminal?"][":name"] = "terminal?";
  newark["poet/reader::not-constituent?"] = (function (a_1_0) {
    var x_1_0, x_1_1, x_1_2;
    label_1_0:{
      x_1_1 = newark["poet/reader::terminal?"](a_1_0);
      if (!(x_1_1 == null || x_1_1 === false)) {
        x_1_2 = newark["poet/reader::constituent-regex"]["test"](a_1_0);
        x_1_0 = newark["prelude::not"](x_1_2);
      } else {
        x_1_0 = x_1_1;
      };
    };
    return x_1_0;
  });
  newark["poet/reader::not-constituent?"][":name"] = "not-constituent?";
  newark["poet/reader::Reader"] = (function (a_1_0, a_1_1) {
    var x_1_0, x_1_1, x_1_2, x_1_3, x_1_4;
    x_1_0 = this;
    label_1_0:{
      x_1_2 = (x_1_0 instanceof newark["poet/reader::Reader"]);
      if (!(x_1_2 == null || x_1_2 === false)) {
        x_1_3 = x_1_0;
        x_1_3[x_0_4] = a_1_0;
        x_1_4 = a_1_1;
        if (!(x_1_4 == null || x_1_4 === false)) {
          x_1_3[x_0_5] = x_1_4;
        } else {
          x_1_3[x_0_5] = "unknown origin";
        };
        x_1_3[x_0_6] = 0;
        x_1_3[x_0_7] = 1;
        x_1_3[x_0_8] = 0;
        x_1_3[x_0_9] = 0;
        x_1_3[x_0_10] = 1;
        x_1_3[x_0_11] = 1;
        x_1_1 = x_1_3;
      } else {
        x_1_1 = new newark["poet/reader::Reader"](a_1_0, a_1_1);
      };
    };
    return x_1_1;
  });
  newark["poet/reader::Reader"][":name"] = "Reader";
  newark["poet/reader::Position"] = (function (a_1_0, a_1_1, a_1_2, a_1_3) {
    var x_1_0, x_1_1, x_1_2;
    x_1_0 = this;
    x_1_2 = (x_1_0 instanceof newark["poet/reader::Position"]);
    if (!(x_1_2 == null || x_1_2 === false)) {
      x_1_0["offset"] = a_1_0;
      x_1_0["line"] = a_1_1;
      x_1_0["column"] = a_1_2;
      x_1_0["origin"] = a_1_3;
      x_1_1 = x_1_0;
    } else {
      x_1_1 = new newark["poet/reader::Position"](a_1_0, a_1_1, a_1_2, a_1_3);
    };
    return x_1_1;
  });
  newark["poet/reader::Position"][":name"] = "Position";
  x_0_12 = (function (a_1_0, a_1_1, a_1_2) {
    var x_1_0, x_1_1;
    x_1_1 = ("line " + a_1_0["line"] + ", column " + a_1_0["column"] + ", in " + a_1_0["origin"]);
    x_1_0 = a_1_1(x_1_1);
    return x_1_0;
  });
  newark["prelude::extend-generic*"](newark["prelude::represent"], newark["poet/reader::Position"], x_0_12);
  newark["poet/reader::get-position"] = (function (a_1_0) {
    var x_1_0;
    label_1_0:{
      x_1_0 = new newark["poet/reader::Position"](a_1_0["offset"], a_1_0["line"], a_1_0["column"], a_1_0["origin"]);
    };
    return x_1_0;
  });
  newark["poet/reader::get-position"][":name"] = "get-position";
  newark["poet/reader::set-position"] = (function (a_1_0, a_1_1) {
    var x_1_0, x_1_1;
    label_1_0:{
      x_1_1 = a_1_0;
      x_1_1[x_0_6] = a_1_1["offset"];
      x_1_1[x_0_7] = a_1_1["line"];
      x_1_1[x_0_8] = a_1_1["column"];
      x_1_0 = x_1_1;
    };
    return x_1_0;
  });
  newark["poet/reader::set-position"][":name"] = "set-position";
  newark["poet/reader::peek-char"] = (function (a_1_0) {
    var x_1_0, x_1_1;
    label_1_0:{
      x_1_1 = (a_1_0["offset"] < a_1_0["input"]["length"]);
      if (!(x_1_1 == null || x_1_1 === false)) {
        x_1_0 = a_1_0["input"][a_1_0["offset"]];
      } else {
        x_1_0 = null;
      };
    };
    return x_1_0;
  });
  newark["poet/reader::peek-char"][":name"] = "peek-char";
  newark["poet/reader::read-char"] = (function (a_1_0) {
    var x_1_0, x_1_1, x_1_2, x_1_3;
    label_1_0:{
      x_1_1 = newark["poet/reader::peek-char"](a_1_0);
      if (!(x_1_1 == null || x_1_1 === false)) {
        x_1_2 = a_1_0;
        x_1_2[x_0_9] = a_1_0["offset"];
        x_1_2[x_0_10] = a_1_0["line"];
        x_1_2[x_0_11] = a_1_0["column"];
        x_1_2[x_0_6] = (a_1_0["offset"] + 1);
        x_1_3 = newark["poet/reader::newline-regex"]["test"](x_1_1);
        if (!(x_1_3 == null || x_1_3 === false)) {
          a_1_0["line"] = (a_1_0["line"] + 1);
          a_1_0["column"] = 1;
        } else {
          a_1_0["column"] = (a_1_0["column"] + 1);
        };
        x_1_0 = x_1_1;
      } else {
        x_1_0 = null;
      };
    };
    return x_1_0;
  });
  newark["poet/reader::read-char"][":name"] = "read-char";
  newark["poet/reader::unread-char"] = (function (a_1_0) {
    var x_1_0, x_1_1;
    label_1_0:{
      x_1_1 = a_1_0;
      x_1_1[x_0_6] = a_1_0["last-offset"];
      x_1_1[x_0_7] = a_1_0["last-line"];
      x_1_1[x_0_8] = a_1_0["last-column"];
      x_1_0 = x_1_1;
    };
    return x_1_0;
  });
  newark["poet/reader::unread-char"][":name"] = "unread-char";
  newark["poet/reader::read-whitespace"] = (function (a_1_0) {
    var x_1_0, x_1_1, x_1_2, x_1_3, x_1_4, x_1_5, x_1_6, x_1_7, x_1_8, x_1_9, x_1_10;
    label_1_0:{
      x_1_1 = false;
      label_1_1:for(;;) {
        x_1_2 = newark["poet/reader::read-char"](a_1_0);
        x_1_3 = (x_1_2 === null);
        if (!(x_1_3 == null || x_1_3 === false)) {
          x_1_0 = null;
          break label_1_1;
        } else {
          x_1_4 = (x_1_2 === " ");
          if (!(x_1_4 == null || x_1_4 === false)) {
            x_1_0 = null;
          } else {
            x_1_5 = (x_1_2 === "\t");
            if (!(x_1_5 == null || x_1_5 === false)) {
              x_1_0 = null;
            } else {
              x_1_6 = (x_1_2 === "\b");
              if (!(x_1_6 == null || x_1_6 === false)) {
                x_1_0 = null;
              } else {
                x_1_7 = (x_1_2 === "\r");
                if (!(x_1_7 == null || x_1_7 === false)) {
                  x_1_1 = false;
                } else {
                  x_1_8 = (x_1_2 === "\n");
                  if (!(x_1_8 == null || x_1_8 === false)) {
                    x_1_1 = false;
                  } else {
                    x_1_9 = (x_1_2 === "\f");
                    if (!(x_1_9 == null || x_1_9 === false)) {
                      x_1_1 = false;
                    } else {
                      x_1_10 = (x_1_2 === ";");
                      if (!(x_1_10 == null || x_1_10 === false)) {
                        x_1_1 = true;
                      } else if (!(x_1_1 == null || x_1_1 === false)) {
                        x_1_0 = null;
                      } else {
                        newark["poet/reader::unread-char"](a_1_0);
                        x_1_0 = null;
                        break label_1_1;
                      };
                    };
                  };
                };
              };
            };
          };
        };
      };
    };
    return x_1_0;
  });
  newark["poet/reader::read-whitespace"][":name"] = "read-whitespace";
  newark["poet/reader::invoke-reader-macro"] = (function (a_1_0, a_1_1) {
    var x_1_0, x_1_1;
    label_1_0:{
      x_1_1 = newark["poet/reader::reader-macros"][a_1_0];
      if (!(x_1_1 == null || x_1_1 === false)) {
        x_1_0 = x_1_1(a_1_1);
      } else {
        x_1_0 = null;
      };
    };
    return x_1_0;
  });
  newark["poet/reader::invoke-reader-macro"][":name"] = "invoke-reader-macro";
  newark["poet/reader::read-form"] = (function (a_1_0) {
    var x_1_0, x_1_1, x_1_2;
    label_1_0:{
      newark["poet/reader::read-whitespace"](a_1_0);
      x_1_1 = newark["poet/reader::peek-char"](a_1_0);
      if (!(x_1_1 == null || x_1_1 === false)) {
        x_1_2 = newark["poet/reader::invoke-reader-macro"](x_1_1, a_1_0);
        if (!(x_1_2 == null || x_1_2 === false)) {
          x_1_0 = x_1_2;
        } else {
          x_1_0 = newark["poet/reader::read-atom"](a_1_0);
        };
      } else {
        x_1_0 = null;
      };
    };
    return x_1_0;
  });
  newark["poet/reader::read-form"][":name"] = "read-form";
  newark["poet/reader::read-chars-until"] = (function (a_1_0, a_1_1) {
    var x_1_0, x_1_1, x_1_2, x_1_3, x_1_4;
    label_1_0:{
      x_1_1 = [];
      label_1_1:for(;;) {
        x_1_3 = newark["poet/reader::peek-char"](a_1_1);
        x_1_2 = a_1_0(x_1_3);
        if (!(x_1_2 == null || x_1_2 === false)) {
          break label_1_1;
        } else {
          x_1_4 = newark["poet/reader::read-char"](a_1_1);
          x_1_1["push"](x_1_4);
        };
      };
      x_1_0 = x_1_1["join"]("");
    };
    return x_1_0;
  });
  newark["poet/reader::read-chars-until"][":name"] = "read-chars-until";
  newark["poet/reader::read-atom"] = (function (a_1_0) {
    var x_1_0, x_1_1, x_1_2, x_1_3, x_1_4, x_1_5, x_1_6, x_1_7, x_1_8;
    label_1_0:{
      x_1_1 = newark["poet/reader::read-chars-until"](newark["poet/reader::not-constituent?"], a_1_0);
      x_1_2 = newark["poet/reader::int-regex"]["test"](x_1_1);
      if (!(x_1_2 == null || x_1_2 === false)) {
        x_1_0 = newark["core::js"]["parseInt"](x_1_1);
      } else {
        x_1_3 = newark["poet/reader::oct-regex"]["test"](x_1_1);
        if (!(x_1_3 == null || x_1_3 === false)) {
          x_1_0 = newark["core::js"]["parseInt"](x_1_1, 8);
        } else {
          x_1_4 = newark["poet/reader::hex-regex"]["test"](x_1_1);
          if (!(x_1_4 == null || x_1_4 === false)) {
            x_1_0 = newark["core::js"]["parseInt"](x_1_1, 16);
          } else {
            x_1_5 = newark["poet/reader::float-regex"]["test"](x_1_1);
            if (!(x_1_5 == null || x_1_5 === false)) {
              x_1_0 = newark["core::js"]["parseFloat"](x_1_1);
            } else if (!(x_0_13 == null || x_0_13 === false)) {
              x_1_7 = newark["prelude::first"](x_1_1);
              x_1_6 = (x_1_7 === ":");
              if (!(x_1_6 == null || x_1_6 === false)) {
                x_1_8 = x_1_1["substring"](1);
                x_1_0 = newark["prelude::make-keyword"](x_1_8);
              } else {
                x_1_0 = newark["poet/reader::parse-symbol"](x_1_1);
              };
            } else {
              x_1_0 = null;
            };
          };
        };
      };
    };
    return x_1_0;
  });
  newark["poet/reader::read-atom"][":name"] = "read-atom";
  newark["poet/reader::parse-symbol"] = (function (a_1_0) {
    var x_1_0, x_1_1, x_1_2;
    label_1_0:{
      x_1_1 = newark["poet/reader::qualified-symbol-regex"]["test"](a_1_0);
      if (!(x_1_1 == null || x_1_1 === false)) {
        x_1_2 = a_1_0["split"]("::");
        x_1_0 = newark["prelude::make-qualified-symbol"](x_1_2["0"], x_1_2["1"]);
      } else {
        x_1_0 = newark["prelude::make-symbol"](a_1_0);
      };
    };
    return x_1_0;
  });
  newark["poet/reader::parse-symbol"][":name"] = "parse-symbol";
  x_0_14 = {};
  x_0_14["t"] = "\t";
  x_0_14["n"] = "\n";
  x_0_14["r"] = "\r";
  x_0_14["f"] = "\f";
  x_0_14["b"] = "\b";
  x_0_14["\\"] = "\\";
  x_0_14["\""] = "\"";
  newark["poet/reader::escape-map"] = x_0_14;
  newark["poet/reader::escape-char"] = (function (a_1_0) {
    var x_1_0, x_1_1, x_1_2, x_1_3;
    label_1_0:{
      x_1_1 = newark["poet/reader::escape-map"][a_1_0];
      if (!(x_1_1 == null || x_1_1 === false)) {
        x_1_0 = x_1_1;
      } else {
        x_1_3 = ("invalid escape character: " + a_1_0);
        x_1_2 = newark["core::js"]["Error"](x_1_3);
        throw x_1_2;
      };
    };
    return x_1_0;
  });
  newark["poet/reader::escape-char"][":name"] = "escape-char";
  newark["poet/reader::read-string-literal"] = (function (a_1_0) {
    var x_1_0, x_1_1, x_1_2, x_1_3, x_1_4, x_1_5, x_1_6, x_1_7, x_1_8, x_1_9, x_1_10;
    label_1_0:{
      x_1_1 = [];
      x_1_2 = newark["poet/reader::get-position"](a_1_0);
      newark["poet/reader::read-char"](a_1_0);
      label_1_1:for(;;) {
        x_1_3 = newark["poet/reader::read-char"](a_1_0);
        x_1_4 = x_1_3;
        x_1_5 = (x_1_4 === null);
        if (!(x_1_5 == null || x_1_5 === false)) {
          x_1_6 = newark["prelude::print-str"]("unclosed string literal at", x_1_2);
          newark["poet/reader::eof-error!"](x_1_6);
        } else {
          x_1_7 = (x_1_4 === "\"");
          if (!(x_1_7 == null || x_1_7 === false)) {
            break label_1_1;
          } else {
            x_1_8 = (x_1_4 === "\\");
            if (!(x_1_8 == null || x_1_8 === false)) {
              x_1_10 = newark["poet/reader::read-char"](a_1_0);
              x_1_9 = newark["poet/reader::escape-char"](x_1_10);
              x_1_1["push"](x_1_9);
            } else {
              x_1_1["push"](x_1_3);
            };
          };
        };
      };
      x_1_0 = x_1_1["join"]("");
    };
    return x_1_0;
  });
  newark["poet/reader::read-string-literal"][":name"] = "read-string-literal";
  newark["poet/reader::get-dispatch-macro"] = (function (a_1_0, a_1_1) {
    var x_1_0, x_1_1, x_1_2, x_1_3, x_1_4;
    label_1_0:{
      x_1_1 = newark["poet/reader::dispatch-reader-macros"][a_1_1];
      if (!(x_1_1 == null || x_1_1 === false)) {
        x_1_0 = x_1_1;
      } else {
        x_1_4 = newark["poet/reader::get-position"](a_1_0);
        x_1_3 = newark["prelude::print-str"]("invalid reader-macro character", a_1_1, "at", x_1_4);
        x_1_2 = newark["core::js"]["Error"](x_1_3);
        throw x_1_2;
      };
    };
    return x_1_0;
  });
  newark["poet/reader::get-dispatch-macro"][":name"] = "get-dispatch-macro";
  newark["poet/reader::read-dispatch-macro"] = (function (a_1_0) {
    var x_1_0, x_1_1, x_1_2;
    label_1_0:{
      newark["poet/reader::read-char"](a_1_0);
      x_1_2 = newark["poet/reader::peek-char"](a_1_0);
      x_1_1 = newark["poet/reader::get-dispatch-macro"](a_1_0, x_1_2);
      x_1_0 = x_1_1(a_1_0);
    };
    return x_1_0;
  });
  newark["poet/reader::read-dispatch-macro"][":name"] = "read-dispatch-macro";
  newark["poet/reader::read-forms-until"] = (function (a_1_0, a_1_1, a_1_2, a_1_3) {
    var x_1_0, x_1_1, x_1_2, x_1_3, x_1_4, x_1_5, x_1_6;
    label_1_0:{
      x_1_1 = newark["poet/reader::get-position"](a_1_1);
      x_1_2 = [];
      if (!(a_1_3 == null || a_1_3 === false)) {
        newark["poet/reader::read-char"](a_1_1);
      };
      label_1_1:for(;;) {
        x_1_3 = a_1_0(a_1_1);
        if (!(x_1_3 == null || x_1_3 === false)) {
          break label_1_1;
        } else {
          x_1_5 = newark["poet/reader::read-form"](a_1_1);
          if (!(x_1_5 == null || x_1_5 === false)) {;} else {
            x_1_6 = newark["prelude::print-str"](a_1_2, "at", x_1_1);
            newark["poet/reader::eof-error!"](x_1_6);
          };
          x_1_4 = x_1_2["push"](x_1_5);
          if (!(x_1_4 == null || x_1_4 === false)) {;};
        };
      };
      x_1_0 = x_1_2;
    };
    return x_1_0;
  });
  newark["poet/reader::read-forms-until"][":name"] = "read-forms-until";
  newark["poet/reader::list-end?"] = (function (a_1_0) {
    var x_1_0, x_1_1, x_1_2;
    label_1_0:{
      newark["poet/reader::read-whitespace"](a_1_0);
      x_1_2 = newark["poet/reader::peek-char"](a_1_0);
      x_1_1 = (x_1_2 === ")");
      if (!(x_1_1 == null || x_1_1 === false)) {
        newark["poet/reader::read-char"](a_1_0);
        x_1_0 = true;
      } else {
        x_1_0 = null;
      };
    };
    return x_1_0;
  });
  newark["poet/reader::list-end?"][":name"] = "list-end?";
  newark["poet/reader::read-list"] = (function (a_1_0) {
    var x_1_0, x_1_1;
    label_1_0:{
      x_1_1 = newark["poet/reader::read-forms-until"](newark["poet/reader::list-end?"], a_1_0, "unclosed list", true);
      x_1_0 = newark["prelude::array->list"](x_1_1);
    };
    return x_1_0;
  });
  newark["poet/reader::read-list"][":name"] = "read-list";
  newark["poet/reader::array-end?"] = (function (a_1_0) {
    var x_1_0, x_1_1, x_1_2;
    label_1_0:{
      newark["poet/reader::read-whitespace"](a_1_0);
      x_1_2 = newark["poet/reader::peek-char"](a_1_0);
      x_1_1 = (x_1_2 === "]");
      if (!(x_1_1 == null || x_1_1 === false)) {
        newark["poet/reader::read-char"](a_1_0);
        x_1_0 = true;
      } else {
        x_1_0 = null;
      };
    };
    return x_1_0;
  });
  newark["poet/reader::array-end?"][":name"] = "array-end?";
  newark["poet/reader::read-array"] = (function (a_1_0) {
    var x_1_0;
    label_1_0:{
      x_1_0 = newark["poet/reader::read-forms-until"](newark["poet/reader::array-end?"], a_1_0, "unclosed array", true);
    };
    return x_1_0;
  });
  newark["poet/reader::read-array"][":name"] = "read-array";
  newark["poet/reader::make-literal-reader"] = (function (a_1_0, a_1_1) {
    var x_1_0;
    label_1_0:{
      x_1_0 = (function (a_2_0) {
        var x_2_0, x_2_1, x_2_2, x_2_3, x_2_4, x_2_5;
        x_2_1 = newark["poet/reader::get-position"](a_2_0);
        x_2_2 = newark["poet/reader::read-chars-until"](newark["poet/reader::terminal?"], a_2_0);
        x_2_3 = (x_2_2 === a_1_0);
        if (!(x_2_3 == null || x_2_3 === false)) {
          x_2_0 = a_1_1;
        } else {
          x_2_5 = newark["prelude::print-str"]("invalid dispatch macro:", x_2_2, "at", x_2_1);
          x_2_4 = newark["core::js"]["Error"](x_2_5);
          throw x_2_4;
        };
        return x_2_0;
      });
    };
    return x_1_0;
  });
  newark["poet/reader::make-literal-reader"][":name"] = "make-literal-reader";
  newark["poet/reader::mismatched-delimiter"] = (function (a_1_0) {
    var x_1_0, x_1_1, x_1_2, x_1_3, x_1_4;
    label_1_0:{
      x_1_3 = newark["poet/reader::peek-char"](a_1_0);
      x_1_4 = newark["poet/reader::get-position"](a_1_0);
      x_1_2 = newark["prelude::print-str"]("mismatched delimiter", x_1_3, "at", x_1_4);
      x_1_1 = newark["core::js"]["Error"](x_1_2);
      throw x_1_1;
    };
    return x_1_0;
  });
  newark["poet/reader::mismatched-delimiter"][":name"] = "mismatched-delimiter";
  x_0_15 = newark["poet/reader::reader-macros"];
  x_0_15["("] = newark["poet/reader::read-list"];
  x_0_15["["] = newark["poet/reader::read-array"];
  x_0_15[")"] = newark["poet/reader::mismatched-delimiter"];
  x_0_15["]"] = newark["poet/reader::mismatched-delimiter"];
  x_0_15["#"] = newark["poet/reader::read-dispatch-macro"];
  x_0_15["\""] = newark["poet/reader::read-string-literal"];
  x_0_16 = newark["poet/reader::dispatch-reader-macros"];
  x_0_16["n"] = newark["poet/reader::make-literal-reader"]("nil", null);
  x_0_16["t"] = newark["poet/reader::make-literal-reader"]("t", true);
  x_0_16["f"] = newark["poet/reader::make-literal-reader"]("f", false);
  x_0_18 = (function (a_1_0) {
    var x_1_0;
    x_1_0 = null;
    return x_1_0;
  });
  x_0_17 = x_0_18();
  x_0_16["v"] = newark["poet/reader::make-literal-reader"]("void", x_0_17);
  x_0_16["/"] = newark["poet/reader::read-regex-literal"];
  x_0_16["\""] = newark["poet/reader::read-heredoc"];
  x_0_0 = x_0_16;
  return x_0_0;
})();

// poet/env.newark

(function () {
  var x_0_0, x_0_1, x_0_2, x_0_3, x_0_4, x_0_5, x_0_6, x_0_7, x_0_8, x_0_9, x_0_10, x_0_11, x_0_12, x_0_13, x_0_14;
  newark["poet/env::make-generator"] = (function () {
    var x_1_0, x_1_1;
    label_1_0:{
      x_1_1 = 0;
      x_1_0 = (function () {
        var x_2_0;
        x_1_1 = (x_1_1 + 1);
        x_2_0 = x_1_1;
        return x_2_0;
      });
    };
    return x_1_0;
  });
  newark["poet/env::make-generator"][":name"] = "make-generator";
  newark["poet/env::next-tag-id"] = newark["poet/env::make-generator"]();
  x_0_1 = {};
  newark["poet/env::packages"] = x_0_1;
  newark["poet/env::Env"] = (function (a_1_0, a_1_1) {
    var x_1_0, x_1_1, x_1_2;
    x_1_0 = this;
    x_1_2 = (x_1_0 instanceof newark["poet/env::Env"]);
    if (!(x_1_2 == null || x_1_2 === false)) {
      x_1_0["package"] = a_1_0;
      x_1_0["bindings"] = a_1_1;
      x_1_1 = x_1_0;
    } else {
      x_1_1 = new newark["poet/env::Env"](a_1_0, a_1_1);
    };
    return x_1_1;
  });
  newark["poet/env::Env"][":name"] = "Env";
  newark["poet/env::Tag"] = (function (a_1_0, a_1_1) {
    var x_1_0, x_1_1, x_1_2;
    x_1_0 = this;
    x_1_2 = (x_1_0 instanceof newark["poet/env::Tag"]);
    if (!(x_1_2 == null || x_1_2 === false)) {
      x_1_0["env"] = a_1_0;
      x_1_0["id"] = a_1_1;
      x_1_1 = x_1_0;
    } else {
      x_1_1 = new newark["poet/env::Tag"](a_1_0, a_1_1);
    };
    return x_1_1;
  });
  newark["poet/env::Tag"][":name"] = "Tag";
  newark["poet/env::make-tag"] = (function (a_1_0) {
    var x_1_0, x_1_1;
    label_1_0:{
      x_1_1 = newark["poet/env::next-tag-id"]();
      x_1_0 = new newark["poet/env::Tag"](a_1_0, x_1_1);
    };
    return x_1_0;
  });
  newark["poet/env::make-tag"][":name"] = "make-tag";
  newark["poet/env::make-env"] = (function (a_1_0, a_1_1) {
    var x_1_0, x_1_1, x_1_2, x_1_3, x_1_4;
    label_1_0:{
      x_1_2 = a_1_1;
      if (!(x_1_2 == null || x_1_2 === false)) {
        x_1_1 = x_1_2;
      } else {
        x_1_4 = {};
        x_1_3 = x_1_4;
        x_1_1 = newark["prelude::list"](x_1_3);
      };
      x_1_0 = new newark["poet/env::Env"](a_1_0, x_1_1);
    };
    return x_1_0;
  });
  newark["poet/env::make-env"][":name"] = "make-env";
  newark["poet/env::get-package"] = (function (a_1_0) {
    var x_1_0, x_1_1, x_1_2;
    label_1_0:{
      x_1_1 = newark["poet/env::to-name"](a_1_0);
      x_1_2 = newark["poet/env::packages"][x_1_1];
      if (!(x_1_2 == null || x_1_2 === false)) {;} else {
        newark["poet/env::packages"][x_1_1] = newark["poet/env::make-env"](x_1_1);
      };
      x_1_0 = newark["poet/env::packages"][x_1_1];
    };
    return x_1_0;
  });
  newark["poet/env::get-package"][":name"] = "get-package";
  newark["poet/env::extend"] = (function (a_1_0) {
    var x_1_0, x_1_1, x_1_2, x_1_3;
    label_1_0:{
      x_1_3 = {};
      x_1_2 = x_1_3;
      x_1_1 = newark["prelude::cons"](x_1_2, a_1_0["bindings"]);
      x_1_0 = new newark["poet/env::Env"](a_1_0["package"], x_1_1);
    };
    return x_1_0;
  });
  newark["poet/env::extend"][":name"] = "extend";
  newark["poet/env::lookup*"] = (function (a_1_0, a_1_1, a_1_2) {
    var x_1_0, x_1_1, x_1_2, x_1_3, x_1_4;
    label_1_0:{
      x_1_1 = a_1_0["bindings"];
      label_1_1:for(;;) {
        x_1_2 = (x_1_1["size"] === 0);
        if (!(x_1_2 == null || x_1_2 === false)) {
          x_1_0 = null;
          break label_1_1;
        };
        x_1_3 = x_1_1["head"];
        x_1_4 = (newark["poet/env::k"] in x_1_3);
        if (!(x_1_4 == null || x_1_4 === false)) {
          x_1_0 = x_1_3[newark["poet/env::k"]];
          break label_1_1;
        };
        x_1_1 = x_1_1["tail"];
      };
    };
    return x_1_0;
  });
  newark["poet/env::lookup*"][":name"] = "lookup*";
  newark["poet/env::lookup"] = (function (a_1_0, a_1_1, a_1_2) {
    var x_1_0, x_1_1, x_1_2, x_1_3, x_1_4, x_1_5, x_1_6, x_1_7;
    label_1_0:{
      x_1_2 = newark["prelude::qualified-symbol?"](a_1_1);
      if (!(x_1_2 == null || x_1_2 === false)) {
        x_1_3 = newark["poet/env::get-package"](a_1_1["qualifier"]);
        x_1_4 = newark["poet/env::to-key"](a_1_1);
        x_1_1 = newark["poet/env::lookup*"](x_1_3, x_1_4, a_1_2);
      } else {
        x_1_1 = null;
      };
      if (!(x_1_1 == null || x_1_1 === false)) {
        x_1_0 = x_1_1;
      } else {
        x_1_6 = newark["poet/env::to-key"](a_1_1);
        x_1_5 = newark["poet/env::lookup*"](a_1_0, x_1_6);
        if (!(x_1_5 == null || x_1_5 === false)) {
          x_1_0 = x_1_5;
        } else {
          x_1_7 = newark["prelude::tagged-symbol?"](a_1_1);
          if (!(x_1_7 == null || x_1_7 === false)) {
            x_1_0 = newark["poet/env::lookup"](a_1_1["tag"]["env"], a_1_1["child"], a_1_2);
          } else {
            x_1_0 = null;
          };
        };
      };
    };
    return x_1_0;
  });
  newark["poet/env::lookup"][":name"] = "lookup";
  newark["poet/env::intern"] = (function (a_1_0, a_1_1, a_1_2) {
    var x_1_0, x_1_1, x_1_2;
    label_1_0:{
      x_1_1 = newark["prelude::first"](a_1_0["bindings"]);
      x_1_2 = newark["poet/env::to-key"](a_1_1);
      x_1_1[x_1_2] = a_1_2;
    };
    return x_1_0;
  });
  newark["poet/env::intern"][":name"] = "intern";
  x_0_4 = newark["prelude::next-generic-id"]();
  x_0_2 = (x_0_4 + ":" + "to-key");
  x_0_3 = (function (a_1_0) {
    var x_1_0, x_1_1, x_1_2, x_1_3, x_1_4;
    label_1_0:{
      x_1_3 = (a_1_0 == null);
      if (!(x_1_3 == null || x_1_3 === false)) {
        x_1_1 = newark["prelude::nil-vtable"];
      } else {
        x_1_1 = a_1_0;
      };
      x_1_4 = x_1_1[x_0_2];
      if (!(x_1_4 == null || x_1_4 === false)) {
        x_1_2 = x_1_4;
      } else {
        x_1_2 = x_0_3[":default"];
      };
      x_1_0 = x_1_2(a_1_0);
    };
    return x_1_0;
  });
  x_0_3[":name"] = "to-key";
  x_0_3[":generic-id"] = x_0_2;
  newark["poet/env::to-key"] = x_0_3;
  x_0_5 = (function (a_1_0) {
    var x_1_0;
    x_1_0 = ("STRING(" + a_1_0 + ")");
    return x_1_0;
  });
  newark["prelude::extend-generic*"](newark["poet/env::to-key"], newark["core::js"]["String"], x_0_5);
  x_0_6 = (function (a_1_0) {
    var x_1_0, x_1_1;
    x_1_1 = newark["prelude::map"](newark["poet/env::to-key"], a_1_0);
    x_1_0 = newark["prelude::print-str"](x_1_1);
    return x_1_0;
  });
  newark["prelude::extend-generic*"](newark["poet/env::to-key"], newark["core::js"]["Array"], x_0_6);
  x_0_7 = (function (a_1_0) {
    var x_1_0;
    x_1_0 = ("KEYWORD(" + a_1_0["name"] + ")");
    return x_1_0;
  });
  newark["prelude::extend-generic*"](newark["poet/env::to-key"], newark["prelude::Keyword"], x_0_7);
  x_0_8 = (function (a_1_0) {
    var x_1_0, x_1_1, x_1_2, x_1_3;
    x_1_1 = a_1_0["key"];
    if (!(x_1_1 == null || x_1_1 === false)) {;} else {
      x_1_2 = newark["prelude::tagged-symbol?"](a_1_0);
      if (!(x_1_2 == null || x_1_2 === false)) {
        x_1_3 = newark["poet/env::to-key"](a_1_0["child"]);
        a_1_0["key"] = ("TAG(" + a_1_0["id"] + newark["prelude::+"] + ")" + x_1_3);
      } else {
        a_1_0["key"] = ("SYMBOL(" + a_1_0["name"] + ")");
      };
    };
    x_1_0 = a_1_0["key"];
    return x_1_0;
  });
  newark["prelude::extend-generic*"](newark["poet/env::to-key"], newark["prelude::Symbol"], x_0_8);
  x_0_11 = newark["prelude::next-generic-id"]();
  x_0_9 = (x_0_11 + ":" + "to-name");
  x_0_10 = (function (a_1_0) {
    var x_1_0, x_1_1, x_1_2, x_1_3, x_1_4;
    label_1_0:{
      x_1_3 = (a_1_0 == null);
      if (!(x_1_3 == null || x_1_3 === false)) {
        x_1_1 = newark["prelude::nil-vtable"];
      } else {
        x_1_1 = a_1_0;
      };
      x_1_4 = x_1_1[x_0_9];
      if (!(x_1_4 == null || x_1_4 === false)) {
        x_1_2 = x_1_4;
      } else {
        x_1_2 = x_0_10[":default"];
      };
      x_1_0 = x_1_2(a_1_0);
    };
    return x_1_0;
  });
  x_0_10[":name"] = "to-name";
  x_0_10[":generic-id"] = x_0_9;
  newark["poet/env::to-name"] = x_0_10;
  x_0_12 = (function (a_1_0) {
    var x_1_0;
    x_1_0 = a_1_0;
    return x_1_0;
  });
  newark["prelude::extend-generic*"](newark["poet/env::to-name"], newark["core::js"]["String"], x_0_12);
  x_0_13 = (function (a_1_0) {
    var x_1_0;
    x_1_0 = a_1_0["name"];
    return x_1_0;
  });
  newark["prelude::extend-generic*"](newark["poet/env::to-name"], newark["prelude::Keyword"], x_0_13);
  x_0_14 = (function (a_1_0) {
    var x_1_0;
    x_1_0 = a_1_0["name"];
    return x_1_0;
  });
  x_0_0 = newark["prelude::extend-generic*"](newark["poet/env::to-name"], newark["prelude::Symbol"], x_0_14);
  return x_0_0;
})();

// poet.newark

(function () {
  var x_0_0, x_0_1, x_0_2, x_0_3, x_0_4, x_0_5, x_0_6, x_0_7, x_0_8, x_0_9, x_0_10, x_0_11, x_0_12, x_0_13, x_0_14, x_0_15, x_0_16, x_0_17, x_0_18, x_0_19, x_0_20, x_0_21, x_0_22, x_0_23, x_0_24, x_0_25, x_0_26, x_0_27, x_0_28, x_0_29, x_0_30, x_0_31, x_0_32, x_0_33, x_0_34, x_0_35, x_0_36, x_0_37, x_0_38, x_0_39, x_0_40, x_0_41, x_0_42, x_0_43, x_0_44, x_0_45, x_0_46, x_0_47, x_0_48, x_0_49, x_0_50, x_0_51, x_0_52, x_0_53, x_0_54, x_0_55, x_0_56, x_0_57, x_0_58, x_0_59, x_0_60, x_0_61, x_0_62, x_0_63, x_0_64, x_0_65, x_0_66, x_0_67, x_0_68, x_0_69, x_0_70, x_0_71, x_0_72, x_0_73, x_0_74, x_0_75, x_0_76, x_0_77, x_0_78, x_0_79, x_0_80, x_0_81, x_0_82, x_0_83, x_0_84, x_0_85, x_0_86, x_0_87, x_0_88, x_0_89, x_0_90, x_0_91, x_0_92, x_0_93, x_0_94, x_0_95, x_0_96, x_0_97, x_0_98, x_0_99, x_0_100, x_0_101, x_0_102, x_0_103, x_0_104, x_0_105, x_0_106, x_0_107, x_0_108, x_0_109, x_0_110, x_0_111, x_0_112, x_0_113;
  x_0_94 = newark["prelude::make-keyword"]("LABEL");
  x_0_90 = newark["prelude::make-keyword"]("foo");
  newark["poet::p"] = (function () {
    var x_1_0;
    label_1_0:{
      x_1_0 = null;
    };
    return x_1_0;
  });
  newark["poet::p"][":name"] = "p";
  x_0_2 = newark["poet/reader::Reader"]("42");
  x_0_1 = newark["poet/reader::read-form"](x_0_2);
  x_0_4 = newark["prelude::make-symbol"]("read-form");
  x_0_6 = newark["prelude::make-symbol"]("Reader");
  x_0_5 = newark["prelude::list"](x_0_6, "42");
  x_0_3 = newark["prelude::list"](x_0_4, x_0_5);
  newark["prelude::pr"](x_0_3);
  newark["prelude::print"](" => ");
  newark["prelude::prn"](x_0_1);
  x_0_9 = newark["poet/reader::Reader"]("42");
  x_0_8 = newark["poet/reader::read-form"](x_0_9);
  x_0_7 = newark["prelude::number?"](x_0_8);
  x_0_11 = newark["prelude::make-symbol"]("number?");
  x_0_13 = newark["prelude::make-symbol"]("read-form");
  x_0_15 = newark["prelude::make-symbol"]("Reader");
  x_0_14 = newark["prelude::list"](x_0_15, "42");
  x_0_12 = newark["prelude::list"](x_0_13, x_0_14);
  x_0_10 = newark["prelude::list"](x_0_11, x_0_12);
  newark["prelude::pr"](x_0_10);
  newark["prelude::print"](" => ");
  newark["prelude::prn"](x_0_7);
  x_0_17 = newark["poet/reader::Reader"]("foo");
  x_0_16 = newark["poet/reader::read-form"](x_0_17);
  x_0_19 = newark["prelude::make-symbol"]("read-form");
  x_0_21 = newark["prelude::make-symbol"]("Reader");
  x_0_20 = newark["prelude::list"](x_0_21, "foo");
  x_0_18 = newark["prelude::list"](x_0_19, x_0_20);
  newark["prelude::pr"](x_0_18);
  newark["prelude::print"](" => ");
  newark["prelude::prn"](x_0_16);
  x_0_24 = newark["poet/reader::Reader"]("foo");
  x_0_23 = newark["poet/reader::read-form"](x_0_24);
  x_0_22 = newark["prelude::symbol?"](x_0_23);
  x_0_26 = newark["prelude::make-symbol"]("symbol?");
  x_0_28 = newark["prelude::make-symbol"]("read-form");
  x_0_30 = newark["prelude::make-symbol"]("Reader");
  x_0_29 = newark["prelude::list"](x_0_30, "foo");
  x_0_27 = newark["prelude::list"](x_0_28, x_0_29);
  x_0_25 = newark["prelude::list"](x_0_26, x_0_27);
  newark["prelude::pr"](x_0_25);
  newark["prelude::print"](" => ");
  newark["prelude::prn"](x_0_22);
  x_0_32 = newark["poet/reader::Reader"](":foo");
  x_0_31 = newark["poet/reader::read-form"](x_0_32);
  x_0_34 = newark["prelude::make-symbol"]("read-form");
  x_0_36 = newark["prelude::make-symbol"]("Reader");
  x_0_35 = newark["prelude::list"](x_0_36, ":foo");
  x_0_33 = newark["prelude::list"](x_0_34, x_0_35);
  newark["prelude::pr"](x_0_33);
  newark["prelude::print"](" => ");
  newark["prelude::prn"](x_0_31);
  x_0_39 = newark["poet/reader::Reader"](":foo");
  x_0_38 = newark["poet/reader::read-form"](x_0_39);
  x_0_37 = newark["prelude::keyword?"](x_0_38);
  x_0_41 = newark["prelude::make-symbol"]("keyword?");
  x_0_43 = newark["prelude::make-symbol"]("read-form");
  x_0_45 = newark["prelude::make-symbol"]("Reader");
  x_0_44 = newark["prelude::list"](x_0_45, ":foo");
  x_0_42 = newark["prelude::list"](x_0_43, x_0_44);
  x_0_40 = newark["prelude::list"](x_0_41, x_0_42);
  newark["prelude::pr"](x_0_40);
  newark["prelude::print"](" => ");
  newark["prelude::prn"](x_0_37);
  x_0_47 = newark["poet/reader::Reader"]("foo::bar");
  x_0_46 = newark["poet/reader::read-form"](x_0_47);
  x_0_49 = newark["prelude::make-symbol"]("read-form");
  x_0_51 = newark["prelude::make-symbol"]("Reader");
  x_0_50 = newark["prelude::list"](x_0_51, "foo::bar");
  x_0_48 = newark["prelude::list"](x_0_49, x_0_50);
  newark["prelude::pr"](x_0_48);
  newark["prelude::print"](" => ");
  newark["prelude::prn"](x_0_46);
  x_0_54 = newark["poet/reader::Reader"]("foo::bar");
  x_0_53 = newark["poet/reader::read-form"](x_0_54);
  x_0_52 = newark["prelude::qualified-symbol?"](x_0_53);
  x_0_56 = newark["prelude::make-symbol"]("qualified-symbol?");
  x_0_58 = newark["prelude::make-symbol"]("read-form");
  x_0_60 = newark["prelude::make-symbol"]("Reader");
  x_0_59 = newark["prelude::list"](x_0_60, "foo::bar");
  x_0_57 = newark["prelude::list"](x_0_58, x_0_59);
  x_0_55 = newark["prelude::list"](x_0_56, x_0_57);
  newark["prelude::pr"](x_0_55);
  newark["prelude::print"](" => ");
  newark["prelude::prn"](x_0_52);
  x_0_61 = newark["poet/reader::terminal?"](")");
  x_0_63 = newark["prelude::make-symbol"]("terminal?");
  x_0_62 = newark["prelude::list"](x_0_63, ")");
  newark["prelude::pr"](x_0_62);
  newark["prelude::print"](" => ");
  newark["prelude::prn"](x_0_61);
  x_0_64 = newark["poet/reader::not-constituent?"](")");
  x_0_66 = newark["prelude::make-symbol"]("not-constituent?");
  x_0_65 = newark["prelude::list"](x_0_66, ")");
  newark["prelude::pr"](x_0_65);
  newark["prelude::print"](" => ");
  newark["prelude::prn"](x_0_64);
  x_0_68 = newark["poet/reader::Reader"]("(1 2 3 4 5 6)");
  x_0_67 = newark["poet/reader::read-form"](x_0_68);
  x_0_70 = newark["prelude::make-symbol"]("read-form");
  x_0_72 = newark["prelude::make-symbol"]("Reader");
  x_0_71 = newark["prelude::list"](x_0_72, "(1 2 3 4 5 6)");
  x_0_69 = newark["prelude::list"](x_0_70, x_0_71);
  newark["prelude::pr"](x_0_69);
  newark["prelude::print"](" => ");
  newark["prelude::prn"](x_0_67);
  x_0_74 = newark["poet/reader::Reader"]("[ a b (1 :foo 2 :bar 3 [4 5] 6) ]");
  x_0_73 = newark["poet/reader::read-form"](x_0_74);
  x_0_76 = newark["prelude::make-symbol"]("read-form");
  x_0_78 = newark["prelude::make-symbol"]("Reader");
  x_0_77 = newark["prelude::list"](x_0_78, "[ a b (1 :foo 2 :bar 3 [4 5] 6) ]");
  x_0_75 = newark["prelude::list"](x_0_76, x_0_77);
  newark["prelude::pr"](x_0_75);
  newark["prelude::print"](" => ");
  newark["prelude::prn"](x_0_73);
  x_0_79 = newark["poet/env::to-key"]("foo");
  x_0_81 = newark["prelude::make-symbol"]("to-key");
  x_0_80 = newark["prelude::list"](x_0_81, "foo");
  newark["prelude::pr"](x_0_80);
  newark["prelude::print"](" => ");
  newark["prelude::prn"](x_0_79);
  x_0_83 = newark["prelude::make-symbol"]("foo");
  x_0_82 = newark["poet/env::to-key"](x_0_83);
  x_0_85 = newark["prelude::make-symbol"]("to-key");
  x_0_87 = newark["prelude::make-qualified-symbol"]("core", "quote");
  x_0_88 = newark["prelude::make-symbol"]("foo");
  x_0_86 = newark["prelude::list"](x_0_87, x_0_88);
  x_0_84 = newark["prelude::list"](x_0_85, x_0_86);
  newark["prelude::pr"](x_0_84);
  newark["prelude::print"](" => ");
  newark["prelude::prn"](x_0_82);
  x_0_89 = newark["poet/env::to-key"](x_0_90);
  x_0_92 = newark["prelude::make-symbol"]("to-key");
  x_0_91 = newark["prelude::list"](x_0_92, x_0_90);
  newark["prelude::pr"](x_0_91);
  newark["prelude::print"](" => ");
  newark["prelude::prn"](x_0_89);
  x_0_95 = newark["prelude::make-symbol"]("foo");
  x_0_93 = newark["poet/env::to-key"]([x_0_94, x_0_95]);
  x_0_97 = newark["prelude::make-symbol"]("to-key");
  x_0_99 = newark["prelude::make-qualified-symbol"]("core", "quote");
  x_0_100 = newark["prelude::make-symbol"]("foo");
  x_0_98 = newark["prelude::list"](x_0_99, x_0_100);
  x_0_96 = newark["prelude::list"](x_0_97, [x_0_94, x_0_98]);
  newark["prelude::pr"](x_0_96);
  newark["prelude::print"](" => ");
  newark["prelude::prn"](x_0_93);
  x_0_102 = newark["prelude::make-symbol"]("foo");
  x_0_101 = newark["poet/env::to-name"](x_0_102);
  x_0_104 = newark["prelude::make-symbol"]("to-name");
  x_0_106 = newark["prelude::make-qualified-symbol"]("core", "quote");
  x_0_107 = newark["prelude::make-symbol"]("foo");
  x_0_105 = newark["prelude::list"](x_0_106, x_0_107);
  x_0_103 = newark["prelude::list"](x_0_104, x_0_105);
  newark["prelude::pr"](x_0_103);
  newark["prelude::print"](" => ");
  newark["prelude::prn"](x_0_101);
  x_0_108 = newark["poet/env::to-name"](x_0_90);
  x_0_110 = newark["prelude::make-symbol"]("to-name");
  x_0_109 = newark["prelude::list"](x_0_110, x_0_90);
  newark["prelude::pr"](x_0_109);
  newark["prelude::print"](" => ");
  newark["prelude::prn"](x_0_108);
  x_0_111 = newark["poet/env::to-name"]("foo");
  x_0_113 = newark["prelude::make-symbol"]("to-name");
  x_0_112 = newark["prelude::list"](x_0_113, "foo");
  newark["prelude::pr"](x_0_112);
  newark["prelude::print"](" => ");
  x_0_0 = newark["prelude::prn"](x_0_111);
  return x_0_0;
})();

})();