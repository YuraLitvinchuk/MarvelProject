import ErrorMessage from "../errorMessage/ErrorMessage";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <div>
      <Helmet>
        <meta name="description" content="This page is not found" />
        <title>This page is not found</title>
      </Helmet>
      <ErrorMessage />
      <p style={{ textAlign: "center", fontWeight: "bold", fontSize: "24px" }}>
        Страница не существует
      </p>
      <Link
        style={{
          display: "block",
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "24px",
        }}
        to="/"
      >
        Вернитесь на главную страницу
      </Link>
    </div>
  );
};

export default Page404;
