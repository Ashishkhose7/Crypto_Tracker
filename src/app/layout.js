import "../../public/globals.css";
import 'bootstrap/dist/css/bootstrap.css';
import CommonLayout from "../Components/Common-Layout";


export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="https://www.svgrepo.com/show/331318/bittrex.svg"
        />

        <title>KRYPTo</title>
        <script
          src="https://kit.fontawesome.com/97268ea5ce.js"
          
        ></script>
      </head>
      <body>
        <CommonLayout>{children}</CommonLayout>
      </body>
    </html>
  );
}
