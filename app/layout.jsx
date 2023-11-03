import "@styles/globals.css"; // importing the css to our entire application
import Nav from "@components/Nav";
import Provider from "@components/Provider";

// change the metadata of our application
export const metadata = {
  title: "Promptopia",
  description: "Discover and Share AI Prompts",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient"></div>
          </div>
          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

// export layout.jsx file so other modules can use it
export default RootLayout;
