import { NextPageContext } from 'next';
import NextErrorComponent, { ErrorProps } from 'next/error';

const CustomErrorComponent = (props: ErrorProps) => {
  return <NextErrorComponent statusCode={props.statusCode} />;
};

CustomErrorComponent.getInitialProps = async (contextData: NextPageContext) => {
  return NextErrorComponent.getInitialProps(contextData);
};

export default CustomErrorComponent;
