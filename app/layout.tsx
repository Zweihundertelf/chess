import "./global.scss";

interface RootLayoutInterface {
  children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutInterface) => {
  return (
    <html>
      <head />
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
