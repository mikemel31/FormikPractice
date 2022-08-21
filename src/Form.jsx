import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const Form = () => {
    const formik = useFormik({
        initialValues: {
          name: "",
          email: "",
          amount: 0,
          currency: "",
          text: "",
          terms: false,
        },
        validationSchema: Yup.object({
          name: Yup.string().required("Required field").min(2),
          email: Yup.string()
            .required("Required field")
            .email("Email address doesn't exist"),
          amount: Yup.number()
            .required("Required field")
            .min(5, `Minimal amount is 5`),
          currency: Yup.string().required("Required field").notOneOf([""]),
          text: Yup.string(),
          terms: Yup.boolean().required("You must accept Terms and Conditions"),
        }),
        onSubmit: (values) => console.log(JSON.stringify(values, null, 2)),
      });

  return (
    <form className="form" onSubmit={formik.handleChange}>
      <h2>Отправить пожертвование</h2>
      <label htmlFor="name">Ваше имя</label>
      <input
        id="name"
        name="name"
        type="text"
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.errors.name && formik.touched.name ? <div>{formik.errors.name}</div> : null}
      <label htmlFor="email">Ваша почта</label>
      <input
        id="email"
        name="email"
        type="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.errors.email && formik.touched.email ? <div>{formik.errors.email}</div> : null}
      <label htmlFor="currency">Валюта</label>
      <select
        id="currency"
        name="currency"
        value={formik.values.currency}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      >
        <option value="">Choose currency</option>
        <option value="USD">USD</option>
        <option value="UAH">UAH</option>
        <option value="RUB">RUB</option>
        <option value="RUB">EUR</option>
        <option value="RUB">CAD</option>
        <option value="RUB">GBR</option>
      </select>
      {formik.errors.currency && formik.touched.currency ? <div>{formik.errors.currency}</div> : null}
      <label htmlFor="amount">Количество</label>
      <input
        id="amount"
        name="amount"
        type="number"
        value={formik.values.amount}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.errors.amount && formik.touched.amount ? <div>{formik.errors.amount}</div> : null}
      <label htmlFor="text">Your message</label>
      <textarea
        id="text"
        name="text"
        value={formik.values.text}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.errors.text && formik.touched.text ? <div>{formik.errors.text}</div> : null}
      <label className="checkbox">
        <input
          name="terms"
          type="checkbox"
          value={formik.values.terms}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        Соглашаетесь с политикой конфиденциальности?
      </label>
      <button type="submit">Send</button>
      {formik.errors.terms && formik.touched.terms ? <div>{formik.errors.terms}</div> : null}
    </form>
  );
};

export default Form;