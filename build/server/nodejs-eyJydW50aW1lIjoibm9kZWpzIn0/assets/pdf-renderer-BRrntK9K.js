import { jsx, jsxs } from "react/jsx-runtime";
import { PDFViewer, Document, Page, View, Image, Text, StyleSheet } from "@react-pdf/renderer";
const PDFRenderer = ({ record }) => {
  return /* @__PURE__ */ jsx(PDFViewer, { style: styles.viewer, children: /* @__PURE__ */ jsx(Document, { children: /* @__PURE__ */ jsxs(Page, { style: styles.page, size: "A4", children: [
    /* @__PURE__ */ jsxs(View, { children: [
      /* @__PURE__ */ jsx(Image, { src: "/images/logo.png", style: { width: "100px", height: "auto" } }),
      /* @__PURE__ */ jsxs(View, { style: styles.inoviceTextNumberContainer, children: [
        /* @__PURE__ */ jsx(Text, { style: styles.inoviceText, children: `Title: ${record.title}` }),
        /* @__PURE__ */ jsx(Text, { style: styles.inoviceId, children: `Date: 2024-01-01 00:00:00` })
      ] })
    ] }),
    /* @__PURE__ */ jsx(View, { style: styles.dividerLG }),
    /* @__PURE__ */ jsxs(View, { style: styles.inoviceForFromCotnainer, children: [
      /* @__PURE__ */ jsxs(View, { style: styles.inoviceFor, children: [
        /* @__PURE__ */ jsx(Text, { style: styles.inoviceForFromTitle, children: "Inovice For:" }),
        /* @__PURE__ */ jsxs(View, { children: [
          /* @__PURE__ */ jsx(Text, { style: styles.inoviceForFromText, children: "Kshlerin, Heaney and Lehner" }),
          /* @__PURE__ */ jsx(Text, { style: styles.inoviceForFromText, children: "Margie Smith" }),
          /* @__PURE__ */ jsx(Text, { style: styles.inoviceForFromText, children: "margie@example.com" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs(View, { style: styles.inoviceFrom, children: [
        /* @__PURE__ */ jsx(Text, { style: styles.inoviceForFromTitle, children: "From:" }),
        /* @__PURE__ */ jsxs(View, { children: [
          /* @__PURE__ */ jsx(Text, { style: styles.inoviceForFromText, children: "Emard Inc" }),
          /* @__PURE__ */ jsx(Text, { style: styles.inoviceForFromText, children: "Huntington Beach" }),
          /* @__PURE__ */ jsx(Text, { style: styles.inoviceForFromText, children: "College St, 4091, United States" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(View, { style: styles.table, children: [
      /* @__PURE__ */ jsxs(View, { style: styles.tableHeader, children: [
        /* @__PURE__ */ jsx(Text, { style: [styles.tableHeaderItem, { width: "40%" }], children: "Mission" }),
        /* @__PURE__ */ jsx(Text, { style: [styles.tableHeaderItem, { width: "20%" }], children: "Day" }),
        /* @__PURE__ */ jsx(Text, { style: [styles.tableHeaderItem, { width: "20%" }], children: "Day Rate" }),
        /* @__PURE__ */ jsx(Text, { style: [styles.tableHeaderItem, { width: "20%" }], children: "Total" })
      ] }),
      [
        { mission: "transition models", day: 3, daily_rate: 209, total: 627 },
        { mission: "strategize initiatives ", day: 4, daily_rate: 253, total: 1012 },
        { mission: "incubate experiences ", day: 4, daily_rate: 254, total: 1016 }
      ].map((item, index) => {
        return /* @__PURE__ */ jsxs(View, { style: styles.tableRow, children: [
          /* @__PURE__ */ jsx(Text, { style: [styles.tableCol, { width: "40%" }], children: item.mission }),
          /* @__PURE__ */ jsx(Text, { style: [styles.tableCol, { width: "20%" }], children: item == null ? void 0 : item.day }),
          /* @__PURE__ */ jsx(Text, { style: [styles.tableCol, { width: "20%" }], children: item == null ? void 0 : item.daily_rate }),
          /* @__PURE__ */ jsx(Text, { style: [styles.tableCol, { width: "20%" }], children: (item == null ? void 0 : item.daily_rate) * (item == null ? void 0 : item.day) })
        ] }, index);
      })
    ] }),
    /* @__PURE__ */ jsxs(View, { style: styles.signatureTotalContainer, children: [
      /* @__PURE__ */ jsx(View, { style: styles.signatureContainer, children: /* @__PURE__ */ jsx(Text, { style: styles.signatureText, children: "Signature:" }) }),
      /* @__PURE__ */ jsxs(View, { style: styles.totalContainer, children: [
        /* @__PURE__ */ jsxs(Text, { style: styles.totalText, children: [
          "Total: ",
          "2,655"
        ] }),
        /* @__PURE__ */ jsxs(Text, { style: styles.totalText, children: [
          "Discount(%): ",
          "0"
        ] }),
        /* @__PURE__ */ jsxs(Text, { style: styles.totalText, children: [
          "Tax(%): ",
          "0"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(View, { style: styles.footer, children: [
      /* @__PURE__ */ jsx(Text, { style: styles.footerText, children: "Huntington Beach" }),
      /* @__PURE__ */ jsx(Text, { style: styles.footerText, children: "College St, 4091, United States" })
    ] })
  ] }) }) });
};
const styles = StyleSheet.create({
  viewer: {
    width: "100%",
    height: "80vh",
    border: "none"
  },
  page: {
    display: "flex",
    padding: "0.4in 0.4in",
    fontSize: 12,
    color: "#333",
    backgroundColor: "#fff"
  },
  inoviceTextNumberContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  inoviceText: {
    color: "#3aabf0"
  },
  inoviceId: {
    textAlign: "center"
  },
  inoviceForFromCotnainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  inoviceForFromTitle: {
    marginBottom: 12
  },
  inoviceFor: {
    flex: 1.5
  },
  inoviceFrom: {
    flex: 1
  },
  inoviceForFromText: {
    color: "#787878",
    lineHeight: 1.2
  },
  dividerLG: {
    width: "100%",
    height: 1,
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: "#e5e5e5"
  },
  table: {
    marginTop: 16
  },
  tableHeader: {
    display: "flex",
    flexDirection: "row",
    textAlign: "left"
  },
  tableHeaderItem: {
    paddingVertical: 8,
    paddingHorizontal: 4,
    border: "1px solid #000"
  },
  tableRow: {
    display: "flex",
    flexDirection: "row"
  },
  tableCol: {
    paddingVertical: 8,
    paddingHorizontal: 4,
    border: "1px solid #000"
  },
  signatureTotalContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16
  },
  signatureContainer: {},
  totalContainer: {},
  signatureText: {
    lineHeight: 1.2
  },
  totalText: {
    lineHeight: 1.2
  },
  footer: {
    borderTop: "1px solid #e5e5e5",
    paddingTop: 16,
    marginTop: "auto"
  },
  footerText: {
    color: "#787878",
    lineHeight: 1.2
  }
});
export {
  PDFRenderer as default
};
