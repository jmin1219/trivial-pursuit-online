function C0(t, r) {
  for (var o = 0; o < r.length; o++) {
    const i = r[o];
    if (typeof i != "string" && !Array.isArray(i)) {
      for (const l in i)
        if (l !== "default" && !(l in t)) {
          const c = Object.getOwnPropertyDescriptor(i, l);
          c &&
            Object.defineProperty(
              t,
              l,
              c.get ? c : { enumerable: !0, get: () => i[l] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(t, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const r = document.createElement("link").relList;
  if (r && r.supports && r.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) i(l);
  new MutationObserver((l) => {
    for (const c of l)
      if (c.type === "childList")
        for (const u of c.addedNodes)
          u.tagName === "LINK" && u.rel === "modulepreload" && i(u);
  }).observe(document, { childList: !0, subtree: !0 });
  function o(l) {
    const c = {};
    return (
      l.integrity && (c.integrity = l.integrity),
      l.referrerPolicy && (c.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (c.credentials = "include")
        : l.crossOrigin === "anonymous"
        ? (c.credentials = "omit")
        : (c.credentials = "same-origin"),
      c
    );
  }
  function i(l) {
    if (l.ep) return;
    l.ep = !0;
    const c = o(l);
    fetch(l.href, c);
  }
})();
function Fu(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default")
    ? t.default
    : t;
}
var Bc = { exports: {} },
  si = {},
  jc = { exports: {} },
  Ce = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var fh;
function k0() {
  if (fh) return Ce;
  fh = 1;
  var t = Symbol.for("react.element"),
    r = Symbol.for("react.portal"),
    o = Symbol.for("react.fragment"),
    i = Symbol.for("react.strict_mode"),
    l = Symbol.for("react.profiler"),
    c = Symbol.for("react.provider"),
    u = Symbol.for("react.context"),
    f = Symbol.for("react.forward_ref"),
    m = Symbol.for("react.suspense"),
    h = Symbol.for("react.memo"),
    y = Symbol.for("react.lazy"),
    x = Symbol.iterator;
  function E(T) {
    return T === null || typeof T != "object"
      ? null
      : ((T = (x && T[x]) || T["@@iterator"]),
        typeof T == "function" ? T : null);
  }
  var b = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    C = Object.assign,
    w = {};
  function S(T, U, he) {
    (this.props = T),
      (this.context = U),
      (this.refs = w),
      (this.updater = he || b);
  }
  (S.prototype.isReactComponent = {}),
    (S.prototype.setState = function (T, U) {
      if (typeof T != "object" && typeof T != "function" && T != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, T, U, "setState");
    }),
    (S.prototype.forceUpdate = function (T) {
      this.updater.enqueueForceUpdate(this, T, "forceUpdate");
    });
  function R() {}
  R.prototype = S.prototype;
  function k(T, U, he) {
    (this.props = T),
      (this.context = U),
      (this.refs = w),
      (this.updater = he || b);
  }
  var P = (k.prototype = new R());
  (P.constructor = k), C(P, S.prototype), (P.isPureReactComponent = !0);
  var D = Array.isArray,
    B = Object.prototype.hasOwnProperty,
    W = { current: null },
    z = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Y(T, U, he) {
    var pe,
      Ae = {},
      Se = null,
      K = null;
    if (U != null)
      for (pe in (U.ref !== void 0 && (K = U.ref),
      U.key !== void 0 && (Se = "" + U.key),
      U))
        B.call(U, pe) && !z.hasOwnProperty(pe) && (Ae[pe] = U[pe]);
    var ce = arguments.length - 2;
    if (ce === 1) Ae.children = he;
    else if (1 < ce) {
      for (var we = Array(ce), Ee = 0; Ee < ce; Ee++)
        we[Ee] = arguments[Ee + 2];
      Ae.children = we;
    }
    if (T && T.defaultProps)
      for (pe in ((ce = T.defaultProps), ce))
        Ae[pe] === void 0 && (Ae[pe] = ce[pe]);
    return {
      $$typeof: t,
      type: T,
      key: Se,
      ref: K,
      props: Ae,
      _owner: W.current,
    };
  }
  function Q(T, U) {
    return {
      $$typeof: t,
      type: T.type,
      key: U,
      ref: T.ref,
      props: T.props,
      _owner: T._owner,
    };
  }
  function se(T) {
    return typeof T == "object" && T !== null && T.$$typeof === t;
  }
  function ge(T) {
    var U = { "=": "=0", ":": "=2" };
    return (
      "$" +
      T.replace(/[=:]/g, function (he) {
        return U[he];
      })
    );
  }
  var X = /\/+/g;
  function q(T, U) {
    return typeof T == "object" && T !== null && T.key != null
      ? ge("" + T.key)
      : U.toString(36);
  }
  function ae(T, U, he, pe, Ae) {
    var Se = typeof T;
    (Se === "undefined" || Se === "boolean") && (T = null);
    var K = !1;
    if (T === null) K = !0;
    else
      switch (Se) {
        case "string":
        case "number":
          K = !0;
          break;
        case "object":
          switch (T.$$typeof) {
            case t:
            case r:
              K = !0;
          }
      }
    if (K)
      return (
        (K = T),
        (Ae = Ae(K)),
        (T = pe === "" ? "." + q(K, 0) : pe),
        D(Ae)
          ? ((he = ""),
            T != null && (he = T.replace(X, "$&/") + "/"),
            ae(Ae, U, he, "", function (Ee) {
              return Ee;
            }))
          : Ae != null &&
            (se(Ae) &&
              (Ae = Q(
                Ae,
                he +
                  (!Ae.key || (K && K.key === Ae.key)
                    ? ""
                    : ("" + Ae.key).replace(X, "$&/") + "/") +
                  T
              )),
            U.push(Ae)),
        1
      );
    if (((K = 0), (pe = pe === "" ? "." : pe + ":"), D(T)))
      for (var ce = 0; ce < T.length; ce++) {
        Se = T[ce];
        var we = pe + q(Se, ce);
        K += ae(Se, U, he, we, Ae);
      }
    else if (((we = E(T)), typeof we == "function"))
      for (T = we.call(T), ce = 0; !(Se = T.next()).done; )
        (Se = Se.value), (we = pe + q(Se, ce++)), (K += ae(Se, U, he, we, Ae));
    else if (Se === "object")
      throw (
        ((U = String(T)),
        Error(
          "Objects are not valid as a React child (found: " +
            (U === "[object Object]"
              ? "object with keys {" + Object.keys(T).join(", ") + "}"
              : U) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    return K;
  }
  function ye(T, U, he) {
    if (T == null) return T;
    var pe = [],
      Ae = 0;
    return (
      ae(T, pe, "", "", function (Se) {
        return U.call(he, Se, Ae++);
      }),
      pe
    );
  }
  function oe(T) {
    if (T._status === -1) {
      var U = T._result;
      (U = U()),
        U.then(
          function (he) {
            (T._status === 0 || T._status === -1) &&
              ((T._status = 1), (T._result = he));
          },
          function (he) {
            (T._status === 0 || T._status === -1) &&
              ((T._status = 2), (T._result = he));
          }
        ),
        T._status === -1 && ((T._status = 0), (T._result = U));
    }
    if (T._status === 1) return T._result.default;
    throw T._result;
  }
  var ne = { current: null },
    _ = { transition: null },
    J = {
      ReactCurrentDispatcher: ne,
      ReactCurrentBatchConfig: _,
      ReactCurrentOwner: W,
    };
  function Z() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (Ce.Children = {
      map: ye,
      forEach: function (T, U, he) {
        ye(
          T,
          function () {
            U.apply(this, arguments);
          },
          he
        );
      },
      count: function (T) {
        var U = 0;
        return (
          ye(T, function () {
            U++;
          }),
          U
        );
      },
      toArray: function (T) {
        return (
          ye(T, function (U) {
            return U;
          }) || []
        );
      },
      only: function (T) {
        if (!se(T))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return T;
      },
    }),
    (Ce.Component = S),
    (Ce.Fragment = o),
    (Ce.Profiler = l),
    (Ce.PureComponent = k),
    (Ce.StrictMode = i),
    (Ce.Suspense = m),
    (Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = J),
    (Ce.act = Z),
    (Ce.cloneElement = function (T, U, he) {
      if (T == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            T +
            "."
        );
      var pe = C({}, T.props),
        Ae = T.key,
        Se = T.ref,
        K = T._owner;
      if (U != null) {
        if (
          (U.ref !== void 0 && ((Se = U.ref), (K = W.current)),
          U.key !== void 0 && (Ae = "" + U.key),
          T.type && T.type.defaultProps)
        )
          var ce = T.type.defaultProps;
        for (we in U)
          B.call(U, we) &&
            !z.hasOwnProperty(we) &&
            (pe[we] = U[we] === void 0 && ce !== void 0 ? ce[we] : U[we]);
      }
      var we = arguments.length - 2;
      if (we === 1) pe.children = he;
      else if (1 < we) {
        ce = Array(we);
        for (var Ee = 0; Ee < we; Ee++) ce[Ee] = arguments[Ee + 2];
        pe.children = ce;
      }
      return {
        $$typeof: t,
        type: T.type,
        key: Ae,
        ref: Se,
        props: pe,
        _owner: K,
      };
    }),
    (Ce.createContext = function (T) {
      return (
        (T = {
          $$typeof: u,
          _currentValue: T,
          _currentValue2: T,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (T.Provider = { $$typeof: c, _context: T }),
        (T.Consumer = T)
      );
    }),
    (Ce.createElement = Y),
    (Ce.createFactory = function (T) {
      var U = Y.bind(null, T);
      return (U.type = T), U;
    }),
    (Ce.createRef = function () {
      return { current: null };
    }),
    (Ce.forwardRef = function (T) {
      return { $$typeof: f, render: T };
    }),
    (Ce.isValidElement = se),
    (Ce.lazy = function (T) {
      return { $$typeof: y, _payload: { _status: -1, _result: T }, _init: oe };
    }),
    (Ce.memo = function (T, U) {
      return { $$typeof: h, type: T, compare: U === void 0 ? null : U };
    }),
    (Ce.startTransition = function (T) {
      var U = _.transition;
      _.transition = {};
      try {
        T();
      } finally {
        _.transition = U;
      }
    }),
    (Ce.unstable_act = Z),
    (Ce.useCallback = function (T, U) {
      return ne.current.useCallback(T, U);
    }),
    (Ce.useContext = function (T) {
      return ne.current.useContext(T);
    }),
    (Ce.useDebugValue = function () {}),
    (Ce.useDeferredValue = function (T) {
      return ne.current.useDeferredValue(T);
    }),
    (Ce.useEffect = function (T, U) {
      return ne.current.useEffect(T, U);
    }),
    (Ce.useId = function () {
      return ne.current.useId();
    }),
    (Ce.useImperativeHandle = function (T, U, he) {
      return ne.current.useImperativeHandle(T, U, he);
    }),
    (Ce.useInsertionEffect = function (T, U) {
      return ne.current.useInsertionEffect(T, U);
    }),
    (Ce.useLayoutEffect = function (T, U) {
      return ne.current.useLayoutEffect(T, U);
    }),
    (Ce.useMemo = function (T, U) {
      return ne.current.useMemo(T, U);
    }),
    (Ce.useReducer = function (T, U, he) {
      return ne.current.useReducer(T, U, he);
    }),
    (Ce.useRef = function (T) {
      return ne.current.useRef(T);
    }),
    (Ce.useState = function (T) {
      return ne.current.useState(T);
    }),
    (Ce.useSyncExternalStore = function (T, U, he) {
      return ne.current.useSyncExternalStore(T, U, he);
    }),
    (Ce.useTransition = function () {
      return ne.current.useTransition();
    }),
    (Ce.version = "18.3.1"),
    Ce
  );
}
var ph;
function zu() {
  return ph || ((ph = 1), (jc.exports = k0())), jc.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var hh;
function R0() {
  if (hh) return si;
  hh = 1;
  var t = zu(),
    r = Symbol.for("react.element"),
    o = Symbol.for("react.fragment"),
    i = Object.prototype.hasOwnProperty,
    l = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    c = { key: !0, ref: !0, __self: !0, __source: !0 };
  function u(f, m, h) {
    var y,
      x = {},
      E = null,
      b = null;
    h !== void 0 && (E = "" + h),
      m.key !== void 0 && (E = "" + m.key),
      m.ref !== void 0 && (b = m.ref);
    for (y in m) i.call(m, y) && !c.hasOwnProperty(y) && (x[y] = m[y]);
    if (f && f.defaultProps)
      for (y in ((m = f.defaultProps), m)) x[y] === void 0 && (x[y] = m[y]);
    return {
      $$typeof: r,
      type: f,
      key: E,
      ref: b,
      props: x,
      _owner: l.current,
    };
  }
  return (si.Fragment = o), (si.jsx = u), (si.jsxs = u), si;
}
var mh;
function b0() {
  return mh || ((mh = 1), (Bc.exports = R0())), Bc.exports;
}
var v = b0(),
  g = zu();
const jt = Fu(g),
  N0 = C0({ __proto__: null, default: jt }, [g]);
var Qs = {},
  Mc = { exports: {} },
  At = {},
  Lc = { exports: {} },
  _c = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var gh;
function P0() {
  return (
    gh ||
      ((gh = 1),
      (function (t) {
        function r(_, J) {
          var Z = _.length;
          _.push(J);
          e: for (; 0 < Z; ) {
            var T = (Z - 1) >>> 1,
              U = _[T];
            if (0 < l(U, J)) (_[T] = J), (_[Z] = U), (Z = T);
            else break e;
          }
        }
        function o(_) {
          return _.length === 0 ? null : _[0];
        }
        function i(_) {
          if (_.length === 0) return null;
          var J = _[0],
            Z = _.pop();
          if (Z !== J) {
            _[0] = Z;
            e: for (var T = 0, U = _.length, he = U >>> 1; T < he; ) {
              var pe = 2 * (T + 1) - 1,
                Ae = _[pe],
                Se = pe + 1,
                K = _[Se];
              if (0 > l(Ae, Z))
                Se < U && 0 > l(K, Ae)
                  ? ((_[T] = K), (_[Se] = Z), (T = Se))
                  : ((_[T] = Ae), (_[pe] = Z), (T = pe));
              else if (Se < U && 0 > l(K, Z)) (_[T] = K), (_[Se] = Z), (T = Se);
              else break e;
            }
          }
          return J;
        }
        function l(_, J) {
          var Z = _.sortIndex - J.sortIndex;
          return Z !== 0 ? Z : _.id - J.id;
        }
        if (
          typeof performance == "object" &&
          typeof performance.now == "function"
        ) {
          var c = performance;
          t.unstable_now = function () {
            return c.now();
          };
        } else {
          var u = Date,
            f = u.now();
          t.unstable_now = function () {
            return u.now() - f;
          };
        }
        var m = [],
          h = [],
          y = 1,
          x = null,
          E = 3,
          b = !1,
          C = !1,
          w = !1,
          S = typeof setTimeout == "function" ? setTimeout : null,
          R = typeof clearTimeout == "function" ? clearTimeout : null,
          k = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function P(_) {
          for (var J = o(h); J !== null; ) {
            if (J.callback === null) i(h);
            else if (J.startTime <= _)
              i(h), (J.sortIndex = J.expirationTime), r(m, J);
            else break;
            J = o(h);
          }
        }
        function D(_) {
          if (((w = !1), P(_), !C))
            if (o(m) !== null) (C = !0), oe(B);
            else {
              var J = o(h);
              J !== null && ne(D, J.startTime - _);
            }
        }
        function B(_, J) {
          (C = !1), w && ((w = !1), R(Y), (Y = -1)), (b = !0);
          var Z = E;
          try {
            for (
              P(J), x = o(m);
              x !== null && (!(x.expirationTime > J) || (_ && !ge()));

            ) {
              var T = x.callback;
              if (typeof T == "function") {
                (x.callback = null), (E = x.priorityLevel);
                var U = T(x.expirationTime <= J);
                (J = t.unstable_now()),
                  typeof U == "function"
                    ? (x.callback = U)
                    : x === o(m) && i(m),
                  P(J);
              } else i(m);
              x = o(m);
            }
            if (x !== null) var he = !0;
            else {
              var pe = o(h);
              pe !== null && ne(D, pe.startTime - J), (he = !1);
            }
            return he;
          } finally {
            (x = null), (E = Z), (b = !1);
          }
        }
        var W = !1,
          z = null,
          Y = -1,
          Q = 5,
          se = -1;
        function ge() {
          return !(t.unstable_now() - se < Q);
        }
        function X() {
          if (z !== null) {
            var _ = t.unstable_now();
            se = _;
            var J = !0;
            try {
              J = z(!0, _);
            } finally {
              J ? q() : ((W = !1), (z = null));
            }
          } else W = !1;
        }
        var q;
        if (typeof k == "function")
          q = function () {
            k(X);
          };
        else if (typeof MessageChannel < "u") {
          var ae = new MessageChannel(),
            ye = ae.port2;
          (ae.port1.onmessage = X),
            (q = function () {
              ye.postMessage(null);
            });
        } else
          q = function () {
            S(X, 0);
          };
        function oe(_) {
          (z = _), W || ((W = !0), q());
        }
        function ne(_, J) {
          Y = S(function () {
            _(t.unstable_now());
          }, J);
        }
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (_) {
            _.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            C || b || ((C = !0), oe(B));
          }),
          (t.unstable_forceFrameRate = function (_) {
            0 > _ || 125 < _
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (Q = 0 < _ ? Math.floor(1e3 / _) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return E;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return o(m);
          }),
          (t.unstable_next = function (_) {
            switch (E) {
              case 1:
              case 2:
              case 3:
                var J = 3;
                break;
              default:
                J = E;
            }
            var Z = E;
            E = J;
            try {
              return _();
            } finally {
              E = Z;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = function () {}),
          (t.unstable_runWithPriority = function (_, J) {
            switch (_) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                _ = 3;
            }
            var Z = E;
            E = _;
            try {
              return J();
            } finally {
              E = Z;
            }
          }),
          (t.unstable_scheduleCallback = function (_, J, Z) {
            var T = t.unstable_now();
            switch (
              (typeof Z == "object" && Z !== null
                ? ((Z = Z.delay),
                  (Z = typeof Z == "number" && 0 < Z ? T + Z : T))
                : (Z = T),
              _)
            ) {
              case 1:
                var U = -1;
                break;
              case 2:
                U = 250;
                break;
              case 5:
                U = 1073741823;
                break;
              case 4:
                U = 1e4;
                break;
              default:
                U = 5e3;
            }
            return (
              (U = Z + U),
              (_ = {
                id: y++,
                callback: J,
                priorityLevel: _,
                startTime: Z,
                expirationTime: U,
                sortIndex: -1,
              }),
              Z > T
                ? ((_.sortIndex = Z),
                  r(h, _),
                  o(m) === null &&
                    _ === o(h) &&
                    (w ? (R(Y), (Y = -1)) : (w = !0), ne(D, Z - T)))
                : ((_.sortIndex = U), r(m, _), C || b || ((C = !0), oe(B))),
              _
            );
          }),
          (t.unstable_shouldYield = ge),
          (t.unstable_wrapCallback = function (_) {
            var J = E;
            return function () {
              var Z = E;
              E = J;
              try {
                return _.apply(this, arguments);
              } finally {
                E = Z;
              }
            };
          });
      })(_c)),
    _c
  );
}
var yh;
function O0() {
  return yh || ((yh = 1), (Lc.exports = P0())), Lc.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var vh;
function I0() {
  if (vh) return At;
  vh = 1;
  var t = zu(),
    r = O0();
  function o(e) {
    for (
      var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
        s = 1;
      s < arguments.length;
      s++
    )
      n += "&args[]=" + encodeURIComponent(arguments[s]);
    return (
      "Minified React error #" +
      e +
      "; visit " +
      n +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var i = new Set(),
    l = {};
  function c(e, n) {
    u(e, n), u(e + "Capture", n);
  }
  function u(e, n) {
    for (l[e] = n, e = 0; e < n.length; e++) i.add(n[e]);
  }
  var f = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    m = Object.prototype.hasOwnProperty,
    h =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    y = {},
    x = {};
  function E(e) {
    return m.call(x, e)
      ? !0
      : m.call(y, e)
      ? !1
      : h.test(e)
      ? (x[e] = !0)
      : ((y[e] = !0), !1);
  }
  function b(e, n, s, a) {
    if (s !== null && s.type === 0) return !1;
    switch (typeof n) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return a
          ? !1
          : s !== null
          ? !s.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function C(e, n, s, a) {
    if (n === null || typeof n > "u" || b(e, n, s, a)) return !0;
    if (a) return !1;
    if (s !== null)
      switch (s.type) {
        case 3:
          return !n;
        case 4:
          return n === !1;
        case 5:
          return isNaN(n);
        case 6:
          return isNaN(n) || 1 > n;
      }
    return !1;
  }
  function w(e, n, s, a, d, p, A) {
    (this.acceptsBooleans = n === 2 || n === 3 || n === 4),
      (this.attributeName = a),
      (this.attributeNamespace = d),
      (this.mustUseProperty = s),
      (this.propertyName = e),
      (this.type = n),
      (this.sanitizeURL = p),
      (this.removeEmptyString = A);
  }
  var S = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      S[e] = new w(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var n = e[0];
      S[n] = new w(n, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (
      e
    ) {
      S[e] = new w(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (e) {
      S[e] = new w(e, 2, !1, e, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        S[e] = new w(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      S[e] = new w(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      S[e] = new w(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      S[e] = new w(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      S[e] = new w(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
  var R = /[\-:]([a-z])/g;
  function k(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var n = e.replace(R, k);
      S[n] = new w(n, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var n = e.replace(R, k);
        S[n] = new w(n, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var n = e.replace(R, k);
      S[n] = new w(n, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      S[e] = new w(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (S.xlinkHref = new w(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1
    )),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      S[e] = new w(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
  function P(e, n, s, a) {
    var d = S.hasOwnProperty(n) ? S[n] : null;
    (d !== null
      ? d.type !== 0
      : a ||
        !(2 < n.length) ||
        (n[0] !== "o" && n[0] !== "O") ||
        (n[1] !== "n" && n[1] !== "N")) &&
      (C(n, s, d, a) && (s = null),
      a || d === null
        ? E(n) &&
          (s === null ? e.removeAttribute(n) : e.setAttribute(n, "" + s))
        : d.mustUseProperty
        ? (e[d.propertyName] = s === null ? (d.type === 3 ? !1 : "") : s)
        : ((n = d.attributeName),
          (a = d.attributeNamespace),
          s === null
            ? e.removeAttribute(n)
            : ((d = d.type),
              (s = d === 3 || (d === 4 && s === !0) ? "" : "" + s),
              a ? e.setAttributeNS(a, n, s) : e.setAttribute(n, s))));
  }
  var D = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    B = Symbol.for("react.element"),
    W = Symbol.for("react.portal"),
    z = Symbol.for("react.fragment"),
    Y = Symbol.for("react.strict_mode"),
    Q = Symbol.for("react.profiler"),
    se = Symbol.for("react.provider"),
    ge = Symbol.for("react.context"),
    X = Symbol.for("react.forward_ref"),
    q = Symbol.for("react.suspense"),
    ae = Symbol.for("react.suspense_list"),
    ye = Symbol.for("react.memo"),
    oe = Symbol.for("react.lazy"),
    ne = Symbol.for("react.offscreen"),
    _ = Symbol.iterator;
  function J(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (_ && e[_]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var Z = Object.assign,
    T;
  function U(e) {
    if (T === void 0)
      try {
        throw Error();
      } catch (s) {
        var n = s.stack.trim().match(/\n( *(at )?)/);
        T = (n && n[1]) || "";
      }
    return (
      `
` +
      T +
      e
    );
  }
  var he = !1;
  function pe(e, n) {
    if (!e || he) return "";
    he = !0;
    var s = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (n)
        if (
          ((n = function () {
            throw Error();
          }),
          Object.defineProperty(n.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == "object" && Reflect.construct)
        ) {
          try {
            Reflect.construct(n, []);
          } catch (L) {
            var a = L;
          }
          Reflect.construct(e, [], n);
        } else {
          try {
            n.call();
          } catch (L) {
            a = L;
          }
          e.call(n.prototype);
        }
      else {
        try {
          throw Error();
        } catch (L) {
          a = L;
        }
        e();
      }
    } catch (L) {
      if (L && a && typeof L.stack == "string") {
        for (
          var d = L.stack.split(`
`),
            p = a.stack.split(`
`),
            A = d.length - 1,
            N = p.length - 1;
          1 <= A && 0 <= N && d[A] !== p[N];

        )
          N--;
        for (; 1 <= A && 0 <= N; A--, N--)
          if (d[A] !== p[N]) {
            if (A !== 1 || N !== 1)
              do
                if ((A--, N--, 0 > N || d[A] !== p[N])) {
                  var O =
                    `
` + d[A].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      O.includes("<anonymous>") &&
                      (O = O.replace("<anonymous>", e.displayName)),
                    O
                  );
                }
              while (1 <= A && 0 <= N);
            break;
          }
      }
    } finally {
      (he = !1), (Error.prepareStackTrace = s);
    }
    return (e = e ? e.displayName || e.name : "") ? U(e) : "";
  }
  function Ae(e) {
    switch (e.tag) {
      case 5:
        return U(e.type);
      case 16:
        return U("Lazy");
      case 13:
        return U("Suspense");
      case 19:
        return U("SuspenseList");
      case 0:
      case 2:
      case 15:
        return (e = pe(e.type, !1)), e;
      case 11:
        return (e = pe(e.type.render, !1)), e;
      case 1:
        return (e = pe(e.type, !0)), e;
      default:
        return "";
    }
  }
  function Se(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case z:
        return "Fragment";
      case W:
        return "Portal";
      case Q:
        return "Profiler";
      case Y:
        return "StrictMode";
      case q:
        return "Suspense";
      case ae:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case ge:
          return (e.displayName || "Context") + ".Consumer";
        case se:
          return (e._context.displayName || "Context") + ".Provider";
        case X:
          var n = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = n.displayName || n.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case ye:
          return (
            (n = e.displayName || null), n !== null ? n : Se(e.type) || "Memo"
          );
        case oe:
          (n = e._payload), (e = e._init);
          try {
            return Se(e(n));
          } catch {}
      }
    return null;
  }
  function K(e) {
    var n = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (n.displayName || "Context") + ".Consumer";
      case 10:
        return (n._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return (
          (e = n.render),
          (e = e.displayName || e.name || ""),
          n.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
        );
      case 7:
        return "Fragment";
      case 5:
        return n;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return Se(n);
      case 8:
        return n === Y ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof n == "function") return n.displayName || n.name || null;
        if (typeof n == "string") return n;
    }
    return null;
  }
  function ce(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function we(e) {
    var n = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (n === "checkbox" || n === "radio")
    );
  }
  function Ee(e) {
    var n = we(e) ? "checked" : "value",
      s = Object.getOwnPropertyDescriptor(e.constructor.prototype, n),
      a = "" + e[n];
    if (
      !e.hasOwnProperty(n) &&
      typeof s < "u" &&
      typeof s.get == "function" &&
      typeof s.set == "function"
    ) {
      var d = s.get,
        p = s.set;
      return (
        Object.defineProperty(e, n, {
          configurable: !0,
          get: function () {
            return d.call(this);
          },
          set: function (A) {
            (a = "" + A), p.call(this, A);
          },
        }),
        Object.defineProperty(e, n, { enumerable: s.enumerable }),
        {
          getValue: function () {
            return a;
          },
          setValue: function (A) {
            a = "" + A;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[n];
          },
        }
      );
    }
  }
  function Re(e) {
    e._valueTracker || (e._valueTracker = Ee(e));
  }
  function Pe(e) {
    if (!e) return !1;
    var n = e._valueTracker;
    if (!n) return !0;
    var s = n.getValue(),
      a = "";
    return (
      e && (a = we(e) ? (e.checked ? "true" : "false") : e.value),
      (e = a),
      e !== s ? (n.setValue(e), !0) : !1
    );
  }
  function Je(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function pt(e, n) {
    var s = n.checked;
    return Z({}, n, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: s ?? e._wrapperState.initialChecked,
    });
  }
  function bn(e, n) {
    var s = n.defaultValue == null ? "" : n.defaultValue,
      a = n.checked != null ? n.checked : n.defaultChecked;
    (s = ce(n.value != null ? n.value : s)),
      (e._wrapperState = {
        initialChecked: a,
        initialValue: s,
        controlled:
          n.type === "checkbox" || n.type === "radio"
            ? n.checked != null
            : n.value != null,
      });
  }
  function Nn(e, n) {
    (n = n.checked), n != null && P(e, "checked", n, !1);
  }
  function pn(e, n) {
    Nn(e, n);
    var s = ce(n.value),
      a = n.type;
    if (s != null)
      a === "number"
        ? ((s === 0 && e.value === "") || e.value != s) && (e.value = "" + s)
        : e.value !== "" + s && (e.value = "" + s);
    else if (a === "submit" || a === "reset") {
      e.removeAttribute("value");
      return;
    }
    n.hasOwnProperty("value")
      ? Pn(e, n.type, s)
      : n.hasOwnProperty("defaultValue") && Pn(e, n.type, ce(n.defaultValue)),
      n.checked == null &&
        n.defaultChecked != null &&
        (e.defaultChecked = !!n.defaultChecked);
  }
  function Bi(e, n, s) {
    if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
      var a = n.type;
      if (
        !(
          (a !== "submit" && a !== "reset") ||
          (n.value !== void 0 && n.value !== null)
        )
      )
        return;
      (n = "" + e._wrapperState.initialValue),
        s || n === e.value || (e.value = n),
        (e.defaultValue = n);
    }
    (s = e.name),
      s !== "" && (e.name = ""),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      s !== "" && (e.name = s);
  }
  function Pn(e, n, s) {
    (n !== "number" || Je(e.ownerDocument) !== e) &&
      (s == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + s && (e.defaultValue = "" + s));
  }
  var xo = Array.isArray;
  function br(e, n, s, a) {
    if (((e = e.options), n)) {
      n = {};
      for (var d = 0; d < s.length; d++) n["$" + s[d]] = !0;
      for (s = 0; s < e.length; s++)
        (d = n.hasOwnProperty("$" + e[s].value)),
          e[s].selected !== d && (e[s].selected = d),
          d && a && (e[s].defaultSelected = !0);
    } else {
      for (s = "" + ce(s), n = null, d = 0; d < e.length; d++) {
        if (e[d].value === s) {
          (e[d].selected = !0), a && (e[d].defaultSelected = !0);
          return;
        }
        n !== null || e[d].disabled || (n = e[d]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function Hl(e, n) {
    if (n.dangerouslySetInnerHTML != null) throw Error(o(91));
    return Z({}, n, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function xd(e, n) {
    var s = n.value;
    if (s == null) {
      if (((s = n.children), (n = n.defaultValue), s != null)) {
        if (n != null) throw Error(o(92));
        if (xo(s)) {
          if (1 < s.length) throw Error(o(93));
          s = s[0];
        }
        n = s;
      }
      n == null && (n = ""), (s = n);
    }
    e._wrapperState = { initialValue: ce(s) };
  }
  function Sd(e, n) {
    var s = ce(n.value),
      a = ce(n.defaultValue);
    s != null &&
      ((s = "" + s),
      s !== e.value && (e.value = s),
      n.defaultValue == null && e.defaultValue !== s && (e.defaultValue = s)),
      a != null && (e.defaultValue = "" + a);
  }
  function Ed(e) {
    var n = e.textContent;
    n === e._wrapperState.initialValue &&
      n !== "" &&
      n !== null &&
      (e.value = n);
  }
  function Cd(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Gl(e, n) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? Cd(n)
      : e === "http://www.w3.org/2000/svg" && n === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
  }
  var ji,
    kd = (function (e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (n, s, a, d) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(n, s, a, d);
            });
          }
        : e;
    })(function (e, n) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
        e.innerHTML = n;
      else {
        for (
          ji = ji || document.createElement("div"),
            ji.innerHTML = "<svg>" + n.valueOf().toString() + "</svg>",
            n = ji.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (; n.firstChild; ) e.appendChild(n.firstChild);
      }
    });
  function So(e, n) {
    if (n) {
      var s = e.firstChild;
      if (s && s === e.lastChild && s.nodeType === 3) {
        s.nodeValue = n;
        return;
      }
    }
    e.textContent = n;
  }
  var Eo = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    NA = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Eo).forEach(function (e) {
    NA.forEach(function (n) {
      (n = n + e.charAt(0).toUpperCase() + e.substring(1)), (Eo[n] = Eo[e]);
    });
  });
  function Rd(e, n, s) {
    return n == null || typeof n == "boolean" || n === ""
      ? ""
      : s || typeof n != "number" || n === 0 || (Eo.hasOwnProperty(e) && Eo[e])
      ? ("" + n).trim()
      : n + "px";
  }
  function bd(e, n) {
    e = e.style;
    for (var s in n)
      if (n.hasOwnProperty(s)) {
        var a = s.indexOf("--") === 0,
          d = Rd(s, n[s], a);
        s === "float" && (s = "cssFloat"), a ? e.setProperty(s, d) : (e[s] = d);
      }
  }
  var PA = Z(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    }
  );
  function Vl(e, n) {
    if (n) {
      if (PA[e] && (n.children != null || n.dangerouslySetInnerHTML != null))
        throw Error(o(137, e));
      if (n.dangerouslySetInnerHTML != null) {
        if (n.children != null) throw Error(o(60));
        if (
          typeof n.dangerouslySetInnerHTML != "object" ||
          !("__html" in n.dangerouslySetInnerHTML)
        )
          throw Error(o(61));
      }
      if (n.style != null && typeof n.style != "object") throw Error(o(62));
    }
  }
  function Yl(e, n) {
    if (e.indexOf("-") === -1) return typeof n.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var $l = null;
  function Zl(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Jl = null,
    Nr = null,
    Pr = null;
  function Nd(e) {
    if ((e = Go(e))) {
      if (typeof Jl != "function") throw Error(o(280));
      var n = e.stateNode;
      n && ((n = os(n)), Jl(e.stateNode, e.type, n));
    }
  }
  function Pd(e) {
    Nr ? (Pr ? Pr.push(e) : (Pr = [e])) : (Nr = e);
  }
  function Od() {
    if (Nr) {
      var e = Nr,
        n = Pr;
      if (((Pr = Nr = null), Nd(e), n)) for (e = 0; e < n.length; e++) Nd(n[e]);
    }
  }
  function Id(e, n) {
    return e(n);
  }
  function Td() {}
  var Xl = !1;
  function Dd(e, n, s) {
    if (Xl) return e(n, s);
    Xl = !0;
    try {
      return Id(e, n, s);
    } finally {
      (Xl = !1), (Nr !== null || Pr !== null) && (Td(), Od());
    }
  }
  function Co(e, n) {
    var s = e.stateNode;
    if (s === null) return null;
    var a = os(s);
    if (a === null) return null;
    s = a[n];
    e: switch (n) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (a = !a.disabled) ||
          ((e = e.type),
          (a = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !a);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (s && typeof s != "function") throw Error(o(231, n, typeof s));
    return s;
  }
  var ql = !1;
  if (f)
    try {
      var ko = {};
      Object.defineProperty(ko, "passive", {
        get: function () {
          ql = !0;
        },
      }),
        window.addEventListener("test", ko, ko),
        window.removeEventListener("test", ko, ko);
    } catch {
      ql = !1;
    }
  function OA(e, n, s, a, d, p, A, N, O) {
    var L = Array.prototype.slice.call(arguments, 3);
    try {
      n.apply(s, L);
    } catch (G) {
      this.onError(G);
    }
  }
  var Ro = !1,
    Mi = null,
    Li = !1,
    Kl = null,
    IA = {
      onError: function (e) {
        (Ro = !0), (Mi = e);
      },
    };
  function TA(e, n, s, a, d, p, A, N, O) {
    (Ro = !1), (Mi = null), OA.apply(IA, arguments);
  }
  function DA(e, n, s, a, d, p, A, N, O) {
    if ((TA.apply(this, arguments), Ro)) {
      if (Ro) {
        var L = Mi;
        (Ro = !1), (Mi = null);
      } else throw Error(o(198));
      Li || ((Li = !0), (Kl = L));
    }
  }
  function sr(e) {
    var n = e,
      s = e;
    if (e.alternate) for (; n.return; ) n = n.return;
    else {
      e = n;
      do (n = e), n.flags & 4098 && (s = n.return), (e = n.return);
      while (e);
    }
    return n.tag === 3 ? s : null;
  }
  function Bd(e) {
    if (e.tag === 13) {
      var n = e.memoizedState;
      if (
        (n === null && ((e = e.alternate), e !== null && (n = e.memoizedState)),
        n !== null)
      )
        return n.dehydrated;
    }
    return null;
  }
  function jd(e) {
    if (sr(e) !== e) throw Error(o(188));
  }
  function BA(e) {
    var n = e.alternate;
    if (!n) {
      if (((n = sr(e)), n === null)) throw Error(o(188));
      return n !== e ? null : e;
    }
    for (var s = e, a = n; ; ) {
      var d = s.return;
      if (d === null) break;
      var p = d.alternate;
      if (p === null) {
        if (((a = d.return), a !== null)) {
          s = a;
          continue;
        }
        break;
      }
      if (d.child === p.child) {
        for (p = d.child; p; ) {
          if (p === s) return jd(d), e;
          if (p === a) return jd(d), n;
          p = p.sibling;
        }
        throw Error(o(188));
      }
      if (s.return !== a.return) (s = d), (a = p);
      else {
        for (var A = !1, N = d.child; N; ) {
          if (N === s) {
            (A = !0), (s = d), (a = p);
            break;
          }
          if (N === a) {
            (A = !0), (a = d), (s = p);
            break;
          }
          N = N.sibling;
        }
        if (!A) {
          for (N = p.child; N; ) {
            if (N === s) {
              (A = !0), (s = p), (a = d);
              break;
            }
            if (N === a) {
              (A = !0), (a = p), (s = d);
              break;
            }
            N = N.sibling;
          }
          if (!A) throw Error(o(189));
        }
      }
      if (s.alternate !== a) throw Error(o(190));
    }
    if (s.tag !== 3) throw Error(o(188));
    return s.stateNode.current === s ? e : n;
  }
  function Md(e) {
    return (e = BA(e)), e !== null ? Ld(e) : null;
  }
  function Ld(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var n = Ld(e);
      if (n !== null) return n;
      e = e.sibling;
    }
    return null;
  }
  var _d = r.unstable_scheduleCallback,
    Fd = r.unstable_cancelCallback,
    jA = r.unstable_shouldYield,
    MA = r.unstable_requestPaint,
    Qe = r.unstable_now,
    LA = r.unstable_getCurrentPriorityLevel,
    ea = r.unstable_ImmediatePriority,
    zd = r.unstable_UserBlockingPriority,
    _i = r.unstable_NormalPriority,
    _A = r.unstable_LowPriority,
    Ud = r.unstable_IdlePriority,
    Fi = null,
    Kt = null;
  function FA(e) {
    if (Kt && typeof Kt.onCommitFiberRoot == "function")
      try {
        Kt.onCommitFiberRoot(Fi, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var _t = Math.clz32 ? Math.clz32 : WA,
    zA = Math.log,
    UA = Math.LN2;
  function WA(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((zA(e) / UA) | 0)) | 0;
  }
  var zi = 64,
    Ui = 4194304;
  function bo(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function Wi(e, n) {
    var s = e.pendingLanes;
    if (s === 0) return 0;
    var a = 0,
      d = e.suspendedLanes,
      p = e.pingedLanes,
      A = s & 268435455;
    if (A !== 0) {
      var N = A & ~d;
      N !== 0 ? (a = bo(N)) : ((p &= A), p !== 0 && (a = bo(p)));
    } else (A = s & ~d), A !== 0 ? (a = bo(A)) : p !== 0 && (a = bo(p));
    if (a === 0) return 0;
    if (
      n !== 0 &&
      n !== a &&
      !(n & d) &&
      ((d = a & -a), (p = n & -n), d >= p || (d === 16 && (p & 4194240) !== 0))
    )
      return n;
    if ((a & 4 && (a |= s & 16), (n = e.entangledLanes), n !== 0))
      for (e = e.entanglements, n &= a; 0 < n; )
        (s = 31 - _t(n)), (d = 1 << s), (a |= e[s]), (n &= ~d);
    return a;
  }
  function QA(e, n) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return n + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function HA(e, n) {
    for (
      var s = e.suspendedLanes,
        a = e.pingedLanes,
        d = e.expirationTimes,
        p = e.pendingLanes;
      0 < p;

    ) {
      var A = 31 - _t(p),
        N = 1 << A,
        O = d[A];
      O === -1
        ? (!(N & s) || N & a) && (d[A] = QA(N, n))
        : O <= n && (e.expiredLanes |= N),
        (p &= ~N);
    }
  }
  function ta(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function Wd() {
    var e = zi;
    return (zi <<= 1), !(zi & 4194240) && (zi = 64), e;
  }
  function na(e) {
    for (var n = [], s = 0; 31 > s; s++) n.push(e);
    return n;
  }
  function No(e, n, s) {
    (e.pendingLanes |= n),
      n !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (n = 31 - _t(n)),
      (e[n] = s);
  }
  function GA(e, n) {
    var s = e.pendingLanes & ~n;
    (e.pendingLanes = n),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= n),
      (e.mutableReadLanes &= n),
      (e.entangledLanes &= n),
      (n = e.entanglements);
    var a = e.eventTimes;
    for (e = e.expirationTimes; 0 < s; ) {
      var d = 31 - _t(s),
        p = 1 << d;
      (n[d] = 0), (a[d] = -1), (e[d] = -1), (s &= ~p);
    }
  }
  function ra(e, n) {
    var s = (e.entangledLanes |= n);
    for (e = e.entanglements; s; ) {
      var a = 31 - _t(s),
        d = 1 << a;
      (d & n) | (e[a] & n) && (e[a] |= n), (s &= ~d);
    }
  }
  var Oe = 0;
  function Qd(e) {
    return (
      (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
    );
  }
  var Hd,
    oa,
    Gd,
    Vd,
    Yd,
    ia = !1,
    Qi = [],
    On = null,
    In = null,
    Tn = null,
    Po = new Map(),
    Oo = new Map(),
    Dn = [],
    VA =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " "
      );
  function $d(e, n) {
    switch (e) {
      case "focusin":
      case "focusout":
        On = null;
        break;
      case "dragenter":
      case "dragleave":
        In = null;
        break;
      case "mouseover":
      case "mouseout":
        Tn = null;
        break;
      case "pointerover":
      case "pointerout":
        Po.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Oo.delete(n.pointerId);
    }
  }
  function Io(e, n, s, a, d, p) {
    return e === null || e.nativeEvent !== p
      ? ((e = {
          blockedOn: n,
          domEventName: s,
          eventSystemFlags: a,
          nativeEvent: p,
          targetContainers: [d],
        }),
        n !== null && ((n = Go(n)), n !== null && oa(n)),
        e)
      : ((e.eventSystemFlags |= a),
        (n = e.targetContainers),
        d !== null && n.indexOf(d) === -1 && n.push(d),
        e);
  }
  function YA(e, n, s, a, d) {
    switch (n) {
      case "focusin":
        return (On = Io(On, e, n, s, a, d)), !0;
      case "dragenter":
        return (In = Io(In, e, n, s, a, d)), !0;
      case "mouseover":
        return (Tn = Io(Tn, e, n, s, a, d)), !0;
      case "pointerover":
        var p = d.pointerId;
        return Po.set(p, Io(Po.get(p) || null, e, n, s, a, d)), !0;
      case "gotpointercapture":
        return (
          (p = d.pointerId), Oo.set(p, Io(Oo.get(p) || null, e, n, s, a, d)), !0
        );
    }
    return !1;
  }
  function Zd(e) {
    var n = lr(e.target);
    if (n !== null) {
      var s = sr(n);
      if (s !== null) {
        if (((n = s.tag), n === 13)) {
          if (((n = Bd(s)), n !== null)) {
            (e.blockedOn = n),
              Yd(e.priority, function () {
                Gd(s);
              });
            return;
          }
        } else if (n === 3 && s.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = s.tag === 3 ? s.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Hi(e) {
    if (e.blockedOn !== null) return !1;
    for (var n = e.targetContainers; 0 < n.length; ) {
      var s = la(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
      if (s === null) {
        s = e.nativeEvent;
        var a = new s.constructor(s.type, s);
        ($l = a), s.target.dispatchEvent(a), ($l = null);
      } else return (n = Go(s)), n !== null && oa(n), (e.blockedOn = s), !1;
      n.shift();
    }
    return !0;
  }
  function Jd(e, n, s) {
    Hi(e) && s.delete(n);
  }
  function $A() {
    (ia = !1),
      On !== null && Hi(On) && (On = null),
      In !== null && Hi(In) && (In = null),
      Tn !== null && Hi(Tn) && (Tn = null),
      Po.forEach(Jd),
      Oo.forEach(Jd);
  }
  function To(e, n) {
    e.blockedOn === n &&
      ((e.blockedOn = null),
      ia ||
        ((ia = !0),
        r.unstable_scheduleCallback(r.unstable_NormalPriority, $A)));
  }
  function Do(e) {
    function n(d) {
      return To(d, e);
    }
    if (0 < Qi.length) {
      To(Qi[0], e);
      for (var s = 1; s < Qi.length; s++) {
        var a = Qi[s];
        a.blockedOn === e && (a.blockedOn = null);
      }
    }
    for (
      On !== null && To(On, e),
        In !== null && To(In, e),
        Tn !== null && To(Tn, e),
        Po.forEach(n),
        Oo.forEach(n),
        s = 0;
      s < Dn.length;
      s++
    )
      (a = Dn[s]), a.blockedOn === e && (a.blockedOn = null);
    for (; 0 < Dn.length && ((s = Dn[0]), s.blockedOn === null); )
      Zd(s), s.blockedOn === null && Dn.shift();
  }
  var Or = D.ReactCurrentBatchConfig,
    Gi = !0;
  function ZA(e, n, s, a) {
    var d = Oe,
      p = Or.transition;
    Or.transition = null;
    try {
      (Oe = 1), sa(e, n, s, a);
    } finally {
      (Oe = d), (Or.transition = p);
    }
  }
  function JA(e, n, s, a) {
    var d = Oe,
      p = Or.transition;
    Or.transition = null;
    try {
      (Oe = 4), sa(e, n, s, a);
    } finally {
      (Oe = d), (Or.transition = p);
    }
  }
  function sa(e, n, s, a) {
    if (Gi) {
      var d = la(e, n, s, a);
      if (d === null) Ca(e, n, a, Vi, s), $d(e, a);
      else if (YA(d, e, n, s, a)) a.stopPropagation();
      else if (($d(e, a), n & 4 && -1 < VA.indexOf(e))) {
        for (; d !== null; ) {
          var p = Go(d);
          if (
            (p !== null && Hd(p),
            (p = la(e, n, s, a)),
            p === null && Ca(e, n, a, Vi, s),
            p === d)
          )
            break;
          d = p;
        }
        d !== null && a.stopPropagation();
      } else Ca(e, n, a, null, s);
    }
  }
  var Vi = null;
  function la(e, n, s, a) {
    if (((Vi = null), (e = Zl(a)), (e = lr(e)), e !== null))
      if (((n = sr(e)), n === null)) e = null;
      else if (((s = n.tag), s === 13)) {
        if (((e = Bd(n)), e !== null)) return e;
        e = null;
      } else if (s === 3) {
        if (n.stateNode.current.memoizedState.isDehydrated)
          return n.tag === 3 ? n.stateNode.containerInfo : null;
        e = null;
      } else n !== e && (e = null);
    return (Vi = e), null;
  }
  function Xd(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (LA()) {
          case ea:
            return 1;
          case zd:
            return 4;
          case _i:
          case _A:
            return 16;
          case Ud:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Bn = null,
    aa = null,
    Yi = null;
  function qd() {
    if (Yi) return Yi;
    var e,
      n = aa,
      s = n.length,
      a,
      d = "value" in Bn ? Bn.value : Bn.textContent,
      p = d.length;
    for (e = 0; e < s && n[e] === d[e]; e++);
    var A = s - e;
    for (a = 1; a <= A && n[s - a] === d[p - a]; a++);
    return (Yi = d.slice(e, 1 < a ? 1 - a : void 0));
  }
  function $i(e) {
    var n = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && n === 13 && (e = 13))
        : (e = n),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Zi() {
    return !0;
  }
  function Kd() {
    return !1;
  }
  function St(e) {
    function n(s, a, d, p, A) {
      (this._reactName = s),
        (this._targetInst = d),
        (this.type = a),
        (this.nativeEvent = p),
        (this.target = A),
        (this.currentTarget = null);
      for (var N in e)
        e.hasOwnProperty(N) && ((s = e[N]), (this[N] = s ? s(p) : p[N]));
      return (
        (this.isDefaultPrevented = (
          p.defaultPrevented != null ? p.defaultPrevented : p.returnValue === !1
        )
          ? Zi
          : Kd),
        (this.isPropagationStopped = Kd),
        this
      );
    }
    return (
      Z(n.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var s = this.nativeEvent;
          s &&
            (s.preventDefault
              ? s.preventDefault()
              : typeof s.returnValue != "unknown" && (s.returnValue = !1),
            (this.isDefaultPrevented = Zi));
        },
        stopPropagation: function () {
          var s = this.nativeEvent;
          s &&
            (s.stopPropagation
              ? s.stopPropagation()
              : typeof s.cancelBubble != "unknown" && (s.cancelBubble = !0),
            (this.isPropagationStopped = Zi));
        },
        persist: function () {},
        isPersistent: Zi,
      }),
      n
    );
  }
  var Ir = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    ca = St(Ir),
    Bo = Z({}, Ir, { view: 0, detail: 0 }),
    XA = St(Bo),
    ua,
    da,
    jo,
    Ji = Z({}, Bo, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: pa,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== jo &&
              (jo && e.type === "mousemove"
                ? ((ua = e.screenX - jo.screenX), (da = e.screenY - jo.screenY))
                : (da = ua = 0),
              (jo = e)),
            ua);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : da;
      },
    }),
    ef = St(Ji),
    qA = Z({}, Ji, { dataTransfer: 0 }),
    KA = St(qA),
    ew = Z({}, Bo, { relatedTarget: 0 }),
    fa = St(ew),
    tw = Z({}, Ir, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    nw = St(tw),
    rw = Z({}, Ir, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    ow = St(rw),
    iw = Z({}, Ir, { data: 0 }),
    tf = St(iw),
    sw = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    lw = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    aw = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function cw(e) {
    var n = this.nativeEvent;
    return n.getModifierState
      ? n.getModifierState(e)
      : (e = aw[e])
      ? !!n[e]
      : !1;
  }
  function pa() {
    return cw;
  }
  var uw = Z({}, Bo, {
      key: function (e) {
        if (e.key) {
          var n = sw[e.key] || e.key;
          if (n !== "Unidentified") return n;
        }
        return e.type === "keypress"
          ? ((e = $i(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
          ? lw[e.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: pa,
      charCode: function (e) {
        return e.type === "keypress" ? $i(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? $i(e)
          : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
      },
    }),
    dw = St(uw),
    fw = Z({}, Ji, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    nf = St(fw),
    pw = Z({}, Bo, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: pa,
    }),
    hw = St(pw),
    mw = Z({}, Ir, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    gw = St(mw),
    yw = Z({}, Ji, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
          ? -e.wheelDeltaX
          : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
          ? -e.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    vw = St(yw),
    Aw = [9, 13, 27, 32],
    ha = f && "CompositionEvent" in window,
    Mo = null;
  f && "documentMode" in document && (Mo = document.documentMode);
  var ww = f && "TextEvent" in window && !Mo,
    rf = f && (!ha || (Mo && 8 < Mo && 11 >= Mo)),
    of = " ",
    sf = !1;
  function lf(e, n) {
    switch (e) {
      case "keyup":
        return Aw.indexOf(n.keyCode) !== -1;
      case "keydown":
        return n.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function af(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var Tr = !1;
  function xw(e, n) {
    switch (e) {
      case "compositionend":
        return af(n);
      case "keypress":
        return n.which !== 32 ? null : ((sf = !0), of);
      case "textInput":
        return (e = n.data), e === of && sf ? null : e;
      default:
        return null;
    }
  }
  function Sw(e, n) {
    if (Tr)
      return e === "compositionend" || (!ha && lf(e, n))
        ? ((e = qd()), (Yi = aa = Bn = null), (Tr = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(n.ctrlKey || n.altKey || n.metaKey) || (n.ctrlKey && n.altKey)) {
          if (n.char && 1 < n.char.length) return n.char;
          if (n.which) return String.fromCharCode(n.which);
        }
        return null;
      case "compositionend":
        return rf && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var Ew = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function cf(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n === "input" ? !!Ew[e.type] : n === "textarea";
  }
  function uf(e, n, s, a) {
    Pd(a),
      (n = ts(n, "onChange")),
      0 < n.length &&
        ((s = new ca("onChange", "change", null, s, a)),
        e.push({ event: s, listeners: n }));
  }
  var Lo = null,
    _o = null;
  function Cw(e) {
    Nf(e, 0);
  }
  function Xi(e) {
    var n = Lr(e);
    if (Pe(n)) return e;
  }
  function kw(e, n) {
    if (e === "change") return n;
  }
  var df = !1;
  if (f) {
    var ma;
    if (f) {
      var ga = "oninput" in document;
      if (!ga) {
        var ff = document.createElement("div");
        ff.setAttribute("oninput", "return;"),
          (ga = typeof ff.oninput == "function");
      }
      ma = ga;
    } else ma = !1;
    df = ma && (!document.documentMode || 9 < document.documentMode);
  }
  function pf() {
    Lo && (Lo.detachEvent("onpropertychange", hf), (_o = Lo = null));
  }
  function hf(e) {
    if (e.propertyName === "value" && Xi(_o)) {
      var n = [];
      uf(n, _o, e, Zl(e)), Dd(Cw, n);
    }
  }
  function Rw(e, n, s) {
    e === "focusin"
      ? (pf(), (Lo = n), (_o = s), Lo.attachEvent("onpropertychange", hf))
      : e === "focusout" && pf();
  }
  function bw(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Xi(_o);
  }
  function Nw(e, n) {
    if (e === "click") return Xi(n);
  }
  function Pw(e, n) {
    if (e === "input" || e === "change") return Xi(n);
  }
  function Ow(e, n) {
    return (e === n && (e !== 0 || 1 / e === 1 / n)) || (e !== e && n !== n);
  }
  var Ft = typeof Object.is == "function" ? Object.is : Ow;
  function Fo(e, n) {
    if (Ft(e, n)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof n != "object" ||
      n === null
    )
      return !1;
    var s = Object.keys(e),
      a = Object.keys(n);
    if (s.length !== a.length) return !1;
    for (a = 0; a < s.length; a++) {
      var d = s[a];
      if (!m.call(n, d) || !Ft(e[d], n[d])) return !1;
    }
    return !0;
  }
  function mf(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function gf(e, n) {
    var s = mf(e);
    e = 0;
    for (var a; s; ) {
      if (s.nodeType === 3) {
        if (((a = e + s.textContent.length), e <= n && a >= n))
          return { node: s, offset: n - e };
        e = a;
      }
      e: {
        for (; s; ) {
          if (s.nextSibling) {
            s = s.nextSibling;
            break e;
          }
          s = s.parentNode;
        }
        s = void 0;
      }
      s = mf(s);
    }
  }
  function yf(e, n) {
    return e && n
      ? e === n
        ? !0
        : e && e.nodeType === 3
        ? !1
        : n && n.nodeType === 3
        ? yf(e, n.parentNode)
        : "contains" in e
        ? e.contains(n)
        : e.compareDocumentPosition
        ? !!(e.compareDocumentPosition(n) & 16)
        : !1
      : !1;
  }
  function vf() {
    for (var e = window, n = Je(); n instanceof e.HTMLIFrameElement; ) {
      try {
        var s = typeof n.contentWindow.location.href == "string";
      } catch {
        s = !1;
      }
      if (s) e = n.contentWindow;
      else break;
      n = Je(e.document);
    }
    return n;
  }
  function ya(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      n &&
      ((n === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        n === "textarea" ||
        e.contentEditable === "true")
    );
  }
  function Iw(e) {
    var n = vf(),
      s = e.focusedElem,
      a = e.selectionRange;
    if (
      n !== s &&
      s &&
      s.ownerDocument &&
      yf(s.ownerDocument.documentElement, s)
    ) {
      if (a !== null && ya(s)) {
        if (
          ((n = a.start),
          (e = a.end),
          e === void 0 && (e = n),
          "selectionStart" in s)
        )
          (s.selectionStart = n),
            (s.selectionEnd = Math.min(e, s.value.length));
        else if (
          ((e = ((n = s.ownerDocument || document) && n.defaultView) || window),
          e.getSelection)
        ) {
          e = e.getSelection();
          var d = s.textContent.length,
            p = Math.min(a.start, d);
          (a = a.end === void 0 ? p : Math.min(a.end, d)),
            !e.extend && p > a && ((d = a), (a = p), (p = d)),
            (d = gf(s, p));
          var A = gf(s, a);
          d &&
            A &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== d.node ||
              e.anchorOffset !== d.offset ||
              e.focusNode !== A.node ||
              e.focusOffset !== A.offset) &&
            ((n = n.createRange()),
            n.setStart(d.node, d.offset),
            e.removeAllRanges(),
            p > a
              ? (e.addRange(n), e.extend(A.node, A.offset))
              : (n.setEnd(A.node, A.offset), e.addRange(n)));
        }
      }
      for (n = [], e = s; (e = e.parentNode); )
        e.nodeType === 1 &&
          n.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof s.focus == "function" && s.focus(), s = 0; s < n.length; s++)
        (e = n[s]),
          (e.element.scrollLeft = e.left),
          (e.element.scrollTop = e.top);
    }
  }
  var Tw = f && "documentMode" in document && 11 >= document.documentMode,
    Dr = null,
    va = null,
    zo = null,
    Aa = !1;
  function Af(e, n, s) {
    var a =
      s.window === s ? s.document : s.nodeType === 9 ? s : s.ownerDocument;
    Aa ||
      Dr == null ||
      Dr !== Je(a) ||
      ((a = Dr),
      "selectionStart" in a && ya(a)
        ? (a = { start: a.selectionStart, end: a.selectionEnd })
        : ((a = (
            (a.ownerDocument && a.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset,
          })),
      (zo && Fo(zo, a)) ||
        ((zo = a),
        (a = ts(va, "onSelect")),
        0 < a.length &&
          ((n = new ca("onSelect", "select", null, n, s)),
          e.push({ event: n, listeners: a }),
          (n.target = Dr))));
  }
  function qi(e, n) {
    var s = {};
    return (
      (s[e.toLowerCase()] = n.toLowerCase()),
      (s["Webkit" + e] = "webkit" + n),
      (s["Moz" + e] = "moz" + n),
      s
    );
  }
  var Br = {
      animationend: qi("Animation", "AnimationEnd"),
      animationiteration: qi("Animation", "AnimationIteration"),
      animationstart: qi("Animation", "AnimationStart"),
      transitionend: qi("Transition", "TransitionEnd"),
    },
    wa = {},
    wf = {};
  f &&
    ((wf = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Br.animationend.animation,
      delete Br.animationiteration.animation,
      delete Br.animationstart.animation),
    "TransitionEvent" in window || delete Br.transitionend.transition);
  function Ki(e) {
    if (wa[e]) return wa[e];
    if (!Br[e]) return e;
    var n = Br[e],
      s;
    for (s in n) if (n.hasOwnProperty(s) && s in wf) return (wa[e] = n[s]);
    return e;
  }
  var xf = Ki("animationend"),
    Sf = Ki("animationiteration"),
    Ef = Ki("animationstart"),
    Cf = Ki("transitionend"),
    kf = new Map(),
    Rf =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  function jn(e, n) {
    kf.set(e, n), c(n, [e]);
  }
  for (var xa = 0; xa < Rf.length; xa++) {
    var Sa = Rf[xa],
      Dw = Sa.toLowerCase(),
      Bw = Sa[0].toUpperCase() + Sa.slice(1);
    jn(Dw, "on" + Bw);
  }
  jn(xf, "onAnimationEnd"),
    jn(Sf, "onAnimationIteration"),
    jn(Ef, "onAnimationStart"),
    jn("dblclick", "onDoubleClick"),
    jn("focusin", "onFocus"),
    jn("focusout", "onBlur"),
    jn(Cf, "onTransitionEnd"),
    u("onMouseEnter", ["mouseout", "mouseover"]),
    u("onMouseLeave", ["mouseout", "mouseover"]),
    u("onPointerEnter", ["pointerout", "pointerover"]),
    u("onPointerLeave", ["pointerout", "pointerover"]),
    c(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    c(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    c("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    c(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    c(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    c(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var Uo =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    jw = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(Uo)
    );
  function bf(e, n, s) {
    var a = e.type || "unknown-event";
    (e.currentTarget = s), DA(a, n, void 0, e), (e.currentTarget = null);
  }
  function Nf(e, n) {
    n = (n & 4) !== 0;
    for (var s = 0; s < e.length; s++) {
      var a = e[s],
        d = a.event;
      a = a.listeners;
      e: {
        var p = void 0;
        if (n)
          for (var A = a.length - 1; 0 <= A; A--) {
            var N = a[A],
              O = N.instance,
              L = N.currentTarget;
            if (((N = N.listener), O !== p && d.isPropagationStopped()))
              break e;
            bf(d, N, L), (p = O);
          }
        else
          for (A = 0; A < a.length; A++) {
            if (
              ((N = a[A]),
              (O = N.instance),
              (L = N.currentTarget),
              (N = N.listener),
              O !== p && d.isPropagationStopped())
            )
              break e;
            bf(d, N, L), (p = O);
          }
      }
    }
    if (Li) throw ((e = Kl), (Li = !1), (Kl = null), e);
  }
  function De(e, n) {
    var s = n[Oa];
    s === void 0 && (s = n[Oa] = new Set());
    var a = e + "__bubble";
    s.has(a) || (Pf(n, e, 2, !1), s.add(a));
  }
  function Ea(e, n, s) {
    var a = 0;
    n && (a |= 4), Pf(s, e, a, n);
  }
  var es = "_reactListening" + Math.random().toString(36).slice(2);
  function Wo(e) {
    if (!e[es]) {
      (e[es] = !0),
        i.forEach(function (s) {
          s !== "selectionchange" && (jw.has(s) || Ea(s, !1, e), Ea(s, !0, e));
        });
      var n = e.nodeType === 9 ? e : e.ownerDocument;
      n === null || n[es] || ((n[es] = !0), Ea("selectionchange", !1, n));
    }
  }
  function Pf(e, n, s, a) {
    switch (Xd(n)) {
      case 1:
        var d = ZA;
        break;
      case 4:
        d = JA;
        break;
      default:
        d = sa;
    }
    (s = d.bind(null, n, s, e)),
      (d = void 0),
      !ql ||
        (n !== "touchstart" && n !== "touchmove" && n !== "wheel") ||
        (d = !0),
      a
        ? d !== void 0
          ? e.addEventListener(n, s, { capture: !0, passive: d })
          : e.addEventListener(n, s, !0)
        : d !== void 0
        ? e.addEventListener(n, s, { passive: d })
        : e.addEventListener(n, s, !1);
  }
  function Ca(e, n, s, a, d) {
    var p = a;
    if (!(n & 1) && !(n & 2) && a !== null)
      e: for (;;) {
        if (a === null) return;
        var A = a.tag;
        if (A === 3 || A === 4) {
          var N = a.stateNode.containerInfo;
          if (N === d || (N.nodeType === 8 && N.parentNode === d)) break;
          if (A === 4)
            for (A = a.return; A !== null; ) {
              var O = A.tag;
              if (
                (O === 3 || O === 4) &&
                ((O = A.stateNode.containerInfo),
                O === d || (O.nodeType === 8 && O.parentNode === d))
              )
                return;
              A = A.return;
            }
          for (; N !== null; ) {
            if (((A = lr(N)), A === null)) return;
            if (((O = A.tag), O === 5 || O === 6)) {
              a = p = A;
              continue e;
            }
            N = N.parentNode;
          }
        }
        a = a.return;
      }
    Dd(function () {
      var L = p,
        G = Zl(s),
        V = [];
      e: {
        var H = kf.get(e);
        if (H !== void 0) {
          var ee = ca,
            re = e;
          switch (e) {
            case "keypress":
              if ($i(s) === 0) break e;
            case "keydown":
            case "keyup":
              ee = dw;
              break;
            case "focusin":
              (re = "focus"), (ee = fa);
              break;
            case "focusout":
              (re = "blur"), (ee = fa);
              break;
            case "beforeblur":
            case "afterblur":
              ee = fa;
              break;
            case "click":
              if (s.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              ee = ef;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              ee = KA;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              ee = hw;
              break;
            case xf:
            case Sf:
            case Ef:
              ee = nw;
              break;
            case Cf:
              ee = gw;
              break;
            case "scroll":
              ee = XA;
              break;
            case "wheel":
              ee = vw;
              break;
            case "copy":
            case "cut":
            case "paste":
              ee = ow;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              ee = nf;
          }
          var ie = (n & 4) !== 0,
            He = !ie && e === "scroll",
            j = ie ? (H !== null ? H + "Capture" : null) : H;
          ie = [];
          for (var I = L, M; I !== null; ) {
            M = I;
            var $ = M.stateNode;
            if (
              (M.tag === 5 &&
                $ !== null &&
                ((M = $),
                j !== null &&
                  (($ = Co(I, j)), $ != null && ie.push(Qo(I, $, M)))),
              He)
            )
              break;
            I = I.return;
          }
          0 < ie.length &&
            ((H = new ee(H, re, null, s, G)),
            V.push({ event: H, listeners: ie }));
        }
      }
      if (!(n & 7)) {
        e: {
          if (
            ((H = e === "mouseover" || e === "pointerover"),
            (ee = e === "mouseout" || e === "pointerout"),
            H &&
              s !== $l &&
              (re = s.relatedTarget || s.fromElement) &&
              (lr(re) || re[hn]))
          )
            break e;
          if (
            (ee || H) &&
            ((H =
              G.window === G
                ? G
                : (H = G.ownerDocument)
                ? H.defaultView || H.parentWindow
                : window),
            ee
              ? ((re = s.relatedTarget || s.toElement),
                (ee = L),
                (re = re ? lr(re) : null),
                re !== null &&
                  ((He = sr(re)),
                  re !== He || (re.tag !== 5 && re.tag !== 6)) &&
                  (re = null))
              : ((ee = null), (re = L)),
            ee !== re)
          ) {
            if (
              ((ie = ef),
              ($ = "onMouseLeave"),
              (j = "onMouseEnter"),
              (I = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((ie = nf),
                ($ = "onPointerLeave"),
                (j = "onPointerEnter"),
                (I = "pointer")),
              (He = ee == null ? H : Lr(ee)),
              (M = re == null ? H : Lr(re)),
              (H = new ie($, I + "leave", ee, s, G)),
              (H.target = He),
              (H.relatedTarget = M),
              ($ = null),
              lr(G) === L &&
                ((ie = new ie(j, I + "enter", re, s, G)),
                (ie.target = M),
                (ie.relatedTarget = He),
                ($ = ie)),
              (He = $),
              ee && re)
            )
              t: {
                for (ie = ee, j = re, I = 0, M = ie; M; M = jr(M)) I++;
                for (M = 0, $ = j; $; $ = jr($)) M++;
                for (; 0 < I - M; ) (ie = jr(ie)), I--;
                for (; 0 < M - I; ) (j = jr(j)), M--;
                for (; I--; ) {
                  if (ie === j || (j !== null && ie === j.alternate)) break t;
                  (ie = jr(ie)), (j = jr(j));
                }
                ie = null;
              }
            else ie = null;
            ee !== null && Of(V, H, ee, ie, !1),
              re !== null && He !== null && Of(V, He, re, ie, !0);
          }
        }
        e: {
          if (
            ((H = L ? Lr(L) : window),
            (ee = H.nodeName && H.nodeName.toLowerCase()),
            ee === "select" || (ee === "input" && H.type === "file"))
          )
            var le = kw;
          else if (cf(H))
            if (df) le = Pw;
            else {
              le = bw;
              var ue = Rw;
            }
          else
            (ee = H.nodeName) &&
              ee.toLowerCase() === "input" &&
              (H.type === "checkbox" || H.type === "radio") &&
              (le = Nw);
          if (le && (le = le(e, L))) {
            uf(V, le, s, G);
            break e;
          }
          ue && ue(e, H, L),
            e === "focusout" &&
              (ue = H._wrapperState) &&
              ue.controlled &&
              H.type === "number" &&
              Pn(H, "number", H.value);
        }
        switch (((ue = L ? Lr(L) : window), e)) {
          case "focusin":
            (cf(ue) || ue.contentEditable === "true") &&
              ((Dr = ue), (va = L), (zo = null));
            break;
          case "focusout":
            zo = va = Dr = null;
            break;
          case "mousedown":
            Aa = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (Aa = !1), Af(V, s, G);
            break;
          case "selectionchange":
            if (Tw) break;
          case "keydown":
          case "keyup":
            Af(V, s, G);
        }
        var de;
        if (ha)
          e: {
            switch (e) {
              case "compositionstart":
                var me = "onCompositionStart";
                break e;
              case "compositionend":
                me = "onCompositionEnd";
                break e;
              case "compositionupdate":
                me = "onCompositionUpdate";
                break e;
            }
            me = void 0;
          }
        else
          Tr
            ? lf(e, s) && (me = "onCompositionEnd")
            : e === "keydown" &&
              s.keyCode === 229 &&
              (me = "onCompositionStart");
        me &&
          (rf &&
            s.locale !== "ko" &&
            (Tr || me !== "onCompositionStart"
              ? me === "onCompositionEnd" && Tr && (de = qd())
              : ((Bn = G),
                (aa = "value" in Bn ? Bn.value : Bn.textContent),
                (Tr = !0))),
          (ue = ts(L, me)),
          0 < ue.length &&
            ((me = new tf(me, e, null, s, G)),
            V.push({ event: me, listeners: ue }),
            de
              ? (me.data = de)
              : ((de = af(s)), de !== null && (me.data = de)))),
          (de = ww ? xw(e, s) : Sw(e, s)) &&
            ((L = ts(L, "onBeforeInput")),
            0 < L.length &&
              ((G = new tf("onBeforeInput", "beforeinput", null, s, G)),
              V.push({ event: G, listeners: L }),
              (G.data = de)));
      }
      Nf(V, n);
    });
  }
  function Qo(e, n, s) {
    return { instance: e, listener: n, currentTarget: s };
  }
  function ts(e, n) {
    for (var s = n + "Capture", a = []; e !== null; ) {
      var d = e,
        p = d.stateNode;
      d.tag === 5 &&
        p !== null &&
        ((d = p),
        (p = Co(e, s)),
        p != null && a.unshift(Qo(e, p, d)),
        (p = Co(e, n)),
        p != null && a.push(Qo(e, p, d))),
        (e = e.return);
    }
    return a;
  }
  function jr(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Of(e, n, s, a, d) {
    for (var p = n._reactName, A = []; s !== null && s !== a; ) {
      var N = s,
        O = N.alternate,
        L = N.stateNode;
      if (O !== null && O === a) break;
      N.tag === 5 &&
        L !== null &&
        ((N = L),
        d
          ? ((O = Co(s, p)), O != null && A.unshift(Qo(s, O, N)))
          : d || ((O = Co(s, p)), O != null && A.push(Qo(s, O, N)))),
        (s = s.return);
    }
    A.length !== 0 && e.push({ event: n, listeners: A });
  }
  var Mw = /\r\n?/g,
    Lw = /\u0000|\uFFFD/g;
  function If(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        Mw,
        `
`
      )
      .replace(Lw, "");
  }
  function ns(e, n, s) {
    if (((n = If(n)), If(e) !== n && s)) throw Error(o(425));
  }
  function rs() {}
  var ka = null,
    Ra = null;
  function ba(e, n) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof n.children == "string" ||
      typeof n.children == "number" ||
      (typeof n.dangerouslySetInnerHTML == "object" &&
        n.dangerouslySetInnerHTML !== null &&
        n.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Na = typeof setTimeout == "function" ? setTimeout : void 0,
    _w = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Tf = typeof Promise == "function" ? Promise : void 0,
    Fw =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Tf < "u"
        ? function (e) {
            return Tf.resolve(null).then(e).catch(zw);
          }
        : Na;
  function zw(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Pa(e, n) {
    var s = n,
      a = 0;
    do {
      var d = s.nextSibling;
      if ((e.removeChild(s), d && d.nodeType === 8))
        if (((s = d.data), s === "/$")) {
          if (a === 0) {
            e.removeChild(d), Do(n);
            return;
          }
          a--;
        } else (s !== "$" && s !== "$?" && s !== "$!") || a++;
      s = d;
    } while (s);
    Do(n);
  }
  function Mn(e) {
    for (; e != null; e = e.nextSibling) {
      var n = e.nodeType;
      if (n === 1 || n === 3) break;
      if (n === 8) {
        if (((n = e.data), n === "$" || n === "$!" || n === "$?")) break;
        if (n === "/$") return null;
      }
    }
    return e;
  }
  function Df(e) {
    e = e.previousSibling;
    for (var n = 0; e; ) {
      if (e.nodeType === 8) {
        var s = e.data;
        if (s === "$" || s === "$!" || s === "$?") {
          if (n === 0) return e;
          n--;
        } else s === "/$" && n++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var Mr = Math.random().toString(36).slice(2),
    en = "__reactFiber$" + Mr,
    Ho = "__reactProps$" + Mr,
    hn = "__reactContainer$" + Mr,
    Oa = "__reactEvents$" + Mr,
    Uw = "__reactListeners$" + Mr,
    Ww = "__reactHandles$" + Mr;
  function lr(e) {
    var n = e[en];
    if (n) return n;
    for (var s = e.parentNode; s; ) {
      if ((n = s[hn] || s[en])) {
        if (
          ((s = n.alternate),
          n.child !== null || (s !== null && s.child !== null))
        )
          for (e = Df(e); e !== null; ) {
            if ((s = e[en])) return s;
            e = Df(e);
          }
        return n;
      }
      (e = s), (s = e.parentNode);
    }
    return null;
  }
  function Go(e) {
    return (
      (e = e[en] || e[hn]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function Lr(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(o(33));
  }
  function os(e) {
    return e[Ho] || null;
  }
  var Ia = [],
    _r = -1;
  function Ln(e) {
    return { current: e };
  }
  function Be(e) {
    0 > _r || ((e.current = Ia[_r]), (Ia[_r] = null), _r--);
  }
  function Te(e, n) {
    _r++, (Ia[_r] = e.current), (e.current = n);
  }
  var _n = {},
    rt = Ln(_n),
    ht = Ln(!1),
    ar = _n;
  function Fr(e, n) {
    var s = e.type.contextTypes;
    if (!s) return _n;
    var a = e.stateNode;
    if (a && a.__reactInternalMemoizedUnmaskedChildContext === n)
      return a.__reactInternalMemoizedMaskedChildContext;
    var d = {},
      p;
    for (p in s) d[p] = n[p];
    return (
      a &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = n),
        (e.__reactInternalMemoizedMaskedChildContext = d)),
      d
    );
  }
  function mt(e) {
    return (e = e.childContextTypes), e != null;
  }
  function is() {
    Be(ht), Be(rt);
  }
  function Bf(e, n, s) {
    if (rt.current !== _n) throw Error(o(168));
    Te(rt, n), Te(ht, s);
  }
  function jf(e, n, s) {
    var a = e.stateNode;
    if (((n = n.childContextTypes), typeof a.getChildContext != "function"))
      return s;
    a = a.getChildContext();
    for (var d in a) if (!(d in n)) throw Error(o(108, K(e) || "Unknown", d));
    return Z({}, s, a);
  }
  function ss(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        _n),
      (ar = rt.current),
      Te(rt, e),
      Te(ht, ht.current),
      !0
    );
  }
  function Mf(e, n, s) {
    var a = e.stateNode;
    if (!a) throw Error(o(169));
    s
      ? ((e = jf(e, n, ar)),
        (a.__reactInternalMemoizedMergedChildContext = e),
        Be(ht),
        Be(rt),
        Te(rt, e))
      : Be(ht),
      Te(ht, s);
  }
  var mn = null,
    ls = !1,
    Ta = !1;
  function Lf(e) {
    mn === null ? (mn = [e]) : mn.push(e);
  }
  function Qw(e) {
    (ls = !0), Lf(e);
  }
  function Fn() {
    if (!Ta && mn !== null) {
      Ta = !0;
      var e = 0,
        n = Oe;
      try {
        var s = mn;
        for (Oe = 1; e < s.length; e++) {
          var a = s[e];
          do a = a(!0);
          while (a !== null);
        }
        (mn = null), (ls = !1);
      } catch (d) {
        throw (mn !== null && (mn = mn.slice(e + 1)), _d(ea, Fn), d);
      } finally {
        (Oe = n), (Ta = !1);
      }
    }
    return null;
  }
  var zr = [],
    Ur = 0,
    as = null,
    cs = 0,
    Pt = [],
    Ot = 0,
    cr = null,
    gn = 1,
    yn = "";
  function ur(e, n) {
    (zr[Ur++] = cs), (zr[Ur++] = as), (as = e), (cs = n);
  }
  function _f(e, n, s) {
    (Pt[Ot++] = gn), (Pt[Ot++] = yn), (Pt[Ot++] = cr), (cr = e);
    var a = gn;
    e = yn;
    var d = 32 - _t(a) - 1;
    (a &= ~(1 << d)), (s += 1);
    var p = 32 - _t(n) + d;
    if (30 < p) {
      var A = d - (d % 5);
      (p = (a & ((1 << A) - 1)).toString(32)),
        (a >>= A),
        (d -= A),
        (gn = (1 << (32 - _t(n) + d)) | (s << d) | a),
        (yn = p + e);
    } else (gn = (1 << p) | (s << d) | a), (yn = e);
  }
  function Da(e) {
    e.return !== null && (ur(e, 1), _f(e, 1, 0));
  }
  function Ba(e) {
    for (; e === as; )
      (as = zr[--Ur]), (zr[Ur] = null), (cs = zr[--Ur]), (zr[Ur] = null);
    for (; e === cr; )
      (cr = Pt[--Ot]),
        (Pt[Ot] = null),
        (yn = Pt[--Ot]),
        (Pt[Ot] = null),
        (gn = Pt[--Ot]),
        (Pt[Ot] = null);
  }
  var Et = null,
    Ct = null,
    _e = !1,
    zt = null;
  function Ff(e, n) {
    var s = Bt(5, null, null, 0);
    (s.elementType = "DELETED"),
      (s.stateNode = n),
      (s.return = e),
      (n = e.deletions),
      n === null ? ((e.deletions = [s]), (e.flags |= 16)) : n.push(s);
  }
  function zf(e, n) {
    switch (e.tag) {
      case 5:
        var s = e.type;
        return (
          (n =
            n.nodeType !== 1 || s.toLowerCase() !== n.nodeName.toLowerCase()
              ? null
              : n),
          n !== null
            ? ((e.stateNode = n), (Et = e), (Ct = Mn(n.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (n = e.pendingProps === "" || n.nodeType !== 3 ? null : n),
          n !== null ? ((e.stateNode = n), (Et = e), (Ct = null), !0) : !1
        );
      case 13:
        return (
          (n = n.nodeType !== 8 ? null : n),
          n !== null
            ? ((s = cr !== null ? { id: gn, overflow: yn } : null),
              (e.memoizedState = {
                dehydrated: n,
                treeContext: s,
                retryLane: 1073741824,
              }),
              (s = Bt(18, null, null, 0)),
              (s.stateNode = n),
              (s.return = e),
              (e.child = s),
              (Et = e),
              (Ct = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function ja(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Ma(e) {
    if (_e) {
      var n = Ct;
      if (n) {
        var s = n;
        if (!zf(e, n)) {
          if (ja(e)) throw Error(o(418));
          n = Mn(s.nextSibling);
          var a = Et;
          n && zf(e, n)
            ? Ff(a, s)
            : ((e.flags = (e.flags & -4097) | 2), (_e = !1), (Et = e));
        }
      } else {
        if (ja(e)) throw Error(o(418));
        (e.flags = (e.flags & -4097) | 2), (_e = !1), (Et = e);
      }
    }
  }
  function Uf(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
      e = e.return;
    Et = e;
  }
  function us(e) {
    if (e !== Et) return !1;
    if (!_e) return Uf(e), (_e = !0), !1;
    var n;
    if (
      ((n = e.tag !== 3) &&
        !(n = e.tag !== 5) &&
        ((n = e.type),
        (n = n !== "head" && n !== "body" && !ba(e.type, e.memoizedProps))),
      n && (n = Ct))
    ) {
      if (ja(e)) throw (Wf(), Error(o(418)));
      for (; n; ) Ff(e, n), (n = Mn(n.nextSibling));
    }
    if ((Uf(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(o(317));
      e: {
        for (e = e.nextSibling, n = 0; e; ) {
          if (e.nodeType === 8) {
            var s = e.data;
            if (s === "/$") {
              if (n === 0) {
                Ct = Mn(e.nextSibling);
                break e;
              }
              n--;
            } else (s !== "$" && s !== "$!" && s !== "$?") || n++;
          }
          e = e.nextSibling;
        }
        Ct = null;
      }
    } else Ct = Et ? Mn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Wf() {
    for (var e = Ct; e; ) e = Mn(e.nextSibling);
  }
  function Wr() {
    (Ct = Et = null), (_e = !1);
  }
  function La(e) {
    zt === null ? (zt = [e]) : zt.push(e);
  }
  var Hw = D.ReactCurrentBatchConfig;
  function Vo(e, n, s) {
    if (
      ((e = s.ref),
      e !== null && typeof e != "function" && typeof e != "object")
    ) {
      if (s._owner) {
        if (((s = s._owner), s)) {
          if (s.tag !== 1) throw Error(o(309));
          var a = s.stateNode;
        }
        if (!a) throw Error(o(147, e));
        var d = a,
          p = "" + e;
        return n !== null &&
          n.ref !== null &&
          typeof n.ref == "function" &&
          n.ref._stringRef === p
          ? n.ref
          : ((n = function (A) {
              var N = d.refs;
              A === null ? delete N[p] : (N[p] = A);
            }),
            (n._stringRef = p),
            n);
      }
      if (typeof e != "string") throw Error(o(284));
      if (!s._owner) throw Error(o(290, e));
    }
    return e;
  }
  function ds(e, n) {
    throw (
      ((e = Object.prototype.toString.call(n)),
      Error(
        o(
          31,
          e === "[object Object]"
            ? "object with keys {" + Object.keys(n).join(", ") + "}"
            : e
        )
      ))
    );
  }
  function Qf(e) {
    var n = e._init;
    return n(e._payload);
  }
  function Hf(e) {
    function n(j, I) {
      if (e) {
        var M = j.deletions;
        M === null ? ((j.deletions = [I]), (j.flags |= 16)) : M.push(I);
      }
    }
    function s(j, I) {
      if (!e) return null;
      for (; I !== null; ) n(j, I), (I = I.sibling);
      return null;
    }
    function a(j, I) {
      for (j = new Map(); I !== null; )
        I.key !== null ? j.set(I.key, I) : j.set(I.index, I), (I = I.sibling);
      return j;
    }
    function d(j, I) {
      return (j = Yn(j, I)), (j.index = 0), (j.sibling = null), j;
    }
    function p(j, I, M) {
      return (
        (j.index = M),
        e
          ? ((M = j.alternate),
            M !== null
              ? ((M = M.index), M < I ? ((j.flags |= 2), I) : M)
              : ((j.flags |= 2), I))
          : ((j.flags |= 1048576), I)
      );
    }
    function A(j) {
      return e && j.alternate === null && (j.flags |= 2), j;
    }
    function N(j, I, M, $) {
      return I === null || I.tag !== 6
        ? ((I = Nc(M, j.mode, $)), (I.return = j), I)
        : ((I = d(I, M)), (I.return = j), I);
    }
    function O(j, I, M, $) {
      var le = M.type;
      return le === z
        ? G(j, I, M.props.children, $, M.key)
        : I !== null &&
          (I.elementType === le ||
            (typeof le == "object" &&
              le !== null &&
              le.$$typeof === oe &&
              Qf(le) === I.type))
        ? (($ = d(I, M.props)), ($.ref = Vo(j, I, M)), ($.return = j), $)
        : (($ = js(M.type, M.key, M.props, null, j.mode, $)),
          ($.ref = Vo(j, I, M)),
          ($.return = j),
          $);
    }
    function L(j, I, M, $) {
      return I === null ||
        I.tag !== 4 ||
        I.stateNode.containerInfo !== M.containerInfo ||
        I.stateNode.implementation !== M.implementation
        ? ((I = Pc(M, j.mode, $)), (I.return = j), I)
        : ((I = d(I, M.children || [])), (I.return = j), I);
    }
    function G(j, I, M, $, le) {
      return I === null || I.tag !== 7
        ? ((I = vr(M, j.mode, $, le)), (I.return = j), I)
        : ((I = d(I, M)), (I.return = j), I);
    }
    function V(j, I, M) {
      if ((typeof I == "string" && I !== "") || typeof I == "number")
        return (I = Nc("" + I, j.mode, M)), (I.return = j), I;
      if (typeof I == "object" && I !== null) {
        switch (I.$$typeof) {
          case B:
            return (
              (M = js(I.type, I.key, I.props, null, j.mode, M)),
              (M.ref = Vo(j, null, I)),
              (M.return = j),
              M
            );
          case W:
            return (I = Pc(I, j.mode, M)), (I.return = j), I;
          case oe:
            var $ = I._init;
            return V(j, $(I._payload), M);
        }
        if (xo(I) || J(I))
          return (I = vr(I, j.mode, M, null)), (I.return = j), I;
        ds(j, I);
      }
      return null;
    }
    function H(j, I, M, $) {
      var le = I !== null ? I.key : null;
      if ((typeof M == "string" && M !== "") || typeof M == "number")
        return le !== null ? null : N(j, I, "" + M, $);
      if (typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case B:
            return M.key === le ? O(j, I, M, $) : null;
          case W:
            return M.key === le ? L(j, I, M, $) : null;
          case oe:
            return (le = M._init), H(j, I, le(M._payload), $);
        }
        if (xo(M) || J(M)) return le !== null ? null : G(j, I, M, $, null);
        ds(j, M);
      }
      return null;
    }
    function ee(j, I, M, $, le) {
      if ((typeof $ == "string" && $ !== "") || typeof $ == "number")
        return (j = j.get(M) || null), N(I, j, "" + $, le);
      if (typeof $ == "object" && $ !== null) {
        switch ($.$$typeof) {
          case B:
            return (
              (j = j.get($.key === null ? M : $.key) || null), O(I, j, $, le)
            );
          case W:
            return (
              (j = j.get($.key === null ? M : $.key) || null), L(I, j, $, le)
            );
          case oe:
            var ue = $._init;
            return ee(j, I, M, ue($._payload), le);
        }
        if (xo($) || J($)) return (j = j.get(M) || null), G(I, j, $, le, null);
        ds(I, $);
      }
      return null;
    }
    function re(j, I, M, $) {
      for (
        var le = null, ue = null, de = I, me = (I = 0), Ke = null;
        de !== null && me < M.length;
        me++
      ) {
        de.index > me ? ((Ke = de), (de = null)) : (Ke = de.sibling);
        var Ne = H(j, de, M[me], $);
        if (Ne === null) {
          de === null && (de = Ke);
          break;
        }
        e && de && Ne.alternate === null && n(j, de),
          (I = p(Ne, I, me)),
          ue === null ? (le = Ne) : (ue.sibling = Ne),
          (ue = Ne),
          (de = Ke);
      }
      if (me === M.length) return s(j, de), _e && ur(j, me), le;
      if (de === null) {
        for (; me < M.length; me++)
          (de = V(j, M[me], $)),
            de !== null &&
              ((I = p(de, I, me)),
              ue === null ? (le = de) : (ue.sibling = de),
              (ue = de));
        return _e && ur(j, me), le;
      }
      for (de = a(j, de); me < M.length; me++)
        (Ke = ee(de, j, me, M[me], $)),
          Ke !== null &&
            (e &&
              Ke.alternate !== null &&
              de.delete(Ke.key === null ? me : Ke.key),
            (I = p(Ke, I, me)),
            ue === null ? (le = Ke) : (ue.sibling = Ke),
            (ue = Ke));
      return (
        e &&
          de.forEach(function ($n) {
            return n(j, $n);
          }),
        _e && ur(j, me),
        le
      );
    }
    function ie(j, I, M, $) {
      var le = J(M);
      if (typeof le != "function") throw Error(o(150));
      if (((M = le.call(M)), M == null)) throw Error(o(151));
      for (
        var ue = (le = null), de = I, me = (I = 0), Ke = null, Ne = M.next();
        de !== null && !Ne.done;
        me++, Ne = M.next()
      ) {
        de.index > me ? ((Ke = de), (de = null)) : (Ke = de.sibling);
        var $n = H(j, de, Ne.value, $);
        if ($n === null) {
          de === null && (de = Ke);
          break;
        }
        e && de && $n.alternate === null && n(j, de),
          (I = p($n, I, me)),
          ue === null ? (le = $n) : (ue.sibling = $n),
          (ue = $n),
          (de = Ke);
      }
      if (Ne.done) return s(j, de), _e && ur(j, me), le;
      if (de === null) {
        for (; !Ne.done; me++, Ne = M.next())
          (Ne = V(j, Ne.value, $)),
            Ne !== null &&
              ((I = p(Ne, I, me)),
              ue === null ? (le = Ne) : (ue.sibling = Ne),
              (ue = Ne));
        return _e && ur(j, me), le;
      }
      for (de = a(j, de); !Ne.done; me++, Ne = M.next())
        (Ne = ee(de, j, me, Ne.value, $)),
          Ne !== null &&
            (e &&
              Ne.alternate !== null &&
              de.delete(Ne.key === null ? me : Ne.key),
            (I = p(Ne, I, me)),
            ue === null ? (le = Ne) : (ue.sibling = Ne),
            (ue = Ne));
      return (
        e &&
          de.forEach(function (E0) {
            return n(j, E0);
          }),
        _e && ur(j, me),
        le
      );
    }
    function He(j, I, M, $) {
      if (
        (typeof M == "object" &&
          M !== null &&
          M.type === z &&
          M.key === null &&
          (M = M.props.children),
        typeof M == "object" && M !== null)
      ) {
        switch (M.$$typeof) {
          case B:
            e: {
              for (var le = M.key, ue = I; ue !== null; ) {
                if (ue.key === le) {
                  if (((le = M.type), le === z)) {
                    if (ue.tag === 7) {
                      s(j, ue.sibling),
                        (I = d(ue, M.props.children)),
                        (I.return = j),
                        (j = I);
                      break e;
                    }
                  } else if (
                    ue.elementType === le ||
                    (typeof le == "object" &&
                      le !== null &&
                      le.$$typeof === oe &&
                      Qf(le) === ue.type)
                  ) {
                    s(j, ue.sibling),
                      (I = d(ue, M.props)),
                      (I.ref = Vo(j, ue, M)),
                      (I.return = j),
                      (j = I);
                    break e;
                  }
                  s(j, ue);
                  break;
                } else n(j, ue);
                ue = ue.sibling;
              }
              M.type === z
                ? ((I = vr(M.props.children, j.mode, $, M.key)),
                  (I.return = j),
                  (j = I))
                : (($ = js(M.type, M.key, M.props, null, j.mode, $)),
                  ($.ref = Vo(j, I, M)),
                  ($.return = j),
                  (j = $));
            }
            return A(j);
          case W:
            e: {
              for (ue = M.key; I !== null; ) {
                if (I.key === ue)
                  if (
                    I.tag === 4 &&
                    I.stateNode.containerInfo === M.containerInfo &&
                    I.stateNode.implementation === M.implementation
                  ) {
                    s(j, I.sibling),
                      (I = d(I, M.children || [])),
                      (I.return = j),
                      (j = I);
                    break e;
                  } else {
                    s(j, I);
                    break;
                  }
                else n(j, I);
                I = I.sibling;
              }
              (I = Pc(M, j.mode, $)), (I.return = j), (j = I);
            }
            return A(j);
          case oe:
            return (ue = M._init), He(j, I, ue(M._payload), $);
        }
        if (xo(M)) return re(j, I, M, $);
        if (J(M)) return ie(j, I, M, $);
        ds(j, M);
      }
      return (typeof M == "string" && M !== "") || typeof M == "number"
        ? ((M = "" + M),
          I !== null && I.tag === 6
            ? (s(j, I.sibling), (I = d(I, M)), (I.return = j), (j = I))
            : (s(j, I), (I = Nc(M, j.mode, $)), (I.return = j), (j = I)),
          A(j))
        : s(j, I);
    }
    return He;
  }
  var Qr = Hf(!0),
    Gf = Hf(!1),
    fs = Ln(null),
    ps = null,
    Hr = null,
    _a = null;
  function Fa() {
    _a = Hr = ps = null;
  }
  function za(e) {
    var n = fs.current;
    Be(fs), (e._currentValue = n);
  }
  function Ua(e, n, s) {
    for (; e !== null; ) {
      var a = e.alternate;
      if (
        ((e.childLanes & n) !== n
          ? ((e.childLanes |= n), a !== null && (a.childLanes |= n))
          : a !== null && (a.childLanes & n) !== n && (a.childLanes |= n),
        e === s)
      )
        break;
      e = e.return;
    }
  }
  function Gr(e, n) {
    (ps = e),
      (_a = Hr = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        (e.lanes & n && (gt = !0), (e.firstContext = null));
  }
  function It(e) {
    var n = e._currentValue;
    if (_a !== e)
      if (((e = { context: e, memoizedValue: n, next: null }), Hr === null)) {
        if (ps === null) throw Error(o(308));
        (Hr = e), (ps.dependencies = { lanes: 0, firstContext: e });
      } else Hr = Hr.next = e;
    return n;
  }
  var dr = null;
  function Wa(e) {
    dr === null ? (dr = [e]) : dr.push(e);
  }
  function Vf(e, n, s, a) {
    var d = n.interleaved;
    return (
      d === null ? ((s.next = s), Wa(n)) : ((s.next = d.next), (d.next = s)),
      (n.interleaved = s),
      vn(e, a)
    );
  }
  function vn(e, n) {
    e.lanes |= n;
    var s = e.alternate;
    for (s !== null && (s.lanes |= n), s = e, e = e.return; e !== null; )
      (e.childLanes |= n),
        (s = e.alternate),
        s !== null && (s.childLanes |= n),
        (s = e),
        (e = e.return);
    return s.tag === 3 ? s.stateNode : null;
  }
  var zn = !1;
  function Qa(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function Yf(e, n) {
    (e = e.updateQueue),
      n.updateQueue === e &&
        (n.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        });
  }
  function An(e, n) {
    return {
      eventTime: e,
      lane: n,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function Un(e, n, s) {
    var a = e.updateQueue;
    if (a === null) return null;
    if (((a = a.shared), be & 2)) {
      var d = a.pending;
      return (
        d === null ? (n.next = n) : ((n.next = d.next), (d.next = n)),
        (a.pending = n),
        vn(e, s)
      );
    }
    return (
      (d = a.interleaved),
      d === null ? ((n.next = n), Wa(a)) : ((n.next = d.next), (d.next = n)),
      (a.interleaved = n),
      vn(e, s)
    );
  }
  function hs(e, n, s) {
    if (
      ((n = n.updateQueue), n !== null && ((n = n.shared), (s & 4194240) !== 0))
    ) {
      var a = n.lanes;
      (a &= e.pendingLanes), (s |= a), (n.lanes = s), ra(e, s);
    }
  }
  function $f(e, n) {
    var s = e.updateQueue,
      a = e.alternate;
    if (a !== null && ((a = a.updateQueue), s === a)) {
      var d = null,
        p = null;
      if (((s = s.firstBaseUpdate), s !== null)) {
        do {
          var A = {
            eventTime: s.eventTime,
            lane: s.lane,
            tag: s.tag,
            payload: s.payload,
            callback: s.callback,
            next: null,
          };
          p === null ? (d = p = A) : (p = p.next = A), (s = s.next);
        } while (s !== null);
        p === null ? (d = p = n) : (p = p.next = n);
      } else d = p = n;
      (s = {
        baseState: a.baseState,
        firstBaseUpdate: d,
        lastBaseUpdate: p,
        shared: a.shared,
        effects: a.effects,
      }),
        (e.updateQueue = s);
      return;
    }
    (e = s.lastBaseUpdate),
      e === null ? (s.firstBaseUpdate = n) : (e.next = n),
      (s.lastBaseUpdate = n);
  }
  function ms(e, n, s, a) {
    var d = e.updateQueue;
    zn = !1;
    var p = d.firstBaseUpdate,
      A = d.lastBaseUpdate,
      N = d.shared.pending;
    if (N !== null) {
      d.shared.pending = null;
      var O = N,
        L = O.next;
      (O.next = null), A === null ? (p = L) : (A.next = L), (A = O);
      var G = e.alternate;
      G !== null &&
        ((G = G.updateQueue),
        (N = G.lastBaseUpdate),
        N !== A &&
          (N === null ? (G.firstBaseUpdate = L) : (N.next = L),
          (G.lastBaseUpdate = O)));
    }
    if (p !== null) {
      var V = d.baseState;
      (A = 0), (G = L = O = null), (N = p);
      do {
        var H = N.lane,
          ee = N.eventTime;
        if ((a & H) === H) {
          G !== null &&
            (G = G.next =
              {
                eventTime: ee,
                lane: 0,
                tag: N.tag,
                payload: N.payload,
                callback: N.callback,
                next: null,
              });
          e: {
            var re = e,
              ie = N;
            switch (((H = n), (ee = s), ie.tag)) {
              case 1:
                if (((re = ie.payload), typeof re == "function")) {
                  V = re.call(ee, V, H);
                  break e;
                }
                V = re;
                break e;
              case 3:
                re.flags = (re.flags & -65537) | 128;
              case 0:
                if (
                  ((re = ie.payload),
                  (H = typeof re == "function" ? re.call(ee, V, H) : re),
                  H == null)
                )
                  break e;
                V = Z({}, V, H);
                break e;
              case 2:
                zn = !0;
            }
          }
          N.callback !== null &&
            N.lane !== 0 &&
            ((e.flags |= 64),
            (H = d.effects),
            H === null ? (d.effects = [N]) : H.push(N));
        } else
          (ee = {
            eventTime: ee,
            lane: H,
            tag: N.tag,
            payload: N.payload,
            callback: N.callback,
            next: null,
          }),
            G === null ? ((L = G = ee), (O = V)) : (G = G.next = ee),
            (A |= H);
        if (((N = N.next), N === null)) {
          if (((N = d.shared.pending), N === null)) break;
          (H = N),
            (N = H.next),
            (H.next = null),
            (d.lastBaseUpdate = H),
            (d.shared.pending = null);
        }
      } while (!0);
      if (
        (G === null && (O = V),
        (d.baseState = O),
        (d.firstBaseUpdate = L),
        (d.lastBaseUpdate = G),
        (n = d.shared.interleaved),
        n !== null)
      ) {
        d = n;
        do (A |= d.lane), (d = d.next);
        while (d !== n);
      } else p === null && (d.shared.lanes = 0);
      (hr |= A), (e.lanes = A), (e.memoizedState = V);
    }
  }
  function Zf(e, n, s) {
    if (((e = n.effects), (n.effects = null), e !== null))
      for (n = 0; n < e.length; n++) {
        var a = e[n],
          d = a.callback;
        if (d !== null) {
          if (((a.callback = null), (a = s), typeof d != "function"))
            throw Error(o(191, d));
          d.call(a);
        }
      }
  }
  var Yo = {},
    tn = Ln(Yo),
    $o = Ln(Yo),
    Zo = Ln(Yo);
  function fr(e) {
    if (e === Yo) throw Error(o(174));
    return e;
  }
  function Ha(e, n) {
    switch ((Te(Zo, n), Te($o, e), Te(tn, Yo), (e = n.nodeType), e)) {
      case 9:
      case 11:
        n = (n = n.documentElement) ? n.namespaceURI : Gl(null, "");
        break;
      default:
        (e = e === 8 ? n.parentNode : n),
          (n = e.namespaceURI || null),
          (e = e.tagName),
          (n = Gl(n, e));
    }
    Be(tn), Te(tn, n);
  }
  function Vr() {
    Be(tn), Be($o), Be(Zo);
  }
  function Jf(e) {
    fr(Zo.current);
    var n = fr(tn.current),
      s = Gl(n, e.type);
    n !== s && (Te($o, e), Te(tn, s));
  }
  function Ga(e) {
    $o.current === e && (Be(tn), Be($o));
  }
  var Fe = Ln(0);
  function gs(e) {
    for (var n = e; n !== null; ) {
      if (n.tag === 13) {
        var s = n.memoizedState;
        if (
          s !== null &&
          ((s = s.dehydrated), s === null || s.data === "$?" || s.data === "$!")
        )
          return n;
      } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
        if (n.flags & 128) return n;
      } else if (n.child !== null) {
        (n.child.return = n), (n = n.child);
        continue;
      }
      if (n === e) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === e) return null;
        n = n.return;
      }
      (n.sibling.return = n.return), (n = n.sibling);
    }
    return null;
  }
  var Va = [];
  function Ya() {
    for (var e = 0; e < Va.length; e++)
      Va[e]._workInProgressVersionPrimary = null;
    Va.length = 0;
  }
  var ys = D.ReactCurrentDispatcher,
    $a = D.ReactCurrentBatchConfig,
    pr = 0,
    ze = null,
    $e = null,
    Xe = null,
    vs = !1,
    Jo = !1,
    Xo = 0,
    Gw = 0;
  function ot() {
    throw Error(o(321));
  }
  function Za(e, n) {
    if (n === null) return !1;
    for (var s = 0; s < n.length && s < e.length; s++)
      if (!Ft(e[s], n[s])) return !1;
    return !0;
  }
  function Ja(e, n, s, a, d, p) {
    if (
      ((pr = p),
      (ze = n),
      (n.memoizedState = null),
      (n.updateQueue = null),
      (n.lanes = 0),
      (ys.current = e === null || e.memoizedState === null ? Zw : Jw),
      (e = s(a, d)),
      Jo)
    ) {
      p = 0;
      do {
        if (((Jo = !1), (Xo = 0), 25 <= p)) throw Error(o(301));
        (p += 1),
          (Xe = $e = null),
          (n.updateQueue = null),
          (ys.current = Xw),
          (e = s(a, d));
      } while (Jo);
    }
    if (
      ((ys.current = xs),
      (n = $e !== null && $e.next !== null),
      (pr = 0),
      (Xe = $e = ze = null),
      (vs = !1),
      n)
    )
      throw Error(o(300));
    return e;
  }
  function Xa() {
    var e = Xo !== 0;
    return (Xo = 0), e;
  }
  function nn() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return Xe === null ? (ze.memoizedState = Xe = e) : (Xe = Xe.next = e), Xe;
  }
  function Tt() {
    if ($e === null) {
      var e = ze.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = $e.next;
    var n = Xe === null ? ze.memoizedState : Xe.next;
    if (n !== null) (Xe = n), ($e = e);
    else {
      if (e === null) throw Error(o(310));
      ($e = e),
        (e = {
          memoizedState: $e.memoizedState,
          baseState: $e.baseState,
          baseQueue: $e.baseQueue,
          queue: $e.queue,
          next: null,
        }),
        Xe === null ? (ze.memoizedState = Xe = e) : (Xe = Xe.next = e);
    }
    return Xe;
  }
  function qo(e, n) {
    return typeof n == "function" ? n(e) : n;
  }
  function qa(e) {
    var n = Tt(),
      s = n.queue;
    if (s === null) throw Error(o(311));
    s.lastRenderedReducer = e;
    var a = $e,
      d = a.baseQueue,
      p = s.pending;
    if (p !== null) {
      if (d !== null) {
        var A = d.next;
        (d.next = p.next), (p.next = A);
      }
      (a.baseQueue = d = p), (s.pending = null);
    }
    if (d !== null) {
      (p = d.next), (a = a.baseState);
      var N = (A = null),
        O = null,
        L = p;
      do {
        var G = L.lane;
        if ((pr & G) === G)
          O !== null &&
            (O = O.next =
              {
                lane: 0,
                action: L.action,
                hasEagerState: L.hasEagerState,
                eagerState: L.eagerState,
                next: null,
              }),
            (a = L.hasEagerState ? L.eagerState : e(a, L.action));
        else {
          var V = {
            lane: G,
            action: L.action,
            hasEagerState: L.hasEagerState,
            eagerState: L.eagerState,
            next: null,
          };
          O === null ? ((N = O = V), (A = a)) : (O = O.next = V),
            (ze.lanes |= G),
            (hr |= G);
        }
        L = L.next;
      } while (L !== null && L !== p);
      O === null ? (A = a) : (O.next = N),
        Ft(a, n.memoizedState) || (gt = !0),
        (n.memoizedState = a),
        (n.baseState = A),
        (n.baseQueue = O),
        (s.lastRenderedState = a);
    }
    if (((e = s.interleaved), e !== null)) {
      d = e;
      do (p = d.lane), (ze.lanes |= p), (hr |= p), (d = d.next);
      while (d !== e);
    } else d === null && (s.lanes = 0);
    return [n.memoizedState, s.dispatch];
  }
  function Ka(e) {
    var n = Tt(),
      s = n.queue;
    if (s === null) throw Error(o(311));
    s.lastRenderedReducer = e;
    var a = s.dispatch,
      d = s.pending,
      p = n.memoizedState;
    if (d !== null) {
      s.pending = null;
      var A = (d = d.next);
      do (p = e(p, A.action)), (A = A.next);
      while (A !== d);
      Ft(p, n.memoizedState) || (gt = !0),
        (n.memoizedState = p),
        n.baseQueue === null && (n.baseState = p),
        (s.lastRenderedState = p);
    }
    return [p, a];
  }
  function Xf() {}
  function qf(e, n) {
    var s = ze,
      a = Tt(),
      d = n(),
      p = !Ft(a.memoizedState, d);
    if (
      (p && ((a.memoizedState = d), (gt = !0)),
      (a = a.queue),
      ec(tp.bind(null, s, a, e), [e]),
      a.getSnapshot !== n || p || (Xe !== null && Xe.memoizedState.tag & 1))
    ) {
      if (
        ((s.flags |= 2048),
        Ko(9, ep.bind(null, s, a, d, n), void 0, null),
        qe === null)
      )
        throw Error(o(349));
      pr & 30 || Kf(s, n, d);
    }
    return d;
  }
  function Kf(e, n, s) {
    (e.flags |= 16384),
      (e = { getSnapshot: n, value: s }),
      (n = ze.updateQueue),
      n === null
        ? ((n = { lastEffect: null, stores: null }),
          (ze.updateQueue = n),
          (n.stores = [e]))
        : ((s = n.stores), s === null ? (n.stores = [e]) : s.push(e));
  }
  function ep(e, n, s, a) {
    (n.value = s), (n.getSnapshot = a), np(n) && rp(e);
  }
  function tp(e, n, s) {
    return s(function () {
      np(n) && rp(e);
    });
  }
  function np(e) {
    var n = e.getSnapshot;
    e = e.value;
    try {
      var s = n();
      return !Ft(e, s);
    } catch {
      return !0;
    }
  }
  function rp(e) {
    var n = vn(e, 1);
    n !== null && Ht(n, e, 1, -1);
  }
  function op(e) {
    var n = nn();
    return (
      typeof e == "function" && (e = e()),
      (n.memoizedState = n.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: qo,
        lastRenderedState: e,
      }),
      (n.queue = e),
      (e = e.dispatch = $w.bind(null, ze, e)),
      [n.memoizedState, e]
    );
  }
  function Ko(e, n, s, a) {
    return (
      (e = { tag: e, create: n, destroy: s, deps: a, next: null }),
      (n = ze.updateQueue),
      n === null
        ? ((n = { lastEffect: null, stores: null }),
          (ze.updateQueue = n),
          (n.lastEffect = e.next = e))
        : ((s = n.lastEffect),
          s === null
            ? (n.lastEffect = e.next = e)
            : ((a = s.next), (s.next = e), (e.next = a), (n.lastEffect = e))),
      e
    );
  }
  function ip() {
    return Tt().memoizedState;
  }
  function As(e, n, s, a) {
    var d = nn();
    (ze.flags |= e),
      (d.memoizedState = Ko(1 | n, s, void 0, a === void 0 ? null : a));
  }
  function ws(e, n, s, a) {
    var d = Tt();
    a = a === void 0 ? null : a;
    var p = void 0;
    if ($e !== null) {
      var A = $e.memoizedState;
      if (((p = A.destroy), a !== null && Za(a, A.deps))) {
        d.memoizedState = Ko(n, s, p, a);
        return;
      }
    }
    (ze.flags |= e), (d.memoizedState = Ko(1 | n, s, p, a));
  }
  function sp(e, n) {
    return As(8390656, 8, e, n);
  }
  function ec(e, n) {
    return ws(2048, 8, e, n);
  }
  function lp(e, n) {
    return ws(4, 2, e, n);
  }
  function ap(e, n) {
    return ws(4, 4, e, n);
  }
  function cp(e, n) {
    if (typeof n == "function")
      return (
        (e = e()),
        n(e),
        function () {
          n(null);
        }
      );
    if (n != null)
      return (
        (e = e()),
        (n.current = e),
        function () {
          n.current = null;
        }
      );
  }
  function up(e, n, s) {
    return (
      (s = s != null ? s.concat([e]) : null), ws(4, 4, cp.bind(null, n, e), s)
    );
  }
  function tc() {}
  function dp(e, n) {
    var s = Tt();
    n = n === void 0 ? null : n;
    var a = s.memoizedState;
    return a !== null && n !== null && Za(n, a[1])
      ? a[0]
      : ((s.memoizedState = [e, n]), e);
  }
  function fp(e, n) {
    var s = Tt();
    n = n === void 0 ? null : n;
    var a = s.memoizedState;
    return a !== null && n !== null && Za(n, a[1])
      ? a[0]
      : ((e = e()), (s.memoizedState = [e, n]), e);
  }
  function pp(e, n, s) {
    return pr & 21
      ? (Ft(s, n) ||
          ((s = Wd()), (ze.lanes |= s), (hr |= s), (e.baseState = !0)),
        n)
      : (e.baseState && ((e.baseState = !1), (gt = !0)), (e.memoizedState = s));
  }
  function Vw(e, n) {
    var s = Oe;
    (Oe = s !== 0 && 4 > s ? s : 4), e(!0);
    var a = $a.transition;
    $a.transition = {};
    try {
      e(!1), n();
    } finally {
      (Oe = s), ($a.transition = a);
    }
  }
  function hp() {
    return Tt().memoizedState;
  }
  function Yw(e, n, s) {
    var a = Gn(e);
    if (
      ((s = {
        lane: a,
        action: s,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      mp(e))
    )
      gp(n, s);
    else if (((s = Vf(e, n, s, a)), s !== null)) {
      var d = dt();
      Ht(s, e, a, d), yp(s, n, a);
    }
  }
  function $w(e, n, s) {
    var a = Gn(e),
      d = {
        lane: a,
        action: s,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (mp(e)) gp(n, d);
    else {
      var p = e.alternate;
      if (
        e.lanes === 0 &&
        (p === null || p.lanes === 0) &&
        ((p = n.lastRenderedReducer), p !== null)
      )
        try {
          var A = n.lastRenderedState,
            N = p(A, s);
          if (((d.hasEagerState = !0), (d.eagerState = N), Ft(N, A))) {
            var O = n.interleaved;
            O === null
              ? ((d.next = d), Wa(n))
              : ((d.next = O.next), (O.next = d)),
              (n.interleaved = d);
            return;
          }
        } catch {
        } finally {
        }
      (s = Vf(e, n, d, a)),
        s !== null && ((d = dt()), Ht(s, e, a, d), yp(s, n, a));
    }
  }
  function mp(e) {
    var n = e.alternate;
    return e === ze || (n !== null && n === ze);
  }
  function gp(e, n) {
    Jo = vs = !0;
    var s = e.pending;
    s === null ? (n.next = n) : ((n.next = s.next), (s.next = n)),
      (e.pending = n);
  }
  function yp(e, n, s) {
    if (s & 4194240) {
      var a = n.lanes;
      (a &= e.pendingLanes), (s |= a), (n.lanes = s), ra(e, s);
    }
  }
  var xs = {
      readContext: It,
      useCallback: ot,
      useContext: ot,
      useEffect: ot,
      useImperativeHandle: ot,
      useInsertionEffect: ot,
      useLayoutEffect: ot,
      useMemo: ot,
      useReducer: ot,
      useRef: ot,
      useState: ot,
      useDebugValue: ot,
      useDeferredValue: ot,
      useTransition: ot,
      useMutableSource: ot,
      useSyncExternalStore: ot,
      useId: ot,
      unstable_isNewReconciler: !1,
    },
    Zw = {
      readContext: It,
      useCallback: function (e, n) {
        return (nn().memoizedState = [e, n === void 0 ? null : n]), e;
      },
      useContext: It,
      useEffect: sp,
      useImperativeHandle: function (e, n, s) {
        return (
          (s = s != null ? s.concat([e]) : null),
          As(4194308, 4, cp.bind(null, n, e), s)
        );
      },
      useLayoutEffect: function (e, n) {
        return As(4194308, 4, e, n);
      },
      useInsertionEffect: function (e, n) {
        return As(4, 2, e, n);
      },
      useMemo: function (e, n) {
        var s = nn();
        return (
          (n = n === void 0 ? null : n),
          (e = e()),
          (s.memoizedState = [e, n]),
          e
        );
      },
      useReducer: function (e, n, s) {
        var a = nn();
        return (
          (n = s !== void 0 ? s(n) : n),
          (a.memoizedState = a.baseState = n),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: n,
          }),
          (a.queue = e),
          (e = e.dispatch = Yw.bind(null, ze, e)),
          [a.memoizedState, e]
        );
      },
      useRef: function (e) {
        var n = nn();
        return (e = { current: e }), (n.memoizedState = e);
      },
      useState: op,
      useDebugValue: tc,
      useDeferredValue: function (e) {
        return (nn().memoizedState = e);
      },
      useTransition: function () {
        var e = op(!1),
          n = e[0];
        return (e = Vw.bind(null, e[1])), (nn().memoizedState = e), [n, e];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, n, s) {
        var a = ze,
          d = nn();
        if (_e) {
          if (s === void 0) throw Error(o(407));
          s = s();
        } else {
          if (((s = n()), qe === null)) throw Error(o(349));
          pr & 30 || Kf(a, n, s);
        }
        d.memoizedState = s;
        var p = { value: s, getSnapshot: n };
        return (
          (d.queue = p),
          sp(tp.bind(null, a, p, e), [e]),
          (a.flags |= 2048),
          Ko(9, ep.bind(null, a, p, s, n), void 0, null),
          s
        );
      },
      useId: function () {
        var e = nn(),
          n = qe.identifierPrefix;
        if (_e) {
          var s = yn,
            a = gn;
          (s = (a & ~(1 << (32 - _t(a) - 1))).toString(32) + s),
            (n = ":" + n + "R" + s),
            (s = Xo++),
            0 < s && (n += "H" + s.toString(32)),
            (n += ":");
        } else (s = Gw++), (n = ":" + n + "r" + s.toString(32) + ":");
        return (e.memoizedState = n);
      },
      unstable_isNewReconciler: !1,
    },
    Jw = {
      readContext: It,
      useCallback: dp,
      useContext: It,
      useEffect: ec,
      useImperativeHandle: up,
      useInsertionEffect: lp,
      useLayoutEffect: ap,
      useMemo: fp,
      useReducer: qa,
      useRef: ip,
      useState: function () {
        return qa(qo);
      },
      useDebugValue: tc,
      useDeferredValue: function (e) {
        var n = Tt();
        return pp(n, $e.memoizedState, e);
      },
      useTransition: function () {
        var e = qa(qo)[0],
          n = Tt().memoizedState;
        return [e, n];
      },
      useMutableSource: Xf,
      useSyncExternalStore: qf,
      useId: hp,
      unstable_isNewReconciler: !1,
    },
    Xw = {
      readContext: It,
      useCallback: dp,
      useContext: It,
      useEffect: ec,
      useImperativeHandle: up,
      useInsertionEffect: lp,
      useLayoutEffect: ap,
      useMemo: fp,
      useReducer: Ka,
      useRef: ip,
      useState: function () {
        return Ka(qo);
      },
      useDebugValue: tc,
      useDeferredValue: function (e) {
        var n = Tt();
        return $e === null ? (n.memoizedState = e) : pp(n, $e.memoizedState, e);
      },
      useTransition: function () {
        var e = Ka(qo)[0],
          n = Tt().memoizedState;
        return [e, n];
      },
      useMutableSource: Xf,
      useSyncExternalStore: qf,
      useId: hp,
      unstable_isNewReconciler: !1,
    };
  function Ut(e, n) {
    if (e && e.defaultProps) {
      (n = Z({}, n)), (e = e.defaultProps);
      for (var s in e) n[s] === void 0 && (n[s] = e[s]);
      return n;
    }
    return n;
  }
  function nc(e, n, s, a) {
    (n = e.memoizedState),
      (s = s(a, n)),
      (s = s == null ? n : Z({}, n, s)),
      (e.memoizedState = s),
      e.lanes === 0 && (e.updateQueue.baseState = s);
  }
  var Ss = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? sr(e) === e : !1;
    },
    enqueueSetState: function (e, n, s) {
      e = e._reactInternals;
      var a = dt(),
        d = Gn(e),
        p = An(a, d);
      (p.payload = n),
        s != null && (p.callback = s),
        (n = Un(e, p, d)),
        n !== null && (Ht(n, e, d, a), hs(n, e, d));
    },
    enqueueReplaceState: function (e, n, s) {
      e = e._reactInternals;
      var a = dt(),
        d = Gn(e),
        p = An(a, d);
      (p.tag = 1),
        (p.payload = n),
        s != null && (p.callback = s),
        (n = Un(e, p, d)),
        n !== null && (Ht(n, e, d, a), hs(n, e, d));
    },
    enqueueForceUpdate: function (e, n) {
      e = e._reactInternals;
      var s = dt(),
        a = Gn(e),
        d = An(s, a);
      (d.tag = 2),
        n != null && (d.callback = n),
        (n = Un(e, d, a)),
        n !== null && (Ht(n, e, a, s), hs(n, e, a));
    },
  };
  function vp(e, n, s, a, d, p, A) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(a, p, A)
        : n.prototype && n.prototype.isPureReactComponent
        ? !Fo(s, a) || !Fo(d, p)
        : !0
    );
  }
  function Ap(e, n, s) {
    var a = !1,
      d = _n,
      p = n.contextType;
    return (
      typeof p == "object" && p !== null
        ? (p = It(p))
        : ((d = mt(n) ? ar : rt.current),
          (a = n.contextTypes),
          (p = (a = a != null) ? Fr(e, d) : _n)),
      (n = new n(s, p)),
      (e.memoizedState =
        n.state !== null && n.state !== void 0 ? n.state : null),
      (n.updater = Ss),
      (e.stateNode = n),
      (n._reactInternals = e),
      a &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = d),
        (e.__reactInternalMemoizedMaskedChildContext = p)),
      n
    );
  }
  function wp(e, n, s, a) {
    (e = n.state),
      typeof n.componentWillReceiveProps == "function" &&
        n.componentWillReceiveProps(s, a),
      typeof n.UNSAFE_componentWillReceiveProps == "function" &&
        n.UNSAFE_componentWillReceiveProps(s, a),
      n.state !== e && Ss.enqueueReplaceState(n, n.state, null);
  }
  function rc(e, n, s, a) {
    var d = e.stateNode;
    (d.props = s), (d.state = e.memoizedState), (d.refs = {}), Qa(e);
    var p = n.contextType;
    typeof p == "object" && p !== null
      ? (d.context = It(p))
      : ((p = mt(n) ? ar : rt.current), (d.context = Fr(e, p))),
      (d.state = e.memoizedState),
      (p = n.getDerivedStateFromProps),
      typeof p == "function" && (nc(e, n, p, s), (d.state = e.memoizedState)),
      typeof n.getDerivedStateFromProps == "function" ||
        typeof d.getSnapshotBeforeUpdate == "function" ||
        (typeof d.UNSAFE_componentWillMount != "function" &&
          typeof d.componentWillMount != "function") ||
        ((n = d.state),
        typeof d.componentWillMount == "function" && d.componentWillMount(),
        typeof d.UNSAFE_componentWillMount == "function" &&
          d.UNSAFE_componentWillMount(),
        n !== d.state && Ss.enqueueReplaceState(d, d.state, null),
        ms(e, s, d, a),
        (d.state = e.memoizedState)),
      typeof d.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Yr(e, n) {
    try {
      var s = "",
        a = n;
      do (s += Ae(a)), (a = a.return);
      while (a);
      var d = s;
    } catch (p) {
      d =
        `
Error generating stack: ` +
        p.message +
        `
` +
        p.stack;
    }
    return { value: e, source: n, stack: d, digest: null };
  }
  function oc(e, n, s) {
    return { value: e, source: null, stack: s ?? null, digest: n ?? null };
  }
  function ic(e, n) {
    try {
      console.error(n.value);
    } catch (s) {
      setTimeout(function () {
        throw s;
      });
    }
  }
  var qw = typeof WeakMap == "function" ? WeakMap : Map;
  function xp(e, n, s) {
    (s = An(-1, s)), (s.tag = 3), (s.payload = { element: null });
    var a = n.value;
    return (
      (s.callback = function () {
        Ps || ((Ps = !0), (wc = a)), ic(e, n);
      }),
      s
    );
  }
  function Sp(e, n, s) {
    (s = An(-1, s)), (s.tag = 3);
    var a = e.type.getDerivedStateFromError;
    if (typeof a == "function") {
      var d = n.value;
      (s.payload = function () {
        return a(d);
      }),
        (s.callback = function () {
          ic(e, n);
        });
    }
    var p = e.stateNode;
    return (
      p !== null &&
        typeof p.componentDidCatch == "function" &&
        (s.callback = function () {
          ic(e, n),
            typeof a != "function" &&
              (Qn === null ? (Qn = new Set([this])) : Qn.add(this));
          var A = n.stack;
          this.componentDidCatch(n.value, {
            componentStack: A !== null ? A : "",
          });
        }),
      s
    );
  }
  function Ep(e, n, s) {
    var a = e.pingCache;
    if (a === null) {
      a = e.pingCache = new qw();
      var d = new Set();
      a.set(n, d);
    } else (d = a.get(n)), d === void 0 && ((d = new Set()), a.set(n, d));
    d.has(s) || (d.add(s), (e = f0.bind(null, e, n, s)), n.then(e, e));
  }
  function Cp(e) {
    do {
      var n;
      if (
        ((n = e.tag === 13) &&
          ((n = e.memoizedState),
          (n = n !== null ? n.dehydrated !== null : !0)),
        n)
      )
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function kp(e, n, s, a, d) {
    return e.mode & 1
      ? ((e.flags |= 65536), (e.lanes = d), e)
      : (e === n
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (s.flags |= 131072),
            (s.flags &= -52805),
            s.tag === 1 &&
              (s.alternate === null
                ? (s.tag = 17)
                : ((n = An(-1, 1)), (n.tag = 2), Un(s, n, 1))),
            (s.lanes |= 1)),
        e);
  }
  var Kw = D.ReactCurrentOwner,
    gt = !1;
  function ut(e, n, s, a) {
    n.child = e === null ? Gf(n, null, s, a) : Qr(n, e.child, s, a);
  }
  function Rp(e, n, s, a, d) {
    s = s.render;
    var p = n.ref;
    return (
      Gr(n, d),
      (a = Ja(e, n, s, a, p, d)),
      (s = Xa()),
      e !== null && !gt
        ? ((n.updateQueue = e.updateQueue),
          (n.flags &= -2053),
          (e.lanes &= ~d),
          wn(e, n, d))
        : (_e && s && Da(n), (n.flags |= 1), ut(e, n, a, d), n.child)
    );
  }
  function bp(e, n, s, a, d) {
    if (e === null) {
      var p = s.type;
      return typeof p == "function" &&
        !bc(p) &&
        p.defaultProps === void 0 &&
        s.compare === null &&
        s.defaultProps === void 0
        ? ((n.tag = 15), (n.type = p), Np(e, n, p, a, d))
        : ((e = js(s.type, null, a, n, n.mode, d)),
          (e.ref = n.ref),
          (e.return = n),
          (n.child = e));
    }
    if (((p = e.child), !(e.lanes & d))) {
      var A = p.memoizedProps;
      if (
        ((s = s.compare), (s = s !== null ? s : Fo), s(A, a) && e.ref === n.ref)
      )
        return wn(e, n, d);
    }
    return (
      (n.flags |= 1),
      (e = Yn(p, a)),
      (e.ref = n.ref),
      (e.return = n),
      (n.child = e)
    );
  }
  function Np(e, n, s, a, d) {
    if (e !== null) {
      var p = e.memoizedProps;
      if (Fo(p, a) && e.ref === n.ref)
        if (((gt = !1), (n.pendingProps = a = p), (e.lanes & d) !== 0))
          e.flags & 131072 && (gt = !0);
        else return (n.lanes = e.lanes), wn(e, n, d);
    }
    return sc(e, n, s, a, d);
  }
  function Pp(e, n, s) {
    var a = n.pendingProps,
      d = a.children,
      p = e !== null ? e.memoizedState : null;
    if (a.mode === "hidden")
      if (!(n.mode & 1))
        (n.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          Te(Zr, kt),
          (kt |= s);
      else {
        if (!(s & 1073741824))
          return (
            (e = p !== null ? p.baseLanes | s : s),
            (n.lanes = n.childLanes = 1073741824),
            (n.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (n.updateQueue = null),
            Te(Zr, kt),
            (kt |= e),
            null
          );
        (n.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (a = p !== null ? p.baseLanes : s),
          Te(Zr, kt),
          (kt |= a);
      }
    else
      p !== null ? ((a = p.baseLanes | s), (n.memoizedState = null)) : (a = s),
        Te(Zr, kt),
        (kt |= a);
    return ut(e, n, d, s), n.child;
  }
  function Op(e, n) {
    var s = n.ref;
    ((e === null && s !== null) || (e !== null && e.ref !== s)) &&
      ((n.flags |= 512), (n.flags |= 2097152));
  }
  function sc(e, n, s, a, d) {
    var p = mt(s) ? ar : rt.current;
    return (
      (p = Fr(n, p)),
      Gr(n, d),
      (s = Ja(e, n, s, a, p, d)),
      (a = Xa()),
      e !== null && !gt
        ? ((n.updateQueue = e.updateQueue),
          (n.flags &= -2053),
          (e.lanes &= ~d),
          wn(e, n, d))
        : (_e && a && Da(n), (n.flags |= 1), ut(e, n, s, d), n.child)
    );
  }
  function Ip(e, n, s, a, d) {
    if (mt(s)) {
      var p = !0;
      ss(n);
    } else p = !1;
    if ((Gr(n, d), n.stateNode === null))
      Cs(e, n), Ap(n, s, a), rc(n, s, a, d), (a = !0);
    else if (e === null) {
      var A = n.stateNode,
        N = n.memoizedProps;
      A.props = N;
      var O = A.context,
        L = s.contextType;
      typeof L == "object" && L !== null
        ? (L = It(L))
        : ((L = mt(s) ? ar : rt.current), (L = Fr(n, L)));
      var G = s.getDerivedStateFromProps,
        V =
          typeof G == "function" ||
          typeof A.getSnapshotBeforeUpdate == "function";
      V ||
        (typeof A.UNSAFE_componentWillReceiveProps != "function" &&
          typeof A.componentWillReceiveProps != "function") ||
        ((N !== a || O !== L) && wp(n, A, a, L)),
        (zn = !1);
      var H = n.memoizedState;
      (A.state = H),
        ms(n, a, A, d),
        (O = n.memoizedState),
        N !== a || H !== O || ht.current || zn
          ? (typeof G == "function" && (nc(n, s, G, a), (O = n.memoizedState)),
            (N = zn || vp(n, s, N, a, H, O, L))
              ? (V ||
                  (typeof A.UNSAFE_componentWillMount != "function" &&
                    typeof A.componentWillMount != "function") ||
                  (typeof A.componentWillMount == "function" &&
                    A.componentWillMount(),
                  typeof A.UNSAFE_componentWillMount == "function" &&
                    A.UNSAFE_componentWillMount()),
                typeof A.componentDidMount == "function" &&
                  (n.flags |= 4194308))
              : (typeof A.componentDidMount == "function" &&
                  (n.flags |= 4194308),
                (n.memoizedProps = a),
                (n.memoizedState = O)),
            (A.props = a),
            (A.state = O),
            (A.context = L),
            (a = N))
          : (typeof A.componentDidMount == "function" && (n.flags |= 4194308),
            (a = !1));
    } else {
      (A = n.stateNode),
        Yf(e, n),
        (N = n.memoizedProps),
        (L = n.type === n.elementType ? N : Ut(n.type, N)),
        (A.props = L),
        (V = n.pendingProps),
        (H = A.context),
        (O = s.contextType),
        typeof O == "object" && O !== null
          ? (O = It(O))
          : ((O = mt(s) ? ar : rt.current), (O = Fr(n, O)));
      var ee = s.getDerivedStateFromProps;
      (G =
        typeof ee == "function" ||
        typeof A.getSnapshotBeforeUpdate == "function") ||
        (typeof A.UNSAFE_componentWillReceiveProps != "function" &&
          typeof A.componentWillReceiveProps != "function") ||
        ((N !== V || H !== O) && wp(n, A, a, O)),
        (zn = !1),
        (H = n.memoizedState),
        (A.state = H),
        ms(n, a, A, d);
      var re = n.memoizedState;
      N !== V || H !== re || ht.current || zn
        ? (typeof ee == "function" && (nc(n, s, ee, a), (re = n.memoizedState)),
          (L = zn || vp(n, s, L, a, H, re, O) || !1)
            ? (G ||
                (typeof A.UNSAFE_componentWillUpdate != "function" &&
                  typeof A.componentWillUpdate != "function") ||
                (typeof A.componentWillUpdate == "function" &&
                  A.componentWillUpdate(a, re, O),
                typeof A.UNSAFE_componentWillUpdate == "function" &&
                  A.UNSAFE_componentWillUpdate(a, re, O)),
              typeof A.componentDidUpdate == "function" && (n.flags |= 4),
              typeof A.getSnapshotBeforeUpdate == "function" &&
                (n.flags |= 1024))
            : (typeof A.componentDidUpdate != "function" ||
                (N === e.memoizedProps && H === e.memoizedState) ||
                (n.flags |= 4),
              typeof A.getSnapshotBeforeUpdate != "function" ||
                (N === e.memoizedProps && H === e.memoizedState) ||
                (n.flags |= 1024),
              (n.memoizedProps = a),
              (n.memoizedState = re)),
          (A.props = a),
          (A.state = re),
          (A.context = O),
          (a = L))
        : (typeof A.componentDidUpdate != "function" ||
            (N === e.memoizedProps && H === e.memoizedState) ||
            (n.flags |= 4),
          typeof A.getSnapshotBeforeUpdate != "function" ||
            (N === e.memoizedProps && H === e.memoizedState) ||
            (n.flags |= 1024),
          (a = !1));
    }
    return lc(e, n, s, a, p, d);
  }
  function lc(e, n, s, a, d, p) {
    Op(e, n);
    var A = (n.flags & 128) !== 0;
    if (!a && !A) return d && Mf(n, s, !1), wn(e, n, p);
    (a = n.stateNode), (Kw.current = n);
    var N =
      A && typeof s.getDerivedStateFromError != "function" ? null : a.render();
    return (
      (n.flags |= 1),
      e !== null && A
        ? ((n.child = Qr(n, e.child, null, p)), (n.child = Qr(n, null, N, p)))
        : ut(e, n, N, p),
      (n.memoizedState = a.state),
      d && Mf(n, s, !0),
      n.child
    );
  }
  function Tp(e) {
    var n = e.stateNode;
    n.pendingContext
      ? Bf(e, n.pendingContext, n.pendingContext !== n.context)
      : n.context && Bf(e, n.context, !1),
      Ha(e, n.containerInfo);
  }
  function Dp(e, n, s, a, d) {
    return Wr(), La(d), (n.flags |= 256), ut(e, n, s, a), n.child;
  }
  var ac = { dehydrated: null, treeContext: null, retryLane: 0 };
  function cc(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Bp(e, n, s) {
    var a = n.pendingProps,
      d = Fe.current,
      p = !1,
      A = (n.flags & 128) !== 0,
      N;
    if (
      ((N = A) ||
        (N = e !== null && e.memoizedState === null ? !1 : (d & 2) !== 0),
      N
        ? ((p = !0), (n.flags &= -129))
        : (e === null || e.memoizedState !== null) && (d |= 1),
      Te(Fe, d & 1),
      e === null)
    )
      return (
        Ma(n),
        (e = n.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? (n.mode & 1
              ? e.data === "$!"
                ? (n.lanes = 8)
                : (n.lanes = 1073741824)
              : (n.lanes = 1),
            null)
          : ((A = a.children),
            (e = a.fallback),
            p
              ? ((a = n.mode),
                (p = n.child),
                (A = { mode: "hidden", children: A }),
                !(a & 1) && p !== null
                  ? ((p.childLanes = 0), (p.pendingProps = A))
                  : (p = Ms(A, a, 0, null)),
                (e = vr(e, a, s, null)),
                (p.return = n),
                (e.return = n),
                (p.sibling = e),
                (n.child = p),
                (n.child.memoizedState = cc(s)),
                (n.memoizedState = ac),
                e)
              : uc(n, A))
      );
    if (((d = e.memoizedState), d !== null && ((N = d.dehydrated), N !== null)))
      return e0(e, n, A, a, N, d, s);
    if (p) {
      (p = a.fallback), (A = n.mode), (d = e.child), (N = d.sibling);
      var O = { mode: "hidden", children: a.children };
      return (
        !(A & 1) && n.child !== d
          ? ((a = n.child),
            (a.childLanes = 0),
            (a.pendingProps = O),
            (n.deletions = null))
          : ((a = Yn(d, O)), (a.subtreeFlags = d.subtreeFlags & 14680064)),
        N !== null ? (p = Yn(N, p)) : ((p = vr(p, A, s, null)), (p.flags |= 2)),
        (p.return = n),
        (a.return = n),
        (a.sibling = p),
        (n.child = a),
        (a = p),
        (p = n.child),
        (A = e.child.memoizedState),
        (A =
          A === null
            ? cc(s)
            : {
                baseLanes: A.baseLanes | s,
                cachePool: null,
                transitions: A.transitions,
              }),
        (p.memoizedState = A),
        (p.childLanes = e.childLanes & ~s),
        (n.memoizedState = ac),
        a
      );
    }
    return (
      (p = e.child),
      (e = p.sibling),
      (a = Yn(p, { mode: "visible", children: a.children })),
      !(n.mode & 1) && (a.lanes = s),
      (a.return = n),
      (a.sibling = null),
      e !== null &&
        ((s = n.deletions),
        s === null ? ((n.deletions = [e]), (n.flags |= 16)) : s.push(e)),
      (n.child = a),
      (n.memoizedState = null),
      a
    );
  }
  function uc(e, n) {
    return (
      (n = Ms({ mode: "visible", children: n }, e.mode, 0, null)),
      (n.return = e),
      (e.child = n)
    );
  }
  function Es(e, n, s, a) {
    return (
      a !== null && La(a),
      Qr(n, e.child, null, s),
      (e = uc(n, n.pendingProps.children)),
      (e.flags |= 2),
      (n.memoizedState = null),
      e
    );
  }
  function e0(e, n, s, a, d, p, A) {
    if (s)
      return n.flags & 256
        ? ((n.flags &= -257), (a = oc(Error(o(422)))), Es(e, n, A, a))
        : n.memoizedState !== null
        ? ((n.child = e.child), (n.flags |= 128), null)
        : ((p = a.fallback),
          (d = n.mode),
          (a = Ms({ mode: "visible", children: a.children }, d, 0, null)),
          (p = vr(p, d, A, null)),
          (p.flags |= 2),
          (a.return = n),
          (p.return = n),
          (a.sibling = p),
          (n.child = a),
          n.mode & 1 && Qr(n, e.child, null, A),
          (n.child.memoizedState = cc(A)),
          (n.memoizedState = ac),
          p);
    if (!(n.mode & 1)) return Es(e, n, A, null);
    if (d.data === "$!") {
      if (((a = d.nextSibling && d.nextSibling.dataset), a)) var N = a.dgst;
      return (
        (a = N), (p = Error(o(419))), (a = oc(p, a, void 0)), Es(e, n, A, a)
      );
    }
    if (((N = (A & e.childLanes) !== 0), gt || N)) {
      if (((a = qe), a !== null)) {
        switch (A & -A) {
          case 4:
            d = 2;
            break;
          case 16:
            d = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            d = 32;
            break;
          case 536870912:
            d = 268435456;
            break;
          default:
            d = 0;
        }
        (d = d & (a.suspendedLanes | A) ? 0 : d),
          d !== 0 &&
            d !== p.retryLane &&
            ((p.retryLane = d), vn(e, d), Ht(a, e, d, -1));
      }
      return Rc(), (a = oc(Error(o(421)))), Es(e, n, A, a);
    }
    return d.data === "$?"
      ? ((n.flags |= 128),
        (n.child = e.child),
        (n = p0.bind(null, e)),
        (d._reactRetry = n),
        null)
      : ((e = p.treeContext),
        (Ct = Mn(d.nextSibling)),
        (Et = n),
        (_e = !0),
        (zt = null),
        e !== null &&
          ((Pt[Ot++] = gn),
          (Pt[Ot++] = yn),
          (Pt[Ot++] = cr),
          (gn = e.id),
          (yn = e.overflow),
          (cr = n)),
        (n = uc(n, a.children)),
        (n.flags |= 4096),
        n);
  }
  function jp(e, n, s) {
    e.lanes |= n;
    var a = e.alternate;
    a !== null && (a.lanes |= n), Ua(e.return, n, s);
  }
  function dc(e, n, s, a, d) {
    var p = e.memoizedState;
    p === null
      ? (e.memoizedState = {
          isBackwards: n,
          rendering: null,
          renderingStartTime: 0,
          last: a,
          tail: s,
          tailMode: d,
        })
      : ((p.isBackwards = n),
        (p.rendering = null),
        (p.renderingStartTime = 0),
        (p.last = a),
        (p.tail = s),
        (p.tailMode = d));
  }
  function Mp(e, n, s) {
    var a = n.pendingProps,
      d = a.revealOrder,
      p = a.tail;
    if ((ut(e, n, a.children, s), (a = Fe.current), a & 2))
      (a = (a & 1) | 2), (n.flags |= 128);
    else {
      if (e !== null && e.flags & 128)
        e: for (e = n.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && jp(e, s, n);
          else if (e.tag === 19) jp(e, s, n);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === n) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === n) break e;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      a &= 1;
    }
    if ((Te(Fe, a), !(n.mode & 1))) n.memoizedState = null;
    else
      switch (d) {
        case "forwards":
          for (s = n.child, d = null; s !== null; )
            (e = s.alternate),
              e !== null && gs(e) === null && (d = s),
              (s = s.sibling);
          (s = d),
            s === null
              ? ((d = n.child), (n.child = null))
              : ((d = s.sibling), (s.sibling = null)),
            dc(n, !1, d, s, p);
          break;
        case "backwards":
          for (s = null, d = n.child, n.child = null; d !== null; ) {
            if (((e = d.alternate), e !== null && gs(e) === null)) {
              n.child = d;
              break;
            }
            (e = d.sibling), (d.sibling = s), (s = d), (d = e);
          }
          dc(n, !0, s, null, p);
          break;
        case "together":
          dc(n, !1, null, null, void 0);
          break;
        default:
          n.memoizedState = null;
      }
    return n.child;
  }
  function Cs(e, n) {
    !(n.mode & 1) &&
      e !== null &&
      ((e.alternate = null), (n.alternate = null), (n.flags |= 2));
  }
  function wn(e, n, s) {
    if (
      (e !== null && (n.dependencies = e.dependencies),
      (hr |= n.lanes),
      !(s & n.childLanes))
    )
      return null;
    if (e !== null && n.child !== e.child) throw Error(o(153));
    if (n.child !== null) {
      for (
        e = n.child, s = Yn(e, e.pendingProps), n.child = s, s.return = n;
        e.sibling !== null;

      )
        (e = e.sibling),
          (s = s.sibling = Yn(e, e.pendingProps)),
          (s.return = n);
      s.sibling = null;
    }
    return n.child;
  }
  function t0(e, n, s) {
    switch (n.tag) {
      case 3:
        Tp(n), Wr();
        break;
      case 5:
        Jf(n);
        break;
      case 1:
        mt(n.type) && ss(n);
        break;
      case 4:
        Ha(n, n.stateNode.containerInfo);
        break;
      case 10:
        var a = n.type._context,
          d = n.memoizedProps.value;
        Te(fs, a._currentValue), (a._currentValue = d);
        break;
      case 13:
        if (((a = n.memoizedState), a !== null))
          return a.dehydrated !== null
            ? (Te(Fe, Fe.current & 1), (n.flags |= 128), null)
            : s & n.child.childLanes
            ? Bp(e, n, s)
            : (Te(Fe, Fe.current & 1),
              (e = wn(e, n, s)),
              e !== null ? e.sibling : null);
        Te(Fe, Fe.current & 1);
        break;
      case 19:
        if (((a = (s & n.childLanes) !== 0), e.flags & 128)) {
          if (a) return Mp(e, n, s);
          n.flags |= 128;
        }
        if (
          ((d = n.memoizedState),
          d !== null &&
            ((d.rendering = null), (d.tail = null), (d.lastEffect = null)),
          Te(Fe, Fe.current),
          a)
        )
          break;
        return null;
      case 22:
      case 23:
        return (n.lanes = 0), Pp(e, n, s);
    }
    return wn(e, n, s);
  }
  var Lp, fc, _p, Fp;
  (Lp = function (e, n) {
    for (var s = n.child; s !== null; ) {
      if (s.tag === 5 || s.tag === 6) e.appendChild(s.stateNode);
      else if (s.tag !== 4 && s.child !== null) {
        (s.child.return = s), (s = s.child);
        continue;
      }
      if (s === n) break;
      for (; s.sibling === null; ) {
        if (s.return === null || s.return === n) return;
        s = s.return;
      }
      (s.sibling.return = s.return), (s = s.sibling);
    }
  }),
    (fc = function () {}),
    (_p = function (e, n, s, a) {
      var d = e.memoizedProps;
      if (d !== a) {
        (e = n.stateNode), fr(tn.current);
        var p = null;
        switch (s) {
          case "input":
            (d = pt(e, d)), (a = pt(e, a)), (p = []);
            break;
          case "select":
            (d = Z({}, d, { value: void 0 })),
              (a = Z({}, a, { value: void 0 })),
              (p = []);
            break;
          case "textarea":
            (d = Hl(e, d)), (a = Hl(e, a)), (p = []);
            break;
          default:
            typeof d.onClick != "function" &&
              typeof a.onClick == "function" &&
              (e.onclick = rs);
        }
        Vl(s, a);
        var A;
        s = null;
        for (L in d)
          if (!a.hasOwnProperty(L) && d.hasOwnProperty(L) && d[L] != null)
            if (L === "style") {
              var N = d[L];
              for (A in N) N.hasOwnProperty(A) && (s || (s = {}), (s[A] = ""));
            } else
              L !== "dangerouslySetInnerHTML" &&
                L !== "children" &&
                L !== "suppressContentEditableWarning" &&
                L !== "suppressHydrationWarning" &&
                L !== "autoFocus" &&
                (l.hasOwnProperty(L)
                  ? p || (p = [])
                  : (p = p || []).push(L, null));
        for (L in a) {
          var O = a[L];
          if (
            ((N = d != null ? d[L] : void 0),
            a.hasOwnProperty(L) && O !== N && (O != null || N != null))
          )
            if (L === "style")
              if (N) {
                for (A in N)
                  !N.hasOwnProperty(A) ||
                    (O && O.hasOwnProperty(A)) ||
                    (s || (s = {}), (s[A] = ""));
                for (A in O)
                  O.hasOwnProperty(A) &&
                    N[A] !== O[A] &&
                    (s || (s = {}), (s[A] = O[A]));
              } else s || (p || (p = []), p.push(L, s)), (s = O);
            else
              L === "dangerouslySetInnerHTML"
                ? ((O = O ? O.__html : void 0),
                  (N = N ? N.__html : void 0),
                  O != null && N !== O && (p = p || []).push(L, O))
                : L === "children"
                ? (typeof O != "string" && typeof O != "number") ||
                  (p = p || []).push(L, "" + O)
                : L !== "suppressContentEditableWarning" &&
                  L !== "suppressHydrationWarning" &&
                  (l.hasOwnProperty(L)
                    ? (O != null && L === "onScroll" && De("scroll", e),
                      p || N === O || (p = []))
                    : (p = p || []).push(L, O));
        }
        s && (p = p || []).push("style", s);
        var L = p;
        (n.updateQueue = L) && (n.flags |= 4);
      }
    }),
    (Fp = function (e, n, s, a) {
      s !== a && (n.flags |= 4);
    });
  function ei(e, n) {
    if (!_e)
      switch (e.tailMode) {
        case "hidden":
          n = e.tail;
          for (var s = null; n !== null; )
            n.alternate !== null && (s = n), (n = n.sibling);
          s === null ? (e.tail = null) : (s.sibling = null);
          break;
        case "collapsed":
          s = e.tail;
          for (var a = null; s !== null; )
            s.alternate !== null && (a = s), (s = s.sibling);
          a === null
            ? n || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (a.sibling = null);
      }
  }
  function it(e) {
    var n = e.alternate !== null && e.alternate.child === e.child,
      s = 0,
      a = 0;
    if (n)
      for (var d = e.child; d !== null; )
        (s |= d.lanes | d.childLanes),
          (a |= d.subtreeFlags & 14680064),
          (a |= d.flags & 14680064),
          (d.return = e),
          (d = d.sibling);
    else
      for (d = e.child; d !== null; )
        (s |= d.lanes | d.childLanes),
          (a |= d.subtreeFlags),
          (a |= d.flags),
          (d.return = e),
          (d = d.sibling);
    return (e.subtreeFlags |= a), (e.childLanes = s), n;
  }
  function n0(e, n, s) {
    var a = n.pendingProps;
    switch ((Ba(n), n.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return it(n), null;
      case 1:
        return mt(n.type) && is(), it(n), null;
      case 3:
        return (
          (a = n.stateNode),
          Vr(),
          Be(ht),
          Be(rt),
          Ya(),
          a.pendingContext &&
            ((a.context = a.pendingContext), (a.pendingContext = null)),
          (e === null || e.child === null) &&
            (us(n)
              ? (n.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && !(n.flags & 256)) ||
                ((n.flags |= 1024), zt !== null && (Ec(zt), (zt = null)))),
          fc(e, n),
          it(n),
          null
        );
      case 5:
        Ga(n);
        var d = fr(Zo.current);
        if (((s = n.type), e !== null && n.stateNode != null))
          _p(e, n, s, a, d),
            e.ref !== n.ref && ((n.flags |= 512), (n.flags |= 2097152));
        else {
          if (!a) {
            if (n.stateNode === null) throw Error(o(166));
            return it(n), null;
          }
          if (((e = fr(tn.current)), us(n))) {
            (a = n.stateNode), (s = n.type);
            var p = n.memoizedProps;
            switch (((a[en] = n), (a[Ho] = p), (e = (n.mode & 1) !== 0), s)) {
              case "dialog":
                De("cancel", a), De("close", a);
                break;
              case "iframe":
              case "object":
              case "embed":
                De("load", a);
                break;
              case "video":
              case "audio":
                for (d = 0; d < Uo.length; d++) De(Uo[d], a);
                break;
              case "source":
                De("error", a);
                break;
              case "img":
              case "image":
              case "link":
                De("error", a), De("load", a);
                break;
              case "details":
                De("toggle", a);
                break;
              case "input":
                bn(a, p), De("invalid", a);
                break;
              case "select":
                (a._wrapperState = { wasMultiple: !!p.multiple }),
                  De("invalid", a);
                break;
              case "textarea":
                xd(a, p), De("invalid", a);
            }
            Vl(s, p), (d = null);
            for (var A in p)
              if (p.hasOwnProperty(A)) {
                var N = p[A];
                A === "children"
                  ? typeof N == "string"
                    ? a.textContent !== N &&
                      (p.suppressHydrationWarning !== !0 &&
                        ns(a.textContent, N, e),
                      (d = ["children", N]))
                    : typeof N == "number" &&
                      a.textContent !== "" + N &&
                      (p.suppressHydrationWarning !== !0 &&
                        ns(a.textContent, N, e),
                      (d = ["children", "" + N]))
                  : l.hasOwnProperty(A) &&
                    N != null &&
                    A === "onScroll" &&
                    De("scroll", a);
              }
            switch (s) {
              case "input":
                Re(a), Bi(a, p, !0);
                break;
              case "textarea":
                Re(a), Ed(a);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof p.onClick == "function" && (a.onclick = rs);
            }
            (a = d), (n.updateQueue = a), a !== null && (n.flags |= 4);
          } else {
            (A = d.nodeType === 9 ? d : d.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = Cd(s)),
              e === "http://www.w3.org/1999/xhtml"
                ? s === "script"
                  ? ((e = A.createElement("div")),
                    (e.innerHTML = "<script></script>"),
                    (e = e.removeChild(e.firstChild)))
                  : typeof a.is == "string"
                  ? (e = A.createElement(s, { is: a.is }))
                  : ((e = A.createElement(s)),
                    s === "select" &&
                      ((A = e),
                      a.multiple
                        ? (A.multiple = !0)
                        : a.size && (A.size = a.size)))
                : (e = A.createElementNS(e, s)),
              (e[en] = n),
              (e[Ho] = a),
              Lp(e, n, !1, !1),
              (n.stateNode = e);
            e: {
              switch (((A = Yl(s, a)), s)) {
                case "dialog":
                  De("cancel", e), De("close", e), (d = a);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  De("load", e), (d = a);
                  break;
                case "video":
                case "audio":
                  for (d = 0; d < Uo.length; d++) De(Uo[d], e);
                  d = a;
                  break;
                case "source":
                  De("error", e), (d = a);
                  break;
                case "img":
                case "image":
                case "link":
                  De("error", e), De("load", e), (d = a);
                  break;
                case "details":
                  De("toggle", e), (d = a);
                  break;
                case "input":
                  bn(e, a), (d = pt(e, a)), De("invalid", e);
                  break;
                case "option":
                  d = a;
                  break;
                case "select":
                  (e._wrapperState = { wasMultiple: !!a.multiple }),
                    (d = Z({}, a, { value: void 0 })),
                    De("invalid", e);
                  break;
                case "textarea":
                  xd(e, a), (d = Hl(e, a)), De("invalid", e);
                  break;
                default:
                  d = a;
              }
              Vl(s, d), (N = d);
              for (p in N)
                if (N.hasOwnProperty(p)) {
                  var O = N[p];
                  p === "style"
                    ? bd(e, O)
                    : p === "dangerouslySetInnerHTML"
                    ? ((O = O ? O.__html : void 0), O != null && kd(e, O))
                    : p === "children"
                    ? typeof O == "string"
                      ? (s !== "textarea" || O !== "") && So(e, O)
                      : typeof O == "number" && So(e, "" + O)
                    : p !== "suppressContentEditableWarning" &&
                      p !== "suppressHydrationWarning" &&
                      p !== "autoFocus" &&
                      (l.hasOwnProperty(p)
                        ? O != null && p === "onScroll" && De("scroll", e)
                        : O != null && P(e, p, O, A));
                }
              switch (s) {
                case "input":
                  Re(e), Bi(e, a, !1);
                  break;
                case "textarea":
                  Re(e), Ed(e);
                  break;
                case "option":
                  a.value != null && e.setAttribute("value", "" + ce(a.value));
                  break;
                case "select":
                  (e.multiple = !!a.multiple),
                    (p = a.value),
                    p != null
                      ? br(e, !!a.multiple, p, !1)
                      : a.defaultValue != null &&
                        br(e, !!a.multiple, a.defaultValue, !0);
                  break;
                default:
                  typeof d.onClick == "function" && (e.onclick = rs);
              }
              switch (s) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  a = !!a.autoFocus;
                  break e;
                case "img":
                  a = !0;
                  break e;
                default:
                  a = !1;
              }
            }
            a && (n.flags |= 4);
          }
          n.ref !== null && ((n.flags |= 512), (n.flags |= 2097152));
        }
        return it(n), null;
      case 6:
        if (e && n.stateNode != null) Fp(e, n, e.memoizedProps, a);
        else {
          if (typeof a != "string" && n.stateNode === null) throw Error(o(166));
          if (((s = fr(Zo.current)), fr(tn.current), us(n))) {
            if (
              ((a = n.stateNode),
              (s = n.memoizedProps),
              (a[en] = n),
              (p = a.nodeValue !== s) && ((e = Et), e !== null))
            )
              switch (e.tag) {
                case 3:
                  ns(a.nodeValue, s, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    ns(a.nodeValue, s, (e.mode & 1) !== 0);
              }
            p && (n.flags |= 4);
          } else
            (a = (s.nodeType === 9 ? s : s.ownerDocument).createTextNode(a)),
              (a[en] = n),
              (n.stateNode = a);
        }
        return it(n), null;
      case 13:
        if (
          (Be(Fe),
          (a = n.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (_e && Ct !== null && n.mode & 1 && !(n.flags & 128))
            Wf(), Wr(), (n.flags |= 98560), (p = !1);
          else if (((p = us(n)), a !== null && a.dehydrated !== null)) {
            if (e === null) {
              if (!p) throw Error(o(318));
              if (
                ((p = n.memoizedState),
                (p = p !== null ? p.dehydrated : null),
                !p)
              )
                throw Error(o(317));
              p[en] = n;
            } else
              Wr(),
                !(n.flags & 128) && (n.memoizedState = null),
                (n.flags |= 4);
            it(n), (p = !1);
          } else zt !== null && (Ec(zt), (zt = null)), (p = !0);
          if (!p) return n.flags & 65536 ? n : null;
        }
        return n.flags & 128
          ? ((n.lanes = s), n)
          : ((a = a !== null),
            a !== (e !== null && e.memoizedState !== null) &&
              a &&
              ((n.child.flags |= 8192),
              n.mode & 1 &&
                (e === null || Fe.current & 1 ? Ze === 0 && (Ze = 3) : Rc())),
            n.updateQueue !== null && (n.flags |= 4),
            it(n),
            null);
      case 4:
        return (
          Vr(),
          fc(e, n),
          e === null && Wo(n.stateNode.containerInfo),
          it(n),
          null
        );
      case 10:
        return za(n.type._context), it(n), null;
      case 17:
        return mt(n.type) && is(), it(n), null;
      case 19:
        if ((Be(Fe), (p = n.memoizedState), p === null)) return it(n), null;
        if (((a = (n.flags & 128) !== 0), (A = p.rendering), A === null))
          if (a) ei(p, !1);
          else {
            if (Ze !== 0 || (e !== null && e.flags & 128))
              for (e = n.child; e !== null; ) {
                if (((A = gs(e)), A !== null)) {
                  for (
                    n.flags |= 128,
                      ei(p, !1),
                      a = A.updateQueue,
                      a !== null && ((n.updateQueue = a), (n.flags |= 4)),
                      n.subtreeFlags = 0,
                      a = s,
                      s = n.child;
                    s !== null;

                  )
                    (p = s),
                      (e = a),
                      (p.flags &= 14680066),
                      (A = p.alternate),
                      A === null
                        ? ((p.childLanes = 0),
                          (p.lanes = e),
                          (p.child = null),
                          (p.subtreeFlags = 0),
                          (p.memoizedProps = null),
                          (p.memoizedState = null),
                          (p.updateQueue = null),
                          (p.dependencies = null),
                          (p.stateNode = null))
                        : ((p.childLanes = A.childLanes),
                          (p.lanes = A.lanes),
                          (p.child = A.child),
                          (p.subtreeFlags = 0),
                          (p.deletions = null),
                          (p.memoizedProps = A.memoizedProps),
                          (p.memoizedState = A.memoizedState),
                          (p.updateQueue = A.updateQueue),
                          (p.type = A.type),
                          (e = A.dependencies),
                          (p.dependencies =
                            e === null
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (s = s.sibling);
                  return Te(Fe, (Fe.current & 1) | 2), n.child;
                }
                e = e.sibling;
              }
            p.tail !== null &&
              Qe() > Jr &&
              ((n.flags |= 128), (a = !0), ei(p, !1), (n.lanes = 4194304));
          }
        else {
          if (!a)
            if (((e = gs(A)), e !== null)) {
              if (
                ((n.flags |= 128),
                (a = !0),
                (s = e.updateQueue),
                s !== null && ((n.updateQueue = s), (n.flags |= 4)),
                ei(p, !0),
                p.tail === null &&
                  p.tailMode === "hidden" &&
                  !A.alternate &&
                  !_e)
              )
                return it(n), null;
            } else
              2 * Qe() - p.renderingStartTime > Jr &&
                s !== 1073741824 &&
                ((n.flags |= 128), (a = !0), ei(p, !1), (n.lanes = 4194304));
          p.isBackwards
            ? ((A.sibling = n.child), (n.child = A))
            : ((s = p.last),
              s !== null ? (s.sibling = A) : (n.child = A),
              (p.last = A));
        }
        return p.tail !== null
          ? ((n = p.tail),
            (p.rendering = n),
            (p.tail = n.sibling),
            (p.renderingStartTime = Qe()),
            (n.sibling = null),
            (s = Fe.current),
            Te(Fe, a ? (s & 1) | 2 : s & 1),
            n)
          : (it(n), null);
      case 22:
      case 23:
        return (
          kc(),
          (a = n.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== a && (n.flags |= 8192),
          a && n.mode & 1
            ? kt & 1073741824 &&
              (it(n), n.subtreeFlags & 6 && (n.flags |= 8192))
            : it(n),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(o(156, n.tag));
  }
  function r0(e, n) {
    switch ((Ba(n), n.tag)) {
      case 1:
        return (
          mt(n.type) && is(),
          (e = n.flags),
          e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
        );
      case 3:
        return (
          Vr(),
          Be(ht),
          Be(rt),
          Ya(),
          (e = n.flags),
          e & 65536 && !(e & 128) ? ((n.flags = (e & -65537) | 128), n) : null
        );
      case 5:
        return Ga(n), null;
      case 13:
        if (
          (Be(Fe), (e = n.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (n.alternate === null) throw Error(o(340));
          Wr();
        }
        return (
          (e = n.flags), e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
        );
      case 19:
        return Be(Fe), null;
      case 4:
        return Vr(), null;
      case 10:
        return za(n.type._context), null;
      case 22:
      case 23:
        return kc(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var ks = !1,
    st = !1,
    o0 = typeof WeakSet == "function" ? WeakSet : Set,
    te = null;
  function $r(e, n) {
    var s = e.ref;
    if (s !== null)
      if (typeof s == "function")
        try {
          s(null);
        } catch (a) {
          We(e, n, a);
        }
      else s.current = null;
  }
  function pc(e, n, s) {
    try {
      s();
    } catch (a) {
      We(e, n, a);
    }
  }
  var zp = !1;
  function i0(e, n) {
    if (((ka = Gi), (e = vf()), ya(e))) {
      if ("selectionStart" in e)
        var s = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          s = ((s = e.ownerDocument) && s.defaultView) || window;
          var a = s.getSelection && s.getSelection();
          if (a && a.rangeCount !== 0) {
            s = a.anchorNode;
            var d = a.anchorOffset,
              p = a.focusNode;
            a = a.focusOffset;
            try {
              s.nodeType, p.nodeType;
            } catch {
              s = null;
              break e;
            }
            var A = 0,
              N = -1,
              O = -1,
              L = 0,
              G = 0,
              V = e,
              H = null;
            t: for (;;) {
              for (
                var ee;
                V !== s || (d !== 0 && V.nodeType !== 3) || (N = A + d),
                  V !== p || (a !== 0 && V.nodeType !== 3) || (O = A + a),
                  V.nodeType === 3 && (A += V.nodeValue.length),
                  (ee = V.firstChild) !== null;

              )
                (H = V), (V = ee);
              for (;;) {
                if (V === e) break t;
                if (
                  (H === s && ++L === d && (N = A),
                  H === p && ++G === a && (O = A),
                  (ee = V.nextSibling) !== null)
                )
                  break;
                (V = H), (H = V.parentNode);
              }
              V = ee;
            }
            s = N === -1 || O === -1 ? null : { start: N, end: O };
          } else s = null;
        }
      s = s || { start: 0, end: 0 };
    } else s = null;
    for (
      Ra = { focusedElem: e, selectionRange: s }, Gi = !1, te = n;
      te !== null;

    )
      if (
        ((n = te), (e = n.child), (n.subtreeFlags & 1028) !== 0 && e !== null)
      )
        (e.return = n), (te = e);
      else
        for (; te !== null; ) {
          n = te;
          try {
            var re = n.alternate;
            if (n.flags & 1024)
              switch (n.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (re !== null) {
                    var ie = re.memoizedProps,
                      He = re.memoizedState,
                      j = n.stateNode,
                      I = j.getSnapshotBeforeUpdate(
                        n.elementType === n.type ? ie : Ut(n.type, ie),
                        He
                      );
                    j.__reactInternalSnapshotBeforeUpdate = I;
                  }
                  break;
                case 3:
                  var M = n.stateNode.containerInfo;
                  M.nodeType === 1
                    ? (M.textContent = "")
                    : M.nodeType === 9 &&
                      M.documentElement &&
                      M.removeChild(M.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(o(163));
              }
          } catch ($) {
            We(n, n.return, $);
          }
          if (((e = n.sibling), e !== null)) {
            (e.return = n.return), (te = e);
            break;
          }
          te = n.return;
        }
    return (re = zp), (zp = !1), re;
  }
  function ti(e, n, s) {
    var a = n.updateQueue;
    if (((a = a !== null ? a.lastEffect : null), a !== null)) {
      var d = (a = a.next);
      do {
        if ((d.tag & e) === e) {
          var p = d.destroy;
          (d.destroy = void 0), p !== void 0 && pc(n, s, p);
        }
        d = d.next;
      } while (d !== a);
    }
  }
  function Rs(e, n) {
    if (
      ((n = n.updateQueue), (n = n !== null ? n.lastEffect : null), n !== null)
    ) {
      var s = (n = n.next);
      do {
        if ((s.tag & e) === e) {
          var a = s.create;
          s.destroy = a();
        }
        s = s.next;
      } while (s !== n);
    }
  }
  function hc(e) {
    var n = e.ref;
    if (n !== null) {
      var s = e.stateNode;
      switch (e.tag) {
        case 5:
          e = s;
          break;
        default:
          e = s;
      }
      typeof n == "function" ? n(e) : (n.current = e);
    }
  }
  function Up(e) {
    var n = e.alternate;
    n !== null && ((e.alternate = null), Up(n)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((n = e.stateNode),
        n !== null &&
          (delete n[en],
          delete n[Ho],
          delete n[Oa],
          delete n[Uw],
          delete n[Ww])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  function Wp(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Qp(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Wp(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function mc(e, n, s) {
    var a = e.tag;
    if (a === 5 || a === 6)
      (e = e.stateNode),
        n
          ? s.nodeType === 8
            ? s.parentNode.insertBefore(e, n)
            : s.insertBefore(e, n)
          : (s.nodeType === 8
              ? ((n = s.parentNode), n.insertBefore(e, s))
              : ((n = s), n.appendChild(e)),
            (s = s._reactRootContainer),
            s != null || n.onclick !== null || (n.onclick = rs));
    else if (a !== 4 && ((e = e.child), e !== null))
      for (mc(e, n, s), e = e.sibling; e !== null; )
        mc(e, n, s), (e = e.sibling);
  }
  function gc(e, n, s) {
    var a = e.tag;
    if (a === 5 || a === 6)
      (e = e.stateNode), n ? s.insertBefore(e, n) : s.appendChild(e);
    else if (a !== 4 && ((e = e.child), e !== null))
      for (gc(e, n, s), e = e.sibling; e !== null; )
        gc(e, n, s), (e = e.sibling);
  }
  var et = null,
    Wt = !1;
  function Wn(e, n, s) {
    for (s = s.child; s !== null; ) Hp(e, n, s), (s = s.sibling);
  }
  function Hp(e, n, s) {
    if (Kt && typeof Kt.onCommitFiberUnmount == "function")
      try {
        Kt.onCommitFiberUnmount(Fi, s);
      } catch {}
    switch (s.tag) {
      case 5:
        st || $r(s, n);
      case 6:
        var a = et,
          d = Wt;
        (et = null),
          Wn(e, n, s),
          (et = a),
          (Wt = d),
          et !== null &&
            (Wt
              ? ((e = et),
                (s = s.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(s)
                  : e.removeChild(s))
              : et.removeChild(s.stateNode));
        break;
      case 18:
        et !== null &&
          (Wt
            ? ((e = et),
              (s = s.stateNode),
              e.nodeType === 8
                ? Pa(e.parentNode, s)
                : e.nodeType === 1 && Pa(e, s),
              Do(e))
            : Pa(et, s.stateNode));
        break;
      case 4:
        (a = et),
          (d = Wt),
          (et = s.stateNode.containerInfo),
          (Wt = !0),
          Wn(e, n, s),
          (et = a),
          (Wt = d);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !st &&
          ((a = s.updateQueue), a !== null && ((a = a.lastEffect), a !== null))
        ) {
          d = a = a.next;
          do {
            var p = d,
              A = p.destroy;
            (p = p.tag),
              A !== void 0 && (p & 2 || p & 4) && pc(s, n, A),
              (d = d.next);
          } while (d !== a);
        }
        Wn(e, n, s);
        break;
      case 1:
        if (
          !st &&
          ($r(s, n),
          (a = s.stateNode),
          typeof a.componentWillUnmount == "function")
        )
          try {
            (a.props = s.memoizedProps),
              (a.state = s.memoizedState),
              a.componentWillUnmount();
          } catch (N) {
            We(s, n, N);
          }
        Wn(e, n, s);
        break;
      case 21:
        Wn(e, n, s);
        break;
      case 22:
        s.mode & 1
          ? ((st = (a = st) || s.memoizedState !== null), Wn(e, n, s), (st = a))
          : Wn(e, n, s);
        break;
      default:
        Wn(e, n, s);
    }
  }
  function Gp(e) {
    var n = e.updateQueue;
    if (n !== null) {
      e.updateQueue = null;
      var s = e.stateNode;
      s === null && (s = e.stateNode = new o0()),
        n.forEach(function (a) {
          var d = h0.bind(null, e, a);
          s.has(a) || (s.add(a), a.then(d, d));
        });
    }
  }
  function Qt(e, n) {
    var s = n.deletions;
    if (s !== null)
      for (var a = 0; a < s.length; a++) {
        var d = s[a];
        try {
          var p = e,
            A = n,
            N = A;
          e: for (; N !== null; ) {
            switch (N.tag) {
              case 5:
                (et = N.stateNode), (Wt = !1);
                break e;
              case 3:
                (et = N.stateNode.containerInfo), (Wt = !0);
                break e;
              case 4:
                (et = N.stateNode.containerInfo), (Wt = !0);
                break e;
            }
            N = N.return;
          }
          if (et === null) throw Error(o(160));
          Hp(p, A, d), (et = null), (Wt = !1);
          var O = d.alternate;
          O !== null && (O.return = null), (d.return = null);
        } catch (L) {
          We(d, n, L);
        }
      }
    if (n.subtreeFlags & 12854)
      for (n = n.child; n !== null; ) Vp(n, e), (n = n.sibling);
  }
  function Vp(e, n) {
    var s = e.alternate,
      a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((Qt(n, e), rn(e), a & 4)) {
          try {
            ti(3, e, e.return), Rs(3, e);
          } catch (ie) {
            We(e, e.return, ie);
          }
          try {
            ti(5, e, e.return);
          } catch (ie) {
            We(e, e.return, ie);
          }
        }
        break;
      case 1:
        Qt(n, e), rn(e), a & 512 && s !== null && $r(s, s.return);
        break;
      case 5:
        if (
          (Qt(n, e),
          rn(e),
          a & 512 && s !== null && $r(s, s.return),
          e.flags & 32)
        ) {
          var d = e.stateNode;
          try {
            So(d, "");
          } catch (ie) {
            We(e, e.return, ie);
          }
        }
        if (a & 4 && ((d = e.stateNode), d != null)) {
          var p = e.memoizedProps,
            A = s !== null ? s.memoizedProps : p,
            N = e.type,
            O = e.updateQueue;
          if (((e.updateQueue = null), O !== null))
            try {
              N === "input" && p.type === "radio" && p.name != null && Nn(d, p),
                Yl(N, A);
              var L = Yl(N, p);
              for (A = 0; A < O.length; A += 2) {
                var G = O[A],
                  V = O[A + 1];
                G === "style"
                  ? bd(d, V)
                  : G === "dangerouslySetInnerHTML"
                  ? kd(d, V)
                  : G === "children"
                  ? So(d, V)
                  : P(d, G, V, L);
              }
              switch (N) {
                case "input":
                  pn(d, p);
                  break;
                case "textarea":
                  Sd(d, p);
                  break;
                case "select":
                  var H = d._wrapperState.wasMultiple;
                  d._wrapperState.wasMultiple = !!p.multiple;
                  var ee = p.value;
                  ee != null
                    ? br(d, !!p.multiple, ee, !1)
                    : H !== !!p.multiple &&
                      (p.defaultValue != null
                        ? br(d, !!p.multiple, p.defaultValue, !0)
                        : br(d, !!p.multiple, p.multiple ? [] : "", !1));
              }
              d[Ho] = p;
            } catch (ie) {
              We(e, e.return, ie);
            }
        }
        break;
      case 6:
        if ((Qt(n, e), rn(e), a & 4)) {
          if (e.stateNode === null) throw Error(o(162));
          (d = e.stateNode), (p = e.memoizedProps);
          try {
            d.nodeValue = p;
          } catch (ie) {
            We(e, e.return, ie);
          }
        }
        break;
      case 3:
        if (
          (Qt(n, e), rn(e), a & 4 && s !== null && s.memoizedState.isDehydrated)
        )
          try {
            Do(n.containerInfo);
          } catch (ie) {
            We(e, e.return, ie);
          }
        break;
      case 4:
        Qt(n, e), rn(e);
        break;
      case 13:
        Qt(n, e),
          rn(e),
          (d = e.child),
          d.flags & 8192 &&
            ((p = d.memoizedState !== null),
            (d.stateNode.isHidden = p),
            !p ||
              (d.alternate !== null && d.alternate.memoizedState !== null) ||
              (Ac = Qe())),
          a & 4 && Gp(e);
        break;
      case 22:
        if (
          ((G = s !== null && s.memoizedState !== null),
          e.mode & 1 ? ((st = (L = st) || G), Qt(n, e), (st = L)) : Qt(n, e),
          rn(e),
          a & 8192)
        ) {
          if (
            ((L = e.memoizedState !== null),
            (e.stateNode.isHidden = L) && !G && e.mode & 1)
          )
            for (te = e, G = e.child; G !== null; ) {
              for (V = te = G; te !== null; ) {
                switch (((H = te), (ee = H.child), H.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    ti(4, H, H.return);
                    break;
                  case 1:
                    $r(H, H.return);
                    var re = H.stateNode;
                    if (typeof re.componentWillUnmount == "function") {
                      (a = H), (s = H.return);
                      try {
                        (n = a),
                          (re.props = n.memoizedProps),
                          (re.state = n.memoizedState),
                          re.componentWillUnmount();
                      } catch (ie) {
                        We(a, s, ie);
                      }
                    }
                    break;
                  case 5:
                    $r(H, H.return);
                    break;
                  case 22:
                    if (H.memoizedState !== null) {
                      Zp(V);
                      continue;
                    }
                }
                ee !== null ? ((ee.return = H), (te = ee)) : Zp(V);
              }
              G = G.sibling;
            }
          e: for (G = null, V = e; ; ) {
            if (V.tag === 5) {
              if (G === null) {
                G = V;
                try {
                  (d = V.stateNode),
                    L
                      ? ((p = d.style),
                        typeof p.setProperty == "function"
                          ? p.setProperty("display", "none", "important")
                          : (p.display = "none"))
                      : ((N = V.stateNode),
                        (O = V.memoizedProps.style),
                        (A =
                          O != null && O.hasOwnProperty("display")
                            ? O.display
                            : null),
                        (N.style.display = Rd("display", A)));
                } catch (ie) {
                  We(e, e.return, ie);
                }
              }
            } else if (V.tag === 6) {
              if (G === null)
                try {
                  V.stateNode.nodeValue = L ? "" : V.memoizedProps;
                } catch (ie) {
                  We(e, e.return, ie);
                }
            } else if (
              ((V.tag !== 22 && V.tag !== 23) ||
                V.memoizedState === null ||
                V === e) &&
              V.child !== null
            ) {
              (V.child.return = V), (V = V.child);
              continue;
            }
            if (V === e) break e;
            for (; V.sibling === null; ) {
              if (V.return === null || V.return === e) break e;
              G === V && (G = null), (V = V.return);
            }
            G === V && (G = null),
              (V.sibling.return = V.return),
              (V = V.sibling);
          }
        }
        break;
      case 19:
        Qt(n, e), rn(e), a & 4 && Gp(e);
        break;
      case 21:
        break;
      default:
        Qt(n, e), rn(e);
    }
  }
  function rn(e) {
    var n = e.flags;
    if (n & 2) {
      try {
        e: {
          for (var s = e.return; s !== null; ) {
            if (Wp(s)) {
              var a = s;
              break e;
            }
            s = s.return;
          }
          throw Error(o(160));
        }
        switch (a.tag) {
          case 5:
            var d = a.stateNode;
            a.flags & 32 && (So(d, ""), (a.flags &= -33));
            var p = Qp(e);
            gc(e, p, d);
            break;
          case 3:
          case 4:
            var A = a.stateNode.containerInfo,
              N = Qp(e);
            mc(e, N, A);
            break;
          default:
            throw Error(o(161));
        }
      } catch (O) {
        We(e, e.return, O);
      }
      e.flags &= -3;
    }
    n & 4096 && (e.flags &= -4097);
  }
  function s0(e, n, s) {
    (te = e), Yp(e);
  }
  function Yp(e, n, s) {
    for (var a = (e.mode & 1) !== 0; te !== null; ) {
      var d = te,
        p = d.child;
      if (d.tag === 22 && a) {
        var A = d.memoizedState !== null || ks;
        if (!A) {
          var N = d.alternate,
            O = (N !== null && N.memoizedState !== null) || st;
          N = ks;
          var L = st;
          if (((ks = A), (st = O) && !L))
            for (te = d; te !== null; )
              (A = te),
                (O = A.child),
                A.tag === 22 && A.memoizedState !== null
                  ? Jp(d)
                  : O !== null
                  ? ((O.return = A), (te = O))
                  : Jp(d);
          for (; p !== null; ) (te = p), Yp(p), (p = p.sibling);
          (te = d), (ks = N), (st = L);
        }
        $p(e);
      } else
        d.subtreeFlags & 8772 && p !== null
          ? ((p.return = d), (te = p))
          : $p(e);
    }
  }
  function $p(e) {
    for (; te !== null; ) {
      var n = te;
      if (n.flags & 8772) {
        var s = n.alternate;
        try {
          if (n.flags & 8772)
            switch (n.tag) {
              case 0:
              case 11:
              case 15:
                st || Rs(5, n);
                break;
              case 1:
                var a = n.stateNode;
                if (n.flags & 4 && !st)
                  if (s === null) a.componentDidMount();
                  else {
                    var d =
                      n.elementType === n.type
                        ? s.memoizedProps
                        : Ut(n.type, s.memoizedProps);
                    a.componentDidUpdate(
                      d,
                      s.memoizedState,
                      a.__reactInternalSnapshotBeforeUpdate
                    );
                  }
                var p = n.updateQueue;
                p !== null && Zf(n, p, a);
                break;
              case 3:
                var A = n.updateQueue;
                if (A !== null) {
                  if (((s = null), n.child !== null))
                    switch (n.child.tag) {
                      case 5:
                        s = n.child.stateNode;
                        break;
                      case 1:
                        s = n.child.stateNode;
                    }
                  Zf(n, A, s);
                }
                break;
              case 5:
                var N = n.stateNode;
                if (s === null && n.flags & 4) {
                  s = N;
                  var O = n.memoizedProps;
                  switch (n.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      O.autoFocus && s.focus();
                      break;
                    case "img":
                      O.src && (s.src = O.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (n.memoizedState === null) {
                  var L = n.alternate;
                  if (L !== null) {
                    var G = L.memoizedState;
                    if (G !== null) {
                      var V = G.dehydrated;
                      V !== null && Do(V);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(o(163));
            }
          st || (n.flags & 512 && hc(n));
        } catch (H) {
          We(n, n.return, H);
        }
      }
      if (n === e) {
        te = null;
        break;
      }
      if (((s = n.sibling), s !== null)) {
        (s.return = n.return), (te = s);
        break;
      }
      te = n.return;
    }
  }
  function Zp(e) {
    for (; te !== null; ) {
      var n = te;
      if (n === e) {
        te = null;
        break;
      }
      var s = n.sibling;
      if (s !== null) {
        (s.return = n.return), (te = s);
        break;
      }
      te = n.return;
    }
  }
  function Jp(e) {
    for (; te !== null; ) {
      var n = te;
      try {
        switch (n.tag) {
          case 0:
          case 11:
          case 15:
            var s = n.return;
            try {
              Rs(4, n);
            } catch (O) {
              We(n, s, O);
            }
            break;
          case 1:
            var a = n.stateNode;
            if (typeof a.componentDidMount == "function") {
              var d = n.return;
              try {
                a.componentDidMount();
              } catch (O) {
                We(n, d, O);
              }
            }
            var p = n.return;
            try {
              hc(n);
            } catch (O) {
              We(n, p, O);
            }
            break;
          case 5:
            var A = n.return;
            try {
              hc(n);
            } catch (O) {
              We(n, A, O);
            }
        }
      } catch (O) {
        We(n, n.return, O);
      }
      if (n === e) {
        te = null;
        break;
      }
      var N = n.sibling;
      if (N !== null) {
        (N.return = n.return), (te = N);
        break;
      }
      te = n.return;
    }
  }
  var l0 = Math.ceil,
    bs = D.ReactCurrentDispatcher,
    yc = D.ReactCurrentOwner,
    Dt = D.ReactCurrentBatchConfig,
    be = 0,
    qe = null,
    Ge = null,
    tt = 0,
    kt = 0,
    Zr = Ln(0),
    Ze = 0,
    ni = null,
    hr = 0,
    Ns = 0,
    vc = 0,
    ri = null,
    yt = null,
    Ac = 0,
    Jr = 1 / 0,
    xn = null,
    Ps = !1,
    wc = null,
    Qn = null,
    Os = !1,
    Hn = null,
    Is = 0,
    oi = 0,
    xc = null,
    Ts = -1,
    Ds = 0;
  function dt() {
    return be & 6 ? Qe() : Ts !== -1 ? Ts : (Ts = Qe());
  }
  function Gn(e) {
    return e.mode & 1
      ? be & 2 && tt !== 0
        ? tt & -tt
        : Hw.transition !== null
        ? (Ds === 0 && (Ds = Wd()), Ds)
        : ((e = Oe),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Xd(e.type))),
          e)
      : 1;
  }
  function Ht(e, n, s, a) {
    if (50 < oi) throw ((oi = 0), (xc = null), Error(o(185)));
    No(e, s, a),
      (!(be & 2) || e !== qe) &&
        (e === qe && (!(be & 2) && (Ns |= s), Ze === 4 && Vn(e, tt)),
        vt(e, a),
        s === 1 &&
          be === 0 &&
          !(n.mode & 1) &&
          ((Jr = Qe() + 500), ls && Fn()));
  }
  function vt(e, n) {
    var s = e.callbackNode;
    HA(e, n);
    var a = Wi(e, e === qe ? tt : 0);
    if (a === 0)
      s !== null && Fd(s), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((n = a & -a), e.callbackPriority !== n)) {
      if ((s != null && Fd(s), n === 1))
        e.tag === 0 ? Qw(qp.bind(null, e)) : Lf(qp.bind(null, e)),
          Fw(function () {
            !(be & 6) && Fn();
          }),
          (s = null);
      else {
        switch (Qd(a)) {
          case 1:
            s = ea;
            break;
          case 4:
            s = zd;
            break;
          case 16:
            s = _i;
            break;
          case 536870912:
            s = Ud;
            break;
          default:
            s = _i;
        }
        s = sh(s, Xp.bind(null, e));
      }
      (e.callbackPriority = n), (e.callbackNode = s);
    }
  }
  function Xp(e, n) {
    if (((Ts = -1), (Ds = 0), be & 6)) throw Error(o(327));
    var s = e.callbackNode;
    if (Xr() && e.callbackNode !== s) return null;
    var a = Wi(e, e === qe ? tt : 0);
    if (a === 0) return null;
    if (a & 30 || a & e.expiredLanes || n) n = Bs(e, a);
    else {
      n = a;
      var d = be;
      be |= 2;
      var p = eh();
      (qe !== e || tt !== n) && ((xn = null), (Jr = Qe() + 500), gr(e, n));
      do
        try {
          u0();
          break;
        } catch (N) {
          Kp(e, N);
        }
      while (!0);
      Fa(),
        (bs.current = p),
        (be = d),
        Ge !== null ? (n = 0) : ((qe = null), (tt = 0), (n = Ze));
    }
    if (n !== 0) {
      if (
        (n === 2 && ((d = ta(e)), d !== 0 && ((a = d), (n = Sc(e, d)))),
        n === 1)
      )
        throw ((s = ni), gr(e, 0), Vn(e, a), vt(e, Qe()), s);
      if (n === 6) Vn(e, a);
      else {
        if (
          ((d = e.current.alternate),
          !(a & 30) &&
            !a0(d) &&
            ((n = Bs(e, a)),
            n === 2 && ((p = ta(e)), p !== 0 && ((a = p), (n = Sc(e, p)))),
            n === 1))
        )
          throw ((s = ni), gr(e, 0), Vn(e, a), vt(e, Qe()), s);
        switch (((e.finishedWork = d), (e.finishedLanes = a), n)) {
          case 0:
          case 1:
            throw Error(o(345));
          case 2:
            yr(e, yt, xn);
            break;
          case 3:
            if (
              (Vn(e, a),
              (a & 130023424) === a && ((n = Ac + 500 - Qe()), 10 < n))
            ) {
              if (Wi(e, 0) !== 0) break;
              if (((d = e.suspendedLanes), (d & a) !== a)) {
                dt(), (e.pingedLanes |= e.suspendedLanes & d);
                break;
              }
              e.timeoutHandle = Na(yr.bind(null, e, yt, xn), n);
              break;
            }
            yr(e, yt, xn);
            break;
          case 4:
            if ((Vn(e, a), (a & 4194240) === a)) break;
            for (n = e.eventTimes, d = -1; 0 < a; ) {
              var A = 31 - _t(a);
              (p = 1 << A), (A = n[A]), A > d && (d = A), (a &= ~p);
            }
            if (
              ((a = d),
              (a = Qe() - a),
              (a =
                (120 > a
                  ? 120
                  : 480 > a
                  ? 480
                  : 1080 > a
                  ? 1080
                  : 1920 > a
                  ? 1920
                  : 3e3 > a
                  ? 3e3
                  : 4320 > a
                  ? 4320
                  : 1960 * l0(a / 1960)) - a),
              10 < a)
            ) {
              e.timeoutHandle = Na(yr.bind(null, e, yt, xn), a);
              break;
            }
            yr(e, yt, xn);
            break;
          case 5:
            yr(e, yt, xn);
            break;
          default:
            throw Error(o(329));
        }
      }
    }
    return vt(e, Qe()), e.callbackNode === s ? Xp.bind(null, e) : null;
  }
  function Sc(e, n) {
    var s = ri;
    return (
      e.current.memoizedState.isDehydrated && (gr(e, n).flags |= 256),
      (e = Bs(e, n)),
      e !== 2 && ((n = yt), (yt = s), n !== null && Ec(n)),
      e
    );
  }
  function Ec(e) {
    yt === null ? (yt = e) : yt.push.apply(yt, e);
  }
  function a0(e) {
    for (var n = e; ; ) {
      if (n.flags & 16384) {
        var s = n.updateQueue;
        if (s !== null && ((s = s.stores), s !== null))
          for (var a = 0; a < s.length; a++) {
            var d = s[a],
              p = d.getSnapshot;
            d = d.value;
            try {
              if (!Ft(p(), d)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((s = n.child), n.subtreeFlags & 16384 && s !== null))
        (s.return = n), (n = s);
      else {
        if (n === e) break;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === e) return !0;
          n = n.return;
        }
        (n.sibling.return = n.return), (n = n.sibling);
      }
    }
    return !0;
  }
  function Vn(e, n) {
    for (
      n &= ~vc,
        n &= ~Ns,
        e.suspendedLanes |= n,
        e.pingedLanes &= ~n,
        e = e.expirationTimes;
      0 < n;

    ) {
      var s = 31 - _t(n),
        a = 1 << s;
      (e[s] = -1), (n &= ~a);
    }
  }
  function qp(e) {
    if (be & 6) throw Error(o(327));
    Xr();
    var n = Wi(e, 0);
    if (!(n & 1)) return vt(e, Qe()), null;
    var s = Bs(e, n);
    if (e.tag !== 0 && s === 2) {
      var a = ta(e);
      a !== 0 && ((n = a), (s = Sc(e, a)));
    }
    if (s === 1) throw ((s = ni), gr(e, 0), Vn(e, n), vt(e, Qe()), s);
    if (s === 6) throw Error(o(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = n),
      yr(e, yt, xn),
      vt(e, Qe()),
      null
    );
  }
  function Cc(e, n) {
    var s = be;
    be |= 1;
    try {
      return e(n);
    } finally {
      (be = s), be === 0 && ((Jr = Qe() + 500), ls && Fn());
    }
  }
  function mr(e) {
    Hn !== null && Hn.tag === 0 && !(be & 6) && Xr();
    var n = be;
    be |= 1;
    var s = Dt.transition,
      a = Oe;
    try {
      if (((Dt.transition = null), (Oe = 1), e)) return e();
    } finally {
      (Oe = a), (Dt.transition = s), (be = n), !(be & 6) && Fn();
    }
  }
  function kc() {
    (kt = Zr.current), Be(Zr);
  }
  function gr(e, n) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var s = e.timeoutHandle;
    if ((s !== -1 && ((e.timeoutHandle = -1), _w(s)), Ge !== null))
      for (s = Ge.return; s !== null; ) {
        var a = s;
        switch ((Ba(a), a.tag)) {
          case 1:
            (a = a.type.childContextTypes), a != null && is();
            break;
          case 3:
            Vr(), Be(ht), Be(rt), Ya();
            break;
          case 5:
            Ga(a);
            break;
          case 4:
            Vr();
            break;
          case 13:
            Be(Fe);
            break;
          case 19:
            Be(Fe);
            break;
          case 10:
            za(a.type._context);
            break;
          case 22:
          case 23:
            kc();
        }
        s = s.return;
      }
    if (
      ((qe = e),
      (Ge = e = Yn(e.current, null)),
      (tt = kt = n),
      (Ze = 0),
      (ni = null),
      (vc = Ns = hr = 0),
      (yt = ri = null),
      dr !== null)
    ) {
      for (n = 0; n < dr.length; n++)
        if (((s = dr[n]), (a = s.interleaved), a !== null)) {
          s.interleaved = null;
          var d = a.next,
            p = s.pending;
          if (p !== null) {
            var A = p.next;
            (p.next = d), (a.next = A);
          }
          s.pending = a;
        }
      dr = null;
    }
    return e;
  }
  function Kp(e, n) {
    do {
      var s = Ge;
      try {
        if ((Fa(), (ys.current = xs), vs)) {
          for (var a = ze.memoizedState; a !== null; ) {
            var d = a.queue;
            d !== null && (d.pending = null), (a = a.next);
          }
          vs = !1;
        }
        if (
          ((pr = 0),
          (Xe = $e = ze = null),
          (Jo = !1),
          (Xo = 0),
          (yc.current = null),
          s === null || s.return === null)
        ) {
          (Ze = 1), (ni = n), (Ge = null);
          break;
        }
        e: {
          var p = e,
            A = s.return,
            N = s,
            O = n;
          if (
            ((n = tt),
            (N.flags |= 32768),
            O !== null && typeof O == "object" && typeof O.then == "function")
          ) {
            var L = O,
              G = N,
              V = G.tag;
            if (!(G.mode & 1) && (V === 0 || V === 11 || V === 15)) {
              var H = G.alternate;
              H
                ? ((G.updateQueue = H.updateQueue),
                  (G.memoizedState = H.memoizedState),
                  (G.lanes = H.lanes))
                : ((G.updateQueue = null), (G.memoizedState = null));
            }
            var ee = Cp(A);
            if (ee !== null) {
              (ee.flags &= -257),
                kp(ee, A, N, p, n),
                ee.mode & 1 && Ep(p, L, n),
                (n = ee),
                (O = L);
              var re = n.updateQueue;
              if (re === null) {
                var ie = new Set();
                ie.add(O), (n.updateQueue = ie);
              } else re.add(O);
              break e;
            } else {
              if (!(n & 1)) {
                Ep(p, L, n), Rc();
                break e;
              }
              O = Error(o(426));
            }
          } else if (_e && N.mode & 1) {
            var He = Cp(A);
            if (He !== null) {
              !(He.flags & 65536) && (He.flags |= 256),
                kp(He, A, N, p, n),
                La(Yr(O, N));
              break e;
            }
          }
          (p = O = Yr(O, N)),
            Ze !== 4 && (Ze = 2),
            ri === null ? (ri = [p]) : ri.push(p),
            (p = A);
          do {
            switch (p.tag) {
              case 3:
                (p.flags |= 65536), (n &= -n), (p.lanes |= n);
                var j = xp(p, O, n);
                $f(p, j);
                break e;
              case 1:
                N = O;
                var I = p.type,
                  M = p.stateNode;
                if (
                  !(p.flags & 128) &&
                  (typeof I.getDerivedStateFromError == "function" ||
                    (M !== null &&
                      typeof M.componentDidCatch == "function" &&
                      (Qn === null || !Qn.has(M))))
                ) {
                  (p.flags |= 65536), (n &= -n), (p.lanes |= n);
                  var $ = Sp(p, N, n);
                  $f(p, $);
                  break e;
                }
            }
            p = p.return;
          } while (p !== null);
        }
        nh(s);
      } catch (le) {
        (n = le), Ge === s && s !== null && (Ge = s = s.return);
        continue;
      }
      break;
    } while (!0);
  }
  function eh() {
    var e = bs.current;
    return (bs.current = xs), e === null ? xs : e;
  }
  function Rc() {
    (Ze === 0 || Ze === 3 || Ze === 2) && (Ze = 4),
      qe === null || (!(hr & 268435455) && !(Ns & 268435455)) || Vn(qe, tt);
  }
  function Bs(e, n) {
    var s = be;
    be |= 2;
    var a = eh();
    (qe !== e || tt !== n) && ((xn = null), gr(e, n));
    do
      try {
        c0();
        break;
      } catch (d) {
        Kp(e, d);
      }
    while (!0);
    if ((Fa(), (be = s), (bs.current = a), Ge !== null)) throw Error(o(261));
    return (qe = null), (tt = 0), Ze;
  }
  function c0() {
    for (; Ge !== null; ) th(Ge);
  }
  function u0() {
    for (; Ge !== null && !jA(); ) th(Ge);
  }
  function th(e) {
    var n = ih(e.alternate, e, kt);
    (e.memoizedProps = e.pendingProps),
      n === null ? nh(e) : (Ge = n),
      (yc.current = null);
  }
  function nh(e) {
    var n = e;
    do {
      var s = n.alternate;
      if (((e = n.return), n.flags & 32768)) {
        if (((s = r0(s, n)), s !== null)) {
          (s.flags &= 32767), (Ge = s);
          return;
        }
        if (e !== null)
          (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
        else {
          (Ze = 6), (Ge = null);
          return;
        }
      } else if (((s = n0(s, n, kt)), s !== null)) {
        Ge = s;
        return;
      }
      if (((n = n.sibling), n !== null)) {
        Ge = n;
        return;
      }
      Ge = n = e;
    } while (n !== null);
    Ze === 0 && (Ze = 5);
  }
  function yr(e, n, s) {
    var a = Oe,
      d = Dt.transition;
    try {
      (Dt.transition = null), (Oe = 1), d0(e, n, s, a);
    } finally {
      (Dt.transition = d), (Oe = a);
    }
    return null;
  }
  function d0(e, n, s, a) {
    do Xr();
    while (Hn !== null);
    if (be & 6) throw Error(o(327));
    s = e.finishedWork;
    var d = e.finishedLanes;
    if (s === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), s === e.current))
      throw Error(o(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var p = s.lanes | s.childLanes;
    if (
      (GA(e, p),
      e === qe && ((Ge = qe = null), (tt = 0)),
      (!(s.subtreeFlags & 2064) && !(s.flags & 2064)) ||
        Os ||
        ((Os = !0),
        sh(_i, function () {
          return Xr(), null;
        })),
      (p = (s.flags & 15990) !== 0),
      s.subtreeFlags & 15990 || p)
    ) {
      (p = Dt.transition), (Dt.transition = null);
      var A = Oe;
      Oe = 1;
      var N = be;
      (be |= 4),
        (yc.current = null),
        i0(e, s),
        Vp(s, e),
        Iw(Ra),
        (Gi = !!ka),
        (Ra = ka = null),
        (e.current = s),
        s0(s),
        MA(),
        (be = N),
        (Oe = A),
        (Dt.transition = p);
    } else e.current = s;
    if (
      (Os && ((Os = !1), (Hn = e), (Is = d)),
      (p = e.pendingLanes),
      p === 0 && (Qn = null),
      FA(s.stateNode),
      vt(e, Qe()),
      n !== null)
    )
      for (a = e.onRecoverableError, s = 0; s < n.length; s++)
        (d = n[s]), a(d.value, { componentStack: d.stack, digest: d.digest });
    if (Ps) throw ((Ps = !1), (e = wc), (wc = null), e);
    return (
      Is & 1 && e.tag !== 0 && Xr(),
      (p = e.pendingLanes),
      p & 1 ? (e === xc ? oi++ : ((oi = 0), (xc = e))) : (oi = 0),
      Fn(),
      null
    );
  }
  function Xr() {
    if (Hn !== null) {
      var e = Qd(Is),
        n = Dt.transition,
        s = Oe;
      try {
        if (((Dt.transition = null), (Oe = 16 > e ? 16 : e), Hn === null))
          var a = !1;
        else {
          if (((e = Hn), (Hn = null), (Is = 0), be & 6)) throw Error(o(331));
          var d = be;
          for (be |= 4, te = e.current; te !== null; ) {
            var p = te,
              A = p.child;
            if (te.flags & 16) {
              var N = p.deletions;
              if (N !== null) {
                for (var O = 0; O < N.length; O++) {
                  var L = N[O];
                  for (te = L; te !== null; ) {
                    var G = te;
                    switch (G.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ti(8, G, p);
                    }
                    var V = G.child;
                    if (V !== null) (V.return = G), (te = V);
                    else
                      for (; te !== null; ) {
                        G = te;
                        var H = G.sibling,
                          ee = G.return;
                        if ((Up(G), G === L)) {
                          te = null;
                          break;
                        }
                        if (H !== null) {
                          (H.return = ee), (te = H);
                          break;
                        }
                        te = ee;
                      }
                  }
                }
                var re = p.alternate;
                if (re !== null) {
                  var ie = re.child;
                  if (ie !== null) {
                    re.child = null;
                    do {
                      var He = ie.sibling;
                      (ie.sibling = null), (ie = He);
                    } while (ie !== null);
                  }
                }
                te = p;
              }
            }
            if (p.subtreeFlags & 2064 && A !== null) (A.return = p), (te = A);
            else
              e: for (; te !== null; ) {
                if (((p = te), p.flags & 2048))
                  switch (p.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ti(9, p, p.return);
                  }
                var j = p.sibling;
                if (j !== null) {
                  (j.return = p.return), (te = j);
                  break e;
                }
                te = p.return;
              }
          }
          var I = e.current;
          for (te = I; te !== null; ) {
            A = te;
            var M = A.child;
            if (A.subtreeFlags & 2064 && M !== null) (M.return = A), (te = M);
            else
              e: for (A = I; te !== null; ) {
                if (((N = te), N.flags & 2048))
                  try {
                    switch (N.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Rs(9, N);
                    }
                  } catch (le) {
                    We(N, N.return, le);
                  }
                if (N === A) {
                  te = null;
                  break e;
                }
                var $ = N.sibling;
                if ($ !== null) {
                  ($.return = N.return), (te = $);
                  break e;
                }
                te = N.return;
              }
          }
          if (
            ((be = d),
            Fn(),
            Kt && typeof Kt.onPostCommitFiberRoot == "function")
          )
            try {
              Kt.onPostCommitFiberRoot(Fi, e);
            } catch {}
          a = !0;
        }
        return a;
      } finally {
        (Oe = s), (Dt.transition = n);
      }
    }
    return !1;
  }
  function rh(e, n, s) {
    (n = Yr(s, n)),
      (n = xp(e, n, 1)),
      (e = Un(e, n, 1)),
      (n = dt()),
      e !== null && (No(e, 1, n), vt(e, n));
  }
  function We(e, n, s) {
    if (e.tag === 3) rh(e, e, s);
    else
      for (; n !== null; ) {
        if (n.tag === 3) {
          rh(n, e, s);
          break;
        } else if (n.tag === 1) {
          var a = n.stateNode;
          if (
            typeof n.type.getDerivedStateFromError == "function" ||
            (typeof a.componentDidCatch == "function" &&
              (Qn === null || !Qn.has(a)))
          ) {
            (e = Yr(s, e)),
              (e = Sp(n, e, 1)),
              (n = Un(n, e, 1)),
              (e = dt()),
              n !== null && (No(n, 1, e), vt(n, e));
            break;
          }
        }
        n = n.return;
      }
  }
  function f0(e, n, s) {
    var a = e.pingCache;
    a !== null && a.delete(n),
      (n = dt()),
      (e.pingedLanes |= e.suspendedLanes & s),
      qe === e &&
        (tt & s) === s &&
        (Ze === 4 || (Ze === 3 && (tt & 130023424) === tt && 500 > Qe() - Ac)
          ? gr(e, 0)
          : (vc |= s)),
      vt(e, n);
  }
  function oh(e, n) {
    n === 0 &&
      (e.mode & 1
        ? ((n = Ui), (Ui <<= 1), !(Ui & 130023424) && (Ui = 4194304))
        : (n = 1));
    var s = dt();
    (e = vn(e, n)), e !== null && (No(e, n, s), vt(e, s));
  }
  function p0(e) {
    var n = e.memoizedState,
      s = 0;
    n !== null && (s = n.retryLane), oh(e, s);
  }
  function h0(e, n) {
    var s = 0;
    switch (e.tag) {
      case 13:
        var a = e.stateNode,
          d = e.memoizedState;
        d !== null && (s = d.retryLane);
        break;
      case 19:
        a = e.stateNode;
        break;
      default:
        throw Error(o(314));
    }
    a !== null && a.delete(n), oh(e, s);
  }
  var ih;
  ih = function (e, n, s) {
    if (e !== null)
      if (e.memoizedProps !== n.pendingProps || ht.current) gt = !0;
      else {
        if (!(e.lanes & s) && !(n.flags & 128)) return (gt = !1), t0(e, n, s);
        gt = !!(e.flags & 131072);
      }
    else (gt = !1), _e && n.flags & 1048576 && _f(n, cs, n.index);
    switch (((n.lanes = 0), n.tag)) {
      case 2:
        var a = n.type;
        Cs(e, n), (e = n.pendingProps);
        var d = Fr(n, rt.current);
        Gr(n, s), (d = Ja(null, n, a, e, d, s));
        var p = Xa();
        return (
          (n.flags |= 1),
          typeof d == "object" &&
          d !== null &&
          typeof d.render == "function" &&
          d.$$typeof === void 0
            ? ((n.tag = 1),
              (n.memoizedState = null),
              (n.updateQueue = null),
              mt(a) ? ((p = !0), ss(n)) : (p = !1),
              (n.memoizedState =
                d.state !== null && d.state !== void 0 ? d.state : null),
              Qa(n),
              (d.updater = Ss),
              (n.stateNode = d),
              (d._reactInternals = n),
              rc(n, a, e, s),
              (n = lc(null, n, a, !0, p, s)))
            : ((n.tag = 0), _e && p && Da(n), ut(null, n, d, s), (n = n.child)),
          n
        );
      case 16:
        a = n.elementType;
        e: {
          switch (
            (Cs(e, n),
            (e = n.pendingProps),
            (d = a._init),
            (a = d(a._payload)),
            (n.type = a),
            (d = n.tag = g0(a)),
            (e = Ut(a, e)),
            d)
          ) {
            case 0:
              n = sc(null, n, a, e, s);
              break e;
            case 1:
              n = Ip(null, n, a, e, s);
              break e;
            case 11:
              n = Rp(null, n, a, e, s);
              break e;
            case 14:
              n = bp(null, n, a, Ut(a.type, e), s);
              break e;
          }
          throw Error(o(306, a, ""));
        }
        return n;
      case 0:
        return (
          (a = n.type),
          (d = n.pendingProps),
          (d = n.elementType === a ? d : Ut(a, d)),
          sc(e, n, a, d, s)
        );
      case 1:
        return (
          (a = n.type),
          (d = n.pendingProps),
          (d = n.elementType === a ? d : Ut(a, d)),
          Ip(e, n, a, d, s)
        );
      case 3:
        e: {
          if ((Tp(n), e === null)) throw Error(o(387));
          (a = n.pendingProps),
            (p = n.memoizedState),
            (d = p.element),
            Yf(e, n),
            ms(n, a, null, s);
          var A = n.memoizedState;
          if (((a = A.element), p.isDehydrated))
            if (
              ((p = {
                element: a,
                isDehydrated: !1,
                cache: A.cache,
                pendingSuspenseBoundaries: A.pendingSuspenseBoundaries,
                transitions: A.transitions,
              }),
              (n.updateQueue.baseState = p),
              (n.memoizedState = p),
              n.flags & 256)
            ) {
              (d = Yr(Error(o(423)), n)), (n = Dp(e, n, a, s, d));
              break e;
            } else if (a !== d) {
              (d = Yr(Error(o(424)), n)), (n = Dp(e, n, a, s, d));
              break e;
            } else
              for (
                Ct = Mn(n.stateNode.containerInfo.firstChild),
                  Et = n,
                  _e = !0,
                  zt = null,
                  s = Gf(n, null, a, s),
                  n.child = s;
                s;

              )
                (s.flags = (s.flags & -3) | 4096), (s = s.sibling);
          else {
            if ((Wr(), a === d)) {
              n = wn(e, n, s);
              break e;
            }
            ut(e, n, a, s);
          }
          n = n.child;
        }
        return n;
      case 5:
        return (
          Jf(n),
          e === null && Ma(n),
          (a = n.type),
          (d = n.pendingProps),
          (p = e !== null ? e.memoizedProps : null),
          (A = d.children),
          ba(a, d) ? (A = null) : p !== null && ba(a, p) && (n.flags |= 32),
          Op(e, n),
          ut(e, n, A, s),
          n.child
        );
      case 6:
        return e === null && Ma(n), null;
      case 13:
        return Bp(e, n, s);
      case 4:
        return (
          Ha(n, n.stateNode.containerInfo),
          (a = n.pendingProps),
          e === null ? (n.child = Qr(n, null, a, s)) : ut(e, n, a, s),
          n.child
        );
      case 11:
        return (
          (a = n.type),
          (d = n.pendingProps),
          (d = n.elementType === a ? d : Ut(a, d)),
          Rp(e, n, a, d, s)
        );
      case 7:
        return ut(e, n, n.pendingProps, s), n.child;
      case 8:
        return ut(e, n, n.pendingProps.children, s), n.child;
      case 12:
        return ut(e, n, n.pendingProps.children, s), n.child;
      case 10:
        e: {
          if (
            ((a = n.type._context),
            (d = n.pendingProps),
            (p = n.memoizedProps),
            (A = d.value),
            Te(fs, a._currentValue),
            (a._currentValue = A),
            p !== null)
          )
            if (Ft(p.value, A)) {
              if (p.children === d.children && !ht.current) {
                n = wn(e, n, s);
                break e;
              }
            } else
              for (p = n.child, p !== null && (p.return = n); p !== null; ) {
                var N = p.dependencies;
                if (N !== null) {
                  A = p.child;
                  for (var O = N.firstContext; O !== null; ) {
                    if (O.context === a) {
                      if (p.tag === 1) {
                        (O = An(-1, s & -s)), (O.tag = 2);
                        var L = p.updateQueue;
                        if (L !== null) {
                          L = L.shared;
                          var G = L.pending;
                          G === null
                            ? (O.next = O)
                            : ((O.next = G.next), (G.next = O)),
                            (L.pending = O);
                        }
                      }
                      (p.lanes |= s),
                        (O = p.alternate),
                        O !== null && (O.lanes |= s),
                        Ua(p.return, s, n),
                        (N.lanes |= s);
                      break;
                    }
                    O = O.next;
                  }
                } else if (p.tag === 10) A = p.type === n.type ? null : p.child;
                else if (p.tag === 18) {
                  if (((A = p.return), A === null)) throw Error(o(341));
                  (A.lanes |= s),
                    (N = A.alternate),
                    N !== null && (N.lanes |= s),
                    Ua(A, s, n),
                    (A = p.sibling);
                } else A = p.child;
                if (A !== null) A.return = p;
                else
                  for (A = p; A !== null; ) {
                    if (A === n) {
                      A = null;
                      break;
                    }
                    if (((p = A.sibling), p !== null)) {
                      (p.return = A.return), (A = p);
                      break;
                    }
                    A = A.return;
                  }
                p = A;
              }
          ut(e, n, d.children, s), (n = n.child);
        }
        return n;
      case 9:
        return (
          (d = n.type),
          (a = n.pendingProps.children),
          Gr(n, s),
          (d = It(d)),
          (a = a(d)),
          (n.flags |= 1),
          ut(e, n, a, s),
          n.child
        );
      case 14:
        return (
          (a = n.type),
          (d = Ut(a, n.pendingProps)),
          (d = Ut(a.type, d)),
          bp(e, n, a, d, s)
        );
      case 15:
        return Np(e, n, n.type, n.pendingProps, s);
      case 17:
        return (
          (a = n.type),
          (d = n.pendingProps),
          (d = n.elementType === a ? d : Ut(a, d)),
          Cs(e, n),
          (n.tag = 1),
          mt(a) ? ((e = !0), ss(n)) : (e = !1),
          Gr(n, s),
          Ap(n, a, d),
          rc(n, a, d, s),
          lc(null, n, a, !0, e, s)
        );
      case 19:
        return Mp(e, n, s);
      case 22:
        return Pp(e, n, s);
    }
    throw Error(o(156, n.tag));
  };
  function sh(e, n) {
    return _d(e, n);
  }
  function m0(e, n, s, a) {
    (this.tag = e),
      (this.key = s),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = n),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = a),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function Bt(e, n, s, a) {
    return new m0(e, n, s, a);
  }
  function bc(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function g0(e) {
    if (typeof e == "function") return bc(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === X)) return 11;
      if (e === ye) return 14;
    }
    return 2;
  }
  function Yn(e, n) {
    var s = e.alternate;
    return (
      s === null
        ? ((s = Bt(e.tag, n, e.key, e.mode)),
          (s.elementType = e.elementType),
          (s.type = e.type),
          (s.stateNode = e.stateNode),
          (s.alternate = e),
          (e.alternate = s))
        : ((s.pendingProps = n),
          (s.type = e.type),
          (s.flags = 0),
          (s.subtreeFlags = 0),
          (s.deletions = null)),
      (s.flags = e.flags & 14680064),
      (s.childLanes = e.childLanes),
      (s.lanes = e.lanes),
      (s.child = e.child),
      (s.memoizedProps = e.memoizedProps),
      (s.memoizedState = e.memoizedState),
      (s.updateQueue = e.updateQueue),
      (n = e.dependencies),
      (s.dependencies =
        n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }),
      (s.sibling = e.sibling),
      (s.index = e.index),
      (s.ref = e.ref),
      s
    );
  }
  function js(e, n, s, a, d, p) {
    var A = 2;
    if (((a = e), typeof e == "function")) bc(e) && (A = 1);
    else if (typeof e == "string") A = 5;
    else
      e: switch (e) {
        case z:
          return vr(s.children, d, p, n);
        case Y:
          (A = 8), (d |= 8);
          break;
        case Q:
          return (
            (e = Bt(12, s, n, d | 2)), (e.elementType = Q), (e.lanes = p), e
          );
        case q:
          return (e = Bt(13, s, n, d)), (e.elementType = q), (e.lanes = p), e;
        case ae:
          return (e = Bt(19, s, n, d)), (e.elementType = ae), (e.lanes = p), e;
        case ne:
          return Ms(s, d, p, n);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case se:
                A = 10;
                break e;
              case ge:
                A = 9;
                break e;
              case X:
                A = 11;
                break e;
              case ye:
                A = 14;
                break e;
              case oe:
                (A = 16), (a = null);
                break e;
            }
          throw Error(o(130, e == null ? e : typeof e, ""));
      }
    return (
      (n = Bt(A, s, n, d)), (n.elementType = e), (n.type = a), (n.lanes = p), n
    );
  }
  function vr(e, n, s, a) {
    return (e = Bt(7, e, a, n)), (e.lanes = s), e;
  }
  function Ms(e, n, s, a) {
    return (
      (e = Bt(22, e, a, n)),
      (e.elementType = ne),
      (e.lanes = s),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function Nc(e, n, s) {
    return (e = Bt(6, e, null, n)), (e.lanes = s), e;
  }
  function Pc(e, n, s) {
    return (
      (n = Bt(4, e.children !== null ? e.children : [], e.key, n)),
      (n.lanes = s),
      (n.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      n
    );
  }
  function y0(e, n, s, a, d) {
    (this.tag = n),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = na(0)),
      (this.expirationTimes = na(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = na(0)),
      (this.identifierPrefix = a),
      (this.onRecoverableError = d),
      (this.mutableSourceEagerHydrationData = null);
  }
  function Oc(e, n, s, a, d, p, A, N, O) {
    return (
      (e = new y0(e, n, s, N, O)),
      n === 1 ? ((n = 1), p === !0 && (n |= 8)) : (n = 0),
      (p = Bt(3, null, null, n)),
      (e.current = p),
      (p.stateNode = e),
      (p.memoizedState = {
        element: a,
        isDehydrated: s,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      Qa(p),
      e
    );
  }
  function v0(e, n, s) {
    var a =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: W,
      key: a == null ? null : "" + a,
      children: e,
      containerInfo: n,
      implementation: s,
    };
  }
  function lh(e) {
    if (!e) return _n;
    e = e._reactInternals;
    e: {
      if (sr(e) !== e || e.tag !== 1) throw Error(o(170));
      var n = e;
      do {
        switch (n.tag) {
          case 3:
            n = n.stateNode.context;
            break e;
          case 1:
            if (mt(n.type)) {
              n = n.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        n = n.return;
      } while (n !== null);
      throw Error(o(171));
    }
    if (e.tag === 1) {
      var s = e.type;
      if (mt(s)) return jf(e, s, n);
    }
    return n;
  }
  function ah(e, n, s, a, d, p, A, N, O) {
    return (
      (e = Oc(s, a, !0, e, d, p, A, N, O)),
      (e.context = lh(null)),
      (s = e.current),
      (a = dt()),
      (d = Gn(s)),
      (p = An(a, d)),
      (p.callback = n ?? null),
      Un(s, p, d),
      (e.current.lanes = d),
      No(e, d, a),
      vt(e, a),
      e
    );
  }
  function Ls(e, n, s, a) {
    var d = n.current,
      p = dt(),
      A = Gn(d);
    return (
      (s = lh(s)),
      n.context === null ? (n.context = s) : (n.pendingContext = s),
      (n = An(p, A)),
      (n.payload = { element: e }),
      (a = a === void 0 ? null : a),
      a !== null && (n.callback = a),
      (e = Un(d, n, A)),
      e !== null && (Ht(e, d, A, p), hs(e, d, A)),
      A
    );
  }
  function _s(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function ch(e, n) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var s = e.retryLane;
      e.retryLane = s !== 0 && s < n ? s : n;
    }
  }
  function Ic(e, n) {
    ch(e, n), (e = e.alternate) && ch(e, n);
  }
  function A0() {
    return null;
  }
  var uh =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function Tc(e) {
    this._internalRoot = e;
  }
  (Fs.prototype.render = Tc.prototype.render =
    function (e) {
      var n = this._internalRoot;
      if (n === null) throw Error(o(409));
      Ls(e, n, null, null);
    }),
    (Fs.prototype.unmount = Tc.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var n = e.containerInfo;
          mr(function () {
            Ls(null, e, null, null);
          }),
            (n[hn] = null);
        }
      });
  function Fs(e) {
    this._internalRoot = e;
  }
  Fs.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var n = Vd();
      e = { blockedOn: null, target: e, priority: n };
      for (var s = 0; s < Dn.length && n !== 0 && n < Dn[s].priority; s++);
      Dn.splice(s, 0, e), s === 0 && Zd(e);
    }
  };
  function Dc(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function zs(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function dh() {}
  function w0(e, n, s, a, d) {
    if (d) {
      if (typeof a == "function") {
        var p = a;
        a = function () {
          var L = _s(A);
          p.call(L);
        };
      }
      var A = ah(n, a, e, 0, null, !1, !1, "", dh);
      return (
        (e._reactRootContainer = A),
        (e[hn] = A.current),
        Wo(e.nodeType === 8 ? e.parentNode : e),
        mr(),
        A
      );
    }
    for (; (d = e.lastChild); ) e.removeChild(d);
    if (typeof a == "function") {
      var N = a;
      a = function () {
        var L = _s(O);
        N.call(L);
      };
    }
    var O = Oc(e, 0, !1, null, null, !1, !1, "", dh);
    return (
      (e._reactRootContainer = O),
      (e[hn] = O.current),
      Wo(e.nodeType === 8 ? e.parentNode : e),
      mr(function () {
        Ls(n, O, s, a);
      }),
      O
    );
  }
  function Us(e, n, s, a, d) {
    var p = s._reactRootContainer;
    if (p) {
      var A = p;
      if (typeof d == "function") {
        var N = d;
        d = function () {
          var O = _s(A);
          N.call(O);
        };
      }
      Ls(n, A, e, d);
    } else A = w0(s, n, e, d, a);
    return _s(A);
  }
  (Hd = function (e) {
    switch (e.tag) {
      case 3:
        var n = e.stateNode;
        if (n.current.memoizedState.isDehydrated) {
          var s = bo(n.pendingLanes);
          s !== 0 &&
            (ra(n, s | 1), vt(n, Qe()), !(be & 6) && ((Jr = Qe() + 500), Fn()));
        }
        break;
      case 13:
        mr(function () {
          var a = vn(e, 1);
          if (a !== null) {
            var d = dt();
            Ht(a, e, 1, d);
          }
        }),
          Ic(e, 1);
    }
  }),
    (oa = function (e) {
      if (e.tag === 13) {
        var n = vn(e, 134217728);
        if (n !== null) {
          var s = dt();
          Ht(n, e, 134217728, s);
        }
        Ic(e, 134217728);
      }
    }),
    (Gd = function (e) {
      if (e.tag === 13) {
        var n = Gn(e),
          s = vn(e, n);
        if (s !== null) {
          var a = dt();
          Ht(s, e, n, a);
        }
        Ic(e, n);
      }
    }),
    (Vd = function () {
      return Oe;
    }),
    (Yd = function (e, n) {
      var s = Oe;
      try {
        return (Oe = e), n();
      } finally {
        Oe = s;
      }
    }),
    (Jl = function (e, n, s) {
      switch (n) {
        case "input":
          if ((pn(e, s), (n = s.name), s.type === "radio" && n != null)) {
            for (s = e; s.parentNode; ) s = s.parentNode;
            for (
              s = s.querySelectorAll(
                "input[name=" + JSON.stringify("" + n) + '][type="radio"]'
              ),
                n = 0;
              n < s.length;
              n++
            ) {
              var a = s[n];
              if (a !== e && a.form === e.form) {
                var d = os(a);
                if (!d) throw Error(o(90));
                Pe(a), pn(a, d);
              }
            }
          }
          break;
        case "textarea":
          Sd(e, s);
          break;
        case "select":
          (n = s.value), n != null && br(e, !!s.multiple, n, !1);
      }
    }),
    (Id = Cc),
    (Td = mr);
  var x0 = { usingClientEntryPoint: !1, Events: [Go, Lr, os, Pd, Od, Cc] },
    ii = {
      findFiberByHostInstance: lr,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    S0 = {
      bundleType: ii.bundleType,
      version: ii.version,
      rendererPackageName: ii.rendererPackageName,
      rendererConfig: ii.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: D.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return (e = Md(e)), e === null ? null : e.stateNode;
      },
      findFiberByHostInstance: ii.findFiberByHostInstance || A0,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ws = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ws.isDisabled && Ws.supportsFiber)
      try {
        (Fi = Ws.inject(S0)), (Kt = Ws);
      } catch {}
  }
  return (
    (At.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = x0),
    (At.createPortal = function (e, n) {
      var s =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Dc(n)) throw Error(o(200));
      return v0(e, n, null, s);
    }),
    (At.createRoot = function (e, n) {
      if (!Dc(e)) throw Error(o(299));
      var s = !1,
        a = "",
        d = uh;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (s = !0),
          n.identifierPrefix !== void 0 && (a = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (d = n.onRecoverableError)),
        (n = Oc(e, 1, !1, null, null, s, !1, a, d)),
        (e[hn] = n.current),
        Wo(e.nodeType === 8 ? e.parentNode : e),
        new Tc(n)
      );
    }),
    (At.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var n = e._reactInternals;
      if (n === void 0)
        throw typeof e.render == "function"
          ? Error(o(188))
          : ((e = Object.keys(e).join(",")), Error(o(268, e)));
      return (e = Md(n)), (e = e === null ? null : e.stateNode), e;
    }),
    (At.flushSync = function (e) {
      return mr(e);
    }),
    (At.hydrate = function (e, n, s) {
      if (!zs(n)) throw Error(o(200));
      return Us(null, e, n, !0, s);
    }),
    (At.hydrateRoot = function (e, n, s) {
      if (!Dc(e)) throw Error(o(405));
      var a = (s != null && s.hydratedSources) || null,
        d = !1,
        p = "",
        A = uh;
      if (
        (s != null &&
          (s.unstable_strictMode === !0 && (d = !0),
          s.identifierPrefix !== void 0 && (p = s.identifierPrefix),
          s.onRecoverableError !== void 0 && (A = s.onRecoverableError)),
        (n = ah(n, null, e, 1, s ?? null, d, !1, p, A)),
        (e[hn] = n.current),
        Wo(e),
        a)
      )
        for (e = 0; e < a.length; e++)
          (s = a[e]),
            (d = s._getVersion),
            (d = d(s._source)),
            n.mutableSourceEagerHydrationData == null
              ? (n.mutableSourceEagerHydrationData = [s, d])
              : n.mutableSourceEagerHydrationData.push(s, d);
      return new Fs(n);
    }),
    (At.render = function (e, n, s) {
      if (!zs(n)) throw Error(o(200));
      return Us(null, e, n, !1, s);
    }),
    (At.unmountComponentAtNode = function (e) {
      if (!zs(e)) throw Error(o(40));
      return e._reactRootContainer
        ? (mr(function () {
            Us(null, null, e, !1, function () {
              (e._reactRootContainer = null), (e[hn] = null);
            });
          }),
          !0)
        : !1;
    }),
    (At.unstable_batchedUpdates = Cc),
    (At.unstable_renderSubtreeIntoContainer = function (e, n, s, a) {
      if (!zs(s)) throw Error(o(200));
      if (e == null || e._reactInternals === void 0) throw Error(o(38));
      return Us(e, n, s, !1, a);
    }),
    (At.version = "18.3.1-next-f1338f8080-20240426"),
    At
  );
}
var Ah;
function Nm() {
  if (Ah) return Mc.exports;
  Ah = 1;
  function t() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (r) {
        console.error(r);
      }
  }
  return t(), (Mc.exports = I0()), Mc.exports;
}
var wh;
function T0() {
  if (wh) return Qs;
  wh = 1;
  var t = Nm();
  return (Qs.createRoot = t.createRoot), (Qs.hydrateRoot = t.hydrateRoot), Qs;
}
var D0 = T0(),
  li = {},
  xh;
function B0() {
  if (xh) return li;
  (xh = 1),
    Object.defineProperty(li, "__esModule", { value: !0 }),
    (li.parse = u),
    (li.serialize = h);
  const t = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
    r = /^[\u0021-\u003A\u003C-\u007E]*$/,
    o =
      /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
    i = /^[\u0020-\u003A\u003D-\u007E]*$/,
    l = Object.prototype.toString,
    c = (() => {
      const E = function () {};
      return (E.prototype = Object.create(null)), E;
    })();
  function u(E, b) {
    const C = new c(),
      w = E.length;
    if (w < 2) return C;
    const S = (b == null ? void 0 : b.decode) || y;
    let R = 0;
    do {
      const k = E.indexOf("=", R);
      if (k === -1) break;
      const P = E.indexOf(";", R),
        D = P === -1 ? w : P;
      if (k > D) {
        R = E.lastIndexOf(";", k - 1) + 1;
        continue;
      }
      const B = f(E, R, k),
        W = m(E, k, B),
        z = E.slice(B, W);
      if (C[z] === void 0) {
        let Y = f(E, k + 1, D),
          Q = m(E, D, Y);
        const se = S(E.slice(Y, Q));
        C[z] = se;
      }
      R = D + 1;
    } while (R < w);
    return C;
  }
  function f(E, b, C) {
    do {
      const w = E.charCodeAt(b);
      if (w !== 32 && w !== 9) return b;
    } while (++b < C);
    return C;
  }
  function m(E, b, C) {
    for (; b > C; ) {
      const w = E.charCodeAt(--b);
      if (w !== 32 && w !== 9) return b + 1;
    }
    return C;
  }
  function h(E, b, C) {
    const w = (C == null ? void 0 : C.encode) || encodeURIComponent;
    if (!t.test(E)) throw new TypeError(`argument name is invalid: ${E}`);
    const S = w(b);
    if (!r.test(S)) throw new TypeError(`argument val is invalid: ${b}`);
    let R = E + "=" + S;
    if (!C) return R;
    if (C.maxAge !== void 0) {
      if (!Number.isInteger(C.maxAge))
        throw new TypeError(`option maxAge is invalid: ${C.maxAge}`);
      R += "; Max-Age=" + C.maxAge;
    }
    if (C.domain) {
      if (!o.test(C.domain))
        throw new TypeError(`option domain is invalid: ${C.domain}`);
      R += "; Domain=" + C.domain;
    }
    if (C.path) {
      if (!i.test(C.path))
        throw new TypeError(`option path is invalid: ${C.path}`);
      R += "; Path=" + C.path;
    }
    if (C.expires) {
      if (!x(C.expires) || !Number.isFinite(C.expires.valueOf()))
        throw new TypeError(`option expires is invalid: ${C.expires}`);
      R += "; Expires=" + C.expires.toUTCString();
    }
    if (
      (C.httpOnly && (R += "; HttpOnly"),
      C.secure && (R += "; Secure"),
      C.partitioned && (R += "; Partitioned"),
      C.priority)
    )
      switch (
        typeof C.priority == "string" ? C.priority.toLowerCase() : void 0
      ) {
        case "low":
          R += "; Priority=Low";
          break;
        case "medium":
          R += "; Priority=Medium";
          break;
        case "high":
          R += "; Priority=High";
          break;
        default:
          throw new TypeError(`option priority is invalid: ${C.priority}`);
      }
    if (C.sameSite)
      switch (
        typeof C.sameSite == "string" ? C.sameSite.toLowerCase() : C.sameSite
      ) {
        case !0:
        case "strict":
          R += "; SameSite=Strict";
          break;
        case "lax":
          R += "; SameSite=Lax";
          break;
        case "none":
          R += "; SameSite=None";
          break;
        default:
          throw new TypeError(`option sameSite is invalid: ${C.sameSite}`);
      }
    return R;
  }
  function y(E) {
    if (E.indexOf("%") === -1) return E;
    try {
      return decodeURIComponent(E);
    } catch {
      return E;
    }
  }
  function x(E) {
    return l.call(E) === "[object Date]";
  }
  return li;
}
B0();
/**
 * react-router v7.0.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var Sh = "popstate";
function j0(t = {}) {
  function r(i, l) {
    let { pathname: c, search: u, hash: f } = i.location;
    return au(
      "",
      { pathname: c, search: u, hash: f },
      (l.state && l.state.usr) || null,
      (l.state && l.state.key) || "default"
    );
  }
  function o(i, l) {
    return typeof l == "string" ? l : yi(l);
  }
  return L0(r, o, null, t);
}
function Ue(t, r) {
  if (t === !1 || t === null || typeof t > "u") throw new Error(r);
}
function ln(t, r) {
  if (!t) {
    typeof console < "u" && console.warn(r);
    try {
      throw new Error(r);
    } catch {}
  }
}
function M0() {
  return Math.random().toString(36).substring(2, 10);
}
function Eh(t, r) {
  return { usr: t.state, key: t.key, idx: r };
}
function au(t, r, o = null, i) {
  return {
    pathname: typeof t == "string" ? t : t.pathname,
    search: "",
    hash: "",
    ...(typeof r == "string" ? uo(r) : r),
    state: o,
    key: (r && r.key) || i || M0(),
  };
}
function yi({ pathname: t = "/", search: r = "", hash: o = "" }) {
  return (
    r && r !== "?" && (t += r.charAt(0) === "?" ? r : "?" + r),
    o && o !== "#" && (t += o.charAt(0) === "#" ? o : "#" + o),
    t
  );
}
function uo(t) {
  let r = {};
  if (t) {
    let o = t.indexOf("#");
    o >= 0 && ((r.hash = t.substring(o)), (t = t.substring(0, o)));
    let i = t.indexOf("?");
    i >= 0 && ((r.search = t.substring(i)), (t = t.substring(0, i))),
      t && (r.pathname = t);
  }
  return r;
}
function L0(t, r, o, i = {}) {
  let { window: l = document.defaultView, v5Compat: c = !1 } = i,
    u = l.history,
    f = "POP",
    m = null,
    h = y();
  h == null && ((h = 0), u.replaceState({ ...u.state, idx: h }, ""));
  function y() {
    return (u.state || { idx: null }).idx;
  }
  function x() {
    f = "POP";
    let S = y(),
      R = S == null ? null : S - h;
    (h = S), m && m({ action: f, location: w.location, delta: R });
  }
  function E(S, R) {
    f = "PUSH";
    let k = au(w.location, S, R);
    h = y() + 1;
    let P = Eh(k, h),
      D = w.createHref(k);
    try {
      u.pushState(P, "", D);
    } catch (B) {
      if (B instanceof DOMException && B.name === "DataCloneError") throw B;
      l.location.assign(D);
    }
    c && m && m({ action: f, location: w.location, delta: 1 });
  }
  function b(S, R) {
    f = "REPLACE";
    let k = au(w.location, S, R);
    h = y();
    let P = Eh(k, h),
      D = w.createHref(k);
    u.replaceState(P, "", D),
      c && m && m({ action: f, location: w.location, delta: 0 });
  }
  function C(S) {
    let R = l.location.origin !== "null" ? l.location.origin : l.location.href,
      k = typeof S == "string" ? S : yi(S);
    return (
      (k = k.replace(/ $/, "%20")),
      Ue(
        R,
        `No window.location.(origin|href) available to create URL for href: ${k}`
      ),
      new URL(k, R)
    );
  }
  let w = {
    get action() {
      return f;
    },
    get location() {
      return t(l, u);
    },
    listen(S) {
      if (m) throw new Error("A history only accepts one active listener");
      return (
        l.addEventListener(Sh, x),
        (m = S),
        () => {
          l.removeEventListener(Sh, x), (m = null);
        }
      );
    },
    createHref(S) {
      return r(l, S);
    },
    createURL: C,
    encodeLocation(S) {
      let R = C(S);
      return { pathname: R.pathname, search: R.search, hash: R.hash };
    },
    push: E,
    replace: b,
    go(S) {
      return u.go(S);
    },
  };
  return w;
}
function Pm(t, r, o = "/") {
  return _0(t, r, o, !1);
}
function _0(t, r, o, i) {
  let l = typeof r == "string" ? uo(r) : r,
    c = Kn(l.pathname || "/", o);
  if (c == null) return null;
  let u = Om(t);
  F0(u);
  let f = null;
  for (let m = 0; f == null && m < u.length; ++m) {
    let h = J0(c);
    f = $0(u[m], h, i);
  }
  return f;
}
function Om(t, r = [], o = [], i = "") {
  let l = (c, u, f) => {
    let m = {
      relativePath: f === void 0 ? c.path || "" : f,
      caseSensitive: c.caseSensitive === !0,
      childrenIndex: u,
      route: c,
    };
    m.relativePath.startsWith("/") &&
      (Ue(
        m.relativePath.startsWith(i),
        `Absolute route path "${m.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ),
      (m.relativePath = m.relativePath.slice(i.length)));
    let h = En([i, m.relativePath]),
      y = o.concat(m);
    c.children &&
      c.children.length > 0 &&
      (Ue(
        c.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${h}".`
      ),
      Om(c.children, r, y, h)),
      !(c.path == null && !c.index) &&
        r.push({ path: h, score: V0(h, c.index), routesMeta: y });
  };
  return (
    t.forEach((c, u) => {
      var f;
      if (c.path === "" || !((f = c.path) != null && f.includes("?"))) l(c, u);
      else for (let m of Im(c.path)) l(c, u, m);
    }),
    r
  );
}
function Im(t) {
  let r = t.split("/");
  if (r.length === 0) return [];
  let [o, ...i] = r,
    l = o.endsWith("?"),
    c = o.replace(/\?$/, "");
  if (i.length === 0) return l ? [c, ""] : [c];
  let u = Im(i.join("/")),
    f = [];
  return (
    f.push(...u.map((m) => (m === "" ? c : [c, m].join("/")))),
    l && f.push(...u),
    f.map((m) => (t.startsWith("/") && m === "" ? "/" : m))
  );
}
function F0(t) {
  t.sort((r, o) =>
    r.score !== o.score
      ? o.score - r.score
      : Y0(
          r.routesMeta.map((i) => i.childrenIndex),
          o.routesMeta.map((i) => i.childrenIndex)
        )
  );
}
var z0 = /^:[\w-]+$/,
  U0 = 3,
  W0 = 2,
  Q0 = 1,
  H0 = 10,
  G0 = -2,
  Ch = (t) => t === "*";
function V0(t, r) {
  let o = t.split("/"),
    i = o.length;
  return (
    o.some(Ch) && (i += G0),
    r && (i += W0),
    o
      .filter((l) => !Ch(l))
      .reduce((l, c) => l + (z0.test(c) ? U0 : c === "" ? Q0 : H0), i)
  );
}
function Y0(t, r) {
  return t.length === r.length && t.slice(0, -1).every((i, l) => i === r[l])
    ? t[t.length - 1] - r[r.length - 1]
    : 0;
}
function $0(t, r, o = !1) {
  let { routesMeta: i } = t,
    l = {},
    c = "/",
    u = [];
  for (let f = 0; f < i.length; ++f) {
    let m = i[f],
      h = f === i.length - 1,
      y = c === "/" ? r : r.slice(c.length) || "/",
      x = fl(
        { path: m.relativePath, caseSensitive: m.caseSensitive, end: h },
        y
      ),
      E = m.route;
    if (
      (!x &&
        h &&
        o &&
        !i[i.length - 1].route.index &&
        (x = fl(
          { path: m.relativePath, caseSensitive: m.caseSensitive, end: !1 },
          y
        )),
      !x)
    )
      return null;
    Object.assign(l, x.params),
      u.push({
        params: l,
        pathname: En([c, x.pathname]),
        pathnameBase: ex(En([c, x.pathnameBase])),
        route: E,
      }),
      x.pathnameBase !== "/" && (c = En([c, x.pathnameBase]));
  }
  return u;
}
function fl(t, r) {
  typeof t == "string" && (t = { path: t, caseSensitive: !1, end: !0 });
  let [o, i] = Z0(t.path, t.caseSensitive, t.end),
    l = r.match(o);
  if (!l) return null;
  let c = l[0],
    u = c.replace(/(.)\/+$/, "$1"),
    f = l.slice(1);
  return {
    params: i.reduce((h, { paramName: y, isOptional: x }, E) => {
      if (y === "*") {
        let C = f[E] || "";
        u = c.slice(0, c.length - C.length).replace(/(.)\/+$/, "$1");
      }
      const b = f[E];
      return (
        x && !b ? (h[y] = void 0) : (h[y] = (b || "").replace(/%2F/g, "/")), h
      );
    }, {}),
    pathname: c,
    pathnameBase: u,
    pattern: t,
  };
}
function Z0(t, r = !1, o = !0) {
  ln(
    t === "*" || !t.endsWith("*") || t.endsWith("/*"),
    `Route path "${t}" will be treated as if it were "${t.replace(
      /\*$/,
      "/*"
    )}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(
      /\*$/,
      "/*"
    )}".`
  );
  let i = [],
    l =
      "^" +
      t
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (u, f, m) => (
            i.push({ paramName: f, isOptional: m != null }),
            m ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    t.endsWith("*")
      ? (i.push({ paramName: "*" }),
        (l += t === "*" || t === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : o
      ? (l += "\\/*$")
      : t !== "" && t !== "/" && (l += "(?:(?=\\/|$))"),
    [new RegExp(l, r ? void 0 : "i"), i]
  );
}
function J0(t) {
  try {
    return t
      .split("/")
      .map((r) => decodeURIComponent(r).replace(/\//g, "%2F"))
      .join("/");
  } catch (r) {
    return (
      ln(
        !1,
        `The URL path "${t}" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`
      ),
      t
    );
  }
}
function Kn(t, r) {
  if (r === "/") return t;
  if (!t.toLowerCase().startsWith(r.toLowerCase())) return null;
  let o = r.endsWith("/") ? r.length - 1 : r.length,
    i = t.charAt(o);
  return i && i !== "/" ? null : t.slice(o) || "/";
}
function X0(t, r = "/") {
  let {
    pathname: o,
    search: i = "",
    hash: l = "",
  } = typeof t == "string" ? uo(t) : t;
  return {
    pathname: o ? (o.startsWith("/") ? o : q0(o, r)) : r,
    search: tx(i),
    hash: nx(l),
  };
}
function q0(t, r) {
  let o = r.replace(/\/+$/, "").split("/");
  return (
    t.split("/").forEach((l) => {
      l === ".." ? o.length > 1 && o.pop() : l !== "." && o.push(l);
    }),
    o.length > 1 ? o.join("/") : "/"
  );
}
function Fc(t, r, o, i) {
  return `Cannot include a '${t}' character in a manually specified \`to.${r}\` field [${JSON.stringify(
    i
  )}].  Please separate it out to the \`to.${o}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function K0(t) {
  return t.filter(
    (r, o) => o === 0 || (r.route.path && r.route.path.length > 0)
  );
}
function Tm(t) {
  let r = K0(t);
  return r.map((o, i) => (i === r.length - 1 ? o.pathname : o.pathnameBase));
}
function Dm(t, r, o, i = !1) {
  let l;
  typeof t == "string"
    ? (l = uo(t))
    : ((l = { ...t }),
      Ue(
        !l.pathname || !l.pathname.includes("?"),
        Fc("?", "pathname", "search", l)
      ),
      Ue(
        !l.pathname || !l.pathname.includes("#"),
        Fc("#", "pathname", "hash", l)
      ),
      Ue(!l.search || !l.search.includes("#"), Fc("#", "search", "hash", l)));
  let c = t === "" || l.pathname === "",
    u = c ? "/" : l.pathname,
    f;
  if (u == null) f = o;
  else {
    let x = r.length - 1;
    if (!i && u.startsWith("..")) {
      let E = u.split("/");
      for (; E[0] === ".."; ) E.shift(), (x -= 1);
      l.pathname = E.join("/");
    }
    f = x >= 0 ? r[x] : "/";
  }
  let m = X0(l, f),
    h = u && u !== "/" && u.endsWith("/"),
    y = (c || u === ".") && o.endsWith("/");
  return !m.pathname.endsWith("/") && (h || y) && (m.pathname += "/"), m;
}
var En = (t) => t.join("/").replace(/\/\/+/g, "/"),
  ex = (t) => t.replace(/\/+$/, "").replace(/^\/*/, "/"),
  tx = (t) => (!t || t === "?" ? "" : t.startsWith("?") ? t : "?" + t),
  nx = (t) => (!t || t === "#" ? "" : t.startsWith("#") ? t : "#" + t);
function rx(t) {
  return (
    t != null &&
    typeof t.status == "number" &&
    typeof t.statusText == "string" &&
    typeof t.internal == "boolean" &&
    "data" in t
  );
}
var Bm = ["POST", "PUT", "PATCH", "DELETE"];
new Set(Bm);
var ox = ["GET", ...Bm];
new Set(ox);
var fo = g.createContext(null);
fo.displayName = "DataRouter";
var Sl = g.createContext(null);
Sl.displayName = "DataRouterState";
var jm = g.createContext({ isTransitioning: !1 });
jm.displayName = "ViewTransition";
var ix = g.createContext(new Map());
ix.displayName = "Fetchers";
var sx = g.createContext(null);
sx.displayName = "Await";
var un = g.createContext(null);
un.displayName = "Navigation";
var xi = g.createContext(null);
xi.displayName = "Location";
var dn = g.createContext({ outlet: null, matches: [], isDataRoute: !1 });
dn.displayName = "Route";
var Uu = g.createContext(null);
Uu.displayName = "RouteError";
function lx(t, { relative: r } = {}) {
  Ue(
    Si(),
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: o, navigator: i } = g.useContext(un),
    { hash: l, pathname: c, search: u } = Ci(t, { relative: r }),
    f = c;
  return (
    o !== "/" && (f = c === "/" ? o : En([o, c])),
    i.createHref({ pathname: f, search: u, hash: l })
  );
}
function Si() {
  return g.useContext(xi) != null;
}
function kr() {
  return (
    Ue(
      Si(),
      "useLocation() may be used only in the context of a <Router> component."
    ),
    g.useContext(xi).location
  );
}
var Mm =
  "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function Lm(t) {
  g.useContext(un).static || g.useLayoutEffect(t);
}
function Ei() {
  let { isDataRoute: t } = g.useContext(dn);
  return t ? wx() : ax();
}
function ax() {
  Ue(
    Si(),
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let t = g.useContext(fo),
    { basename: r, navigator: o } = g.useContext(un),
    { matches: i } = g.useContext(dn),
    { pathname: l } = kr(),
    c = JSON.stringify(Tm(i)),
    u = g.useRef(!1);
  return (
    Lm(() => {
      u.current = !0;
    }),
    g.useCallback(
      (m, h = {}) => {
        if ((ln(u.current, Mm), !u.current)) return;
        if (typeof m == "number") {
          o.go(m);
          return;
        }
        let y = Dm(m, JSON.parse(c), l, h.relative === "path");
        t == null &&
          r !== "/" &&
          (y.pathname = y.pathname === "/" ? r : En([r, y.pathname])),
          (h.replace ? o.replace : o.push)(y, h.state, h);
      },
      [r, o, c, l, t]
    )
  );
}
g.createContext(null);
function _m() {
  let { matches: t } = g.useContext(dn),
    r = t[t.length - 1];
  return r ? r.params : {};
}
function Ci(t, { relative: r } = {}) {
  let { matches: o } = g.useContext(dn),
    { pathname: i } = kr(),
    l = JSON.stringify(Tm(o));
  return g.useMemo(() => Dm(t, JSON.parse(l), i, r === "path"), [t, l, i, r]);
}
function cx(t, r) {
  return Fm(t, r);
}
function Fm(t, r, o, i) {
  var R;
  Ue(
    Si(),
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: l } = g.useContext(un),
    { matches: c } = g.useContext(dn),
    u = c[c.length - 1],
    f = u ? u.params : {},
    m = u ? u.pathname : "/",
    h = u ? u.pathnameBase : "/",
    y = u && u.route;
  {
    let k = (y && y.path) || "";
    zm(
      m,
      !y || k.endsWith("*") || k.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${k}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${k}"> to <Route path="${
        k === "/" ? "*" : `${k}/*`
      }">.`
    );
  }
  let x = kr(),
    E;
  if (r) {
    let k = typeof r == "string" ? uo(r) : r;
    Ue(
      h === "/" || ((R = k.pathname) == null ? void 0 : R.startsWith(h)),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${h}" but pathname "${k.pathname}" was given in the \`location\` prop.`
    ),
      (E = k);
  } else E = x;
  let b = E.pathname || "/",
    C = b;
  if (h !== "/") {
    let k = h.replace(/^\//, "").split("/");
    C = "/" + b.replace(/^\//, "").split("/").slice(k.length).join("/");
  }
  let w = Pm(t, { pathname: C });
  ln(
    y || w != null,
    `No routes matched location "${E.pathname}${E.search}${E.hash}" `
  ),
    ln(
      w == null ||
        w[w.length - 1].route.element !== void 0 ||
        w[w.length - 1].route.Component !== void 0 ||
        w[w.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${E.pathname}${E.search}${E.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
    );
  let S = hx(
    w &&
      w.map((k) =>
        Object.assign({}, k, {
          params: Object.assign({}, f, k.params),
          pathname: En([
            h,
            l.encodeLocation
              ? l.encodeLocation(k.pathname).pathname
              : k.pathname,
          ]),
          pathnameBase:
            k.pathnameBase === "/"
              ? h
              : En([
                  h,
                  l.encodeLocation
                    ? l.encodeLocation(k.pathnameBase).pathname
                    : k.pathnameBase,
                ]),
        })
      ),
    c,
    o,
    i
  );
  return r && S
    ? g.createElement(
        xi.Provider,
        {
          value: {
            location: {
              pathname: "/",
              search: "",
              hash: "",
              state: null,
              key: "default",
              ...E,
            },
            navigationType: "POP",
          },
        },
        S
      )
    : S;
}
function ux() {
  let t = Ax(),
    r = rx(t)
      ? `${t.status} ${t.statusText}`
      : t instanceof Error
      ? t.message
      : JSON.stringify(t),
    o = t instanceof Error ? t.stack : null,
    i = "rgba(200,200,200, 0.5)",
    l = { padding: "0.5rem", backgroundColor: i },
    c = { padding: "2px 4px", backgroundColor: i },
    u = null;
  return (
    console.error("Error handled by React Router default ErrorBoundary:", t),
    (u = g.createElement(
      g.Fragment,
      null,
      g.createElement("p", null, "💿 Hey developer 👋"),
      g.createElement(
        "p",
        null,
        "You can provide a way better UX than this when your app throws errors by providing your own ",
        g.createElement("code", { style: c }, "ErrorBoundary"),
        " or",
        " ",
        g.createElement("code", { style: c }, "errorElement"),
        " prop on your route."
      )
    )),
    g.createElement(
      g.Fragment,
      null,
      g.createElement("h2", null, "Unexpected Application Error!"),
      g.createElement("h3", { style: { fontStyle: "italic" } }, r),
      o ? g.createElement("pre", { style: l }, o) : null,
      u
    )
  );
}
var dx = g.createElement(ux, null),
  fx = class extends g.Component {
    constructor(t) {
      super(t),
        (this.state = {
          location: t.location,
          revalidation: t.revalidation,
          error: t.error,
        });
    }
    static getDerivedStateFromError(t) {
      return { error: t };
    }
    static getDerivedStateFromProps(t, r) {
      return r.location !== t.location ||
        (r.revalidation !== "idle" && t.revalidation === "idle")
        ? { error: t.error, location: t.location, revalidation: t.revalidation }
        : {
            error: t.error !== void 0 ? t.error : r.error,
            location: r.location,
            revalidation: t.revalidation || r.revalidation,
          };
    }
    componentDidCatch(t, r) {
      console.error(
        "React Router caught the following error during render",
        t,
        r
      );
    }
    render() {
      return this.state.error !== void 0
        ? g.createElement(
            dn.Provider,
            { value: this.props.routeContext },
            g.createElement(Uu.Provider, {
              value: this.state.error,
              children: this.props.component,
            })
          )
        : this.props.children;
    }
  };
function px({ routeContext: t, match: r, children: o }) {
  let i = g.useContext(fo);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (r.route.errorElement || r.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = r.route.id),
    g.createElement(dn.Provider, { value: t }, o)
  );
}
function hx(t, r = [], o = null, i = null) {
  if (t == null) {
    if (!o) return null;
    if (o.errors) t = o.matches;
    else if (r.length === 0 && !o.initialized && o.matches.length > 0)
      t = o.matches;
    else return null;
  }
  let l = t,
    c = o == null ? void 0 : o.errors;
  if (c != null) {
    let m = l.findIndex(
      (h) => h.route.id && (c == null ? void 0 : c[h.route.id]) !== void 0
    );
    Ue(
      m >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        c
      ).join(",")}`
    ),
      (l = l.slice(0, Math.min(l.length, m + 1)));
  }
  let u = !1,
    f = -1;
  if (o)
    for (let m = 0; m < l.length; m++) {
      let h = l[m];
      if (
        ((h.route.HydrateFallback || h.route.hydrateFallbackElement) && (f = m),
        h.route.id)
      ) {
        let { loaderData: y, errors: x } = o,
          E =
            h.route.loader &&
            !y.hasOwnProperty(h.route.id) &&
            (!x || x[h.route.id] === void 0);
        if (h.route.lazy || E) {
          (u = !0), f >= 0 ? (l = l.slice(0, f + 1)) : (l = [l[0]]);
          break;
        }
      }
    }
  return l.reduceRight((m, h, y) => {
    let x,
      E = !1,
      b = null,
      C = null;
    o &&
      ((x = c && h.route.id ? c[h.route.id] : void 0),
      (b = h.route.errorElement || dx),
      u &&
        (f < 0 && y === 0
          ? (zm(
              "route-fallback",
              !1,
              "No `HydrateFallback` element provided to render during initial hydration"
            ),
            (E = !0),
            (C = null))
          : f === y &&
            ((E = !0), (C = h.route.hydrateFallbackElement || null))));
    let w = r.concat(l.slice(0, y + 1)),
      S = () => {
        let R;
        return (
          x
            ? (R = b)
            : E
            ? (R = C)
            : h.route.Component
            ? (R = g.createElement(h.route.Component, null))
            : h.route.element
            ? (R = h.route.element)
            : (R = m),
          g.createElement(px, {
            match: h,
            routeContext: { outlet: m, matches: w, isDataRoute: o != null },
            children: R,
          })
        );
      };
    return o && (h.route.ErrorBoundary || h.route.errorElement || y === 0)
      ? g.createElement(fx, {
          location: o.location,
          revalidation: o.revalidation,
          component: b,
          error: x,
          children: S(),
          routeContext: { outlet: null, matches: w, isDataRoute: !0 },
        })
      : S();
  }, null);
}
function Wu(t) {
  return `${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function mx(t) {
  let r = g.useContext(fo);
  return Ue(r, Wu(t)), r;
}
function gx(t) {
  let r = g.useContext(Sl);
  return Ue(r, Wu(t)), r;
}
function yx(t) {
  let r = g.useContext(dn);
  return Ue(r, Wu(t)), r;
}
function Qu(t) {
  let r = yx(t),
    o = r.matches[r.matches.length - 1];
  return (
    Ue(
      o.route.id,
      `${t} can only be used on routes that contain a unique "id"`
    ),
    o.route.id
  );
}
function vx() {
  return Qu("useRouteId");
}
function Ax() {
  var i;
  let t = g.useContext(Uu),
    r = gx("useRouteError"),
    o = Qu("useRouteError");
  return t !== void 0 ? t : (i = r.errors) == null ? void 0 : i[o];
}
function wx() {
  let { router: t } = mx("useNavigate"),
    r = Qu("useNavigate"),
    o = g.useRef(!1);
  return (
    Lm(() => {
      o.current = !0;
    }),
    g.useCallback(
      async (l, c = {}) => {
        ln(o.current, Mm),
          o.current &&
            (typeof l == "number"
              ? t.navigate(l)
              : await t.navigate(l, { fromRouteId: r, ...c }));
      },
      [t, r]
    )
  );
}
var kh = {};
function zm(t, r, o) {
  !r && !kh[t] && ((kh[t] = !0), ln(!1, o));
}
g.memo(xx);
function xx({ routes: t, future: r, state: o }) {
  return Fm(t, void 0, o, r);
}
function cu(t) {
  Ue(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>."
  );
}
function Sx({
  basename: t = "/",
  children: r = null,
  location: o,
  navigationType: i = "POP",
  navigator: l,
  static: c = !1,
}) {
  Ue(
    !Si(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let u = t.replace(/^\/*/, "/"),
    f = g.useMemo(
      () => ({ basename: u, navigator: l, static: c, future: {} }),
      [u, l, c]
    );
  typeof o == "string" && (o = uo(o));
  let {
      pathname: m = "/",
      search: h = "",
      hash: y = "",
      state: x = null,
      key: E = "default",
    } = o,
    b = g.useMemo(() => {
      let C = Kn(m, u);
      return C == null
        ? null
        : {
            location: { pathname: C, search: h, hash: y, state: x, key: E },
            navigationType: i,
          };
    }, [u, m, h, y, x, E, i]);
  return (
    ln(
      b != null,
      `<Router basename="${u}"> is not able to match the URL "${m}${h}${y}" because it does not start with the basename, so the <Router> won't render anything.`
    ),
    b == null
      ? null
      : g.createElement(
          un.Provider,
          { value: f },
          g.createElement(xi.Provider, { children: r, value: b })
        )
  );
}
function Ex({ children: t, location: r }) {
  return cx(uu(t), r);
}
function uu(t, r = []) {
  let o = [];
  return (
    g.Children.forEach(t, (i, l) => {
      if (!g.isValidElement(i)) return;
      let c = [...r, l];
      if (i.type === g.Fragment) {
        o.push.apply(o, uu(i.props.children, c));
        return;
      }
      Ue(
        i.type === cu,
        `[${
          typeof i.type == "string" ? i.type : i.type.name
        }] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
      ),
        Ue(
          !i.props.index || !i.props.children,
          "An index route cannot have child routes."
        );
      let u = {
        id: i.props.id || c.join("-"),
        caseSensitive: i.props.caseSensitive,
        element: i.props.element,
        Component: i.props.Component,
        index: i.props.index,
        path: i.props.path,
        loader: i.props.loader,
        action: i.props.action,
        hydrateFallbackElement: i.props.hydrateFallbackElement,
        HydrateFallback: i.props.HydrateFallback,
        errorElement: i.props.errorElement,
        ErrorBoundary: i.props.ErrorBoundary,
        hasErrorBoundary:
          i.props.hasErrorBoundary === !0 ||
          i.props.ErrorBoundary != null ||
          i.props.errorElement != null,
        shouldRevalidate: i.props.shouldRevalidate,
        handle: i.props.handle,
        lazy: i.props.lazy,
      };
      i.props.children && (u.children = uu(i.props.children, c)), o.push(u);
    }),
    o
  );
}
var tl = "get",
  nl = "application/x-www-form-urlencoded";
function El(t) {
  return t != null && typeof t.tagName == "string";
}
function Cx(t) {
  return El(t) && t.tagName.toLowerCase() === "button";
}
function kx(t) {
  return El(t) && t.tagName.toLowerCase() === "form";
}
function Rx(t) {
  return El(t) && t.tagName.toLowerCase() === "input";
}
function bx(t) {
  return !!(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey);
}
function Nx(t, r) {
  return t.button === 0 && (!r || r === "_self") && !bx(t);
}
var Hs = null;
function Px() {
  if (Hs === null)
    try {
      new FormData(document.createElement("form"), 0), (Hs = !1);
    } catch {
      Hs = !0;
    }
  return Hs;
}
var Ox = new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain",
]);
function zc(t) {
  return t != null && !Ox.has(t)
    ? (ln(
        !1,
        `"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${nl}"`
      ),
      null)
    : t;
}
function Ix(t, r) {
  let o, i, l, c, u;
  if (kx(t)) {
    let f = t.getAttribute("action");
    (i = f ? Kn(f, r) : null),
      (o = t.getAttribute("method") || tl),
      (l = zc(t.getAttribute("enctype")) || nl),
      (c = new FormData(t));
  } else if (Cx(t) || (Rx(t) && (t.type === "submit" || t.type === "image"))) {
    let f = t.form;
    if (f == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let m = t.getAttribute("formaction") || f.getAttribute("action");
    if (
      ((i = m ? Kn(m, r) : null),
      (o = t.getAttribute("formmethod") || f.getAttribute("method") || tl),
      (l =
        zc(t.getAttribute("formenctype")) ||
        zc(f.getAttribute("enctype")) ||
        nl),
      (c = new FormData(f, t)),
      !Px())
    ) {
      let { name: h, type: y, value: x } = t;
      if (y === "image") {
        let E = h ? `${h}.` : "";
        c.append(`${E}x`, "0"), c.append(`${E}y`, "0");
      } else h && c.append(h, x);
    }
  } else {
    if (El(t))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    (o = tl), (i = null), (l = nl), (u = t);
  }
  return (
    c && l === "text/plain" && ((u = c), (c = void 0)),
    { action: i, method: o.toLowerCase(), encType: l, formData: c, body: u }
  );
}
function Hu(t, r) {
  if (t === !1 || t === null || typeof t > "u") throw new Error(r);
}
async function Tx(t, r) {
  if (t.id in r) return r[t.id];
  try {
    let o = await import(t.module);
    return (r[t.id] = o), o;
  } catch (o) {
    return (
      console.error(
        `Error loading route module \`${t.module}\`, reloading page...`
      ),
      console.error(o),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function Dx(t) {
  return t == null
    ? !1
    : t.href == null
    ? t.rel === "preload" &&
      typeof t.imageSrcSet == "string" &&
      typeof t.imageSizes == "string"
    : typeof t.rel == "string" && typeof t.href == "string";
}
async function Bx(t, r, o) {
  let i = await Promise.all(
    t.map(async (l) => {
      let c = r.routes[l.route.id];
      if (c) {
        let u = await Tx(c, o);
        return u.links ? u.links() : [];
      }
      return [];
    })
  );
  return _x(
    i
      .flat(1)
      .filter(Dx)
      .filter((l) => l.rel === "stylesheet" || l.rel === "preload")
      .map((l) =>
        l.rel === "stylesheet"
          ? { ...l, rel: "prefetch", as: "style" }
          : { ...l, rel: "prefetch" }
      )
  );
}
function Rh(t, r, o, i, l, c) {
  let u = (m, h) => (o[h] ? m.route.id !== o[h].route.id : !0),
    f = (m, h) => {
      var y;
      return (
        o[h].pathname !== m.pathname ||
        (((y = o[h].route.path) == null ? void 0 : y.endsWith("*")) &&
          o[h].params["*"] !== m.params["*"])
      );
    };
  return c === "assets"
    ? r.filter((m, h) => u(m, h) || f(m, h))
    : c === "data"
    ? r.filter((m, h) => {
        var x;
        let y = i.routes[m.route.id];
        if (!y || !y.hasLoader) return !1;
        if (u(m, h) || f(m, h)) return !0;
        if (m.route.shouldRevalidate) {
          let E = m.route.shouldRevalidate({
            currentUrl: new URL(l.pathname + l.search + l.hash, window.origin),
            currentParams: ((x = o[0]) == null ? void 0 : x.params) || {},
            nextUrl: new URL(t, window.origin),
            nextParams: m.params,
            defaultShouldRevalidate: !0,
          });
          if (typeof E == "boolean") return E;
        }
        return !0;
      })
    : [];
}
function jx(t, r) {
  return Mx(
    t
      .map((o) => {
        let i = r.routes[o.route.id];
        if (!i) return [];
        let l = [i.module];
        return i.imports && (l = l.concat(i.imports)), l;
      })
      .flat(1)
  );
}
function Mx(t) {
  return [...new Set(t)];
}
function Lx(t) {
  let r = {},
    o = Object.keys(t).sort();
  for (let i of o) r[i] = t[i];
  return r;
}
function _x(t, r) {
  let o = new Set();
  return (
    new Set(r),
    t.reduce((i, l) => {
      let c = JSON.stringify(Lx(l));
      return o.has(c) || (o.add(c), i.push({ key: c, link: l })), i;
    }, [])
  );
}
function Fx(t) {
  let r =
    typeof t == "string"
      ? new URL(
          t,
          typeof window > "u" ? "server://singlefetch/" : window.location.origin
        )
      : t;
  return (
    r.pathname === "/"
      ? (r.pathname = "_root.data")
      : (r.pathname = `${r.pathname.replace(/\/$/, "")}.data`),
    r
  );
}
function zx() {
  let t = g.useContext(fo);
  return (
    Hu(
      t,
      "You must render this element inside a <DataRouterContext.Provider> element"
    ),
    t
  );
}
function Ux() {
  let t = g.useContext(Sl);
  return (
    Hu(
      t,
      "You must render this element inside a <DataRouterStateContext.Provider> element"
    ),
    t
  );
}
var Gu = g.createContext(void 0);
Gu.displayName = "FrameworkContext";
function Um() {
  let t = g.useContext(Gu);
  return (
    Hu(t, "You must render this element inside a <HydratedRouter> element"), t
  );
}
function Wx(t, r) {
  let o = g.useContext(Gu),
    [i, l] = g.useState(!1),
    [c, u] = g.useState(!1),
    {
      onFocus: f,
      onBlur: m,
      onMouseEnter: h,
      onMouseLeave: y,
      onTouchStart: x,
    } = r,
    E = g.useRef(null);
  g.useEffect(() => {
    if ((t === "render" && u(!0), t === "viewport")) {
      let w = (R) => {
          R.forEach((k) => {
            u(k.isIntersecting);
          });
        },
        S = new IntersectionObserver(w, { threshold: 0.5 });
      return (
        E.current && S.observe(E.current),
        () => {
          S.disconnect();
        }
      );
    }
  }, [t]),
    g.useEffect(() => {
      if (i) {
        let w = setTimeout(() => {
          u(!0);
        }, 100);
        return () => {
          clearTimeout(w);
        };
      }
    }, [i]);
  let b = () => {
      l(!0);
    },
    C = () => {
      l(!1), u(!1);
    };
  return o
    ? t !== "intent"
      ? [c, E, {}]
      : [
          c,
          E,
          {
            onFocus: ai(f, b),
            onBlur: ai(m, C),
            onMouseEnter: ai(h, b),
            onMouseLeave: ai(y, C),
            onTouchStart: ai(x, b),
          },
        ]
    : [!1, E, {}];
}
function ai(t, r) {
  return (o) => {
    t && t(o), o.defaultPrevented || r(o);
  };
}
function Qx({ page: t, ...r }) {
  let { router: o } = zx(),
    i = g.useMemo(() => Pm(o.routes, t, o.basename), [o.routes, t, o.basename]);
  return i
    ? g.createElement(Gx, { page: t, matches: i, ...r })
    : (console.warn(`Tried to prefetch ${t} but no routes matched.`), null);
}
function Hx(t) {
  let { manifest: r, routeModules: o } = Um(),
    [i, l] = g.useState([]);
  return (
    g.useEffect(() => {
      let c = !1;
      return (
        Bx(t, r, o).then((u) => {
          c || l(u);
        }),
        () => {
          c = !0;
        }
      );
    }, [t, r, o]),
    i
  );
}
function Gx({ page: t, matches: r, ...o }) {
  let i = kr(),
    { manifest: l, routeModules: c } = Um(),
    { loaderData: u, matches: f } = Ux(),
    m = g.useMemo(() => Rh(t, r, f, l, i, "data"), [t, r, f, l, i]),
    h = g.useMemo(() => Rh(t, r, f, l, i, "assets"), [t, r, f, l, i]),
    y = g.useMemo(() => {
      if (t === i.pathname + i.search + i.hash) return [];
      let b = new Set(),
        C = !1;
      if (
        (r.forEach((S) => {
          var k;
          let R = l.routes[S.route.id];
          !R ||
            !R.hasLoader ||
            ((!m.some((P) => P.route.id === S.route.id) &&
              S.route.id in u &&
              (k = c[S.route.id]) != null &&
              k.shouldRevalidate) ||
            R.hasClientLoader
              ? (C = !0)
              : b.add(S.route.id));
        }),
        b.size === 0)
      )
        return [];
      let w = Fx(t);
      return (
        C &&
          b.size > 0 &&
          w.searchParams.set(
            "_routes",
            r
              .filter((S) => b.has(S.route.id))
              .map((S) => S.route.id)
              .join(",")
          ),
        [w.pathname + w.search]
      );
    }, [u, i, l, m, r, t, c]),
    x = g.useMemo(() => jx(h, l), [h, l]),
    E = Hx(h);
  return g.createElement(
    g.Fragment,
    null,
    y.map((b) =>
      g.createElement("link", {
        key: b,
        rel: "prefetch",
        as: "fetch",
        href: b,
        ...o,
      })
    ),
    x.map((b) =>
      g.createElement("link", { key: b, rel: "modulepreload", href: b, ...o })
    ),
    E.map(({ key: b, link: C }) => g.createElement("link", { key: b, ...C }))
  );
}
function Vx(...t) {
  return (r) => {
    t.forEach((o) => {
      typeof o == "function" ? o(r) : o != null && (o.current = r);
    });
  };
}
var Wm =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
try {
  Wm && (window.__reactRouterVersion = "7.0.2");
} catch {}
function Yx({ basename: t, children: r, window: o }) {
  let i = g.useRef();
  i.current == null && (i.current = j0({ window: o, v5Compat: !0 }));
  let l = i.current,
    [c, u] = g.useState({ action: l.action, location: l.location }),
    f = g.useCallback(
      (m) => {
        g.startTransition(() => u(m));
      },
      [u]
    );
  return (
    g.useLayoutEffect(() => l.listen(f), [l, f]),
    g.createElement(Sx, {
      basename: t,
      children: r,
      location: c.location,
      navigationType: c.action,
      navigator: l,
    })
  );
}
var Qm = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Hm = g.forwardRef(function (
    {
      onClick: r,
      discover: o = "render",
      prefetch: i = "none",
      relative: l,
      reloadDocument: c,
      replace: u,
      state: f,
      target: m,
      to: h,
      preventScrollReset: y,
      viewTransition: x,
      ...E
    },
    b
  ) {
    let { basename: C } = g.useContext(un),
      w = typeof h == "string" && Qm.test(h),
      S,
      R = !1;
    if (typeof h == "string" && w && ((S = h), Wm))
      try {
        let Q = new URL(window.location.href),
          se = h.startsWith("//") ? new URL(Q.protocol + h) : new URL(h),
          ge = Kn(se.pathname, C);
        se.origin === Q.origin && ge != null
          ? (h = ge + se.search + se.hash)
          : (R = !0);
      } catch {
        ln(
          !1,
          `<Link to="${h}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
        );
      }
    let k = lx(h, { relative: l }),
      [P, D, B] = Wx(i, E),
      W = Xx(h, {
        replace: u,
        state: f,
        target: m,
        preventScrollReset: y,
        relative: l,
        viewTransition: x,
      });
    function z(Q) {
      r && r(Q), Q.defaultPrevented || W(Q);
    }
    let Y = g.createElement("a", {
      ...E,
      ...B,
      href: S || k,
      onClick: R || c ? r : z,
      ref: Vx(b, D),
      target: m,
      "data-discover": !w && o === "render" ? "true" : void 0,
    });
    return P && !w
      ? g.createElement(g.Fragment, null, Y, g.createElement(Qx, { page: k }))
      : Y;
  });
Hm.displayName = "Link";
var $x = g.forwardRef(function (
  {
    "aria-current": r = "page",
    caseSensitive: o = !1,
    className: i = "",
    end: l = !1,
    style: c,
    to: u,
    viewTransition: f,
    children: m,
    ...h
  },
  y
) {
  let x = Ci(u, { relative: h.relative }),
    E = kr(),
    b = g.useContext(Sl),
    { navigator: C, basename: w } = g.useContext(un),
    S = b != null && n1(x) && f === !0,
    R = C.encodeLocation ? C.encodeLocation(x).pathname : x.pathname,
    k = E.pathname,
    P =
      b && b.navigation && b.navigation.location
        ? b.navigation.location.pathname
        : null;
  o ||
    ((k = k.toLowerCase()),
    (P = P ? P.toLowerCase() : null),
    (R = R.toLowerCase())),
    P && w && (P = Kn(P, w) || P);
  const D = R !== "/" && R.endsWith("/") ? R.length - 1 : R.length;
  let B = k === R || (!l && k.startsWith(R) && k.charAt(D) === "/"),
    W =
      P != null &&
      (P === R || (!l && P.startsWith(R) && P.charAt(R.length) === "/")),
    z = { isActive: B, isPending: W, isTransitioning: S },
    Y = B ? r : void 0,
    Q;
  typeof i == "function"
    ? (Q = i(z))
    : (Q = [
        i,
        B ? "active" : null,
        W ? "pending" : null,
        S ? "transitioning" : null,
      ]
        .filter(Boolean)
        .join(" "));
  let se = typeof c == "function" ? c(z) : c;
  return g.createElement(
    Hm,
    {
      ...h,
      "aria-current": Y,
      className: Q,
      ref: y,
      style: se,
      to: u,
      viewTransition: f,
    },
    typeof m == "function" ? m(z) : m
  );
});
$x.displayName = "NavLink";
var Zx = g.forwardRef(
  (
    {
      discover: t = "render",
      fetcherKey: r,
      navigate: o,
      reloadDocument: i,
      replace: l,
      state: c,
      method: u = tl,
      action: f,
      onSubmit: m,
      relative: h,
      preventScrollReset: y,
      viewTransition: x,
      ...E
    },
    b
  ) => {
    let C = e1(),
      w = t1(f, { relative: h }),
      S = u.toLowerCase() === "get" ? "get" : "post",
      R = typeof f == "string" && Qm.test(f),
      k = (P) => {
        if ((m && m(P), P.defaultPrevented)) return;
        P.preventDefault();
        let D = P.nativeEvent.submitter,
          B = (D == null ? void 0 : D.getAttribute("formmethod")) || u;
        C(D || P.currentTarget, {
          fetcherKey: r,
          method: B,
          navigate: o,
          replace: l,
          state: c,
          relative: h,
          preventScrollReset: y,
          viewTransition: x,
        });
      };
    return g.createElement("form", {
      ref: b,
      method: S,
      action: w,
      onSubmit: i ? m : k,
      ...E,
      "data-discover": !R && t === "render" ? "true" : void 0,
    });
  }
);
Zx.displayName = "Form";
function Jx(t) {
  return `${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Gm(t) {
  let r = g.useContext(fo);
  return Ue(r, Jx(t)), r;
}
function Xx(
  t,
  {
    target: r,
    replace: o,
    state: i,
    preventScrollReset: l,
    relative: c,
    viewTransition: u,
  } = {}
) {
  let f = Ei(),
    m = kr(),
    h = Ci(t, { relative: c });
  return g.useCallback(
    (y) => {
      if (Nx(y, r)) {
        y.preventDefault();
        let x = o !== void 0 ? o : yi(m) === yi(h);
        f(t, {
          replace: x,
          state: i,
          preventScrollReset: l,
          relative: c,
          viewTransition: u,
        });
      }
    },
    [m, f, h, o, i, r, t, l, c, u]
  );
}
var qx = 0,
  Kx = () => `__${String(++qx)}__`;
function e1() {
  let { router: t } = Gm("useSubmit"),
    { basename: r } = g.useContext(un),
    o = vx();
  return g.useCallback(
    async (i, l = {}) => {
      let { action: c, method: u, encType: f, formData: m, body: h } = Ix(i, r);
      if (l.navigate === !1) {
        let y = l.fetcherKey || Kx();
        await t.fetch(y, o, l.action || c, {
          preventScrollReset: l.preventScrollReset,
          formData: m,
          body: h,
          formMethod: l.method || u,
          formEncType: l.encType || f,
          flushSync: l.flushSync,
        });
      } else
        await t.navigate(l.action || c, {
          preventScrollReset: l.preventScrollReset,
          formData: m,
          body: h,
          formMethod: l.method || u,
          formEncType: l.encType || f,
          replace: l.replace,
          state: l.state,
          fromRouteId: o,
          flushSync: l.flushSync,
          viewTransition: l.viewTransition,
        });
    },
    [t, r, o]
  );
}
function t1(t, { relative: r } = {}) {
  let { basename: o } = g.useContext(un),
    i = g.useContext(dn);
  Ue(i, "useFormAction must be used inside a RouteContext");
  let [l] = i.matches.slice(-1),
    c = { ...Ci(t || ".", { relative: r }) },
    u = kr();
  if (t == null) {
    c.search = u.search;
    let f = new URLSearchParams(c.search),
      m = f.getAll("index");
    if (m.some((y) => y === "")) {
      f.delete("index"),
        m.filter((x) => x).forEach((x) => f.append("index", x));
      let y = f.toString();
      c.search = y ? `?${y}` : "";
    }
  }
  return (
    (!t || t === ".") &&
      l.route.index &&
      (c.search = c.search ? c.search.replace(/^\?/, "?index&") : "?index"),
    o !== "/" && (c.pathname = c.pathname === "/" ? o : En([o, c.pathname])),
    yi(c)
  );
}
function n1(t, r = {}) {
  let o = g.useContext(jm);
  Ue(
    o != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: i } = Gm("useViewTransitionState"),
    l = Ci(t, { relative: r.relative });
  if (!o.isTransitioning) return !1;
  let c = Kn(o.currentLocation.pathname, i) || o.currentLocation.pathname,
    u = Kn(o.nextLocation.pathname, i) || o.nextLocation.pathname;
  return fl(l.pathname, u) != null || fl(l.pathname, c) != null;
}
new TextEncoder();
var po = Nm();
const r1 = Fu(po);
var Uc = { exports: {} },
  Wc,
  bh;
function o1() {
  if (bh) return Wc;
  bh = 1;
  var t = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return (Wc = t), Wc;
}
var Qc, Nh;
function i1() {
  if (Nh) return Qc;
  Nh = 1;
  var t = o1();
  function r() {}
  function o() {}
  return (
    (o.resetWarningCache = r),
    (Qc = function () {
      function i(u, f, m, h, y, x) {
        if (x !== t) {
          var E = new Error(
            "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
          );
          throw ((E.name = "Invariant Violation"), E);
        }
      }
      i.isRequired = i;
      function l() {
        return i;
      }
      var c = {
        array: i,
        bigint: i,
        bool: i,
        func: i,
        number: i,
        object: i,
        string: i,
        symbol: i,
        any: i,
        arrayOf: l,
        element: i,
        elementType: i,
        instanceOf: l,
        node: i,
        objectOf: l,
        oneOf: l,
        oneOfType: l,
        shape: l,
        exact: l,
        checkPropTypes: o,
        resetWarningCache: r,
      };
      return (c.PropTypes = c), c;
    }),
    Qc
  );
}
var Ph;
function s1() {
  return Ph || ((Ph = 1), (Uc.exports = i1()())), Uc.exports;
}
var l1 = s1();
const Yt = Fu(l1),
  an = Object.create(null);
an.open = "0";
an.close = "1";
an.ping = "2";
an.pong = "3";
an.message = "4";
an.upgrade = "5";
an.noop = "6";
const rl = Object.create(null);
Object.keys(an).forEach((t) => {
  rl[an[t]] = t;
});
const du = { type: "error", data: "parser error" },
  Vm =
    typeof Blob == "function" ||
    (typeof Blob < "u" &&
      Object.prototype.toString.call(Blob) === "[object BlobConstructor]"),
  Ym = typeof ArrayBuffer == "function",
  $m = (t) =>
    typeof ArrayBuffer.isView == "function"
      ? ArrayBuffer.isView(t)
      : t && t.buffer instanceof ArrayBuffer,
  Vu = ({ type: t, data: r }, o, i) =>
    Vm && r instanceof Blob
      ? o
        ? i(r)
        : Oh(r, i)
      : Ym && (r instanceof ArrayBuffer || $m(r))
      ? o
        ? i(r)
        : Oh(new Blob([r]), i)
      : i(an[t] + (r || "")),
  Oh = (t, r) => {
    const o = new FileReader();
    return (
      (o.onload = function () {
        const i = o.result.split(",")[1];
        r("b" + (i || ""));
      }),
      o.readAsDataURL(t)
    );
  };
function Ih(t) {
  return t instanceof Uint8Array
    ? t
    : t instanceof ArrayBuffer
    ? new Uint8Array(t)
    : new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
}
let Hc;
function a1(t, r) {
  if (Vm && t.data instanceof Blob)
    return t.data.arrayBuffer().then(Ih).then(r);
  if (Ym && (t.data instanceof ArrayBuffer || $m(t.data))) return r(Ih(t.data));
  Vu(t, !1, (o) => {
    Hc || (Hc = new TextEncoder()), r(Hc.encode(o));
  });
}
const Th = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  pi = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let t = 0; t < Th.length; t++) pi[Th.charCodeAt(t)] = t;
const c1 = (t) => {
    let r = t.length * 0.75,
      o = t.length,
      i,
      l = 0,
      c,
      u,
      f,
      m;
    t[t.length - 1] === "=" && (r--, t[t.length - 2] === "=" && r--);
    const h = new ArrayBuffer(r),
      y = new Uint8Array(h);
    for (i = 0; i < o; i += 4)
      (c = pi[t.charCodeAt(i)]),
        (u = pi[t.charCodeAt(i + 1)]),
        (f = pi[t.charCodeAt(i + 2)]),
        (m = pi[t.charCodeAt(i + 3)]),
        (y[l++] = (c << 2) | (u >> 4)),
        (y[l++] = ((u & 15) << 4) | (f >> 2)),
        (y[l++] = ((f & 3) << 6) | (m & 63));
    return h;
  },
  u1 = typeof ArrayBuffer == "function",
  Yu = (t, r) => {
    if (typeof t != "string") return { type: "message", data: Zm(t, r) };
    const o = t.charAt(0);
    return o === "b"
      ? { type: "message", data: d1(t.substring(1), r) }
      : rl[o]
      ? t.length > 1
        ? { type: rl[o], data: t.substring(1) }
        : { type: rl[o] }
      : du;
  },
  d1 = (t, r) => {
    if (u1) {
      const o = c1(t);
      return Zm(o, r);
    } else return { base64: !0, data: t };
  },
  Zm = (t, r) => {
    switch (r) {
      case "blob":
        return t instanceof Blob ? t : new Blob([t]);
      case "arraybuffer":
      default:
        return t instanceof ArrayBuffer ? t : t.buffer;
    }
  },
  Jm = "",
  f1 = (t, r) => {
    const o = t.length,
      i = new Array(o);
    let l = 0;
    t.forEach((c, u) => {
      Vu(c, !1, (f) => {
        (i[u] = f), ++l === o && r(i.join(Jm));
      });
    });
  },
  p1 = (t, r) => {
    const o = t.split(Jm),
      i = [];
    for (let l = 0; l < o.length; l++) {
      const c = Yu(o[l], r);
      if ((i.push(c), c.type === "error")) break;
    }
    return i;
  };
function h1() {
  return new TransformStream({
    transform(t, r) {
      a1(t, (o) => {
        const i = o.length;
        let l;
        if (i < 126)
          (l = new Uint8Array(1)), new DataView(l.buffer).setUint8(0, i);
        else if (i < 65536) {
          l = new Uint8Array(3);
          const c = new DataView(l.buffer);
          c.setUint8(0, 126), c.setUint16(1, i);
        } else {
          l = new Uint8Array(9);
          const c = new DataView(l.buffer);
          c.setUint8(0, 127), c.setBigUint64(1, BigInt(i));
        }
        t.data && typeof t.data != "string" && (l[0] |= 128),
          r.enqueue(l),
          r.enqueue(o);
      });
    },
  });
}
let Gc;
function Gs(t) {
  return t.reduce((r, o) => r + o.length, 0);
}
function Vs(t, r) {
  if (t[0].length === r) return t.shift();
  const o = new Uint8Array(r);
  let i = 0;
  for (let l = 0; l < r; l++)
    (o[l] = t[0][i++]), i === t[0].length && (t.shift(), (i = 0));
  return t.length && i < t[0].length && (t[0] = t[0].slice(i)), o;
}
function m1(t, r) {
  Gc || (Gc = new TextDecoder());
  const o = [];
  let i = 0,
    l = -1,
    c = !1;
  return new TransformStream({
    transform(u, f) {
      for (o.push(u); ; ) {
        if (i === 0) {
          if (Gs(o) < 1) break;
          const m = Vs(o, 1);
          (c = (m[0] & 128) === 128),
            (l = m[0] & 127),
            l < 126 ? (i = 3) : l === 126 ? (i = 1) : (i = 2);
        } else if (i === 1) {
          if (Gs(o) < 2) break;
          const m = Vs(o, 2);
          (l = new DataView(m.buffer, m.byteOffset, m.length).getUint16(0)),
            (i = 3);
        } else if (i === 2) {
          if (Gs(o) < 8) break;
          const m = Vs(o, 8),
            h = new DataView(m.buffer, m.byteOffset, m.length),
            y = h.getUint32(0);
          if (y > Math.pow(2, 21) - 1) {
            f.enqueue(du);
            break;
          }
          (l = y * Math.pow(2, 32) + h.getUint32(4)), (i = 3);
        } else {
          if (Gs(o) < l) break;
          const m = Vs(o, l);
          f.enqueue(Yu(c ? m : Gc.decode(m), r)), (i = 0);
        }
        if (l === 0 || l > t) {
          f.enqueue(du);
          break;
        }
      }
    },
  });
}
const Xm = 4;
function Ve(t) {
  if (t) return g1(t);
}
function g1(t) {
  for (var r in Ve.prototype) t[r] = Ve.prototype[r];
  return t;
}
Ve.prototype.on = Ve.prototype.addEventListener = function (t, r) {
  return (
    (this._callbacks = this._callbacks || {}),
    (this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(r),
    this
  );
};
Ve.prototype.once = function (t, r) {
  function o() {
    this.off(t, o), r.apply(this, arguments);
  }
  return (o.fn = r), this.on(t, o), this;
};
Ve.prototype.off =
  Ve.prototype.removeListener =
  Ve.prototype.removeAllListeners =
  Ve.prototype.removeEventListener =
    function (t, r) {
      if (((this._callbacks = this._callbacks || {}), arguments.length == 0))
        return (this._callbacks = {}), this;
      var o = this._callbacks["$" + t];
      if (!o) return this;
      if (arguments.length == 1) return delete this._callbacks["$" + t], this;
      for (var i, l = 0; l < o.length; l++)
        if (((i = o[l]), i === r || i.fn === r)) {
          o.splice(l, 1);
          break;
        }
      return o.length === 0 && delete this._callbacks["$" + t], this;
    };
Ve.prototype.emit = function (t) {
  this._callbacks = this._callbacks || {};
  for (
    var r = new Array(arguments.length - 1),
      o = this._callbacks["$" + t],
      i = 1;
    i < arguments.length;
    i++
  )
    r[i - 1] = arguments[i];
  if (o) {
    o = o.slice(0);
    for (var i = 0, l = o.length; i < l; ++i) o[i].apply(this, r);
  }
  return this;
};
Ve.prototype.emitReserved = Ve.prototype.emit;
Ve.prototype.listeners = function (t) {
  return (
    (this._callbacks = this._callbacks || {}), this._callbacks["$" + t] || []
  );
};
Ve.prototype.hasListeners = function (t) {
  return !!this.listeners(t).length;
};
const Cl =
    typeof Promise == "function" && typeof Promise.resolve == "function"
      ? (r) => Promise.resolve().then(r)
      : (r, o) => o(r, 0),
  Mt =
    typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : Function("return this")(),
  y1 = "arraybuffer";
function qm(t, ...r) {
  return r.reduce((o, i) => (t.hasOwnProperty(i) && (o[i] = t[i]), o), {});
}
const v1 = Mt.setTimeout,
  A1 = Mt.clearTimeout;
function kl(t, r) {
  r.useNativeTimers
    ? ((t.setTimeoutFn = v1.bind(Mt)), (t.clearTimeoutFn = A1.bind(Mt)))
    : ((t.setTimeoutFn = Mt.setTimeout.bind(Mt)),
      (t.clearTimeoutFn = Mt.clearTimeout.bind(Mt)));
}
const w1 = 1.33;
function x1(t) {
  return typeof t == "string"
    ? S1(t)
    : Math.ceil((t.byteLength || t.size) * w1);
}
function S1(t) {
  let r = 0,
    o = 0;
  for (let i = 0, l = t.length; i < l; i++)
    (r = t.charCodeAt(i)),
      r < 128
        ? (o += 1)
        : r < 2048
        ? (o += 2)
        : r < 55296 || r >= 57344
        ? (o += 3)
        : (i++, (o += 4));
  return o;
}
function Km() {
  return (
    Date.now().toString(36).substring(3) +
    Math.random().toString(36).substring(2, 5)
  );
}
function E1(t) {
  let r = "";
  for (let o in t)
    t.hasOwnProperty(o) &&
      (r.length && (r += "&"),
      (r += encodeURIComponent(o) + "=" + encodeURIComponent(t[o])));
  return r;
}
function C1(t) {
  let r = {},
    o = t.split("&");
  for (let i = 0, l = o.length; i < l; i++) {
    let c = o[i].split("=");
    r[decodeURIComponent(c[0])] = decodeURIComponent(c[1]);
  }
  return r;
}
class k1 extends Error {
  constructor(r, o, i) {
    super(r),
      (this.description = o),
      (this.context = i),
      (this.type = "TransportError");
  }
}
class $u extends Ve {
  constructor(r) {
    super(),
      (this.writable = !1),
      kl(this, r),
      (this.opts = r),
      (this.query = r.query),
      (this.socket = r.socket),
      (this.supportsBinary = !r.forceBase64);
  }
  onError(r, o, i) {
    return super.emitReserved("error", new k1(r, o, i)), this;
  }
  open() {
    return (this.readyState = "opening"), this.doOpen(), this;
  }
  close() {
    return (
      (this.readyState === "opening" || this.readyState === "open") &&
        (this.doClose(), this.onClose()),
      this
    );
  }
  send(r) {
    this.readyState === "open" && this.write(r);
  }
  onOpen() {
    (this.readyState = "open"),
      (this.writable = !0),
      super.emitReserved("open");
  }
  onData(r) {
    const o = Yu(r, this.socket.binaryType);
    this.onPacket(o);
  }
  onPacket(r) {
    super.emitReserved("packet", r);
  }
  onClose(r) {
    (this.readyState = "closed"), super.emitReserved("close", r);
  }
  pause(r) {}
  createUri(r, o = {}) {
    return (
      r +
      "://" +
      this._hostname() +
      this._port() +
      this.opts.path +
      this._query(o)
    );
  }
  _hostname() {
    const r = this.opts.hostname;
    return r.indexOf(":") === -1 ? r : "[" + r + "]";
  }
  _port() {
    return this.opts.port &&
      ((this.opts.secure && +(this.opts.port !== 443)) ||
        (!this.opts.secure && Number(this.opts.port) !== 80))
      ? ":" + this.opts.port
      : "";
  }
  _query(r) {
    const o = E1(r);
    return o.length ? "?" + o : "";
  }
}
class R1 extends $u {
  constructor() {
    super(...arguments), (this._polling = !1);
  }
  get name() {
    return "polling";
  }
  doOpen() {
    this._poll();
  }
  pause(r) {
    this.readyState = "pausing";
    const o = () => {
      (this.readyState = "paused"), r();
    };
    if (this._polling || !this.writable) {
      let i = 0;
      this._polling &&
        (i++,
        this.once("pollComplete", function () {
          --i || o();
        })),
        this.writable ||
          (i++,
          this.once("drain", function () {
            --i || o();
          }));
    } else o();
  }
  _poll() {
    (this._polling = !0), this.doPoll(), this.emitReserved("poll");
  }
  onData(r) {
    const o = (i) => {
      if (
        (this.readyState === "opening" && i.type === "open" && this.onOpen(),
        i.type === "close")
      )
        return (
          this.onClose({ description: "transport closed by the server" }), !1
        );
      this.onPacket(i);
    };
    p1(r, this.socket.binaryType).forEach(o),
      this.readyState !== "closed" &&
        ((this._polling = !1),
        this.emitReserved("pollComplete"),
        this.readyState === "open" && this._poll());
  }
  doClose() {
    const r = () => {
      this.write([{ type: "close" }]);
    };
    this.readyState === "open" ? r() : this.once("open", r);
  }
  write(r) {
    (this.writable = !1),
      f1(r, (o) => {
        this.doWrite(o, () => {
          (this.writable = !0), this.emitReserved("drain");
        });
      });
  }
  uri() {
    const r = this.opts.secure ? "https" : "http",
      o = this.query || {};
    return (
      this.opts.timestampRequests !== !1 &&
        (o[this.opts.timestampParam] = Km()),
      !this.supportsBinary && !o.sid && (o.b64 = 1),
      this.createUri(r, o)
    );
  }
}
let eg = !1;
try {
  eg = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest();
} catch {}
const b1 = eg;
function N1() {}
class P1 extends R1 {
  constructor(r) {
    if ((super(r), typeof location < "u")) {
      const o = location.protocol === "https:";
      let i = location.port;
      i || (i = o ? "443" : "80"),
        (this.xd =
          (typeof location < "u" && r.hostname !== location.hostname) ||
          i !== r.port);
    }
  }
  doWrite(r, o) {
    const i = this.request({ method: "POST", data: r });
    i.on("success", o),
      i.on("error", (l, c) => {
        this.onError("xhr post error", l, c);
      });
  }
  doPoll() {
    const r = this.request();
    r.on("data", this.onData.bind(this)),
      r.on("error", (o, i) => {
        this.onError("xhr poll error", o, i);
      }),
      (this.pollXhr = r);
  }
}
let ro = class ol extends Ve {
  constructor(r, o, i) {
    super(),
      (this.createRequest = r),
      kl(this, i),
      (this._opts = i),
      (this._method = i.method || "GET"),
      (this._uri = o),
      (this._data = i.data !== void 0 ? i.data : null),
      this._create();
  }
  _create() {
    var r;
    const o = qm(
      this._opts,
      "agent",
      "pfx",
      "key",
      "passphrase",
      "cert",
      "ca",
      "ciphers",
      "rejectUnauthorized",
      "autoUnref"
    );
    o.xdomain = !!this._opts.xd;
    const i = (this._xhr = this.createRequest(o));
    try {
      i.open(this._method, this._uri, !0);
      try {
        if (this._opts.extraHeaders) {
          i.setDisableHeaderCheck && i.setDisableHeaderCheck(!0);
          for (let l in this._opts.extraHeaders)
            this._opts.extraHeaders.hasOwnProperty(l) &&
              i.setRequestHeader(l, this._opts.extraHeaders[l]);
        }
      } catch {}
      if (this._method === "POST")
        try {
          i.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
        } catch {}
      try {
        i.setRequestHeader("Accept", "*/*");
      } catch {}
      (r = this._opts.cookieJar) === null || r === void 0 || r.addCookies(i),
        "withCredentials" in i &&
          (i.withCredentials = this._opts.withCredentials),
        this._opts.requestTimeout && (i.timeout = this._opts.requestTimeout),
        (i.onreadystatechange = () => {
          var l;
          i.readyState === 3 &&
            ((l = this._opts.cookieJar) === null ||
              l === void 0 ||
              l.parseCookies(i.getResponseHeader("set-cookie"))),
            i.readyState === 4 &&
              (i.status === 200 || i.status === 1223
                ? this._onLoad()
                : this.setTimeoutFn(() => {
                    this._onError(typeof i.status == "number" ? i.status : 0);
                  }, 0));
        }),
        i.send(this._data);
    } catch (l) {
      this.setTimeoutFn(() => {
        this._onError(l);
      }, 0);
      return;
    }
    typeof document < "u" &&
      ((this._index = ol.requestsCount++), (ol.requests[this._index] = this));
  }
  _onError(r) {
    this.emitReserved("error", r, this._xhr), this._cleanup(!0);
  }
  _cleanup(r) {
    if (!(typeof this._xhr > "u" || this._xhr === null)) {
      if (((this._xhr.onreadystatechange = N1), r))
        try {
          this._xhr.abort();
        } catch {}
      typeof document < "u" && delete ol.requests[this._index],
        (this._xhr = null);
    }
  }
  _onLoad() {
    const r = this._xhr.responseText;
    r !== null &&
      (this.emitReserved("data", r),
      this.emitReserved("success"),
      this._cleanup());
  }
  abort() {
    this._cleanup();
  }
};
ro.requestsCount = 0;
ro.requests = {};
if (typeof document < "u") {
  if (typeof attachEvent == "function") attachEvent("onunload", Dh);
  else if (typeof addEventListener == "function") {
    const t = "onpagehide" in Mt ? "pagehide" : "unload";
    addEventListener(t, Dh, !1);
  }
}
function Dh() {
  for (let t in ro.requests)
    ro.requests.hasOwnProperty(t) && ro.requests[t].abort();
}
const O1 = (function () {
  const t = tg({ xdomain: !1 });
  return t && t.responseType !== null;
})();
class I1 extends P1 {
  constructor(r) {
    super(r);
    const o = r && r.forceBase64;
    this.supportsBinary = O1 && !o;
  }
  request(r = {}) {
    return (
      Object.assign(r, { xd: this.xd }, this.opts), new ro(tg, this.uri(), r)
    );
  }
}
function tg(t) {
  const r = t.xdomain;
  try {
    if (typeof XMLHttpRequest < "u" && (!r || b1)) return new XMLHttpRequest();
  } catch {}
  if (!r)
    try {
      return new Mt[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch {}
}
const ng =
  typeof navigator < "u" &&
  typeof navigator.product == "string" &&
  navigator.product.toLowerCase() === "reactnative";
class T1 extends $u {
  get name() {
    return "websocket";
  }
  doOpen() {
    const r = this.uri(),
      o = this.opts.protocols,
      i = ng
        ? {}
        : qm(
            this.opts,
            "agent",
            "perMessageDeflate",
            "pfx",
            "key",
            "passphrase",
            "cert",
            "ca",
            "ciphers",
            "rejectUnauthorized",
            "localAddress",
            "protocolVersion",
            "origin",
            "maxPayload",
            "family",
            "checkServerIdentity"
          );
    this.opts.extraHeaders && (i.headers = this.opts.extraHeaders);
    try {
      this.ws = this.createSocket(r, o, i);
    } catch (l) {
      return this.emitReserved("error", l);
    }
    (this.ws.binaryType = this.socket.binaryType), this.addEventListeners();
  }
  addEventListeners() {
    (this.ws.onopen = () => {
      this.opts.autoUnref && this.ws._socket.unref(), this.onOpen();
    }),
      (this.ws.onclose = (r) =>
        this.onClose({
          description: "websocket connection closed",
          context: r,
        })),
      (this.ws.onmessage = (r) => this.onData(r.data)),
      (this.ws.onerror = (r) => this.onError("websocket error", r));
  }
  write(r) {
    this.writable = !1;
    for (let o = 0; o < r.length; o++) {
      const i = r[o],
        l = o === r.length - 1;
      Vu(i, this.supportsBinary, (c) => {
        try {
          this.doWrite(i, c);
        } catch {}
        l &&
          Cl(() => {
            (this.writable = !0), this.emitReserved("drain");
          }, this.setTimeoutFn);
      });
    }
  }
  doClose() {
    typeof this.ws < "u" &&
      ((this.ws.onerror = () => {}), this.ws.close(), (this.ws = null));
  }
  uri() {
    const r = this.opts.secure ? "wss" : "ws",
      o = this.query || {};
    return (
      this.opts.timestampRequests && (o[this.opts.timestampParam] = Km()),
      this.supportsBinary || (o.b64 = 1),
      this.createUri(r, o)
    );
  }
}
const Vc = Mt.WebSocket || Mt.MozWebSocket;
class D1 extends T1 {
  createSocket(r, o, i) {
    return ng ? new Vc(r, o, i) : o ? new Vc(r, o) : new Vc(r);
  }
  doWrite(r, o) {
    this.ws.send(o);
  }
}
class B1 extends $u {
  get name() {
    return "webtransport";
  }
  doOpen() {
    try {
      this._transport = new WebTransport(
        this.createUri("https"),
        this.opts.transportOptions[this.name]
      );
    } catch (r) {
      return this.emitReserved("error", r);
    }
    this._transport.closed
      .then(() => {
        this.onClose();
      })
      .catch((r) => {
        this.onError("webtransport error", r);
      }),
      this._transport.ready.then(() => {
        this._transport.createBidirectionalStream().then((r) => {
          const o = m1(Number.MAX_SAFE_INTEGER, this.socket.binaryType),
            i = r.readable.pipeThrough(o).getReader(),
            l = h1();
          l.readable.pipeTo(r.writable),
            (this._writer = l.writable.getWriter());
          const c = () => {
            i.read()
              .then(({ done: f, value: m }) => {
                f || (this.onPacket(m), c());
              })
              .catch((f) => {});
          };
          c();
          const u = { type: "open" };
          this.query.sid && (u.data = `{"sid":"${this.query.sid}"}`),
            this._writer.write(u).then(() => this.onOpen());
        });
      });
  }
  write(r) {
    this.writable = !1;
    for (let o = 0; o < r.length; o++) {
      const i = r[o],
        l = o === r.length - 1;
      this._writer.write(i).then(() => {
        l &&
          Cl(() => {
            (this.writable = !0), this.emitReserved("drain");
          }, this.setTimeoutFn);
      });
    }
  }
  doClose() {
    var r;
    (r = this._transport) === null || r === void 0 || r.close();
  }
}
const j1 = { websocket: D1, webtransport: B1, polling: I1 },
  M1 =
    /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
  L1 = [
    "source",
    "protocol",
    "authority",
    "userInfo",
    "user",
    "password",
    "host",
    "port",
    "relative",
    "path",
    "directory",
    "file",
    "query",
    "anchor",
  ];
function fu(t) {
  if (t.length > 8e3) throw "URI too long";
  const r = t,
    o = t.indexOf("["),
    i = t.indexOf("]");
  o != -1 &&
    i != -1 &&
    (t =
      t.substring(0, o) +
      t.substring(o, i).replace(/:/g, ";") +
      t.substring(i, t.length));
  let l = M1.exec(t || ""),
    c = {},
    u = 14;
  for (; u--; ) c[L1[u]] = l[u] || "";
  return (
    o != -1 &&
      i != -1 &&
      ((c.source = r),
      (c.host = c.host.substring(1, c.host.length - 1).replace(/;/g, ":")),
      (c.authority = c.authority
        .replace("[", "")
        .replace("]", "")
        .replace(/;/g, ":")),
      (c.ipv6uri = !0)),
    (c.pathNames = _1(c, c.path)),
    (c.queryKey = F1(c, c.query)),
    c
  );
}
function _1(t, r) {
  const o = /\/{2,9}/g,
    i = r.replace(o, "/").split("/");
  return (
    (r.slice(0, 1) == "/" || r.length === 0) && i.splice(0, 1),
    r.slice(-1) == "/" && i.splice(i.length - 1, 1),
    i
  );
}
function F1(t, r) {
  const o = {};
  return (
    r.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function (i, l, c) {
      l && (o[l] = c);
    }),
    o
  );
}
const pu =
    typeof addEventListener == "function" &&
    typeof removeEventListener == "function",
  il = [];
pu &&
  addEventListener(
    "offline",
    () => {
      il.forEach((t) => t());
    },
    !1
  );
class qn extends Ve {
  constructor(r, o) {
    if (
      (super(),
      (this.binaryType = y1),
      (this.writeBuffer = []),
      (this._prevBufferLen = 0),
      (this._pingInterval = -1),
      (this._pingTimeout = -1),
      (this._maxPayload = -1),
      (this._pingTimeoutTime = 1 / 0),
      r && typeof r == "object" && ((o = r), (r = null)),
      r)
    ) {
      const i = fu(r);
      (o.hostname = i.host),
        (o.secure = i.protocol === "https" || i.protocol === "wss"),
        (o.port = i.port),
        i.query && (o.query = i.query);
    } else o.host && (o.hostname = fu(o.host).host);
    kl(this, o),
      (this.secure =
        o.secure != null
          ? o.secure
          : typeof location < "u" && location.protocol === "https:"),
      o.hostname && !o.port && (o.port = this.secure ? "443" : "80"),
      (this.hostname =
        o.hostname ||
        (typeof location < "u" ? location.hostname : "localhost")),
      (this.port =
        o.port ||
        (typeof location < "u" && location.port
          ? location.port
          : this.secure
          ? "443"
          : "80")),
      (this.transports = []),
      (this._transportsByName = {}),
      o.transports.forEach((i) => {
        const l = i.prototype.name;
        this.transports.push(l), (this._transportsByName[l] = i);
      }),
      (this.opts = Object.assign(
        {
          path: "/engine.io",
          agent: !1,
          withCredentials: !1,
          upgrade: !0,
          timestampParam: "t",
          rememberUpgrade: !1,
          addTrailingSlash: !0,
          rejectUnauthorized: !0,
          perMessageDeflate: { threshold: 1024 },
          transportOptions: {},
          closeOnBeforeunload: !1,
        },
        o
      )),
      (this.opts.path =
        this.opts.path.replace(/\/$/, "") +
        (this.opts.addTrailingSlash ? "/" : "")),
      typeof this.opts.query == "string" &&
        (this.opts.query = C1(this.opts.query)),
      pu &&
        (this.opts.closeOnBeforeunload &&
          ((this._beforeunloadEventListener = () => {
            this.transport &&
              (this.transport.removeAllListeners(), this.transport.close());
          }),
          addEventListener(
            "beforeunload",
            this._beforeunloadEventListener,
            !1
          )),
        this.hostname !== "localhost" &&
          ((this._offlineEventListener = () => {
            this._onClose("transport close", {
              description: "network connection lost",
            });
          }),
          il.push(this._offlineEventListener))),
      this.opts.withCredentials && (this._cookieJar = void 0),
      this._open();
  }
  createTransport(r) {
    const o = Object.assign({}, this.opts.query);
    (o.EIO = Xm), (o.transport = r), this.id && (o.sid = this.id);
    const i = Object.assign(
      {},
      this.opts,
      {
        query: o,
        socket: this,
        hostname: this.hostname,
        secure: this.secure,
        port: this.port,
      },
      this.opts.transportOptions[r]
    );
    return new this._transportsByName[r](i);
  }
  _open() {
    if (this.transports.length === 0) {
      this.setTimeoutFn(() => {
        this.emitReserved("error", "No transports available");
      }, 0);
      return;
    }
    const r =
      this.opts.rememberUpgrade &&
      qn.priorWebsocketSuccess &&
      this.transports.indexOf("websocket") !== -1
        ? "websocket"
        : this.transports[0];
    this.readyState = "opening";
    const o = this.createTransport(r);
    o.open(), this.setTransport(o);
  }
  setTransport(r) {
    this.transport && this.transport.removeAllListeners(),
      (this.transport = r),
      r
        .on("drain", this._onDrain.bind(this))
        .on("packet", this._onPacket.bind(this))
        .on("error", this._onError.bind(this))
        .on("close", (o) => this._onClose("transport close", o));
  }
  onOpen() {
    (this.readyState = "open"),
      (qn.priorWebsocketSuccess = this.transport.name === "websocket"),
      this.emitReserved("open"),
      this.flush();
  }
  _onPacket(r) {
    if (
      this.readyState === "opening" ||
      this.readyState === "open" ||
      this.readyState === "closing"
    )
      switch (
        (this.emitReserved("packet", r), this.emitReserved("heartbeat"), r.type)
      ) {
        case "open":
          this.onHandshake(JSON.parse(r.data));
          break;
        case "ping":
          this._sendPacket("pong"),
            this.emitReserved("ping"),
            this.emitReserved("pong"),
            this._resetPingTimeout();
          break;
        case "error":
          const o = new Error("server error");
          (o.code = r.data), this._onError(o);
          break;
        case "message":
          this.emitReserved("data", r.data),
            this.emitReserved("message", r.data);
          break;
      }
  }
  onHandshake(r) {
    this.emitReserved("handshake", r),
      (this.id = r.sid),
      (this.transport.query.sid = r.sid),
      (this._pingInterval = r.pingInterval),
      (this._pingTimeout = r.pingTimeout),
      (this._maxPayload = r.maxPayload),
      this.onOpen(),
      this.readyState !== "closed" && this._resetPingTimeout();
  }
  _resetPingTimeout() {
    this.clearTimeoutFn(this._pingTimeoutTimer);
    const r = this._pingInterval + this._pingTimeout;
    (this._pingTimeoutTime = Date.now() + r),
      (this._pingTimeoutTimer = this.setTimeoutFn(() => {
        this._onClose("ping timeout");
      }, r)),
      this.opts.autoUnref && this._pingTimeoutTimer.unref();
  }
  _onDrain() {
    this.writeBuffer.splice(0, this._prevBufferLen),
      (this._prevBufferLen = 0),
      this.writeBuffer.length === 0 ? this.emitReserved("drain") : this.flush();
  }
  flush() {
    if (
      this.readyState !== "closed" &&
      this.transport.writable &&
      !this.upgrading &&
      this.writeBuffer.length
    ) {
      const r = this._getWritablePackets();
      this.transport.send(r),
        (this._prevBufferLen = r.length),
        this.emitReserved("flush");
    }
  }
  _getWritablePackets() {
    if (
      !(
        this._maxPayload &&
        this.transport.name === "polling" &&
        this.writeBuffer.length > 1
      )
    )
      return this.writeBuffer;
    let o = 1;
    for (let i = 0; i < this.writeBuffer.length; i++) {
      const l = this.writeBuffer[i].data;
      if ((l && (o += x1(l)), i > 0 && o > this._maxPayload))
        return this.writeBuffer.slice(0, i);
      o += 2;
    }
    return this.writeBuffer;
  }
  _hasPingExpired() {
    if (!this._pingTimeoutTime) return !0;
    const r = Date.now() > this._pingTimeoutTime;
    return (
      r &&
        ((this._pingTimeoutTime = 0),
        Cl(() => {
          this._onClose("ping timeout");
        }, this.setTimeoutFn)),
      r
    );
  }
  write(r, o, i) {
    return this._sendPacket("message", r, o, i), this;
  }
  send(r, o, i) {
    return this._sendPacket("message", r, o, i), this;
  }
  _sendPacket(r, o, i, l) {
    if (
      (typeof o == "function" && ((l = o), (o = void 0)),
      typeof i == "function" && ((l = i), (i = null)),
      this.readyState === "closing" || this.readyState === "closed")
    )
      return;
    (i = i || {}), (i.compress = i.compress !== !1);
    const c = { type: r, data: o, options: i };
    this.emitReserved("packetCreate", c),
      this.writeBuffer.push(c),
      l && this.once("flush", l),
      this.flush();
  }
  close() {
    const r = () => {
        this._onClose("forced close"), this.transport.close();
      },
      o = () => {
        this.off("upgrade", o), this.off("upgradeError", o), r();
      },
      i = () => {
        this.once("upgrade", o), this.once("upgradeError", o);
      };
    return (
      (this.readyState === "opening" || this.readyState === "open") &&
        ((this.readyState = "closing"),
        this.writeBuffer.length
          ? this.once("drain", () => {
              this.upgrading ? i() : r();
            })
          : this.upgrading
          ? i()
          : r()),
      this
    );
  }
  _onError(r) {
    if (
      ((qn.priorWebsocketSuccess = !1),
      this.opts.tryAllTransports &&
        this.transports.length > 1 &&
        this.readyState === "opening")
    )
      return this.transports.shift(), this._open();
    this.emitReserved("error", r), this._onClose("transport error", r);
  }
  _onClose(r, o) {
    if (
      this.readyState === "opening" ||
      this.readyState === "open" ||
      this.readyState === "closing"
    ) {
      if (
        (this.clearTimeoutFn(this._pingTimeoutTimer),
        this.transport.removeAllListeners("close"),
        this.transport.close(),
        this.transport.removeAllListeners(),
        pu &&
          (this._beforeunloadEventListener &&
            removeEventListener(
              "beforeunload",
              this._beforeunloadEventListener,
              !1
            ),
          this._offlineEventListener))
      ) {
        const i = il.indexOf(this._offlineEventListener);
        i !== -1 && il.splice(i, 1);
      }
      (this.readyState = "closed"),
        (this.id = null),
        this.emitReserved("close", r, o),
        (this.writeBuffer = []),
        (this._prevBufferLen = 0);
    }
  }
}
qn.protocol = Xm;
class z1 extends qn {
  constructor() {
    super(...arguments), (this._upgrades = []);
  }
  onOpen() {
    if ((super.onOpen(), this.readyState === "open" && this.opts.upgrade))
      for (let r = 0; r < this._upgrades.length; r++)
        this._probe(this._upgrades[r]);
  }
  _probe(r) {
    let o = this.createTransport(r),
      i = !1;
    qn.priorWebsocketSuccess = !1;
    const l = () => {
      i ||
        (o.send([{ type: "ping", data: "probe" }]),
        o.once("packet", (x) => {
          if (!i)
            if (x.type === "pong" && x.data === "probe") {
              if (
                ((this.upgrading = !0), this.emitReserved("upgrading", o), !o)
              )
                return;
              (qn.priorWebsocketSuccess = o.name === "websocket"),
                this.transport.pause(() => {
                  i ||
                    (this.readyState !== "closed" &&
                      (y(),
                      this.setTransport(o),
                      o.send([{ type: "upgrade" }]),
                      this.emitReserved("upgrade", o),
                      (o = null),
                      (this.upgrading = !1),
                      this.flush()));
                });
            } else {
              const E = new Error("probe error");
              (E.transport = o.name), this.emitReserved("upgradeError", E);
            }
        }));
    };
    function c() {
      i || ((i = !0), y(), o.close(), (o = null));
    }
    const u = (x) => {
      const E = new Error("probe error: " + x);
      (E.transport = o.name), c(), this.emitReserved("upgradeError", E);
    };
    function f() {
      u("transport closed");
    }
    function m() {
      u("socket closed");
    }
    function h(x) {
      o && x.name !== o.name && c();
    }
    const y = () => {
      o.removeListener("open", l),
        o.removeListener("error", u),
        o.removeListener("close", f),
        this.off("close", m),
        this.off("upgrading", h);
    };
    o.once("open", l),
      o.once("error", u),
      o.once("close", f),
      this.once("close", m),
      this.once("upgrading", h),
      this._upgrades.indexOf("webtransport") !== -1 && r !== "webtransport"
        ? this.setTimeoutFn(() => {
            i || o.open();
          }, 200)
        : o.open();
  }
  onHandshake(r) {
    (this._upgrades = this._filterUpgrades(r.upgrades)), super.onHandshake(r);
  }
  _filterUpgrades(r) {
    const o = [];
    for (let i = 0; i < r.length; i++)
      ~this.transports.indexOf(r[i]) && o.push(r[i]);
    return o;
  }
}
let U1 = class extends z1 {
  constructor(r, o = {}) {
    const i = typeof r == "object" ? r : o;
    (!i.transports || (i.transports && typeof i.transports[0] == "string")) &&
      (i.transports = (i.transports || ["polling", "websocket", "webtransport"])
        .map((l) => j1[l])
        .filter((l) => !!l)),
      super(r, i);
  }
};
function W1(t, r = "", o) {
  let i = t;
  (o = o || (typeof location < "u" && location)),
    t == null && (t = o.protocol + "//" + o.host),
    typeof t == "string" &&
      (t.charAt(0) === "/" &&
        (t.charAt(1) === "/" ? (t = o.protocol + t) : (t = o.host + t)),
      /^(https?|wss?):\/\//.test(t) ||
        (typeof o < "u" ? (t = o.protocol + "//" + t) : (t = "https://" + t)),
      (i = fu(t))),
    i.port ||
      (/^(http|ws)$/.test(i.protocol)
        ? (i.port = "80")
        : /^(http|ws)s$/.test(i.protocol) && (i.port = "443")),
    (i.path = i.path || "/");
  const c = i.host.indexOf(":") !== -1 ? "[" + i.host + "]" : i.host;
  return (
    (i.id = i.protocol + "://" + c + ":" + i.port + r),
    (i.href =
      i.protocol + "://" + c + (o && o.port === i.port ? "" : ":" + i.port)),
    i
  );
}
const Q1 = typeof ArrayBuffer == "function",
  H1 = (t) =>
    typeof ArrayBuffer.isView == "function"
      ? ArrayBuffer.isView(t)
      : t.buffer instanceof ArrayBuffer,
  rg = Object.prototype.toString,
  G1 =
    typeof Blob == "function" ||
    (typeof Blob < "u" && rg.call(Blob) === "[object BlobConstructor]"),
  V1 =
    typeof File == "function" ||
    (typeof File < "u" && rg.call(File) === "[object FileConstructor]");
function Zu(t) {
  return (
    (Q1 && (t instanceof ArrayBuffer || H1(t))) ||
    (G1 && t instanceof Blob) ||
    (V1 && t instanceof File)
  );
}
function sl(t, r) {
  if (!t || typeof t != "object") return !1;
  if (Array.isArray(t)) {
    for (let o = 0, i = t.length; o < i; o++) if (sl(t[o])) return !0;
    return !1;
  }
  if (Zu(t)) return !0;
  if (t.toJSON && typeof t.toJSON == "function" && arguments.length === 1)
    return sl(t.toJSON(), !0);
  for (const o in t)
    if (Object.prototype.hasOwnProperty.call(t, o) && sl(t[o])) return !0;
  return !1;
}
function Y1(t) {
  const r = [],
    o = t.data,
    i = t;
  return (
    (i.data = hu(o, r)), (i.attachments = r.length), { packet: i, buffers: r }
  );
}
function hu(t, r) {
  if (!t) return t;
  if (Zu(t)) {
    const o = { _placeholder: !0, num: r.length };
    return r.push(t), o;
  } else if (Array.isArray(t)) {
    const o = new Array(t.length);
    for (let i = 0; i < t.length; i++) o[i] = hu(t[i], r);
    return o;
  } else if (typeof t == "object" && !(t instanceof Date)) {
    const o = {};
    for (const i in t)
      Object.prototype.hasOwnProperty.call(t, i) && (o[i] = hu(t[i], r));
    return o;
  }
  return t;
}
function $1(t, r) {
  return (t.data = mu(t.data, r)), delete t.attachments, t;
}
function mu(t, r) {
  if (!t) return t;
  if (t && t._placeholder === !0) {
    if (typeof t.num == "number" && t.num >= 0 && t.num < r.length)
      return r[t.num];
    throw new Error("illegal attachments");
  } else if (Array.isArray(t))
    for (let o = 0; o < t.length; o++) t[o] = mu(t[o], r);
  else if (typeof t == "object")
    for (const o in t)
      Object.prototype.hasOwnProperty.call(t, o) && (t[o] = mu(t[o], r));
  return t;
}
const Z1 = [
    "connect",
    "connect_error",
    "disconnect",
    "disconnecting",
    "newListener",
    "removeListener",
  ],
  J1 = 5;
var ke;
(function (t) {
  (t[(t.CONNECT = 0)] = "CONNECT"),
    (t[(t.DISCONNECT = 1)] = "DISCONNECT"),
    (t[(t.EVENT = 2)] = "EVENT"),
    (t[(t.ACK = 3)] = "ACK"),
    (t[(t.CONNECT_ERROR = 4)] = "CONNECT_ERROR"),
    (t[(t.BINARY_EVENT = 5)] = "BINARY_EVENT"),
    (t[(t.BINARY_ACK = 6)] = "BINARY_ACK");
})(ke || (ke = {}));
class X1 {
  constructor(r) {
    this.replacer = r;
  }
  encode(r) {
    return (r.type === ke.EVENT || r.type === ke.ACK) && sl(r)
      ? this.encodeAsBinary({
          type: r.type === ke.EVENT ? ke.BINARY_EVENT : ke.BINARY_ACK,
          nsp: r.nsp,
          data: r.data,
          id: r.id,
        })
      : [this.encodeAsString(r)];
  }
  encodeAsString(r) {
    let o = "" + r.type;
    return (
      (r.type === ke.BINARY_EVENT || r.type === ke.BINARY_ACK) &&
        (o += r.attachments + "-"),
      r.nsp && r.nsp !== "/" && (o += r.nsp + ","),
      r.id != null && (o += r.id),
      r.data != null && (o += JSON.stringify(r.data, this.replacer)),
      o
    );
  }
  encodeAsBinary(r) {
    const o = Y1(r),
      i = this.encodeAsString(o.packet),
      l = o.buffers;
    return l.unshift(i), l;
  }
}
function Bh(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
class Ju extends Ve {
  constructor(r) {
    super(), (this.reviver = r);
  }
  add(r) {
    let o;
    if (typeof r == "string") {
      if (this.reconstructor)
        throw new Error("got plaintext data when reconstructing a packet");
      o = this.decodeString(r);
      const i = o.type === ke.BINARY_EVENT;
      i || o.type === ke.BINARY_ACK
        ? ((o.type = i ? ke.EVENT : ke.ACK),
          (this.reconstructor = new q1(o)),
          o.attachments === 0 && super.emitReserved("decoded", o))
        : super.emitReserved("decoded", o);
    } else if (Zu(r) || r.base64)
      if (this.reconstructor)
        (o = this.reconstructor.takeBinaryData(r)),
          o && ((this.reconstructor = null), super.emitReserved("decoded", o));
      else throw new Error("got binary data when not reconstructing a packet");
    else throw new Error("Unknown type: " + r);
  }
  decodeString(r) {
    let o = 0;
    const i = { type: Number(r.charAt(0)) };
    if (ke[i.type] === void 0) throw new Error("unknown packet type " + i.type);
    if (i.type === ke.BINARY_EVENT || i.type === ke.BINARY_ACK) {
      const c = o + 1;
      for (; r.charAt(++o) !== "-" && o != r.length; );
      const u = r.substring(c, o);
      if (u != Number(u) || r.charAt(o) !== "-")
        throw new Error("Illegal attachments");
      i.attachments = Number(u);
    }
    if (r.charAt(o + 1) === "/") {
      const c = o + 1;
      for (; ++o && !(r.charAt(o) === "," || o === r.length); );
      i.nsp = r.substring(c, o);
    } else i.nsp = "/";
    const l = r.charAt(o + 1);
    if (l !== "" && Number(l) == l) {
      const c = o + 1;
      for (; ++o; ) {
        const u = r.charAt(o);
        if (u == null || Number(u) != u) {
          --o;
          break;
        }
        if (o === r.length) break;
      }
      i.id = Number(r.substring(c, o + 1));
    }
    if (r.charAt(++o)) {
      const c = this.tryParse(r.substr(o));
      if (Ju.isPayloadValid(i.type, c)) i.data = c;
      else throw new Error("invalid payload");
    }
    return i;
  }
  tryParse(r) {
    try {
      return JSON.parse(r, this.reviver);
    } catch {
      return !1;
    }
  }
  static isPayloadValid(r, o) {
    switch (r) {
      case ke.CONNECT:
        return Bh(o);
      case ke.DISCONNECT:
        return o === void 0;
      case ke.CONNECT_ERROR:
        return typeof o == "string" || Bh(o);
      case ke.EVENT:
      case ke.BINARY_EVENT:
        return (
          Array.isArray(o) &&
          (typeof o[0] == "number" ||
            (typeof o[0] == "string" && Z1.indexOf(o[0]) === -1))
        );
      case ke.ACK:
      case ke.BINARY_ACK:
        return Array.isArray(o);
    }
  }
  destroy() {
    this.reconstructor &&
      (this.reconstructor.finishedReconstruction(),
      (this.reconstructor = null));
  }
}
class q1 {
  constructor(r) {
    (this.packet = r), (this.buffers = []), (this.reconPack = r);
  }
  takeBinaryData(r) {
    if (
      (this.buffers.push(r), this.buffers.length === this.reconPack.attachments)
    ) {
      const o = $1(this.reconPack, this.buffers);
      return this.finishedReconstruction(), o;
    }
    return null;
  }
  finishedReconstruction() {
    (this.reconPack = null), (this.buffers = []);
  }
}
const K1 = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      Decoder: Ju,
      Encoder: X1,
      get PacketType() {
        return ke;
      },
      protocol: J1,
    },
    Symbol.toStringTag,
    { value: "Module" }
  )
);
function Vt(t, r, o) {
  return (
    t.on(r, o),
    function () {
      t.off(r, o);
    }
  );
}
const eS = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  newListener: 1,
  removeListener: 1,
});
class og extends Ve {
  constructor(r, o, i) {
    super(),
      (this.connected = !1),
      (this.recovered = !1),
      (this.receiveBuffer = []),
      (this.sendBuffer = []),
      (this._queue = []),
      (this._queueSeq = 0),
      (this.ids = 0),
      (this.acks = {}),
      (this.flags = {}),
      (this.io = r),
      (this.nsp = o),
      i && i.auth && (this.auth = i.auth),
      (this._opts = Object.assign({}, i)),
      this.io._autoConnect && this.open();
  }
  get disconnected() {
    return !this.connected;
  }
  subEvents() {
    if (this.subs) return;
    const r = this.io;
    this.subs = [
      Vt(r, "open", this.onopen.bind(this)),
      Vt(r, "packet", this.onpacket.bind(this)),
      Vt(r, "error", this.onerror.bind(this)),
      Vt(r, "close", this.onclose.bind(this)),
    ];
  }
  get active() {
    return !!this.subs;
  }
  connect() {
    return this.connected
      ? this
      : (this.subEvents(),
        this.io._reconnecting || this.io.open(),
        this.io._readyState === "open" && this.onopen(),
        this);
  }
  open() {
    return this.connect();
  }
  send(...r) {
    return r.unshift("message"), this.emit.apply(this, r), this;
  }
  emit(r, ...o) {
    var i, l, c;
    if (eS.hasOwnProperty(r))
      throw new Error('"' + r.toString() + '" is a reserved event name');
    if (
      (o.unshift(r),
      this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
    )
      return this._addToQueue(o), this;
    const u = { type: ke.EVENT, data: o };
    if (
      ((u.options = {}),
      (u.options.compress = this.flags.compress !== !1),
      typeof o[o.length - 1] == "function")
    ) {
      const y = this.ids++,
        x = o.pop();
      this._registerAckCallback(y, x), (u.id = y);
    }
    const f =
        (l =
          (i = this.io.engine) === null || i === void 0
            ? void 0
            : i.transport) === null || l === void 0
          ? void 0
          : l.writable,
      m =
        this.connected &&
        !(
          !((c = this.io.engine) === null || c === void 0) &&
          c._hasPingExpired()
        );
    return (
      (this.flags.volatile && !f) ||
        (m
          ? (this.notifyOutgoingListeners(u), this.packet(u))
          : this.sendBuffer.push(u)),
      (this.flags = {}),
      this
    );
  }
  _registerAckCallback(r, o) {
    var i;
    const l =
      (i = this.flags.timeout) !== null && i !== void 0
        ? i
        : this._opts.ackTimeout;
    if (l === void 0) {
      this.acks[r] = o;
      return;
    }
    const c = this.io.setTimeoutFn(() => {
        delete this.acks[r];
        for (let f = 0; f < this.sendBuffer.length; f++)
          this.sendBuffer[f].id === r && this.sendBuffer.splice(f, 1);
        o.call(this, new Error("operation has timed out"));
      }, l),
      u = (...f) => {
        this.io.clearTimeoutFn(c), o.apply(this, f);
      };
    (u.withError = !0), (this.acks[r] = u);
  }
  emitWithAck(r, ...o) {
    return new Promise((i, l) => {
      const c = (u, f) => (u ? l(u) : i(f));
      (c.withError = !0), o.push(c), this.emit(r, ...o);
    });
  }
  _addToQueue(r) {
    let o;
    typeof r[r.length - 1] == "function" && (o = r.pop());
    const i = {
      id: this._queueSeq++,
      tryCount: 0,
      pending: !1,
      args: r,
      flags: Object.assign({ fromQueue: !0 }, this.flags),
    };
    r.push((l, ...c) =>
      i !== this._queue[0]
        ? void 0
        : (l !== null
            ? i.tryCount > this._opts.retries &&
              (this._queue.shift(), o && o(l))
            : (this._queue.shift(), o && o(null, ...c)),
          (i.pending = !1),
          this._drainQueue())
    ),
      this._queue.push(i),
      this._drainQueue();
  }
  _drainQueue(r = !1) {
    if (!this.connected || this._queue.length === 0) return;
    const o = this._queue[0];
    (o.pending && !r) ||
      ((o.pending = !0),
      o.tryCount++,
      (this.flags = o.flags),
      this.emit.apply(this, o.args));
  }
  packet(r) {
    (r.nsp = this.nsp), this.io._packet(r);
  }
  onopen() {
    typeof this.auth == "function"
      ? this.auth((r) => {
          this._sendConnectPacket(r);
        })
      : this._sendConnectPacket(this.auth);
  }
  _sendConnectPacket(r) {
    this.packet({
      type: ke.CONNECT,
      data: this._pid
        ? Object.assign({ pid: this._pid, offset: this._lastOffset }, r)
        : r,
    });
  }
  onerror(r) {
    this.connected || this.emitReserved("connect_error", r);
  }
  onclose(r, o) {
    (this.connected = !1),
      delete this.id,
      this.emitReserved("disconnect", r, o),
      this._clearAcks();
  }
  _clearAcks() {
    Object.keys(this.acks).forEach((r) => {
      if (!this.sendBuffer.some((i) => String(i.id) === r)) {
        const i = this.acks[r];
        delete this.acks[r],
          i.withError &&
            i.call(this, new Error("socket has been disconnected"));
      }
    });
  }
  onpacket(r) {
    if (r.nsp === this.nsp)
      switch (r.type) {
        case ke.CONNECT:
          r.data && r.data.sid
            ? this.onconnect(r.data.sid, r.data.pid)
            : this.emitReserved(
                "connect_error",
                new Error(
                  "It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"
                )
              );
          break;
        case ke.EVENT:
        case ke.BINARY_EVENT:
          this.onevent(r);
          break;
        case ke.ACK:
        case ke.BINARY_ACK:
          this.onack(r);
          break;
        case ke.DISCONNECT:
          this.ondisconnect();
          break;
        case ke.CONNECT_ERROR:
          this.destroy();
          const i = new Error(r.data.message);
          (i.data = r.data.data), this.emitReserved("connect_error", i);
          break;
      }
  }
  onevent(r) {
    const o = r.data || [];
    r.id != null && o.push(this.ack(r.id)),
      this.connected
        ? this.emitEvent(o)
        : this.receiveBuffer.push(Object.freeze(o));
  }
  emitEvent(r) {
    if (this._anyListeners && this._anyListeners.length) {
      const o = this._anyListeners.slice();
      for (const i of o) i.apply(this, r);
    }
    super.emit.apply(this, r),
      this._pid &&
        r.length &&
        typeof r[r.length - 1] == "string" &&
        (this._lastOffset = r[r.length - 1]);
  }
  ack(r) {
    const o = this;
    let i = !1;
    return function (...l) {
      i || ((i = !0), o.packet({ type: ke.ACK, id: r, data: l }));
    };
  }
  onack(r) {
    const o = this.acks[r.id];
    typeof o == "function" &&
      (delete this.acks[r.id],
      o.withError && r.data.unshift(null),
      o.apply(this, r.data));
  }
  onconnect(r, o) {
    (this.id = r),
      (this.recovered = o && this._pid === o),
      (this._pid = o),
      (this.connected = !0),
      this.emitBuffered(),
      this.emitReserved("connect"),
      this._drainQueue(!0);
  }
  emitBuffered() {
    this.receiveBuffer.forEach((r) => this.emitEvent(r)),
      (this.receiveBuffer = []),
      this.sendBuffer.forEach((r) => {
        this.notifyOutgoingListeners(r), this.packet(r);
      }),
      (this.sendBuffer = []);
  }
  ondisconnect() {
    this.destroy(), this.onclose("io server disconnect");
  }
  destroy() {
    this.subs && (this.subs.forEach((r) => r()), (this.subs = void 0)),
      this.io._destroy(this);
  }
  disconnect() {
    return (
      this.connected && this.packet({ type: ke.DISCONNECT }),
      this.destroy(),
      this.connected && this.onclose("io client disconnect"),
      this
    );
  }
  close() {
    return this.disconnect();
  }
  compress(r) {
    return (this.flags.compress = r), this;
  }
  get volatile() {
    return (this.flags.volatile = !0), this;
  }
  timeout(r) {
    return (this.flags.timeout = r), this;
  }
  onAny(r) {
    return (
      (this._anyListeners = this._anyListeners || []),
      this._anyListeners.push(r),
      this
    );
  }
  prependAny(r) {
    return (
      (this._anyListeners = this._anyListeners || []),
      this._anyListeners.unshift(r),
      this
    );
  }
  offAny(r) {
    if (!this._anyListeners) return this;
    if (r) {
      const o = this._anyListeners;
      for (let i = 0; i < o.length; i++)
        if (r === o[i]) return o.splice(i, 1), this;
    } else this._anyListeners = [];
    return this;
  }
  listenersAny() {
    return this._anyListeners || [];
  }
  onAnyOutgoing(r) {
    return (
      (this._anyOutgoingListeners = this._anyOutgoingListeners || []),
      this._anyOutgoingListeners.push(r),
      this
    );
  }
  prependAnyOutgoing(r) {
    return (
      (this._anyOutgoingListeners = this._anyOutgoingListeners || []),
      this._anyOutgoingListeners.unshift(r),
      this
    );
  }
  offAnyOutgoing(r) {
    if (!this._anyOutgoingListeners) return this;
    if (r) {
      const o = this._anyOutgoingListeners;
      for (let i = 0; i < o.length; i++)
        if (r === o[i]) return o.splice(i, 1), this;
    } else this._anyOutgoingListeners = [];
    return this;
  }
  listenersAnyOutgoing() {
    return this._anyOutgoingListeners || [];
  }
  notifyOutgoingListeners(r) {
    if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
      const o = this._anyOutgoingListeners.slice();
      for (const i of o) i.apply(this, r.data);
    }
  }
}
function ho(t) {
  (t = t || {}),
    (this.ms = t.min || 100),
    (this.max = t.max || 1e4),
    (this.factor = t.factor || 2),
    (this.jitter = t.jitter > 0 && t.jitter <= 1 ? t.jitter : 0),
    (this.attempts = 0);
}
ho.prototype.duration = function () {
  var t = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var r = Math.random(),
      o = Math.floor(r * this.jitter * t);
    t = Math.floor(r * 10) & 1 ? t + o : t - o;
  }
  return Math.min(t, this.max) | 0;
};
ho.prototype.reset = function () {
  this.attempts = 0;
};
ho.prototype.setMin = function (t) {
  this.ms = t;
};
ho.prototype.setMax = function (t) {
  this.max = t;
};
ho.prototype.setJitter = function (t) {
  this.jitter = t;
};
class gu extends Ve {
  constructor(r, o) {
    var i;
    super(),
      (this.nsps = {}),
      (this.subs = []),
      r && typeof r == "object" && ((o = r), (r = void 0)),
      (o = o || {}),
      (o.path = o.path || "/socket.io"),
      (this.opts = o),
      kl(this, o),
      this.reconnection(o.reconnection !== !1),
      this.reconnectionAttempts(o.reconnectionAttempts || 1 / 0),
      this.reconnectionDelay(o.reconnectionDelay || 1e3),
      this.reconnectionDelayMax(o.reconnectionDelayMax || 5e3),
      this.randomizationFactor(
        (i = o.randomizationFactor) !== null && i !== void 0 ? i : 0.5
      ),
      (this.backoff = new ho({
        min: this.reconnectionDelay(),
        max: this.reconnectionDelayMax(),
        jitter: this.randomizationFactor(),
      })),
      this.timeout(o.timeout == null ? 2e4 : o.timeout),
      (this._readyState = "closed"),
      (this.uri = r);
    const l = o.parser || K1;
    (this.encoder = new l.Encoder()),
      (this.decoder = new l.Decoder()),
      (this._autoConnect = o.autoConnect !== !1),
      this._autoConnect && this.open();
  }
  reconnection(r) {
    return arguments.length
      ? ((this._reconnection = !!r), r || (this.skipReconnect = !0), this)
      : this._reconnection;
  }
  reconnectionAttempts(r) {
    return r === void 0
      ? this._reconnectionAttempts
      : ((this._reconnectionAttempts = r), this);
  }
  reconnectionDelay(r) {
    var o;
    return r === void 0
      ? this._reconnectionDelay
      : ((this._reconnectionDelay = r),
        (o = this.backoff) === null || o === void 0 || o.setMin(r),
        this);
  }
  randomizationFactor(r) {
    var o;
    return r === void 0
      ? this._randomizationFactor
      : ((this._randomizationFactor = r),
        (o = this.backoff) === null || o === void 0 || o.setJitter(r),
        this);
  }
  reconnectionDelayMax(r) {
    var o;
    return r === void 0
      ? this._reconnectionDelayMax
      : ((this._reconnectionDelayMax = r),
        (o = this.backoff) === null || o === void 0 || o.setMax(r),
        this);
  }
  timeout(r) {
    return arguments.length ? ((this._timeout = r), this) : this._timeout;
  }
  maybeReconnectOnOpen() {
    !this._reconnecting &&
      this._reconnection &&
      this.backoff.attempts === 0 &&
      this.reconnect();
  }
  open(r) {
    if (~this._readyState.indexOf("open")) return this;
    this.engine = new U1(this.uri, this.opts);
    const o = this.engine,
      i = this;
    (this._readyState = "opening"), (this.skipReconnect = !1);
    const l = Vt(o, "open", function () {
        i.onopen(), r && r();
      }),
      c = (f) => {
        this.cleanup(),
          (this._readyState = "closed"),
          this.emitReserved("error", f),
          r ? r(f) : this.maybeReconnectOnOpen();
      },
      u = Vt(o, "error", c);
    if (this._timeout !== !1) {
      const f = this._timeout,
        m = this.setTimeoutFn(() => {
          l(), c(new Error("timeout")), o.close();
        }, f);
      this.opts.autoUnref && m.unref(),
        this.subs.push(() => {
          this.clearTimeoutFn(m);
        });
    }
    return this.subs.push(l), this.subs.push(u), this;
  }
  connect(r) {
    return this.open(r);
  }
  onopen() {
    this.cleanup(), (this._readyState = "open"), this.emitReserved("open");
    const r = this.engine;
    this.subs.push(
      Vt(r, "ping", this.onping.bind(this)),
      Vt(r, "data", this.ondata.bind(this)),
      Vt(r, "error", this.onerror.bind(this)),
      Vt(r, "close", this.onclose.bind(this)),
      Vt(this.decoder, "decoded", this.ondecoded.bind(this))
    );
  }
  onping() {
    this.emitReserved("ping");
  }
  ondata(r) {
    try {
      this.decoder.add(r);
    } catch (o) {
      this.onclose("parse error", o);
    }
  }
  ondecoded(r) {
    Cl(() => {
      this.emitReserved("packet", r);
    }, this.setTimeoutFn);
  }
  onerror(r) {
    this.emitReserved("error", r);
  }
  socket(r, o) {
    let i = this.nsps[r];
    return (
      i
        ? this._autoConnect && !i.active && i.connect()
        : ((i = new og(this, r, o)), (this.nsps[r] = i)),
      i
    );
  }
  _destroy(r) {
    const o = Object.keys(this.nsps);
    for (const i of o) if (this.nsps[i].active) return;
    this._close();
  }
  _packet(r) {
    const o = this.encoder.encode(r);
    for (let i = 0; i < o.length; i++) this.engine.write(o[i], r.options);
  }
  cleanup() {
    this.subs.forEach((r) => r()),
      (this.subs.length = 0),
      this.decoder.destroy();
  }
  _close() {
    (this.skipReconnect = !0),
      (this._reconnecting = !1),
      this.onclose("forced close");
  }
  disconnect() {
    return this._close();
  }
  onclose(r, o) {
    var i;
    this.cleanup(),
      (i = this.engine) === null || i === void 0 || i.close(),
      this.backoff.reset(),
      (this._readyState = "closed"),
      this.emitReserved("close", r, o),
      this._reconnection && !this.skipReconnect && this.reconnect();
  }
  reconnect() {
    if (this._reconnecting || this.skipReconnect) return this;
    const r = this;
    if (this.backoff.attempts >= this._reconnectionAttempts)
      this.backoff.reset(),
        this.emitReserved("reconnect_failed"),
        (this._reconnecting = !1);
    else {
      const o = this.backoff.duration();
      this._reconnecting = !0;
      const i = this.setTimeoutFn(() => {
        r.skipReconnect ||
          (this.emitReserved("reconnect_attempt", r.backoff.attempts),
          !r.skipReconnect &&
            r.open((l) => {
              l
                ? ((r._reconnecting = !1),
                  r.reconnect(),
                  this.emitReserved("reconnect_error", l))
                : r.onreconnect();
            }));
      }, o);
      this.opts.autoUnref && i.unref(),
        this.subs.push(() => {
          this.clearTimeoutFn(i);
        });
    }
  }
  onreconnect() {
    const r = this.backoff.attempts;
    (this._reconnecting = !1),
      this.backoff.reset(),
      this.emitReserved("reconnect", r);
  }
}
const ci = {};
function ll(t, r) {
  typeof t == "object" && ((r = t), (t = void 0)), (r = r || {});
  const o = W1(t, r.path || "/socket.io"),
    i = o.source,
    l = o.id,
    c = o.path,
    u = ci[l] && c in ci[l].nsps,
    f = r.forceNew || r["force new connection"] || r.multiplex === !1 || u;
  let m;
  return (
    f ? (m = new gu(i, r)) : (ci[l] || (ci[l] = new gu(i, r)), (m = ci[l])),
    o.query && !r.query && (r.query = o.queryKey),
    m.socket(o.path, r)
  );
}
Object.assign(ll, { Manager: gu, Socket: og, io: ll, connect: ll });
const fe = ll("http://localhost:3001"),
  ig = g.createContext(),
  rr = () => g.useContext(ig),
  sg = ({ children: t }) => {
    const [r, o] = g.useState({}),
      [i, l] = g.useState(!1),
      [c, u] = g.useState(!1),
      [f, m] = g.useState(""),
      [h, y] = g.useState(!1),
      { gameId: x } = _m(),
      E = Ei();
    g.useEffect(
      () => (
        fe.emit("update-game-state", x),
        fe.on("connect", () => {
          console.log(`Connected to game socket server for game ${x}.`);
        }),
        fe.on("updated-game-state", (D) => {
          o(D);
        }),
        fe.on("player-joined", (D) => {
          o(D);
        }),
        fe.on("player-left", (D) => {
          o(D);
        }),
        fe.on("dice-rolling", () => {
          o((B) => ({
            ...B,
            diceState: { ...B.diceState, dicePrompt: "", isShuffling: !0 },
          }));
          const D = setInterval(() => {
            const B = Math.floor(Math.random() * 6) + 1;
            o((W) => ({ ...W, diceState: { ...W.diceState, diceValue: B } }));
          }, 100);
          setTimeout(() => {
            clearInterval(D);
          }, 1400);
        }),
        fe.on("player-moved", (D) => {
          o(D), l(!1);
        }),
        fe.on("category-selected", (D) => {
          fe.emit("request-final-question", { gameId: x, category: D });
        }),
        fe.on("game-won", (D) => {
          alert(D), localStorage.removeItem("player-data"), E("/");
        }),
        fe.on("select-final-question-category", () => {
          m("Select a category for the final question."), u(!0);
        }),
        () => {
          fe.off("connect"),
            fe.off("update-game-state"),
            fe.off("player-joined"),
            fe.off("player-left"),
            fe.off("dice-rolled"),
            fe.off("dice-rolling"),
            fe.off("game-won"),
            fe.off("player-moved"),
            fe.off("category-selected"),
            fe.off("select-final-question-category");
        }
      ),
      [x, E]
    );
    const b = (D) => {
        fe.emit("start-game", D);
      },
      C = (D, B) => {
        l(!0), fe.emit("request-roll-dice", { gameState: D, playerData: B });
      },
      w = (D) => {
        fe.emit("leave-game", D);
      },
      S = (D, B) => {
        fe.emit("move-player", { gameId: D, spaceId: B });
      },
      R = (D, B) => {
        fe.emit("category-selected", { gameId: D, category: B });
      },
      k = (D, B) => {
        fe.emit("question-feedback", { gameId: D, response: B });
      },
      P = (D) => {
        fe.emit("get-final-question-category", D);
      };
    return v.jsx(ig.Provider, {
      value: {
        gameState: r,
        setGameState: o,
        startGame: b,
        requestRollDice: C,
        leaveGame: w,
        movePlayer: S,
        isChoosingSpace: i,
        answerQuestion: k,
        openColorPicker: c,
        setOpenColorPicker: u,
        getCHQuestion: R,
        getFinalQuestionCategory: P,
        categoryPickerPrompt: f,
        setCategoryPickerPrompt: m,
        openGameRules: h,
        setOpenGameRules: y,
      },
      children: t,
    });
  };
sg.propTypes = { children: Yt.node.isRequired };
const lg = g.createContext(),
  ag = () => g.useContext(lg),
  cg = ({ children: t }) => {
    const [r, o] = g.useState([]),
      i = Ei();
    g.useEffect(
      () => (
        fe.on("connect", () => {
          console.log("Connected to home socket server."),
            fe.emit("fetch-active-games");
        }),
        fe.on("fetched-active-games", (h) => {
          o(h);
        }),
        fe.on("game-created", (h) => {
          l(h, "create");
        }),
        fe.on("player-joined", (h) => {
          l(h, "join");
        }),
        fe.on("player-left", (h) => {
          l(h, "leave");
        }),
        fe.on("game-started", (h) => {
          l(h, "started");
        }),
        fe.on("game-deleted", (h) => {
          l(h, "delete");
          const y = JSON.parse(localStorage.getItem("player-data"));
          y &&
            y.gameId === h &&
            (localStorage.removeItem("player-data"), i("/"));
        }),
        () => {
          fe.off("connect"),
            fe.off("fetched-active-games"),
            fe.off("game-created"),
            fe.off("player-joined"),
            fe.off("player-left"),
            fe.off("game-started"),
            fe.off("game-deleted");
        }
      ),
      [i]
    );
    const l = (h, y) => {
        o((x) => {
          switch (y) {
            case "create":
              return x.some((E) => E.gameId === h.gameId) ? x : [...x, h];
            case "join":
            case "leave":
            case "started":
              return x.map((E) => (E.gameId === h.gameId ? h : E));
            case "delete":
              return x.filter((E) => E.gameId !== h);
            default:
              return x;
          }
        });
      },
      c = (h) =>
        new Promise((y, x) => {
          fe.emit("create-game", h, (E) => {
            E.error ? x(E.error) : y(E);
          });
        }),
      u = (h, y) => {
        fe.emit("join-game", { gameId: h, playerData: y });
      },
      f = (h) => {
        fe.emit("delete-game", h);
      },
      m = (h, y) => {
        fe.emit("leave-game", { playerData: y });
      };
    return v.jsx(lg.Provider, {
      value: {
        games: r,
        socketCreateGame: c,
        socketJoinGame: u,
        socketDeleteGame: f,
        socketLeaveGame: m,
      },
      children: t,
    });
  };
cg.propTypes = { children: Yt.node.isRequired };
function jh(t, r) {
  if (typeof t == "function") return t(r);
  t != null && (t.current = r);
}
function ug(...t) {
  return (r) => {
    let o = !1;
    const i = t.map((l) => {
      const c = jh(l, r);
      return !o && typeof c == "function" && (o = !0), c;
    });
    if (o)
      return () => {
        for (let l = 0; l < i.length; l++) {
          const c = i[l];
          typeof c == "function" ? c() : jh(t[l], null);
        }
      };
  };
}
function Me(...t) {
  return g.useCallback(ug(...t), t);
}
var xt = g.forwardRef((t, r) => {
  const { children: o, ...i } = t,
    l = g.Children.toArray(o),
    c = l.find(tS);
  if (c) {
    const u = c.props.children,
      f = l.map((m) =>
        m === c
          ? g.Children.count(u) > 1
            ? g.Children.only(null)
            : g.isValidElement(u)
            ? u.props.children
            : null
          : m
      );
    return v.jsx(yu, {
      ...i,
      ref: r,
      children: g.isValidElement(u) ? g.cloneElement(u, void 0, f) : null,
    });
  }
  return v.jsx(yu, { ...i, ref: r, children: o });
});
xt.displayName = "Slot";
var yu = g.forwardRef((t, r) => {
  const { children: o, ...i } = t;
  if (g.isValidElement(o)) {
    const l = rS(o);
    return g.cloneElement(o, { ...nS(i, o.props), ref: r ? ug(r, l) : l });
  }
  return g.Children.count(o) > 1 ? g.Children.only(null) : null;
});
yu.displayName = "SlotClone";
var dg = ({ children: t }) => v.jsx(v.Fragment, { children: t });
function tS(t) {
  return g.isValidElement(t) && t.type === dg;
}
function nS(t, r) {
  const o = { ...r };
  for (const i in r) {
    const l = t[i],
      c = r[i];
    /^on[A-Z]/.test(i)
      ? l && c
        ? (o[i] = (...f) => {
            c(...f), l(...f);
          })
        : l && (o[i] = l)
      : i === "style"
      ? (o[i] = { ...l, ...c })
      : i === "className" && (o[i] = [l, c].filter(Boolean).join(" "));
  }
  return { ...t, ...o };
}
function rS(t) {
  var i, l;
  let r =
      (i = Object.getOwnPropertyDescriptor(t.props, "ref")) == null
        ? void 0
        : i.get,
    o = r && "isReactWarning" in r && r.isReactWarning;
  return o
    ? t.ref
    : ((r =
        (l = Object.getOwnPropertyDescriptor(t, "ref")) == null
          ? void 0
          : l.get),
      (o = r && "isReactWarning" in r && r.isReactWarning),
      o ? t.props.ref : t.props.ref || t.ref);
}
function fg(t) {
  var r,
    o,
    i = "";
  if (typeof t == "string" || typeof t == "number") i += t;
  else if (typeof t == "object")
    if (Array.isArray(t)) {
      var l = t.length;
      for (r = 0; r < l; r++)
        t[r] && (o = fg(t[r])) && (i && (i += " "), (i += o));
    } else for (o in t) t[o] && (i && (i += " "), (i += o));
  return i;
}
function pg() {
  for (var t, r, o = 0, i = "", l = arguments.length; o < l; o++)
    (t = arguments[o]) && (r = fg(t)) && (i && (i += " "), (i += r));
  return i;
}
const Mh = (t) => (typeof t == "boolean" ? `${t}` : t === 0 ? "0" : t),
  Lh = pg,
  hg = (t, r) => (o) => {
    var i;
    if ((r == null ? void 0 : r.variants) == null)
      return Lh(
        t,
        o == null ? void 0 : o.class,
        o == null ? void 0 : o.className
      );
    const { variants: l, defaultVariants: c } = r,
      u = Object.keys(l).map((h) => {
        const y = o == null ? void 0 : o[h],
          x = c == null ? void 0 : c[h];
        if (y === null) return null;
        const E = Mh(y) || Mh(x);
        return l[h][E];
      }),
      f =
        o &&
        Object.entries(o).reduce((h, y) => {
          let [x, E] = y;
          return E === void 0 || (h[x] = E), h;
        }, {}),
      m =
        r == null || (i = r.compoundVariants) === null || i === void 0
          ? void 0
          : i.reduce((h, y) => {
              let { class: x, className: E, ...b } = y;
              return Object.entries(b).every((C) => {
                let [w, S] = C;
                return Array.isArray(S)
                  ? S.includes({ ...c, ...f }[w])
                  : { ...c, ...f }[w] === S;
              })
                ? [...h, x, E]
                : h;
            }, []);
    return Lh(
      t,
      u,
      m,
      o == null ? void 0 : o.class,
      o == null ? void 0 : o.className
    );
  },
  Xu = "-",
  oS = (t) => {
    const r = sS(t),
      { conflictingClassGroups: o, conflictingClassGroupModifiers: i } = t;
    return {
      getClassGroupId: (u) => {
        const f = u.split(Xu);
        return f[0] === "" && f.length !== 1 && f.shift(), mg(f, r) || iS(u);
      },
      getConflictingClassGroupIds: (u, f) => {
        const m = o[u] || [];
        return f && i[u] ? [...m, ...i[u]] : m;
      },
    };
  },
  mg = (t, r) => {
    var u;
    if (t.length === 0) return r.classGroupId;
    const o = t[0],
      i = r.nextPart.get(o),
      l = i ? mg(t.slice(1), i) : void 0;
    if (l) return l;
    if (r.validators.length === 0) return;
    const c = t.join(Xu);
    return (u = r.validators.find(({ validator: f }) => f(c))) == null
      ? void 0
      : u.classGroupId;
  },
  _h = /^\[(.+)\]$/,
  iS = (t) => {
    if (_h.test(t)) {
      const r = _h.exec(t)[1],
        o = r == null ? void 0 : r.substring(0, r.indexOf(":"));
      if (o) return "arbitrary.." + o;
    }
  },
  sS = (t) => {
    const { theme: r, prefix: o } = t,
      i = { nextPart: new Map(), validators: [] };
    return (
      aS(Object.entries(t.classGroups), o).forEach(([c, u]) => {
        vu(u, i, c, r);
      }),
      i
    );
  },
  vu = (t, r, o, i) => {
    t.forEach((l) => {
      if (typeof l == "string") {
        const c = l === "" ? r : Fh(r, l);
        c.classGroupId = o;
        return;
      }
      if (typeof l == "function") {
        if (lS(l)) {
          vu(l(i), r, o, i);
          return;
        }
        r.validators.push({ validator: l, classGroupId: o });
        return;
      }
      Object.entries(l).forEach(([c, u]) => {
        vu(u, Fh(r, c), o, i);
      });
    });
  },
  Fh = (t, r) => {
    let o = t;
    return (
      r.split(Xu).forEach((i) => {
        o.nextPart.has(i) ||
          o.nextPart.set(i, { nextPart: new Map(), validators: [] }),
          (o = o.nextPart.get(i));
      }),
      o
    );
  },
  lS = (t) => t.isThemeGetter,
  aS = (t, r) =>
    r
      ? t.map(([o, i]) => {
          const l = i.map((c) =>
            typeof c == "string"
              ? r + c
              : typeof c == "object"
              ? Object.fromEntries(
                  Object.entries(c).map(([u, f]) => [r + u, f])
                )
              : c
          );
          return [o, l];
        })
      : t,
  cS = (t) => {
    if (t < 1) return { get: () => {}, set: () => {} };
    let r = 0,
      o = new Map(),
      i = new Map();
    const l = (c, u) => {
      o.set(c, u), r++, r > t && ((r = 0), (i = o), (o = new Map()));
    };
    return {
      get(c) {
        let u = o.get(c);
        if (u !== void 0) return u;
        if ((u = i.get(c)) !== void 0) return l(c, u), u;
      },
      set(c, u) {
        o.has(c) ? o.set(c, u) : l(c, u);
      },
    };
  },
  gg = "!",
  uS = (t) => {
    const { separator: r, experimentalParseClassName: o } = t,
      i = r.length === 1,
      l = r[0],
      c = r.length,
      u = (f) => {
        const m = [];
        let h = 0,
          y = 0,
          x;
        for (let S = 0; S < f.length; S++) {
          let R = f[S];
          if (h === 0) {
            if (R === l && (i || f.slice(S, S + c) === r)) {
              m.push(f.slice(y, S)), (y = S + c);
              continue;
            }
            if (R === "/") {
              x = S;
              continue;
            }
          }
          R === "[" ? h++ : R === "]" && h--;
        }
        const E = m.length === 0 ? f : f.substring(y),
          b = E.startsWith(gg),
          C = b ? E.substring(1) : E,
          w = x && x > y ? x - y : void 0;
        return {
          modifiers: m,
          hasImportantModifier: b,
          baseClassName: C,
          maybePostfixModifierPosition: w,
        };
      };
    return o ? (f) => o({ className: f, parseClassName: u }) : u;
  },
  dS = (t) => {
    if (t.length <= 1) return t;
    const r = [];
    let o = [];
    return (
      t.forEach((i) => {
        i[0] === "[" ? (r.push(...o.sort(), i), (o = [])) : o.push(i);
      }),
      r.push(...o.sort()),
      r
    );
  },
  fS = (t) => ({ cache: cS(t.cacheSize), parseClassName: uS(t), ...oS(t) }),
  pS = /\s+/,
  hS = (t, r) => {
    const {
        parseClassName: o,
        getClassGroupId: i,
        getConflictingClassGroupIds: l,
      } = r,
      c = [],
      u = t.trim().split(pS);
    let f = "";
    for (let m = u.length - 1; m >= 0; m -= 1) {
      const h = u[m],
        {
          modifiers: y,
          hasImportantModifier: x,
          baseClassName: E,
          maybePostfixModifierPosition: b,
        } = o(h);
      let C = !!b,
        w = i(C ? E.substring(0, b) : E);
      if (!w) {
        if (!C) {
          f = h + (f.length > 0 ? " " + f : f);
          continue;
        }
        if (((w = i(E)), !w)) {
          f = h + (f.length > 0 ? " " + f : f);
          continue;
        }
        C = !1;
      }
      const S = dS(y).join(":"),
        R = x ? S + gg : S,
        k = R + w;
      if (c.includes(k)) continue;
      c.push(k);
      const P = l(w, C);
      for (let D = 0; D < P.length; ++D) {
        const B = P[D];
        c.push(R + B);
      }
      f = h + (f.length > 0 ? " " + f : f);
    }
    return f;
  };
function mS() {
  let t = 0,
    r,
    o,
    i = "";
  for (; t < arguments.length; )
    (r = arguments[t++]) && (o = yg(r)) && (i && (i += " "), (i += o));
  return i;
}
const yg = (t) => {
  if (typeof t == "string") return t;
  let r,
    o = "";
  for (let i = 0; i < t.length; i++)
    t[i] && (r = yg(t[i])) && (o && (o += " "), (o += r));
  return o;
};
function gS(t, ...r) {
  let o,
    i,
    l,
    c = u;
  function u(m) {
    const h = r.reduce((y, x) => x(y), t());
    return (o = fS(h)), (i = o.cache.get), (l = o.cache.set), (c = f), f(m);
  }
  function f(m) {
    const h = i(m);
    if (h) return h;
    const y = hS(m, o);
    return l(m, y), y;
  }
  return function () {
    return c(mS.apply(null, arguments));
  };
}
const je = (t) => {
    const r = (o) => o[t] || [];
    return (r.isThemeGetter = !0), r;
  },
  vg = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  yS = /^\d+\/\d+$/,
  vS = new Set(["px", "full", "screen"]),
  AS = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  wS =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  xS = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  SS = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  ES =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  Sn = (t) => oo(t) || vS.has(t) || yS.test(t),
  Zn = (t) => mo(t, "length", IS),
  oo = (t) => !!t && !Number.isNaN(Number(t)),
  Yc = (t) => mo(t, "number", oo),
  ui = (t) => !!t && Number.isInteger(Number(t)),
  CS = (t) => t.endsWith("%") && oo(t.slice(0, -1)),
  xe = (t) => vg.test(t),
  Jn = (t) => AS.test(t),
  kS = new Set(["length", "size", "percentage"]),
  RS = (t) => mo(t, kS, Ag),
  bS = (t) => mo(t, "position", Ag),
  NS = new Set(["image", "url"]),
  PS = (t) => mo(t, NS, DS),
  OS = (t) => mo(t, "", TS),
  di = () => !0,
  mo = (t, r, o) => {
    const i = vg.exec(t);
    return i
      ? i[1]
        ? typeof r == "string"
          ? i[1] === r
          : r.has(i[1])
        : o(i[2])
      : !1;
  },
  IS = (t) => wS.test(t) && !xS.test(t),
  Ag = () => !1,
  TS = (t) => SS.test(t),
  DS = (t) => ES.test(t),
  BS = () => {
    const t = je("colors"),
      r = je("spacing"),
      o = je("blur"),
      i = je("brightness"),
      l = je("borderColor"),
      c = je("borderRadius"),
      u = je("borderSpacing"),
      f = je("borderWidth"),
      m = je("contrast"),
      h = je("grayscale"),
      y = je("hueRotate"),
      x = je("invert"),
      E = je("gap"),
      b = je("gradientColorStops"),
      C = je("gradientColorStopPositions"),
      w = je("inset"),
      S = je("margin"),
      R = je("opacity"),
      k = je("padding"),
      P = je("saturate"),
      D = je("scale"),
      B = je("sepia"),
      W = je("skew"),
      z = je("space"),
      Y = je("translate"),
      Q = () => ["auto", "contain", "none"],
      se = () => ["auto", "hidden", "clip", "visible", "scroll"],
      ge = () => ["auto", xe, r],
      X = () => [xe, r],
      q = () => ["", Sn, Zn],
      ae = () => ["auto", oo, xe],
      ye = () => [
        "bottom",
        "center",
        "left",
        "left-bottom",
        "left-top",
        "right",
        "right-bottom",
        "right-top",
        "top",
      ],
      oe = () => ["solid", "dashed", "dotted", "double", "none"],
      ne = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      _ = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
      ],
      J = () => ["", "0", xe],
      Z = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      T = () => [oo, xe];
    return {
      cacheSize: 500,
      separator: ":",
      theme: {
        colors: [di],
        spacing: [Sn, Zn],
        blur: ["none", "", Jn, xe],
        brightness: T(),
        borderColor: [t],
        borderRadius: ["none", "", "full", Jn, xe],
        borderSpacing: X(),
        borderWidth: q(),
        contrast: T(),
        grayscale: J(),
        hueRotate: T(),
        invert: J(),
        gap: X(),
        gradientColorStops: [t],
        gradientColorStopPositions: [CS, Zn],
        inset: ge(),
        margin: ge(),
        opacity: T(),
        padding: X(),
        saturate: T(),
        scale: T(),
        sepia: J(),
        skew: T(),
        space: X(),
        translate: X(),
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", "video", xe] }],
        container: ["container"],
        columns: [{ columns: [Jn] }],
        "break-after": [{ "break-after": Z() }],
        "break-before": [{ "break-before": Z() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: [...ye(), xe] }],
        overflow: [{ overflow: se() }],
        "overflow-x": [{ "overflow-x": se() }],
        "overflow-y": [{ "overflow-y": se() }],
        overscroll: [{ overscroll: Q() }],
        "overscroll-x": [{ "overscroll-x": Q() }],
        "overscroll-y": [{ "overscroll-y": Q() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: [w] }],
        "inset-x": [{ "inset-x": [w] }],
        "inset-y": [{ "inset-y": [w] }],
        start: [{ start: [w] }],
        end: [{ end: [w] }],
        top: [{ top: [w] }],
        right: [{ right: [w] }],
        bottom: [{ bottom: [w] }],
        left: [{ left: [w] }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: ["auto", ui, xe] }],
        basis: [{ basis: ge() }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
        flex: [{ flex: ["1", "auto", "initial", "none", xe] }],
        grow: [{ grow: J() }],
        shrink: [{ shrink: J() }],
        order: [{ order: ["first", "last", "none", ui, xe] }],
        "grid-cols": [{ "grid-cols": [di] }],
        "col-start-end": [{ col: ["auto", { span: ["full", ui, xe] }, xe] }],
        "col-start": [{ "col-start": ae() }],
        "col-end": [{ "col-end": ae() }],
        "grid-rows": [{ "grid-rows": [di] }],
        "row-start-end": [{ row: ["auto", { span: [ui, xe] }, xe] }],
        "row-start": [{ "row-start": ae() }],
        "row-end": [{ "row-end": ae() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", xe] }],
        "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", xe] }],
        gap: [{ gap: [E] }],
        "gap-x": [{ "gap-x": [E] }],
        "gap-y": [{ "gap-y": [E] }],
        "justify-content": [{ justify: ["normal", ..._()] }],
        "justify-items": [
          { "justify-items": ["start", "end", "center", "stretch"] },
        ],
        "justify-self": [
          { "justify-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        "align-content": [{ content: ["normal", ..._(), "baseline"] }],
        "align-items": [
          { items: ["start", "end", "center", "baseline", "stretch"] },
        ],
        "align-self": [
          { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
        ],
        "place-content": [{ "place-content": [..._(), "baseline"] }],
        "place-items": [
          { "place-items": ["start", "end", "center", "baseline", "stretch"] },
        ],
        "place-self": [
          { "place-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        p: [{ p: [k] }],
        px: [{ px: [k] }],
        py: [{ py: [k] }],
        ps: [{ ps: [k] }],
        pe: [{ pe: [k] }],
        pt: [{ pt: [k] }],
        pr: [{ pr: [k] }],
        pb: [{ pb: [k] }],
        pl: [{ pl: [k] }],
        m: [{ m: [S] }],
        mx: [{ mx: [S] }],
        my: [{ my: [S] }],
        ms: [{ ms: [S] }],
        me: [{ me: [S] }],
        mt: [{ mt: [S] }],
        mr: [{ mr: [S] }],
        mb: [{ mb: [S] }],
        ml: [{ ml: [S] }],
        "space-x": [{ "space-x": [z] }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": [z] }],
        "space-y-reverse": ["space-y-reverse"],
        w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", xe, r] }],
        "min-w": [{ "min-w": [xe, r, "min", "max", "fit"] }],
        "max-w": [
          {
            "max-w": [
              xe,
              r,
              "none",
              "full",
              "min",
              "max",
              "fit",
              "prose",
              { screen: [Jn] },
              Jn,
            ],
          },
        ],
        h: [{ h: [xe, r, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
        "min-h": [
          { "min-h": [xe, r, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        "max-h": [
          { "max-h": [xe, r, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        size: [{ size: [xe, r, "auto", "min", "max", "fit"] }],
        "font-size": [{ text: ["base", Jn, Zn] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [
          {
            font: [
              "thin",
              "extralight",
              "light",
              "normal",
              "medium",
              "semibold",
              "bold",
              "extrabold",
              "black",
              Yc,
            ],
          },
        ],
        "font-family": [{ font: [di] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [
          {
            tracking: [
              "tighter",
              "tight",
              "normal",
              "wide",
              "wider",
              "widest",
              xe,
            ],
          },
        ],
        "line-clamp": [{ "line-clamp": ["none", oo, Yc] }],
        leading: [
          {
            leading: [
              "none",
              "tight",
              "snug",
              "normal",
              "relaxed",
              "loose",
              Sn,
              xe,
            ],
          },
        ],
        "list-image": [{ "list-image": ["none", xe] }],
        "list-style-type": [{ list: ["none", "disc", "decimal", xe] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "placeholder-color": [{ placeholder: [t] }],
        "placeholder-opacity": [{ "placeholder-opacity": [R] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "text-color": [{ text: [t] }],
        "text-opacity": [{ "text-opacity": [R] }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...oe(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: ["auto", "from-font", Sn, Zn] },
        ],
        "underline-offset": [{ "underline-offset": ["auto", Sn, xe] }],
        "text-decoration-color": [{ decoration: [t] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: X() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              xe,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", xe] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-opacity": [{ "bg-opacity": [R] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: [...ye(), bS] }],
        "bg-repeat": [
          { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
        ],
        "bg-size": [{ bg: ["auto", "cover", "contain", RS] }],
        "bg-image": [
          {
            bg: [
              "none",
              { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
              PS,
            ],
          },
        ],
        "bg-color": [{ bg: [t] }],
        "gradient-from-pos": [{ from: [C] }],
        "gradient-via-pos": [{ via: [C] }],
        "gradient-to-pos": [{ to: [C] }],
        "gradient-from": [{ from: [b] }],
        "gradient-via": [{ via: [b] }],
        "gradient-to": [{ to: [b] }],
        rounded: [{ rounded: [c] }],
        "rounded-s": [{ "rounded-s": [c] }],
        "rounded-e": [{ "rounded-e": [c] }],
        "rounded-t": [{ "rounded-t": [c] }],
        "rounded-r": [{ "rounded-r": [c] }],
        "rounded-b": [{ "rounded-b": [c] }],
        "rounded-l": [{ "rounded-l": [c] }],
        "rounded-ss": [{ "rounded-ss": [c] }],
        "rounded-se": [{ "rounded-se": [c] }],
        "rounded-ee": [{ "rounded-ee": [c] }],
        "rounded-es": [{ "rounded-es": [c] }],
        "rounded-tl": [{ "rounded-tl": [c] }],
        "rounded-tr": [{ "rounded-tr": [c] }],
        "rounded-br": [{ "rounded-br": [c] }],
        "rounded-bl": [{ "rounded-bl": [c] }],
        "border-w": [{ border: [f] }],
        "border-w-x": [{ "border-x": [f] }],
        "border-w-y": [{ "border-y": [f] }],
        "border-w-s": [{ "border-s": [f] }],
        "border-w-e": [{ "border-e": [f] }],
        "border-w-t": [{ "border-t": [f] }],
        "border-w-r": [{ "border-r": [f] }],
        "border-w-b": [{ "border-b": [f] }],
        "border-w-l": [{ "border-l": [f] }],
        "border-opacity": [{ "border-opacity": [R] }],
        "border-style": [{ border: [...oe(), "hidden"] }],
        "divide-x": [{ "divide-x": [f] }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": [f] }],
        "divide-y-reverse": ["divide-y-reverse"],
        "divide-opacity": [{ "divide-opacity": [R] }],
        "divide-style": [{ divide: oe() }],
        "border-color": [{ border: [l] }],
        "border-color-x": [{ "border-x": [l] }],
        "border-color-y": [{ "border-y": [l] }],
        "border-color-s": [{ "border-s": [l] }],
        "border-color-e": [{ "border-e": [l] }],
        "border-color-t": [{ "border-t": [l] }],
        "border-color-r": [{ "border-r": [l] }],
        "border-color-b": [{ "border-b": [l] }],
        "border-color-l": [{ "border-l": [l] }],
        "divide-color": [{ divide: [l] }],
        "outline-style": [{ outline: ["", ...oe()] }],
        "outline-offset": [{ "outline-offset": [Sn, xe] }],
        "outline-w": [{ outline: [Sn, Zn] }],
        "outline-color": [{ outline: [t] }],
        "ring-w": [{ ring: q() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: [t] }],
        "ring-opacity": [{ "ring-opacity": [R] }],
        "ring-offset-w": [{ "ring-offset": [Sn, Zn] }],
        "ring-offset-color": [{ "ring-offset": [t] }],
        shadow: [{ shadow: ["", "inner", "none", Jn, OS] }],
        "shadow-color": [{ shadow: [di] }],
        opacity: [{ opacity: [R] }],
        "mix-blend": [
          { "mix-blend": [...ne(), "plus-lighter", "plus-darker"] },
        ],
        "bg-blend": [{ "bg-blend": ne() }],
        filter: [{ filter: ["", "none"] }],
        blur: [{ blur: [o] }],
        brightness: [{ brightness: [i] }],
        contrast: [{ contrast: [m] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", Jn, xe] }],
        grayscale: [{ grayscale: [h] }],
        "hue-rotate": [{ "hue-rotate": [y] }],
        invert: [{ invert: [x] }],
        saturate: [{ saturate: [P] }],
        sepia: [{ sepia: [B] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
        "backdrop-blur": [{ "backdrop-blur": [o] }],
        "backdrop-brightness": [{ "backdrop-brightness": [i] }],
        "backdrop-contrast": [{ "backdrop-contrast": [m] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": [h] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [y] }],
        "backdrop-invert": [{ "backdrop-invert": [x] }],
        "backdrop-opacity": [{ "backdrop-opacity": [R] }],
        "backdrop-saturate": [{ "backdrop-saturate": [P] }],
        "backdrop-sepia": [{ "backdrop-sepia": [B] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": [u] }],
        "border-spacing-x": [{ "border-spacing-x": [u] }],
        "border-spacing-y": [{ "border-spacing-y": [u] }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "none",
              "all",
              "",
              "colors",
              "opacity",
              "shadow",
              "transform",
              xe,
            ],
          },
        ],
        duration: [{ duration: T() }],
        ease: [{ ease: ["linear", "in", "out", "in-out", xe] }],
        delay: [{ delay: T() }],
        animate: [{ animate: ["none", "spin", "ping", "pulse", Bounce, xe] }],
        transform: [{ transform: ["", "gpu", "none"] }],
        scale: [{ scale: [D] }],
        "scale-x": [{ "scale-x": [D] }],
        "scale-y": [{ "scale-y": [D] }],
        rotate: [{ rotate: [ui, xe] }],
        "translate-x": [{ "translate-x": [Y] }],
        "translate-y": [{ "translate-y": [Y] }],
        "skew-x": [{ "skew-x": [W] }],
        "skew-y": [{ "skew-y": [W] }],
        "transform-origin": [
          {
            origin: [
              "center",
              "top",
              "top-right",
              "right",
              "bottom-right",
              "bottom",
              "bottom-left",
              "left",
              "top-left",
              xe,
            ],
          },
        ],
        accent: [{ accent: ["auto", t] }],
        appearance: [{ appearance: ["none", "auto"] }],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              xe,
            ],
          },
        ],
        "caret-color": [{ caret: [t] }],
        "pointer-events": [{ "pointer-events": ["none", "auto"] }],
        resize: [{ resize: ["none", "y", "x", ""] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": X() }],
        "scroll-mx": [{ "scroll-mx": X() }],
        "scroll-my": [{ "scroll-my": X() }],
        "scroll-ms": [{ "scroll-ms": X() }],
        "scroll-me": [{ "scroll-me": X() }],
        "scroll-mt": [{ "scroll-mt": X() }],
        "scroll-mr": [{ "scroll-mr": X() }],
        "scroll-mb": [{ "scroll-mb": X() }],
        "scroll-ml": [{ "scroll-ml": X() }],
        "scroll-p": [{ "scroll-p": X() }],
        "scroll-px": [{ "scroll-px": X() }],
        "scroll-py": [{ "scroll-py": X() }],
        "scroll-ps": [{ "scroll-ps": X() }],
        "scroll-pe": [{ "scroll-pe": X() }],
        "scroll-pt": [{ "scroll-pt": X() }],
        "scroll-pr": [{ "scroll-pr": X() }],
        "scroll-pb": [{ "scroll-pb": X() }],
        "scroll-pl": [{ "scroll-pl": X() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          { "will-change": ["auto", "scroll", "contents", "transform", xe] },
        ],
        fill: [{ fill: [t, "none"] }],
        "stroke-w": [{ stroke: [Sn, Zn, Yc] }],
        stroke: [{ stroke: [t, "none"] }],
        sr: ["sr-only", "not-sr-only"],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-s",
          "border-color-e",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
    };
  },
  jS = gS(BS);
function Le(...t) {
  return jS(pg(t));
}
const qu = hg(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
    {
      variants: {
        variant: {
          default: "bg-primary text-primary-foreground hover:bg-primary/90",
          destructive:
            "bg-destructive text-destructive-foreground hover:bg-destructive/90",
          outline:
            "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
          secondary:
            "bg-secondary text-secondary-foreground hover:bg-secondary/80",
          ghost: "hover:bg-accent hover:text-accent-foreground",
          link: "text-primary underline-offset-4 hover:underline",
        },
        size: {
          default: "h-10 px-4 py-2",
          sm: "h-9 rounded-md px-3",
          lg: "h-11 rounded-md px-8",
          icon: "h-10 w-10",
        },
      },
      defaultVariants: { variant: "default", size: "default" },
    }
  ),
  ct = g.forwardRef(
    ({ className: t, variant: r, size: o, asChild: i = !1, ...l }, c) => {
      const u = i ? xt : "button";
      return v.jsx(u, {
        className: Le(qu({ variant: r, size: o, className: t })),
        ref: c,
        ...l,
      });
    }
  );
ct.displayName = "Button";
const ki = g.forwardRef(({ className: t, ...r }, o) =>
  v.jsx("div", {
    ref: o,
    className: Le(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      t
    ),
    ...r,
  })
);
ki.displayName = "Card";
const Rl = g.forwardRef(({ className: t, ...r }, o) =>
  v.jsx("div", {
    ref: o,
    className: Le("flex flex-col space-y-1.5 p-6", t),
    ...r,
  })
);
Rl.displayName = "CardHeader";
const Ri = g.forwardRef(({ className: t, ...r }, o) =>
  v.jsx("div", {
    ref: o,
    className: Le("text-2xl font-semibold leading-none tracking-tight", t),
    ...r,
  })
);
Ri.displayName = "CardTitle";
const bl = g.forwardRef(({ className: t, ...r }, o) =>
  v.jsx("div", {
    ref: o,
    className: Le("text-sm text-muted-foreground", t),
    ...r,
  })
);
bl.displayName = "CardDescription";
const bi = g.forwardRef(({ className: t, ...r }, o) =>
  v.jsx("div", { ref: o, className: Le("p-6 pt-0", t), ...r })
);
bi.displayName = "CardContent";
const Nl = g.forwardRef(({ className: t, ...r }, o) =>
  v.jsx("div", { ref: o, className: Le("flex items-center p-6 pt-0", t), ...r })
);
Nl.displayName = "CardFooter";
function MS(t, r) {
  typeof t == "function" ? t(r) : t != null && (t.current = r);
}
function LS(...t) {
  return (r) => t.forEach((o) => MS(o, r));
}
var wg = g.forwardRef((t, r) => {
  const { children: o, ...i } = t,
    l = g.Children.toArray(o),
    c = l.find(FS);
  if (c) {
    const u = c.props.children,
      f = l.map((m) =>
        m === c
          ? g.Children.count(u) > 1
            ? g.Children.only(null)
            : g.isValidElement(u)
            ? u.props.children
            : null
          : m
      );
    return v.jsx(Au, {
      ...i,
      ref: r,
      children: g.isValidElement(u) ? g.cloneElement(u, void 0, f) : null,
    });
  }
  return v.jsx(Au, { ...i, ref: r, children: o });
});
wg.displayName = "Slot";
var Au = g.forwardRef((t, r) => {
  const { children: o, ...i } = t;
  if (g.isValidElement(o)) {
    const l = US(o);
    return g.cloneElement(o, { ...zS(i, o.props), ref: r ? LS(r, l) : l });
  }
  return g.Children.count(o) > 1 ? g.Children.only(null) : null;
});
Au.displayName = "SlotClone";
var _S = ({ children: t }) => v.jsx(v.Fragment, { children: t });
function FS(t) {
  return g.isValidElement(t) && t.type === _S;
}
function zS(t, r) {
  const o = { ...r };
  for (const i in r) {
    const l = t[i],
      c = r[i];
    /^on[A-Z]/.test(i)
      ? l && c
        ? (o[i] = (...f) => {
            c(...f), l(...f);
          })
        : l && (o[i] = l)
      : i === "style"
      ? (o[i] = { ...l, ...c })
      : i === "className" && (o[i] = [l, c].filter(Boolean).join(" "));
  }
  return { ...t, ...o };
}
function US(t) {
  var i, l;
  let r =
      (i = Object.getOwnPropertyDescriptor(t.props, "ref")) == null
        ? void 0
        : i.get,
    o = r && "isReactWarning" in r && r.isReactWarning;
  return o
    ? t.ref
    : ((r =
        (l = Object.getOwnPropertyDescriptor(t, "ref")) == null
          ? void 0
          : l.get),
      (o = r && "isReactWarning" in r && r.isReactWarning),
      o ? t.props.ref : t.props.ref || t.ref);
}
var WS = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "span",
    "svg",
    "ul",
  ],
  QS = WS.reduce((t, r) => {
    const o = g.forwardRef((i, l) => {
      const { asChild: c, ...u } = i,
        f = c ? wg : r;
      return (
        typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
        v.jsx(f, { ...u, ref: l })
      );
    });
    return (o.displayName = `Primitive.${r}`), { ...t, [r]: o };
  }, {}),
  HS = "Label",
  xg = g.forwardRef((t, r) =>
    v.jsx(QS.label, {
      ...t,
      ref: r,
      onMouseDown: (o) => {
        var l;
        o.target.closest("button, input, select, textarea") ||
          ((l = t.onMouseDown) == null || l.call(t, o),
          !o.defaultPrevented && o.detail > 1 && o.preventDefault());
      },
    })
  );
xg.displayName = HS;
var Sg = xg;
const GS = hg(
    "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
  ),
  pl = g.forwardRef(({ className: t, ...r }, o) =>
    v.jsx(Sg, { ref: o, className: Le(GS(), t), ...r })
  );
pl.displayName = Sg.displayName;
function Eg({ game: t, onJoin: r, onEnter: o }) {
  const { socketDeleteGame: i } = ag(),
    l = JSON.parse(localStorage.getItem("player-data")),
    { players: c, isStarted: u } = t,
    f = () => {
      l && t.gameId === l.gameId
        ? (i(t.gameId), localStorage.removeItem("player-data"))
        : alert("You can't delete a game you're not in.");
    };
  return v.jsxs(ki, {
    className:
      "p-4 shadow-lg flex flex-col justify-between h-64 border border-black",
    children: [
      v.jsxs("div", {
        className: "flex-grow",
        children: [
          v.jsxs(Ri, {
            className: "text-xl text-center mb-2 border rounded-lg",
            children: ["Game ID: ", t.gameId],
          }),
          v.jsxs(bi, {
            className: "p-3 mt-2 border rounded-lg",
            children: [
              v.jsxs(pl, {
                className: "text-md mb-1",
                children: ["Players (", c.length, "): "],
              }),
              v.jsx("ul", {
                className:
                  "list-none grid grid-cols-2 gap-x-1 gap-y-1 mt-2 text-sm text-center",
                children: c.map((m, h) =>
                  v.jsxs(
                    "li",
                    {
                      className: `text-${m.color}`,
                      children: [m.name, " - ", m.color.toUpperCase()],
                    },
                    h
                  )
                ),
              }),
            ],
          }),
        ],
      }),
      v.jsx(Nl, {
        className: "flex justify-between p-4",
        children:
          l && t.gameId === l.gameId
            ? v.jsxs(v.Fragment, {
                children: [
                  v.jsx(ct, {
                    className: "bg-[#2196F3]",
                    onClick: o,
                    children: "Enter",
                  }),
                  v.jsx(ct, {
                    variant: "destructive",
                    onClick: f,
                    children: "Delete",
                  }),
                ],
              })
            : u
            ? v.jsx("p", {
                className: "text-center w-full",
                children: "This game has already started.",
              })
            : v.jsx(ct, {
                className: "bg-[#4CAF50] w-full",
                onClick: r,
                children: "Join",
              }),
      }),
    ],
  });
}
Eg.propTypes = {
  game: Yt.object.isRequired,
  onJoin: Yt.func.isRequired,
  onEnter: Yt.func.isRequired,
};
const Cg = g.forwardRef(({ className: t, type: r, ...o }, i) =>
  v.jsx("input", {
    type: r,
    className: Le(
      "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
      t
    ),
    ref: i,
    ...o,
  })
);
Cg.displayName = "Input";
function zh(t, [r, o]) {
  return Math.min(o, Math.max(r, t));
}
function Ie(t, r, { checkForDefaultPrevented: o = !0 } = {}) {
  return function (l) {
    if ((t == null || t(l), o === !1 || !l.defaultPrevented))
      return r == null ? void 0 : r(l);
  };
}
function VS(t, r) {
  const o = g.createContext(r),
    i = (c) => {
      const { children: u, ...f } = c,
        m = g.useMemo(() => f, Object.values(f));
      return v.jsx(o.Provider, { value: m, children: u });
    };
  i.displayName = t + "Provider";
  function l(c) {
    const u = g.useContext(o);
    if (u) return u;
    if (r !== void 0) return r;
    throw new Error(`\`${c}\` must be used within \`${t}\``);
  }
  return [i, l];
}
function Ni(t, r = []) {
  let o = [];
  function i(c, u) {
    const f = g.createContext(u),
      m = o.length;
    o = [...o, u];
    const h = (x) => {
      var R;
      const { scope: E, children: b, ...C } = x,
        w = ((R = E == null ? void 0 : E[t]) == null ? void 0 : R[m]) || f,
        S = g.useMemo(() => C, Object.values(C));
      return v.jsx(w.Provider, { value: S, children: b });
    };
    h.displayName = c + "Provider";
    function y(x, E) {
      var w;
      const b = ((w = E == null ? void 0 : E[t]) == null ? void 0 : w[m]) || f,
        C = g.useContext(b);
      if (C) return C;
      if (u !== void 0) return u;
      throw new Error(`\`${x}\` must be used within \`${c}\``);
    }
    return [h, y];
  }
  const l = () => {
    const c = o.map((u) => g.createContext(u));
    return function (f) {
      const m = (f == null ? void 0 : f[t]) || c;
      return g.useMemo(() => ({ [`__scope${t}`]: { ...f, [t]: m } }), [f, m]);
    };
  };
  return (l.scopeName = t), [i, YS(l, ...r)];
}
function YS(...t) {
  const r = t[0];
  if (t.length === 1) return r;
  const o = () => {
    const i = t.map((l) => ({ useScope: l(), scopeName: l.scopeName }));
    return function (c) {
      const u = i.reduce((f, { useScope: m, scopeName: h }) => {
        const x = m(c)[`__scope${h}`];
        return { ...f, ...x };
      }, {});
      return g.useMemo(() => ({ [`__scope${r.scopeName}`]: u }), [u]);
    };
  };
  return (o.scopeName = r.scopeName), o;
}
function $S(t) {
  const r = t + "CollectionProvider",
    [o, i] = Ni(r),
    [l, c] = o(r, { collectionRef: { current: null }, itemMap: new Map() }),
    u = (b) => {
      const { scope: C, children: w } = b,
        S = jt.useRef(null),
        R = jt.useRef(new Map()).current;
      return v.jsx(l, { scope: C, itemMap: R, collectionRef: S, children: w });
    };
  u.displayName = r;
  const f = t + "CollectionSlot",
    m = jt.forwardRef((b, C) => {
      const { scope: w, children: S } = b,
        R = c(f, w),
        k = Me(C, R.collectionRef);
      return v.jsx(xt, { ref: k, children: S });
    });
  m.displayName = f;
  const h = t + "CollectionItemSlot",
    y = "data-radix-collection-item",
    x = jt.forwardRef((b, C) => {
      const { scope: w, children: S, ...R } = b,
        k = jt.useRef(null),
        P = Me(C, k),
        D = c(h, w);
      return (
        jt.useEffect(
          () => (
            D.itemMap.set(k, { ref: k, ...R }), () => void D.itemMap.delete(k)
          )
        ),
        v.jsx(xt, { [y]: "", ref: P, children: S })
      );
    });
  x.displayName = h;
  function E(b) {
    const C = c(t + "CollectionConsumer", b);
    return jt.useCallback(() => {
      const S = C.collectionRef.current;
      if (!S) return [];
      const R = Array.from(S.querySelectorAll(`[${y}]`));
      return Array.from(C.itemMap.values()).sort(
        (D, B) => R.indexOf(D.ref.current) - R.indexOf(B.ref.current)
      );
    }, [C.collectionRef, C.itemMap]);
  }
  return [{ Provider: u, Slot: m, ItemSlot: x }, E, i];
}
var ZS = g.createContext(void 0);
function JS(t) {
  const r = g.useContext(ZS);
  return t || r || "ltr";
}
var XS = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "span",
    "svg",
    "ul",
  ],
  kg = XS.reduce((t, r) => {
    const o = g.forwardRef((i, l) => {
      const { asChild: c, ...u } = i,
        f = c ? xt : r;
      return (
        typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
        v.jsx(f, { ...u, ref: l })
      );
    });
    return (o.displayName = `Primitive.${r}`), { ...t, [r]: o };
  }, {});
function qS(t, r) {
  t && po.flushSync(() => t.dispatchEvent(r));
}
function $t(t) {
  const r = g.useRef(t);
  return (
    g.useEffect(() => {
      r.current = t;
    }),
    g.useMemo(
      () =>
        (...o) => {
          var i;
          return (i = r.current) == null ? void 0 : i.call(r, ...o);
        },
      []
    )
  );
}
function Rg(t, r = globalThis == null ? void 0 : globalThis.document) {
  const o = $t(t);
  g.useEffect(() => {
    const i = (l) => {
      l.key === "Escape" && o(l);
    };
    return (
      r.addEventListener("keydown", i, { capture: !0 }),
      () => r.removeEventListener("keydown", i, { capture: !0 })
    );
  }, [o, r]);
}
var KS = "DismissableLayer",
  wu = "dismissableLayer.update",
  eE = "dismissableLayer.pointerDownOutside",
  tE = "dismissableLayer.focusOutside",
  Uh,
  bg = g.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  Ng = g.forwardRef((t, r) => {
    const {
        disableOutsidePointerEvents: o = !1,
        onEscapeKeyDown: i,
        onPointerDownOutside: l,
        onFocusOutside: c,
        onInteractOutside: u,
        onDismiss: f,
        ...m
      } = t,
      h = g.useContext(bg),
      [y, x] = g.useState(null),
      E =
        (y == null ? void 0 : y.ownerDocument) ??
        (globalThis == null ? void 0 : globalThis.document),
      [, b] = g.useState({}),
      C = Me(r, (z) => x(z)),
      w = Array.from(h.layers),
      [S] = [...h.layersWithOutsidePointerEventsDisabled].slice(-1),
      R = w.indexOf(S),
      k = y ? w.indexOf(y) : -1,
      P = h.layersWithOutsidePointerEventsDisabled.size > 0,
      D = k >= R,
      B = oE((z) => {
        const Y = z.target,
          Q = [...h.branches].some((se) => se.contains(Y));
        !D ||
          Q ||
          (l == null || l(z),
          u == null || u(z),
          z.defaultPrevented || f == null || f());
      }, E),
      W = iE((z) => {
        const Y = z.target;
        [...h.branches].some((se) => se.contains(Y)) ||
          (c == null || c(z),
          u == null || u(z),
          z.defaultPrevented || f == null || f());
      }, E);
    return (
      Rg((z) => {
        k === h.layers.size - 1 &&
          (i == null || i(z),
          !z.defaultPrevented && f && (z.preventDefault(), f()));
      }, E),
      g.useEffect(() => {
        if (y)
          return (
            o &&
              (h.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((Uh = E.body.style.pointerEvents),
                (E.body.style.pointerEvents = "none")),
              h.layersWithOutsidePointerEventsDisabled.add(y)),
            h.layers.add(y),
            Wh(),
            () => {
              o &&
                h.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (E.body.style.pointerEvents = Uh);
            }
          );
      }, [y, E, o, h]),
      g.useEffect(
        () => () => {
          y &&
            (h.layers.delete(y),
            h.layersWithOutsidePointerEventsDisabled.delete(y),
            Wh());
        },
        [y, h]
      ),
      g.useEffect(() => {
        const z = () => b({});
        return (
          document.addEventListener(wu, z),
          () => document.removeEventListener(wu, z)
        );
      }, []),
      v.jsx(kg.div, {
        ...m,
        ref: C,
        style: {
          pointerEvents: P ? (D ? "auto" : "none") : void 0,
          ...t.style,
        },
        onFocusCapture: Ie(t.onFocusCapture, W.onFocusCapture),
        onBlurCapture: Ie(t.onBlurCapture, W.onBlurCapture),
        onPointerDownCapture: Ie(
          t.onPointerDownCapture,
          B.onPointerDownCapture
        ),
      })
    );
  });
Ng.displayName = KS;
var nE = "DismissableLayerBranch",
  rE = g.forwardRef((t, r) => {
    const o = g.useContext(bg),
      i = g.useRef(null),
      l = Me(r, i);
    return (
      g.useEffect(() => {
        const c = i.current;
        if (c)
          return (
            o.branches.add(c),
            () => {
              o.branches.delete(c);
            }
          );
      }, [o.branches]),
      v.jsx(kg.div, { ...t, ref: l })
    );
  });
rE.displayName = nE;
function oE(t, r = globalThis == null ? void 0 : globalThis.document) {
  const o = $t(t),
    i = g.useRef(!1),
    l = g.useRef(() => {});
  return (
    g.useEffect(() => {
      const c = (f) => {
          if (f.target && !i.current) {
            let m = function () {
              Pg(eE, o, h, { discrete: !0 });
            };
            const h = { originalEvent: f };
            f.pointerType === "touch"
              ? (r.removeEventListener("click", l.current),
                (l.current = m),
                r.addEventListener("click", l.current, { once: !0 }))
              : m();
          } else r.removeEventListener("click", l.current);
          i.current = !1;
        },
        u = window.setTimeout(() => {
          r.addEventListener("pointerdown", c);
        }, 0);
      return () => {
        window.clearTimeout(u),
          r.removeEventListener("pointerdown", c),
          r.removeEventListener("click", l.current);
      };
    }, [r, o]),
    { onPointerDownCapture: () => (i.current = !0) }
  );
}
function iE(t, r = globalThis == null ? void 0 : globalThis.document) {
  const o = $t(t),
    i = g.useRef(!1);
  return (
    g.useEffect(() => {
      const l = (c) => {
        c.target &&
          !i.current &&
          Pg(tE, o, { originalEvent: c }, { discrete: !1 });
      };
      return (
        r.addEventListener("focusin", l),
        () => r.removeEventListener("focusin", l)
      );
    }, [r, o]),
    {
      onFocusCapture: () => (i.current = !0),
      onBlurCapture: () => (i.current = !1),
    }
  );
}
function Wh() {
  const t = new CustomEvent(wu);
  document.dispatchEvent(t);
}
function Pg(t, r, o, { discrete: i }) {
  const l = o.originalEvent.target,
    c = new CustomEvent(t, { bubbles: !1, cancelable: !0, detail: o });
  r && l.addEventListener(t, r, { once: !0 }),
    i ? qS(l, c) : l.dispatchEvent(c);
}
var $c = 0;
function Og() {
  g.useEffect(() => {
    const t = document.querySelectorAll("[data-radix-focus-guard]");
    return (
      document.body.insertAdjacentElement("afterbegin", t[0] ?? Qh()),
      document.body.insertAdjacentElement("beforeend", t[1] ?? Qh()),
      $c++,
      () => {
        $c === 1 &&
          document
            .querySelectorAll("[data-radix-focus-guard]")
            .forEach((r) => r.remove()),
          $c--;
      }
    );
  }, []);
}
function Qh() {
  const t = document.createElement("span");
  return (
    t.setAttribute("data-radix-focus-guard", ""),
    (t.tabIndex = 0),
    (t.style.outline = "none"),
    (t.style.opacity = "0"),
    (t.style.position = "fixed"),
    (t.style.pointerEvents = "none"),
    t
  );
}
var sE = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "span",
    "svg",
    "ul",
  ],
  lE = sE.reduce((t, r) => {
    const o = g.forwardRef((i, l) => {
      const { asChild: c, ...u } = i,
        f = c ? xt : r;
      return (
        typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
        v.jsx(f, { ...u, ref: l })
      );
    });
    return (o.displayName = `Primitive.${r}`), { ...t, [r]: o };
  }, {}),
  Zc = "focusScope.autoFocusOnMount",
  Jc = "focusScope.autoFocusOnUnmount",
  Hh = { bubbles: !1, cancelable: !0 },
  aE = "FocusScope",
  Ku = g.forwardRef((t, r) => {
    const {
        loop: o = !1,
        trapped: i = !1,
        onMountAutoFocus: l,
        onUnmountAutoFocus: c,
        ...u
      } = t,
      [f, m] = g.useState(null),
      h = $t(l),
      y = $t(c),
      x = g.useRef(null),
      E = Me(r, (w) => m(w)),
      b = g.useRef({
        paused: !1,
        pause() {
          this.paused = !0;
        },
        resume() {
          this.paused = !1;
        },
      }).current;
    g.useEffect(() => {
      if (i) {
        let w = function (P) {
            if (b.paused || !f) return;
            const D = P.target;
            f.contains(D) ? (x.current = D) : Xn(x.current, { select: !0 });
          },
          S = function (P) {
            if (b.paused || !f) return;
            const D = P.relatedTarget;
            D !== null && (f.contains(D) || Xn(x.current, { select: !0 }));
          },
          R = function (P) {
            if (document.activeElement === document.body)
              for (const B of P) B.removedNodes.length > 0 && Xn(f);
          };
        document.addEventListener("focusin", w),
          document.addEventListener("focusout", S);
        const k = new MutationObserver(R);
        return (
          f && k.observe(f, { childList: !0, subtree: !0 }),
          () => {
            document.removeEventListener("focusin", w),
              document.removeEventListener("focusout", S),
              k.disconnect();
          }
        );
      }
    }, [i, f, b.paused]),
      g.useEffect(() => {
        if (f) {
          Vh.add(b);
          const w = document.activeElement;
          if (!f.contains(w)) {
            const R = new CustomEvent(Zc, Hh);
            f.addEventListener(Zc, h),
              f.dispatchEvent(R),
              R.defaultPrevented ||
                (cE(hE(Ig(f)), { select: !0 }),
                document.activeElement === w && Xn(f));
          }
          return () => {
            f.removeEventListener(Zc, h),
              setTimeout(() => {
                const R = new CustomEvent(Jc, Hh);
                f.addEventListener(Jc, y),
                  f.dispatchEvent(R),
                  R.defaultPrevented || Xn(w ?? document.body, { select: !0 }),
                  f.removeEventListener(Jc, y),
                  Vh.remove(b);
              }, 0);
          };
        }
      }, [f, h, y, b]);
    const C = g.useCallback(
      (w) => {
        if ((!o && !i) || b.paused) return;
        const S = w.key === "Tab" && !w.altKey && !w.ctrlKey && !w.metaKey,
          R = document.activeElement;
        if (S && R) {
          const k = w.currentTarget,
            [P, D] = uE(k);
          P && D
            ? !w.shiftKey && R === D
              ? (w.preventDefault(), o && Xn(P, { select: !0 }))
              : w.shiftKey &&
                R === P &&
                (w.preventDefault(), o && Xn(D, { select: !0 }))
            : R === k && w.preventDefault();
        }
      },
      [o, i, b.paused]
    );
    return v.jsx(lE.div, { tabIndex: -1, ...u, ref: E, onKeyDown: C });
  });
Ku.displayName = aE;
function cE(t, { select: r = !1 } = {}) {
  const o = document.activeElement;
  for (const i of t)
    if ((Xn(i, { select: r }), document.activeElement !== o)) return;
}
function uE(t) {
  const r = Ig(t),
    o = Gh(r, t),
    i = Gh(r.reverse(), t);
  return [o, i];
}
function Ig(t) {
  const r = [],
    o = document.createTreeWalker(t, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (i) => {
        const l = i.tagName === "INPUT" && i.type === "hidden";
        return i.disabled || i.hidden || l
          ? NodeFilter.FILTER_SKIP
          : i.tabIndex >= 0
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_SKIP;
      },
    });
  for (; o.nextNode(); ) r.push(o.currentNode);
  return r;
}
function Gh(t, r) {
  for (const o of t) if (!dE(o, { upTo: r })) return o;
}
function dE(t, { upTo: r }) {
  if (getComputedStyle(t).visibility === "hidden") return !0;
  for (; t; ) {
    if (r !== void 0 && t === r) return !1;
    if (getComputedStyle(t).display === "none") return !0;
    t = t.parentElement;
  }
  return !1;
}
function fE(t) {
  return t instanceof HTMLInputElement && "select" in t;
}
function Xn(t, { select: r = !1 } = {}) {
  if (t && t.focus) {
    const o = document.activeElement;
    t.focus({ preventScroll: !0 }), t !== o && fE(t) && r && t.select();
  }
}
var Vh = pE();
function pE() {
  let t = [];
  return {
    add(r) {
      const o = t[0];
      r !== o && (o == null || o.pause()), (t = Yh(t, r)), t.unshift(r);
    },
    remove(r) {
      var o;
      (t = Yh(t, r)), (o = t[0]) == null || o.resume();
    },
  };
}
function Yh(t, r) {
  const o = [...t],
    i = o.indexOf(r);
  return i !== -1 && o.splice(i, 1), o;
}
function hE(t) {
  return t.filter((r) => r.tagName !== "A");
}
var ft =
    globalThis != null && globalThis.document ? g.useLayoutEffect : () => {},
  mE = N0.useId || (() => {}),
  gE = 0;
function io(t) {
  const [r, o] = g.useState(mE());
  return (
    ft(() => {
      o((i) => i ?? String(gE++));
    }, [t]),
    r ? `radix-${r}` : ""
  );
}
const yE = ["top", "right", "bottom", "left"],
  er = Math.min,
  Rt = Math.max,
  hl = Math.round,
  Ys = Math.floor,
  sn = (t) => ({ x: t, y: t }),
  vE = { left: "right", right: "left", bottom: "top", top: "bottom" },
  AE = { start: "end", end: "start" };
function xu(t, r, o) {
  return Rt(t, er(r, o));
}
function Cn(t, r) {
  return typeof t == "function" ? t(r) : t;
}
function kn(t) {
  return t.split("-")[0];
}
function go(t) {
  return t.split("-")[1];
}
function ed(t) {
  return t === "x" ? "y" : "x";
}
function td(t) {
  return t === "y" ? "height" : "width";
}
function tr(t) {
  return ["top", "bottom"].includes(kn(t)) ? "y" : "x";
}
function nd(t) {
  return ed(tr(t));
}
function wE(t, r, o) {
  o === void 0 && (o = !1);
  const i = go(t),
    l = nd(t),
    c = td(l);
  let u =
    l === "x"
      ? i === (o ? "end" : "start")
        ? "right"
        : "left"
      : i === "start"
      ? "bottom"
      : "top";
  return r.reference[c] > r.floating[c] && (u = ml(u)), [u, ml(u)];
}
function xE(t) {
  const r = ml(t);
  return [Su(t), r, Su(r)];
}
function Su(t) {
  return t.replace(/start|end/g, (r) => AE[r]);
}
function SE(t, r, o) {
  const i = ["left", "right"],
    l = ["right", "left"],
    c = ["top", "bottom"],
    u = ["bottom", "top"];
  switch (t) {
    case "top":
    case "bottom":
      return o ? (r ? l : i) : r ? i : l;
    case "left":
    case "right":
      return r ? c : u;
    default:
      return [];
  }
}
function EE(t, r, o, i) {
  const l = go(t);
  let c = SE(kn(t), o === "start", i);
  return (
    l && ((c = c.map((u) => u + "-" + l)), r && (c = c.concat(c.map(Su)))), c
  );
}
function ml(t) {
  return t.replace(/left|right|bottom|top/g, (r) => vE[r]);
}
function CE(t) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...t };
}
function Tg(t) {
  return typeof t != "number"
    ? CE(t)
    : { top: t, right: t, bottom: t, left: t };
}
function gl(t) {
  const { x: r, y: o, width: i, height: l } = t;
  return {
    width: i,
    height: l,
    top: o,
    left: r,
    right: r + i,
    bottom: o + l,
    x: r,
    y: o,
  };
}
function $h(t, r, o) {
  let { reference: i, floating: l } = t;
  const c = tr(r),
    u = nd(r),
    f = td(u),
    m = kn(r),
    h = c === "y",
    y = i.x + i.width / 2 - l.width / 2,
    x = i.y + i.height / 2 - l.height / 2,
    E = i[f] / 2 - l[f] / 2;
  let b;
  switch (m) {
    case "top":
      b = { x: y, y: i.y - l.height };
      break;
    case "bottom":
      b = { x: y, y: i.y + i.height };
      break;
    case "right":
      b = { x: i.x + i.width, y: x };
      break;
    case "left":
      b = { x: i.x - l.width, y: x };
      break;
    default:
      b = { x: i.x, y: i.y };
  }
  switch (go(r)) {
    case "start":
      b[u] -= E * (o && h ? -1 : 1);
      break;
    case "end":
      b[u] += E * (o && h ? -1 : 1);
      break;
  }
  return b;
}
const kE = async (t, r, o) => {
  const {
      placement: i = "bottom",
      strategy: l = "absolute",
      middleware: c = [],
      platform: u,
    } = o,
    f = c.filter(Boolean),
    m = await (u.isRTL == null ? void 0 : u.isRTL(r));
  let h = await u.getElementRects({ reference: t, floating: r, strategy: l }),
    { x: y, y: x } = $h(h, i, m),
    E = i,
    b = {},
    C = 0;
  for (let w = 0; w < f.length; w++) {
    const { name: S, fn: R } = f[w],
      {
        x: k,
        y: P,
        data: D,
        reset: B,
      } = await R({
        x: y,
        y: x,
        initialPlacement: i,
        placement: E,
        strategy: l,
        middlewareData: b,
        rects: h,
        platform: u,
        elements: { reference: t, floating: r },
      });
    (y = k ?? y),
      (x = P ?? x),
      (b = { ...b, [S]: { ...b[S], ...D } }),
      B &&
        C <= 50 &&
        (C++,
        typeof B == "object" &&
          (B.placement && (E = B.placement),
          B.rects &&
            (h =
              B.rects === !0
                ? await u.getElementRects({
                    reference: t,
                    floating: r,
                    strategy: l,
                  })
                : B.rects),
          ({ x: y, y: x } = $h(h, E, m))),
        (w = -1));
  }
  return { x: y, y: x, placement: E, strategy: l, middlewareData: b };
};
async function vi(t, r) {
  var o;
  r === void 0 && (r = {});
  const { x: i, y: l, platform: c, rects: u, elements: f, strategy: m } = t,
    {
      boundary: h = "clippingAncestors",
      rootBoundary: y = "viewport",
      elementContext: x = "floating",
      altBoundary: E = !1,
      padding: b = 0,
    } = Cn(r, t),
    C = Tg(b),
    S = f[E ? (x === "floating" ? "reference" : "floating") : x],
    R = gl(
      await c.getClippingRect({
        element:
          (o = await (c.isElement == null ? void 0 : c.isElement(S))) == null ||
          o
            ? S
            : S.contextElement ||
              (await (c.getDocumentElement == null
                ? void 0
                : c.getDocumentElement(f.floating))),
        boundary: h,
        rootBoundary: y,
        strategy: m,
      })
    ),
    k =
      x === "floating"
        ? { x: i, y: l, width: u.floating.width, height: u.floating.height }
        : u.reference,
    P = await (c.getOffsetParent == null
      ? void 0
      : c.getOffsetParent(f.floating)),
    D = (await (c.isElement == null ? void 0 : c.isElement(P)))
      ? (await (c.getScale == null ? void 0 : c.getScale(P))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    B = gl(
      c.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await c.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: f,
            rect: k,
            offsetParent: P,
            strategy: m,
          })
        : k
    );
  return {
    top: (R.top - B.top + C.top) / D.y,
    bottom: (B.bottom - R.bottom + C.bottom) / D.y,
    left: (R.left - B.left + C.left) / D.x,
    right: (B.right - R.right + C.right) / D.x,
  };
}
const RE = (t) => ({
    name: "arrow",
    options: t,
    async fn(r) {
      const {
          x: o,
          y: i,
          placement: l,
          rects: c,
          platform: u,
          elements: f,
          middlewareData: m,
        } = r,
        { element: h, padding: y = 0 } = Cn(t, r) || {};
      if (h == null) return {};
      const x = Tg(y),
        E = { x: o, y: i },
        b = nd(l),
        C = td(b),
        w = await u.getDimensions(h),
        S = b === "y",
        R = S ? "top" : "left",
        k = S ? "bottom" : "right",
        P = S ? "clientHeight" : "clientWidth",
        D = c.reference[C] + c.reference[b] - E[b] - c.floating[C],
        B = E[b] - c.reference[b],
        W = await (u.getOffsetParent == null ? void 0 : u.getOffsetParent(h));
      let z = W ? W[P] : 0;
      (!z || !(await (u.isElement == null ? void 0 : u.isElement(W)))) &&
        (z = f.floating[P] || c.floating[C]);
      const Y = D / 2 - B / 2,
        Q = z / 2 - w[C] / 2 - 1,
        se = er(x[R], Q),
        ge = er(x[k], Q),
        X = se,
        q = z - w[C] - ge,
        ae = z / 2 - w[C] / 2 + Y,
        ye = xu(X, ae, q),
        oe =
          !m.arrow &&
          go(l) != null &&
          ae !== ye &&
          c.reference[C] / 2 - (ae < X ? se : ge) - w[C] / 2 < 0,
        ne = oe ? (ae < X ? ae - X : ae - q) : 0;
      return {
        [b]: E[b] + ne,
        data: {
          [b]: ye,
          centerOffset: ae - ye - ne,
          ...(oe && { alignmentOffset: ne }),
        },
        reset: oe,
      };
    },
  }),
  bE = function (t) {
    return (
      t === void 0 && (t = {}),
      {
        name: "flip",
        options: t,
        async fn(r) {
          var o, i;
          const {
              placement: l,
              middlewareData: c,
              rects: u,
              initialPlacement: f,
              platform: m,
              elements: h,
            } = r,
            {
              mainAxis: y = !0,
              crossAxis: x = !0,
              fallbackPlacements: E,
              fallbackStrategy: b = "bestFit",
              fallbackAxisSideDirection: C = "none",
              flipAlignment: w = !0,
              ...S
            } = Cn(t, r);
          if ((o = c.arrow) != null && o.alignmentOffset) return {};
          const R = kn(l),
            k = tr(f),
            P = kn(f) === f,
            D = await (m.isRTL == null ? void 0 : m.isRTL(h.floating)),
            B = E || (P || !w ? [ml(f)] : xE(f)),
            W = C !== "none";
          !E && W && B.push(...EE(f, w, C, D));
          const z = [f, ...B],
            Y = await vi(r, S),
            Q = [];
          let se = ((i = c.flip) == null ? void 0 : i.overflows) || [];
          if ((y && Q.push(Y[R]), x)) {
            const ae = wE(l, u, D);
            Q.push(Y[ae[0]], Y[ae[1]]);
          }
          if (
            ((se = [...se, { placement: l, overflows: Q }]),
            !Q.every((ae) => ae <= 0))
          ) {
            var ge, X;
            const ae = (((ge = c.flip) == null ? void 0 : ge.index) || 0) + 1,
              ye = z[ae];
            if (ye)
              return {
                data: { index: ae, overflows: se },
                reset: { placement: ye },
              };
            let oe =
              (X = se
                .filter((ne) => ne.overflows[0] <= 0)
                .sort((ne, _) => ne.overflows[1] - _.overflows[1])[0]) == null
                ? void 0
                : X.placement;
            if (!oe)
              switch (b) {
                case "bestFit": {
                  var q;
                  const ne =
                    (q = se
                      .filter((_) => {
                        if (W) {
                          const J = tr(_.placement);
                          return J === k || J === "y";
                        }
                        return !0;
                      })
                      .map((_) => [
                        _.placement,
                        _.overflows
                          .filter((J) => J > 0)
                          .reduce((J, Z) => J + Z, 0),
                      ])
                      .sort((_, J) => _[1] - J[1])[0]) == null
                      ? void 0
                      : q[0];
                  ne && (oe = ne);
                  break;
                }
                case "initialPlacement":
                  oe = f;
                  break;
              }
            if (l !== oe) return { reset: { placement: oe } };
          }
          return {};
        },
      }
    );
  };
function Zh(t, r) {
  return {
    top: t.top - r.height,
    right: t.right - r.width,
    bottom: t.bottom - r.height,
    left: t.left - r.width,
  };
}
function Jh(t) {
  return yE.some((r) => t[r] >= 0);
}
const NE = function (t) {
  return (
    t === void 0 && (t = {}),
    {
      name: "hide",
      options: t,
      async fn(r) {
        const { rects: o } = r,
          { strategy: i = "referenceHidden", ...l } = Cn(t, r);
        switch (i) {
          case "referenceHidden": {
            const c = await vi(r, { ...l, elementContext: "reference" }),
              u = Zh(c, o.reference);
            return {
              data: { referenceHiddenOffsets: u, referenceHidden: Jh(u) },
            };
          }
          case "escaped": {
            const c = await vi(r, { ...l, altBoundary: !0 }),
              u = Zh(c, o.floating);
            return { data: { escapedOffsets: u, escaped: Jh(u) } };
          }
          default:
            return {};
        }
      },
    }
  );
};
async function PE(t, r) {
  const { placement: o, platform: i, elements: l } = t,
    c = await (i.isRTL == null ? void 0 : i.isRTL(l.floating)),
    u = kn(o),
    f = go(o),
    m = tr(o) === "y",
    h = ["left", "top"].includes(u) ? -1 : 1,
    y = c && m ? -1 : 1,
    x = Cn(r, t);
  let {
    mainAxis: E,
    crossAxis: b,
    alignmentAxis: C,
  } = typeof x == "number"
    ? { mainAxis: x, crossAxis: 0, alignmentAxis: null }
    : {
        mainAxis: x.mainAxis || 0,
        crossAxis: x.crossAxis || 0,
        alignmentAxis: x.alignmentAxis,
      };
  return (
    f && typeof C == "number" && (b = f === "end" ? C * -1 : C),
    m ? { x: b * y, y: E * h } : { x: E * h, y: b * y }
  );
}
const OE = function (t) {
    return (
      t === void 0 && (t = 0),
      {
        name: "offset",
        options: t,
        async fn(r) {
          var o, i;
          const { x: l, y: c, placement: u, middlewareData: f } = r,
            m = await PE(r, t);
          return u === ((o = f.offset) == null ? void 0 : o.placement) &&
            (i = f.arrow) != null &&
            i.alignmentOffset
            ? {}
            : { x: l + m.x, y: c + m.y, data: { ...m, placement: u } };
        },
      }
    );
  },
  IE = function (t) {
    return (
      t === void 0 && (t = {}),
      {
        name: "shift",
        options: t,
        async fn(r) {
          const { x: o, y: i, placement: l } = r,
            {
              mainAxis: c = !0,
              crossAxis: u = !1,
              limiter: f = {
                fn: (S) => {
                  let { x: R, y: k } = S;
                  return { x: R, y: k };
                },
              },
              ...m
            } = Cn(t, r),
            h = { x: o, y: i },
            y = await vi(r, m),
            x = tr(kn(l)),
            E = ed(x);
          let b = h[E],
            C = h[x];
          if (c) {
            const S = E === "y" ? "top" : "left",
              R = E === "y" ? "bottom" : "right",
              k = b + y[S],
              P = b - y[R];
            b = xu(k, b, P);
          }
          if (u) {
            const S = x === "y" ? "top" : "left",
              R = x === "y" ? "bottom" : "right",
              k = C + y[S],
              P = C - y[R];
            C = xu(k, C, P);
          }
          const w = f.fn({ ...r, [E]: b, [x]: C });
          return {
            ...w,
            data: { x: w.x - o, y: w.y - i, enabled: { [E]: c, [x]: u } },
          };
        },
      }
    );
  },
  TE = function (t) {
    return (
      t === void 0 && (t = {}),
      {
        options: t,
        fn(r) {
          const { x: o, y: i, placement: l, rects: c, middlewareData: u } = r,
            { offset: f = 0, mainAxis: m = !0, crossAxis: h = !0 } = Cn(t, r),
            y = { x: o, y: i },
            x = tr(l),
            E = ed(x);
          let b = y[E],
            C = y[x];
          const w = Cn(f, r),
            S =
              typeof w == "number"
                ? { mainAxis: w, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...w };
          if (m) {
            const P = E === "y" ? "height" : "width",
              D = c.reference[E] - c.floating[P] + S.mainAxis,
              B = c.reference[E] + c.reference[P] - S.mainAxis;
            b < D ? (b = D) : b > B && (b = B);
          }
          if (h) {
            var R, k;
            const P = E === "y" ? "width" : "height",
              D = ["top", "left"].includes(kn(l)),
              B =
                c.reference[x] -
                c.floating[P] +
                ((D && ((R = u.offset) == null ? void 0 : R[x])) || 0) +
                (D ? 0 : S.crossAxis),
              W =
                c.reference[x] +
                c.reference[P] +
                (D ? 0 : ((k = u.offset) == null ? void 0 : k[x]) || 0) -
                (D ? S.crossAxis : 0);
            C < B ? (C = B) : C > W && (C = W);
          }
          return { [E]: b, [x]: C };
        },
      }
    );
  },
  DE = function (t) {
    return (
      t === void 0 && (t = {}),
      {
        name: "size",
        options: t,
        async fn(r) {
          var o, i;
          const { placement: l, rects: c, platform: u, elements: f } = r,
            { apply: m = () => {}, ...h } = Cn(t, r),
            y = await vi(r, h),
            x = kn(l),
            E = go(l),
            b = tr(l) === "y",
            { width: C, height: w } = c.floating;
          let S, R;
          x === "top" || x === "bottom"
            ? ((S = x),
              (R =
                E ===
                ((await (u.isRTL == null ? void 0 : u.isRTL(f.floating)))
                  ? "start"
                  : "end")
                  ? "left"
                  : "right"))
            : ((R = x), (S = E === "end" ? "top" : "bottom"));
          const k = w - y.top - y.bottom,
            P = C - y.left - y.right,
            D = er(w - y[S], k),
            B = er(C - y[R], P),
            W = !r.middlewareData.shift;
          let z = D,
            Y = B;
          if (
            ((o = r.middlewareData.shift) != null && o.enabled.x && (Y = P),
            (i = r.middlewareData.shift) != null && i.enabled.y && (z = k),
            W && !E)
          ) {
            const se = Rt(y.left, 0),
              ge = Rt(y.right, 0),
              X = Rt(y.top, 0),
              q = Rt(y.bottom, 0);
            b
              ? (Y =
                  C -
                  2 * (se !== 0 || ge !== 0 ? se + ge : Rt(y.left, y.right)))
              : (z =
                  w - 2 * (X !== 0 || q !== 0 ? X + q : Rt(y.top, y.bottom)));
          }
          await m({ ...r, availableWidth: Y, availableHeight: z });
          const Q = await u.getDimensions(f.floating);
          return C !== Q.width || w !== Q.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function Pl() {
  return typeof window < "u";
}
function yo(t) {
  return Dg(t) ? (t.nodeName || "").toLowerCase() : "#document";
}
function bt(t) {
  var r;
  return (
    (t == null || (r = t.ownerDocument) == null ? void 0 : r.defaultView) ||
    window
  );
}
function fn(t) {
  var r;
  return (r = (Dg(t) ? t.ownerDocument : t.document) || window.document) == null
    ? void 0
    : r.documentElement;
}
function Dg(t) {
  return Pl() ? t instanceof Node || t instanceof bt(t).Node : !1;
}
function Zt(t) {
  return Pl() ? t instanceof Element || t instanceof bt(t).Element : !1;
}
function cn(t) {
  return Pl() ? t instanceof HTMLElement || t instanceof bt(t).HTMLElement : !1;
}
function Xh(t) {
  return !Pl() || typeof ShadowRoot > "u"
    ? !1
    : t instanceof ShadowRoot || t instanceof bt(t).ShadowRoot;
}
function Pi(t) {
  const { overflow: r, overflowX: o, overflowY: i, display: l } = Jt(t);
  return (
    /auto|scroll|overlay|hidden|clip/.test(r + i + o) &&
    !["inline", "contents"].includes(l)
  );
}
function BE(t) {
  return ["table", "td", "th"].includes(yo(t));
}
function Ol(t) {
  return [":popover-open", ":modal"].some((r) => {
    try {
      return t.matches(r);
    } catch {
      return !1;
    }
  });
}
function rd(t) {
  const r = od(),
    o = Zt(t) ? Jt(t) : t;
  return (
    o.transform !== "none" ||
    o.perspective !== "none" ||
    (o.containerType ? o.containerType !== "normal" : !1) ||
    (!r && (o.backdropFilter ? o.backdropFilter !== "none" : !1)) ||
    (!r && (o.filter ? o.filter !== "none" : !1)) ||
    ["transform", "perspective", "filter"].some((i) =>
      (o.willChange || "").includes(i)
    ) ||
    ["paint", "layout", "strict", "content"].some((i) =>
      (o.contain || "").includes(i)
    )
  );
}
function jE(t) {
  let r = nr(t);
  for (; cn(r) && !co(r); ) {
    if (rd(r)) return r;
    if (Ol(r)) return null;
    r = nr(r);
  }
  return null;
}
function od() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
function co(t) {
  return ["html", "body", "#document"].includes(yo(t));
}
function Jt(t) {
  return bt(t).getComputedStyle(t);
}
function Il(t) {
  return Zt(t)
    ? { scrollLeft: t.scrollLeft, scrollTop: t.scrollTop }
    : { scrollLeft: t.scrollX, scrollTop: t.scrollY };
}
function nr(t) {
  if (yo(t) === "html") return t;
  const r = t.assignedSlot || t.parentNode || (Xh(t) && t.host) || fn(t);
  return Xh(r) ? r.host : r;
}
function Bg(t) {
  const r = nr(t);
  return co(r)
    ? t.ownerDocument
      ? t.ownerDocument.body
      : t.body
    : cn(r) && Pi(r)
    ? r
    : Bg(r);
}
function Ai(t, r, o) {
  var i;
  r === void 0 && (r = []), o === void 0 && (o = !0);
  const l = Bg(t),
    c = l === ((i = t.ownerDocument) == null ? void 0 : i.body),
    u = bt(l);
  if (c) {
    const f = Eu(u);
    return r.concat(
      u,
      u.visualViewport || [],
      Pi(l) ? l : [],
      f && o ? Ai(f) : []
    );
  }
  return r.concat(l, Ai(l, [], o));
}
function Eu(t) {
  return t.parent && Object.getPrototypeOf(t.parent) ? t.frameElement : null;
}
function jg(t) {
  const r = Jt(t);
  let o = parseFloat(r.width) || 0,
    i = parseFloat(r.height) || 0;
  const l = cn(t),
    c = l ? t.offsetWidth : o,
    u = l ? t.offsetHeight : i,
    f = hl(o) !== c || hl(i) !== u;
  return f && ((o = c), (i = u)), { width: o, height: i, $: f };
}
function id(t) {
  return Zt(t) ? t : t.contextElement;
}
function so(t) {
  const r = id(t);
  if (!cn(r)) return sn(1);
  const o = r.getBoundingClientRect(),
    { width: i, height: l, $: c } = jg(r);
  let u = (c ? hl(o.width) : o.width) / i,
    f = (c ? hl(o.height) : o.height) / l;
  return (
    (!u || !Number.isFinite(u)) && (u = 1),
    (!f || !Number.isFinite(f)) && (f = 1),
    { x: u, y: f }
  );
}
const ME = sn(0);
function Mg(t) {
  const r = bt(t);
  return !od() || !r.visualViewport
    ? ME
    : { x: r.visualViewport.offsetLeft, y: r.visualViewport.offsetTop };
}
function LE(t, r, o) {
  return r === void 0 && (r = !1), !o || (r && o !== bt(t)) ? !1 : r;
}
function xr(t, r, o, i) {
  r === void 0 && (r = !1), o === void 0 && (o = !1);
  const l = t.getBoundingClientRect(),
    c = id(t);
  let u = sn(1);
  r && (i ? Zt(i) && (u = so(i)) : (u = so(t)));
  const f = LE(c, o, i) ? Mg(c) : sn(0);
  let m = (l.left + f.x) / u.x,
    h = (l.top + f.y) / u.y,
    y = l.width / u.x,
    x = l.height / u.y;
  if (c) {
    const E = bt(c),
      b = i && Zt(i) ? bt(i) : i;
    let C = E,
      w = Eu(C);
    for (; w && i && b !== C; ) {
      const S = so(w),
        R = w.getBoundingClientRect(),
        k = Jt(w),
        P = R.left + (w.clientLeft + parseFloat(k.paddingLeft)) * S.x,
        D = R.top + (w.clientTop + parseFloat(k.paddingTop)) * S.y;
      (m *= S.x),
        (h *= S.y),
        (y *= S.x),
        (x *= S.y),
        (m += P),
        (h += D),
        (C = bt(w)),
        (w = Eu(C));
    }
  }
  return gl({ width: y, height: x, x: m, y: h });
}
function sd(t, r) {
  const o = Il(t).scrollLeft;
  return r ? r.left + o : xr(fn(t)).left + o;
}
function Lg(t, r, o) {
  o === void 0 && (o = !1);
  const i = t.getBoundingClientRect(),
    l = i.left + r.scrollLeft - (o ? 0 : sd(t, i)),
    c = i.top + r.scrollTop;
  return { x: l, y: c };
}
function _E(t) {
  let { elements: r, rect: o, offsetParent: i, strategy: l } = t;
  const c = l === "fixed",
    u = fn(i),
    f = r ? Ol(r.floating) : !1;
  if (i === u || (f && c)) return o;
  let m = { scrollLeft: 0, scrollTop: 0 },
    h = sn(1);
  const y = sn(0),
    x = cn(i);
  if (
    (x || (!x && !c)) &&
    ((yo(i) !== "body" || Pi(u)) && (m = Il(i)), cn(i))
  ) {
    const b = xr(i);
    (h = so(i)), (y.x = b.x + i.clientLeft), (y.y = b.y + i.clientTop);
  }
  const E = u && !x && !c ? Lg(u, m, !0) : sn(0);
  return {
    width: o.width * h.x,
    height: o.height * h.y,
    x: o.x * h.x - m.scrollLeft * h.x + y.x + E.x,
    y: o.y * h.y - m.scrollTop * h.y + y.y + E.y,
  };
}
function FE(t) {
  return Array.from(t.getClientRects());
}
function zE(t) {
  const r = fn(t),
    o = Il(t),
    i = t.ownerDocument.body,
    l = Rt(r.scrollWidth, r.clientWidth, i.scrollWidth, i.clientWidth),
    c = Rt(r.scrollHeight, r.clientHeight, i.scrollHeight, i.clientHeight);
  let u = -o.scrollLeft + sd(t);
  const f = -o.scrollTop;
  return (
    Jt(i).direction === "rtl" && (u += Rt(r.clientWidth, i.clientWidth) - l),
    { width: l, height: c, x: u, y: f }
  );
}
function UE(t, r) {
  const o = bt(t),
    i = fn(t),
    l = o.visualViewport;
  let c = i.clientWidth,
    u = i.clientHeight,
    f = 0,
    m = 0;
  if (l) {
    (c = l.width), (u = l.height);
    const h = od();
    (!h || (h && r === "fixed")) && ((f = l.offsetLeft), (m = l.offsetTop));
  }
  return { width: c, height: u, x: f, y: m };
}
function WE(t, r) {
  const o = xr(t, !0, r === "fixed"),
    i = o.top + t.clientTop,
    l = o.left + t.clientLeft,
    c = cn(t) ? so(t) : sn(1),
    u = t.clientWidth * c.x,
    f = t.clientHeight * c.y,
    m = l * c.x,
    h = i * c.y;
  return { width: u, height: f, x: m, y: h };
}
function qh(t, r, o) {
  let i;
  if (r === "viewport") i = UE(t, o);
  else if (r === "document") i = zE(fn(t));
  else if (Zt(r)) i = WE(r, o);
  else {
    const l = Mg(t);
    i = { x: r.x - l.x, y: r.y - l.y, width: r.width, height: r.height };
  }
  return gl(i);
}
function _g(t, r) {
  const o = nr(t);
  return o === r || !Zt(o) || co(o)
    ? !1
    : Jt(o).position === "fixed" || _g(o, r);
}
function QE(t, r) {
  const o = r.get(t);
  if (o) return o;
  let i = Ai(t, [], !1).filter((f) => Zt(f) && yo(f) !== "body"),
    l = null;
  const c = Jt(t).position === "fixed";
  let u = c ? nr(t) : t;
  for (; Zt(u) && !co(u); ) {
    const f = Jt(u),
      m = rd(u);
    !m && f.position === "fixed" && (l = null),
      (
        c
          ? !m && !l
          : (!m &&
              f.position === "static" &&
              !!l &&
              ["absolute", "fixed"].includes(l.position)) ||
            (Pi(u) && !m && _g(t, u))
      )
        ? (i = i.filter((y) => y !== u))
        : (l = f),
      (u = nr(u));
  }
  return r.set(t, i), i;
}
function HE(t) {
  let { element: r, boundary: o, rootBoundary: i, strategy: l } = t;
  const u = [
      ...(o === "clippingAncestors"
        ? Ol(r)
          ? []
          : QE(r, this._c)
        : [].concat(o)),
      i,
    ],
    f = u[0],
    m = u.reduce((h, y) => {
      const x = qh(r, y, l);
      return (
        (h.top = Rt(x.top, h.top)),
        (h.right = er(x.right, h.right)),
        (h.bottom = er(x.bottom, h.bottom)),
        (h.left = Rt(x.left, h.left)),
        h
      );
    }, qh(r, f, l));
  return {
    width: m.right - m.left,
    height: m.bottom - m.top,
    x: m.left,
    y: m.top,
  };
}
function GE(t) {
  const { width: r, height: o } = jg(t);
  return { width: r, height: o };
}
function VE(t, r, o) {
  const i = cn(r),
    l = fn(r),
    c = o === "fixed",
    u = xr(t, !0, c, r);
  let f = { scrollLeft: 0, scrollTop: 0 };
  const m = sn(0);
  if (i || (!i && !c))
    if (((yo(r) !== "body" || Pi(l)) && (f = Il(r)), i)) {
      const E = xr(r, !0, c, r);
      (m.x = E.x + r.clientLeft), (m.y = E.y + r.clientTop);
    } else l && (m.x = sd(l));
  const h = l && !i && !c ? Lg(l, f) : sn(0),
    y = u.left + f.scrollLeft - m.x - h.x,
    x = u.top + f.scrollTop - m.y - h.y;
  return { x: y, y: x, width: u.width, height: u.height };
}
function Xc(t) {
  return Jt(t).position === "static";
}
function Kh(t, r) {
  if (!cn(t) || Jt(t).position === "fixed") return null;
  if (r) return r(t);
  let o = t.offsetParent;
  return fn(t) === o && (o = o.ownerDocument.body), o;
}
function Fg(t, r) {
  const o = bt(t);
  if (Ol(t)) return o;
  if (!cn(t)) {
    let l = nr(t);
    for (; l && !co(l); ) {
      if (Zt(l) && !Xc(l)) return l;
      l = nr(l);
    }
    return o;
  }
  let i = Kh(t, r);
  for (; i && BE(i) && Xc(i); ) i = Kh(i, r);
  return i && co(i) && Xc(i) && !rd(i) ? o : i || jE(t) || o;
}
const YE = async function (t) {
  const r = this.getOffsetParent || Fg,
    o = this.getDimensions,
    i = await o(t.floating);
  return {
    reference: VE(t.reference, await r(t.floating), t.strategy),
    floating: { x: 0, y: 0, width: i.width, height: i.height },
  };
};
function $E(t) {
  return Jt(t).direction === "rtl";
}
const ZE = {
  convertOffsetParentRelativeRectToViewportRelativeRect: _E,
  getDocumentElement: fn,
  getClippingRect: HE,
  getOffsetParent: Fg,
  getElementRects: YE,
  getClientRects: FE,
  getDimensions: GE,
  getScale: so,
  isElement: Zt,
  isRTL: $E,
};
function JE(t, r) {
  let o = null,
    i;
  const l = fn(t);
  function c() {
    var f;
    clearTimeout(i), (f = o) == null || f.disconnect(), (o = null);
  }
  function u(f, m) {
    f === void 0 && (f = !1), m === void 0 && (m = 1), c();
    const { left: h, top: y, width: x, height: E } = t.getBoundingClientRect();
    if ((f || r(), !x || !E)) return;
    const b = Ys(y),
      C = Ys(l.clientWidth - (h + x)),
      w = Ys(l.clientHeight - (y + E)),
      S = Ys(h),
      k = {
        rootMargin: -b + "px " + -C + "px " + -w + "px " + -S + "px",
        threshold: Rt(0, er(1, m)) || 1,
      };
    let P = !0;
    function D(B) {
      const W = B[0].intersectionRatio;
      if (W !== m) {
        if (!P) return u();
        W
          ? u(!1, W)
          : (i = setTimeout(() => {
              u(!1, 1e-7);
            }, 1e3));
      }
      P = !1;
    }
    try {
      o = new IntersectionObserver(D, { ...k, root: l.ownerDocument });
    } catch {
      o = new IntersectionObserver(D, k);
    }
    o.observe(t);
  }
  return u(!0), c;
}
function XE(t, r, o, i) {
  i === void 0 && (i = {});
  const {
      ancestorScroll: l = !0,
      ancestorResize: c = !0,
      elementResize: u = typeof ResizeObserver == "function",
      layoutShift: f = typeof IntersectionObserver == "function",
      animationFrame: m = !1,
    } = i,
    h = id(t),
    y = l || c ? [...(h ? Ai(h) : []), ...Ai(r)] : [];
  y.forEach((R) => {
    l && R.addEventListener("scroll", o, { passive: !0 }),
      c && R.addEventListener("resize", o);
  });
  const x = h && f ? JE(h, o) : null;
  let E = -1,
    b = null;
  u &&
    ((b = new ResizeObserver((R) => {
      let [k] = R;
      k &&
        k.target === h &&
        b &&
        (b.unobserve(r),
        cancelAnimationFrame(E),
        (E = requestAnimationFrame(() => {
          var P;
          (P = b) == null || P.observe(r);
        }))),
        o();
    })),
    h && !m && b.observe(h),
    b.observe(r));
  let C,
    w = m ? xr(t) : null;
  m && S();
  function S() {
    const R = xr(t);
    w &&
      (R.x !== w.x ||
        R.y !== w.y ||
        R.width !== w.width ||
        R.height !== w.height) &&
      o(),
      (w = R),
      (C = requestAnimationFrame(S));
  }
  return (
    o(),
    () => {
      var R;
      y.forEach((k) => {
        l && k.removeEventListener("scroll", o),
          c && k.removeEventListener("resize", o);
      }),
        x == null || x(),
        (R = b) == null || R.disconnect(),
        (b = null),
        m && cancelAnimationFrame(C);
    }
  );
}
const qE = OE,
  KE = IE,
  eC = bE,
  tC = DE,
  nC = NE,
  em = RE,
  rC = TE,
  oC = (t, r, o) => {
    const i = new Map(),
      l = { platform: ZE, ...o },
      c = { ...l.platform, _c: i };
    return kE(t, r, { ...l, platform: c });
  };
var al = typeof document < "u" ? g.useLayoutEffect : g.useEffect;
function yl(t, r) {
  if (t === r) return !0;
  if (typeof t != typeof r) return !1;
  if (typeof t == "function" && t.toString() === r.toString()) return !0;
  let o, i, l;
  if (t && r && typeof t == "object") {
    if (Array.isArray(t)) {
      if (((o = t.length), o !== r.length)) return !1;
      for (i = o; i-- !== 0; ) if (!yl(t[i], r[i])) return !1;
      return !0;
    }
    if (((l = Object.keys(t)), (o = l.length), o !== Object.keys(r).length))
      return !1;
    for (i = o; i-- !== 0; ) if (!{}.hasOwnProperty.call(r, l[i])) return !1;
    for (i = o; i-- !== 0; ) {
      const c = l[i];
      if (!(c === "_owner" && t.$$typeof) && !yl(t[c], r[c])) return !1;
    }
    return !0;
  }
  return t !== t && r !== r;
}
function zg(t) {
  return typeof window > "u"
    ? 1
    : (t.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function tm(t, r) {
  const o = zg(t);
  return Math.round(r * o) / o;
}
function qc(t) {
  const r = g.useRef(t);
  return (
    al(() => {
      r.current = t;
    }),
    r
  );
}
function iC(t) {
  t === void 0 && (t = {});
  const {
      placement: r = "bottom",
      strategy: o = "absolute",
      middleware: i = [],
      platform: l,
      elements: { reference: c, floating: u } = {},
      transform: f = !0,
      whileElementsMounted: m,
      open: h,
    } = t,
    [y, x] = g.useState({
      x: 0,
      y: 0,
      strategy: o,
      placement: r,
      middlewareData: {},
      isPositioned: !1,
    }),
    [E, b] = g.useState(i);
  yl(E, i) || b(i);
  const [C, w] = g.useState(null),
    [S, R] = g.useState(null),
    k = g.useCallback((_) => {
      _ !== W.current && ((W.current = _), w(_));
    }, []),
    P = g.useCallback((_) => {
      _ !== z.current && ((z.current = _), R(_));
    }, []),
    D = c || C,
    B = u || S,
    W = g.useRef(null),
    z = g.useRef(null),
    Y = g.useRef(y),
    Q = m != null,
    se = qc(m),
    ge = qc(l),
    X = qc(h),
    q = g.useCallback(() => {
      if (!W.current || !z.current) return;
      const _ = { placement: r, strategy: o, middleware: E };
      ge.current && (_.platform = ge.current),
        oC(W.current, z.current, _).then((J) => {
          const Z = { ...J, isPositioned: X.current !== !1 };
          ae.current &&
            !yl(Y.current, Z) &&
            ((Y.current = Z),
            po.flushSync(() => {
              x(Z);
            }));
        });
    }, [E, r, o, ge, X]);
  al(() => {
    h === !1 &&
      Y.current.isPositioned &&
      ((Y.current.isPositioned = !1), x((_) => ({ ..._, isPositioned: !1 })));
  }, [h]);
  const ae = g.useRef(!1);
  al(
    () => (
      (ae.current = !0),
      () => {
        ae.current = !1;
      }
    ),
    []
  ),
    al(() => {
      if ((D && (W.current = D), B && (z.current = B), D && B)) {
        if (se.current) return se.current(D, B, q);
        q();
      }
    }, [D, B, q, se, Q]);
  const ye = g.useMemo(
      () => ({ reference: W, floating: z, setReference: k, setFloating: P }),
      [k, P]
    ),
    oe = g.useMemo(() => ({ reference: D, floating: B }), [D, B]),
    ne = g.useMemo(() => {
      const _ = { position: o, left: 0, top: 0 };
      if (!oe.floating) return _;
      const J = tm(oe.floating, y.x),
        Z = tm(oe.floating, y.y);
      return f
        ? {
            ..._,
            transform: "translate(" + J + "px, " + Z + "px)",
            ...(zg(oe.floating) >= 1.5 && { willChange: "transform" }),
          }
        : { position: o, left: J, top: Z };
    }, [o, f, oe.floating, y.x, y.y]);
  return g.useMemo(
    () => ({ ...y, update: q, refs: ye, elements: oe, floatingStyles: ne }),
    [y, q, ye, oe, ne]
  );
}
const sC = (t) => {
    function r(o) {
      return {}.hasOwnProperty.call(o, "current");
    }
    return {
      name: "arrow",
      options: t,
      fn(o) {
        const { element: i, padding: l } = typeof t == "function" ? t(o) : t;
        return i && r(i)
          ? i.current != null
            ? em({ element: i.current, padding: l }).fn(o)
            : {}
          : i
          ? em({ element: i, padding: l }).fn(o)
          : {};
      },
    };
  },
  lC = (t, r) => ({ ...qE(t), options: [t, r] }),
  aC = (t, r) => ({ ...KE(t), options: [t, r] }),
  cC = (t, r) => ({ ...rC(t), options: [t, r] }),
  uC = (t, r) => ({ ...eC(t), options: [t, r] }),
  dC = (t, r) => ({ ...tC(t), options: [t, r] }),
  fC = (t, r) => ({ ...nC(t), options: [t, r] }),
  pC = (t, r) => ({ ...sC(t), options: [t, r] });
var hC = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "span",
    "svg",
    "ul",
  ],
  mC = hC.reduce((t, r) => {
    const o = g.forwardRef((i, l) => {
      const { asChild: c, ...u } = i,
        f = c ? xt : r;
      return (
        typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
        v.jsx(f, { ...u, ref: l })
      );
    });
    return (o.displayName = `Primitive.${r}`), { ...t, [r]: o };
  }, {}),
  gC = "Arrow",
  Ug = g.forwardRef((t, r) => {
    const { children: o, width: i = 10, height: l = 5, ...c } = t;
    return v.jsx(mC.svg, {
      ...c,
      ref: r,
      width: i,
      height: l,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: t.asChild ? o : v.jsx("polygon", { points: "0,0 30,0 15,10" }),
    });
  });
Ug.displayName = gC;
var yC = Ug,
  vC = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "span",
    "svg",
    "ul",
  ],
  Wg = vC.reduce((t, r) => {
    const o = g.forwardRef((i, l) => {
      const { asChild: c, ...u } = i,
        f = c ? xt : r;
      return (
        typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
        v.jsx(f, { ...u, ref: l })
      );
    });
    return (o.displayName = `Primitive.${r}`), { ...t, [r]: o };
  }, {});
function AC(t) {
  const [r, o] = g.useState(void 0);
  return (
    ft(() => {
      if (t) {
        o({ width: t.offsetWidth, height: t.offsetHeight });
        const i = new ResizeObserver((l) => {
          if (!Array.isArray(l) || !l.length) return;
          const c = l[0];
          let u, f;
          if ("borderBoxSize" in c) {
            const m = c.borderBoxSize,
              h = Array.isArray(m) ? m[0] : m;
            (u = h.inlineSize), (f = h.blockSize);
          } else (u = t.offsetWidth), (f = t.offsetHeight);
          o({ width: u, height: f });
        });
        return i.observe(t, { box: "border-box" }), () => i.unobserve(t);
      } else o(void 0);
    }, [t]),
    r
  );
}
var ld = "Popper",
  [Qg, Hg] = Ni(ld),
  [wC, Gg] = Qg(ld),
  Vg = (t) => {
    const { __scopePopper: r, children: o } = t,
      [i, l] = g.useState(null);
    return v.jsx(wC, { scope: r, anchor: i, onAnchorChange: l, children: o });
  };
Vg.displayName = ld;
var Yg = "PopperAnchor",
  $g = g.forwardRef((t, r) => {
    const { __scopePopper: o, virtualRef: i, ...l } = t,
      c = Gg(Yg, o),
      u = g.useRef(null),
      f = Me(r, u);
    return (
      g.useEffect(() => {
        c.onAnchorChange((i == null ? void 0 : i.current) || u.current);
      }),
      i ? null : v.jsx(Wg.div, { ...l, ref: f })
    );
  });
$g.displayName = Yg;
var ad = "PopperContent",
  [xC, SC] = Qg(ad),
  Zg = g.forwardRef((t, r) => {
    var K, ce, we, Ee, Re, Pe;
    const {
        __scopePopper: o,
        side: i = "bottom",
        sideOffset: l = 0,
        align: c = "center",
        alignOffset: u = 0,
        arrowPadding: f = 0,
        avoidCollisions: m = !0,
        collisionBoundary: h = [],
        collisionPadding: y = 0,
        sticky: x = "partial",
        hideWhenDetached: E = !1,
        updatePositionStrategy: b = "optimized",
        onPlaced: C,
        ...w
      } = t,
      S = Gg(ad, o),
      [R, k] = g.useState(null),
      P = Me(r, (Je) => k(Je)),
      [D, B] = g.useState(null),
      W = AC(D),
      z = (W == null ? void 0 : W.width) ?? 0,
      Y = (W == null ? void 0 : W.height) ?? 0,
      Q = i + (c !== "center" ? "-" + c : ""),
      se =
        typeof y == "number"
          ? y
          : { top: 0, right: 0, bottom: 0, left: 0, ...y },
      ge = Array.isArray(h) ? h : [h],
      X = ge.length > 0,
      q = { padding: se, boundary: ge.filter(CC), altBoundary: X },
      {
        refs: ae,
        floatingStyles: ye,
        placement: oe,
        isPositioned: ne,
        middlewareData: _,
      } = iC({
        strategy: "fixed",
        placement: Q,
        whileElementsMounted: (...Je) =>
          XE(...Je, { animationFrame: b === "always" }),
        elements: { reference: S.anchor },
        middleware: [
          lC({ mainAxis: l + Y, alignmentAxis: u }),
          m &&
            aC({
              mainAxis: !0,
              crossAxis: !1,
              limiter: x === "partial" ? cC() : void 0,
              ...q,
            }),
          m && uC({ ...q }),
          dC({
            ...q,
            apply: ({
              elements: Je,
              rects: pt,
              availableWidth: bn,
              availableHeight: Nn,
            }) => {
              const { width: pn, height: Bi } = pt.reference,
                Pn = Je.floating.style;
              Pn.setProperty("--radix-popper-available-width", `${bn}px`),
                Pn.setProperty("--radix-popper-available-height", `${Nn}px`),
                Pn.setProperty("--radix-popper-anchor-width", `${pn}px`),
                Pn.setProperty("--radix-popper-anchor-height", `${Bi}px`);
            },
          }),
          D && pC({ element: D, padding: f }),
          kC({ arrowWidth: z, arrowHeight: Y }),
          E && fC({ strategy: "referenceHidden", ...q }),
        ],
      }),
      [J, Z] = qg(oe),
      T = $t(C);
    ft(() => {
      ne && (T == null || T());
    }, [ne, T]);
    const U = (K = _.arrow) == null ? void 0 : K.x,
      he = (ce = _.arrow) == null ? void 0 : ce.y,
      pe = ((we = _.arrow) == null ? void 0 : we.centerOffset) !== 0,
      [Ae, Se] = g.useState();
    return (
      ft(() => {
        R && Se(window.getComputedStyle(R).zIndex);
      }, [R]),
      v.jsx("div", {
        ref: ae.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...ye,
          transform: ne ? ye.transform : "translate(0, -200%)",
          minWidth: "max-content",
          zIndex: Ae,
          "--radix-popper-transform-origin": [
            (Ee = _.transformOrigin) == null ? void 0 : Ee.x,
            (Re = _.transformOrigin) == null ? void 0 : Re.y,
          ].join(" "),
          ...(((Pe = _.hide) == null ? void 0 : Pe.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none",
          }),
        },
        dir: t.dir,
        children: v.jsx(xC, {
          scope: o,
          placedSide: J,
          onArrowChange: B,
          arrowX: U,
          arrowY: he,
          shouldHideArrow: pe,
          children: v.jsx(Wg.div, {
            "data-side": J,
            "data-align": Z,
            ...w,
            ref: P,
            style: { ...w.style, animation: ne ? void 0 : "none" },
          }),
        }),
      })
    );
  });
Zg.displayName = ad;
var Jg = "PopperArrow",
  EC = { top: "bottom", right: "left", bottom: "top", left: "right" },
  Xg = g.forwardRef(function (r, o) {
    const { __scopePopper: i, ...l } = r,
      c = SC(Jg, i),
      u = EC[c.placedSide];
    return v.jsx("span", {
      ref: c.onArrowChange,
      style: {
        position: "absolute",
        left: c.arrowX,
        top: c.arrowY,
        [u]: 0,
        transformOrigin: {
          top: "",
          right: "0 0",
          bottom: "center 0",
          left: "100% 0",
        }[c.placedSide],
        transform: {
          top: "translateY(100%)",
          right: "translateY(50%) rotate(90deg) translateX(-50%)",
          bottom: "rotate(180deg)",
          left: "translateY(50%) rotate(-90deg) translateX(50%)",
        }[c.placedSide],
        visibility: c.shouldHideArrow ? "hidden" : void 0,
      },
      children: v.jsx(yC, {
        ...l,
        ref: o,
        style: { ...l.style, display: "block" },
      }),
    });
  });
Xg.displayName = Jg;
function CC(t) {
  return t !== null;
}
var kC = (t) => ({
  name: "transformOrigin",
  options: t,
  fn(r) {
    var S, R, k;
    const { placement: o, rects: i, middlewareData: l } = r,
      u = ((S = l.arrow) == null ? void 0 : S.centerOffset) !== 0,
      f = u ? 0 : t.arrowWidth,
      m = u ? 0 : t.arrowHeight,
      [h, y] = qg(o),
      x = { start: "0%", center: "50%", end: "100%" }[y],
      E = (((R = l.arrow) == null ? void 0 : R.x) ?? 0) + f / 2,
      b = (((k = l.arrow) == null ? void 0 : k.y) ?? 0) + m / 2;
    let C = "",
      w = "";
    return (
      h === "bottom"
        ? ((C = u ? x : `${E}px`), (w = `${-m}px`))
        : h === "top"
        ? ((C = u ? x : `${E}px`), (w = `${i.floating.height + m}px`))
        : h === "right"
        ? ((C = `${-m}px`), (w = u ? x : `${b}px`))
        : h === "left" &&
          ((C = `${i.floating.width + m}px`), (w = u ? x : `${b}px`)),
      { data: { x: C, y: w } }
    );
  },
});
function qg(t) {
  const [r, o = "center"] = t.split("-");
  return [r, o];
}
var RC = Vg,
  bC = $g,
  NC = Zg,
  PC = Xg,
  OC = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "span",
    "svg",
    "ul",
  ],
  IC = OC.reduce((t, r) => {
    const o = g.forwardRef((i, l) => {
      const { asChild: c, ...u } = i,
        f = c ? xt : r;
      return (
        typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
        v.jsx(f, { ...u, ref: l })
      );
    });
    return (o.displayName = `Primitive.${r}`), { ...t, [r]: o };
  }, {}),
  TC = "Portal",
  cd = g.forwardRef((t, r) => {
    var f;
    const { container: o, ...i } = t,
      [l, c] = g.useState(!1);
    ft(() => c(!0), []);
    const u =
      o ||
      (l &&
        ((f = globalThis == null ? void 0 : globalThis.document) == null
          ? void 0
          : f.body));
    return u ? r1.createPortal(v.jsx(IC.div, { ...i, ref: r }), u) : null;
  });
cd.displayName = TC;
var DC = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "span",
    "svg",
    "ul",
  ],
  Lt = DC.reduce((t, r) => {
    const o = g.forwardRef((i, l) => {
      const { asChild: c, ...u } = i,
        f = c ? xt : r;
      return (
        typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
        v.jsx(f, { ...u, ref: l })
      );
    });
    return (o.displayName = `Primitive.${r}`), { ...t, [r]: o };
  }, {});
function Cu({ prop: t, defaultProp: r, onChange: o = () => {} }) {
  const [i, l] = BC({ defaultProp: r, onChange: o }),
    c = t !== void 0,
    u = c ? t : i,
    f = $t(o),
    m = g.useCallback(
      (h) => {
        if (c) {
          const x = typeof h == "function" ? h(t) : h;
          x !== t && f(x);
        } else l(h);
      },
      [c, t, l, f]
    );
  return [u, m];
}
function BC({ defaultProp: t, onChange: r }) {
  const o = g.useState(t),
    [i] = o,
    l = g.useRef(i),
    c = $t(r);
  return (
    g.useEffect(() => {
      l.current !== i && (c(i), (l.current = i));
    }, [i, l, c]),
    o
  );
}
function jC(t) {
  const r = g.useRef({ value: t, previous: t });
  return g.useMemo(
    () => (
      r.current.value !== t &&
        ((r.current.previous = r.current.value), (r.current.value = t)),
      r.current.previous
    ),
    [t]
  );
}
var MC = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "span",
    "svg",
    "ul",
  ],
  LC = MC.reduce((t, r) => {
    const o = g.forwardRef((i, l) => {
      const { asChild: c, ...u } = i,
        f = c ? xt : r;
      return (
        typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
        v.jsx(f, { ...u, ref: l })
      );
    });
    return (o.displayName = `Primitive.${r}`), { ...t, [r]: o };
  }, {}),
  _C = "VisuallyHidden",
  Kg = g.forwardRef((t, r) =>
    v.jsx(LC.span, {
      ...t,
      ref: r,
      style: {
        position: "absolute",
        border: 0,
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        wordWrap: "normal",
        ...t.style,
      },
    })
  );
Kg.displayName = _C;
var FC = function (t) {
    if (typeof document > "u") return null;
    var r = Array.isArray(t) ? t[0] : t;
    return r.ownerDocument.body;
  },
  qr = new WeakMap(),
  $s = new WeakMap(),
  Zs = {},
  Kc = 0,
  ey = function (t) {
    return t && (t.host || ey(t.parentNode));
  },
  zC = function (t, r) {
    return r
      .map(function (o) {
        if (t.contains(o)) return o;
        var i = ey(o);
        return i && t.contains(i)
          ? i
          : (console.error(
              "aria-hidden",
              o,
              "in not contained inside",
              t,
              ". Doing nothing"
            ),
            null);
      })
      .filter(function (o) {
        return !!o;
      });
  },
  UC = function (t, r, o, i) {
    var l = zC(r, Array.isArray(t) ? t : [t]);
    Zs[o] || (Zs[o] = new WeakMap());
    var c = Zs[o],
      u = [],
      f = new Set(),
      m = new Set(l),
      h = function (x) {
        !x || f.has(x) || (f.add(x), h(x.parentNode));
      };
    l.forEach(h);
    var y = function (x) {
      !x ||
        m.has(x) ||
        Array.prototype.forEach.call(x.children, function (E) {
          if (f.has(E)) y(E);
          else
            try {
              var b = E.getAttribute(i),
                C = b !== null && b !== "false",
                w = (qr.get(E) || 0) + 1,
                S = (c.get(E) || 0) + 1;
              qr.set(E, w),
                c.set(E, S),
                u.push(E),
                w === 1 && C && $s.set(E, !0),
                S === 1 && E.setAttribute(o, "true"),
                C || E.setAttribute(i, "true");
            } catch (R) {
              console.error("aria-hidden: cannot operate on ", E, R);
            }
        });
    };
    return (
      y(r),
      f.clear(),
      Kc++,
      function () {
        u.forEach(function (x) {
          var E = qr.get(x) - 1,
            b = c.get(x) - 1;
          qr.set(x, E),
            c.set(x, b),
            E || ($s.has(x) || x.removeAttribute(i), $s.delete(x)),
            b || x.removeAttribute(o);
        }),
          Kc--,
          Kc ||
            ((qr = new WeakMap()),
            (qr = new WeakMap()),
            ($s = new WeakMap()),
            (Zs = {}));
      }
    );
  },
  ty = function (t, r, o) {
    o === void 0 && (o = "data-aria-hidden");
    var i = Array.from(Array.isArray(t) ? t : [t]),
      l = FC(t);
    return l
      ? (i.push.apply(i, Array.from(l.querySelectorAll("[aria-live]"))),
        UC(i, l, o, "aria-hidden"))
      : function () {
          return null;
        };
  },
  lt = function () {
    return (
      (lt =
        Object.assign ||
        function (r) {
          for (var o, i = 1, l = arguments.length; i < l; i++) {
            o = arguments[i];
            for (var c in o)
              Object.prototype.hasOwnProperty.call(o, c) && (r[c] = o[c]);
          }
          return r;
        }),
      lt.apply(this, arguments)
    );
  };
function ud(t, r) {
  var o = {};
  for (var i in t)
    Object.prototype.hasOwnProperty.call(t, i) &&
      r.indexOf(i) < 0 &&
      (o[i] = t[i]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var l = 0, i = Object.getOwnPropertySymbols(t); l < i.length; l++)
      r.indexOf(i[l]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(t, i[l]) &&
        (o[i[l]] = t[i[l]]);
  return o;
}
function ny(t, r, o) {
  if (o || arguments.length === 2)
    for (var i = 0, l = r.length, c; i < l; i++)
      (c || !(i in r)) &&
        (c || (c = Array.prototype.slice.call(r, 0, i)), (c[i] = r[i]));
  return t.concat(c || Array.prototype.slice.call(r));
}
var mi = "right-scroll-bar-position",
  gi = "width-before-scroll-bar",
  WC = "with-scroll-bars-hidden",
  QC = "--removed-body-scroll-bar-size";
function eu(t, r) {
  return typeof t == "function" ? t(r) : t && (t.current = r), t;
}
function HC(t, r) {
  var o = g.useState(function () {
    return {
      value: t,
      callback: r,
      facade: {
        get current() {
          return o.value;
        },
        set current(i) {
          var l = o.value;
          l !== i && ((o.value = i), o.callback(i, l));
        },
      },
    };
  })[0];
  return (o.callback = r), o.facade;
}
var GC = typeof window < "u" ? g.useLayoutEffect : g.useEffect,
  nm = new WeakMap();
function ry(t, r) {
  var o = HC(null, function (i) {
    return t.forEach(function (l) {
      return eu(l, i);
    });
  });
  return (
    GC(
      function () {
        var i = nm.get(o);
        if (i) {
          var l = new Set(i),
            c = new Set(t),
            u = o.current;
          l.forEach(function (f) {
            c.has(f) || eu(f, null);
          }),
            c.forEach(function (f) {
              l.has(f) || eu(f, u);
            });
        }
        nm.set(o, t);
      },
      [t]
    ),
    o
  );
}
function VC(t) {
  return t;
}
function YC(t, r) {
  r === void 0 && (r = VC);
  var o = [],
    i = !1,
    l = {
      read: function () {
        if (i)
          throw new Error(
            "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`."
          );
        return o.length ? o[o.length - 1] : t;
      },
      useMedium: function (c) {
        var u = r(c, i);
        return (
          o.push(u),
          function () {
            o = o.filter(function (f) {
              return f !== u;
            });
          }
        );
      },
      assignSyncMedium: function (c) {
        for (i = !0; o.length; ) {
          var u = o;
          (o = []), u.forEach(c);
        }
        o = {
          push: function (f) {
            return c(f);
          },
          filter: function () {
            return o;
          },
        };
      },
      assignMedium: function (c) {
        i = !0;
        var u = [];
        if (o.length) {
          var f = o;
          (o = []), f.forEach(c), (u = o);
        }
        var m = function () {
            var y = u;
            (u = []), y.forEach(c);
          },
          h = function () {
            return Promise.resolve().then(m);
          };
        h(),
          (o = {
            push: function (y) {
              u.push(y), h();
            },
            filter: function (y) {
              return (u = u.filter(y)), o;
            },
          });
      },
    };
  return l;
}
function oy(t) {
  t === void 0 && (t = {});
  var r = YC(null);
  return (r.options = lt({ async: !0, ssr: !1 }, t)), r;
}
var iy = function (t) {
  var r = t.sideCar,
    o = ud(t, ["sideCar"]);
  if (!r)
    throw new Error(
      "Sidecar: please provide `sideCar` property to import the right car"
    );
  var i = r.read();
  if (!i) throw new Error("Sidecar medium not found");
  return g.createElement(i, lt({}, o));
};
iy.isSideCarExport = !0;
function sy(t, r) {
  return t.useMedium(r), iy;
}
var ly = oy(),
  tu = function () {},
  Tl = g.forwardRef(function (t, r) {
    var o = g.useRef(null),
      i = g.useState({
        onScrollCapture: tu,
        onWheelCapture: tu,
        onTouchMoveCapture: tu,
      }),
      l = i[0],
      c = i[1],
      u = t.forwardProps,
      f = t.children,
      m = t.className,
      h = t.removeScrollBar,
      y = t.enabled,
      x = t.shards,
      E = t.sideCar,
      b = t.noIsolation,
      C = t.inert,
      w = t.allowPinchZoom,
      S = t.as,
      R = S === void 0 ? "div" : S,
      k = t.gapMode,
      P = ud(t, [
        "forwardProps",
        "children",
        "className",
        "removeScrollBar",
        "enabled",
        "shards",
        "sideCar",
        "noIsolation",
        "inert",
        "allowPinchZoom",
        "as",
        "gapMode",
      ]),
      D = E,
      B = ry([o, r]),
      W = lt(lt({}, P), l);
    return g.createElement(
      g.Fragment,
      null,
      y &&
        g.createElement(D, {
          sideCar: ly,
          removeScrollBar: h,
          shards: x,
          noIsolation: b,
          inert: C,
          setCallbacks: c,
          allowPinchZoom: !!w,
          lockRef: o,
          gapMode: k,
        }),
      u
        ? g.cloneElement(g.Children.only(f), lt(lt({}, W), { ref: B }))
        : g.createElement(R, lt({}, W, { className: m, ref: B }), f)
    );
  });
Tl.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
Tl.classNames = { fullWidth: gi, zeroRight: mi };
var $C = function () {
  if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
function ZC() {
  if (!document) return null;
  var t = document.createElement("style");
  t.type = "text/css";
  var r = $C();
  return r && t.setAttribute("nonce", r), t;
}
function JC(t, r) {
  t.styleSheet
    ? (t.styleSheet.cssText = r)
    : t.appendChild(document.createTextNode(r));
}
function XC(t) {
  var r = document.head || document.getElementsByTagName("head")[0];
  r.appendChild(t);
}
var qC = function () {
    var t = 0,
      r = null;
    return {
      add: function (o) {
        t == 0 && (r = ZC()) && (JC(r, o), XC(r)), t++;
      },
      remove: function () {
        t--,
          !t && r && (r.parentNode && r.parentNode.removeChild(r), (r = null));
      },
    };
  },
  KC = function () {
    var t = qC();
    return function (r, o) {
      g.useEffect(
        function () {
          return (
            t.add(r),
            function () {
              t.remove();
            }
          );
        },
        [r && o]
      );
    };
  },
  dd = function () {
    var t = KC(),
      r = function (o) {
        var i = o.styles,
          l = o.dynamic;
        return t(i, l), null;
      };
    return r;
  },
  ek = { left: 0, top: 0, right: 0, gap: 0 },
  nu = function (t) {
    return parseInt(t || "", 10) || 0;
  },
  tk = function (t) {
    var r = window.getComputedStyle(document.body),
      o = r[t === "padding" ? "paddingLeft" : "marginLeft"],
      i = r[t === "padding" ? "paddingTop" : "marginTop"],
      l = r[t === "padding" ? "paddingRight" : "marginRight"];
    return [nu(o), nu(i), nu(l)];
  },
  nk = function (t) {
    if ((t === void 0 && (t = "margin"), typeof window > "u")) return ek;
    var r = tk(t),
      o = document.documentElement.clientWidth,
      i = window.innerWidth;
    return {
      left: r[0],
      top: r[1],
      right: r[2],
      gap: Math.max(0, i - o + r[2] - r[0]),
    };
  },
  rk = dd(),
  lo = "data-scroll-locked",
  ok = function (t, r, o, i) {
    var l = t.left,
      c = t.top,
      u = t.right,
      f = t.gap;
    return (
      o === void 0 && (o = "margin"),
      `
  .`
        .concat(
          WC,
          ` {
   overflow: hidden `
        )
        .concat(
          i,
          `;
   padding-right: `
        )
        .concat(f, "px ")
        .concat(
          i,
          `;
  }
  body[`
        )
        .concat(
          lo,
          `] {
    overflow: hidden `
        )
        .concat(
          i,
          `;
    overscroll-behavior: contain;
    `
        )
        .concat(
          [
            r && "position: relative ".concat(i, ";"),
            o === "margin" &&
              `
    padding-left: `
                .concat(
                  l,
                  `px;
    padding-top: `
                )
                .concat(
                  c,
                  `px;
    padding-right: `
                )
                .concat(
                  u,
                  `px;
    margin-left:0;
    margin-top:0;
    margin-right: `
                )
                .concat(f, "px ")
                .concat(
                  i,
                  `;
    `
                ),
            o === "padding" &&
              "padding-right: ".concat(f, "px ").concat(i, ";"),
          ]
            .filter(Boolean)
            .join(""),
          `
  }
  
  .`
        )
        .concat(
          mi,
          ` {
    right: `
        )
        .concat(f, "px ")
        .concat(
          i,
          `;
  }
  
  .`
        )
        .concat(
          gi,
          ` {
    margin-right: `
        )
        .concat(f, "px ")
        .concat(
          i,
          `;
  }
  
  .`
        )
        .concat(mi, " .")
        .concat(
          mi,
          ` {
    right: 0 `
        )
        .concat(
          i,
          `;
  }
  
  .`
        )
        .concat(gi, " .")
        .concat(
          gi,
          ` {
    margin-right: 0 `
        )
        .concat(
          i,
          `;
  }
  
  body[`
        )
        .concat(
          lo,
          `] {
    `
        )
        .concat(QC, ": ")
        .concat(
          f,
          `px;
  }
`
        )
    );
  },
  rm = function () {
    var t = parseInt(document.body.getAttribute(lo) || "0", 10);
    return isFinite(t) ? t : 0;
  },
  ik = function () {
    g.useEffect(function () {
      return (
        document.body.setAttribute(lo, (rm() + 1).toString()),
        function () {
          var t = rm() - 1;
          t <= 0
            ? document.body.removeAttribute(lo)
            : document.body.setAttribute(lo, t.toString());
        }
      );
    }, []);
  },
  ay = function (t) {
    var r = t.noRelative,
      o = t.noImportant,
      i = t.gapMode,
      l = i === void 0 ? "margin" : i;
    ik();
    var c = g.useMemo(
      function () {
        return nk(l);
      },
      [l]
    );
    return g.createElement(rk, { styles: ok(c, !r, l, o ? "" : "!important") });
  },
  ku = !1;
if (typeof window < "u")
  try {
    var Js = Object.defineProperty({}, "passive", {
      get: function () {
        return (ku = !0), !0;
      },
    });
    window.addEventListener("test", Js, Js),
      window.removeEventListener("test", Js, Js);
  } catch {
    ku = !1;
  }
var Kr = ku ? { passive: !1 } : !1,
  sk = function (t) {
    return t.tagName === "TEXTAREA";
  },
  cy = function (t, r) {
    if (!(t instanceof Element)) return !1;
    var o = window.getComputedStyle(t);
    return (
      o[r] !== "hidden" &&
      !(o.overflowY === o.overflowX && !sk(t) && o[r] === "visible")
    );
  },
  lk = function (t) {
    return cy(t, "overflowY");
  },
  ak = function (t) {
    return cy(t, "overflowX");
  },
  om = function (t, r) {
    var o = r.ownerDocument,
      i = r;
    do {
      typeof ShadowRoot < "u" && i instanceof ShadowRoot && (i = i.host);
      var l = uy(t, i);
      if (l) {
        var c = dy(t, i),
          u = c[1],
          f = c[2];
        if (u > f) return !0;
      }
      i = i.parentNode;
    } while (i && i !== o.body);
    return !1;
  },
  ck = function (t) {
    var r = t.scrollTop,
      o = t.scrollHeight,
      i = t.clientHeight;
    return [r, o, i];
  },
  uk = function (t) {
    var r = t.scrollLeft,
      o = t.scrollWidth,
      i = t.clientWidth;
    return [r, o, i];
  },
  uy = function (t, r) {
    return t === "v" ? lk(r) : ak(r);
  },
  dy = function (t, r) {
    return t === "v" ? ck(r) : uk(r);
  },
  dk = function (t, r) {
    return t === "h" && r === "rtl" ? -1 : 1;
  },
  fk = function (t, r, o, i, l) {
    var c = dk(t, window.getComputedStyle(r).direction),
      u = c * i,
      f = o.target,
      m = r.contains(f),
      h = !1,
      y = u > 0,
      x = 0,
      E = 0;
    do {
      var b = dy(t, f),
        C = b[0],
        w = b[1],
        S = b[2],
        R = w - S - c * C;
      (C || R) && uy(t, f) && ((x += R), (E += C)),
        f instanceof ShadowRoot ? (f = f.host) : (f = f.parentNode);
    } while ((!m && f !== document.body) || (m && (r.contains(f) || r === f)));
    return (
      ((y && (Math.abs(x) < 1 || !l)) || (!y && (Math.abs(E) < 1 || !l))) &&
        (h = !0),
      h
    );
  },
  Xs = function (t) {
    return "changedTouches" in t
      ? [t.changedTouches[0].clientX, t.changedTouches[0].clientY]
      : [0, 0];
  },
  im = function (t) {
    return [t.deltaX, t.deltaY];
  },
  sm = function (t) {
    return t && "current" in t ? t.current : t;
  },
  pk = function (t, r) {
    return t[0] === r[0] && t[1] === r[1];
  },
  hk = function (t) {
    return `
  .block-interactivity-`
      .concat(
        t,
        ` {pointer-events: none;}
  .allow-interactivity-`
      )
      .concat(
        t,
        ` {pointer-events: all;}
`
      );
  },
  mk = 0,
  eo = [];
function gk(t) {
  var r = g.useRef([]),
    o = g.useRef([0, 0]),
    i = g.useRef(),
    l = g.useState(mk++)[0],
    c = g.useState(dd)[0],
    u = g.useRef(t);
  g.useEffect(
    function () {
      u.current = t;
    },
    [t]
  ),
    g.useEffect(
      function () {
        if (t.inert) {
          document.body.classList.add("block-interactivity-".concat(l));
          var w = ny([t.lockRef.current], (t.shards || []).map(sm), !0).filter(
            Boolean
          );
          return (
            w.forEach(function (S) {
              return S.classList.add("allow-interactivity-".concat(l));
            }),
            function () {
              document.body.classList.remove("block-interactivity-".concat(l)),
                w.forEach(function (S) {
                  return S.classList.remove("allow-interactivity-".concat(l));
                });
            }
          );
        }
      },
      [t.inert, t.lockRef.current, t.shards]
    );
  var f = g.useCallback(function (w, S) {
      if (
        ("touches" in w && w.touches.length === 2) ||
        (w.type === "wheel" && w.ctrlKey)
      )
        return !u.current.allowPinchZoom;
      var R = Xs(w),
        k = o.current,
        P = "deltaX" in w ? w.deltaX : k[0] - R[0],
        D = "deltaY" in w ? w.deltaY : k[1] - R[1],
        B,
        W = w.target,
        z = Math.abs(P) > Math.abs(D) ? "h" : "v";
      if ("touches" in w && z === "h" && W.type === "range") return !1;
      var Y = om(z, W);
      if (!Y) return !0;
      if ((Y ? (B = z) : ((B = z === "v" ? "h" : "v"), (Y = om(z, W))), !Y))
        return !1;
      if (
        (!i.current && "changedTouches" in w && (P || D) && (i.current = B), !B)
      )
        return !0;
      var Q = i.current || B;
      return fk(Q, S, w, Q === "h" ? P : D, !0);
    }, []),
    m = g.useCallback(function (w) {
      var S = w;
      if (!(!eo.length || eo[eo.length - 1] !== c)) {
        var R = "deltaY" in S ? im(S) : Xs(S),
          k = r.current.filter(function (B) {
            return (
              B.name === S.type &&
              (B.target === S.target || S.target === B.shadowParent) &&
              pk(B.delta, R)
            );
          })[0];
        if (k && k.should) {
          S.cancelable && S.preventDefault();
          return;
        }
        if (!k) {
          var P = (u.current.shards || [])
              .map(sm)
              .filter(Boolean)
              .filter(function (B) {
                return B.contains(S.target);
              }),
            D = P.length > 0 ? f(S, P[0]) : !u.current.noIsolation;
          D && S.cancelable && S.preventDefault();
        }
      }
    }, []),
    h = g.useCallback(function (w, S, R, k) {
      var P = { name: w, delta: S, target: R, should: k, shadowParent: yk(R) };
      r.current.push(P),
        setTimeout(function () {
          r.current = r.current.filter(function (D) {
            return D !== P;
          });
        }, 1);
    }, []),
    y = g.useCallback(function (w) {
      (o.current = Xs(w)), (i.current = void 0);
    }, []),
    x = g.useCallback(function (w) {
      h(w.type, im(w), w.target, f(w, t.lockRef.current));
    }, []),
    E = g.useCallback(function (w) {
      h(w.type, Xs(w), w.target, f(w, t.lockRef.current));
    }, []);
  g.useEffect(function () {
    return (
      eo.push(c),
      t.setCallbacks({
        onScrollCapture: x,
        onWheelCapture: x,
        onTouchMoveCapture: E,
      }),
      document.addEventListener("wheel", m, Kr),
      document.addEventListener("touchmove", m, Kr),
      document.addEventListener("touchstart", y, Kr),
      function () {
        (eo = eo.filter(function (w) {
          return w !== c;
        })),
          document.removeEventListener("wheel", m, Kr),
          document.removeEventListener("touchmove", m, Kr),
          document.removeEventListener("touchstart", y, Kr);
      }
    );
  }, []);
  var b = t.removeScrollBar,
    C = t.inert;
  return g.createElement(
    g.Fragment,
    null,
    C ? g.createElement(c, { styles: hk(l) }) : null,
    b ? g.createElement(ay, { gapMode: t.gapMode }) : null
  );
}
function yk(t) {
  for (var r = null; t !== null; )
    t instanceof ShadowRoot && ((r = t.host), (t = t.host)), (t = t.parentNode);
  return r;
}
const vk = sy(ly, gk);
var fy = g.forwardRef(function (t, r) {
  return g.createElement(Tl, lt({}, t, { ref: r, sideCar: vk }));
});
fy.classNames = Tl.classNames;
var Ak = [" ", "Enter", "ArrowUp", "ArrowDown"],
  wk = [" ", "Enter"],
  Oi = "Select",
  [Dl, Bl, xk] = $S(Oi),
  [vo, eP] = Ni(Oi, [xk, Hg]),
  jl = Hg(),
  [Sk, or] = vo(Oi),
  [Ek, Ck] = vo(Oi),
  py = (t) => {
    const {
        __scopeSelect: r,
        children: o,
        open: i,
        defaultOpen: l,
        onOpenChange: c,
        value: u,
        defaultValue: f,
        onValueChange: m,
        dir: h,
        name: y,
        autoComplete: x,
        disabled: E,
        required: b,
        form: C,
      } = t,
      w = jl(r),
      [S, R] = g.useState(null),
      [k, P] = g.useState(null),
      [D, B] = g.useState(!1),
      W = JS(h),
      [z = !1, Y] = Cu({ prop: i, defaultProp: l, onChange: c }),
      [Q, se] = Cu({ prop: u, defaultProp: f, onChange: m }),
      ge = g.useRef(null),
      X = S ? C || !!S.closest("form") : !0,
      [q, ae] = g.useState(new Set()),
      ye = Array.from(q)
        .map((oe) => oe.props.value)
        .join(";");
    return v.jsx(RC, {
      ...w,
      children: v.jsxs(Sk, {
        required: b,
        scope: r,
        trigger: S,
        onTriggerChange: R,
        valueNode: k,
        onValueNodeChange: P,
        valueNodeHasChildren: D,
        onValueNodeHasChildrenChange: B,
        contentId: io(),
        value: Q,
        onValueChange: se,
        open: z,
        onOpenChange: Y,
        dir: W,
        triggerPointerDownPosRef: ge,
        disabled: E,
        children: [
          v.jsx(Dl.Provider, {
            scope: r,
            children: v.jsx(Ek, {
              scope: t.__scopeSelect,
              onNativeOptionAdd: g.useCallback((oe) => {
                ae((ne) => new Set(ne).add(oe));
              }, []),
              onNativeOptionRemove: g.useCallback((oe) => {
                ae((ne) => {
                  const _ = new Set(ne);
                  return _.delete(oe), _;
                });
              }, []),
              children: o,
            }),
          }),
          X
            ? v.jsxs(
                _y,
                {
                  "aria-hidden": !0,
                  required: b,
                  tabIndex: -1,
                  name: y,
                  autoComplete: x,
                  value: Q,
                  onChange: (oe) => se(oe.target.value),
                  disabled: E,
                  form: C,
                  children: [
                    Q === void 0 ? v.jsx("option", { value: "" }) : null,
                    Array.from(q),
                  ],
                },
                ye
              )
            : null,
        ],
      }),
    });
  };
py.displayName = Oi;
var hy = "SelectTrigger",
  my = g.forwardRef((t, r) => {
    const { __scopeSelect: o, disabled: i = !1, ...l } = t,
      c = jl(o),
      u = or(hy, o),
      f = u.disabled || i,
      m = Me(r, u.onTriggerChange),
      h = Bl(o),
      y = g.useRef("touch"),
      [x, E, b] = Fy((w) => {
        const S = h().filter((P) => !P.disabled),
          R = S.find((P) => P.value === u.value),
          k = zy(S, w, R);
        k !== void 0 && u.onValueChange(k.value);
      }),
      C = (w) => {
        f || (u.onOpenChange(!0), b()),
          w &&
            (u.triggerPointerDownPosRef.current = {
              x: Math.round(w.pageX),
              y: Math.round(w.pageY),
            });
      };
    return v.jsx(bC, {
      asChild: !0,
      ...c,
      children: v.jsx(Lt.button, {
        type: "button",
        role: "combobox",
        "aria-controls": u.contentId,
        "aria-expanded": u.open,
        "aria-required": u.required,
        "aria-autocomplete": "none",
        dir: u.dir,
        "data-state": u.open ? "open" : "closed",
        disabled: f,
        "data-disabled": f ? "" : void 0,
        "data-placeholder": Ly(u.value) ? "" : void 0,
        ...l,
        ref: m,
        onClick: Ie(l.onClick, (w) => {
          w.currentTarget.focus(), y.current !== "mouse" && C(w);
        }),
        onPointerDown: Ie(l.onPointerDown, (w) => {
          y.current = w.pointerType;
          const S = w.target;
          S.hasPointerCapture(w.pointerId) &&
            S.releasePointerCapture(w.pointerId),
            w.button === 0 &&
              w.ctrlKey === !1 &&
              w.pointerType === "mouse" &&
              (C(w), w.preventDefault());
        }),
        onKeyDown: Ie(l.onKeyDown, (w) => {
          const S = x.current !== "";
          !(w.ctrlKey || w.altKey || w.metaKey) &&
            w.key.length === 1 &&
            E(w.key),
            !(S && w.key === " ") &&
              Ak.includes(w.key) &&
              (C(), w.preventDefault());
        }),
      }),
    });
  });
my.displayName = hy;
var gy = "SelectValue",
  yy = g.forwardRef((t, r) => {
    const {
        __scopeSelect: o,
        className: i,
        style: l,
        children: c,
        placeholder: u = "",
        ...f
      } = t,
      m = or(gy, o),
      { onValueNodeHasChildrenChange: h } = m,
      y = c !== void 0,
      x = Me(r, m.onValueNodeChange);
    return (
      ft(() => {
        h(y);
      }, [h, y]),
      v.jsx(Lt.span, {
        ...f,
        ref: x,
        style: { pointerEvents: "none" },
        children: Ly(m.value) ? v.jsx(v.Fragment, { children: u }) : c,
      })
    );
  });
yy.displayName = gy;
var kk = "SelectIcon",
  vy = g.forwardRef((t, r) => {
    const { __scopeSelect: o, children: i, ...l } = t;
    return v.jsx(Lt.span, {
      "aria-hidden": !0,
      ...l,
      ref: r,
      children: i || "▼",
    });
  });
vy.displayName = kk;
var Rk = "SelectPortal",
  Ay = (t) => v.jsx(cd, { asChild: !0, ...t });
Ay.displayName = Rk;
var Sr = "SelectContent",
  wy = g.forwardRef((t, r) => {
    const o = or(Sr, t.__scopeSelect),
      [i, l] = g.useState();
    if (
      (ft(() => {
        l(new DocumentFragment());
      }, []),
      !o.open)
    ) {
      const c = i;
      return c
        ? po.createPortal(
            v.jsx(xy, {
              scope: t.__scopeSelect,
              children: v.jsx(Dl.Slot, {
                scope: t.__scopeSelect,
                children: v.jsx("div", { children: t.children }),
              }),
            }),
            c
          )
        : null;
    }
    return v.jsx(Sy, { ...t, ref: r });
  });
wy.displayName = Sr;
var Gt = 10,
  [xy, ir] = vo(Sr),
  bk = "SelectContentImpl",
  Sy = g.forwardRef((t, r) => {
    const {
        __scopeSelect: o,
        position: i = "item-aligned",
        onCloseAutoFocus: l,
        onEscapeKeyDown: c,
        onPointerDownOutside: u,
        side: f,
        sideOffset: m,
        align: h,
        alignOffset: y,
        arrowPadding: x,
        collisionBoundary: E,
        collisionPadding: b,
        sticky: C,
        hideWhenDetached: w,
        avoidCollisions: S,
        ...R
      } = t,
      k = or(Sr, o),
      [P, D] = g.useState(null),
      [B, W] = g.useState(null),
      z = Me(r, (K) => D(K)),
      [Y, Q] = g.useState(null),
      [se, ge] = g.useState(null),
      X = Bl(o),
      [q, ae] = g.useState(!1),
      ye = g.useRef(!1);
    g.useEffect(() => {
      if (P) return ty(P);
    }, [P]),
      Og();
    const oe = g.useCallback(
        (K) => {
          const [ce, ...we] = X().map((Pe) => Pe.ref.current),
            [Ee] = we.slice(-1),
            Re = document.activeElement;
          for (const Pe of K)
            if (
              Pe === Re ||
              (Pe == null || Pe.scrollIntoView({ block: "nearest" }),
              Pe === ce && B && (B.scrollTop = 0),
              Pe === Ee && B && (B.scrollTop = B.scrollHeight),
              Pe == null || Pe.focus(),
              document.activeElement !== Re)
            )
              return;
        },
        [X, B]
      ),
      ne = g.useCallback(() => oe([Y, P]), [oe, Y, P]);
    g.useEffect(() => {
      q && ne();
    }, [q, ne]);
    const { onOpenChange: _, triggerPointerDownPosRef: J } = k;
    g.useEffect(() => {
      if (P) {
        let K = { x: 0, y: 0 };
        const ce = (Ee) => {
            var Re, Pe;
            K = {
              x: Math.abs(
                Math.round(Ee.pageX) -
                  (((Re = J.current) == null ? void 0 : Re.x) ?? 0)
              ),
              y: Math.abs(
                Math.round(Ee.pageY) -
                  (((Pe = J.current) == null ? void 0 : Pe.y) ?? 0)
              ),
            };
          },
          we = (Ee) => {
            K.x <= 10 && K.y <= 10
              ? Ee.preventDefault()
              : P.contains(Ee.target) || _(!1),
              document.removeEventListener("pointermove", ce),
              (J.current = null);
          };
        return (
          J.current !== null &&
            (document.addEventListener("pointermove", ce),
            document.addEventListener("pointerup", we, {
              capture: !0,
              once: !0,
            })),
          () => {
            document.removeEventListener("pointermove", ce),
              document.removeEventListener("pointerup", we, { capture: !0 });
          }
        );
      }
    }, [P, _, J]),
      g.useEffect(() => {
        const K = () => _(!1);
        return (
          window.addEventListener("blur", K),
          window.addEventListener("resize", K),
          () => {
            window.removeEventListener("blur", K),
              window.removeEventListener("resize", K);
          }
        );
      }, [_]);
    const [Z, T] = Fy((K) => {
        const ce = X().filter((Re) => !Re.disabled),
          we = ce.find((Re) => Re.ref.current === document.activeElement),
          Ee = zy(ce, K, we);
        Ee && setTimeout(() => Ee.ref.current.focus());
      }),
      U = g.useCallback(
        (K, ce, we) => {
          const Ee = !ye.current && !we;
          ((k.value !== void 0 && k.value === ce) || Ee) &&
            (Q(K), Ee && (ye.current = !0));
        },
        [k.value]
      ),
      he = g.useCallback(() => (P == null ? void 0 : P.focus()), [P]),
      pe = g.useCallback(
        (K, ce, we) => {
          const Ee = !ye.current && !we;
          ((k.value !== void 0 && k.value === ce) || Ee) && ge(K);
        },
        [k.value]
      ),
      Ae = i === "popper" ? Ru : Ey,
      Se =
        Ae === Ru
          ? {
              side: f,
              sideOffset: m,
              align: h,
              alignOffset: y,
              arrowPadding: x,
              collisionBoundary: E,
              collisionPadding: b,
              sticky: C,
              hideWhenDetached: w,
              avoidCollisions: S,
            }
          : {};
    return v.jsx(xy, {
      scope: o,
      content: P,
      viewport: B,
      onViewportChange: W,
      itemRefCallback: U,
      selectedItem: Y,
      onItemLeave: he,
      itemTextRefCallback: pe,
      focusSelectedItem: ne,
      selectedItemText: se,
      position: i,
      isPositioned: q,
      searchRef: Z,
      children: v.jsx(fy, {
        as: xt,
        allowPinchZoom: !0,
        children: v.jsx(Ku, {
          asChild: !0,
          trapped: k.open,
          onMountAutoFocus: (K) => {
            K.preventDefault();
          },
          onUnmountAutoFocus: Ie(l, (K) => {
            var ce;
            (ce = k.trigger) == null || ce.focus({ preventScroll: !0 }),
              K.preventDefault();
          }),
          children: v.jsx(Ng, {
            asChild: !0,
            disableOutsidePointerEvents: !0,
            onEscapeKeyDown: c,
            onPointerDownOutside: u,
            onFocusOutside: (K) => K.preventDefault(),
            onDismiss: () => k.onOpenChange(!1),
            children: v.jsx(Ae, {
              role: "listbox",
              id: k.contentId,
              "data-state": k.open ? "open" : "closed",
              dir: k.dir,
              onContextMenu: (K) => K.preventDefault(),
              ...R,
              ...Se,
              onPlaced: () => ae(!0),
              ref: z,
              style: {
                display: "flex",
                flexDirection: "column",
                outline: "none",
                ...R.style,
              },
              onKeyDown: Ie(R.onKeyDown, (K) => {
                const ce = K.ctrlKey || K.altKey || K.metaKey;
                if (
                  (K.key === "Tab" && K.preventDefault(),
                  !ce && K.key.length === 1 && T(K.key),
                  ["ArrowUp", "ArrowDown", "Home", "End"].includes(K.key))
                ) {
                  let Ee = X()
                    .filter((Re) => !Re.disabled)
                    .map((Re) => Re.ref.current);
                  if (
                    (["ArrowUp", "End"].includes(K.key) &&
                      (Ee = Ee.slice().reverse()),
                    ["ArrowUp", "ArrowDown"].includes(K.key))
                  ) {
                    const Re = K.target,
                      Pe = Ee.indexOf(Re);
                    Ee = Ee.slice(Pe + 1);
                  }
                  setTimeout(() => oe(Ee)), K.preventDefault();
                }
              }),
            }),
          }),
        }),
      }),
    });
  });
Sy.displayName = bk;
var Nk = "SelectItemAlignedPosition",
  Ey = g.forwardRef((t, r) => {
    const { __scopeSelect: o, onPlaced: i, ...l } = t,
      c = or(Sr, o),
      u = ir(Sr, o),
      [f, m] = g.useState(null),
      [h, y] = g.useState(null),
      x = Me(r, (z) => y(z)),
      E = Bl(o),
      b = g.useRef(!1),
      C = g.useRef(!0),
      {
        viewport: w,
        selectedItem: S,
        selectedItemText: R,
        focusSelectedItem: k,
      } = u,
      P = g.useCallback(() => {
        if (c.trigger && c.valueNode && f && h && w && S && R) {
          const z = c.trigger.getBoundingClientRect(),
            Y = h.getBoundingClientRect(),
            Q = c.valueNode.getBoundingClientRect(),
            se = R.getBoundingClientRect();
          if (c.dir !== "rtl") {
            const Re = se.left - Y.left,
              Pe = Q.left - Re,
              Je = z.left - Pe,
              pt = z.width + Je,
              bn = Math.max(pt, Y.width),
              Nn = window.innerWidth - Gt,
              pn = zh(Pe, [Gt, Math.max(Gt, Nn - bn)]);
            (f.style.minWidth = pt + "px"), (f.style.left = pn + "px");
          } else {
            const Re = Y.right - se.right,
              Pe = window.innerWidth - Q.right - Re,
              Je = window.innerWidth - z.right - Pe,
              pt = z.width + Je,
              bn = Math.max(pt, Y.width),
              Nn = window.innerWidth - Gt,
              pn = zh(Pe, [Gt, Math.max(Gt, Nn - bn)]);
            (f.style.minWidth = pt + "px"), (f.style.right = pn + "px");
          }
          const ge = E(),
            X = window.innerHeight - Gt * 2,
            q = w.scrollHeight,
            ae = window.getComputedStyle(h),
            ye = parseInt(ae.borderTopWidth, 10),
            oe = parseInt(ae.paddingTop, 10),
            ne = parseInt(ae.borderBottomWidth, 10),
            _ = parseInt(ae.paddingBottom, 10),
            J = ye + oe + q + _ + ne,
            Z = Math.min(S.offsetHeight * 5, J),
            T = window.getComputedStyle(w),
            U = parseInt(T.paddingTop, 10),
            he = parseInt(T.paddingBottom, 10),
            pe = z.top + z.height / 2 - Gt,
            Ae = X - pe,
            Se = S.offsetHeight / 2,
            K = S.offsetTop + Se,
            ce = ye + oe + K,
            we = J - ce;
          if (ce <= pe) {
            const Re = ge.length > 0 && S === ge[ge.length - 1].ref.current;
            f.style.bottom = "0px";
            const Pe = h.clientHeight - w.offsetTop - w.offsetHeight,
              Je = Math.max(Ae, Se + (Re ? he : 0) + Pe + ne),
              pt = ce + Je;
            f.style.height = pt + "px";
          } else {
            const Re = ge.length > 0 && S === ge[0].ref.current;
            f.style.top = "0px";
            const Je = Math.max(pe, ye + w.offsetTop + (Re ? U : 0) + Se) + we;
            (f.style.height = Je + "px"), (w.scrollTop = ce - pe + w.offsetTop);
          }
          (f.style.margin = `${Gt}px 0`),
            (f.style.minHeight = Z + "px"),
            (f.style.maxHeight = X + "px"),
            i == null || i(),
            requestAnimationFrame(() => (b.current = !0));
        }
      }, [E, c.trigger, c.valueNode, f, h, w, S, R, c.dir, i]);
    ft(() => P(), [P]);
    const [D, B] = g.useState();
    ft(() => {
      h && B(window.getComputedStyle(h).zIndex);
    }, [h]);
    const W = g.useCallback(
      (z) => {
        z && C.current === !0 && (P(), k == null || k(), (C.current = !1));
      },
      [P, k]
    );
    return v.jsx(Ok, {
      scope: o,
      contentWrapper: f,
      shouldExpandOnScrollRef: b,
      onScrollButtonChange: W,
      children: v.jsx("div", {
        ref: m,
        style: {
          display: "flex",
          flexDirection: "column",
          position: "fixed",
          zIndex: D,
        },
        children: v.jsx(Lt.div, {
          ...l,
          ref: x,
          style: { boxSizing: "border-box", maxHeight: "100%", ...l.style },
        }),
      }),
    });
  });
Ey.displayName = Nk;
var Pk = "SelectPopperPosition",
  Ru = g.forwardRef((t, r) => {
    const {
        __scopeSelect: o,
        align: i = "start",
        collisionPadding: l = Gt,
        ...c
      } = t,
      u = jl(o);
    return v.jsx(NC, {
      ...u,
      ...c,
      ref: r,
      align: i,
      collisionPadding: l,
      style: {
        boxSizing: "border-box",
        ...c.style,
        "--radix-select-content-transform-origin":
          "var(--radix-popper-transform-origin)",
        "--radix-select-content-available-width":
          "var(--radix-popper-available-width)",
        "--radix-select-content-available-height":
          "var(--radix-popper-available-height)",
        "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-select-trigger-height": "var(--radix-popper-anchor-height)",
      },
    });
  });
Ru.displayName = Pk;
var [Ok, fd] = vo(Sr, {}),
  bu = "SelectViewport",
  Cy = g.forwardRef((t, r) => {
    const { __scopeSelect: o, nonce: i, ...l } = t,
      c = ir(bu, o),
      u = fd(bu, o),
      f = Me(r, c.onViewportChange),
      m = g.useRef(0);
    return v.jsxs(v.Fragment, {
      children: [
        v.jsx("style", {
          dangerouslySetInnerHTML: {
            __html:
              "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}",
          },
          nonce: i,
        }),
        v.jsx(Dl.Slot, {
          scope: o,
          children: v.jsx(Lt.div, {
            "data-radix-select-viewport": "",
            role: "presentation",
            ...l,
            ref: f,
            style: {
              position: "relative",
              flex: 1,
              overflow: "hidden auto",
              ...l.style,
            },
            onScroll: Ie(l.onScroll, (h) => {
              const y = h.currentTarget,
                { contentWrapper: x, shouldExpandOnScrollRef: E } = u;
              if (E != null && E.current && x) {
                const b = Math.abs(m.current - y.scrollTop);
                if (b > 0) {
                  const C = window.innerHeight - Gt * 2,
                    w = parseFloat(x.style.minHeight),
                    S = parseFloat(x.style.height),
                    R = Math.max(w, S);
                  if (R < C) {
                    const k = R + b,
                      P = Math.min(C, k),
                      D = k - P;
                    (x.style.height = P + "px"),
                      x.style.bottom === "0px" &&
                        ((y.scrollTop = D > 0 ? D : 0),
                        (x.style.justifyContent = "flex-end"));
                  }
                }
              }
              m.current = y.scrollTop;
            }),
          }),
        }),
      ],
    });
  });
Cy.displayName = bu;
var ky = "SelectGroup",
  [Ik, Tk] = vo(ky),
  Dk = g.forwardRef((t, r) => {
    const { __scopeSelect: o, ...i } = t,
      l = io();
    return v.jsx(Ik, {
      scope: o,
      id: l,
      children: v.jsx(Lt.div, {
        role: "group",
        "aria-labelledby": l,
        ...i,
        ref: r,
      }),
    });
  });
Dk.displayName = ky;
var Ry = "SelectLabel",
  by = g.forwardRef((t, r) => {
    const { __scopeSelect: o, ...i } = t,
      l = Tk(Ry, o);
    return v.jsx(Lt.div, { id: l.id, ...i, ref: r });
  });
by.displayName = Ry;
var vl = "SelectItem",
  [Bk, Ny] = vo(vl),
  Py = g.forwardRef((t, r) => {
    const {
        __scopeSelect: o,
        value: i,
        disabled: l = !1,
        textValue: c,
        ...u
      } = t,
      f = or(vl, o),
      m = ir(vl, o),
      h = f.value === i,
      [y, x] = g.useState(c ?? ""),
      [E, b] = g.useState(!1),
      C = Me(r, (k) => {
        var P;
        return (P = m.itemRefCallback) == null ? void 0 : P.call(m, k, i, l);
      }),
      w = io(),
      S = g.useRef("touch"),
      R = () => {
        l || (f.onValueChange(i), f.onOpenChange(!1));
      };
    if (i === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return v.jsx(Bk, {
      scope: o,
      value: i,
      disabled: l,
      textId: w,
      isSelected: h,
      onItemTextChange: g.useCallback((k) => {
        x((P) => P || ((k == null ? void 0 : k.textContent) ?? "").trim());
      }, []),
      children: v.jsx(Dl.ItemSlot, {
        scope: o,
        value: i,
        disabled: l,
        textValue: y,
        children: v.jsx(Lt.div, {
          role: "option",
          "aria-labelledby": w,
          "data-highlighted": E ? "" : void 0,
          "aria-selected": h && E,
          "data-state": h ? "checked" : "unchecked",
          "aria-disabled": l || void 0,
          "data-disabled": l ? "" : void 0,
          tabIndex: l ? void 0 : -1,
          ...u,
          ref: C,
          onFocus: Ie(u.onFocus, () => b(!0)),
          onBlur: Ie(u.onBlur, () => b(!1)),
          onClick: Ie(u.onClick, () => {
            S.current !== "mouse" && R();
          }),
          onPointerUp: Ie(u.onPointerUp, () => {
            S.current === "mouse" && R();
          }),
          onPointerDown: Ie(u.onPointerDown, (k) => {
            S.current = k.pointerType;
          }),
          onPointerMove: Ie(u.onPointerMove, (k) => {
            var P;
            (S.current = k.pointerType),
              l
                ? (P = m.onItemLeave) == null || P.call(m)
                : S.current === "mouse" &&
                  k.currentTarget.focus({ preventScroll: !0 });
          }),
          onPointerLeave: Ie(u.onPointerLeave, (k) => {
            var P;
            k.currentTarget === document.activeElement &&
              ((P = m.onItemLeave) == null || P.call(m));
          }),
          onKeyDown: Ie(u.onKeyDown, (k) => {
            var D;
            (((D = m.searchRef) == null ? void 0 : D.current) !== "" &&
              k.key === " ") ||
              (wk.includes(k.key) && R(), k.key === " " && k.preventDefault());
          }),
        }),
      }),
    });
  });
Py.displayName = vl;
var hi = "SelectItemText",
  Oy = g.forwardRef((t, r) => {
    const { __scopeSelect: o, className: i, style: l, ...c } = t,
      u = or(hi, o),
      f = ir(hi, o),
      m = Ny(hi, o),
      h = Ck(hi, o),
      [y, x] = g.useState(null),
      E = Me(
        r,
        (R) => x(R),
        m.onItemTextChange,
        (R) => {
          var k;
          return (k = f.itemTextRefCallback) == null
            ? void 0
            : k.call(f, R, m.value, m.disabled);
        }
      ),
      b = y == null ? void 0 : y.textContent,
      C = g.useMemo(
        () =>
          v.jsx(
            "option",
            { value: m.value, disabled: m.disabled, children: b },
            m.value
          ),
        [m.disabled, m.value, b]
      ),
      { onNativeOptionAdd: w, onNativeOptionRemove: S } = h;
    return (
      ft(() => (w(C), () => S(C)), [w, S, C]),
      v.jsxs(v.Fragment, {
        children: [
          v.jsx(Lt.span, { id: m.textId, ...c, ref: E }),
          m.isSelected && u.valueNode && !u.valueNodeHasChildren
            ? po.createPortal(c.children, u.valueNode)
            : null,
        ],
      })
    );
  });
Oy.displayName = hi;
var Iy = "SelectItemIndicator",
  Ty = g.forwardRef((t, r) => {
    const { __scopeSelect: o, ...i } = t;
    return Ny(Iy, o).isSelected
      ? v.jsx(Lt.span, { "aria-hidden": !0, ...i, ref: r })
      : null;
  });
Ty.displayName = Iy;
var Nu = "SelectScrollUpButton",
  Dy = g.forwardRef((t, r) => {
    const o = ir(Nu, t.__scopeSelect),
      i = fd(Nu, t.__scopeSelect),
      [l, c] = g.useState(!1),
      u = Me(r, i.onScrollButtonChange);
    return (
      ft(() => {
        if (o.viewport && o.isPositioned) {
          let f = function () {
            const h = m.scrollTop > 0;
            c(h);
          };
          const m = o.viewport;
          return (
            f(),
            m.addEventListener("scroll", f),
            () => m.removeEventListener("scroll", f)
          );
        }
      }, [o.viewport, o.isPositioned]),
      l
        ? v.jsx(jy, {
            ...t,
            ref: u,
            onAutoScroll: () => {
              const { viewport: f, selectedItem: m } = o;
              f && m && (f.scrollTop = f.scrollTop - m.offsetHeight);
            },
          })
        : null
    );
  });
Dy.displayName = Nu;
var Pu = "SelectScrollDownButton",
  By = g.forwardRef((t, r) => {
    const o = ir(Pu, t.__scopeSelect),
      i = fd(Pu, t.__scopeSelect),
      [l, c] = g.useState(!1),
      u = Me(r, i.onScrollButtonChange);
    return (
      ft(() => {
        if (o.viewport && o.isPositioned) {
          let f = function () {
            const h = m.scrollHeight - m.clientHeight,
              y = Math.ceil(m.scrollTop) < h;
            c(y);
          };
          const m = o.viewport;
          return (
            f(),
            m.addEventListener("scroll", f),
            () => m.removeEventListener("scroll", f)
          );
        }
      }, [o.viewport, o.isPositioned]),
      l
        ? v.jsx(jy, {
            ...t,
            ref: u,
            onAutoScroll: () => {
              const { viewport: f, selectedItem: m } = o;
              f && m && (f.scrollTop = f.scrollTop + m.offsetHeight);
            },
          })
        : null
    );
  });
By.displayName = Pu;
var jy = g.forwardRef((t, r) => {
    const { __scopeSelect: o, onAutoScroll: i, ...l } = t,
      c = ir("SelectScrollButton", o),
      u = g.useRef(null),
      f = Bl(o),
      m = g.useCallback(() => {
        u.current !== null &&
          (window.clearInterval(u.current), (u.current = null));
      }, []);
    return (
      g.useEffect(() => () => m(), [m]),
      ft(() => {
        var y;
        const h = f().find((x) => x.ref.current === document.activeElement);
        (y = h == null ? void 0 : h.ref.current) == null ||
          y.scrollIntoView({ block: "nearest" });
      }, [f]),
      v.jsx(Lt.div, {
        "aria-hidden": !0,
        ...l,
        ref: r,
        style: { flexShrink: 0, ...l.style },
        onPointerDown: Ie(l.onPointerDown, () => {
          u.current === null && (u.current = window.setInterval(i, 50));
        }),
        onPointerMove: Ie(l.onPointerMove, () => {
          var h;
          (h = c.onItemLeave) == null || h.call(c),
            u.current === null && (u.current = window.setInterval(i, 50));
        }),
        onPointerLeave: Ie(l.onPointerLeave, () => {
          m();
        }),
      })
    );
  }),
  jk = "SelectSeparator",
  My = g.forwardRef((t, r) => {
    const { __scopeSelect: o, ...i } = t;
    return v.jsx(Lt.div, { "aria-hidden": !0, ...i, ref: r });
  });
My.displayName = jk;
var Ou = "SelectArrow",
  Mk = g.forwardRef((t, r) => {
    const { __scopeSelect: o, ...i } = t,
      l = jl(o),
      c = or(Ou, o),
      u = ir(Ou, o);
    return c.open && u.position === "popper"
      ? v.jsx(PC, { ...l, ...i, ref: r })
      : null;
  });
Mk.displayName = Ou;
function Ly(t) {
  return t === "" || t === void 0;
}
var _y = g.forwardRef((t, r) => {
  const { value: o, ...i } = t,
    l = g.useRef(null),
    c = Me(r, l),
    u = jC(o);
  return (
    g.useEffect(() => {
      const f = l.current,
        m = window.HTMLSelectElement.prototype,
        y = Object.getOwnPropertyDescriptor(m, "value").set;
      if (u !== o && y) {
        const x = new Event("change", { bubbles: !0 });
        y.call(f, o), f.dispatchEvent(x);
      }
    }, [u, o]),
    v.jsx(Kg, {
      asChild: !0,
      children: v.jsx("select", { ...i, ref: c, defaultValue: o }),
    })
  );
});
_y.displayName = "BubbleSelect";
function Fy(t) {
  const r = $t(t),
    o = g.useRef(""),
    i = g.useRef(0),
    l = g.useCallback(
      (u) => {
        const f = o.current + u;
        r(f),
          (function m(h) {
            (o.current = h),
              window.clearTimeout(i.current),
              h !== "" && (i.current = window.setTimeout(() => m(""), 1e3));
          })(f);
      },
      [r]
    ),
    c = g.useCallback(() => {
      (o.current = ""), window.clearTimeout(i.current);
    }, []);
  return g.useEffect(() => () => window.clearTimeout(i.current), []), [o, l, c];
}
function zy(t, r, o) {
  const l = r.length > 1 && Array.from(r).every((h) => h === r[0]) ? r[0] : r,
    c = o ? t.indexOf(o) : -1;
  let u = Lk(t, Math.max(c, 0));
  l.length === 1 && (u = u.filter((h) => h !== o));
  const m = u.find((h) =>
    h.textValue.toLowerCase().startsWith(l.toLowerCase())
  );
  return m !== o ? m : void 0;
}
function Lk(t, r) {
  return t.map((o, i) => t[(r + i) % t.length]);
}
var _k = py,
  Uy = my,
  Fk = yy,
  zk = vy,
  Uk = Ay,
  Wy = wy,
  Wk = Cy,
  Qy = by,
  Hy = Py,
  Qk = Oy,
  Hk = Ty,
  Gy = Dy,
  Vy = By,
  Yy = My;
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Gk = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  $y = (...t) =>
    t
      .filter((r, o, i) => !!r && r.trim() !== "" && i.indexOf(r) === o)
      .join(" ")
      .trim();
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var Vk = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Yk = g.forwardRef(
  (
    {
      color: t = "currentColor",
      size: r = 24,
      strokeWidth: o = 2,
      absoluteStrokeWidth: i,
      className: l = "",
      children: c,
      iconNode: u,
      ...f
    },
    m
  ) =>
    g.createElement(
      "svg",
      {
        ref: m,
        ...Vk,
        width: r,
        height: r,
        stroke: t,
        strokeWidth: i ? (Number(o) * 24) / Number(r) : o,
        className: $y("lucide", l),
        ...f,
      },
      [
        ...u.map(([h, y]) => g.createElement(h, y)),
        ...(Array.isArray(c) ? c : [c]),
      ]
    )
);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ii = (t, r) => {
  const o = g.forwardRef(({ className: i, ...l }, c) =>
    g.createElement(Yk, {
      ref: c,
      iconNode: r,
      className: $y(`lucide-${Gk(t)}`, i),
      ...l,
    })
  );
  return (o.displayName = `${t}`), o;
};
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const $k = Ii("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Zy = Ii("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Zk = Ii("ChevronUp", [
  ["path", { d: "m18 15-6-6-6 6", key: "153udz" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Jk = Ii("CircleHelp", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", key: "1u773s" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Xk = Ii("X", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]),
  qk = _k,
  Kk = Fk,
  Jy = g.forwardRef(({ className: t, children: r, ...o }, i) =>
    v.jsxs(Uy, {
      ref: i,
      className: Le(
        "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
        t
      ),
      ...o,
      children: [
        r,
        v.jsx(zk, {
          asChild: !0,
          children: v.jsx(Zy, { className: "h-4 w-4 opacity-50" }),
        }),
      ],
    })
  );
Jy.displayName = Uy.displayName;
const Xy = g.forwardRef(({ className: t, ...r }, o) =>
  v.jsx(Gy, {
    ref: o,
    className: Le("flex cursor-default items-center justify-center py-1", t),
    ...r,
    children: v.jsx(Zk, { className: "h-4 w-4" }),
  })
);
Xy.displayName = Gy.displayName;
const qy = g.forwardRef(({ className: t, ...r }, o) =>
  v.jsx(Vy, {
    ref: o,
    className: Le("flex cursor-default items-center justify-center py-1", t),
    ...r,
    children: v.jsx(Zy, { className: "h-4 w-4" }),
  })
);
qy.displayName = Vy.displayName;
const Ky = g.forwardRef(
  ({ className: t, children: r, position: o = "popper", ...i }, l) =>
    v.jsx(Uk, {
      children: v.jsxs(Wy, {
        ref: l,
        className: Le(
          "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          o === "popper" &&
            "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
          t
        ),
        position: o,
        ...i,
        children: [
          v.jsx(Xy, {}),
          v.jsx(Wk, {
            className: Le(
              "p-1",
              o === "popper" &&
                "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
            ),
            children: r,
          }),
          v.jsx(qy, {}),
        ],
      }),
    })
);
Ky.displayName = Wy.displayName;
const eR = g.forwardRef(({ className: t, ...r }, o) =>
  v.jsx(Qy, {
    ref: o,
    className: Le("py-1.5 pl-8 pr-2 text-sm font-semibold", t),
    ...r,
  })
);
eR.displayName = Qy.displayName;
const ev = g.forwardRef(({ className: t, children: r, ...o }, i) =>
  v.jsxs(Hy, {
    ref: i,
    className: Le(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t
    ),
    ...o,
    children: [
      v.jsx("span", {
        className:
          "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
        children: v.jsx(Hk, { children: v.jsx($k, { className: "h-4 w-4" }) }),
      }),
      v.jsx(Qk, { children: r }),
    ],
  })
);
ev.displayName = Hy.displayName;
const tR = g.forwardRef(({ className: t, ...r }, o) =>
  v.jsx(Yy, { ref: o, className: Le("-mx-1 my-1 h-px bg-muted", t), ...r })
);
tR.displayName = Yy.displayName;
function tv(t, r) {
  return function () {
    return t.apply(r, arguments);
  };
}
const { toString: nR } = Object.prototype,
  { getPrototypeOf: pd } = Object,
  Ml = ((t) => (r) => {
    const o = nR.call(r);
    return t[o] || (t[o] = o.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  Xt = (t) => ((t = t.toLowerCase()), (r) => Ml(r) === t),
  Ll = (t) => (r) => typeof r === t,
  { isArray: Ao } = Array,
  wi = Ll("undefined");
function rR(t) {
  return (
    t !== null &&
    !wi(t) &&
    t.constructor !== null &&
    !wi(t.constructor) &&
    Nt(t.constructor.isBuffer) &&
    t.constructor.isBuffer(t)
  );
}
const nv = Xt("ArrayBuffer");
function oR(t) {
  let r;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (r = ArrayBuffer.isView(t))
      : (r = t && t.buffer && nv(t.buffer)),
    r
  );
}
const iR = Ll("string"),
  Nt = Ll("function"),
  rv = Ll("number"),
  _l = (t) => t !== null && typeof t == "object",
  sR = (t) => t === !0 || t === !1,
  cl = (t) => {
    if (Ml(t) !== "object") return !1;
    const r = pd(t);
    return (
      (r === null ||
        r === Object.prototype ||
        Object.getPrototypeOf(r) === null) &&
      !(Symbol.toStringTag in t) &&
      !(Symbol.iterator in t)
    );
  },
  lR = Xt("Date"),
  aR = Xt("File"),
  cR = Xt("Blob"),
  uR = Xt("FileList"),
  dR = (t) => _l(t) && Nt(t.pipe),
  fR = (t) => {
    let r;
    return (
      t &&
      ((typeof FormData == "function" && t instanceof FormData) ||
        (Nt(t.append) &&
          ((r = Ml(t)) === "formdata" ||
            (r === "object" &&
              Nt(t.toString) &&
              t.toString() === "[object FormData]"))))
    );
  },
  pR = Xt("URLSearchParams"),
  [hR, mR, gR, yR] = ["ReadableStream", "Request", "Response", "Headers"].map(
    Xt
  ),
  vR = (t) =>
    t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Ti(t, r, { allOwnKeys: o = !1 } = {}) {
  if (t === null || typeof t > "u") return;
  let i, l;
  if ((typeof t != "object" && (t = [t]), Ao(t)))
    for (i = 0, l = t.length; i < l; i++) r.call(null, t[i], i, t);
  else {
    const c = o ? Object.getOwnPropertyNames(t) : Object.keys(t),
      u = c.length;
    let f;
    for (i = 0; i < u; i++) (f = c[i]), r.call(null, t[f], f, t);
  }
}
function ov(t, r) {
  r = r.toLowerCase();
  const o = Object.keys(t);
  let i = o.length,
    l;
  for (; i-- > 0; ) if (((l = o[i]), r === l.toLowerCase())) return l;
  return null;
}
const Ar =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global,
  iv = (t) => !wi(t) && t !== Ar;
function Iu() {
  const { caseless: t } = (iv(this) && this) || {},
    r = {},
    o = (i, l) => {
      const c = (t && ov(r, l)) || l;
      cl(r[c]) && cl(i)
        ? (r[c] = Iu(r[c], i))
        : cl(i)
        ? (r[c] = Iu({}, i))
        : Ao(i)
        ? (r[c] = i.slice())
        : (r[c] = i);
    };
  for (let i = 0, l = arguments.length; i < l; i++)
    arguments[i] && Ti(arguments[i], o);
  return r;
}
const AR = (t, r, o, { allOwnKeys: i } = {}) => (
    Ti(
      r,
      (l, c) => {
        o && Nt(l) ? (t[c] = tv(l, o)) : (t[c] = l);
      },
      { allOwnKeys: i }
    ),
    t
  ),
  wR = (t) => (t.charCodeAt(0) === 65279 && (t = t.slice(1)), t),
  xR = (t, r, o, i) => {
    (t.prototype = Object.create(r.prototype, i)),
      (t.prototype.constructor = t),
      Object.defineProperty(t, "super", { value: r.prototype }),
      o && Object.assign(t.prototype, o);
  },
  SR = (t, r, o, i) => {
    let l, c, u;
    const f = {};
    if (((r = r || {}), t == null)) return r;
    do {
      for (l = Object.getOwnPropertyNames(t), c = l.length; c-- > 0; )
        (u = l[c]), (!i || i(u, t, r)) && !f[u] && ((r[u] = t[u]), (f[u] = !0));
      t = o !== !1 && pd(t);
    } while (t && (!o || o(t, r)) && t !== Object.prototype);
    return r;
  },
  ER = (t, r, o) => {
    (t = String(t)),
      (o === void 0 || o > t.length) && (o = t.length),
      (o -= r.length);
    const i = t.indexOf(r, o);
    return i !== -1 && i === o;
  },
  CR = (t) => {
    if (!t) return null;
    if (Ao(t)) return t;
    let r = t.length;
    if (!rv(r)) return null;
    const o = new Array(r);
    for (; r-- > 0; ) o[r] = t[r];
    return o;
  },
  kR = (
    (t) => (r) =>
      t && r instanceof t
  )(typeof Uint8Array < "u" && pd(Uint8Array)),
  RR = (t, r) => {
    const i = (t && t[Symbol.iterator]).call(t);
    let l;
    for (; (l = i.next()) && !l.done; ) {
      const c = l.value;
      r.call(t, c[0], c[1]);
    }
  },
  bR = (t, r) => {
    let o;
    const i = [];
    for (; (o = t.exec(r)) !== null; ) i.push(o);
    return i;
  },
  NR = Xt("HTMLFormElement"),
  PR = (t) =>
    t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (o, i, l) {
      return i.toUpperCase() + l;
    }),
  lm = (
    ({ hasOwnProperty: t }) =>
    (r, o) =>
      t.call(r, o)
  )(Object.prototype),
  OR = Xt("RegExp"),
  sv = (t, r) => {
    const o = Object.getOwnPropertyDescriptors(t),
      i = {};
    Ti(o, (l, c) => {
      let u;
      (u = r(l, c, t)) !== !1 && (i[c] = u || l);
    }),
      Object.defineProperties(t, i);
  },
  IR = (t) => {
    sv(t, (r, o) => {
      if (Nt(t) && ["arguments", "caller", "callee"].indexOf(o) !== -1)
        return !1;
      const i = t[o];
      if (Nt(i)) {
        if (((r.enumerable = !1), "writable" in r)) {
          r.writable = !1;
          return;
        }
        r.set ||
          (r.set = () => {
            throw Error("Can not rewrite read-only method '" + o + "'");
          });
      }
    });
  },
  TR = (t, r) => {
    const o = {},
      i = (l) => {
        l.forEach((c) => {
          o[c] = !0;
        });
      };
    return Ao(t) ? i(t) : i(String(t).split(r)), o;
  },
  DR = () => {},
  BR = (t, r) => (t != null && Number.isFinite((t = +t)) ? t : r),
  ru = "abcdefghijklmnopqrstuvwxyz",
  am = "0123456789",
  lv = { DIGIT: am, ALPHA: ru, ALPHA_DIGIT: ru + ru.toUpperCase() + am },
  jR = (t = 16, r = lv.ALPHA_DIGIT) => {
    let o = "";
    const { length: i } = r;
    for (; t--; ) o += r[(Math.random() * i) | 0];
    return o;
  };
function MR(t) {
  return !!(
    t &&
    Nt(t.append) &&
    t[Symbol.toStringTag] === "FormData" &&
    t[Symbol.iterator]
  );
}
const LR = (t) => {
    const r = new Array(10),
      o = (i, l) => {
        if (_l(i)) {
          if (r.indexOf(i) >= 0) return;
          if (!("toJSON" in i)) {
            r[l] = i;
            const c = Ao(i) ? [] : {};
            return (
              Ti(i, (u, f) => {
                const m = o(u, l + 1);
                !wi(m) && (c[f] = m);
              }),
              (r[l] = void 0),
              c
            );
          }
        }
        return i;
      };
    return o(t, 0);
  },
  _R = Xt("AsyncFunction"),
  FR = (t) => t && (_l(t) || Nt(t)) && Nt(t.then) && Nt(t.catch),
  av = ((t, r) =>
    t
      ? setImmediate
      : r
      ? ((o, i) => (
          Ar.addEventListener(
            "message",
            ({ source: l, data: c }) => {
              l === Ar && c === o && i.length && i.shift()();
            },
            !1
          ),
          (l) => {
            i.push(l), Ar.postMessage(o, "*");
          }
        ))(`axios@${Math.random()}`, [])
      : (o) => setTimeout(o))(
    typeof setImmediate == "function",
    Nt(Ar.postMessage)
  ),
  zR =
    typeof queueMicrotask < "u"
      ? queueMicrotask.bind(Ar)
      : (typeof process < "u" && process.nextTick) || av,
  F = {
    isArray: Ao,
    isArrayBuffer: nv,
    isBuffer: rR,
    isFormData: fR,
    isArrayBufferView: oR,
    isString: iR,
    isNumber: rv,
    isBoolean: sR,
    isObject: _l,
    isPlainObject: cl,
    isReadableStream: hR,
    isRequest: mR,
    isResponse: gR,
    isHeaders: yR,
    isUndefined: wi,
    isDate: lR,
    isFile: aR,
    isBlob: cR,
    isRegExp: OR,
    isFunction: Nt,
    isStream: dR,
    isURLSearchParams: pR,
    isTypedArray: kR,
    isFileList: uR,
    forEach: Ti,
    merge: Iu,
    extend: AR,
    trim: vR,
    stripBOM: wR,
    inherits: xR,
    toFlatObject: SR,
    kindOf: Ml,
    kindOfTest: Xt,
    endsWith: ER,
    toArray: CR,
    forEachEntry: RR,
    matchAll: bR,
    isHTMLForm: NR,
    hasOwnProperty: lm,
    hasOwnProp: lm,
    reduceDescriptors: sv,
    freezeMethods: IR,
    toObjectSet: TR,
    toCamelCase: PR,
    noop: DR,
    toFiniteNumber: BR,
    findKey: ov,
    global: Ar,
    isContextDefined: iv,
    ALPHABET: lv,
    generateString: jR,
    isSpecCompliantForm: MR,
    toJSONObject: LR,
    isAsyncFn: _R,
    isThenable: FR,
    setImmediate: av,
    asap: zR,
  };
function ve(t, r, o, i, l) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = t),
    (this.name = "AxiosError"),
    r && (this.code = r),
    o && (this.config = o),
    i && (this.request = i),
    l && ((this.response = l), (this.status = l.status ? l.status : null));
}
F.inherits(ve, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: F.toJSONObject(this.config),
      code: this.code,
      status: this.status,
    };
  },
});
const cv = ve.prototype,
  uv = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((t) => {
  uv[t] = { value: t };
});
Object.defineProperties(ve, uv);
Object.defineProperty(cv, "isAxiosError", { value: !0 });
ve.from = (t, r, o, i, l, c) => {
  const u = Object.create(cv);
  return (
    F.toFlatObject(
      t,
      u,
      function (m) {
        return m !== Error.prototype;
      },
      (f) => f !== "isAxiosError"
    ),
    ve.call(u, t.message, r, o, i, l),
    (u.cause = t),
    (u.name = t.name),
    c && Object.assign(u, c),
    u
  );
};
const UR = null;
function Tu(t) {
  return F.isPlainObject(t) || F.isArray(t);
}
function dv(t) {
  return F.endsWith(t, "[]") ? t.slice(0, -2) : t;
}
function cm(t, r, o) {
  return t
    ? t
        .concat(r)
        .map(function (l, c) {
          return (l = dv(l)), !o && c ? "[" + l + "]" : l;
        })
        .join(o ? "." : "")
    : r;
}
function WR(t) {
  return F.isArray(t) && !t.some(Tu);
}
const QR = F.toFlatObject(F, {}, null, function (r) {
  return /^is[A-Z]/.test(r);
});
function Fl(t, r, o) {
  if (!F.isObject(t)) throw new TypeError("target must be an object");
  (r = r || new FormData()),
    (o = F.toFlatObject(
      o,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (w, S) {
        return !F.isUndefined(S[w]);
      }
    ));
  const i = o.metaTokens,
    l = o.visitor || y,
    c = o.dots,
    u = o.indexes,
    m = (o.Blob || (typeof Blob < "u" && Blob)) && F.isSpecCompliantForm(r);
  if (!F.isFunction(l)) throw new TypeError("visitor must be a function");
  function h(C) {
    if (C === null) return "";
    if (F.isDate(C)) return C.toISOString();
    if (!m && F.isBlob(C))
      throw new ve("Blob is not supported. Use a Buffer instead.");
    return F.isArrayBuffer(C) || F.isTypedArray(C)
      ? m && typeof Blob == "function"
        ? new Blob([C])
        : Buffer.from(C)
      : C;
  }
  function y(C, w, S) {
    let R = C;
    if (C && !S && typeof C == "object") {
      if (F.endsWith(w, "{}"))
        (w = i ? w : w.slice(0, -2)), (C = JSON.stringify(C));
      else if (
        (F.isArray(C) && WR(C)) ||
        ((F.isFileList(C) || F.endsWith(w, "[]")) && (R = F.toArray(C)))
      )
        return (
          (w = dv(w)),
          R.forEach(function (P, D) {
            !(F.isUndefined(P) || P === null) &&
              r.append(
                u === !0 ? cm([w], D, c) : u === null ? w : w + "[]",
                h(P)
              );
          }),
          !1
        );
    }
    return Tu(C) ? !0 : (r.append(cm(S, w, c), h(C)), !1);
  }
  const x = [],
    E = Object.assign(QR, {
      defaultVisitor: y,
      convertValue: h,
      isVisitable: Tu,
    });
  function b(C, w) {
    if (!F.isUndefined(C)) {
      if (x.indexOf(C) !== -1)
        throw Error("Circular reference detected in " + w.join("."));
      x.push(C),
        F.forEach(C, function (R, k) {
          (!(F.isUndefined(R) || R === null) &&
            l.call(r, R, F.isString(k) ? k.trim() : k, w, E)) === !0 &&
            b(R, w ? w.concat(k) : [k]);
        }),
        x.pop();
    }
  }
  if (!F.isObject(t)) throw new TypeError("data must be an object");
  return b(t), r;
}
function um(t) {
  const r = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g, function (i) {
    return r[i];
  });
}
function hd(t, r) {
  (this._pairs = []), t && Fl(t, this, r);
}
const fv = hd.prototype;
fv.append = function (r, o) {
  this._pairs.push([r, o]);
};
fv.toString = function (r) {
  const o = r
    ? function (i) {
        return r.call(this, i, um);
      }
    : um;
  return this._pairs
    .map(function (l) {
      return o(l[0]) + "=" + o(l[1]);
    }, "")
    .join("&");
};
function HR(t) {
  return encodeURIComponent(t)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function pv(t, r, o) {
  if (!r) return t;
  const i = (o && o.encode) || HR;
  F.isFunction(o) && (o = { serialize: o });
  const l = o && o.serialize;
  let c;
  if (
    (l
      ? (c = l(r, o))
      : (c = F.isURLSearchParams(r) ? r.toString() : new hd(r, o).toString(i)),
    c)
  ) {
    const u = t.indexOf("#");
    u !== -1 && (t = t.slice(0, u)),
      (t += (t.indexOf("?") === -1 ? "?" : "&") + c);
  }
  return t;
}
class dm {
  constructor() {
    this.handlers = [];
  }
  use(r, o, i) {
    return (
      this.handlers.push({
        fulfilled: r,
        rejected: o,
        synchronous: i ? i.synchronous : !1,
        runWhen: i ? i.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(r) {
    this.handlers[r] && (this.handlers[r] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(r) {
    F.forEach(this.handlers, function (i) {
      i !== null && r(i);
    });
  }
}
const hv = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  GR = typeof URLSearchParams < "u" ? URLSearchParams : hd,
  VR = typeof FormData < "u" ? FormData : null,
  YR = typeof Blob < "u" ? Blob : null,
  $R = {
    isBrowser: !0,
    classes: { URLSearchParams: GR, FormData: VR, Blob: YR },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  md = typeof window < "u" && typeof document < "u",
  Du = (typeof navigator == "object" && navigator) || void 0,
  ZR =
    md &&
    (!Du || ["ReactNative", "NativeScript", "NS"].indexOf(Du.product) < 0),
  JR =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  XR = (md && window.location.href) || "http://localhost",
  qR = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: md,
        hasStandardBrowserEnv: ZR,
        hasStandardBrowserWebWorkerEnv: JR,
        navigator: Du,
        origin: XR,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  at = { ...qR, ...$R };
function KR(t, r) {
  return Fl(
    t,
    new at.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (o, i, l, c) {
          return at.isNode && F.isBuffer(o)
            ? (this.append(i, o.toString("base64")), !1)
            : c.defaultVisitor.apply(this, arguments);
        },
      },
      r
    )
  );
}
function eb(t) {
  return F.matchAll(/\w+|\[(\w*)]/g, t).map((r) =>
    r[0] === "[]" ? "" : r[1] || r[0]
  );
}
function tb(t) {
  const r = {},
    o = Object.keys(t);
  let i;
  const l = o.length;
  let c;
  for (i = 0; i < l; i++) (c = o[i]), (r[c] = t[c]);
  return r;
}
function mv(t) {
  function r(o, i, l, c) {
    let u = o[c++];
    if (u === "__proto__") return !0;
    const f = Number.isFinite(+u),
      m = c >= o.length;
    return (
      (u = !u && F.isArray(l) ? l.length : u),
      m
        ? (F.hasOwnProp(l, u) ? (l[u] = [l[u], i]) : (l[u] = i), !f)
        : ((!l[u] || !F.isObject(l[u])) && (l[u] = []),
          r(o, i, l[u], c) && F.isArray(l[u]) && (l[u] = tb(l[u])),
          !f)
    );
  }
  if (F.isFormData(t) && F.isFunction(t.entries)) {
    const o = {};
    return (
      F.forEachEntry(t, (i, l) => {
        r(eb(i), l, o, 0);
      }),
      o
    );
  }
  return null;
}
function nb(t, r, o) {
  if (F.isString(t))
    try {
      return (r || JSON.parse)(t), F.trim(t);
    } catch (i) {
      if (i.name !== "SyntaxError") throw i;
    }
  return (0, JSON.stringify)(t);
}
const Di = {
  transitional: hv,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function (r, o) {
      const i = o.getContentType() || "",
        l = i.indexOf("application/json") > -1,
        c = F.isObject(r);
      if ((c && F.isHTMLForm(r) && (r = new FormData(r)), F.isFormData(r)))
        return l ? JSON.stringify(mv(r)) : r;
      if (
        F.isArrayBuffer(r) ||
        F.isBuffer(r) ||
        F.isStream(r) ||
        F.isFile(r) ||
        F.isBlob(r) ||
        F.isReadableStream(r)
      )
        return r;
      if (F.isArrayBufferView(r)) return r.buffer;
      if (F.isURLSearchParams(r))
        return (
          o.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          r.toString()
        );
      let f;
      if (c) {
        if (i.indexOf("application/x-www-form-urlencoded") > -1)
          return KR(r, this.formSerializer).toString();
        if ((f = F.isFileList(r)) || i.indexOf("multipart/form-data") > -1) {
          const m = this.env && this.env.FormData;
          return Fl(
            f ? { "files[]": r } : r,
            m && new m(),
            this.formSerializer
          );
        }
      }
      return c || l ? (o.setContentType("application/json", !1), nb(r)) : r;
    },
  ],
  transformResponse: [
    function (r) {
      const o = this.transitional || Di.transitional,
        i = o && o.forcedJSONParsing,
        l = this.responseType === "json";
      if (F.isResponse(r) || F.isReadableStream(r)) return r;
      if (r && F.isString(r) && ((i && !this.responseType) || l)) {
        const u = !(o && o.silentJSONParsing) && l;
        try {
          return JSON.parse(r);
        } catch (f) {
          if (u)
            throw f.name === "SyntaxError"
              ? ve.from(f, ve.ERR_BAD_RESPONSE, this, null, this.response)
              : f;
        }
      }
      return r;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: at.classes.FormData, Blob: at.classes.Blob },
  validateStatus: function (r) {
    return r >= 200 && r < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
F.forEach(["delete", "get", "head", "post", "put", "patch"], (t) => {
  Di.headers[t] = {};
});
const rb = F.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  ob = (t) => {
    const r = {};
    let o, i, l;
    return (
      t &&
        t
          .split(
            `
`
          )
          .forEach(function (u) {
            (l = u.indexOf(":")),
              (o = u.substring(0, l).trim().toLowerCase()),
              (i = u.substring(l + 1).trim()),
              !(!o || (r[o] && rb[o])) &&
                (o === "set-cookie"
                  ? r[o]
                    ? r[o].push(i)
                    : (r[o] = [i])
                  : (r[o] = r[o] ? r[o] + ", " + i : i));
          }),
      r
    );
  },
  fm = Symbol("internals");
function fi(t) {
  return t && String(t).trim().toLowerCase();
}
function ul(t) {
  return t === !1 || t == null ? t : F.isArray(t) ? t.map(ul) : String(t);
}
function ib(t) {
  const r = Object.create(null),
    o = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let i;
  for (; (i = o.exec(t)); ) r[i[1]] = i[2];
  return r;
}
const sb = (t) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());
function ou(t, r, o, i, l) {
  if (F.isFunction(i)) return i.call(this, r, o);
  if ((l && (r = o), !!F.isString(r))) {
    if (F.isString(i)) return r.indexOf(i) !== -1;
    if (F.isRegExp(i)) return i.test(r);
  }
}
function lb(t) {
  return t
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (r, o, i) => o.toUpperCase() + i);
}
function ab(t, r) {
  const o = F.toCamelCase(" " + r);
  ["get", "set", "has"].forEach((i) => {
    Object.defineProperty(t, i + o, {
      value: function (l, c, u) {
        return this[i].call(this, r, l, c, u);
      },
      configurable: !0,
    });
  });
}
class wt {
  constructor(r) {
    r && this.set(r);
  }
  set(r, o, i) {
    const l = this;
    function c(f, m, h) {
      const y = fi(m);
      if (!y) throw new Error("header name must be a non-empty string");
      const x = F.findKey(l, y);
      (!x || l[x] === void 0 || h === !0 || (h === void 0 && l[x] !== !1)) &&
        (l[x || m] = ul(f));
    }
    const u = (f, m) => F.forEach(f, (h, y) => c(h, y, m));
    if (F.isPlainObject(r) || r instanceof this.constructor) u(r, o);
    else if (F.isString(r) && (r = r.trim()) && !sb(r)) u(ob(r), o);
    else if (F.isHeaders(r)) for (const [f, m] of r.entries()) c(m, f, i);
    else r != null && c(o, r, i);
    return this;
  }
  get(r, o) {
    if (((r = fi(r)), r)) {
      const i = F.findKey(this, r);
      if (i) {
        const l = this[i];
        if (!o) return l;
        if (o === !0) return ib(l);
        if (F.isFunction(o)) return o.call(this, l, i);
        if (F.isRegExp(o)) return o.exec(l);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(r, o) {
    if (((r = fi(r)), r)) {
      const i = F.findKey(this, r);
      return !!(i && this[i] !== void 0 && (!o || ou(this, this[i], i, o)));
    }
    return !1;
  }
  delete(r, o) {
    const i = this;
    let l = !1;
    function c(u) {
      if (((u = fi(u)), u)) {
        const f = F.findKey(i, u);
        f && (!o || ou(i, i[f], f, o)) && (delete i[f], (l = !0));
      }
    }
    return F.isArray(r) ? r.forEach(c) : c(r), l;
  }
  clear(r) {
    const o = Object.keys(this);
    let i = o.length,
      l = !1;
    for (; i--; ) {
      const c = o[i];
      (!r || ou(this, this[c], c, r, !0)) && (delete this[c], (l = !0));
    }
    return l;
  }
  normalize(r) {
    const o = this,
      i = {};
    return (
      F.forEach(this, (l, c) => {
        const u = F.findKey(i, c);
        if (u) {
          (o[u] = ul(l)), delete o[c];
          return;
        }
        const f = r ? lb(c) : String(c).trim();
        f !== c && delete o[c], (o[f] = ul(l)), (i[f] = !0);
      }),
      this
    );
  }
  concat(...r) {
    return this.constructor.concat(this, ...r);
  }
  toJSON(r) {
    const o = Object.create(null);
    return (
      F.forEach(this, (i, l) => {
        i != null && i !== !1 && (o[l] = r && F.isArray(i) ? i.join(", ") : i);
      }),
      o
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([r, o]) => r + ": " + o).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(r) {
    return r instanceof this ? r : new this(r);
  }
  static concat(r, ...o) {
    const i = new this(r);
    return o.forEach((l) => i.set(l)), i;
  }
  static accessor(r) {
    const i = (this[fm] = this[fm] = { accessors: {} }).accessors,
      l = this.prototype;
    function c(u) {
      const f = fi(u);
      i[f] || (ab(l, u), (i[f] = !0));
    }
    return F.isArray(r) ? r.forEach(c) : c(r), this;
  }
}
wt.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
F.reduceDescriptors(wt.prototype, ({ value: t }, r) => {
  let o = r[0].toUpperCase() + r.slice(1);
  return {
    get: () => t,
    set(i) {
      this[o] = i;
    },
  };
});
F.freezeMethods(wt);
function iu(t, r) {
  const o = this || Di,
    i = r || o,
    l = wt.from(i.headers);
  let c = i.data;
  return (
    F.forEach(t, function (f) {
      c = f.call(o, c, l.normalize(), r ? r.status : void 0);
    }),
    l.normalize(),
    c
  );
}
function gv(t) {
  return !!(t && t.__CANCEL__);
}
function wo(t, r, o) {
  ve.call(this, t ?? "canceled", ve.ERR_CANCELED, r, o),
    (this.name = "CanceledError");
}
F.inherits(wo, ve, { __CANCEL__: !0 });
function yv(t, r, o) {
  const i = o.config.validateStatus;
  !o.status || !i || i(o.status)
    ? t(o)
    : r(
        new ve(
          "Request failed with status code " + o.status,
          [ve.ERR_BAD_REQUEST, ve.ERR_BAD_RESPONSE][
            Math.floor(o.status / 100) - 4
          ],
          o.config,
          o.request,
          o
        )
      );
}
function cb(t) {
  const r = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
  return (r && r[1]) || "";
}
function ub(t, r) {
  t = t || 10;
  const o = new Array(t),
    i = new Array(t);
  let l = 0,
    c = 0,
    u;
  return (
    (r = r !== void 0 ? r : 1e3),
    function (m) {
      const h = Date.now(),
        y = i[c];
      u || (u = h), (o[l] = m), (i[l] = h);
      let x = c,
        E = 0;
      for (; x !== l; ) (E += o[x++]), (x = x % t);
      if (((l = (l + 1) % t), l === c && (c = (c + 1) % t), h - u < r)) return;
      const b = y && h - y;
      return b ? Math.round((E * 1e3) / b) : void 0;
    }
  );
}
function db(t, r) {
  let o = 0,
    i = 1e3 / r,
    l,
    c;
  const u = (h, y = Date.now()) => {
    (o = y), (l = null), c && (clearTimeout(c), (c = null)), t.apply(null, h);
  };
  return [
    (...h) => {
      const y = Date.now(),
        x = y - o;
      x >= i
        ? u(h, y)
        : ((l = h),
          c ||
            (c = setTimeout(() => {
              (c = null), u(l);
            }, i - x)));
    },
    () => l && u(l),
  ];
}
const Al = (t, r, o = 3) => {
    let i = 0;
    const l = ub(50, 250);
    return db((c) => {
      const u = c.loaded,
        f = c.lengthComputable ? c.total : void 0,
        m = u - i,
        h = l(m),
        y = u <= f;
      i = u;
      const x = {
        loaded: u,
        total: f,
        progress: f ? u / f : void 0,
        bytes: m,
        rate: h || void 0,
        estimated: h && f && y ? (f - u) / h : void 0,
        event: c,
        lengthComputable: f != null,
        [r ? "download" : "upload"]: !0,
      };
      t(x);
    }, o);
  },
  pm = (t, r) => {
    const o = t != null;
    return [(i) => r[0]({ lengthComputable: o, total: t, loaded: i }), r[1]];
  },
  hm =
    (t) =>
    (...r) =>
      F.asap(() => t(...r)),
  fb = at.hasStandardBrowserEnv
    ? ((t, r) => (o) => (
        (o = new URL(o, at.origin)),
        t.protocol === o.protocol &&
          t.host === o.host &&
          (r || t.port === o.port)
      ))(
        new URL(at.origin),
        at.navigator && /(msie|trident)/i.test(at.navigator.userAgent)
      )
    : () => !0,
  pb = at.hasStandardBrowserEnv
    ? {
        write(t, r, o, i, l, c) {
          const u = [t + "=" + encodeURIComponent(r)];
          F.isNumber(o) && u.push("expires=" + new Date(o).toGMTString()),
            F.isString(i) && u.push("path=" + i),
            F.isString(l) && u.push("domain=" + l),
            c === !0 && u.push("secure"),
            (document.cookie = u.join("; "));
        },
        read(t) {
          const r = document.cookie.match(
            new RegExp("(^|;\\s*)(" + t + ")=([^;]*)")
          );
          return r ? decodeURIComponent(r[3]) : null;
        },
        remove(t) {
          this.write(t, "", Date.now() - 864e5);
        },
      }
    : {
        write() {},
        read() {
          return null;
        },
        remove() {},
      };
function hb(t) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
}
function mb(t, r) {
  return r ? t.replace(/\/?\/$/, "") + "/" + r.replace(/^\/+/, "") : t;
}
function vv(t, r) {
  return t && !hb(r) ? mb(t, r) : r;
}
const mm = (t) => (t instanceof wt ? { ...t } : t);
function Er(t, r) {
  r = r || {};
  const o = {};
  function i(h, y, x, E) {
    return F.isPlainObject(h) && F.isPlainObject(y)
      ? F.merge.call({ caseless: E }, h, y)
      : F.isPlainObject(y)
      ? F.merge({}, y)
      : F.isArray(y)
      ? y.slice()
      : y;
  }
  function l(h, y, x, E) {
    if (F.isUndefined(y)) {
      if (!F.isUndefined(h)) return i(void 0, h, x, E);
    } else return i(h, y, x, E);
  }
  function c(h, y) {
    if (!F.isUndefined(y)) return i(void 0, y);
  }
  function u(h, y) {
    if (F.isUndefined(y)) {
      if (!F.isUndefined(h)) return i(void 0, h);
    } else return i(void 0, y);
  }
  function f(h, y, x) {
    if (x in r) return i(h, y);
    if (x in t) return i(void 0, h);
  }
  const m = {
    url: c,
    method: c,
    data: c,
    baseURL: u,
    transformRequest: u,
    transformResponse: u,
    paramsSerializer: u,
    timeout: u,
    timeoutMessage: u,
    withCredentials: u,
    withXSRFToken: u,
    adapter: u,
    responseType: u,
    xsrfCookieName: u,
    xsrfHeaderName: u,
    onUploadProgress: u,
    onDownloadProgress: u,
    decompress: u,
    maxContentLength: u,
    maxBodyLength: u,
    beforeRedirect: u,
    transport: u,
    httpAgent: u,
    httpsAgent: u,
    cancelToken: u,
    socketPath: u,
    responseEncoding: u,
    validateStatus: f,
    headers: (h, y, x) => l(mm(h), mm(y), x, !0),
  };
  return (
    F.forEach(Object.keys(Object.assign({}, t, r)), function (y) {
      const x = m[y] || l,
        E = x(t[y], r[y], y);
      (F.isUndefined(E) && x !== f) || (o[y] = E);
    }),
    o
  );
}
const Av = (t) => {
    const r = Er({}, t);
    let {
      data: o,
      withXSRFToken: i,
      xsrfHeaderName: l,
      xsrfCookieName: c,
      headers: u,
      auth: f,
    } = r;
    (r.headers = u = wt.from(u)),
      (r.url = pv(vv(r.baseURL, r.url), t.params, t.paramsSerializer)),
      f &&
        u.set(
          "Authorization",
          "Basic " +
            btoa(
              (f.username || "") +
                ":" +
                (f.password ? unescape(encodeURIComponent(f.password)) : "")
            )
        );
    let m;
    if (F.isFormData(o)) {
      if (at.hasStandardBrowserEnv || at.hasStandardBrowserWebWorkerEnv)
        u.setContentType(void 0);
      else if ((m = u.getContentType()) !== !1) {
        const [h, ...y] = m
          ? m
              .split(";")
              .map((x) => x.trim())
              .filter(Boolean)
          : [];
        u.setContentType([h || "multipart/form-data", ...y].join("; "));
      }
    }
    if (
      at.hasStandardBrowserEnv &&
      (i && F.isFunction(i) && (i = i(r)), i || (i !== !1 && fb(r.url)))
    ) {
      const h = l && c && pb.read(c);
      h && u.set(l, h);
    }
    return r;
  },
  gb = typeof XMLHttpRequest < "u",
  yb =
    gb &&
    function (t) {
      return new Promise(function (o, i) {
        const l = Av(t);
        let c = l.data;
        const u = wt.from(l.headers).normalize();
        let { responseType: f, onUploadProgress: m, onDownloadProgress: h } = l,
          y,
          x,
          E,
          b,
          C;
        function w() {
          b && b(),
            C && C(),
            l.cancelToken && l.cancelToken.unsubscribe(y),
            l.signal && l.signal.removeEventListener("abort", y);
        }
        let S = new XMLHttpRequest();
        S.open(l.method.toUpperCase(), l.url, !0), (S.timeout = l.timeout);
        function R() {
          if (!S) return;
          const P = wt.from(
              "getAllResponseHeaders" in S && S.getAllResponseHeaders()
            ),
            B = {
              data:
                !f || f === "text" || f === "json"
                  ? S.responseText
                  : S.response,
              status: S.status,
              statusText: S.statusText,
              headers: P,
              config: t,
              request: S,
            };
          yv(
            function (z) {
              o(z), w();
            },
            function (z) {
              i(z), w();
            },
            B
          ),
            (S = null);
        }
        "onloadend" in S
          ? (S.onloadend = R)
          : (S.onreadystatechange = function () {
              !S ||
                S.readyState !== 4 ||
                (S.status === 0 &&
                  !(S.responseURL && S.responseURL.indexOf("file:") === 0)) ||
                setTimeout(R);
            }),
          (S.onabort = function () {
            S &&
              (i(new ve("Request aborted", ve.ECONNABORTED, t, S)), (S = null));
          }),
          (S.onerror = function () {
            i(new ve("Network Error", ve.ERR_NETWORK, t, S)), (S = null);
          }),
          (S.ontimeout = function () {
            let D = l.timeout
              ? "timeout of " + l.timeout + "ms exceeded"
              : "timeout exceeded";
            const B = l.transitional || hv;
            l.timeoutErrorMessage && (D = l.timeoutErrorMessage),
              i(
                new ve(
                  D,
                  B.clarifyTimeoutError ? ve.ETIMEDOUT : ve.ECONNABORTED,
                  t,
                  S
                )
              ),
              (S = null);
          }),
          c === void 0 && u.setContentType(null),
          "setRequestHeader" in S &&
            F.forEach(u.toJSON(), function (D, B) {
              S.setRequestHeader(B, D);
            }),
          F.isUndefined(l.withCredentials) ||
            (S.withCredentials = !!l.withCredentials),
          f && f !== "json" && (S.responseType = l.responseType),
          h && (([E, C] = Al(h, !0)), S.addEventListener("progress", E)),
          m &&
            S.upload &&
            (([x, b] = Al(m)),
            S.upload.addEventListener("progress", x),
            S.upload.addEventListener("loadend", b)),
          (l.cancelToken || l.signal) &&
            ((y = (P) => {
              S &&
                (i(!P || P.type ? new wo(null, t, S) : P),
                S.abort(),
                (S = null));
            }),
            l.cancelToken && l.cancelToken.subscribe(y),
            l.signal &&
              (l.signal.aborted ? y() : l.signal.addEventListener("abort", y)));
        const k = cb(l.url);
        if (k && at.protocols.indexOf(k) === -1) {
          i(new ve("Unsupported protocol " + k + ":", ve.ERR_BAD_REQUEST, t));
          return;
        }
        S.send(c || null);
      });
    },
  vb = (t, r) => {
    const { length: o } = (t = t ? t.filter(Boolean) : []);
    if (r || o) {
      let i = new AbortController(),
        l;
      const c = function (h) {
        if (!l) {
          (l = !0), f();
          const y = h instanceof Error ? h : this.reason;
          i.abort(
            y instanceof ve ? y : new wo(y instanceof Error ? y.message : y)
          );
        }
      };
      let u =
        r &&
        setTimeout(() => {
          (u = null), c(new ve(`timeout ${r} of ms exceeded`, ve.ETIMEDOUT));
        }, r);
      const f = () => {
        t &&
          (u && clearTimeout(u),
          (u = null),
          t.forEach((h) => {
            h.unsubscribe
              ? h.unsubscribe(c)
              : h.removeEventListener("abort", c);
          }),
          (t = null));
      };
      t.forEach((h) => h.addEventListener("abort", c));
      const { signal: m } = i;
      return (m.unsubscribe = () => F.asap(f)), m;
    }
  },
  Ab = function* (t, r) {
    let o = t.byteLength;
    if (o < r) {
      yield t;
      return;
    }
    let i = 0,
      l;
    for (; i < o; ) (l = i + r), yield t.slice(i, l), (i = l);
  },
  wb = async function* (t, r) {
    for await (const o of xb(t)) yield* Ab(o, r);
  },
  xb = async function* (t) {
    if (t[Symbol.asyncIterator]) {
      yield* t;
      return;
    }
    const r = t.getReader();
    try {
      for (;;) {
        const { done: o, value: i } = await r.read();
        if (o) break;
        yield i;
      }
    } finally {
      await r.cancel();
    }
  },
  gm = (t, r, o, i) => {
    const l = wb(t, r);
    let c = 0,
      u,
      f = (m) => {
        u || ((u = !0), i && i(m));
      };
    return new ReadableStream(
      {
        async pull(m) {
          try {
            const { done: h, value: y } = await l.next();
            if (h) {
              f(), m.close();
              return;
            }
            let x = y.byteLength;
            if (o) {
              let E = (c += x);
              o(E);
            }
            m.enqueue(new Uint8Array(y));
          } catch (h) {
            throw (f(h), h);
          }
        },
        cancel(m) {
          return f(m), l.return();
        },
      },
      { highWaterMark: 2 }
    );
  },
  zl =
    typeof fetch == "function" &&
    typeof Request == "function" &&
    typeof Response == "function",
  wv = zl && typeof ReadableStream == "function",
  Sb =
    zl &&
    (typeof TextEncoder == "function"
      ? (
          (t) => (r) =>
            t.encode(r)
        )(new TextEncoder())
      : async (t) => new Uint8Array(await new Response(t).arrayBuffer())),
  xv = (t, ...r) => {
    try {
      return !!t(...r);
    } catch {
      return !1;
    }
  },
  Eb =
    wv &&
    xv(() => {
      let t = !1;
      const r = new Request(at.origin, {
        body: new ReadableStream(),
        method: "POST",
        get duplex() {
          return (t = !0), "half";
        },
      }).headers.has("Content-Type");
      return t && !r;
    }),
  ym = 64 * 1024,
  Bu = wv && xv(() => F.isReadableStream(new Response("").body)),
  wl = { stream: Bu && ((t) => t.body) };
zl &&
  ((t) => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((r) => {
      !wl[r] &&
        (wl[r] = F.isFunction(t[r])
          ? (o) => o[r]()
          : (o, i) => {
              throw new ve(
                `Response type '${r}' is not supported`,
                ve.ERR_NOT_SUPPORT,
                i
              );
            });
    });
  })(new Response());
const Cb = async (t) => {
    if (t == null) return 0;
    if (F.isBlob(t)) return t.size;
    if (F.isSpecCompliantForm(t))
      return (
        await new Request(at.origin, { method: "POST", body: t }).arrayBuffer()
      ).byteLength;
    if (F.isArrayBufferView(t) || F.isArrayBuffer(t)) return t.byteLength;
    if ((F.isURLSearchParams(t) && (t = t + ""), F.isString(t)))
      return (await Sb(t)).byteLength;
  },
  kb = async (t, r) => {
    const o = F.toFiniteNumber(t.getContentLength());
    return o ?? Cb(r);
  },
  Rb =
    zl &&
    (async (t) => {
      let {
        url: r,
        method: o,
        data: i,
        signal: l,
        cancelToken: c,
        timeout: u,
        onDownloadProgress: f,
        onUploadProgress: m,
        responseType: h,
        headers: y,
        withCredentials: x = "same-origin",
        fetchOptions: E,
      } = Av(t);
      h = h ? (h + "").toLowerCase() : "text";
      let b = vb([l, c && c.toAbortSignal()], u),
        C;
      const w =
        b &&
        b.unsubscribe &&
        (() => {
          b.unsubscribe();
        });
      let S;
      try {
        if (
          m &&
          Eb &&
          o !== "get" &&
          o !== "head" &&
          (S = await kb(y, i)) !== 0
        ) {
          let B = new Request(r, { method: "POST", body: i, duplex: "half" }),
            W;
          if (
            (F.isFormData(i) &&
              (W = B.headers.get("content-type")) &&
              y.setContentType(W),
            B.body)
          ) {
            const [z, Y] = pm(S, Al(hm(m)));
            i = gm(B.body, ym, z, Y);
          }
        }
        F.isString(x) || (x = x ? "include" : "omit");
        const R = "credentials" in Request.prototype;
        C = new Request(r, {
          ...E,
          signal: b,
          method: o.toUpperCase(),
          headers: y.normalize().toJSON(),
          body: i,
          duplex: "half",
          credentials: R ? x : void 0,
        });
        let k = await fetch(C);
        const P = Bu && (h === "stream" || h === "response");
        if (Bu && (f || (P && w))) {
          const B = {};
          ["status", "statusText", "headers"].forEach((Q) => {
            B[Q] = k[Q];
          });
          const W = F.toFiniteNumber(k.headers.get("content-length")),
            [z, Y] = (f && pm(W, Al(hm(f), !0))) || [];
          k = new Response(
            gm(k.body, ym, z, () => {
              Y && Y(), w && w();
            }),
            B
          );
        }
        h = h || "text";
        let D = await wl[F.findKey(wl, h) || "text"](k, t);
        return (
          !P && w && w(),
          await new Promise((B, W) => {
            yv(B, W, {
              data: D,
              headers: wt.from(k.headers),
              status: k.status,
              statusText: k.statusText,
              config: t,
              request: C,
            });
          })
        );
      } catch (R) {
        throw (
          (w && w(),
          R && R.name === "TypeError" && /fetch/i.test(R.message)
            ? Object.assign(new ve("Network Error", ve.ERR_NETWORK, t, C), {
                cause: R.cause || R,
              })
            : ve.from(R, R && R.code, t, C))
        );
      }
    }),
  ju = { http: UR, xhr: yb, fetch: Rb };
F.forEach(ju, (t, r) => {
  if (t) {
    try {
      Object.defineProperty(t, "name", { value: r });
    } catch {}
    Object.defineProperty(t, "adapterName", { value: r });
  }
});
const vm = (t) => `- ${t}`,
  bb = (t) => F.isFunction(t) || t === null || t === !1,
  Sv = {
    getAdapter: (t) => {
      t = F.isArray(t) ? t : [t];
      const { length: r } = t;
      let o, i;
      const l = {};
      for (let c = 0; c < r; c++) {
        o = t[c];
        let u;
        if (
          ((i = o),
          !bb(o) && ((i = ju[(u = String(o)).toLowerCase()]), i === void 0))
        )
          throw new ve(`Unknown adapter '${u}'`);
        if (i) break;
        l[u || "#" + c] = i;
      }
      if (!i) {
        const c = Object.entries(l).map(
          ([f, m]) =>
            `adapter ${f} ` +
            (m === !1
              ? "is not supported by the environment"
              : "is not available in the build")
        );
        let u = r
          ? c.length > 1
            ? `since :
` +
              c.map(vm).join(`
`)
            : " " + vm(c[0])
          : "as no adapter specified";
        throw new ve(
          "There is no suitable adapter to dispatch the request " + u,
          "ERR_NOT_SUPPORT"
        );
      }
      return i;
    },
    adapters: ju,
  };
function su(t) {
  if (
    (t.cancelToken && t.cancelToken.throwIfRequested(),
    t.signal && t.signal.aborted)
  )
    throw new wo(null, t);
}
function Am(t) {
  return (
    su(t),
    (t.headers = wt.from(t.headers)),
    (t.data = iu.call(t, t.transformRequest)),
    ["post", "put", "patch"].indexOf(t.method) !== -1 &&
      t.headers.setContentType("application/x-www-form-urlencoded", !1),
    Sv.getAdapter(t.adapter || Di.adapter)(t).then(
      function (i) {
        return (
          su(t),
          (i.data = iu.call(t, t.transformResponse, i)),
          (i.headers = wt.from(i.headers)),
          i
        );
      },
      function (i) {
        return (
          gv(i) ||
            (su(t),
            i &&
              i.response &&
              ((i.response.data = iu.call(t, t.transformResponse, i.response)),
              (i.response.headers = wt.from(i.response.headers)))),
          Promise.reject(i)
        );
      }
    )
  );
}
const Ev = "1.7.9",
  Ul = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (t, r) => {
    Ul[t] = function (i) {
      return typeof i === t || "a" + (r < 1 ? "n " : " ") + t;
    };
  }
);
const wm = {};
Ul.transitional = function (r, o, i) {
  function l(c, u) {
    return (
      "[Axios v" +
      Ev +
      "] Transitional option '" +
      c +
      "'" +
      u +
      (i ? ". " + i : "")
    );
  }
  return (c, u, f) => {
    if (r === !1)
      throw new ve(
        l(u, " has been removed" + (o ? " in " + o : "")),
        ve.ERR_DEPRECATED
      );
    return (
      o &&
        !wm[u] &&
        ((wm[u] = !0),
        console.warn(
          l(
            u,
            " has been deprecated since v" +
              o +
              " and will be removed in the near future"
          )
        )),
      r ? r(c, u, f) : !0
    );
  };
};
Ul.spelling = function (r) {
  return (o, i) => (console.warn(`${i} is likely a misspelling of ${r}`), !0);
};
function Nb(t, r, o) {
  if (typeof t != "object")
    throw new ve("options must be an object", ve.ERR_BAD_OPTION_VALUE);
  const i = Object.keys(t);
  let l = i.length;
  for (; l-- > 0; ) {
    const c = i[l],
      u = r[c];
    if (u) {
      const f = t[c],
        m = f === void 0 || u(f, c, t);
      if (m !== !0)
        throw new ve("option " + c + " must be " + m, ve.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (o !== !0) throw new ve("Unknown option " + c, ve.ERR_BAD_OPTION);
  }
}
const dl = { assertOptions: Nb, validators: Ul },
  on = dl.validators;
class wr {
  constructor(r) {
    (this.defaults = r),
      (this.interceptors = { request: new dm(), response: new dm() });
  }
  async request(r, o) {
    try {
      return await this._request(r, o);
    } catch (i) {
      if (i instanceof Error) {
        let l = {};
        Error.captureStackTrace
          ? Error.captureStackTrace(l)
          : (l = new Error());
        const c = l.stack ? l.stack.replace(/^.+\n/, "") : "";
        try {
          i.stack
            ? c &&
              !String(i.stack).endsWith(c.replace(/^.+\n.+\n/, "")) &&
              (i.stack +=
                `
` + c)
            : (i.stack = c);
        } catch {}
      }
      throw i;
    }
  }
  _request(r, o) {
    typeof r == "string" ? ((o = o || {}), (o.url = r)) : (o = r || {}),
      (o = Er(this.defaults, o));
    const { transitional: i, paramsSerializer: l, headers: c } = o;
    i !== void 0 &&
      dl.assertOptions(
        i,
        {
          silentJSONParsing: on.transitional(on.boolean),
          forcedJSONParsing: on.transitional(on.boolean),
          clarifyTimeoutError: on.transitional(on.boolean),
        },
        !1
      ),
      l != null &&
        (F.isFunction(l)
          ? (o.paramsSerializer = { serialize: l })
          : dl.assertOptions(
              l,
              { encode: on.function, serialize: on.function },
              !0
            )),
      dl.assertOptions(
        o,
        {
          baseUrl: on.spelling("baseURL"),
          withXsrfToken: on.spelling("withXSRFToken"),
        },
        !0
      ),
      (o.method = (o.method || this.defaults.method || "get").toLowerCase());
    let u = c && F.merge(c.common, c[o.method]);
    c &&
      F.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (C) => {
          delete c[C];
        }
      ),
      (o.headers = wt.concat(u, c));
    const f = [];
    let m = !0;
    this.interceptors.request.forEach(function (w) {
      (typeof w.runWhen == "function" && w.runWhen(o) === !1) ||
        ((m = m && w.synchronous), f.unshift(w.fulfilled, w.rejected));
    });
    const h = [];
    this.interceptors.response.forEach(function (w) {
      h.push(w.fulfilled, w.rejected);
    });
    let y,
      x = 0,
      E;
    if (!m) {
      const C = [Am.bind(this), void 0];
      for (
        C.unshift.apply(C, f),
          C.push.apply(C, h),
          E = C.length,
          y = Promise.resolve(o);
        x < E;

      )
        y = y.then(C[x++], C[x++]);
      return y;
    }
    E = f.length;
    let b = o;
    for (x = 0; x < E; ) {
      const C = f[x++],
        w = f[x++];
      try {
        b = C(b);
      } catch (S) {
        w.call(this, S);
        break;
      }
    }
    try {
      y = Am.call(this, b);
    } catch (C) {
      return Promise.reject(C);
    }
    for (x = 0, E = h.length; x < E; ) y = y.then(h[x++], h[x++]);
    return y;
  }
  getUri(r) {
    r = Er(this.defaults, r);
    const o = vv(r.baseURL, r.url);
    return pv(o, r.params, r.paramsSerializer);
  }
}
F.forEach(["delete", "get", "head", "options"], function (r) {
  wr.prototype[r] = function (o, i) {
    return this.request(
      Er(i || {}, { method: r, url: o, data: (i || {}).data })
    );
  };
});
F.forEach(["post", "put", "patch"], function (r) {
  function o(i) {
    return function (c, u, f) {
      return this.request(
        Er(f || {}, {
          method: r,
          headers: i ? { "Content-Type": "multipart/form-data" } : {},
          url: c,
          data: u,
        })
      );
    };
  }
  (wr.prototype[r] = o()), (wr.prototype[r + "Form"] = o(!0));
});
class gd {
  constructor(r) {
    if (typeof r != "function")
      throw new TypeError("executor must be a function.");
    let o;
    this.promise = new Promise(function (c) {
      o = c;
    });
    const i = this;
    this.promise.then((l) => {
      if (!i._listeners) return;
      let c = i._listeners.length;
      for (; c-- > 0; ) i._listeners[c](l);
      i._listeners = null;
    }),
      (this.promise.then = (l) => {
        let c;
        const u = new Promise((f) => {
          i.subscribe(f), (c = f);
        }).then(l);
        return (
          (u.cancel = function () {
            i.unsubscribe(c);
          }),
          u
        );
      }),
      r(function (c, u, f) {
        i.reason || ((i.reason = new wo(c, u, f)), o(i.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(r) {
    if (this.reason) {
      r(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(r) : (this._listeners = [r]);
  }
  unsubscribe(r) {
    if (!this._listeners) return;
    const o = this._listeners.indexOf(r);
    o !== -1 && this._listeners.splice(o, 1);
  }
  toAbortSignal() {
    const r = new AbortController(),
      o = (i) => {
        r.abort(i);
      };
    return (
      this.subscribe(o),
      (r.signal.unsubscribe = () => this.unsubscribe(o)),
      r.signal
    );
  }
  static source() {
    let r;
    return {
      token: new gd(function (l) {
        r = l;
      }),
      cancel: r,
    };
  }
}
function Pb(t) {
  return function (o) {
    return t.apply(null, o);
  };
}
function Ob(t) {
  return F.isObject(t) && t.isAxiosError === !0;
}
const Mu = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(Mu).forEach(([t, r]) => {
  Mu[r] = t;
});
function Cv(t) {
  const r = new wr(t),
    o = tv(wr.prototype.request, r);
  return (
    F.extend(o, wr.prototype, r, { allOwnKeys: !0 }),
    F.extend(o, r, null, { allOwnKeys: !0 }),
    (o.create = function (l) {
      return Cv(Er(t, l));
    }),
    o
  );
}
const Ye = Cv(Di);
Ye.Axios = wr;
Ye.CanceledError = wo;
Ye.CancelToken = gd;
Ye.isCancel = gv;
Ye.VERSION = Ev;
Ye.toFormData = Fl;
Ye.AxiosError = ve;
Ye.Cancel = Ye.CanceledError;
Ye.all = function (r) {
  return Promise.all(r);
};
Ye.spread = Pb;
Ye.isAxiosError = Ob;
Ye.mergeConfig = Er;
Ye.AxiosHeaders = wt;
Ye.formToJSON = (t) => mv(F.isHTMLForm(t) ? new FormData(t) : t);
Ye.getAdapter = Sv.getAdapter;
Ye.HttpStatusCode = Mu;
Ye.default = Ye;
const Ib = Ye.create({
    baseURL: "https://trivial-pursuit-online-backend.onrender.com/api/games",
  }),
  Tb = async (t) => {
    try {
      return (await Ib.get(`/${t}`)).data;
    } catch (r) {
      console.error(`Error fetching in-game players: ${r.message}`);
    }
  },
  nt = {
    blue: { category: "Geography", hex: "#1E90FF" },
    pink: { category: "Entertainment", hex: "#FF1493" },
    yellow: { category: "History", hex: "#e8e800" },
    orange: { category: "Sports & Leisure", hex: "#FFA500" },
    green: { category: "Science & Nature", hex: "#32CD32" },
    purple: { category: "Art & Literature", hex: "#800080" },
  };
function kv({ mode: t, gameId: r, onCancel: o, onSubmit: i }) {
  const [l, c] = g.useState(Object.keys(nt)),
    [u, f] = g.useState(""),
    [m, h] = g.useState([]),
    [y, x] = g.useState("");
  g.useEffect(() => {
    (async () => {
      if (t === "join")
        try {
          const C = await Tb(r),
            w = C.players.map((R) => R.color),
            S = C.players.map((R) => R.name);
          c(Object.keys(nt).filter((R) => !w.includes(R))), h(S);
        } catch (C) {
          console.error(`Error fetching available colors: ${C.message}`);
        }
    })();
  }, [t, r]);
  const E = () => {
    if (!u || !y) {
      alert("Please fill out all fields.");
      return;
    }
    if (m.includes(u)) {
      alert("Player name already exists. Please choose another name.");
      return;
    }
    i({ playerName: u, playerColor: y, gameId: r });
  };
  return v.jsx("div", {
    className:
      "fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50",
    children: v.jsxs(ki, {
      className: "w-full max-w-md mx-auto",
      children: [
        v.jsxs(Rl, {
          children: [
            v.jsx(Ri, { children: "New Player" }),
            v.jsx(bl, { children: "Select a player name and color." }),
          ],
        }),
        v.jsx(bi, {
          children: v.jsxs("form", {
            className: "grid w-full items-center gap-4",
            children: [
              v.jsxs("div", {
                className: "flex flex-col space-y-1",
                children: [
                  v.jsx(pl, { className: "text-md", children: "Player Name" }),
                  v.jsx(Cg, {
                    id: "player-name",
                    placeholder: "Enter your player name",
                    value: u,
                    onChange: (b) => f(b.target.value),
                    required: !0,
                  }),
                ],
              }),
              v.jsxs("div", {
                className: "flex flex-col space-y-1",
                children: [
                  v.jsx(pl, { className: "text-md", children: "Player Color" }),
                  v.jsxs(qk, {
                    onValueChange: x,
                    required: !0,
                    children: [
                      v.jsx(Jy, {
                        children: v.jsx(Kk, {
                          placeholder: "Select an available color",
                        }),
                      }),
                      v.jsx(Ky, {
                        children: l.map((b) =>
                          v.jsx(
                            ev,
                            {
                              value: b,
                              children: b.charAt(0).toUpperCase() + b.slice(1),
                            },
                            b
                          )
                        ),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
        v.jsxs(Nl, {
          className: "flex justify-between mt-4",
          children: [
            v.jsx(ct, { variant: "outline", onClick: o, children: "Cancel" }),
            v.jsx(ct, { onClick: E, children: "Submit" }),
          ],
        }),
      ],
    }),
  });
}
kv.propTypes = {
  mode: Yt.string.isRequired,
  gameId: Yt.string,
  onCancel: Yt.func.isRequired,
  onSubmit: Yt.func.isRequired,
};
function Db() {
  const { games: t, socketCreateGame: r, socketJoinGame: o } = ag(),
    [i, l] = g.useState(""),
    [c, u] = g.useState(null),
    [f, m] = g.useState(!1),
    h = Ei(),
    y = () => {
      if (localStorage.getItem("player-data")) {
        alert(
          "You are already in a game. Please leave the current game to join another one."
        );
        return;
      }
      l("create"), u(null), m(!0);
    },
    x = (w) => {
      if (localStorage.getItem("player-data")) {
        alert(
          "You are already in a game. Please leave the current game to join another one."
        );
        return;
      }
      l("join"), u(w), m(!0);
    },
    E = () => {
      m(!1);
    },
    b = async ({ playerName: w, playerColor: S }) => {
      const R = { name: w, color: S, gameId: c };
      if (i === "create")
        try {
          const k = await r(R);
          localStorage.setItem(
            "player-data",
            JSON.stringify({ ...R, gameId: k.gameId })
          ),
            h(`/${k.gameId}`);
        } catch (k) {
          console.error(`Error creating game (Home.jsx): ${k}`);
        }
      else if (i === "join")
        try {
          localStorage.setItem(
            "player-data",
            JSON.stringify({ ...R, gameId: c })
          ),
            o(c, R),
            h(`/${c}`);
        } catch (k) {
          console.error(`Error joining game: ${k}`);
        }
      m(!1);
    },
    C = (w) => {
      h(`/${w}`);
    };
  return v.jsxs("div", {
    className: "home-container h-[100%] flex flex-col items-center",
    children: [
      v.jsxs("div", {
        className:
          "home-header px-10 my-8 flex justify-between w-full max-w-3xl",
        children: [
          v.jsx("h1", {
            className: "text-2xl font-semibold tracking-tight",
            children: "Available Games",
          }),
          v.jsx(ct, {
            onClick: y,
            className: "create-btn",
            children: "Create Game",
          }),
        ],
      }),
      v.jsx("div", {
        className:
          "p-5 h-[80%] w-[90%] rounded-lg grid grid-cols-1 md:grid-cols-2 gap-4 overflow-auto border border-gray-300",
        children:
          t.length > 0
            ? t.map((w) =>
                v.jsx(
                  Eg,
                  {
                    game: w,
                    onJoin: () => x(w.gameId),
                    onEnter: () => C(w.gameId),
                  },
                  w.gameId
                )
              )
            : v.jsx("p", {
                children:
                  "No Games Available. Create a new game to start playing.",
              }),
      }),
      f && v.jsx(kv, { mode: i, gameId: c, onCancel: E, onSubmit: b }),
    ],
  });
}
const Rv = g.createContext(),
  Bb = () => g.useContext(Rv),
  bv = ({ children: t }) => {
    const { gameState: r, setGameState: o } = rr(),
      { chatLog: i } = r,
      { gameId: l } = _m(),
      c = g.useRef(null);
    g.useEffect(
      () => (
        c.current && (c.current.scrollTop = c.current.scrollHeight),
        fe.emit("join-chat", l),
        fe.on("updated-chat-log", (f) => {
          o((m) => ({ ...m, chatLog: f.chatLog }));
        }),
        () => {
          fe.off("updated-chat-log");
        }
      ),
      [l, o]
    );
    const u = (f, m, h) => {
      fe.emit("send-message", { gameId: f, message: m, sender: h });
    };
    return v.jsx(Rv.Provider, {
      value: { chatLog: i, chatLogRef: c, sendMessage: u },
      children: t,
    });
  };
bv.propTypes = { children: Yt.node.isRequired };
function jb() {
  const t = JSON.parse(localStorage.getItem("player-data")),
    { gameState: r } = rr(),
    { chatLog: o, chatLogRef: i, sendMessage: l } = Bb(),
    [c, u] = g.useState(""),
    f = () => {
      c.trim() !== "" && (l(r.gameId, c, t.name), u(""));
    },
    m = (h) => {
      h.key === "Enter" && f();
    };
  return v.jsxs("div", {
    className: "flex flex-col h-full p-1 bg-gray-700 text-white rounded-lg",
    children: [
      v.jsx("div", {
        className:
          "flex-1 overflow-y-auto mb-1 px-2 py-1 border rounded-md flex flex-col-reverse",
        ref: i,
        children:
          o &&
          o
            .slice()
            .reverse()
            .map((h, y) =>
              v.jsx(
                "div",
                {
                  className: `w-full text-sm border border-slate-500 rounded-sm mb-1 p-1 ${
                    h.sender === t.name ? "text-right" : "text-left"
                  }`,
                  children:
                    h.sender === "server"
                      ? v.jsx("span", {
                          className: "italic font-bold text-gray-400",
                          children: h.message,
                        })
                      : v.jsxs(v.Fragment, {
                          children: [
                            h.sender !== t.name &&
                              v.jsxs("span", {
                                className: "font-bold",
                                children: [h.sender, ":"],
                              }),
                            " ",
                            h.message,
                          ],
                        }),
                },
                y
              )
            ),
      }),
      v.jsxs("div", {
        className: "flex gap-1 mt-auto",
        children: [
          v.jsx("input", {
            type: "text",
            placeholder: "Enter message",
            value: c,
            onChange: (h) => u(h.target.value),
            className:
              "flex-1 p-2 rounded-lg bg-gray-600 text-white border border-white",
            onKeyDown: m,
          }),
          v.jsx(ct, {
            variant: "outline",
            className: "text-black ",
            onClick: f,
            children: "Send",
          }),
        ],
      }),
    ],
  });
}
const Mb =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowMTgwMTE3NDA3MjA2ODExODA4MzlBRDEwQjBCQTIwMyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozRTY3MDlDNzM1NDkxMUU1OEI4NkE0RkIwM0JDODRGNiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozRTY3MDlDNjM1NDkxMUU1OEI4NkE0RkIwM0JDODRGNiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MDE4MDExNzQwNzIwNjgxMTgwODM5QUQxMEIwQkEyMDMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDE4MDExNzQwNzIwNjgxMTgwODM5QUQxMEIwQkEyMDMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5WvsN4AAAGK0lEQVR42uzdTW4TWRSGYWxVzCTM2AUzNoHEJthYGLAJJDbBjF2wgkSikAeRbqxy7Piv6tzveWbdTQe3u897z62kk9U4ju+ATGtvAQgAIACAAAARhu/vP1zy43miCNe3ulgADDuUM14qCoOhh+6isLp0AAw+1IvBwRCsDT9EXRXeFADDDx1HYDD4kHsl8HUAEGzt9Ifc68Da8ENuBNaGH3Ij4BkAeAbg9IfELcAGADYAIDUA1n8IvQbYAMAVABAAQAAAAQAEABAAQAAAAQAEAKhs8BYQfQJu7k7+e/89PgkAVB/6UwZ5+zHaj1M1BgJA5OCfO7Dt39/GoFoIBACDf6bnj1kxBAKAwb9SCCpEwGcB6Hr4t0N460FsQyAAMOPwz2XqWiAAEDD8bQSWvg0IAIb/RtuAAEDY8E+9RgGAsOFf6lVAAOhChU+5LTECAkAXp79QCQBOf+ESAJz+giUARAx/5f8ldwkBEwCs/sGvXQAgeAsQAAjeAgQAp2bye+ktwOmZGzQBgOCQCQC4AgACAO7LAgDuzQIACAC4BggAWP8FABAAQAAAAQBOG0D/OzDUG5xLmvPBpgBgYFwBgMQtRgAwQMHbjABgcILjJQAYpOCICQAGKDhaAoAtIDheAkAXW0CVCPjx4BB6FVjijzMTAFwFQodfAHAVCB5+AUAEgodfABCB4OEXALqPwFwhqDD8AkDXEZhjG2ijU+GzE4P/VOg9BLcYyjYylb5CUQCIvBJcakirDr4AIAQTf+2tQ1918AWA+BBM3dtP/RgCAJ0EIYnPAkAwAQABAAQAEABAAAABAAQAEABAAAABAAQAEABAAAABAAQAEABgeXxHoEBff/2Y/PM/v3zz5oRZPWzuR29D3rB//PzpxR///f1HFASAHgd/d9iP1UZBCASAkMEXAgHA4AuBAFBp+K81+PtCIAICQOenvm1AAHDq2wY65QuBDP9Znl/Dvk83IgB0OvwiIADMOHBeEwIQePp7jQiA1X+xW4AICACha7argABgrbYFCACpJ6stQABwktoCBIDUE9UWIAA4QW0BAkDqSWoLEABAAAABAASAw3p6eOZBoABwgh4eonkQKACAAAACAAgAh+37cV3+GRCAzvX0XXZ9x2ABAAQAEABAADis8kM0DwAFgDP08PDMA0ABIPAkdfoLAOEnqNNfAAg8UZ3+AkD4Ser0FwACT1anvwBwxRN1yQP2/Nqc/gJA6Fpt+AWAwDXb6i8AhF4FrP4CQGgEDH9tq4fN/ehtqKn9bru3/uabbXwMvwCwgBDcKgJOfQEgcBtw6gsAgSEw+AJAYAgMvgDQUQhau1HY9xkFgy8AhETBsAsAEMQXAoEAAAIACAAgAIAAAAIACAAgAIAAAAIACAAgAIAAAAIALNbQfeE2d5N//t/jk3/7CEDisG9/3dSvFQUEoPjQHzPEU79mNwpigAAUGfxLDGv7MdoYCAEC0PHgvxYDIaB364rDvx3GWwxk+/vse74AAnDj4b+1qY0ABCBg+G0DCED48O/bBkAAgoZfBBCA8OHfjQAIQNjwT71WEICw4XcVQADC12tXAQTAOm0LQABST1RXAQQg/AR1FUAADBEIQPQb6hqAAGQOjQ0GATA8IACAAHgOAAKQw1UGAXBaggA4NUEAAAEABAAQgBcvwoNAyAyAB4DgCgAIQAdvqOsMApDNtQYBcHKCACSdmCKGAFj/vQkIgBMUBCDm5BQvBCB8kKz/CEDgADn9EYDQgar0w0xh8QGo+GO2DD8CEBgBqz8CEHqqWv0RgNBT1vAjAKFXAcOPAMwUgblDYPgRgJkiMOc20MbH8CMAQdtAO/iGn94M1V7wVASuMZhtYAw+AhAQgt2twuAjAIWvBYcGeOoaYegRgMIhaIf7mOcEBh4B6JDBhiOuvd4CEABAAAABAAQAEABAAAABAAQAEABAAICqAVh5GyDSygYArgBAcgBcAyBs/bcBgA3gZRGAjNN/agMQAQgZ/n1XABGAgOH3DADCDQdKMXqLoL+T/9gNwHUAOh3+Y68AIgAdDv9rVwBXAuh48N8agKkPLAZQcOjPCcCh31AUYKHDPvmBxtHMQipfBwACAAgAIABAhv8CDACG/7MLQcdi7wAAAABJRU5ErkJggg==",
  Lb =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozRTY3MDlDMjM1NDkxMUU1OEI4NkE0RkIwM0JDODRGNiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozRTY3MDlDMzM1NDkxMUU1OEI4NkE0RkIwM0JDODRGNiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjNFNjcwOUMwMzU0OTExRTU4Qjg2QTRGQjAzQkM4NEY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjNFNjcwOUMxMzU0OTExRTU4Qjg2QTRGQjAzQkM4NEY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+WIg5TAAABRdJREFUeNrs3UFO20AYhuHastJNehNWnIgDIHEBllwAiWUqcSJW3MeIRSRjOY2TJrFnvufZtVJTk/Z/Z8aEpOn7/heQqfUUgAAAAgAIABCh+/v7zyUfzx1FuL7mYgEw7FCc/lJR6Aw9VBeF5tIBMPhQXgyOhqA1/BB1VDgpAIYfKo5AZ/Ah90jgdQAQrLX6Q+5xoDX8kBuB1vBDbgTcAwD3AKz+kLgLsAMAOwAgNQC2/xB6DLADAEcAQAAAAQAEABAAQAAAAQAEABAAoGSdp4Bkd08PZ//Zz9f34r/+ZrfZ+lkAoof+/vnx5Mf4eHmrIgYCQOTgnzP0c2JQWggEAIMfHAIBwOBfKQQlREAAqHr4bzn4JUZAADD8wUcCAcDwB+8GvBAIw39la7seAcDwL3iNAgBhw7+/trVFQACowpqHf80REACqWP2FSgCw+guXAGD1FywBIGL4S1z91xQwAcDWP/jaBQCCdwECAMG7AAHAqhlMALB6BgdNACA4ZAIAjgCAAIDzsgCAc7MAAAIA6zL+VB4EgBA1fB6fAAACAAgAIACQZ+kbmgKAwVnYkjc2BQAD4wgAJO5iBAADFLybEQAMTnC8BACDFBwxAcAABUdLALALCI6XAFDFLqCUCKztOgUAR4EbD/+arlcAcBQIHX4BwFEgePgFABEIHn4BQASCh/9bs9tse/9tqM3w7cOXeBfhEoZfAIgJwa0iMNx5lPDdCQHAbiBw8AUAIQgefAFACAZOCcL4BmPJP5koAAjCGZ83WMu7EgkABPM6ABAAQAAAAQAEABAAQAAAAQAEABAAQAAAAQAEABAAQAAAAQAEABAAQAAAAQAEABAAQAAAAQAEABAAQAAAAQAEABAAQAAAAQAEABAAQAAAAQAEAATAUwACAAgAIACAAAACAAgAIACAAAACAAgAIACAAAACAAgAIACAAAACAAgAIACAAAACAAgAIACAAAACAAgAIACAAAACAAgAIACAAAACAAgAIACAAIAAAAIACAAgAIAAAAIACAAgAIAAAAIACABQoK72L/Du6WHy9z9f3/3rE6/ZbbZ97cN+//z449cfL2+iADUEYDz042GfaxwFMUAAChn8c4d+TgyEAAEIGXwhQAAKGP5rD/6hEIgAAhA2/HYDCED48NsNUKvW8J9mfx2HvuUIAlDp8IsAAhA+/OMIgACEDf/UtYIAhA2/owACEL69dhRAAGyn7QIQgNQV1VEAAQhfQR0FEABDBAKQzDEAAQgdGjsYBMDwgAAAAuA+AAhADkcZBMBqCQJg1QQBAAQAEABAAIYOfVYfUHkAvL02OAIAAlA+xxkEIJxjDQJg5QQBSFoxRQwBsP33JCAAVlAQgJiVU7wQgPBBsv1HAAIHyOqPAIQO1P5arf4IwAV3ASVFwPAjAIERsPVHAEJXVVt/BCB0lTX8CEDoUcDwU5Nmt9n2a7/I4VuHL/kOwoYfAVhBCG4dgeEOxPAjAEG7Aas+AhAYAqs+AhAWgvHNRoOPABQYgrlBmPrugqFHACoNwhQDjwAAkbwlGAgAIACAAAACAAgAIACAAAACAAgAIABAsQFoPA0QqbEDAEcAIDkAjgEQtv23AwA7gJ9FADJW/6kdgAhAyPAfOgKIAAQMv3sAEK47UgpvGAoVrvxzdwCOA1Dp8M89AogAVDj8/zoCOBJAxYN/agCmHlgMoMCh/58AHPsLRQFWOuyTD9T3ZhZSeR0ACAAgAIAAABm+BBgAb6HKIXAM7nkAAAAASUVORK5CYII=",
  _b =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozRTY3MDlCRTM1NDkxMUU1OEI4NkE0RkIwM0JDODRGNiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozRTY3MDlCRjM1NDkxMUU1OEI4NkE0RkIwM0JDODRGNiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjA1QkZBQTc1MzU0OTExRTU4Qjg2QTRGQjAzQkM4NEY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjA1QkZBQTc2MzU0OTExRTU4Qjg2QTRGQjAzQkM4NEY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+1c2J1gAABfVJREFUeNrs3U2O00oYhlEcWWESdsKIFbEAJDbAkA0gMQwSK2LEfowYRDJRTP7jqu89Z377mhbfU1WmuzJM0/QGyLTxLQABAAQAEAAgwvjj7btHfj1vFOH5hocFwLBDd6ZHRWE09FAuCsOjA2Dwob8YnA3BxvBD1FHhqgAYfigcgdHgQ+6RwM8BQLCN1R9yjwMbww+5EdgYfsiNgHcA4B2A1R8SdwF2AGAHAKQGwPYfQo8BdgDgCAAIACAAgAAAAgAIACAAgAAAAgD0bPQtINn7zx9v/m9/f/vZ/Z9/2G93fheA6KH/8OXT1V/j19fvJWIgAEQO/i1Df0kMeguBAGDwg0MgABj8J4WghwgIAKWH/5WD32MEBADDH3wkEAAMf/BuwA8CYfifrLXnEQAM/4rPKAAQNvyHZ2stAgJACS0Pf8sREABKrP5CJQBY/YVLALD6C5YAEDH8Pa7+LQVMALD1D352AYDgXYAAQPAuQACwagYTAKyewUETAAgOmQCAIwAgAOC8LADg3CwAgABAW44/lQcBIESFz+MTAEAAAAEABADyrP1CUwAwOCtb88WmAGBgHAGAxF2MAGCAgnczAoDBCY6XAGCQgiMmABig4GgJAHYBwfESAErsAnqJQGvPKQA4Crx4+Ft6XgHAUSB0+AUAR4Hg4RcARCB4+AUAEQge/r+G/XY3+WtDNfPrw9e4RbiH4RcAYkLwqgjMdx49/OuEAGA3EDj4AoAQBA++ACAEM9cE4fgFY8+/mSgACMINnzdY5VYiAYBgfg4ABAAQAEAAAAEABAAQAEAAAAEABAAQAEAAAAEABAAQAEAAgPaMvgVZzt1+U+WmGy7jRqDAYV+6/27pwzREQQDodPDvvf2291tvEQCD/wBCIAAEDr4QCAAdDP+rP/+ul8++QwCs+nYDCIBV326AY34QyPDf7fAst3zCDgJAx8MvAgLACoPm2RCAwNXfsyIAtv7N7wJEQAAI3V47CggAttN2AQJA6opqFyAAWEHtAgSA1JXULkAAsHLaBQgAqSuoXYAAAAIACAAgACyr+NLMi0AB4AqVXp55ESgAgAAAAgAIACAAgAAwt/RBnf4sCEBxFe/X95kBAgAIACAAgACwrMLLMy8ABYAbVHpp5gWgABC4glr9BYDwldPqLwAErqRWfwEgfAW1+gsAgSuq1V8AeMJK2sNgHZ7R6i8AhG6nDb8AELi9tvUXAEKPArb+AkBoBAx/v4b9djf5NvRnfs/+WtduzyNk+AWAFUPw6ghY9QWAwN2AVV8ACAyBwRcAAkNg8AWAAiGYW4rC0r8sGHwBoHgUDLsAAGH8IBAIACAAgAAAAgAIACAAgAAAAgAIACAAgAAAAgAIANC6sfofcOn33/3eOxS7D+DSG3DcfANFAnA89LfegXccBTFAADoZfDfgQkgA3IEPoQHwKTgQGoC1ht9uAAEIH367AaraGP7rHJ7j3P36IADFhl8EEIDw4T+OAAhA2PCfelYQgLDhdxRAAMK3144CCIDttF0AApC6ojoKIADhK6ijAAJgiEAAkjkGIAChQ2MHgwAYHhAAQAC8BwAByOEogwBYLUEArJogAIAAAAIACMDc0mf1AcUD4HptcAQABKB/jjMIQDjHGgTAygkCkLRiihgCYPvvm4AAWEFBAGJWTvFCAMIHyfYfAQgcIKs/AhA6UIdntfojAA/cBfQUAcOPAARGwNYfAQhdVW39EYDQVdbwIwChRwHDTyXDfrubWn/I+dXha94gbPgRgAZC8OoIzHcghh8BCNoNWPURgMAQWPURgLAQHL9sNPgIQIchuDQIp/51wdAjAEWDcIqBRwCASK4EAwEABAAQAEAAAAEABAAQAEAAAAEABADoNgCDbwNEGuwAwBEASA6AYwCEbf/tAMAO4N8iABmr/6kdgAhAyPAvHQFEAAKG3zsACDeeKYULQ6Hgyn/pDsBxAIoO/6VHABGAgsP/vyOAIwEUHvxrA3DqC4sBdDj09wTg3P9QFKDRYT/5habJzEIqPwcAAgAIACAAQIY/AgwAcOCdRuK7wTQAAAAASUVORK5CYII=",
  Fb =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowNUJGQUE3MzM1NDkxMUU1OEI4NkE0RkIwM0JDODRGNiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowNUJGQUE3NDM1NDkxMUU1OEI4NkE0RkIwM0JDODRGNiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjA1QkZBQTcxMzU0OTExRTU4Qjg2QTRGQjAzQkM4NEY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjA1QkZBQTcyMzU0OTExRTU4Qjg2QTRGQjAzQkM4NEY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+qru5gAAABqpJREFUeNrs3UGOE8kSgOGpkNWzaW7CihNxACQuwJILILHskTgRK+5Ts7JkLLddtsuujIjv272neTxTmfFnZQ8y0zzP/wA9hUcAAgAIACAAQAu7//79sOav5yeK8HjTagEw7JDOvFYUdoYeykVhWjsABh/yxeBiCMLwQ6urwlUBMPxQOAI7gw99rwT+HAA0Fk5/6HsdCMMPfSMQhh/6RsDPAMDPAJz+0PEtwBsAeAMAugbA6z80vQZ4AwBXAEAAAAEABAAQAEAAAAEABAAoYFfxN/Xx6+fF/+yfH7/sAtqa3l5e54pD/+nbl4v/m9/ff4pBc9ccFhUPj9QBuGXoxYA19k2V/ZIyAIcLeM/QL1lcIag5+Gvum8z7JVUAHj34QmDwu+2XNAHYL+IzBv+9hRUBg19tv6QIwJbDLwK5h3+rPZNlvwwfgBGGXwQMf9UrwdABGGn4RcDwV9wzYSGvs/889/z7Y3rumRGFhRQBw//czygAyRdSBOyZKvslRn5Yo8vyOTvIsBYjRmCoAGQ9Tb0FePZZQxUekLcAp3/fcIUH4vN75n2DFR6Mt4DMw5/52Y8QsPAg/D68+vf97OGB+Pz0PTR8JyA0PjQ2D0C112bXAM84kyHeAKq8PrsGeNbZguYKAI1DJgDgCgAIALgvCwC4NwsAIAAwluO/lQcBoAlfxioAgAAAAgDkDkCVH+r44RTZ9szmAaj2Qx0/pBLbTHvGFQAD4wqg6E4kOu6ZIQJQpehOJtHNtmfCgtqIBqfvngkL6vMbpL57Jiyo098A9d0zYUGd/t4C+u6ZsKBO/wpvAfZMkQBkWdD953P6O00z75kYeUFHjYDhd7pW2TPD/knAUSNg+O2XSnsmLKrhF4G+eyYsquEXgb57Znp7eZ0zLOzh10E/81thDzeS4c9jq/2S7cBIE4DjhX3Gojr164TgWRHIdmCkC8Az6u7U9zbQZc+kDMCphb13cY/vjAZfCDocFqkDcC4G5xb6vR8QGfp+IbglCJUOizIBuCYKhp2l+6T6/ikdAOA83wkIAgAIACAAgAAAAgAIACAAgAAAAgAIACAAgAAAAgAIACAAgAAAAgAIACAAgAAAAgAIACAAgAAAAgAIACAAgAAAAgAIACAAgAAAAgAIACAAgACAAHgEIACAAAACAAgAIACAAAACAAgAIACAAAACAAgAIACAAAACAAgAIACAAAACAAgAIACAAAACAAgAIACAAAACAAgAIACAAAACAAgAIACAAAACAAgACAAgAIAAAAIACAAgAIAAAAIACAAgAIAAAAntqv8GP379fPK///Pjl9Wnvent5XWuPuyfvn356z///v5TFFi0d86psF/SB+B44Y6HfanjKIhBv6G/Zu9U2S9pA3C4eLcO/ZLFFYLag7/G3skcg3QBeOTgC4HBX2vPZNkvqQKwX8BHD372RWW7QyPbwZEmAFsNv7eBGsO/xb7JcHCkCMDWw+9twPBXPTiGD8BIwy8Chr/angmLeL3957nl3x3Tc9+MumfCIt63oNg3mSMQFnGdz4p9k/HgCIvoKmD4+x4cMfJgZeAqYC0yHxxDBSDzSeotwLPPGKvwYFwFnP594xUehKuA07/vngkPBKd/34j5SjAnkmfdOF5hIZ1EnnlfYSGh7yHoCgCNDz8BcKXxjF0BcJXxrAVAyUEAlBwEACj+NiwA0PgtWABgAO/9dXUtArDVbx5GssUXhkbH3zTgCgAC4BG4ziAAuNaIrQBYTES2094Piyli9J0BVwAxE11XAIuJ2AqAxRQvz77VZw8PRMS8BWy717f8PYTFdPp7C+i758Ni5q+4t4B8z36UPR6jLmamCBh+Q5V138TID2b0BfXqb89k3zcx+oJ69afSm9ho+yayPDCLSPY3sxH3zdABGPG1zvC7ClTaN9Pby+s8+qIeflnilt8gbPjzGGXPjL5vUgTgeFGfvaCHp4nhzxmCrSIw+qGRKgBblN2pLwKVD410AXhWCJz6rgQd9k3aADxiYY9/cGTwhaD622L6AJxa2KULfOonxYa+XwhujUGF/VMmAEuCcIqB556/kiv7/ikbAOAyXwkGAgAIACAAgAAAAgAIACAAgAAAAgAIAJA2AJPHAC1N3gDAFQDoHADXAGj2+u8NALwB/F0EoMfpf+oNQASgyfC/dwUQAWgw/H4GAM3tLpTCF4ZCwZN/6RuA6wAUHf6lVwARgILDf+4K4EoAhQf/2gCc+oXFABIO/T0BuPR/KAow6LCf/IXm2cxCV/4cAAgAIACAAAA9/C/AAJ2NQy44zGM4AAAAAElFTkSuQmCC",
  zb =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowNUJGQUE2RjM1NDkxMUU1OEI4NkE0RkIwM0JDODRGNiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowNUJGQUE3MDM1NDkxMUU1OEI4NkE0RkIwM0JDODRGNiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjA1QkZBQTZEMzU0OTExRTU4Qjg2QTRGQjAzQkM4NEY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjA1QkZBQTZFMzU0OTExRTU4Qjg2QTRGQjAzQkM4NEY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+tnAQbQAAB3pJREFUeNrs3UuOI0UQgGEcsnrVR2HFiTgAEhdgyQWQWPaCE7HiPkYsLBnL5XdXxeP71zM95YyIPyKzPVm7w+HwA4CZhCUACAAAAQAgAAAj2H19fL7z5zlRBFao23f9oL1iB8pxeJcU9ooeaCeF3bsFoPCBejK4KYJQ/MCorcJDAlD8QGMJ7BU+MHdL4HsAwGBC9wfmbgdC8QNzJRCKH5grAWcAgDMA3R+YOAWYAAATAICpAjD+A0O3ASYAwBYAAAEAIAAABACAAAAQAAACAEAAABqw7/ihfvz157v/7D9//CULMJb/3gx06Fj0P/32y82/8/fvf5LBcB5pFh2bR2kBPFP0ZIB35E2XfCkpgNMAvlL09wSXCHoW/jvzpnK+lBLAdxc+ESj8aflSRgDHIK5R+EuBJQGF3y1fSghgy+IngdrFv1XOVMmX9ALIUPwkoPi7bglSCyBT8ZOA4u+YMyGQj3F8nld+f4yZOZOREEgSUPzrPiMBFA8kCciZLvkSmRcrO1WecwIVYpFRAqkEULWbmgKsfVVRhQUyBej+c8UVFsTzW/O5wgoLYwqoXPyV1z6DwMJC+BxG/7nPHhbE82Nu03AnIDC4aWwugG5js22ANa5Eigmgy/hsG2CtqwnNFgAYLDICAGwBABAAYL9MAIB9MwEAIAAgF+dv5QEBYAguYyUAAAQAgAAA1BZAl0Mdh1OoljObC6DboY5DKrKtlDO2AFAwtgCMriNhYs6kEEAXo+tMpFstZ0JAJaLCmZszIaCeXyHNzZkQUN1fAc3NmRBQ3d8UMDdnQkB1/w5TgJxpIoAqAT0+n+6vm1bOmcgc0KwSUPy6a5ecSftNwKwSUPzypVPOhKAqfhKYmzMhqIqfBObmzO7r4/NQIbCn10GveSvsaSIp/jpslS/VGkYZAZwHdo2g6vp9RLCWBKo1jHICWMPuur5pYErOlBTApcC+GtzzPaPCJ4IJzaK0AK7J4Fqglw6IFP08ETwjhE7Noo0AHpGCYse9edI9f1oLAMB13AkIEAAAAgBAAAAIAAABACAAAAQAgAAAEAAAAgBAAAAIAAABACAAAAQAIB97SzCLW7ffuClpFm4EGljsS/ffuSuRANCs8F+9/dYV6QSAgYVPBAQAhU8EBIAKxb/2+++8No0AMKTrmwYIALq+aaAhvgik+F/m+CzPvGEHBIDCxU8CBIANCs2zgQAGdn/PCgIw+qefAkiAADB0vLYVIAAYp00BBICpHdUUQADQQU0BBICpndQUQADQOU0BBICpHdQUQAAACAAAAQAgACzT8dDMQSAB4AE6HZ45CCQAAAQAgAAAEAAAAgBAADhl6UWdPgsIoDkd79f3zgACAEAAAAgAAAFgmQ6HZw4ACQBP0OnQzAEgAWBgB9X9CQDDO6fuTwAY2El1fwLA8A6q+xMABnZU3Z8A8A2dtEJhHZ9R9ycADB2nFT8BYOB4bfQnAAzdChj9CQBDJaD467L7+vg8WIZ6nN6zv9W126cSUvwEgA1FsLYEdH0CwMBpQNcnAAwUgcInAAwUgcInADQQwSlLUlj6zYLCJwA0l4JiJwAAw/BFIIAAABAAAAIAQAAACAAAAQAgAAAEAIAAABAAAAIAQAAACABAdvbdP+DS/3/3/96BZvcB3HsDjptvcG/uXKNDvpQXwHngnr0D71wKZDCv6B/JnS75UlYAbsBFltypLINyAnAHPjLnTrUXppQSgLfgIHvTqNY4yghgq+I3DfQo/i3ypkLjKCGArYvfNKD4uzaO9ALIVPwkoPi75UwI4uMcn+eZ3x1jZt5kzZkQxNcCCnlTWQIhiO95Vsibio0jBNFWQPHPbRyRubAqYCsgFpUbRyoBVO6kpgBrX1FWYWFsBXT/ufIKC2EroPvPzZmwIND950rMlWA6krUeLK8QSJ3Ims8lBBKY2wRtAYDBzY8AbGmssS0AbGWsNQEwOUAATA4QAIDm0zABAIOnYAIAErD0uroRAtjqwwOZ2OLC0Jj4oQHYAgAEYAlsZ0AAsK0hWwIQTJDspNwPwSQxzK0BWwAyI11bAMEE2RKAYJKXtR/17GFBSMwUsG2ub/kZQjB1f1PA3JwPwaxvcVNAvbXPkuORNZiVJKD4FVXVvInMC5M9oEZ/OVM9byJ7QI3+6DSJZcubqLJggojqk1nGvEktgIxjneK3FeiUN7uvj89D9qCeXpa45Q3Cir8OWXIme96UEMB5UNcO6Gk3Ufw1RbCVBLI3jVIC2MLsuj4JdG4a5QSwlgh0fVuCCXlTVgDfEdjzgyOFTwTdp8XyArgU2HsDfOmkWNHPE8GzMuiQP20EcI8QLqHg8coruarnT1sBALiNK8EAAgBAAAAIAAABACAAAAQAgAAAEAAAAgBAAADKCmBnGYCR7EwAgC0AgMkCsA0Aho3/JgDABPB/IwCY0f0vTQAkAAwp/qUtAAkAA4rfGQAwnP0NU7gwFGjY+e+dAGwHgKbFf+8WgASAhsV/bQtgSwA0LvxHBXDpB5MBULDoXxHArX+QFICkxX7xBx0OahaYiu8BAAQAgAAAEACAGfwrwAAPlxZNWR0fOgAAAABJRU5ErkJggg==",
  Ub =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo4MzZDMDk0RDM1NDkxMUU1OEI4NkE0RkIwM0JDODRGNiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo4MzZDMDk0RTM1NDkxMUU1OEI4NkE0RkIwM0JDODRGNiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjNFNjcwOUM4MzU0OTExRTU4Qjg2QTRGQjAzQkM4NEY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjgzNkMwOTRDMzU0OTExRTU4Qjg2QTRGQjAzQkM4NEY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+SxkJ3gAACBpJREFUeNrs3UuOK0UQRuHrkNVMmp0wYkUsAIkNMGQDSAwbiRUxYj9GDCwZq/xqu6vi8Z3xVVPO+ONEprvJ2h0Oh28AZhKWACAAAAQAgAAAjGD/53ffv/Ln+UYR+Hp2LxOAZgfKcXiVFPaaHmgnhd2rBaDxgXoyuCmC0PzAqKPCQwLQ/EBjCew1PjD3SODvAIDBhOkPzD0OhOYH5kogND8wVwK+AwB8B2D6AxN3AXYAgB0AgKkCsP0Hhh4D7AAARwAABACAAAAQAAACAEAAAAgAAAEAaMC+6wf74Zefbv6bf37/SwIwmt3H2/uha8P/+OvPF//937/9QQi4a1B0HiClBXBevGsNf4tzIZDBnKb/TG665KWkAE4L+EzT31NcIujZ+K/MTeW8lBLAVzc+EWj8aXkpI4BjEddo/EuFJQGN3y0vJQSwZfOTQO3m3yozVfKSXgAZmp8ENH/XI0FqAWRqfhLQ/B0zEwr5GMfneeb3x5iZmYyEQpKA5l/3GQmgeCFJQGa65CUyL1Z2qjznBCrUIqMEUgmg6jS1C7D2VUUVFsguwPSfK66wIJ7fms8VVlgYu4DKzV957TMILCyEz2HrP/fZw4J4fswdGu4EBAYPjc0F0G3b7BhgjSuRYgfQZfvsGGCtqwnNEQAYLDICABwBABAAAAIAsuI3AASA4fhtCwFgMEuvdQMBYAAuYyUAAAQAgACAwmz9fUZYBJ8D27Ll9xox+cP7PGTrCACQLAEwuomEeZlJIYAuRjeZSLdaZkJBBVHjzM1MKKjn10hzMxMKavproLmZCQU1/e0C5mYmFNT077ALkJkmAqhS0OPzmf6maeXMROaCZpWA5jddu2Qm7V8CZpWA5peXTpkJRdX8JDA3M6Gomp8E5mZm9/H2fqhQ2NPbYNe8FPI0SJq/DlvlpdrAKCOA88KuUVRTv48I1pJAtYFRTgBr2N3UtxuYkpmSAlgq7LPFPT8zanwimDAsSgvgmgyuFfrSF0Safp4IPiOETsOijQAekYJmx7056Z6f1gIAcB13AgIEAIAAABAAAAIAQAAACAAAAQAgAAAEAIAAABAAAAIAQAAACAAAAQDIx77zh7t104tbgXBvVrrmZeSdgP+xdC8gIcxu+Gv3AnbNi1uBLxSYDPo3vbwUFsBXvvDBewH6Nr68FBfAmq98IoI+zb/mm6Qq5aWUANZ+zdN5YUnAoOiWlxIC2PpFjyRg6nfNS3oBZCimI4Hm7yqB1ALIVEy7Ac3fMSuhmI+T8Zk0f868HJ/nM68fGy2ACo2Wtaia/xsJVBZAhcbKbnbNLy8lBVCloCRgp9ghL6Ggvg+oPv3JqokAKk9SuwANVTEvkW1BKhbULoBwq+YlLIxQaqS5eXEjkDBqnMF5CQWFBppLKCiZYW5eHAFIDIPzQgAwMR0BFBQmJwEoKEAAsKsBAcBuBgQAgAAAEAAAAsAFlt4hBxDAINwWDAIwNQECMC1hYBAAYGAQgMkEZMpLWAwTCnPzEhYBpqcjAATS1ByYl7AogqmJ5uYlsi1GxaKa/mRbNS+hqJ7dLmBuXkJRTX/SnZuXyFrUCo11fEbTX1NVzUvKHUCFhtL8BkaHvESFRbMFRWUJZB4WoajO/SQwd6e4+3h7P2QubKbXhp+Gy/SXlw7HxPQCOC3qloV15ieBjnkpIYCtC6v560pAXhoJYO3C2vLbDXTPSzkBrFFYjW83MCUvZQVwXthni3v+7bHG7y0CeWkggGvFvVXkpV8Xafq5MrglhK55aSOAR6Sg4fFoVrrmpbUAAFzHjUAAAQAgAAAEAIAAABAAAAIAQAAACAAAAQAgAAAEAIAAABAAgOzsu3/AS/+ft7sAgGb3Adx7K9Cll0eQwlzuuRCkY17KC+BV97y5E1DTP5IddwImKt6rb3p1K/Ccxn9FdirLwHsBiEDjD86MNwM9UFQS0PjdMlNGAFu/781uoHbzb5EbLwctam+7Ac0/ZXCUEECGxicBzd8xM1GhiNk4hirr82n+XM2fOTOhiM8VFHJTWQKhiD13KZo/J9meLRTRUUDzzx0ckbmxKuAooBaVB0cqAVSepHYB1r6irMLCOAqY/nPlFRbCUcD0n5uZsCAw/edKzJVgJpK1HiyvUEiTyJrPJRQSmDsEHQHsaDB4+BGAnQzJOgIAZEsATA4QAJMDBACg+W6YAIDBu2ACABJw6XV1IwSw1YcHMrHFhaEx8UMDcAQACMASOM6AAOBYQ7YEoJgg2UnZD8UkMcztAUcAMiNdRwDFBNkSgGKSF0blJiwIiWmibZ97y9yEBjL9OxwDqtZg68yHhqpvcRKot/ZZMh5Zi1lJAppfU1XNTWRemOwFtfWXmeq5iewFtfVHp51YttxElQVTRFTfmWXMTWoBZNzWaX5HgU652X28vR+yF/X0ssQtbxDW/HXIkpnsuSkhgPOirl3Q02mi+WuKYCsJZB8apQSwhdlNfRLoPDTKCWAtEZj6jgQTclNWAF9R2PMvjjQ+EXTfLZYXwFJh7y3w0jfFmn6eCD4rgw75aSOAe4SwhIbHM6/kqp6ftgIAcBtXggEEAIAAABAAAAIAQAAACAAAAQAgAAAEAIAAAJQVwM4yACPZ2QEAjgAAJgvAMQAYtv23AwDsAP5vBAAzpv/SDoAEgCHNf+kIQALAgOb3HQAwnP0NU7gwFGg4+e/dATgOAE2b/94jAAkADZv/2hHAkQBo3PiPCmDpB5MBULDpnxHArf8gKQBJm33xBx0OehaYir8DAAgAAAEAIAAAM/hXgAEAXFHSkcpe+NMAAAAASUVORK5CYII=";
function Wb() {
  const { gameState: t, requestRollDice: r, isChoosingSpace: o } = rr(),
    { diceState: i } = t,
    l = [Mb, Lb, _b, Fb, zb, Ub],
    c = JSON.parse(localStorage.getItem("player-data")),
    u = () => {
      if (!i.isShuffling) {
        if (t.players[t.currentTurnIndex].name !== c.name) {
          alert("It's not your turn to roll the dice!");
          return;
        } else if (t.currentQuestion)
          return alert("You need to answer the trivia question");
        r(t, c);
      }
    };
  return t
    ? v.jsx("div", {
        className:
          "flex flex-col bg-gray-700 text-white rounded-lg relative h-full w-full p-1",
        children: v.jsxs("div", {
          className:
            "w-full h-full flex flex-col rounded-lg border overflow-hidden p-1",
          children: [
            v.jsx("div", {
              className:
                "flex justify-center items-center h-3/4 pt-2 cursor-pointer",
              onClick: u,
              children: v.jsx("img", {
                src: l[i.diceValue - 1],
                alt: `dice-${i.diceValue}`,
                className: `object-contain h-full w-full max-h-24 ${
                  i.isShuffling && "animate-spin"
                }`,
              }),
            }),
            v.jsx("div", {
              className: "flex justify-center items-center h-1/4",
              children: v.jsx("p", {
                className: "font-bold",
                children: i.dicePrompt,
              }),
            }),
          ],
        }),
      })
    : v.jsx("div", { children: "Loading..." });
}
const Qb = {
  CH: {
    connections: ["S0-0", "S1-0", "S2-0", "S3-0", "S4-0", "S5-0"],
    color: null,
    rollAgain: !1,
  },
  "S0-0": { connections: ["CH", "S0-1"], color: "green", rollAgain: !1 },
  "S0-1": { connections: ["S0-0", "S0-2"], color: "blue", rollAgain: !1 },
  "S0-2": { connections: ["S0-1", "S0-3"], color: "orange", rollAgain: !1 },
  "S0-3": { connections: ["S0-2", "S0-4"], color: "pink", rollAgain: !1 },
  "S0-4": { connections: ["S0-3", "W0"], color: "yellow", rollAgain: !1 },
  "S1-0": { connections: ["CH", "S1-1"], color: "purple", rollAgain: !1 },
  "S1-1": { connections: ["S1-0", "S1-2"], color: "orange", rollAgain: !1 },
  "S1-2": { connections: ["S1-1", "S1-3"], color: "yellow", rollAgain: !1 },
  "S1-3": { connections: ["S1-2", "S1-4"], color: "green", rollAgain: !1 },
  "S1-4": { connections: ["S1-3", "W1"], color: "pink", rollAgain: !1 },
  "S2-0": { connections: ["CH", "S2-1"], color: "blue", rollAgain: !1 },
  "S2-1": { connections: ["S2-0", "S2-2"], color: "yellow", rollAgain: !1 },
  "S2-2": { connections: ["S2-1", "S2-3"], color: "pink", rollAgain: !1 },
  "S2-3": { connections: ["S2-2", "S2-4"], color: "purple", rollAgain: !1 },
  "S2-4": { connections: ["S2-3", "W2"], color: "green", rollAgain: !1 },
  "S3-0": { connections: ["CH", "S3-1"], color: "orange", rollAgain: !1 },
  "S3-1": { connections: ["S3-0", "S3-2"], color: "pink", rollAgain: !1 },
  "S3-2": { connections: ["S3-1", "S3-3"], color: "green", rollAgain: !1 },
  "S3-3": { connections: ["S3-2", "S3-4"], color: "blue", rollAgain: !1 },
  "S3-4": { connections: ["S3-3", "W3"], color: "purple", rollAgain: !1 },
  "S4-0": { connections: ["CH", "S4-1"], color: "yellow", rollAgain: !1 },
  "S4-1": { connections: ["S4-0", "S4-2"], color: "green", rollAgain: !1 },
  "S4-2": { connections: ["S4-1", "S4-3"], color: "purple", rollAgain: !1 },
  "S4-3": { connections: ["S4-2", "S4-4"], color: "orange", rollAgain: !1 },
  "S4-4": { connections: ["S4-3", "W4"], color: "blue", rollAgain: !1 },
  "S5-0": { connections: ["CH", "S5-1"], color: "pink", rollAgain: !1 },
  "S5-1": { connections: ["S5-0", "S5-2"], color: "purple", rollAgain: !1 },
  "S5-2": { connections: ["S5-1", "S5-3"], color: "blue", rollAgain: !1 },
  "S5-3": { connections: ["S5-2", "S5-4"], color: "yellow", rollAgain: !1 },
  "S5-4": { connections: ["S5-3", "W5"], color: "orange", rollAgain: !1 },
  W0: { connections: ["S0-4", "O0", "O35"], color: "purple", rollAgain: !1 },
  O0: { connections: ["W0", "O1"], color: "yellow", rollAgain: !1 },
  O1: { connections: ["O0", "O2"], color: null, rollAgain: !0 },
  O2: { connections: ["O1", "O3"], rollAgain: !1, color: "orange" },
  O3: { connections: ["O2", "O4"], rollAgain: !1, color: "green" },
  O4: { connections: ["O3", "O5"], rollAgain: !0, color: null },
  O5: { connections: ["O4", "W1"], rollAgain: !1, color: "pink" },
  W1: { connections: ["S1-4", "O5", "O6"], rollAgain: !1, color: "blue" },
  O6: { connections: ["W1", "O7"], rollAgain: !1, color: "pink" },
  O7: { connections: ["O6", "O8"], rollAgain: !0, color: null },
  O8: { connections: ["O7", "O9"], rollAgain: !1, color: "yellow" },
  O9: { connections: ["O8", "O10"], rollAgain: !1, color: "purple" },
  O10: { connections: ["O9", "O11"], rollAgain: !0, color: null },
  O11: { connections: ["O10", "W2"], rollAgain: !1, color: "green" },
  W2: { connections: ["S2-4", "O11", "O12"], rollAgain: !1, color: "orange" },
  O12: { connections: ["W2", "O13"], rollAgain: !1, color: "green" },
  O13: { connections: ["O12", "O14"], rollAgain: !0, color: null },
  O14: { connections: ["O13", "O15"], rollAgain: !1, color: "pink" },
  O15: { connections: ["O14", "O16"], rollAgain: !1, color: "blue" },
  O16: { connections: ["O15", "O17"], rollAgain: !0, color: null },
  O17: { connections: ["O16", "W3"], rollAgain: !1, color: "purple" },
  W3: { connections: ["S3-4", "O17", "O18"], rollAgain: !1, color: "yellow" },
  O18: { connections: ["W3", "O19"], rollAgain: !1, color: "purple" },
  O19: { connections: ["O18", "O20"], rollAgain: !0, color: null },
  O20: { connections: ["O19", "O21"], rollAgain: !1, color: "green" },
  O21: { connections: ["O20", "O22"], rollAgain: !1, color: "orange" },
  O22: { connections: ["O21", "O23"], rollAgain: !0, color: null },
  O23: { connections: ["O22", "W4"], rollAgain: !1, color: "blue" },
  W4: { connections: ["S4-4", "O23", "O24"], rollAgain: !1, color: "pink" },
  O24: { connections: ["W4", "O25"], rollAgain: !1, color: "blue" },
  O25: { connections: ["O24", "O26"], rollAgain: !0, color: null },
  O26: { connections: ["O25", "O27"], rollAgain: !1, color: "purple" },
  O27: { connections: ["O26", "O28"], rollAgain: !1, color: "yellow" },
  O28: { connections: ["O27", "O29"], rollAgain: !0, color: null },
  O29: { connections: ["O28", "W5"], rollAgain: !1, color: "orange" },
  W5: { connections: ["S5-4", "O29", "O30"], rollAgain: !1, color: "green" },
  O30: { connections: ["W5", "O31"], rollAgain: !1, color: "orange" },
  O31: { connections: ["O30", "O32"], rollAgain: !0, color: null },
  O32: { connections: ["O31", "O33"], rollAgain: !1, color: "blue" },
  O33: { connections: ["O32", "O34"], rollAgain: !1, color: "pink" },
  O34: { connections: ["O33", "O35"], rollAgain: !0, color: null },
  O35: { connections: ["O34", "W0"], rollAgain: !1, color: "yellow" },
};
function Hb(t, r, o) {
  let i = [];
  for (let l = 0; l < 6; l++) {
    const c = (Math.PI / 3) * l + (30 * Math.PI) / 180,
      u = t + o * Math.cos(c),
      f = r + o * Math.sin(c);
    i.push(`${u},${f}`);
  }
  return i.join(" ");
}
function xm(t, r, o, i, l, c) {
  const u = t + o * Math.cos(l),
    f = t + o * Math.sin(l),
    m = t + o * Math.cos(c),
    h = t + o * Math.sin(c),
    y = t + i * Math.cos(c),
    x = r + i * Math.sin(c),
    E = t + i * Math.cos(l),
    b = r + i * Math.sin(l);
  return `${u},${f} ${m},${h} ${y},${x} ${E},${b}`;
}
function Sm(t) {
  const r = t.split(" ").map((l) => l.split(",").map(Number)),
    o = r.reduce((l, [c]) => l + c, 0) / r.length,
    i = r.reduce((l, [, c]) => l + c, 0) / r.length;
  return { x: o, y: i };
}
function Gb() {
  const { gameState: t, answerQuestion: r } = rr(),
    o = t.currentQuestion,
    [i, l] = g.useState(!1),
    c = t.players[t.currentTurnIndex],
    u = JSON.parse(localStorage.getItem("player-data")),
    f = (m) => {
      r(t.gameId, m);
    };
  return v.jsx("div", {
    className: "relative w-3/4 p-2",
    children: v.jsxs(ki, {
      className: "relative z-10 w-full p-2",
      style: { border: `20px solid ${nt[o.category].hex}` },
      children: [
        c.position[0] === "W" &&
          v.jsx("div", {
            className:
              "absolute inset-0 flex justify-center items-center z-0 top-[-100px] opacity-50",
            children: v.jsx("svg", {
              width: 350,
              height: 350,
              viewBox: "0 0 100 100",
              children: v.jsx("path", {
                d: `M50,50 L${50 + 45 * Math.cos((60 * Math.PI) / 180)},${
                  50 + 45 * Math.sin((60 * Math.PI) / 180)
                } A45,45 0 0,1 ${50 + 45 * Math.cos((120 * Math.PI) / 180)},${
                  50 + 45 * Math.sin((120 * Math.PI) / 180)
                } Z`,
                strokeWidth: "2",
                fill: o.category,
              }),
            }),
          }),
        v.jsxs(Rl, {
          className: "relative z-20 mb-4 text-center",
          children: [
            v.jsx(Ri, { children: nt[o.category].category }),
            v.jsx(bl, {
              children:
                c.name === u.name
                  ? v.jsx("div", {
                      className: "mt-2",
                      children: v.jsx("p", {
                        className: "italic",
                        children: "Answer the question using the chat.",
                      }),
                    })
                  : v.jsxs("div", {
                      className: "mt-2",
                      children: [
                        v.jsxs("p", {
                          className: "italic",
                          children: ["It's ", c.name, "'s turn!"],
                        }),
                        v.jsx("p", {
                          className: "italic",
                          children:
                            "Submit whether they got it right or wrong.`",
                        }),
                      ],
                    }),
            }),
          ],
        }),
        v.jsxs(bi, {
          className: "relative z-20 flex flex-col items-center mb-8",
          children: [
            v.jsx("p", { className: "text-xl mb-5", children: o.question }),
            c.name !== u.name
              ? i
                ? v.jsxs("div", {
                    className: "flex flex-col items-center mt-4",
                    children: [
                      v.jsx("p", {
                        className: "text-md mb-2",
                        children: "Correct Answer:",
                      }),
                      v.jsx("p", { className: "text-lg", children: o.answer }),
                    ],
                  })
                : v.jsx(ct, { onClick: () => l(!0), children: "Show Answer" })
              : null,
          ],
        }),
        c.name !== u.name &&
          v.jsxs(Nl, {
            className: "relative z-20 flex justify-between px-20",
            children: [
              v.jsx(ct, { onClick: () => f("correct"), children: "Correct" }),
              v.jsx(ct, { onClick: () => f("wrong"), children: "Wrong" }),
            ],
          }),
      ],
    }),
  });
}
function Vb() {
  const { setOpenGameRules: t } = rr();
  return v.jsxs(v.Fragment, {
    children: [
      v.jsxs("div", {
        className: "p-4 rounded-2xl shadow-2xl h-full w-full overflow-auto",
        children: [
          v.jsx("h2", {
            className: "text-xl font-bold mb-4 text-center",
            children: "Game Rules",
          }),
          v.jsx("h4", {
            className: "text-lg font-semibold",
            children: "Objective",
          }),
          v.jsx("p", {
            className: "mb-4 text-sm",
            children:
              "To move along the game board correctly answeing questions and to collect all colored wedges for correctly answering the questions in each of the six category wedge areas (at the base of each spoke). To win, a player must collect all wedges and then return to the central hub and correctly answer the game-winning question in a category chosen by the other players.",
          }),
          v.jsx("h4", {
            className: "text-lg font-semibold",
            children: "Gameplay",
          }),
          v.jsxs("p", {
            className: "mb-4 text-sm",
            children: [
              'When one of the players clicks "Start Game", the game will automatically randomize the order of the players currently in the game.',
              v.jsx("br", {}),
              v.jsx("br", {}),
              "On each turn, the player will roll the dice by clicking on it. Based on the number rolled, the player will be shown spaces he/she can move to on the board. The player can click on one of the highlighted spaces to move to that space. Then, the player will be asked a question based on the color of the space he/she landed on. If the player answers the question correctly, he/she will be able to roll again. If the player answers the question incorrectly, the turn will be passed to the next player.",
            ],
          }),
          v.jsx("div", {
            className: "flex justify-center",
            children: v.jsxs("table", {
              className: "w-3/4 text-sm text-center table-fixed mb-4",
              children: [
                v.jsxs("thead", {
                  className: "text-slate-200 bg-gray-700",
                  children: [
                    v.jsx("th", {
                      className: "border py-1",
                      children: "Colors",
                    }),
                    v.jsx("th", {
                      className: "border py-1",
                      children: "Categories",
                    }),
                  ],
                }),
                v.jsxs("tbody", {
                  children: [
                    v.jsxs("tr", {
                      className: "text-sm",
                      style: { backgroundColor: "#1E90FF" },
                      children: [
                        v.jsx("td", { className: "border ", children: "Blue" }),
                        v.jsx("td", {
                          className: "border ",
                          children: "Geography",
                        }),
                      ],
                    }),
                    v.jsxs("tr", {
                      className: "text-sm",
                      style: { backgroundColor: "#FF1493" },
                      children: [
                        v.jsx("td", { className: "border ", children: "Pink" }),
                        v.jsx("td", {
                          className: "border ",
                          children: "Entertainment",
                        }),
                      ],
                    }),
                    v.jsxs("tr", {
                      className: "text-sm",
                      style: { backgroundColor: "#e8e800" },
                      children: [
                        v.jsx("td", {
                          className: "border ",
                          children: "Yellow",
                        }),
                        v.jsx("td", {
                          className: "border ",
                          children: "History",
                        }),
                      ],
                    }),
                    v.jsxs("tr", {
                      className: "text-sm",
                      style: { backgroundColor: "#FFA500" },
                      children: [
                        v.jsx("td", {
                          className: "border ",
                          children: "Orange",
                        }),
                        v.jsx("td", {
                          className: "border ",
                          children: "Sports & Leisure",
                        }),
                      ],
                    }),
                    v.jsxs("tr", {
                      className: "text-sm",
                      style: { backgroundColor: "#32CD32" },
                      children: [
                        v.jsx("td", {
                          className: "border ",
                          children: "Green",
                        }),
                        v.jsx("td", {
                          className: "border ",
                          children: "Science & Nature",
                        }),
                      ],
                    }),
                    v.jsxs("tr", {
                      className: "text-sm",
                      style: { backgroundColor: "#800080" },
                      children: [
                        v.jsx("td", {
                          className: "border ",
                          children: "Purple",
                        }),
                        v.jsx("td", {
                          className: "border ",
                          children: "Art & Literature",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
          v.jsxs("p", {
            className: "mb-4 text-sm",
            children: [
              'When answering questions, players can use the chat to communicate with each other. Other players not answering the question will be able to see the answer of the current question. If the other players believe the current player has answered the question correctly through the chat, any on of the other players can click on the "Correct" button.',
              v.jsx("br", {}),
              v.jsx("br", {}),
              "Whenever a player lands on a wedge space (or category headquarter) and answers the question correctly, the player will be awarded a wedge of that color. The player can only win a wedge of a color if he/she does not already have that color wedge. The status of the wedges collected by each player can be seen on the right side of the game board.",
              v.jsx("br", {}),
              v.jsx("br", {}),
              "When a player lands on the central hub, the player will be able to select the category of their question.",
            ],
          }),
          v.jsx("h4", {
            className: "text-lg font-semibold",
            children: "Winning the Game",
          }),
          v.jsxs("p", {
            className: "mb-4 text-sm",
            children: [
              "Once you've collected all six wedges, make your way to the central hub and try to answer the game-winning question. You must land on the central hub by the exact count.",
              v.jsx("br", {}),
              v.jsx("br", {}),
              "When you do land on the central hub, any of the other players will be able to choose the category of the game-winning question. If you answer the question correctly, you win the game! If you answer incorrectly, you'll have to wait for your next turn, leave the central hub, and make your way back to the hub again for another try.",
            ],
          }),
        ],
      }),
      v.jsx(ct, {
        className: "absolute top-6 right-9 h-7 w-7",
        variant: "ghost",
        onClick: () => t(!1),
        children: v.jsx(Xk, { size: 8 }),
      }),
    ],
  });
}
function Yb() {
  const {
      gameState: t,
      movePlayer: r,
      openColorPicker: o,
      setOpenColorPicker: i,
      getCHQuestion: l,
      getFinalQuestionCategory: c,
      categoryPickerPrompt: u,
      setCategoryPickerPrompt: f,
      openGameRules: m,
      setOpenGameRules: h,
    } = rr(),
    [y, x] = g.useState([]),
    E = JSON.parse(localStorage.getItem("player-data")),
    b = g.useMemo(() => Array.from({ length: 6 }), []),
    C = g.useMemo(() => Array.from({ length: 36 }), []),
    w = g.useMemo(() => Array.from({ length: 6 }), []);
  g.useEffect(() => {
    t.isStarted && t.reachableSpaces && x(t.reachableSpaces);
  }, [t]);
  const S = (k) => {
      if (y.includes(k)) {
        if (t.players[t.currentTurnIndex].name !== E.name)
          return alert("It's not your turn to move.");
        k === "CH"
          ? t.players[t.currentTurnIndex].wedges.length !== 6
            ? (i(!0),
              f(
                "On the Central Hub, you get to choose the category of your question."
              ))
            : c(t.gameId)
          : r(t.gameId, k);
      } else return alert("You can't move there.");
    },
    R = (k) => {
      const P = Qb[k].color;
      return P ? `${nt[P].hex}` : "";
    };
  return v.jsxs("div", {
    className: "w-full h-full flex justify-center items-center relative",
    children: [
      v.jsxs("svg", {
        viewBox: "-25 -25 350 350",
        className: "w-full h-full max-w-full max-h-full",
        children: [
          C.map((k, P) => {
            const D = Math.floor(P / 6),
              B = P % 6,
              W = (D * 60 + B * 7.5 + 7.5) * (Math.PI / 180),
              z = (D * 60 + (B + 1) * 7.5 + 7.5) * (Math.PI / 180),
              Y = xm(150, 150, 140, 170, W, z),
              Q = Sm(Y),
              se = (P + 2) % 3 === 0,
              ge = (D * 60 + B * 7.5 + 11.25) * (Math.PI / 180),
              X = y.includes(`O${P}`);
            return se
              ? v.jsxs(
                  jt.Fragment,
                  {
                    children: [
                      v.jsxs(
                        "g",
                        {
                          id: `O${P}`,
                          onClick: () => S(`O${P}`),
                          onMouseEnter: (q) => {
                            X &&
                              ((q.target.style.stroke = "darkblyue"),
                              (q.target.style.strokeWidth = 4));
                          },
                          onMouseLeave: (q) => {
                            X &&
                              ((q.target.style.stroke = "blue"),
                              (q.target.style.strokeWidth = 2));
                          },
                          children: [
                            v.jsx("polygon", {
                              points: Y,
                              fill: "lightgray",
                              stroke: X ? "#002f58" : "white",
                              strokeWidth: X ? 2 : 1,
                              style: {
                                opacity: t.isStarted ? (X ? 1 : 0.3) : 1,
                                cursor: X ? "pointer" : "default",
                              },
                            }),
                            v.jsxs("text", {
                              x: Q.x,
                              y: Q.y,
                              fontSize: "7",
                              textAnchor: "middle",
                              alignmentBaseline: "middle",
                              fill: "black",
                              transform: `rotate(${
                                ge * (180 / Math.PI) - 90
                              }, ${Q.x}, ${Q.y})`,
                              children: [
                                v.jsx("tspan", {
                                  x: Q.x,
                                  dy: "-0.1em",
                                  children: "Roll",
                                }),
                                v.jsx("tspan", {
                                  x: Q.x,
                                  dy: "1em",
                                  children: "Again",
                                }),
                              ],
                            }),
                          ],
                        },
                        P
                      ),
                      t.players
                        .filter((q) => q.position === `O${P}`)
                        .map((q) => {
                          const ae =
                            t.players[t.currentTurnIndex].name === q.name;
                          return v.jsxs(
                            "g",
                            {
                              className: t.isStarted
                                ? ae
                                  ? ""
                                  : "opacity-50"
                                : "",
                              children: [
                                v.jsx("circle", {
                                  cx: Q.x,
                                  cy: Q.y,
                                  r: 8,
                                  fill: nt[q.color].hex,
                                  stroke: "black",
                                  strokeWidth: 1.5,
                                }),
                                v.jsx("text", {
                                  x: Q.x,
                                  y: Q.y,
                                  fontSize: "10",
                                  fontWeight: 600,
                                  textAnchor: "middle",
                                  alignmentBaseline: "middle",
                                  fill: "white",
                                  dy: "0.1em",
                                  children: q.name.charAt(0).toUpperCase(),
                                }),
                              ],
                            },
                            q.name
                          );
                        }),
                    ],
                  },
                  `O${P}`
                )
              : v.jsxs(
                  jt.Fragment,
                  {
                    children: [
                      v.jsx(
                        "g",
                        {
                          id: `O${P}`,
                          onClick: () => S(`O${P}`),
                          onMouseEnter: (q) => {
                            X &&
                              ((q.target.style.stroke = "#002f58"),
                              (q.target.style.strokeWidth = 4));
                          },
                          onMouseLeave: (q) => {
                            X &&
                              ((q.target.style.stroke = "#002f58"),
                              (q.target.style.strokeWidth = 2));
                          },
                          children: v.jsx("polygon", {
                            points: Y,
                            stroke: X ? "#002f58" : "white",
                            strokeWidth: X ? 2 : 1,
                            fill: R(`O${P}`),
                            style: {
                              opacity: t.isStarted ? (X ? 1 : 0.3) : 1,
                              cursor: X && t.isStarted ? "pointer" : "default",
                            },
                          }),
                        },
                        P
                      ),
                      t.players
                        .filter((q) => q.position === `O${P}`)
                        .map((q, ae, ye) => {
                          const oe = (ae - (ye.length - 1) / 2) * 10,
                            ne = (D * 60 * Math.PI) / 180,
                            _ = oe * Math.cos(ne),
                            J = oe * Math.sin(ne),
                            Z = t.players[t.currentTurnIndex].name === q.name;
                          return v.jsxs(
                            "g",
                            {
                              className: t.isStarted
                                ? Z
                                  ? ""
                                  : "opacity-50"
                                : "",
                              children: [
                                v.jsx("circle", {
                                  cx: Q.x - _,
                                  cy: Q.y - J,
                                  r: 8,
                                  fill: nt[q.color].hex,
                                  stroke: "black",
                                  strokeWidth: 1.5,
                                }),
                                v.jsx("text", {
                                  x: Q.x - _,
                                  y: Q.y - J,
                                  fontSize: "10",
                                  fontWeight: 600,
                                  textAnchor: "middle",
                                  alignmentBaseline: "middle",
                                  fill: "white",
                                  dy: "0.1em",
                                  children: q.name.charAt(0).toUpperCase(),
                                }),
                              ],
                            },
                            q.name
                          );
                        }),
                    ],
                  },
                  `O${P}`
                );
          }),
          w.map((k, P) => {
            const D = (P * 60 - 7.5) * (Math.PI / 180),
              B = (P * 60 + 7.5) * (Math.PI / 180),
              W = xm(150, 150, 140, 170, D, B),
              z = Sm(W),
              Y = y.includes(`W${P}`);
            return v.jsxs(
              jt.Fragment,
              {
                children: [
                  v.jsx(
                    "g",
                    {
                      id: `W${P}`,
                      onClick: () => S(`W${P}`),
                      onMouseEnter: (Q) => {
                        Y &&
                          ((Q.target.style.stroke = "#002f58"),
                          (Q.target.style.strokeWidth = 4));
                      },
                      onMouseLeave: (Q) => {
                        Y &&
                          ((Q.target.style.stroke = "#002f58"),
                          (Q.target.style.strokeWidth = 2));
                      },
                      children: v.jsx("polygon", {
                        points: W,
                        stroke: Y ? "#002f58" : "white",
                        strokeWidth: Y ? 2 : 1,
                        fill: R(`W${P}`),
                        style: {
                          opacity: t.isStarted ? (Y ? 1 : 0.3) : 1,
                          cursor: Y ? "pointer" : "default",
                        },
                      }),
                    },
                    P
                  ),
                  t.players
                    .filter((Q) => Q.position === `W${P}`)
                    .map((Q, se, ge) => {
                      const X = (se - (ge.length - 1) / 2) * 10,
                        q = ((P * 60 + 90) * Math.PI) / 180,
                        ae = X * Math.cos(q),
                        ye = X * Math.sin(q),
                        oe = t.players[t.currentTurnIndex].name === Q.name;
                      return v.jsxs(
                        "g",
                        {
                          className: t.isStarted
                            ? oe
                              ? ""
                              : "opacity-50"
                            : "",
                          children: [
                            v.jsx("circle", {
                              cx: z.x - ae,
                              cy: z.y - ye,
                              r: 8,
                              fill: nt[Q.color].hex,
                              stroke: "black",
                              strokeWidth: 1.5,
                            }),
                            v.jsx("text", {
                              x: z.x - ae,
                              y: z.y - ye,
                              fontSize: "10",
                              fontWeight: 600,
                              textAnchor: "middle",
                              alignmentBaseline: "middle",
                              fill: "white",
                              children: Q.name.charAt(0).toUpperCase(),
                            }),
                          ],
                        },
                        Q.name
                      );
                    }),
                ],
              },
              `W${P}`
            );
          }),
          (() => {
            const k = y.includes("CH");
            return v.jsxs("g", {
              id: "CH",
              onClick: () => S("CH"),
              onMouseEnter: (P) => {
                k &&
                  ((P.target.style.stroke = "lightblue"),
                  (P.target.style.strokeWidth = 4));
              },
              onMouseLeave: (P) => {
                k &&
                  ((P.target.style.stroke = "lightblue"),
                  (P.target.style.strokeWidth = 2));
              },
              children: [
                v.jsx("polygon", {
                  points: Hb(150, 150, 35),
                  fill: "#002f58",
                  stroke: k ? "blue" : "white",
                  strokeWidth: k ? 2 : 1,
                  style: {
                    opacity: t.isStarted ? (k ? 1 : 0.3) : 1,
                    cursor: k ? "pointer" : "default",
                  },
                }),
                v.jsx("image", {
                  href: "/src/assets/trivial-central-logo.png",
                  height: 50,
                  width: 50,
                  x: 125.2,
                  y: 125,
                }),
              ],
            });
          })(),
          t.players
            .filter((k) => k.position === "CH")
            .map((k, P, D) => {
              const B = (P / D.length) * 2 * Math.PI,
                W = 8 * Math.cos(B),
                z = 8 * Math.sin(B),
                Y = t.players[t.currentTurnIndex].name === k.name;
              return v.jsxs(
                "g",
                {
                  className: t.isStarted ? (Y ? "" : "opacity-50") : "",
                  children: [
                    v.jsx("circle", {
                      cx: 150 + W,
                      cy: 150 + z,
                      r: 8,
                      fill: nt[k.color].hex,
                      stroke: "black",
                      strokeWidth: 1.5,
                    }),
                    v.jsx("text", {
                      x: 150 + W,
                      y: 150 + z,
                      fontSize: "10",
                      fontWeight: 600,
                      textAnchor: "middle",
                      alignmentBaseline: "middle",
                      fill: "white",
                      dy: "0.1em",
                      children: k.name.charAt(0).toUpperCase(),
                    }),
                  ],
                },
                k.name
              );
            }),
          b.map((k, P) => {
            const D = (360 / b.length) * P,
              B = 150 + 41.55 * Math.cos((D * Math.PI) / 180),
              W = 150 + 41.55 * Math.sin((D * Math.PI) / 180);
            return Array.from({ length: 5 }).map((Y, Q) => {
              const q = 21.5 * Q * Math.cos((D * Math.PI) / 180),
                ae = (20 + 1.5) * Q * Math.sin((D * Math.PI) / 180),
                ye = B + q - 20 / 2,
                oe = W + ae - 34 / 2,
                ne = y.includes(`S${P}-${Q}`);
              return v.jsxs(
                jt.Fragment,
                {
                  children: [
                    v.jsx(
                      "g",
                      {
                        id: `S${P}-${Q}`,
                        onClick: () => S(`S${P}-${Q}`),
                        onMouseEnter: (_) => {
                          ne &&
                            ((_.target.style.stroke = "#002f58"),
                            (_.target.style.strokeWidth = 4));
                        },
                        onMouseLeave: (_) => {
                          ne &&
                            ((_.target.style.stroke = "#002f58"),
                            (_.target.style.strokeWidth = 2));
                        },
                        children: v.jsx("rect", {
                          x: B + q - 20 / 2,
                          y: W + ae - 34 / 2,
                          width: 20,
                          height: 34,
                          transform: `rotate(${D}, ${B + q}, ${W + ae})`,
                          stroke: ne ? "#002f58" : "white",
                          strokeWidth: ne ? 2 : 0.5,
                          fill: R(`S${P}-${Q}`),
                          style: {
                            opacity: t.isStarted ? (ne ? 1 : 0.3) : 1,
                            cursor: ne ? "pointer" : "default",
                          },
                        }),
                      },
                      `${P}-${Q}`
                    ),
                    t.players
                      .filter((_) => _.position === `S${P}-${Q}`)
                      .map((_, J, Z) => {
                        const T = (J - (Z.length - 1) / 2) * 10,
                          U = ((D + 90) * Math.PI) / 180,
                          he = T * Math.cos(U),
                          pe = T * Math.sin(U),
                          Ae = t.players[t.currentTurnIndex].name === _.name;
                        return v.jsxs(
                          "g",
                          {
                            className: t.isStarted
                              ? Ae
                                ? ""
                                : "opacity-50"
                              : "",
                            children: [
                              v.jsx("circle", {
                                cx: ye + 20 / 2 + he,
                                cy: oe + 34 / 2 + pe,
                                r: 8,
                                fill: nt[_.color].hex,
                                stroke: "black",
                                strokeWidth: 1.5,
                              }),
                              v.jsx("text", {
                                x: ye + 20 / 2 + he,
                                y: oe + 34 / 2 + pe,
                                fontSize: "10",
                                fontWeight: 600,
                                textAnchor: "middle",
                                alignmentBaseline: "middle",
                                fill: "white",
                                children: _.name.charAt(0).toUpperCase(),
                              }),
                            ],
                          },
                          _.name
                        );
                      }),
                  ],
                },
                `S${P}-${Q}`
              );
            });
          }),
        ],
      }),
      o &&
        v.jsxs(ki, {
          className: "absolute w-3/4 flex flex-col justify-center items-center",
          children: [
            v.jsxs(Rl, {
              children: [
                v.jsx(Ri, { children: "Choose a Category" }),
                v.jsx(bl, { children: u }),
              ],
            }),
            v.jsx(bi, {
              className: "",
              children: Object.keys(nt).map((k) =>
                v.jsx(
                  ct,
                  {
                    className: `m-2 bg-[${nt[k].hex}]`,
                    onClick: () => {
                      i(!1), l(t.gameId, k);
                    },
                    children: v.jsx("p", {
                      className: "text-center text-sm",
                      children: nt[k].category,
                    }),
                  },
                  k
                )
              ),
            }),
          ],
        }),
      t.currentQuestion &&
        v.jsx("div", {
          className: "w-full flex absolute justify-center items-center",
          children: v.jsx(Gb, {}),
        }),
      v.jsx("div", {
        className: "absolute bottom-0 left-0 m-2",
        children: v.jsx(ct, {
          variant: "ghost",
          size: "icon",
          onClick: () => h(!0),
          children: v.jsx(Jk, { size: 32 }),
        }),
      }),
      m &&
        v.jsx("div", {
          className:
            "absolute w-3/4 h-3/4 p-3 flex justify-center items-center bg-lime-100 z-1000 border-4 border-black rounded-2xl",
          children: v.jsx(Vb, {}),
        }),
    ],
  });
}
var $b = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "span",
    "svg",
    "ul",
  ],
  Rr = $b.reduce((t, r) => {
    const o = g.forwardRef((i, l) => {
      const { asChild: c, ...u } = i,
        f = c ? xt : r;
      return (
        typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
        v.jsx(f, { ...u, ref: l })
      );
    });
    return (o.displayName = `Primitive.${r}`), { ...t, [r]: o };
  }, {});
function Zb(t, r) {
  t && po.flushSync(() => t.dispatchEvent(r));
}
var Jb = "DismissableLayer",
  Lu = "dismissableLayer.update",
  Xb = "dismissableLayer.pointerDownOutside",
  qb = "dismissableLayer.focusOutside",
  Em,
  Nv = g.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  Pv = g.forwardRef((t, r) => {
    const {
        disableOutsidePointerEvents: o = !1,
        onEscapeKeyDown: i,
        onPointerDownOutside: l,
        onFocusOutside: c,
        onInteractOutside: u,
        onDismiss: f,
        ...m
      } = t,
      h = g.useContext(Nv),
      [y, x] = g.useState(null),
      E =
        (y == null ? void 0 : y.ownerDocument) ??
        (globalThis == null ? void 0 : globalThis.document),
      [, b] = g.useState({}),
      C = Me(r, (z) => x(z)),
      w = Array.from(h.layers),
      [S] = [...h.layersWithOutsidePointerEventsDisabled].slice(-1),
      R = w.indexOf(S),
      k = y ? w.indexOf(y) : -1,
      P = h.layersWithOutsidePointerEventsDisabled.size > 0,
      D = k >= R,
      B = tN((z) => {
        const Y = z.target,
          Q = [...h.branches].some((se) => se.contains(Y));
        !D ||
          Q ||
          (l == null || l(z),
          u == null || u(z),
          z.defaultPrevented || f == null || f());
      }, E),
      W = nN((z) => {
        const Y = z.target;
        [...h.branches].some((se) => se.contains(Y)) ||
          (c == null || c(z),
          u == null || u(z),
          z.defaultPrevented || f == null || f());
      }, E);
    return (
      Rg((z) => {
        k === h.layers.size - 1 &&
          (i == null || i(z),
          !z.defaultPrevented && f && (z.preventDefault(), f()));
      }, E),
      g.useEffect(() => {
        if (y)
          return (
            o &&
              (h.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((Em = E.body.style.pointerEvents),
                (E.body.style.pointerEvents = "none")),
              h.layersWithOutsidePointerEventsDisabled.add(y)),
            h.layers.add(y),
            Cm(),
            () => {
              o &&
                h.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (E.body.style.pointerEvents = Em);
            }
          );
      }, [y, E, o, h]),
      g.useEffect(
        () => () => {
          y &&
            (h.layers.delete(y),
            h.layersWithOutsidePointerEventsDisabled.delete(y),
            Cm());
        },
        [y, h]
      ),
      g.useEffect(() => {
        const z = () => b({});
        return (
          document.addEventListener(Lu, z),
          () => document.removeEventListener(Lu, z)
        );
      }, []),
      v.jsx(Rr.div, {
        ...m,
        ref: C,
        style: {
          pointerEvents: P ? (D ? "auto" : "none") : void 0,
          ...t.style,
        },
        onFocusCapture: Ie(t.onFocusCapture, W.onFocusCapture),
        onBlurCapture: Ie(t.onBlurCapture, W.onBlurCapture),
        onPointerDownCapture: Ie(
          t.onPointerDownCapture,
          B.onPointerDownCapture
        ),
      })
    );
  });
Pv.displayName = Jb;
var Kb = "DismissableLayerBranch",
  eN = g.forwardRef((t, r) => {
    const o = g.useContext(Nv),
      i = g.useRef(null),
      l = Me(r, i);
    return (
      g.useEffect(() => {
        const c = i.current;
        if (c)
          return (
            o.branches.add(c),
            () => {
              o.branches.delete(c);
            }
          );
      }, [o.branches]),
      v.jsx(Rr.div, { ...t, ref: l })
    );
  });
eN.displayName = Kb;
function tN(t, r = globalThis == null ? void 0 : globalThis.document) {
  const o = $t(t),
    i = g.useRef(!1),
    l = g.useRef(() => {});
  return (
    g.useEffect(() => {
      const c = (f) => {
          if (f.target && !i.current) {
            let m = function () {
              Ov(Xb, o, h, { discrete: !0 });
            };
            const h = { originalEvent: f };
            f.pointerType === "touch"
              ? (r.removeEventListener("click", l.current),
                (l.current = m),
                r.addEventListener("click", l.current, { once: !0 }))
              : m();
          } else r.removeEventListener("click", l.current);
          i.current = !1;
        },
        u = window.setTimeout(() => {
          r.addEventListener("pointerdown", c);
        }, 0);
      return () => {
        window.clearTimeout(u),
          r.removeEventListener("pointerdown", c),
          r.removeEventListener("click", l.current);
      };
    }, [r, o]),
    { onPointerDownCapture: () => (i.current = !0) }
  );
}
function nN(t, r = globalThis == null ? void 0 : globalThis.document) {
  const o = $t(t),
    i = g.useRef(!1);
  return (
    g.useEffect(() => {
      const l = (c) => {
        c.target &&
          !i.current &&
          Ov(qb, o, { originalEvent: c }, { discrete: !1 });
      };
      return (
        r.addEventListener("focusin", l),
        () => r.removeEventListener("focusin", l)
      );
    }, [r, o]),
    {
      onFocusCapture: () => (i.current = !0),
      onBlurCapture: () => (i.current = !1),
    }
  );
}
function Cm() {
  const t = new CustomEvent(Lu);
  document.dispatchEvent(t);
}
function Ov(t, r, o, { discrete: i }) {
  const l = o.originalEvent.target,
    c = new CustomEvent(t, { bubbles: !1, cancelable: !0, detail: o });
  r && l.addEventListener(t, r, { once: !0 }),
    i ? Zb(l, c) : l.dispatchEvent(c);
}
function rN(t, r) {
  return g.useReducer((o, i) => r[o][i] ?? o, t);
}
var Wl = (t) => {
  const { present: r, children: o } = t,
    i = oN(r),
    l =
      typeof o == "function" ? o({ present: i.isPresent }) : g.Children.only(o),
    c = Me(i.ref, iN(l));
  return typeof o == "function" || i.isPresent
    ? g.cloneElement(l, { ref: c })
    : null;
};
Wl.displayName = "Presence";
function oN(t) {
  const [r, o] = g.useState(),
    i = g.useRef({}),
    l = g.useRef(t),
    c = g.useRef("none"),
    u = t ? "mounted" : "unmounted",
    [f, m] = rN(u, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    g.useEffect(() => {
      const h = qs(i.current);
      c.current = f === "mounted" ? h : "none";
    }, [f]),
    ft(() => {
      const h = i.current,
        y = l.current;
      if (y !== t) {
        const E = c.current,
          b = qs(h);
        t
          ? m("MOUNT")
          : b === "none" || (h == null ? void 0 : h.display) === "none"
          ? m("UNMOUNT")
          : m(y && E !== b ? "ANIMATION_OUT" : "UNMOUNT"),
          (l.current = t);
      }
    }, [t, m]),
    ft(() => {
      if (r) {
        let h;
        const y = r.ownerDocument.defaultView ?? window,
          x = (b) => {
            const w = qs(i.current).includes(b.animationName);
            if (b.target === r && w && (m("ANIMATION_END"), !l.current)) {
              const S = r.style.animationFillMode;
              (r.style.animationFillMode = "forwards"),
                (h = y.setTimeout(() => {
                  r.style.animationFillMode === "forwards" &&
                    (r.style.animationFillMode = S);
                }));
            }
          },
          E = (b) => {
            b.target === r && (c.current = qs(i.current));
          };
        return (
          r.addEventListener("animationstart", E),
          r.addEventListener("animationcancel", x),
          r.addEventListener("animationend", x),
          () => {
            y.clearTimeout(h),
              r.removeEventListener("animationstart", E),
              r.removeEventListener("animationcancel", x),
              r.removeEventListener("animationend", x);
          }
        );
      } else m("ANIMATION_END");
    }, [r, m]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(f),
      ref: g.useCallback((h) => {
        h && (i.current = getComputedStyle(h)), o(h);
      }, []),
    }
  );
}
function qs(t) {
  return (t == null ? void 0 : t.animationName) || "none";
}
function iN(t) {
  var i, l;
  let r =
      (i = Object.getOwnPropertyDescriptor(t.props, "ref")) == null
        ? void 0
        : i.get,
    o = r && "isReactWarning" in r && r.isReactWarning;
  return o
    ? t.ref
    : ((r =
        (l = Object.getOwnPropertyDescriptor(t, "ref")) == null
          ? void 0
          : l.get),
      (o = r && "isReactWarning" in r && r.isReactWarning),
      o ? t.props.ref : t.props.ref || t.ref);
}
var Iv = oy(),
  lu = function () {},
  Ql = g.forwardRef(function (t, r) {
    var o = g.useRef(null),
      i = g.useState({
        onScrollCapture: lu,
        onWheelCapture: lu,
        onTouchMoveCapture: lu,
      }),
      l = i[0],
      c = i[1],
      u = t.forwardProps,
      f = t.children,
      m = t.className,
      h = t.removeScrollBar,
      y = t.enabled,
      x = t.shards,
      E = t.sideCar,
      b = t.noIsolation,
      C = t.inert,
      w = t.allowPinchZoom,
      S = t.as,
      R = S === void 0 ? "div" : S,
      k = t.gapMode,
      P = ud(t, [
        "forwardProps",
        "children",
        "className",
        "removeScrollBar",
        "enabled",
        "shards",
        "sideCar",
        "noIsolation",
        "inert",
        "allowPinchZoom",
        "as",
        "gapMode",
      ]),
      D = E,
      B = ry([o, r]),
      W = lt(lt({}, P), l);
    return g.createElement(
      g.Fragment,
      null,
      y &&
        g.createElement(D, {
          sideCar: Iv,
          removeScrollBar: h,
          shards: x,
          noIsolation: b,
          inert: C,
          setCallbacks: c,
          allowPinchZoom: !!w,
          lockRef: o,
          gapMode: k,
        }),
      u
        ? g.cloneElement(g.Children.only(f), lt(lt({}, W), { ref: B }))
        : g.createElement(R, lt({}, W, { className: m, ref: B }), f)
    );
  });
Ql.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
Ql.classNames = { fullWidth: gi, zeroRight: mi };
var _u = !1;
if (typeof window < "u")
  try {
    var Ks = Object.defineProperty({}, "passive", {
      get: function () {
        return (_u = !0), !0;
      },
    });
    window.addEventListener("test", Ks, Ks),
      window.removeEventListener("test", Ks, Ks);
  } catch {
    _u = !1;
  }
var to = _u ? { passive: !1 } : !1,
  sN = function (t) {
    return t.tagName === "TEXTAREA";
  },
  Tv = function (t, r) {
    if (!(t instanceof Element)) return !1;
    var o = window.getComputedStyle(t);
    return (
      o[r] !== "hidden" &&
      !(o.overflowY === o.overflowX && !sN(t) && o[r] === "visible")
    );
  },
  lN = function (t) {
    return Tv(t, "overflowY");
  },
  aN = function (t) {
    return Tv(t, "overflowX");
  },
  km = function (t, r) {
    var o = r.ownerDocument,
      i = r;
    do {
      typeof ShadowRoot < "u" && i instanceof ShadowRoot && (i = i.host);
      var l = Dv(t, i);
      if (l) {
        var c = Bv(t, i),
          u = c[1],
          f = c[2];
        if (u > f) return !0;
      }
      i = i.parentNode;
    } while (i && i !== o.body);
    return !1;
  },
  cN = function (t) {
    var r = t.scrollTop,
      o = t.scrollHeight,
      i = t.clientHeight;
    return [r, o, i];
  },
  uN = function (t) {
    var r = t.scrollLeft,
      o = t.scrollWidth,
      i = t.clientWidth;
    return [r, o, i];
  },
  Dv = function (t, r) {
    return t === "v" ? lN(r) : aN(r);
  },
  Bv = function (t, r) {
    return t === "v" ? cN(r) : uN(r);
  },
  dN = function (t, r) {
    return t === "h" && r === "rtl" ? -1 : 1;
  },
  fN = function (t, r, o, i, l) {
    var c = dN(t, window.getComputedStyle(r).direction),
      u = c * i,
      f = o.target,
      m = r.contains(f),
      h = !1,
      y = u > 0,
      x = 0,
      E = 0;
    do {
      var b = Bv(t, f),
        C = b[0],
        w = b[1],
        S = b[2],
        R = w - S - c * C;
      (C || R) && Dv(t, f) && ((x += R), (E += C)),
        f instanceof ShadowRoot ? (f = f.host) : (f = f.parentNode);
    } while ((!m && f !== document.body) || (m && (r.contains(f) || r === f)));
    return (
      ((y && (Math.abs(x) < 1 || !l)) || (!y && (Math.abs(E) < 1 || !l))) &&
        (h = !0),
      h
    );
  },
  el = function (t) {
    return "changedTouches" in t
      ? [t.changedTouches[0].clientX, t.changedTouches[0].clientY]
      : [0, 0];
  },
  Rm = function (t) {
    return [t.deltaX, t.deltaY];
  },
  bm = function (t) {
    return t && "current" in t ? t.current : t;
  },
  pN = function (t, r) {
    return t[0] === r[0] && t[1] === r[1];
  },
  hN = function (t) {
    return `
  .block-interactivity-`
      .concat(
        t,
        ` {pointer-events: none;}
  .allow-interactivity-`
      )
      .concat(
        t,
        ` {pointer-events: all;}
`
      );
  },
  mN = 0,
  no = [];
function gN(t) {
  var r = g.useRef([]),
    o = g.useRef([0, 0]),
    i = g.useRef(),
    l = g.useState(mN++)[0],
    c = g.useState(dd)[0],
    u = g.useRef(t);
  g.useEffect(
    function () {
      u.current = t;
    },
    [t]
  ),
    g.useEffect(
      function () {
        if (t.inert) {
          document.body.classList.add("block-interactivity-".concat(l));
          var w = ny([t.lockRef.current], (t.shards || []).map(bm), !0).filter(
            Boolean
          );
          return (
            w.forEach(function (S) {
              return S.classList.add("allow-interactivity-".concat(l));
            }),
            function () {
              document.body.classList.remove("block-interactivity-".concat(l)),
                w.forEach(function (S) {
                  return S.classList.remove("allow-interactivity-".concat(l));
                });
            }
          );
        }
      },
      [t.inert, t.lockRef.current, t.shards]
    );
  var f = g.useCallback(function (w, S) {
      if (
        ("touches" in w && w.touches.length === 2) ||
        (w.type === "wheel" && w.ctrlKey)
      )
        return !u.current.allowPinchZoom;
      var R = el(w),
        k = o.current,
        P = "deltaX" in w ? w.deltaX : k[0] - R[0],
        D = "deltaY" in w ? w.deltaY : k[1] - R[1],
        B,
        W = w.target,
        z = Math.abs(P) > Math.abs(D) ? "h" : "v";
      if ("touches" in w && z === "h" && W.type === "range") return !1;
      var Y = km(z, W);
      if (!Y) return !0;
      if ((Y ? (B = z) : ((B = z === "v" ? "h" : "v"), (Y = km(z, W))), !Y))
        return !1;
      if (
        (!i.current && "changedTouches" in w && (P || D) && (i.current = B), !B)
      )
        return !0;
      var Q = i.current || B;
      return fN(Q, S, w, Q === "h" ? P : D, !0);
    }, []),
    m = g.useCallback(function (w) {
      var S = w;
      if (!(!no.length || no[no.length - 1] !== c)) {
        var R = "deltaY" in S ? Rm(S) : el(S),
          k = r.current.filter(function (B) {
            return (
              B.name === S.type &&
              (B.target === S.target || S.target === B.shadowParent) &&
              pN(B.delta, R)
            );
          })[0];
        if (k && k.should) {
          S.cancelable && S.preventDefault();
          return;
        }
        if (!k) {
          var P = (u.current.shards || [])
              .map(bm)
              .filter(Boolean)
              .filter(function (B) {
                return B.contains(S.target);
              }),
            D = P.length > 0 ? f(S, P[0]) : !u.current.noIsolation;
          D && S.cancelable && S.preventDefault();
        }
      }
    }, []),
    h = g.useCallback(function (w, S, R, k) {
      var P = { name: w, delta: S, target: R, should: k, shadowParent: yN(R) };
      r.current.push(P),
        setTimeout(function () {
          r.current = r.current.filter(function (D) {
            return D !== P;
          });
        }, 1);
    }, []),
    y = g.useCallback(function (w) {
      (o.current = el(w)), (i.current = void 0);
    }, []),
    x = g.useCallback(function (w) {
      h(w.type, Rm(w), w.target, f(w, t.lockRef.current));
    }, []),
    E = g.useCallback(function (w) {
      h(w.type, el(w), w.target, f(w, t.lockRef.current));
    }, []);
  g.useEffect(function () {
    return (
      no.push(c),
      t.setCallbacks({
        onScrollCapture: x,
        onWheelCapture: x,
        onTouchMoveCapture: E,
      }),
      document.addEventListener("wheel", m, to),
      document.addEventListener("touchmove", m, to),
      document.addEventListener("touchstart", y, to),
      function () {
        (no = no.filter(function (w) {
          return w !== c;
        })),
          document.removeEventListener("wheel", m, to),
          document.removeEventListener("touchmove", m, to),
          document.removeEventListener("touchstart", y, to);
      }
    );
  }, []);
  var b = t.removeScrollBar,
    C = t.inert;
  return g.createElement(
    g.Fragment,
    null,
    C ? g.createElement(c, { styles: hN(l) }) : null,
    b ? g.createElement(ay, { gapMode: t.gapMode }) : null
  );
}
function yN(t) {
  for (var r = null; t !== null; )
    t instanceof ShadowRoot && ((r = t.host), (t = t.host)), (t = t.parentNode);
  return r;
}
const vN = sy(Iv, gN);
var jv = g.forwardRef(function (t, r) {
  return g.createElement(Ql, lt({}, t, { ref: r, sideCar: vN }));
});
jv.classNames = Ql.classNames;
var yd = "Dialog",
  [Mv, Lv] = Ni(yd),
  [AN, qt] = Mv(yd),
  _v = (t) => {
    const {
        __scopeDialog: r,
        children: o,
        open: i,
        defaultOpen: l,
        onOpenChange: c,
        modal: u = !0,
      } = t,
      f = g.useRef(null),
      m = g.useRef(null),
      [h = !1, y] = Cu({ prop: i, defaultProp: l, onChange: c });
    return v.jsx(AN, {
      scope: r,
      triggerRef: f,
      contentRef: m,
      contentId: io(),
      titleId: io(),
      descriptionId: io(),
      open: h,
      onOpenChange: y,
      onOpenToggle: g.useCallback(() => y((x) => !x), [y]),
      modal: u,
      children: o,
    });
  };
_v.displayName = yd;
var Fv = "DialogTrigger",
  zv = g.forwardRef((t, r) => {
    const { __scopeDialog: o, ...i } = t,
      l = qt(Fv, o),
      c = Me(r, l.triggerRef);
    return v.jsx(Rr.button, {
      type: "button",
      "aria-haspopup": "dialog",
      "aria-expanded": l.open,
      "aria-controls": l.contentId,
      "data-state": wd(l.open),
      ...i,
      ref: c,
      onClick: Ie(t.onClick, l.onOpenToggle),
    });
  });
zv.displayName = Fv;
var vd = "DialogPortal",
  [wN, Uv] = Mv(vd, { forceMount: void 0 }),
  Wv = (t) => {
    const { __scopeDialog: r, forceMount: o, children: i, container: l } = t,
      c = qt(vd, r);
    return v.jsx(wN, {
      scope: r,
      forceMount: o,
      children: g.Children.map(i, (u) =>
        v.jsx(Wl, {
          present: o || c.open,
          children: v.jsx(cd, { asChild: !0, container: l, children: u }),
        })
      ),
    });
  };
Wv.displayName = vd;
var xl = "DialogOverlay",
  Qv = g.forwardRef((t, r) => {
    const o = Uv(xl, t.__scopeDialog),
      { forceMount: i = o.forceMount, ...l } = t,
      c = qt(xl, t.__scopeDialog);
    return c.modal
      ? v.jsx(Wl, {
          present: i || c.open,
          children: v.jsx(xN, { ...l, ref: r }),
        })
      : null;
  });
Qv.displayName = xl;
var xN = g.forwardRef((t, r) => {
    const { __scopeDialog: o, ...i } = t,
      l = qt(xl, o);
    return v.jsx(jv, {
      as: xt,
      allowPinchZoom: !0,
      shards: [l.contentRef],
      children: v.jsx(Rr.div, {
        "data-state": wd(l.open),
        ...i,
        ref: r,
        style: { pointerEvents: "auto", ...i.style },
      }),
    });
  }),
  Cr = "DialogContent",
  Hv = g.forwardRef((t, r) => {
    const o = Uv(Cr, t.__scopeDialog),
      { forceMount: i = o.forceMount, ...l } = t,
      c = qt(Cr, t.__scopeDialog);
    return v.jsx(Wl, {
      present: i || c.open,
      children: c.modal
        ? v.jsx(SN, { ...l, ref: r })
        : v.jsx(EN, { ...l, ref: r }),
    });
  });
Hv.displayName = Cr;
var SN = g.forwardRef((t, r) => {
    const o = qt(Cr, t.__scopeDialog),
      i = g.useRef(null),
      l = Me(r, o.contentRef, i);
    return (
      g.useEffect(() => {
        const c = i.current;
        if (c) return ty(c);
      }, []),
      v.jsx(Gv, {
        ...t,
        ref: l,
        trapFocus: o.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: Ie(t.onCloseAutoFocus, (c) => {
          var u;
          c.preventDefault(), (u = o.triggerRef.current) == null || u.focus();
        }),
        onPointerDownOutside: Ie(t.onPointerDownOutside, (c) => {
          const u = c.detail.originalEvent,
            f = u.button === 0 && u.ctrlKey === !0;
          (u.button === 2 || f) && c.preventDefault();
        }),
        onFocusOutside: Ie(t.onFocusOutside, (c) => c.preventDefault()),
      })
    );
  }),
  EN = g.forwardRef((t, r) => {
    const o = qt(Cr, t.__scopeDialog),
      i = g.useRef(!1),
      l = g.useRef(!1);
    return v.jsx(Gv, {
      ...t,
      ref: r,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      onCloseAutoFocus: (c) => {
        var u, f;
        (u = t.onCloseAutoFocus) == null || u.call(t, c),
          c.defaultPrevented ||
            (i.current || (f = o.triggerRef.current) == null || f.focus(),
            c.preventDefault()),
          (i.current = !1),
          (l.current = !1);
      },
      onInteractOutside: (c) => {
        var m, h;
        (m = t.onInteractOutside) == null || m.call(t, c),
          c.defaultPrevented ||
            ((i.current = !0),
            c.detail.originalEvent.type === "pointerdown" && (l.current = !0));
        const u = c.target;
        ((h = o.triggerRef.current) == null ? void 0 : h.contains(u)) &&
          c.preventDefault(),
          c.detail.originalEvent.type === "focusin" &&
            l.current &&
            c.preventDefault();
      },
    });
  }),
  Gv = g.forwardRef((t, r) => {
    const {
        __scopeDialog: o,
        trapFocus: i,
        onOpenAutoFocus: l,
        onCloseAutoFocus: c,
        ...u
      } = t,
      f = qt(Cr, o),
      m = g.useRef(null),
      h = Me(r, m);
    return (
      Og(),
      v.jsxs(v.Fragment, {
        children: [
          v.jsx(Ku, {
            asChild: !0,
            loop: !0,
            trapped: i,
            onMountAutoFocus: l,
            onUnmountAutoFocus: c,
            children: v.jsx(Pv, {
              role: "dialog",
              id: f.contentId,
              "aria-describedby": f.descriptionId,
              "aria-labelledby": f.titleId,
              "data-state": wd(f.open),
              ...u,
              ref: h,
              onDismiss: () => f.onOpenChange(!1),
            }),
          }),
          v.jsxs(v.Fragment, {
            children: [
              v.jsx(kN, { titleId: f.titleId }),
              v.jsx(bN, { contentRef: m, descriptionId: f.descriptionId }),
            ],
          }),
        ],
      })
    );
  }),
  Ad = "DialogTitle",
  Vv = g.forwardRef((t, r) => {
    const { __scopeDialog: o, ...i } = t,
      l = qt(Ad, o);
    return v.jsx(Rr.h2, { id: l.titleId, ...i, ref: r });
  });
Vv.displayName = Ad;
var Yv = "DialogDescription",
  $v = g.forwardRef((t, r) => {
    const { __scopeDialog: o, ...i } = t,
      l = qt(Yv, o);
    return v.jsx(Rr.p, { id: l.descriptionId, ...i, ref: r });
  });
$v.displayName = Yv;
var Zv = "DialogClose",
  Jv = g.forwardRef((t, r) => {
    const { __scopeDialog: o, ...i } = t,
      l = qt(Zv, o);
    return v.jsx(Rr.button, {
      type: "button",
      ...i,
      ref: r,
      onClick: Ie(t.onClick, () => l.onOpenChange(!1)),
    });
  });
Jv.displayName = Zv;
function wd(t) {
  return t ? "open" : "closed";
}
var Xv = "DialogTitleWarning",
  [CN, qv] = VS(Xv, { contentName: Cr, titleName: Ad, docsSlug: "dialog" }),
  kN = ({ titleId: t }) => {
    const r = qv(Xv),
      o = `\`${r.contentName}\` requires a \`${r.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${r.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${r.docsSlug}`;
    return (
      g.useEffect(() => {
        t && (document.getElementById(t) || console.error(o));
      }, [o, t]),
      null
    );
  },
  RN = "DialogDescriptionWarning",
  bN = ({ contentRef: t, descriptionId: r }) => {
    const i = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${
      qv(RN).contentName
    }}.`;
    return (
      g.useEffect(() => {
        var c;
        const l =
          (c = t.current) == null ? void 0 : c.getAttribute("aria-describedby");
        r && l && (document.getElementById(r) || console.warn(i));
      }, [i, t, r]),
      null
    );
  },
  NN = _v,
  PN = zv,
  ON = Wv,
  IN = Qv,
  TN = Hv,
  DN = Vv,
  BN = $v,
  Kv = Jv,
  eA = "AlertDialog",
  [jN, tP] = Ni(eA, [Lv]),
  Rn = Lv(),
  tA = (t) => {
    const { __scopeAlertDialog: r, ...o } = t,
      i = Rn(r);
    return v.jsx(NN, { ...i, ...o, modal: !0 });
  };
tA.displayName = eA;
var MN = "AlertDialogTrigger",
  nA = g.forwardRef((t, r) => {
    const { __scopeAlertDialog: o, ...i } = t,
      l = Rn(o);
    return v.jsx(PN, { ...l, ...i, ref: r });
  });
nA.displayName = MN;
var LN = "AlertDialogPortal",
  rA = (t) => {
    const { __scopeAlertDialog: r, ...o } = t,
      i = Rn(r);
    return v.jsx(ON, { ...i, ...o });
  };
rA.displayName = LN;
var _N = "AlertDialogOverlay",
  oA = g.forwardRef((t, r) => {
    const { __scopeAlertDialog: o, ...i } = t,
      l = Rn(o);
    return v.jsx(IN, { ...l, ...i, ref: r });
  });
oA.displayName = _N;
var ao = "AlertDialogContent",
  [FN, zN] = jN(ao),
  iA = g.forwardRef((t, r) => {
    const { __scopeAlertDialog: o, children: i, ...l } = t,
      c = Rn(o),
      u = g.useRef(null),
      f = Me(r, u),
      m = g.useRef(null);
    return v.jsx(CN, {
      contentName: ao,
      titleName: sA,
      docsSlug: "alert-dialog",
      children: v.jsx(FN, {
        scope: o,
        cancelRef: m,
        children: v.jsxs(TN, {
          role: "alertdialog",
          ...c,
          ...l,
          ref: f,
          onOpenAutoFocus: Ie(l.onOpenAutoFocus, (h) => {
            var y;
            h.preventDefault(),
              (y = m.current) == null || y.focus({ preventScroll: !0 });
          }),
          onPointerDownOutside: (h) => h.preventDefault(),
          onInteractOutside: (h) => h.preventDefault(),
          children: [v.jsx(dg, { children: i }), v.jsx(WN, { contentRef: u })],
        }),
      }),
    });
  });
iA.displayName = ao;
var sA = "AlertDialogTitle",
  lA = g.forwardRef((t, r) => {
    const { __scopeAlertDialog: o, ...i } = t,
      l = Rn(o);
    return v.jsx(DN, { ...l, ...i, ref: r });
  });
lA.displayName = sA;
var aA = "AlertDialogDescription",
  cA = g.forwardRef((t, r) => {
    const { __scopeAlertDialog: o, ...i } = t,
      l = Rn(o);
    return v.jsx(BN, { ...l, ...i, ref: r });
  });
cA.displayName = aA;
var UN = "AlertDialogAction",
  uA = g.forwardRef((t, r) => {
    const { __scopeAlertDialog: o, ...i } = t,
      l = Rn(o);
    return v.jsx(Kv, { ...l, ...i, ref: r });
  });
uA.displayName = UN;
var dA = "AlertDialogCancel",
  fA = g.forwardRef((t, r) => {
    const { __scopeAlertDialog: o, ...i } = t,
      { cancelRef: l } = zN(dA, o),
      c = Rn(o),
      u = Me(r, l);
    return v.jsx(Kv, { ...c, ...i, ref: u });
  });
fA.displayName = dA;
var WN = ({ contentRef: t }) => {
    const r = `\`${ao}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${ao}\` by passing a \`${aA}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${ao}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;
    return (
      g.useEffect(() => {
        var i;
        document.getElementById(
          (i = t.current) == null ? void 0 : i.getAttribute("aria-describedby")
        ) || console.warn(r);
      }, [r, t]),
      null
    );
  },
  QN = tA,
  HN = nA,
  GN = rA,
  pA = oA,
  hA = iA,
  mA = uA,
  gA = fA,
  yA = lA,
  vA = cA;
const VN = QN,
  YN = HN,
  $N = GN,
  AA = g.forwardRef(({ className: t, ...r }, o) =>
    v.jsx(pA, {
      className: Le(
        "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        t
      ),
      ...r,
      ref: o,
    })
  );
AA.displayName = pA.displayName;
const wA = g.forwardRef(({ className: t, ...r }, o) =>
  v.jsxs($N, {
    children: [
      v.jsx(AA, {}),
      v.jsx(hA, {
        ref: o,
        className: Le(
          "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
          t
        ),
        ...r,
      }),
    ],
  })
);
wA.displayName = hA.displayName;
const xA = ({ className: t, ...r }) =>
  v.jsx("div", {
    className: Le("flex flex-col space-y-2 text-center sm:text-left", t),
    ...r,
  });
xA.displayName = "AlertDialogHeader";
const SA = ({ className: t, ...r }) =>
  v.jsx("div", {
    className: Le(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      t
    ),
    ...r,
  });
SA.displayName = "AlertDialogFooter";
const EA = g.forwardRef(({ className: t, ...r }, o) =>
  v.jsx(yA, { ref: o, className: Le("text-lg font-semibold", t), ...r })
);
EA.displayName = yA.displayName;
const CA = g.forwardRef(({ className: t, ...r }, o) =>
  v.jsx(vA, { ref: o, className: Le("text-sm text-muted-foreground", t), ...r })
);
CA.displayName = vA.displayName;
const kA = g.forwardRef(({ className: t, ...r }, o) =>
  v.jsx(mA, { ref: o, className: Le(qu(), t), ...r })
);
kA.displayName = mA.displayName;
const RA = g.forwardRef(({ className: t, ...r }, o) =>
  v.jsx(gA, {
    ref: o,
    className: Le(qu({ variant: "outline" }), "mt-2 sm:mt-0", t),
    ...r,
  })
);
RA.displayName = gA.displayName;
function bA({ playerData: t }) {
  const { color: r, name: o, wedges: i } = t,
    l = [0, 60, 120, 180, 240, 300];
  return v.jsxs("div", {
    className: "flex flex-col items-center justify-center",
    children: [
      v.jsx("p", { className: `text-center text-${r} font-bold`, children: o }),
      v.jsxs("svg", {
        viewBox: "0 0 100 100",
        preserveAspectRatio: "xMidYMid meet",
        className: "w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16",
        children: [
          l.map((c, u) =>
            v.jsx(
              "path",
              {
                d: `M50,50 L${50 + 45 * Math.cos((c * Math.PI) / 180)},${
                  50 + 45 * Math.sin((c * Math.PI) / 180)
                } A45,45 0 0,1 ${
                  50 + 45 * Math.cos(((c + 60) * Math.PI) / 180)
                },${50 + 45 * Math.sin(((c + 60) * Math.PI) / 180)} Z`,
                fill: i.includes(Object.keys(nt)[u])
                  ? nt[Object.keys(nt)[u]].hex
                  : "lightgray",
                strokeWidth: "2",
              },
              u
            )
          ),
          v.jsx("circle", {
            cx: "50",
            cy: "50",
            r: "45",
            fill: "none",
            stroke: nt[r].hex,
            strokeWidth: "7",
          }),
          v.jsx("circle", {
            cx: "50",
            cy: "50",
            r: "41",
            fill: "none",
            stroke: "white",
            strokeWidth: "2",
          }),
        ],
      }),
    ],
  });
}
bA.propTypes = { playerData: Yt.object.isRequired };
function ZN() {
  const t = Ei(),
    { gameState: r, leaveGame: o } = rr(),
    i = r.players,
    l = () => {
      const c = JSON.parse(localStorage.getItem("player-data"));
      c && (o(c), localStorage.removeItem("player-data"), t("/"));
    };
  return v.jsx("div", {
    className:
      "flex flex-col h-full p-1 bg-gray-700 text-white rounded-lg relative",
    children: v.jsxs("div", {
      className:
        "w-full h-full flex flex-col rounded-lg border overflow-hidden",
      children: [
        v.jsxs("div", {
          className: "flex w-full mb-1 justify-between items-center p-2",
          children: [
            v.jsx("h2", {
              className: "text-center font-bold text-xl mt-1",
              children: "Scoreboard",
            }),
            v.jsx("div", {
              className: "",
              children: v.jsxs(VN, {
                children: [
                  v.jsx(YN, {
                    asChild: !0,
                    children: v.jsx(ct, {
                      variant: "destructive",
                      className: " text-sm h-7 rounded-lg ",
                      children: "Leave Game",
                    }),
                  }),
                  v.jsxs(wA, {
                    children: [
                      v.jsxs(xA, {
                        children: [
                          v.jsx(EA, { children: "Are you absolutely sure?" }),
                          v.jsx(CA, {
                            children:
                              "This action cannot be undone. This will permanently delete your account and remove your data from our servers.",
                          }),
                        ],
                      }),
                      v.jsxs(SA, {
                        children: [
                          v.jsx(RA, { children: "Cancel" }),
                          v.jsx(kA, { onClick: l, children: "Leave Game" }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        }),
        v.jsx("ul", {
          className:
            "w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 overflow-y-auto justify-items-center items-center",
          children:
            i &&
            i.map((c) =>
              v.jsx("li", { children: v.jsx(bA, { playerData: c }) }, c._id)
            ),
        }),
      ],
    }),
  });
}
function JN() {
  const { gameState: t, startGame: r } = rr(),
    o = t == null ? void 0 : t.gameId,
    i = () => {
      if (t.players.length < 2) {
        alert("You need at least 2 players to start the game.");
        return;
      }
      r(t);
    };
  return !t || !o
    ? v.jsx("div", { children: "Loading..." })
    : v.jsxs("div", {
        className: "flex h-full",
        children: [
          v.jsx("div", { className: "w-2/3 h-full", children: v.jsx(Yb, {}) }),
          v.jsxs("div", {
            className: "w-1/3 h-full flex flex-col",
            children: [
              v.jsx("div", { className: "h-[30%]", children: v.jsx(ZN, {}) }),
              v.jsx("div", {
                className: "h-[25%]",
                children:
                  t.isStarted === !0
                    ? v.jsx(Wb, {})
                    : v.jsx("div", {
                        className:
                          "bg-gray-700 text-white rounded-lg h-full w-full p-1",
                        children: v.jsx("div", {
                          className:
                            "w-full h-full flex flex-col rounded-lg border justify-center items-center",
                          children: v.jsx(ct, {
                            className: "bg-emerald-600",
                            onClick: i,
                            children: "Start Game",
                          }),
                        }),
                      }),
              }),
              v.jsx("div", { className: "h-[45%]", children: v.jsx(jb, {}) }),
            ],
          }),
        ],
      });
}
function XN() {
  return v.jsx("header", {
    className: "header-container",
    children: v.jsx("a", {
      className: "header-link",
      children: v.jsx("h2", {
        className: "header-text",
        children: "Trivial Pursuit Online",
      }),
    }),
  });
}
function qN() {
  return v.jsxs(v.Fragment, {
    children: [
      v.jsx(XN, {}),
      v.jsx("main", {
        children: v.jsx(Yx, {
          children: v.jsx(cg, {
            children: v.jsxs(Ex, {
              children: [
                v.jsx(cu, { path: "/", element: v.jsx(Db, {}) }),
                v.jsx(cu, {
                  path: "/:gameId",
                  element: v.jsx(sg, {
                    children: v.jsx(bv, { children: v.jsx(JN, {}) }),
                  }),
                }),
              ],
            }),
          }),
        }),
      }),
    ],
  });
}
D0.createRoot(document.getElementById("root")).render(
  v.jsx(g.StrictMode, { children: v.jsx(qN, {}) })
);
