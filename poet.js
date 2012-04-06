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

// poet/env.newark

(function () {
  var x_0_0, x_0_1, x_0_2, x_0_3, x_0_4, x_0_5, x_0_6, x_0_7, x_0_8, x_0_9, x_0_10, x_0_11, x_0_12, x_0_13, x_0_14, x_0_15;
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
        x_1_4 = x_1_3[a_1_1];
        if (!(x_1_4 == null || x_1_4 === false)) {
          x_1_0 = x_1_3[a_1_1];
          break label_1_0;
        };
        x_1_1 = x_1_1["tail"];
      };
    };
    return x_1_0;
  });
  newark["poet/env::lookup*"][":name"] = "lookup*";
  newark["poet/env::lookup"] = (function (a_1_0, a_1_1, a_1_2) {
    var x_1_0, x_1_1, x_1_2, x_1_3, x_1_4, x_1_5, x_1_6, x_1_7, x_1_8;
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
          x_1_8 = newark["prelude::tagged-symbol?"](a_1_1);
          if (!(x_1_8 == null || x_1_8 === false)) {
            x_1_7 = newark["poet/env::lookup"](a_1_1["tag"]["env"], a_1_1["child"], a_1_2);
          } else {
            x_1_7 = null;
          };
          if (!(x_1_7 == null || x_1_7 === false)) {
            x_1_0 = x_1_7;
          } else {
            x_1_0 = a_1_2;
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
    x_1_0 = "NIL";
    return x_1_0;
  });
  newark["prelude::extend-generic*"](newark["poet/env::to-key"], null, x_0_5);
  x_0_6 = (function (a_1_0) {
    var x_1_0;
    x_1_0 = ("STRING(" + a_1_0 + ")");
    return x_1_0;
  });
  newark["prelude::extend-generic*"](newark["poet/env::to-key"], newark["core::js"]["String"], x_0_6);
  x_0_7 = (function (a_1_0) {
    var x_1_0, x_1_1, x_1_2;
    x_1_2 = newark["prelude::map"](newark["poet/env::to-key"], a_1_0);
    x_1_1 = x_1_2["join"](" ");
    x_1_0 = ("[" + x_1_1 + "]");
    return x_1_0;
  });
  newark["prelude::extend-generic*"](newark["poet/env::to-key"], newark["core::js"]["Array"], x_0_7);
  x_0_8 = (function (a_1_0) {
    var x_1_0;
    x_1_0 = ("KEYWORD(" + a_1_0["name"] + ")");
    return x_1_0;
  });
  newark["prelude::extend-generic*"](newark["poet/env::to-key"], newark["prelude::Keyword"], x_0_8);
  x_0_9 = (function (a_1_0) {
    var x_1_0, x_1_1, x_1_2, x_1_3;
    x_1_1 = a_1_0["key"];
    if (!(x_1_1 == null || x_1_1 === false)) {;} else {
      x_1_2 = newark["prelude::tagged-symbol?"](a_1_0);
      if (!(x_1_2 == null || x_1_2 === false)) {
        x_1_3 = newark["poet/env::to-key"](a_1_0["child"]);
        a_1_0["key"] = ("TAG(" + a_1_0["tag"]["id"] + ")" + x_1_3);
      } else {
        a_1_0["key"] = ("SYMBOL(" + a_1_0["name"] + ")");
      };
    };
    x_1_0 = a_1_0["key"];
    return x_1_0;
  });
  newark["prelude::extend-generic*"](newark["poet/env::to-key"], newark["prelude::Symbol"], x_0_9);
  x_0_12 = newark["prelude::next-generic-id"]();
  x_0_10 = (x_0_12 + ":" + "to-name");
  x_0_11 = (function (a_1_0) {
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
      x_1_0 = x_1_2(a_1_0);
    };
    return x_1_0;
  });
  x_0_11[":name"] = "to-name";
  x_0_11[":generic-id"] = x_0_10;
  newark["poet/env::to-name"] = x_0_11;
  x_0_13 = (function (a_1_0) {
    var x_1_0;
    x_1_0 = a_1_0;
    return x_1_0;
  });
  newark["prelude::extend-generic*"](newark["poet/env::to-name"], newark["core::js"]["String"], x_0_13);
  x_0_14 = (function (a_1_0) {
    var x_1_0;
    x_1_0 = a_1_0["name"];
    return x_1_0;
  });
  newark["prelude::extend-generic*"](newark["poet/env::to-name"], newark["prelude::Keyword"], x_0_14);
  x_0_15 = (function (a_1_0) {
    var x_1_0;
    x_1_0 = a_1_0["name"];
    return x_1_0;
  });
  x_0_0 = newark["prelude::extend-generic*"](newark["poet/env::to-name"], newark["prelude::Symbol"], x_0_15);
  return x_0_0;
})();

// poet/syntax.newark

(function () {
  var x_0_0, x_0_1, x_0_2, x_0_3, x_0_4, x_0_5, x_0_6, x_0_7, x_0_8, x_0_9, x_0_10;
  x_0_10 = newark["prelude::make-keyword"]("WHAM!");
  x_0_5 = newark["prelude::make-keyword"]("identifier->string");
  x_0_6 = newark["prelude::make-keyword"]("NAME");
  x_0_7 = newark["prelude::make-keyword"]("PUT");
  x_0_3 = newark["prelude::make-keyword"]("ATOM");
  x_0_2 = newark["prelude::make-keyword"]("GET");
  x_0_1 = newark["prelude::make-keyword"]("else");
  x_0_8 = newark["prelude::make-keyword"]("ARRAY");
  x_0_9 = newark["prelude::make-keyword"]("SPLICE");
  x_0_4 = newark["prelude::make-keyword"]("LIST");
  newark["poet/syntax::dots?"] = (function (a_1_0) {
    var x_1_0, x_1_1;
    label_1_0:{
      x_1_1 = newark["prelude::symbol?"](a_1_0);
      if (!(x_1_1 == null || x_1_1 === false)) {
        x_1_0 = (a_1_0["name"] === "...");
      } else {
        x_1_0 = x_1_1;
      };
    };
    return x_1_0;
  });
  newark["poet/syntax::dots?"][":name"] = "dots?";
  newark["poet/syntax::dots-key"] = newark["poet/env::to-key"]("...");
  newark["poet/syntax::quoted-dots?"] = (function (a_1_0) {
    var x_1_0, x_1_1, x_1_2, x_1_3;
    label_1_0:{
      x_1_1 = newark["prelude::list?"](a_1_0);
      if (!(x_1_1 == null || x_1_1 === false)) {
        x_1_3 = newark["prelude::len"](a_1_0);
        x_1_2 = (x_1_3 === 2);
        if (!(x_1_2 == null || x_1_2 === false)) {
          x_1_0 = newark["poet/syntax::every?"](newark["poet/syntax::dots?"], a_1_0);
        } else {
          x_1_0 = x_1_2;
        };
      } else {
        x_1_0 = x_1_1;
      };
    };
    return x_1_0;
  });
  newark["poet/syntax::quoted-dots?"][":name"] = "quoted-dots?";
  newark["poet/syntax::extract-symbols"] = (function (a_1_0) {
    var x_1_0, x_1_1, x_1_2, x_1_3;
    label_1_0:{
      x_1_3 = {};
      x_1_1 = x_1_3;
      x_1_2 = (function (a_2_0) {
        var x_2_0, x_2_1, x_2_2, x_2_3;
        label_2_0:{
          x_2_1 = newark["poet/env::to-key"](a_2_0);
          x_2_2 = (x_2_1 in x_1_1);
          if (!(x_2_2 == null || x_2_2 === false)) {
            x_2_3 = newark["core::js"]["Error"]("repeated identifier in syntax pattern");
            throw x_2_3;
          } else {
            x_1_1[x_2_1] = true;
          };
        };
        return x_2_0;
      });
      x_1_2[":name"] = "push";
      newark["poet/syntax::extract-symbols*"](a_1_0, x_1_2);
      x_1_0 = x_1_1;
    };
    return x_1_0;
  });
  newark["poet/syntax::extract-symbols"][":name"] = "extract-symbols";
  newark["poet/syntax::extract-symbols*"] = (function (a_1_0, a_1_1) {
    var x_1_0, x_1_1, x_1_2, x_1_3, x_1_4, x_1_5, x_1_6, x_1_7, x_1_8, x_1_9, x_1_10, x_1_11, x_1_12, x_1_13;
    label_1_0:{
      x_1_1 = newark["prelude::symbol?"](a_1_0);
      if (!(x_1_1 == null || x_1_1 === false)) {
        x_1_3 = newark["poet/syntax::dots?"](a_1_0);
        x_1_2 = newark["prelude::not"](x_1_3);
        if (!(x_1_2 == null || x_1_2 === false)) {
          x_1_0 = a_1_1(a_1_0);
        } else {
          x_1_0 = null;
        };
      } else {
        x_1_4 = newark["prelude::list?"](a_1_0);
        if (!(x_1_4 == null || x_1_4 === false)) {
          x_1_5 = a_1_0;
          label_1_1:for(;;) {
            x_1_6 = (x_1_5["size"] === 0);
            if (!(x_1_6 == null || x_1_6 === false)) {
              x_1_0 = null;
              break label_1_1;
            };
            x_1_7 = x_1_5["head"];
            newark["poet/syntax::extract-symbols*"](x_1_7, a_1_1);
            x_1_5 = x_1_5["tail"];
          };
        } else {
          x_1_8 = newark["prelude::array?"](newark["poet/syntax::x"]);
          if (!(x_1_8 == null || x_1_8 === false)) {
            x_1_9 = 0;
            x_1_10 = a_1_0;
            x_1_11 = x_1_10["length"];
            label_1_2:for(;;) {
              x_1_12 = (x_1_9 < x_1_11);
              if (!(x_1_12 == null || x_1_12 === false)) {
                x_1_13 = x_1_10[x_1_9];
                newark["poet/syntax::extract-symbols*"](x_1_13, a_1_1);
                x_1_9 = (x_1_9 + 1);
              } else {
                x_1_0 = null;
                break label_1_2;
              };
            };
          } else {
            x_1_0 = null;
          };
        };
      };
    };
    return x_1_0;
  });
  newark["poet/syntax::extract-symbols*"][":name"] = "extract-symbols*";
  newark["poet/syntax::make-free-predicate"] = (function (a_1_0) {
    var x_1_0, x_1_1;
    label_1_0:{
      x_1_1 = newark["poet/syntax::extract-symbols"](a_1_0);
      x_1_0 = (function (a_2_0) {
        var x_2_0, x_2_1;
        x_2_1 = newark["poet/env::to-key"](a_2_0);
        x_2_0 = (x_2_1 in x_1_1);
        return x_2_0;
      });
    };
    return x_1_0;
  });
  newark["poet/syntax::make-free-predicate"][":name"] = "make-free-predicate";
  newark["poet/syntax::bind*"] = (function (a_1_0, a_1_1, a_1_2) {
    var x_1_0, x_1_1, x_1_2;
    label_1_0:{
      x_1_1 = newark["poet/env::to-key"](a_1_1);
      x_1_2 = newark["prelude::not"](a_1_0[x_1_1]);
      if (!(x_1_2 == null || x_1_2 === false)) {
        a_1_0[x_1_1] = [];
      };
      x_1_0 = a_1_0[x_1_1]["push"](a_1_2);
    };
    return x_1_0;
  });
  newark["poet/syntax::bind*"][":name"] = "bind*";
  newark["poet/syntax::bind"] = (function (a_1_0, a_1_1, a_1_2) {
    var x_1_0, x_1_1;
    label_1_0:{
      x_1_1 = newark["poet/env::to-key"](a_1_1);
      a_1_0[x_1_1] = a_1_2;
    };
    return x_1_0;
  });
  newark["poet/syntax::bind"][":name"] = "bind";
  newark["poet/syntax::match"] = (function (a_1_0, a_1_1, a_1_2, a_1_3) {
    var x_1_0, x_1_1, x_1_2, x_1_3, x_1_4, x_1_5, x_1_6, x_1_7, x_1_8;
    try {
      label_1_0:{
        x_1_8 = true;
        x_1_2 = a_1_3;
        if (!(x_1_2 == null || x_1_2 === false)) {
          x_1_1 = x_1_2;
        } else {
          x_1_1 = newark["poet/syntax::bind"];
        };
        x_1_4 = a_1_2;
        if (!(x_1_4 == null || x_1_4 === false)) {
          x_1_3 = x_1_4;
        } else {
          x_1_5 = {};
          x_1_3 = x_1_5;
        };
        x_1_6 = (function (a_2_0, a_2_1) {
          var x_2_0;
          x_2_0 = x_1_1(x_1_3, a_2_0, a_2_1);
          return x_2_0;
        });
        x_1_7 = (function () {
          var x_2_0;
          if (!(x_1_8 == null || x_1_8 === false)) {
            x_1_0 = null;
            x_1_8 = false;
          };
          throw new Error('NON_LOCAL_EXIT');
          return x_2_0;
        });
        newark["poet/syntax::match-sexp"](a_1_0, a_1_1, x_1_6, x_1_7);
        x_1_0 = x_1_3;
      }
    } catch (e) {
      if (x_1_8) { throw e; } 
    } finally {
      x_1_8 = false;
    };
    return x_1_0;
  });
  newark["poet/syntax::match"][":name"] = "match";
  newark["poet/syntax::match-sexp"] = (function (a_1_0, a_1_1, a_1_2, a_1_3) {
    var x_1_0, x_1_1, x_1_2, x_1_3, x_1_4, x_1_5, x_1_6, x_1_7, x_1_8;
    label_1_0:{
      x_1_1 = newark["prelude::symbol?"](a_1_0);
      if (!(x_1_1 == null || x_1_1 === false)) {
        x_1_0 = a_1_2(a_1_0, a_1_1);
      } else {
        x_1_2 = newark["prelude::array?"](a_1_0);
        if (!(x_1_2 == null || x_1_2 === false)) {
          x_1_3 = newark["prelude::array?"](a_1_1);
          if (!(x_1_3 == null || x_1_3 === false)) {;} else {
            a_1_3();
          };
          x_1_4 = newark["prelude::array->list"](a_1_0);
          x_1_5 = newark["prelude::array->list"](a_1_1);
          x_1_0 = newark["poet/syntax::match-list"](x_1_4, x_1_5, a_1_2, a_1_3);
        } else {
          x_1_6 = newark["prelude::list?"](a_1_0);
          if (!(x_1_6 == null || x_1_6 === false)) {
            x_1_7 = newark["prelude::list?"](a_1_1);
            if (!(x_1_7 == null || x_1_7 === false)) {;} else {
              a_1_3();
            };
            x_1_0 = newark["poet/syntax::match-list"](a_1_0, a_1_1, a_1_2, a_1_3);
          } else if (!(x_0_1 == null || x_0_1 === false)) {
            x_1_8 = (a_1_0 === a_1_1);
            if (!(x_1_8 == null || x_1_8 === false)) {
              x_1_0 = null;
            } else {
              x_1_0 = a_1_3();
            };
          } else {
            x_1_0 = null;
          };
        };
      };
    };
    return x_1_0;
  });
  newark["poet/syntax::match-sexp"][":name"] = "match-sexp";
  newark["poet/syntax::match-dots"] = (function (a_1_0, a_1_1) {
    var x_1_0, x_1_1, x_1_2, x_1_3, x_1_4, x_1_5, x_1_6;
    label_1_0:{
      x_1_2 = {};
      x_1_1 = x_1_2;
      label_1_1:for(;;) {
        x_1_4 = newark["prelude::empty?"](a_1_1);
        if (!(x_1_4 == null || x_1_4 === false)) {
          x_1_3 = x_1_4;
        } else {
          x_1_6 = newark["prelude::first"](a_1_1);
          x_1_5 = newark["poet/syntax::match"](a_1_0, x_1_6, x_1_1, newark["poet/syntax::bind*"]);
          x_1_3 = newark["prelude::not"](x_1_5);
        };
        if (!(x_1_3 == null || x_1_3 === false)) {
          break label_1_1;
        } else {
          a_1_1 = newark["prelude::rest"](a_1_1);
        };
      };
      x_1_0 = [x_1_1, a_1_1];
    };
    return x_1_0;
  });
  newark["poet/syntax::match-dots"][":name"] = "match-dots";
  newark["poet/syntax::match-list"] = (function (a_1_0, a_1_1, a_1_2, a_1_3) {
    var x_1_0, x_1_1, x_1_2, x_1_3, x_1_4, x_1_5, x_1_6, x_1_7, x_1_8, x_1_9, x_1_10, x_1_11, x_1_12, x_1_13;
    label_1_0:{
      x_1_1 = newark["prelude::empty?"](a_1_0);
      if (!(x_1_1 == null || x_1_1 === false)) {
        x_1_2 = newark["prelude::empty?"](a_1_1);
        if (!(x_1_2 == null || x_1_2 === false)) {
          x_1_0 = null;
        } else {
          x_1_0 = a_1_3();
        };
      } else {
        x_1_4 = newark["prelude::second"](a_1_0);
        x_1_3 = newark["poet/syntax::dots?"](x_1_4);
        if (!(x_1_3 == null || x_1_3 === false)) {
          x_1_6 = newark["prelude::first"](a_1_0);
          x_1_5 = newark["poet/syntax::match-dots"](x_1_6, a_1_1);
          x_1_7 = x_1_5["0"];
          x_1_8 = x_1_5["1"];
          x_1_9 = newark["prelude::drop"](2, a_1_0);
          newark["poet/syntax::match-list"](x_1_9, x_1_8, a_1_2, a_1_3);
          x_1_0 = a_1_2("...", x_1_7);
        } else if (!(x_0_1 == null || x_0_1 === false)) {
          x_1_10 = newark["prelude::first"](a_1_0);
          x_1_11 = newark["prelude::first"](a_1_1);
          newark["poet/syntax::match-sexp"](x_1_10, x_1_11, a_1_2, a_1_3);
          x_1_12 = newark["prelude::rest"](a_1_0);
          x_1_13 = newark["prelude::rest"](a_1_1);
          x_1_0 = newark["poet/syntax::match-list"](x_1_12, x_1_13, a_1_2, a_1_3);
        } else {
          x_1_0 = null;
        };
      };
    };
    return x_1_0;
  });
  newark["poet/syntax::match-list"][":name"] = "match-list";
  newark["poet/syntax::compile"] = (function (a_1_0, a_1_1) {
    var x_1_0, x_1_1, x_1_2, x_1_3, x_1_4, x_1_5, x_1_6, x_1_7, x_1_8, x_1_9, x_1_10, x_1_11, x_1_12, x_1_13, x_1_14, x_1_15;
    label_1_0:{
      x_1_1 = newark["prelude::symbol?"](a_1_0);
      if (!(x_1_1 == null || x_1_1 === false)) {
        x_1_2 = a_1_1(a_1_0);
        if (!(x_1_2 == null || x_1_2 === false)) {
          x_1_3 = newark["poet/env::to-key"](a_1_0);
          x_1_0 = [x_0_2, x_1_3];
        } else {
          x_1_0 = [x_0_3, a_1_0];
        };
      } else {
        x_1_4 = newark["prelude::list?"](a_1_0);
        if (!(x_1_4 == null || x_1_4 === false)) {
          x_1_5 = newark["prelude::empty?"](a_1_0);
          if (!(x_1_5 == null || x_1_5 === false)) {
            x_1_0 = [x_0_4, []];
          } else {
            x_1_7 = newark["prelude::first"](a_1_0);
            x_1_6 = (x_0_5 === x_1_7);
            if (!(x_1_6 == null || x_1_6 === false)) {
              x_1_8 = newark["prelude::second"](a_1_0);
              x_1_9 = a_1_1(x_1_8);
              if (!(x_1_9 == null || x_1_9 === false)) {
                x_1_0 = [x_0_6, x_1_8];
              } else {
                x_1_10 = newark["prelude::pr-str"](x_1_8);
                x_1_0 = [x_0_7, x_1_10];
              };
            } else if (!(x_0_1 == null || x_0_1 === false)) {
              x_1_11 = newark["poet/syntax::compile-list"](a_1_0, a_1_1);
              x_1_0 = [x_0_4, x_1_11];
            } else {
              x_1_0 = null;
            };
          };
        } else {
          x_1_12 = newark["prelude::array?"](a_1_0);
          if (!(x_1_12 == null || x_1_12 === false)) {
            x_1_13 = newark["prelude::empty?"](a_1_0);
            if (!(x_1_13 == null || x_1_13 === false)) {
              x_1_0 = [x_0_8, []];
            } else {
              x_1_15 = newark["prelude::array->list"](a_1_0);
              x_1_14 = newark["poet/syntax::compile-list"](x_1_15, a_1_1);
              x_1_0 = [x_0_8, x_1_14];
            };
          } else if (!(x_0_1 == null || x_0_1 === false)) {
            x_1_0 = [x_0_3, a_1_0];
          } else {
            x_1_0 = null;
          };
        };
      };
    };
    return x_1_0;
  });
  newark["poet/syntax::compile"][":name"] = "compile";
  newark["poet/syntax::compile-list"] = (function (a_1_0, a_1_1) {
    var x_1_0, x_1_1, x_1_2, x_1_3, x_1_4, x_1_5;
    label_1_0:{
      x_1_1 = newark["prelude::reverse"](a_1_0);
      x_1_2 = [];
      x_1_3 = (function () {
        var x_2_0, x_2_1, x_2_2, x_2_3;
        label_2_0:{
          x_2_1 = newark["prelude::first"](x_1_1);
          x_1_1 = newark["prelude::rest"](x_1_1);
          x_2_2 = newark["poet/syntax::dots?"](x_2_1);
          if (!(x_2_2 == null || x_2_2 === false)) {
            x_2_3 = x_1_3();
            x_2_0 = [x_0_9, x_2_3];
          } else {
            x_2_0 = newark["poet/syntax::compile"](x_2_1, a_1_1);
          };
        };
        return x_2_0;
      });
      x_1_3[":name"] = "compile-1";
      label_1_1:for(;;) {
        x_1_4 = newark["prelude::empty?"](x_1_1);
        if (!(x_1_4 == null || x_1_4 === false)) {
          break label_1_1;
        } else {
          x_1_5 = x_1_3();
          x_1_2["push"](x_1_5);
        };
      };
      x_1_0 = newark["prelude::reverse"](x_1_2);
    };
    return x_1_0;
  });
  newark["poet/syntax::compile-list"][":name"] = "compile-list";
  newark["poet/syntax::expand"] = (function (a_1_0, a_1_1) {
    var x_1_0, x_1_1, x_1_2, x_1_3;
    try {
      label_1_0:{
        x_1_2 = true;
        x_1_1 = (function (a_2_0) {
          var x_2_0;
          if (!(x_1_2 == null || x_1_2 === false)) {
            x_1_0 = a_2_0;
            x_1_2 = false;
          };
          throw new Error('NON_LOCAL_EXIT');
          return x_2_0;
        });
        x_1_3 = (function (a_2_0) {
          var x_2_0;
          x_2_0 = a_1_1[a_2_0];
          return x_2_0;
        });
        x_1_0 = newark["poet/syntax::expand*"](a_1_0, x_1_1, x_1_3);
      }
    } catch (e) {
      if (x_1_2) { throw e; } 
    } finally {
      x_1_2 = false;
    };
    return x_1_0;
  });
  newark["poet/syntax::expand"][":name"] = "expand";
  newark["poet/syntax::expand*"] = (function (a_1_0, a_1_1, a_1_2) {
    var x_1_0, x_1_1, x_1_2, x_1_3, x_1_4, x_1_5, x_1_6, x_1_7, x_1_8, x_1_9, x_1_10;
    label_1_0:{
      x_1_1 = a_1_0["0"];
      x_1_2 = x_1_1;
      x_1_3 = (x_1_2 === x_0_3);
      if (!(x_1_3 == null || x_1_3 === false)) {
        x_1_0 = a_1_1(a_1_0["1"]);
      } else {
        x_1_4 = (x_1_2 === x_0_2);
        if (!(x_1_4 == null || x_1_4 === false)) {
          x_1_5 = a_1_2(a_1_0["1"]);
          x_1_0 = a_1_1(x_1_5);
        } else {
          x_1_6 = (x_1_2 === x_0_4);
          if (!(x_1_6 == null || x_1_6 === false)) {
            x_1_8 = newark["poet/syntax::expand-array"](a_1_0["1"], a_1_2);
            x_1_7 = newark["prelude::array->list"](x_1_8);
            x_1_0 = a_1_1(x_1_7);
          } else {
            x_1_9 = (x_1_2 === x_0_8);
            if (!(x_1_9 == null || x_1_9 === false)) {
              x_1_10 = newark["poet/syntax::expand-array"](a_1_0["1"], a_1_2);
              x_1_0 = a_1_1(x_1_10);
            } else {
              throw newark["core::js"]["Error"];
            };
          };
        };
      };
    };
    return x_1_0;
  });
  newark["poet/syntax::expand*"][":name"] = "expand*";
  newark["poet/syntax::expand-array"] = (function (a_1_0, a_1_1) {
    var x_1_0, x_1_1, x_1_2, x_1_3, x_1_4, x_1_5, x_1_6, x_1_7, x_1_8, x_1_9, x_1_10;
    label_1_0:{
      x_1_1 = [];
      x_1_2 = (function (a_2_0) {
        var x_2_0;
        x_2_0 = x_1_1["push"](a_2_0);
        return x_2_0;
      });
      x_1_3 = 0;
      x_1_4 = a_1_0;
      x_1_5 = x_1_4["length"];
      label_1_1:for(;;) {
        x_1_6 = (x_1_3 < x_1_5);
        if (!(x_1_6 == null || x_1_6 === false)) {
          x_1_7 = x_1_4[x_1_3];
          x_1_8 = x_1_7["0"];
          x_1_9 = x_1_8;
          x_1_10 = (x_1_9 === x_0_9);
          if (!(x_1_10 == null || x_1_10 === false)) {
            newark["poet/syntax::expand-splice"](x_1_7["1"], x_1_2, a_1_1);
          } else {
            newark["poet/syntax::expand*"](x_1_7, x_1_2, a_1_1);
          };
          x_1_3 = (x_1_3 + 1);
        } else {
          break label_1_1;
        };
      };
      x_1_0 = x_1_1;
    };
    return x_1_0;
  });
  newark["poet/syntax::expand-array"][":name"] = "expand-array";
  newark["poet/syntax::expand-splice"] = (function (a_1_0, a_1_1, a_1_2) {
    var x_1_0, x_1_1, x_1_2, x_1_3, x_1_4, x_1_5;
    try {
      label_1_0:{
        x_1_5 = true;
        x_1_4 = newark["poet/env::to-key"]("...");
        x_1_1 = a_1_2(x_1_4);
        x_1_2 = 0;
        x_1_3 = (function (a_2_0) {
          var x_2_0, x_2_1, x_2_2, x_2_3, x_2_4;
          label_2_0:{
            x_2_1 = x_1_1[a_2_0];
            x_2_3 = x_2_1;
            if (!(x_2_3 == null || x_2_3 === false)) {
              x_2_4 = newark["prelude::len"](x_2_1);
              x_2_2 = (x_1_2 < x_2_4);
            } else {
              x_2_2 = x_2_3;
            };
            if (!(x_2_2 == null || x_2_2 === false)) {
              x_2_0 = x_2_1[x_1_2];
            } else {
              if (!(x_1_5 == null || x_1_5 === false)) {
                x_1_0 = null;
                x_1_5 = false;
              };
              throw new Error('NON_LOCAL_EXIT');
            };
          };
          return x_2_0;
        });
        x_1_3[":name"] = "get*";
        label_1_1:for(;;) {
          newark["poet/syntax::expand*"](a_1_0, a_1_1, x_1_3);
          x_1_2 = (x_1_2 + 1);
        };
      }
    } catch (e) {
      if (x_1_5) { throw e; } 
    } finally {
      x_1_5 = false;
    };
    return x_1_0;
  });
  newark["poet/syntax::expand-splice"][":name"] = "expand-splice";
  newark["poet/syntax::prepare"] = (function (a_1_0) {
    var x_1_0, x_1_1, x_1_2, x_1_3, x_1_4;
    label_1_0:{
      x_1_1 = newark["prelude::first"](a_1_0);
      x_1_2 = newark["prelude::second"](a_1_0);
      x_1_3 = newark["poet/syntax::make-free-predicate"](x_1_1);
      x_1_4 = newark["poet/syntax::compile"](x_1_2, x_1_3);
      x_1_0 = [x_1_1, x_1_4];
    };
    return x_1_0;
  });
  newark["poet/syntax::prepare"][":name"] = "prepare";
  newark["poet/syntax::make-error-fn"] = (function (a_1_0) {
    var x_1_0, x_1_1, x_1_2, x_1_3;
    label_1_0:{
      x_1_3 = newark["prelude::to-array"](a_1_0);
      x_1_2 = newark["prelude::map"](newark["prelude::pr-str"], x_1_3);
      x_1_1 = x_1_2["join"]("\n  ");
      x_1_0 = (function (a_2_0) {
        var x_2_0, x_2_1, x_2_2, x_2_3;
        x_2_3 = newark["prelude::pr-str"](a_2_0);
        x_2_2 = ("no match found for input\n" + "  " + x_2_3 + "\n" + "among patterns\n  " + x_1_1);
        x_2_1 = newark["core::js"]["Error"](x_2_2);
        throw x_2_1;
        return x_2_0;
      });
    };
    return x_1_0;
  });
  newark["poet/syntax::make-error-fn"][":name"] = "make-error-fn";
  newark["poet/syntax::make-matcher"] = (function (a_1_0) {
    var x_1_0, x_1_1, x_1_2, x_1_3, x_1_4;
    label_1_0:{
      x_1_4 = newark["prelude::map"](newark["prelude::first"], a_1_0);
      x_1_1 = newark["poet/syntax::make-error-fn"](x_1_4);
      x_1_2 = newark["prelude::map"](newark["poet/syntax::prepare"], a_1_0);
      x_1_3 = (function (a_2_0) {
        var x_2_0, x_2_1, x_2_2, x_2_3, x_2_4, x_2_5, x_2_6;
        label_2_0:{
          x_2_1 = x_1_2;
          label_2_1:for(;;) {
            x_2_2 = (x_2_1["size"] === 0);
            if (!(x_2_2 == null || x_2_2 === false)) {
              break label_2_1;
            };
            x_2_3 = x_2_1["head"];
            x_2_4 = x_2_3["0"];
            x_2_5 = x_2_3["1"];
            x_2_6 = newark["poet/syntax::match"](x_2_4, a_2_0);
            if (!(x_2_6 == null || x_2_6 === false)) {
              x_2_0 = newark["poet/syntax::expand"](x_2_5, x_2_6);
              break label_2_0;
            };
            x_2_1 = x_2_1["tail"];
          };
          x_2_0 = x_1_1(a_2_0);
        };
        return x_2_0;
      });
      x_1_3[":name"] = "matcher";
      x_1_0 = x_1_3;
    };
    return x_1_0;
  });
  newark["poet/syntax::make-matcher"][":name"] = "make-matcher";
  newark["poet/syntax::make-syntax-rule"] = (function (a_1_0, a_1_1) {
    var x_1_0, x_1_1, x_1_2, x_1_3;
    label_1_0:{
      x_1_3 = (function (a_2_0) {
        var x_2_0, x_2_1, x_2_2, x_2_3;
        x_2_2 = newark["prelude::first"](a_2_0);
        x_2_1 = newark["prelude::rest"](x_2_2);
        x_2_3 = newark["prelude::second"](a_2_0);
        x_2_0 = newark["prelude::list"](x_2_1, x_2_3);
        return x_2_0;
      });
      x_1_1 = newark["prelude::map"](x_1_3, a_1_0);
      x_1_2 = newark["poet/syntax::make-matcher"](x_1_1);
      x_1_0 = (function (a_2_0) {
        var x_2_0, x_2_1, x_2_2, x_2_3, x_2_4;
        x_2_1 = newark["poet/env::make-tag"](a_1_1);
        x_2_4 = newark["prelude::rest"](a_2_0);
        x_2_3 = newark["poet/syntax::sanitize"](x_2_4, x_2_1);
        x_2_2 = x_1_2(x_2_3);
        x_2_0 = newark["poet/syntax::sanitize"](x_2_2, x_2_1);
        return x_2_0;
      });
    };
    return x_1_0;
  });
  newark["poet/syntax::make-syntax-rule"][":name"] = "make-syntax-rule";
  newark["poet/syntax::adhoc-test"] = (function () {
    var x_1_0, x_1_1, x_1_2, x_1_3, x_1_4, x_1_5, x_1_6, x_1_7, x_1_8, x_1_9, x_1_10, x_1_11, x_1_12, x_1_13, x_1_14, x_1_15, x_1_16, x_1_17, x_1_18, x_1_19, x_1_20, x_1_21, x_1_22, x_1_23, x_1_24, x_1_25, x_1_26, x_1_27, x_1_28, x_1_29, x_1_30, x_1_31, x_1_32, x_1_33, x_1_34, x_1_35, x_1_36, x_1_37, x_1_38, x_1_39, x_1_40, x_1_41, x_1_42, x_1_43, x_1_44, x_1_45, x_1_46, x_1_47, x_1_48, x_1_49, x_1_50, x_1_51, x_1_52, x_1_53, x_1_54, x_1_55, x_1_56, x_1_57, x_1_58, x_1_59, x_1_60, x_1_61, x_1_62, x_1_63, x_1_64, x_1_65, x_1_66, x_1_67, x_1_68, x_1_69, x_1_70, x_1_71, x_1_72, x_1_73, x_1_74, x_1_75, x_1_76, x_1_77, x_1_78, x_1_79, x_1_80, x_1_81, x_1_82, x_1_83, x_1_84, x_1_85, x_1_86, x_1_87, x_1_88, x_1_89, x_1_90, x_1_91, x_1_92, x_1_93, x_1_94, x_1_95, x_1_96, x_1_97, x_1_98, x_1_99, x_1_100, x_1_101, x_1_102, x_1_103, x_1_104, x_1_105, x_1_106, x_1_107, x_1_108, x_1_109, x_1_110, x_1_111, x_1_112, x_1_113, x_1_114, x_1_115, x_1_116, x_1_117, x_1_118, x_1_119, x_1_120, x_1_121, x_1_122, x_1_123, x_1_124, x_1_125, x_1_126, x_1_127, x_1_128, x_1_129, x_1_130, x_1_131, x_1_132, x_1_133, x_1_134, x_1_135, x_1_136, x_1_137, x_1_138, x_1_139, x_1_140, x_1_141, x_1_142, x_1_143, x_1_144, x_1_145, x_1_146, x_1_147, x_1_148, x_1_149, x_1_150, x_1_151, x_1_152, x_1_153, x_1_154, x_1_155, x_1_156, x_1_157;
    label_1_0:{
      x_1_8 = newark["prelude::make-symbol"]("_");
      x_1_9 = newark["prelude::make-symbol"]("foo");
      x_1_10 = newark["prelude::make-symbol"]("bar");
      x_1_11 = newark["prelude::make-symbol"]("baz");
      x_1_7 = newark["prelude::list"](x_1_8, x_1_9, x_1_10, x_1_11);
      x_1_13 = newark["prelude::make-symbol"]("baz");
      x_1_14 = newark["prelude::make-symbol"]("bar");
      x_1_15 = newark["prelude::make-symbol"]("foo");
      x_1_12 = newark["prelude::list"](x_1_13, x_1_14, x_1_15);
      x_1_6 = newark["prelude::list"](x_1_7, x_1_12);
      x_1_5 = newark["prelude::list"](x_1_6);
      x_1_1 = newark["poet/syntax::make-matcher"](x_1_5);
      x_1_19 = newark["prelude::make-symbol"]("_");
      x_1_21 = newark["prelude::make-symbol"]("x");
      x_1_22 = newark["prelude::make-symbol"]("y");
      x_1_20 = newark["prelude::list"](x_1_21, x_1_22);
      x_1_23 = newark["prelude::make-symbol"]("...");
      x_1_18 = newark["prelude::list"](x_1_19, x_1_20, x_1_23);
      x_1_26 = newark["prelude::make-symbol"]("x");
      x_1_27 = newark["prelude::make-symbol"]("...");
      x_1_25 = newark["prelude::list"](x_1_26, x_1_27);
      x_1_29 = newark["prelude::make-symbol"]("y");
      x_1_30 = newark["prelude::make-symbol"]("...");
      x_1_28 = newark["prelude::list"](x_1_29, x_1_30);
      x_1_24 = newark["prelude::list"](x_1_25, x_1_28);
      x_1_17 = newark["prelude::list"](x_1_18, x_1_24);
      x_1_16 = newark["prelude::list"](x_1_17);
      x_1_2 = newark["poet/syntax::make-matcher"](x_1_16);
      x_1_34 = newark["prelude::make-symbol"]("_");
      x_1_36 = newark["prelude::make-symbol"]("x");
      x_1_37 = newark["prelude::make-symbol"]("xs");
      x_1_38 = newark["prelude::make-symbol"]("...");
      x_1_35 = newark["prelude::list"](x_1_36, x_1_37, x_1_38);
      x_1_39 = newark["prelude::make-symbol"]("...");
      x_1_33 = newark["prelude::list"](x_1_34, x_1_35, x_1_39);
      x_1_42 = newark["prelude::make-symbol"]("xs");
      x_1_43 = newark["prelude::make-symbol"]("...");
      x_1_44 = newark["prelude::make-symbol"]("x");
      x_1_41 = newark["prelude::list"](x_0_10, x_1_42, x_1_43, x_1_44);
      x_1_45 = newark["prelude::make-symbol"]("...");
      x_1_40 = newark["prelude::list"](x_1_41, x_1_45);
      x_1_32 = newark["prelude::list"](x_1_33, x_1_40);
      x_1_31 = newark["prelude::list"](x_1_32);
      x_1_3 = newark["poet/syntax::make-matcher"](x_1_31);
      x_1_49 = newark["prelude::make-symbol"]("let*");
      x_1_50 = newark["prelude::list"]();
      x_1_51 = newark["prelude::make-symbol"]("body");
      x_1_52 = newark["prelude::make-symbol"]("...");
      x_1_48 = newark["prelude::list"](x_1_49, x_1_50, x_1_51, x_1_52);
      x_1_54 = newark["prelude::make-symbol"]("let");
      x_1_55 = newark["prelude::list"]();
      x_1_56 = newark["prelude::make-symbol"]("body");
      x_1_57 = newark["prelude::make-symbol"]("...");
      x_1_53 = newark["prelude::list"](x_1_54, x_1_55, x_1_56, x_1_57);
      x_1_47 = newark["prelude::list"](x_1_48, x_1_53);
      x_1_60 = newark["prelude::make-symbol"]("let*");
      x_1_63 = newark["prelude::make-symbol"]("var");
      x_1_64 = newark["prelude::make-symbol"]("val");
      x_1_62 = newark["prelude::list"](x_1_63, x_1_64);
      x_1_65 = newark["prelude::make-symbol"]("more");
      x_1_66 = newark["prelude::make-symbol"]("...");
      x_1_61 = newark["prelude::list"](x_1_62, x_1_65, x_1_66);
      x_1_67 = newark["prelude::make-symbol"]("body");
      x_1_68 = newark["prelude::make-symbol"]("...");
      x_1_59 = newark["prelude::list"](x_1_60, x_1_61, x_1_67, x_1_68);
      x_1_70 = newark["prelude::make-symbol"]("let");
      x_1_73 = newark["prelude::make-symbol"]("var");
      x_1_74 = newark["prelude::make-symbol"]("val");
      x_1_72 = newark["prelude::list"](x_1_73, x_1_74);
      x_1_71 = newark["prelude::list"](x_1_72);
      x_1_76 = newark["prelude::make-symbol"]("let*");
      x_1_78 = newark["prelude::make-symbol"]("more");
      x_1_79 = newark["prelude::make-symbol"]("...");
      x_1_77 = newark["prelude::list"](x_1_78, x_1_79);
      x_1_80 = newark["prelude::make-symbol"]("body");
      x_1_81 = newark["prelude::make-symbol"]("...");
      x_1_75 = newark["prelude::list"](x_1_76, x_1_77, x_1_80, x_1_81);
      x_1_69 = newark["prelude::list"](x_1_70, x_1_71, x_1_75);
      x_1_58 = newark["prelude::list"](x_1_59, x_1_69);
      x_1_46 = newark["prelude::list"](x_1_47, x_1_58);
      x_1_4 = newark["poet/syntax::make-matcher"](x_1_46);
      x_1_84 = newark["prelude::make-symbol"]("x");
      x_1_83 = newark["prelude::list"](x_1_84);
      x_1_86 = newark["prelude::make-symbol"]("a");
      x_1_87 = newark["prelude::make-symbol"]("b");
      x_1_85 = newark["prelude::list"](x_1_86, x_1_87);
      x_1_82 = newark["poet/syntax::match"](x_1_83, x_1_85);
      newark["prelude::prn"](x_1_82);
      x_1_90 = newark["prelude::make-symbol"]("x");
      x_1_91 = newark["prelude::make-symbol"]("xs");
      x_1_92 = newark["prelude::make-symbol"]("...");
      x_1_89 = newark["prelude::list"](x_1_90, x_1_91, x_1_92);
      x_1_94 = newark["prelude::make-symbol"]("a");
      x_1_95 = newark["prelude::make-symbol"]("b");
      x_1_96 = newark["prelude::make-symbol"]("c");
      x_1_97 = newark["prelude::make-symbol"]("d");
      x_1_98 = newark["prelude::make-symbol"]("e");
      x_1_99 = newark["prelude::make-symbol"]("f");
      x_1_100 = newark["prelude::make-symbol"]("g");
      x_1_93 = newark["prelude::list"](x_1_94, x_1_95, x_1_96, x_1_97, x_1_98, x_1_99, x_1_100);
      x_1_88 = newark["poet/syntax::match"](x_1_89, x_1_93);
      newark["prelude::prn"](x_1_88);
      x_1_103 = newark["prelude::make-symbol"]("a");
      x_1_104 = newark["prelude::make-symbol"]("b");
      x_1_105 = newark["prelude::make-symbol"]("c");
      x_1_106 = newark["prelude::make-symbol"]("d");
      x_1_107 = newark["prelude::make-symbol"]("e");
      x_1_108 = newark["prelude::make-symbol"]("f");
      x_1_109 = newark["prelude::make-symbol"]("g");
      x_1_102 = newark["prelude::list"](x_1_103, x_1_104, x_1_105, x_1_106, x_1_107, x_1_108, x_1_109);
      x_1_101 = newark["prelude::reverse"](x_1_102);
      newark["prelude::prn"](x_1_101);
      x_1_111 = newark["prelude::make-symbol"]("a");
      x_1_112 = newark["prelude::make-symbol"]("b");
      x_1_113 = newark["prelude::make-symbol"]("c");
      x_1_114 = newark["prelude::make-symbol"]("d");
      x_1_115 = newark["prelude::make-symbol"]("e");
      x_1_116 = newark["prelude::make-symbol"]("g");
      x_1_110 = newark["prelude::reverse"]([x_1_111, x_1_112, x_1_113, x_1_114, x_1_115, x_1_116]);
      newark["prelude::prn"](x_1_110);
      x_1_118 = newark["prelude::list"](1, 2, 3);
      x_1_117 = x_1_1(x_1_118);
      newark["prelude::prn"](x_1_117);
      x_1_122 = newark["prelude::make-symbol"]("a");
      x_1_123 = newark["prelude::make-symbol"]("b");
      x_1_121 = newark["prelude::list"](x_1_122, x_1_123);
      x_1_125 = newark["prelude::make-symbol"]("c");
      x_1_126 = newark["prelude::make-symbol"]("d");
      x_1_124 = newark["prelude::list"](x_1_125, x_1_126);
      x_1_128 = newark["prelude::make-symbol"]("e");
      x_1_129 = newark["prelude::make-symbol"]("f");
      x_1_127 = newark["prelude::list"](x_1_128, x_1_129);
      x_1_131 = newark["prelude::make-symbol"]("g");
      x_1_132 = newark["prelude::make-symbol"]("h");
      x_1_130 = newark["prelude::list"](x_1_131, x_1_132);
      x_1_120 = newark["prelude::list"](x_1_121, x_1_124, x_1_127, x_1_130);
      x_1_119 = x_1_2(x_1_120);
      newark["prelude::prn"](x_1_119);
      x_1_136 = newark["prelude::make-symbol"]("a");
      x_1_135 = newark["prelude::list"](x_1_136, 1, 2, 3, 4);
      x_1_138 = newark["prelude::make-symbol"]("b");
      x_1_137 = newark["prelude::list"](x_1_138, 2, 3, 4, 5);
      x_1_140 = newark["prelude::make-symbol"]("c");
      x_1_139 = newark["prelude::list"](x_1_140, 6, 7, 8, 9);
      x_1_134 = newark["prelude::list"](x_1_135, x_1_137, x_1_139);
      x_1_133 = x_1_3(x_1_134);
      newark["prelude::prn"](x_1_133);
      x_1_143 = newark["prelude::make-symbol"]("let*");
      x_1_144 = newark["prelude::list"]();
      x_1_145 = newark["prelude::make-symbol"]("wtf?");
      x_1_146 = newark["prelude::make-symbol"]("wtf?");
      x_1_147 = newark["prelude::make-symbol"]("wtf?");
      x_1_142 = newark["prelude::list"](x_1_143, x_1_144, x_1_145, x_1_146, x_1_147);
      x_1_141 = x_1_4(x_1_142);
      newark["prelude::prn"](x_1_141);
      x_1_150 = newark["prelude::make-symbol"]("let*");
      x_1_153 = newark["prelude::make-symbol"]("x");
      x_1_152 = newark["prelude::list"](x_1_153, 1);
      x_1_151 = newark["prelude::list"](x_1_152);
      x_1_155 = newark["prelude::make-symbol"]("*");
      x_1_156 = newark["prelude::make-symbol"]("x");
      x_1_157 = newark["prelude::make-symbol"]("x");
      x_1_154 = newark["prelude::list"](x_1_155, x_1_156, x_1_157);
      x_1_149 = newark["prelude::list"](x_1_150, x_1_151, x_1_154);
      x_1_148 = x_1_4(x_1_149);
      x_1_0 = newark["prelude::prn"](x_1_148);
    };
    return x_1_0;
  });
  newark["poet/syntax::adhoc-test"][":name"] = "adhoc-test";
  return x_0_0;
})();

// poet/reader.newark

(function () {
  var x_0_0, x_0_1, x_0_2, x_0_3, x_0_4, x_0_5, x_0_6, x_0_7, x_0_8, x_0_9, x_0_10, x_0_11, x_0_12, x_0_13, x_0_14, x_0_15, x_0_16, x_0_17, x_0_18, x_0_19;
  x_0_6 = newark["prelude::make-keyword"]("origin");
  x_0_10 = newark["prelude::make-keyword"]("last-offset");
  x_0_5 = newark["prelude::make-keyword"]("input");
  x_0_11 = newark["prelude::make-keyword"]("last-line");
  x_0_12 = newark["prelude::make-keyword"]("last-column");
  x_0_7 = newark["prelude::make-keyword"]("offset");
  x_0_8 = newark["prelude::make-keyword"]("line");
  x_0_9 = newark["prelude::make-keyword"]("column");
  x_0_14 = newark["prelude::make-keyword"]("else");
  x_0_4 = newark["prelude::make-keyword"]("recoverable");
  x_0_1 = {};
  newark["poet/reader::reader-macros"] = x_0_1;
  x_0_2 = {};
  newark["poet/reader::dispatch-reader-macros"] = x_0_2;
  x_0_3 = {};
  newark["poet/reader::eof"] = x_0_3;
  newark["poet/reader::eof?"] = (function (a_1_0) {
    var x_1_0;
    label_1_0:{
      x_1_0 = (a_1_0 === newark["poet/reader::EOF"]);
    };
    return x_1_0;
  });
  newark["poet/reader::eof?"][":name"] = "eof?";
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
      x_1_1[x_0_4] = true;
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
      x_1_1 = newark["poet/reader::eof?"](a_1_0);
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
        x_1_3[x_0_5] = a_1_0;
        x_1_4 = a_1_1;
        if (!(x_1_4 == null || x_1_4 === false)) {
          x_1_3[x_0_6] = x_1_4;
        } else {
          x_1_3[x_0_6] = "unknown origin";
        };
        x_1_3[x_0_7] = 0;
        x_1_3[x_0_8] = 1;
        x_1_3[x_0_9] = 0;
        x_1_3[x_0_10] = 0;
        x_1_3[x_0_11] = 1;
        x_1_3[x_0_12] = 1;
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
  x_0_13 = (function (a_1_0, a_1_1, a_1_2) {
    var x_1_0, x_1_1;
    x_1_1 = ("line " + a_1_0["line"] + ", column " + a_1_0["column"] + ", in " + a_1_0["origin"]);
    x_1_0 = a_1_1(x_1_1);
    return x_1_0;
  });
  newark["prelude::extend-generic*"](newark["prelude::represent"], newark["poet/reader::Position"], x_0_13);
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
      x_1_1[x_0_7] = a_1_1["offset"];
      x_1_1[x_0_8] = a_1_1["line"];
      x_1_1[x_0_9] = a_1_1["column"];
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
        x_1_0 = newark["prelude::make-symbol"]("eof");
      };
    };
    return x_1_0;
  });
  newark["poet/reader::peek-char"][":name"] = "peek-char";
  newark["poet/reader::read-char"] = (function (a_1_0) {
    var x_1_0, x_1_1, x_1_2, x_1_3, x_1_4;
    label_1_0:{
      x_1_1 = newark["poet/reader::peek-char"](a_1_0);
      x_1_2 = newark["poet/reader::eof?"](x_1_1);
      if (!(x_1_2 == null || x_1_2 === false)) {
        x_1_0 = null;
      } else {
        x_1_3 = a_1_0;
        x_1_3[x_0_10] = a_1_0["offset"];
        x_1_3[x_0_11] = a_1_0["line"];
        x_1_3[x_0_12] = a_1_0["column"];
        x_1_3[x_0_7] = (a_1_0["offset"] + 1);
        x_1_4 = newark["poet/reader::newline-regex"]["test"](x_1_1);
        if (!(x_1_4 == null || x_1_4 === false)) {
          a_1_0["line"] = (a_1_0["line"] + 1);
          a_1_0["column"] = 1;
        } else {
          a_1_0["column"] = (a_1_0["column"] + 1);
        };
        x_1_0 = x_1_1;
      };
    };
    return x_1_0;
  });
  newark["poet/reader::read-char"][":name"] = "read-char";
  newark["poet/reader::unread-char"] = (function (a_1_0) {
    var x_1_0, x_1_1;
    label_1_0:{
      x_1_1 = a_1_0;
      x_1_1[x_0_7] = a_1_0["last-offset"];
      x_1_1[x_0_8] = a_1_0["last-line"];
      x_1_1[x_0_9] = a_1_0["last-column"];
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
        x_1_3 = (x_1_2 === newark["poet/reader::eof"]);
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
  newark["poet/reader::reader-macro-char?"] = (function (a_1_0) {
    var x_1_0;
    label_1_0:{
      x_1_0 = (a_1_0 in newark["poet/reader::reader-macros"]);
    };
    return x_1_0;
  });
  newark["poet/reader::reader-macro-char?"][":name"] = "reader-macro-char?";
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
    var x_1_0, x_1_1, x_1_2, x_1_3;
    label_1_0:{
      newark["poet/reader::read-whitespace"](a_1_0);
      x_1_1 = newark["poet/reader::peek-char"](a_1_0);
      x_1_2 = newark["poet/reader::eof?"](x_1_1);
      if (!(x_1_2 == null || x_1_2 === false)) {
        x_1_0 = x_1_1;
      } else {
        x_1_3 = newark["poet/reader::reader-macro-char?"](x_1_1);
        if (!(x_1_3 == null || x_1_3 === false)) {
          x_1_0 = newark["poet/reader::reader-macros"][x_1_1](a_1_0);
        } else if (!(x_0_14 == null || x_0_14 === false)) {
          x_1_0 = newark["poet/reader::read-atom"](a_1_0);
        } else {
          x_1_0 = null;
        };
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
            } else if (!(x_0_14 == null || x_0_14 === false)) {
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
  x_0_15 = {};
  x_0_15["t"] = "\t";
  x_0_15["n"] = "\n";
  x_0_15["r"] = "\r";
  x_0_15["f"] = "\f";
  x_0_15["b"] = "\b";
  x_0_15["\\"] = "\\";
  x_0_15["\""] = "\"";
  newark["poet/reader::escape-map"] = x_0_15;
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
        x_1_5 = (x_1_4 === newark["poet/reader::eof"]);
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
    var x_1_0, x_1_1, x_1_2, x_1_3, x_1_4, x_1_5, x_1_6, x_1_7;
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
          x_1_6 = newark["poet/reader::eof?"](x_1_5);
          if (!(x_1_6 == null || x_1_6 === false)) {
            x_1_7 = newark["prelude::print-str"](a_1_2, "at", x_1_1);
            newark["poet/reader::eof-error!"](x_1_7);
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
  x_0_16 = newark["poet/reader::reader-macros"];
  x_0_16["("] = newark["poet/reader::read-list"];
  x_0_16["["] = newark["poet/reader::read-array"];
  x_0_16[")"] = newark["poet/reader::mismatched-delimiter"];
  x_0_16["]"] = newark["poet/reader::mismatched-delimiter"];
  x_0_16["#"] = newark["poet/reader::read-dispatch-macro"];
  x_0_16["\""] = newark["poet/reader::read-string-literal"];
  x_0_17 = newark["poet/reader::dispatch-reader-macros"];
  x_0_17["n"] = newark["poet/reader::make-literal-reader"]("nil", null);
  x_0_17["t"] = newark["poet/reader::make-literal-reader"]("t", true);
  x_0_17["f"] = newark["poet/reader::make-literal-reader"]("f", false);
  x_0_19 = (function (a_1_0) {
    var x_1_0;
    x_1_0 = a_1_0;
    return x_1_0;
  });
  x_0_18 = x_0_19();
  x_0_17["v"] = newark["poet/reader::make-literal-reader"]("void", x_0_18);
  x_0_17["/"] = newark["poet/reader::read-regex-literal"];
  x_0_17["\""] = newark["poet/reader::read-heredoc"];
  x_0_0 = x_0_17;
  return x_0_0;
})();

// poet/expander.newark

(function () {
  var x_0_0, x_0_1, x_0_2, x_0_3;
  x_0_3 = newark["prelude::make-keyword"]("__POET_SPECIAL_FORM__");
  x_0_2 = newark["prelude::make-keyword"]("__POET_SYMBOL_MACRO__");
  x_0_1 = newark["prelude::make-keyword"]("__POET_MACRO__");
  newark["poet/expander::make-macro"] = (function (a_1_0) {
    var x_1_0;
    label_1_0:{
      a_1_0[x_0_1] = true;
      x_1_0 = a_1_0;
    };
    return x_1_0;
  });
  newark["poet/expander::make-macro"][":name"] = "make-macro";
  newark["poet/expander::macro?"] = (function (a_1_0, a_1_1) {
    var x_1_0, x_1_1, x_1_2;
    label_1_0:{
      x_1_1 = newark["poet/env::lookup"](a_1_0, a_1_1);
      x_1_2 = x_1_1;
      if (!(x_1_2 == null || x_1_2 === false)) {
        x_1_0 = x_1_1[x_0_1];
      } else {
        x_1_0 = x_1_2;
      };
    };
    return x_1_0;
  });
  newark["poet/expander::macro?"][":name"] = "macro?";
  newark["poet/expander::make-symbol-macro"] = (function (a_1_0) {
    var x_1_0;
    label_1_0:{
      a_1_0[x_0_2] = true;
      x_1_0 = a_1_0;
    };
    return x_1_0;
  });
  newark["poet/expander::make-symbol-macro"][":name"] = "make-symbol-macro";
  newark["poet/expander::symbol-macro?"] = (function (a_1_0, a_1_1) {
    var x_1_0, x_1_1, x_1_2;
    label_1_0:{
      x_1_1 = newark["poet/env::lookup"](a_1_0, a_1_1);
      x_1_2 = x_1_1;
      if (!(x_1_2 == null || x_1_2 === false)) {
        x_1_0 = x_1_1[x_0_2];
      } else {
        x_1_0 = x_1_2;
      };
    };
    return x_1_0;
  });
  newark["poet/expander::symbol-macro?"][":name"] = "symbol-macro?";
  newark["poet/expander::make-special-form"] = (function (a_1_0) {
    var x_1_0;
    label_1_0:{
      a_1_0[x_0_3] = true;
      x_1_0 = a_1_0;
    };
    return x_1_0;
  });
  newark["poet/expander::make-special-form"][":name"] = "make-special-form";
  newark["poet/expander::special-form?"] = (function (a_1_0, a_1_1) {
    var x_1_0, x_1_1, x_1_2;
    label_1_0:{
      x_1_1 = newark["poet/env::lookup"](a_1_0, a_1_1);
      x_1_2 = x_1_1;
      if (!(x_1_2 == null || x_1_2 === false)) {
        x_1_0 = x_1_1[x_0_3];
      } else {
        x_1_0 = x_1_2;
      };
    };
    return x_1_0;
  });
  newark["poet/expander::special-form?"][":name"] = "special-form?";
  x_0_0 = null;
  return x_0_0;
})();

// poet.newark

(function () {
  var x_0_0, x_0_1, x_0_2, x_0_3, x_0_4, x_0_5, x_0_6, x_0_7, x_0_8, x_0_9, x_0_10, x_0_11, x_0_12, x_0_13, x_0_14, x_0_15, x_0_16, x_0_17, x_0_18, x_0_19, x_0_20, x_0_21, x_0_22, x_0_23, x_0_24, x_0_25, x_0_26, x_0_27, x_0_28, x_0_29, x_0_30, x_0_31, x_0_32, x_0_33, x_0_34, x_0_35, x_0_36, x_0_37, x_0_38, x_0_39, x_0_40, x_0_41, x_0_42, x_0_43, x_0_44, x_0_45, x_0_46, x_0_47, x_0_48, x_0_49, x_0_50, x_0_51, x_0_52, x_0_53, x_0_54, x_0_55, x_0_56, x_0_57, x_0_58, x_0_59, x_0_60, x_0_61, x_0_62, x_0_63, x_0_64, x_0_65, x_0_66, x_0_67, x_0_68, x_0_69, x_0_70, x_0_71, x_0_72, x_0_73, x_0_74, x_0_75, x_0_76, x_0_77, x_0_78, x_0_79, x_0_80, x_0_81, x_0_82, x_0_83, x_0_84, x_0_85, x_0_86, x_0_87, x_0_88, x_0_89, x_0_90, x_0_91, x_0_92, x_0_93, x_0_94, x_0_95, x_0_96, x_0_97, x_0_98, x_0_99, x_0_100, x_0_101, x_0_102, x_0_103, x_0_104, x_0_105, x_0_106, x_0_107, x_0_108, x_0_109, x_0_110, x_0_111, x_0_112, x_0_113, x_0_114, x_0_115, x_0_116, x_0_117, x_0_118, x_0_119, x_0_120, x_0_121, x_0_122, x_0_123, x_0_124, x_0_125, x_0_126, x_0_127, x_0_128, x_0_129, x_0_130, x_0_131, x_0_132, x_0_133, x_0_134, x_0_135, x_0_136, x_0_137, x_0_138, x_0_139, x_0_140, x_0_141, x_0_142, x_0_143, x_0_144, x_0_145, x_0_146, x_0_147, x_0_148, x_0_149, x_0_150, x_0_151, x_0_152, x_0_153, x_0_154, x_0_155, x_0_156, x_0_157, x_0_158, x_0_159, x_0_160, x_0_161, x_0_162, x_0_163, x_0_164, x_0_165, x_0_166, x_0_167, x_0_168, x_0_169, x_0_170, x_0_171, x_0_172, x_0_173, x_0_174, x_0_175, x_0_176, x_0_177, x_0_178, x_0_179, x_0_180, x_0_181, x_0_182, x_0_183, x_0_184, x_0_185, x_0_186, x_0_187, x_0_188, x_0_189, x_0_190, x_0_191, x_0_192, x_0_193, x_0_194, x_0_195, x_0_196, x_0_197, x_0_198, x_0_199, x_0_200, x_0_201, x_0_202, x_0_203, x_0_204, x_0_205, x_0_206, x_0_207, x_0_208, x_0_209, x_0_210, x_0_211, x_0_212, x_0_213, x_0_214, x_0_215, x_0_216, x_0_217, x_0_218, x_0_219, x_0_220, x_0_221, x_0_222, x_0_223, x_0_224, x_0_225, x_0_226, x_0_227, x_0_228, x_0_229, x_0_230, x_0_231, x_0_232, x_0_233, x_0_234, x_0_235, x_0_236, x_0_237, x_0_238, x_0_239, x_0_240, x_0_241, x_0_242, x_0_243, x_0_244, x_0_245, x_0_246, x_0_247, x_0_248, x_0_249, x_0_250, x_0_251, x_0_252, x_0_253, x_0_254, x_0_255, x_0_256, x_0_257, x_0_258, x_0_259, x_0_260, x_0_261, x_0_262, x_0_263, x_0_264, x_0_265, x_0_266, x_0_267, x_0_268, x_0_269, x_0_270, x_0_271, x_0_272, x_0_273, x_0_274, x_0_275, x_0_276, x_0_277, x_0_278, x_0_279, x_0_280, x_0_281, x_0_282, x_0_283, x_0_284, x_0_285, x_0_286, x_0_287, x_0_288, x_0_289, x_0_290, x_0_291, x_0_292, x_0_293, x_0_294, x_0_295, x_0_296, x_0_297, x_0_298, x_0_299, x_0_300, x_0_301, x_0_302, x_0_303, x_0_304, x_0_305, x_0_306, x_0_307, x_0_308, x_0_309, x_0_310, x_0_311, x_0_312, x_0_313, x_0_314, x_0_315, x_0_316, x_0_317, x_0_318, x_0_319, x_0_320, x_0_321, x_0_322, x_0_323, x_0_324, x_0_325, x_0_326, x_0_327, x_0_328, x_0_329, x_0_330, x_0_331, x_0_332, x_0_333, x_0_334, x_0_335, x_0_336, x_0_337, x_0_338, x_0_339, x_0_340, x_0_341, x_0_342, x_0_343, x_0_344, x_0_345;
  x_0_276 = newark["prelude::make-keyword"]("zonk");
  x_0_275 = newark["prelude::make-keyword"]("baz");
  x_0_251 = newark["prelude::make-keyword"]("bar");
  x_0_96 = newark["prelude::make-keyword"]("LABEL");
  x_0_92 = newark["prelude::make-keyword"]("foo");
  newark["prelude::println"]();
  x_0_1 = ("[" + "reader-sanity-check" + "]");
  newark["prelude::println"](x_0_1);
  x_0_3 = newark["poet/reader::Reader"]("42");
  x_0_2 = newark["poet/reader::read-form"](x_0_3);
  x_0_5 = newark["prelude::make-symbol"]("read-form");
  x_0_7 = newark["prelude::make-symbol"]("Reader");
  x_0_6 = newark["prelude::list"](x_0_7, "42");
  x_0_4 = newark["prelude::list"](x_0_5, x_0_6);
  newark["prelude::pr"](x_0_4);
  newark["prelude::print"](" => ");
  newark["prelude::prn"](x_0_2);
  x_0_10 = newark["poet/reader::Reader"]("42");
  x_0_9 = newark["poet/reader::read-form"](x_0_10);
  x_0_8 = newark["prelude::number?"](x_0_9);
  x_0_12 = newark["prelude::make-symbol"]("number?");
  x_0_14 = newark["prelude::make-symbol"]("read-form");
  x_0_16 = newark["prelude::make-symbol"]("Reader");
  x_0_15 = newark["prelude::list"](x_0_16, "42");
  x_0_13 = newark["prelude::list"](x_0_14, x_0_15);
  x_0_11 = newark["prelude::list"](x_0_12, x_0_13);
  newark["prelude::pr"](x_0_11);
  newark["prelude::print"](" => ");
  newark["prelude::prn"](x_0_8);
  x_0_18 = newark["poet/reader::Reader"]("foo");
  x_0_17 = newark["poet/reader::read-form"](x_0_18);
  x_0_20 = newark["prelude::make-symbol"]("read-form");
  x_0_22 = newark["prelude::make-symbol"]("Reader");
  x_0_21 = newark["prelude::list"](x_0_22, "foo");
  x_0_19 = newark["prelude::list"](x_0_20, x_0_21);
  newark["prelude::pr"](x_0_19);
  newark["prelude::print"](" => ");
  newark["prelude::prn"](x_0_17);
  x_0_25 = newark["poet/reader::Reader"]("foo");
  x_0_24 = newark["poet/reader::read-form"](x_0_25);
  x_0_23 = newark["prelude::symbol?"](x_0_24);
  x_0_27 = newark["prelude::make-symbol"]("symbol?");
  x_0_29 = newark["prelude::make-symbol"]("read-form");
  x_0_31 = newark["prelude::make-symbol"]("Reader");
  x_0_30 = newark["prelude::list"](x_0_31, "foo");
  x_0_28 = newark["prelude::list"](x_0_29, x_0_30);
  x_0_26 = newark["prelude::list"](x_0_27, x_0_28);
  newark["prelude::pr"](x_0_26);
  newark["prelude::print"](" => ");
  newark["prelude::prn"](x_0_23);
  x_0_33 = newark["poet/reader::Reader"](":foo");
  x_0_32 = newark["poet/reader::read-form"](x_0_33);
  x_0_35 = newark["prelude::make-symbol"]("read-form");
  x_0_37 = newark["prelude::make-symbol"]("Reader");
  x_0_36 = newark["prelude::list"](x_0_37, ":foo");
  x_0_34 = newark["prelude::list"](x_0_35, x_0_36);
  newark["prelude::pr"](x_0_34);
  newark["prelude::print"](" => ");
  newark["prelude::prn"](x_0_32);
  x_0_40 = newark["poet/reader::Reader"](":foo");
  x_0_39 = newark["poet/reader::read-form"](x_0_40);
  x_0_38 = newark["prelude::keyword?"](x_0_39);
  x_0_42 = newark["prelude::make-symbol"]("keyword?");
  x_0_44 = newark["prelude::make-symbol"]("read-form");
  x_0_46 = newark["prelude::make-symbol"]("Reader");
  x_0_45 = newark["prelude::list"](x_0_46, ":foo");
  x_0_43 = newark["prelude::list"](x_0_44, x_0_45);
  x_0_41 = newark["prelude::list"](x_0_42, x_0_43);
  newark["prelude::pr"](x_0_41);
  newark["prelude::print"](" => ");
  newark["prelude::prn"](x_0_38);
  x_0_48 = newark["poet/reader::Reader"]("foo::bar");
  x_0_47 = newark["poet/reader::read-form"](x_0_48);
  x_0_50 = newark["prelude::make-symbol"]("read-form");
  x_0_52 = newark["prelude::make-symbol"]("Reader");
  x_0_51 = newark["prelude::list"](x_0_52, "foo::bar");
  x_0_49 = newark["prelude::list"](x_0_50, x_0_51);
  newark["prelude::pr"](x_0_49);
  newark["prelude::print"](" => ");
  newark["prelude::prn"](x_0_47);
  x_0_55 = newark["poet/reader::Reader"]("foo::bar");
  x_0_54 = newark["poet/reader::read-form"](x_0_55);
  x_0_53 = newark["prelude::qualified-symbol?"](x_0_54);
  x_0_57 = newark["prelude::make-symbol"]("qualified-symbol?");
  x_0_59 = newark["prelude::make-symbol"]("read-form");
  x_0_61 = newark["prelude::make-symbol"]("Reader");
  x_0_60 = newark["prelude::list"](x_0_61, "foo::bar");
  x_0_58 = newark["prelude::list"](x_0_59, x_0_60);
  x_0_56 = newark["prelude::list"](x_0_57, x_0_58);
  newark["prelude::pr"](x_0_56);
  newark["prelude::print"](" => ");
  newark["prelude::prn"](x_0_53);
  x_0_62 = newark["poet/reader::terminal?"](")");
  x_0_64 = newark["prelude::make-symbol"]("terminal?");
  x_0_63 = newark["prelude::list"](x_0_64, ")");
  newark["prelude::pr"](x_0_63);
  newark["prelude::print"](" => ");
  newark["prelude::prn"](x_0_62);
  x_0_65 = newark["poet/reader::not-constituent?"](")");
  x_0_67 = newark["prelude::make-symbol"]("not-constituent?");
  x_0_66 = newark["prelude::list"](x_0_67, ")");
  newark["prelude::pr"](x_0_66);
  newark["prelude::print"](" => ");
  newark["prelude::prn"](x_0_65);
  x_0_69 = newark["poet/reader::Reader"]("(1 2 3 4 5 6)");
  x_0_68 = newark["poet/reader::read-form"](x_0_69);
  x_0_71 = newark["prelude::make-symbol"]("read-form");
  x_0_73 = newark["prelude::make-symbol"]("Reader");
  x_0_72 = newark["prelude::list"](x_0_73, "(1 2 3 4 5 6)");
  x_0_70 = newark["prelude::list"](x_0_71, x_0_72);
  newark["prelude::pr"](x_0_70);
  newark["prelude::print"](" => ");
  newark["prelude::prn"](x_0_68);
  x_0_75 = newark["poet/reader::Reader"]("[ a b (1 :foo 2 :bar 3 [4 5] 6) #t #f #nil]");
  x_0_74 = newark["poet/reader::read-form"](x_0_75);
  x_0_77 = newark["prelude::make-symbol"]("read-form");
  x_0_79 = newark["prelude::make-symbol"]("Reader");
  x_0_78 = newark["prelude::list"](x_0_79, "[ a b (1 :foo 2 :bar 3 [4 5] 6) #t #f #nil]");
  x_0_76 = newark["prelude::list"](x_0_77, x_0_78);
  newark["prelude::pr"](x_0_76);
  newark["prelude::print"](" => ");
  newark["prelude::prn"](x_0_74);
  newark["prelude::println"]();
  x_0_80 = ("[" + "to-key-sanity-check" + "]");
  newark["prelude::println"](x_0_80);
  x_0_81 = newark["poet/env::to-key"]("foo");
  x_0_83 = newark["prelude::make-symbol"]("to-key");
  x_0_82 = newark["prelude::list"](x_0_83, "foo");
  newark["prelude::pr"](x_0_82);
  newark["prelude::print"](" => ");
  newark["prelude::prn"](x_0_81);
  x_0_85 = newark["prelude::make-symbol"]("foo");
  x_0_84 = newark["poet/env::to-key"](x_0_85);
  x_0_87 = newark["prelude::make-symbol"]("to-key");
  x_0_89 = newark["prelude::make-qualified-symbol"]("core", "quote");
  x_0_90 = newark["prelude::make-symbol"]("foo");
  x_0_88 = newark["prelude::list"](x_0_89, x_0_90);
  x_0_86 = newark["prelude::list"](x_0_87, x_0_88);
  newark["prelude::pr"](x_0_86);
  newark["prelude::print"](" => ");
  newark["prelude::prn"](x_0_84);
  x_0_91 = newark["poet/env::to-key"](x_0_92);
  x_0_94 = newark["prelude::make-symbol"]("to-key");
  x_0_93 = newark["prelude::list"](x_0_94, x_0_92);
  newark["prelude::pr"](x_0_93);
  newark["prelude::print"](" => ");
  newark["prelude::prn"](x_0_91);
  x_0_97 = newark["prelude::make-symbol"]("foo");
  x_0_95 = newark["poet/env::to-key"]([x_0_96, x_0_97]);
  x_0_99 = newark["prelude::make-symbol"]("to-key");
  x_0_101 = newark["prelude::make-qualified-symbol"]("core", "quote");
  x_0_102 = newark["prelude::make-symbol"]("foo");
  x_0_100 = newark["prelude::list"](x_0_101, x_0_102);
  x_0_98 = newark["prelude::list"](x_0_99, [x_0_96, x_0_100]);
  newark["prelude::pr"](x_0_98);
  newark["prelude::print"](" => ");
  newark["prelude::prn"](x_0_95);
  newark["prelude::println"]();
  x_0_103 = ("[" + "to-name-sanity-check" + "]");
  newark["prelude::println"](x_0_103);
  x_0_105 = newark["prelude::make-symbol"]("foo");
  x_0_104 = newark["poet/env::to-name"](x_0_105);
  x_0_107 = newark["prelude::make-symbol"]("to-name");
  x_0_109 = newark["prelude::make-qualified-symbol"]("core", "quote");
  x_0_110 = newark["prelude::make-symbol"]("foo");
  x_0_108 = newark["prelude::list"](x_0_109, x_0_110);
  x_0_106 = newark["prelude::list"](x_0_107, x_0_108);
  newark["prelude::pr"](x_0_106);
  newark["prelude::print"](" => ");
  newark["prelude::prn"](x_0_104);
  x_0_111 = newark["poet/env::to-name"](x_0_92);
  x_0_113 = newark["prelude::make-symbol"]("to-name");
  x_0_112 = newark["prelude::list"](x_0_113, x_0_92);
  newark["prelude::pr"](x_0_112);
  newark["prelude::print"](" => ");
  newark["prelude::prn"](x_0_111);
  x_0_114 = newark["poet/env::to-name"]("foo");
  x_0_116 = newark["prelude::make-symbol"]("to-name");
  x_0_115 = newark["prelude::list"](x_0_116, "foo");
  newark["prelude::pr"](x_0_115);
  newark["prelude::print"](" => ");
  newark["prelude::prn"](x_0_114);
  newark["poet::e0"] = newark["poet/env::get-package"]("test");
  newark["poet::e1"] = newark["poet/env::extend"](newark["poet::e0"]);
  newark["poet::tag0"] = newark["poet/env::make-tag"](newark["poet::e0"]);
  x_0_117 = newark["prelude::make-symbol"]("foo");
  newark["poet::tagged-foo"] = newark["prelude::make-tagged-symbol"](x_0_117, newark["poet::tag0"]);
  newark["prelude::println"]();
  x_0_118 = ("[" + "env-sanity-check" + "]");
  newark["prelude::println"](x_0_118);
  x_0_119 = newark["poet/env::to-key"](newark["poet::tagged-foo"]);
  x_0_121 = newark["prelude::make-symbol"]("to-key");
  x_0_122 = newark["prelude::make-symbol"]("tagged-foo");
  x_0_120 = newark["prelude::list"](x_0_121, x_0_122);
  newark["prelude::pr"](x_0_120);
  newark["prelude::print"](" => ");
  newark["prelude::prn"](x_0_119);
  x_0_124 = newark["prelude::make-symbol"]("foo");
  x_0_123 = newark["poet/env::intern"](newark["poet::e0"], x_0_124, "bar");
  x_0_126 = newark["prelude::make-symbol"]("intern");
  x_0_127 = newark["prelude::make-symbol"]("e0");
  x_0_129 = newark["prelude::make-qualified-symbol"]("core", "quote");
  x_0_130 = newark["prelude::make-symbol"]("foo");
  x_0_128 = newark["prelude::list"](x_0_129, x_0_130);
  x_0_125 = newark["prelude::list"](x_0_126, x_0_127, x_0_128, "bar");
  newark["prelude::pr"](x_0_125);
  newark["prelude::print"](" => ");
  newark["prelude::prn"](x_0_123);
  x_0_132 = newark["prelude::make-symbol"]("foo");
  x_0_131 = newark["poet/env::lookup"](newark["poet::e0"], x_0_132);
  x_0_134 = newark["prelude::make-symbol"]("lookup");
  x_0_135 = newark["prelude::make-symbol"]("e0");
  x_0_137 = newark["prelude::make-qualified-symbol"]("core", "quote");
  x_0_138 = newark["prelude::make-symbol"]("foo");
  x_0_136 = newark["prelude::list"](x_0_137, x_0_138);
  x_0_133 = newark["prelude::list"](x_0_134, x_0_135, x_0_136);
  newark["prelude::pr"](x_0_133);
  newark["prelude::print"](" => ");
  newark["prelude::prn"](x_0_131);
  x_0_140 = newark["prelude::make-symbol"]("foo");
  x_0_139 = newark["poet/env::lookup"](newark["poet::e1"], x_0_140);
  x_0_142 = newark["prelude::make-symbol"]("lookup");
  x_0_143 = newark["prelude::make-symbol"]("e1");
  x_0_145 = newark["prelude::make-qualified-symbol"]("core", "quote");
  x_0_146 = newark["prelude::make-symbol"]("foo");
  x_0_144 = newark["prelude::list"](x_0_145, x_0_146);
  x_0_141 = newark["prelude::list"](x_0_142, x_0_143, x_0_144);
  newark["prelude::pr"](x_0_141);
  newark["prelude::print"](" => ");
  newark["prelude::prn"](x_0_139);
  x_0_148 = newark["prelude::make-symbol"]("foo");
  x_0_147 = newark["poet/env::intern"](newark["poet::e1"], x_0_148, "baz");
  x_0_150 = newark["prelude::make-symbol"]("intern");
  x_0_151 = newark["prelude::make-symbol"]("e1");
  x_0_153 = newark["prelude::make-qualified-symbol"]("core", "quote");
  x_0_154 = newark["prelude::make-symbol"]("foo");
  x_0_152 = newark["prelude::list"](x_0_153, x_0_154);
  x_0_149 = newark["prelude::list"](x_0_150, x_0_151, x_0_152, "baz");
  newark["prelude::pr"](x_0_149);
  newark["prelude::print"](" => ");
  newark["prelude::prn"](x_0_147);
  x_0_156 = newark["prelude::make-symbol"]("foo");
  x_0_155 = newark["poet/env::lookup"](newark["poet::e0"], x_0_156);
  x_0_158 = newark["prelude::make-symbol"]("lookup");
  x_0_159 = newark["prelude::make-symbol"]("e0");
  x_0_161 = newark["prelude::make-qualified-symbol"]("core", "quote");
  x_0_162 = newark["prelude::make-symbol"]("foo");
  x_0_160 = newark["prelude::list"](x_0_161, x_0_162);
  x_0_157 = newark["prelude::list"](x_0_158, x_0_159, x_0_160);
  newark["prelude::pr"](x_0_157);
  newark["prelude::print"](" => ");
  newark["prelude::prn"](x_0_155);
  x_0_164 = newark["prelude::make-symbol"]("foo");
  x_0_163 = newark["poet/env::lookup"](newark["poet::e1"], x_0_164);
  x_0_166 = newark["prelude::make-symbol"]("lookup");
  x_0_167 = newark["prelude::make-symbol"]("e1");
  x_0_169 = newark["prelude::make-qualified-symbol"]("core", "quote");
  x_0_170 = newark["prelude::make-symbol"]("foo");
  x_0_168 = newark["prelude::list"](x_0_169, x_0_170);
  x_0_165 = newark["prelude::list"](x_0_166, x_0_167, x_0_168);
  newark["prelude::pr"](x_0_165);
  newark["prelude::print"](" => ");
  newark["prelude::prn"](x_0_163);
  x_0_171 = newark["poet/env::lookup"](newark["poet::e0"], newark["poet::tagged-foo"]);
  x_0_173 = newark["prelude::make-symbol"]("lookup");
  x_0_174 = newark["prelude::make-symbol"]("e0");
  x_0_175 = newark["prelude::make-symbol"]("tagged-foo");
  x_0_172 = newark["prelude::list"](x_0_173, x_0_174, x_0_175);
  newark["prelude::pr"](x_0_172);
  newark["prelude::print"](" => ");
  newark["prelude::prn"](x_0_171);
  x_0_176 = newark["poet/env::lookup"](newark["poet::e1"], newark["poet::tagged-foo"]);
  x_0_178 = newark["prelude::make-symbol"]("lookup");
  x_0_179 = newark["prelude::make-symbol"]("e1");
  x_0_180 = newark["prelude::make-symbol"]("tagged-foo");
  x_0_177 = newark["prelude::list"](x_0_178, x_0_179, x_0_180);
  newark["prelude::pr"](x_0_177);
  newark["prelude::print"](" => ");
  newark["prelude::prn"](x_0_176);
  x_0_181 = newark["poet/env::intern"](newark["poet::e0"], newark["poet::tagged-foo"], "zonk");
  x_0_183 = newark["prelude::make-symbol"]("intern");
  x_0_184 = newark["prelude::make-symbol"]("e0");
  x_0_185 = newark["prelude::make-symbol"]("tagged-foo");
  x_0_182 = newark["prelude::list"](x_0_183, x_0_184, x_0_185, "zonk");
  newark["prelude::pr"](x_0_182);
  newark["prelude::print"](" => ");
  newark["prelude::prn"](x_0_181);
  x_0_186 = newark["poet/env::lookup"](newark["poet::e1"], newark["poet::tagged-foo"]);
  x_0_188 = newark["prelude::make-symbol"]("lookup");
  x_0_189 = newark["prelude::make-symbol"]("e1");
  x_0_190 = newark["prelude::make-symbol"]("tagged-foo");
  x_0_187 = newark["prelude::list"](x_0_188, x_0_189, x_0_190);
  newark["prelude::pr"](x_0_187);
  newark["prelude::print"](" => ");
  newark["prelude::prn"](x_0_186);
  x_0_192 = newark["prelude::make-symbol"]("foo");
  x_0_193 = newark["prelude::make-symbol"]("foo");
  x_0_191 = newark["poet/env::intern"](newark["poet::e0"], [x_0_96, x_0_192], x_0_193);
  x_0_195 = newark["prelude::make-symbol"]("intern");
  x_0_196 = newark["prelude::make-symbol"]("e0");
  x_0_198 = newark["prelude::make-qualified-symbol"]("core", "quote");
  x_0_199 = newark["prelude::make-symbol"]("foo");
  x_0_197 = newark["prelude::list"](x_0_198, x_0_199);
  x_0_201 = newark["prelude::make-qualified-symbol"]("core", "quote");
  x_0_202 = newark["prelude::make-symbol"]("foo");
  x_0_200 = newark["prelude::list"](x_0_201, x_0_202);
  x_0_194 = newark["prelude::list"](x_0_195, x_0_196, [x_0_96, x_0_197], x_0_200);
  newark["prelude::pr"](x_0_194);
  newark["prelude::print"](" => ");
  newark["prelude::prn"](x_0_191);
  x_0_204 = newark["prelude::make-symbol"]("foo");
  x_0_203 = newark["poet/env::lookup"](newark["poet::e0"], [x_0_96, x_0_204]);
  x_0_206 = newark["prelude::make-symbol"]("lookup");
  x_0_207 = newark["prelude::make-symbol"]("e0");
  x_0_209 = newark["prelude::make-qualified-symbol"]("core", "quote");
  x_0_210 = newark["prelude::make-symbol"]("foo");
  x_0_208 = newark["prelude::list"](x_0_209, x_0_210);
  x_0_205 = newark["prelude::list"](x_0_206, x_0_207, [x_0_96, x_0_208]);
  newark["prelude::pr"](x_0_205);
  newark["prelude::print"](" => ");
  newark["prelude::prn"](x_0_203);
  newark["prelude::println"]();
  x_0_211 = ("[" + "syntax-rules-sanity-check" + "]");
  newark["prelude::println"](x_0_211);
  x_0_213 = newark["prelude::make-symbol"]("x");
  x_0_212 = newark["poet/syntax::match"](x_0_213, 42);
  x_0_215 = newark["prelude::make-symbol"]("s/match");
  x_0_217 = newark["prelude::make-qualified-symbol"]("core", "quote");
  x_0_218 = newark["prelude::make-symbol"]("x");
  x_0_216 = newark["prelude::list"](x_0_217, x_0_218);
  x_0_214 = newark["prelude::list"](x_0_215, x_0_216, 42);
  newark["prelude::pr"](x_0_214);
  newark["prelude::print"](" => ");
  newark["prelude::prn"](x_0_212);
  x_0_221 = newark["prelude::make-symbol"]("x");
  x_0_220 = newark["prelude::list"](x_0_221);
  x_0_222 = newark["prelude::list"](42);
  x_0_219 = newark["poet/syntax::match"](x_0_220, x_0_222);
  x_0_224 = newark["prelude::make-symbol"]("s/match");
  x_0_226 = newark["prelude::make-qualified-symbol"]("core", "quote");
  x_0_228 = newark["prelude::make-symbol"]("x");
  x_0_227 = newark["prelude::list"](x_0_228);
  x_0_225 = newark["prelude::list"](x_0_226, x_0_227);
  x_0_230 = newark["prelude::make-qualified-symbol"]("core", "quote");
  x_0_231 = newark["prelude::list"](42);
  x_0_229 = newark["prelude::list"](x_0_230, x_0_231);
  x_0_223 = newark["prelude::list"](x_0_224, x_0_225, x_0_229);
  newark["prelude::pr"](x_0_223);
  newark["prelude::print"](" => ");
  newark["prelude::prn"](x_0_219);
  x_0_233 = newark["prelude::make-symbol"]("x");
  x_0_232 = newark["poet/syntax::match"]([x_0_233], [42]);
  x_0_235 = newark["prelude::make-symbol"]("s/match");
  x_0_237 = newark["prelude::make-qualified-symbol"]("core", "quote");
  x_0_238 = newark["prelude::make-symbol"]("x");
  x_0_236 = newark["prelude::list"](x_0_237, [x_0_238]);
  x_0_240 = newark["prelude::make-qualified-symbol"]("core", "quote");
  x_0_239 = newark["prelude::list"](x_0_240, [42]);
  x_0_234 = newark["prelude::list"](x_0_235, x_0_236, x_0_239);
  newark["prelude::pr"](x_0_234);
  newark["prelude::print"](" => ");
  newark["prelude::prn"](x_0_232);
  x_0_241 = newark["poet/syntax::match"](42, 42);
  x_0_243 = newark["prelude::make-symbol"]("s/match");
  x_0_242 = newark["prelude::list"](x_0_243, 42, 42);
  newark["prelude::pr"](x_0_242);
  newark["prelude::print"](" => ");
  newark["prelude::prn"](x_0_241);
  x_0_244 = newark["poet/syntax::match"](42, 43);
  x_0_246 = newark["prelude::make-symbol"]("s/match");
  x_0_245 = newark["prelude::list"](x_0_246, 42, 43);
  newark["prelude::pr"](x_0_245);
  newark["prelude::print"](" => ");
  newark["prelude::prn"](x_0_244);
  x_0_247 = newark["poet/syntax::match"](x_0_92, x_0_92);
  x_0_249 = newark["prelude::make-symbol"]("s/match");
  x_0_248 = newark["prelude::list"](x_0_249, x_0_92, x_0_92);
  newark["prelude::pr"](x_0_248);
  newark["prelude::print"](" => ");
  newark["prelude::prn"](x_0_247);
  x_0_250 = newark["poet/syntax::match"](x_0_92, x_0_251);
  x_0_253 = newark["prelude::make-symbol"]("s/match");
  x_0_252 = newark["prelude::list"](x_0_253, x_0_92, x_0_251);
  newark["prelude::pr"](x_0_252);
  newark["prelude::print"](" => ");
  newark["prelude::prn"](x_0_250);
  x_0_256 = newark["prelude::make-symbol"]("x");
  x_0_257 = newark["prelude::make-symbol"]("xs");
  x_0_258 = newark["prelude::make-symbol"]("...");
  x_0_255 = newark["prelude::list"](x_0_256, x_0_257, x_0_258);
  x_0_259 = newark["prelude::list"](1, 2, 3, 4, 5);
  x_0_254 = newark["poet/syntax::match"](x_0_255, x_0_259);
  x_0_261 = newark["prelude::make-symbol"]("s/match");
  x_0_263 = newark["prelude::make-qualified-symbol"]("core", "quote");
  x_0_265 = newark["prelude::make-symbol"]("x");
  x_0_266 = newark["prelude::make-symbol"]("xs");
  x_0_267 = newark["prelude::make-symbol"]("...");
  x_0_264 = newark["prelude::list"](x_0_265, x_0_266, x_0_267);
  x_0_262 = newark["prelude::list"](x_0_263, x_0_264);
  x_0_269 = newark["prelude::make-qualified-symbol"]("core", "quote");
  x_0_270 = newark["prelude::list"](1, 2, 3, 4, 5);
  x_0_268 = newark["prelude::list"](x_0_269, x_0_270);
  x_0_260 = newark["prelude::list"](x_0_261, x_0_262, x_0_268);
  newark["prelude::pr"](x_0_260);
  newark["prelude::print"](" => ");
  newark["prelude::prn"](x_0_254);
  x_0_272 = newark["prelude::make-symbol"]("x");
  x_0_273 = newark["prelude::make-symbol"]("xs");
  x_0_274 = newark["prelude::make-symbol"]("...");
  x_0_271 = newark["poet/syntax::match"]([x_0_272, x_0_273, x_0_274], [x_0_92, x_0_251, x_0_275, x_0_276]);
  x_0_278 = newark["prelude::make-symbol"]("s/match");
  x_0_280 = newark["prelude::make-qualified-symbol"]("core", "quote");
  x_0_281 = newark["prelude::make-symbol"]("x");
  x_0_282 = newark["prelude::make-symbol"]("xs");
  x_0_283 = newark["prelude::make-symbol"]("...");
  x_0_279 = newark["prelude::list"](x_0_280, [x_0_281, x_0_282, x_0_283]);
  x_0_277 = newark["prelude::list"](x_0_278, x_0_279, [x_0_92, x_0_251, x_0_275, x_0_276]);
  newark["prelude::pr"](x_0_277);
  newark["prelude::print"](" => ");
  newark["prelude::prn"](x_0_271);
  x_0_289 = newark["prelude::make-symbol"]("x");
  x_0_290 = newark["prelude::make-symbol"]("xs");
  x_0_291 = newark["prelude::make-symbol"]("...");
  x_0_288 = newark["prelude::list"](x_0_92, x_0_289, x_0_290, x_0_291);
  x_0_293 = newark["prelude::make-symbol"]("xs");
  x_0_294 = newark["prelude::make-symbol"]("...");
  x_0_295 = newark["prelude::make-symbol"]("x");
  x_0_292 = newark["prelude::list"](x_0_293, x_0_294, x_0_295);
  x_0_287 = newark["prelude::list"](x_0_288, x_0_292);
  x_0_286 = newark["prelude::list"](x_0_287);
  x_0_285 = newark["poet/syntax::make-matcher"](x_0_286);
  x_0_296 = newark["prelude::list"](x_0_92, 1, 2, 3, 4, 5, 6);
  x_0_284 = x_0_285(x_0_296);
  x_0_299 = newark["prelude::make-symbol"]("s/make-matcher");
  x_0_301 = newark["prelude::make-qualified-symbol"]("core", "quote");
  x_0_305 = newark["prelude::make-symbol"]("x");
  x_0_306 = newark["prelude::make-symbol"]("xs");
  x_0_307 = newark["prelude::make-symbol"]("...");
  x_0_304 = newark["prelude::list"](x_0_92, x_0_305, x_0_306, x_0_307);
  x_0_309 = newark["prelude::make-symbol"]("xs");
  x_0_310 = newark["prelude::make-symbol"]("...");
  x_0_311 = newark["prelude::make-symbol"]("x");
  x_0_308 = newark["prelude::list"](x_0_309, x_0_310, x_0_311);
  x_0_303 = newark["prelude::list"](x_0_304, x_0_308);
  x_0_302 = newark["prelude::list"](x_0_303);
  x_0_300 = newark["prelude::list"](x_0_301, x_0_302);
  x_0_298 = newark["prelude::list"](x_0_299, x_0_300);
  x_0_313 = newark["prelude::make-qualified-symbol"]("core", "quote");
  x_0_314 = newark["prelude::list"](x_0_92, 1, 2, 3, 4, 5, 6);
  x_0_312 = newark["prelude::list"](x_0_313, x_0_314);
  x_0_297 = newark["prelude::list"](x_0_298, x_0_312);
  newark["prelude::pr"](x_0_297);
  newark["prelude::print"](" => ");
  newark["prelude::prn"](x_0_284);
  x_0_320 = newark["prelude::make-symbol"]("x");
  x_0_321 = newark["prelude::make-symbol"]("xs");
  x_0_322 = newark["prelude::make-symbol"]("...");
  x_0_319 = newark["prelude::list"](x_0_92, x_0_320, x_0_321, x_0_322);
  x_0_324 = newark["prelude::make-symbol"]("xs");
  x_0_325 = newark["prelude::make-symbol"]("...");
  x_0_326 = newark["prelude::make-symbol"]("x");
  x_0_323 = newark["prelude::list"](x_0_324, x_0_325, x_0_326);
  x_0_318 = newark["prelude::list"](x_0_319, x_0_323);
  x_0_317 = newark["prelude::list"](x_0_318);
  x_0_316 = newark["poet/syntax::make-matcher"](x_0_317);
  x_0_327 = newark["prelude::list"](x_0_251, 1, 2, 3, 4, 5, 6);
  x_0_315 = x_0_316(x_0_327);
  x_0_330 = newark["prelude::make-symbol"]("s/make-matcher");
  x_0_332 = newark["prelude::make-qualified-symbol"]("core", "quote");
  x_0_336 = newark["prelude::make-symbol"]("x");
  x_0_337 = newark["prelude::make-symbol"]("xs");
  x_0_338 = newark["prelude::make-symbol"]("...");
  x_0_335 = newark["prelude::list"](x_0_92, x_0_336, x_0_337, x_0_338);
  x_0_340 = newark["prelude::make-symbol"]("xs");
  x_0_341 = newark["prelude::make-symbol"]("...");
  x_0_342 = newark["prelude::make-symbol"]("x");
  x_0_339 = newark["prelude::list"](x_0_340, x_0_341, x_0_342);
  x_0_334 = newark["prelude::list"](x_0_335, x_0_339);
  x_0_333 = newark["prelude::list"](x_0_334);
  x_0_331 = newark["prelude::list"](x_0_332, x_0_333);
  x_0_329 = newark["prelude::list"](x_0_330, x_0_331);
  x_0_344 = newark["prelude::make-qualified-symbol"]("core", "quote");
  x_0_345 = newark["prelude::list"](x_0_251, 1, 2, 3, 4, 5, 6);
  x_0_343 = newark["prelude::list"](x_0_344, x_0_345);
  x_0_328 = newark["prelude::list"](x_0_329, x_0_343);
  newark["prelude::pr"](x_0_328);
  newark["prelude::print"](" => ");
  x_0_0 = newark["prelude::prn"](x_0_315);
  return x_0_0;
})();

})();