interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <section className="mx-auto w-full max-w-7xl">{children}</section>;
};

export default Container;
