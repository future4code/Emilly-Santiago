import React from "react";
import { ErrorImage, ErrorPageContainer } from "./styled";
import Typography from "@material-ui/core/Typography";

const ErrorPage = () => {
  return (
    <div>
      <ErrorPageContainer>
        <ErrorImage/>
        <Typography color={'primary'} variant={'h4'} align={'center'}>Error 404 - Page not found</Typography>
      </ErrorPageContainer>
    </div>
  );
};

export default ErrorPage;
