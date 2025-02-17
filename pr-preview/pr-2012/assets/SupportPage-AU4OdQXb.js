import { f3 as M, gp as q, f_ as C, gq as w, eS as T, e7 as l, ea as s, eb as t, eP as E, ep as d, gr as u, gs as B, gt as F, ev as O, ej as R, f1 as k, __tla as __tla_0 } from "./index-UiBHnyIz.js";
import { c as A, a as i, u as I, __tla as __tla_1 } from "./index.esm-BhnmBROZ.js";
let G;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_1;
    } catch {
    }
  })()
]).then(async () => {
  let D, P, m, V, L, $, K;
  D = (r) => r;
  P = async (r) => {
    const o = await M({
      method: "POST",
      url: `${q}/mailing/send_mail`,
      data: r,
      headers: {
        "Content-Type": "application/json"
      }
    });
    return D(o.data);
  };
  m = [
    {
      label: "Support",
      value: "Support"
    },
    {
      label: "Integrate",
      value: "Integrate"
    },
    {
      label: "Others",
      value: "Others"
    }
  ];
  V = () => C({
    mutationKey: [
      w
    ],
    mutationFn: P
  });
  L = A({
    name: i().required("Name is required"),
    email: i().email("Invalid E-mail address").required("E-mail is required"),
    topic: i().required("Topic is required"),
    subject: i().required("Subject is required"),
    message: i().required("Message is required")
  });
  $ = () => {
    T.pageview("/support");
    const [r, o] = l.useState(0), [p, n] = l.useState(""), [g, c] = l.useState(true), { mutate: h, isPending: a } = V(), e = I({
      initialValues: {
        name: "",
        email: "",
        topic: m[0].value,
        subject: "",
        message: ""
      },
      validationSchema: g ? L : null,
      onSubmit: () => {
        b();
      }
    }), b = () => {
      c(false);
      const { name: x, email: S, topic: j, subject: f, message: v } = e.values;
      h({
        from: S,
        name: x,
        topic: j,
        sub: f,
        msg: v
      }, {
        onSuccess: () => {
          o(1), n("Message Sent! We will be in Touch :)"), e.resetForm(), c(true);
        },
        onError: (y) => {
          console.log("Error sending code", y), n("Error in sending mail, please try again later..."), o(2);
        }
      });
    };
    return s.jsx(t, {
      display: "flex",
      flexDirection: "column",
      width: "-webkit-fill-available",
      overflow: "scroll",
      height: "100%",
      padding: "spacing-sm spacing-none",
      children: s.jsxs(t, {
        display: "flex",
        flexDirection: "column",
        gap: "spacing-md",
        alignSelf: "center",
        width: "800px",
        children: [
          r > 0 && s.jsx(E, {
            variant: r === 1 ? "success" : "error",
            heading: r === 1 ? "Success" : "Error",
            description: p,
            onClose: () => {
              o(0), n("");
            }
          }),
          s.jsx("form", {
            onSubmit: e.handleSubmit,
            children: s.jsxs(t, {
              display: "flex",
              flexDirection: "column",
              gap: "spacing-md",
              padding: "spacing-md spacing-lg",
              borderRadius: "radius-md",
              backgroundColor: "surface-primary",
              children: [
                s.jsxs(t, {
                  alignSelf: "center",
                  children: [
                    s.jsx(d, {
                      variant: "h2-semibold",
                      color: "text-primary",
                      children: "Support"
                    }),
                    s.jsx(d, {
                      variant: "bm-regular",
                      color: "text-secondary",
                      children: "Let\u2019s get in touch!"
                    })
                  ]
                }),
                s.jsxs(t, {
                  display: "flex",
                  flexDirection: "row",
                  gap: "spacing-xs",
                  children: [
                    s.jsx(t, {
                      width: "219px",
                      children: s.jsx(u, {
                        required: true,
                        label: "Name",
                        value: e.values.name,
                        onChange: e.handleChange("name"),
                        error: e.touched.name && !!e.errors.name,
                        errorMessage: e.touched.name ? e.errors.name : "",
                        disabled: a
                      })
                    }),
                    s.jsx(u, {
                      required: true,
                      value: e.values.email,
                      onChange: e.handleChange("email"),
                      error: e.touched.email && !!e.errors.email,
                      errorMessage: e.touched.email ? e.errors.email : "",
                      label: "E-mail",
                      disabled: a
                    })
                  ]
                }),
                s.jsx(B, {
                  required: true,
                  options: m,
                  value: e.values.topic.length ? e.values.topic : "",
                  onSelect: e.handleChange("topic"),
                  error: e.touched.topic && !!e.errors.topic,
                  errorMessage: e.touched.topic ? e.errors.topic : "",
                  label: "Topic",
                  disabled: a
                }),
                s.jsx(u, {
                  required: true,
                  value: e.values.subject,
                  onChange: e.handleChange("subject"),
                  error: e.touched.subject && !!e.errors.subject,
                  errorMessage: e.touched.subject ? e.errors.subject : "",
                  label: "Subject",
                  placeholder: "I want to tell you guys a secret!",
                  disabled: a
                }),
                s.jsx(F, {
                  required: true,
                  placeholder: "This is where you will tell us that secret, or a bug or whatever is on your mind.",
                  numberOfLines: 12,
                  value: e.values.message,
                  onChange: e.handleChange("message"),
                  error: e.touched.message && !!e.errors.message,
                  errorMessage: e.touched.message ? e.errors.message : "",
                  label: "Message",
                  disabled: a
                }),
                s.jsx(O, {
                  onClick: () => e.handleSubmit(),
                  variant: "tertiary",
                  loading: a,
                  disabled: a,
                  children: a ? "Submitting..." : "Submit"
                })
              ]
            })
          })
        ]
      })
    });
  };
  G = () => s.jsx(K, {
    children: s.jsx($, {})
  });
  K = R(k)`
  flex: 1;
  flex-direction: column;
  align-self: stretch;
  justify-content: flex-start;
`;
});
export {
  __tla,
  G as default
};
