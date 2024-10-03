import * as Yup from "yup";

import React from "react";
import toast from "react-hot-toast";
import Input from "../ui/Input";
import TextArea from "../ui/TextArea";
import Button from "../ui/Button";
import Spinner from "../shared/Spinner";

import { REGEXP_MESSAGE, REGEXP_NAME } from "../common/regex";
import { Formik, FormikHelpers, Form } from "formik";
import { newsStore } from "../../store/news/newsStore";
import { articleModalStore } from "../../store/modal/article/articleModalStore";
import { formatDateTime } from "../../helpers/date";
import { v4 as uuid } from "uuid";

import type { IArticle } from "../../store/news/interfaces";

interface ArticleFormProps {
  author: string;
  name: string;
  content: string;
}

const AddEditArticleForm = (): React.ReactElement => {
  const [loading, setLoading] = React.useState<boolean>(false);

  const { addArticle, updateArticle } = newsStore();
  const { article, triggerModal } = articleModalStore();

  const ArticleSchema = React.useMemo(() => Yup.object().shape({
    author: Yup
      .string()
      .required("Author Name is required field!")
      .matches(
        REGEXP_NAME,
        "Author Name is not valid!"
      ),
    name: Yup
      .string()
      .required("Name is required field!")
      .min(3, "Minimum length of 3 characters!")
      .max(50, "Maximum length of 50 characters!")
      .matches(
        REGEXP_MESSAGE,
        "Article Name is not valid!"
      ),
    content: Yup
      .string()
      .required("Article Content is required field!")
      .min(20, "Minimum length of 20 characters!")
      .max(250, "Maximum length of 250 characters!")
      .matches(
        REGEXP_MESSAGE,
        "Article Content is not valid!"
      )
  }), []);

  return (
    <Formik
      validationSchema={ArticleSchema}
      initialValues={{
        author: article ? article.author : "",
        name: article ? article.name : "",
        content: article ? article.content : ""
      }}
      onSubmit={(values: ArticleFormProps, { setSubmitting, resetForm }: FormikHelpers<ArticleFormProps>) => {
        setLoading(true);

        const articleItem: IArticle = {
          author: values.author,
          name: values.name,
          content: values.content,
          datePublish: article ? article.datePublish : formatDateTime(),
          dateEdited: article ? formatDateTime() : "",
          id: article ? article.id : uuid()
        };

        if (article) {
          updateArticle(articleItem);
        } else {
          addArticle(articleItem);
        }

        resetForm();
        setSubmitting(false);
        setLoading(false);
        triggerModal();
        toast.success("Action successfull");
      }}
    >
      {({ errors, touched, isSubmitting, values, handleChange }) => (
        <Form className="w-full flex flex-col gap-y-8">
          <div>
            <Input
              id="author"
              name="author"
              label="Author"
              placeholder="Enter your name"
              aria-label="Input"
              autoComplete="off"
              value={values.author}
              required={true}
              disabled={isSubmitting || loading}
              onChange={handleChange}
            />

            {
              errors.author && touched.author
                ? <small className="text-xs text-pinky">{errors.author}</small>
                : null
            }
          </div>

          <div>
            <Input
              id="name"
              name="name"
              label="Article Name"
              placeholder="Enter article name"
              aria-label="Input"
              autoComplete="off"
              value={values.name}
              required={true}
              disabled={isSubmitting || loading}
              onChange={handleChange}
            />

            {
              errors.name && touched.name
                ? <small className="text-xs text-pinky">{errors.name}</small>
                : null
            }
          </div>

          <div>
            <TextArea
              id="content"
              name="content"
              label="Article Content"
              placeholder="Type the article content"
              aria-label="Textarea"
              autoComplete="off"
              rows={6}
              value={values.content}
              required={true}
              disabled={isSubmitting || loading}
              onChange={handleChange}
            />

            {
              errors.content && touched.content
                ? <small className="text-xs text-pinky">{errors.content}</small>
                : null
            }
          </div>

          {loading ? (
            <div className="w-full flex justify-center items-center">
              <Spinner />
            </div>
          ) : (
            <Button
              type="submit"
              about="Submit form button"
              aria-label="Button to submit contact form"
              disabled={isSubmitting || loading}
            >
              {article ? "update article" : "add new article"}
            </Button>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default AddEditArticleForm;
