import Head from "next/head";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaTelegram } from "react-icons/fa";
import { Button } from "@mui/material";

const StyledButton = ({ text, icon }) => (
  <Button
    style={{
      backgroundColor: "#312c55",
      color: "#fff",
      textTransform: "none",
      margin: 10,
    }}
  >
    {icon}
    <p
      style={{
        margin: 0,
        marginLeft: 10,
        marginRight: 5,
      }}
    >
      {text}
    </p>
  </Button>
);
export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Landboard</title>
        <link rel="icon" href="https://i.ibb.co/zSJh0Bg/HQ3.png" />
      </Head>

      <main>
        <img
          src="https://i.ibb.co/rw32JGz/HQ2.png"
          alt="Landboard logo"
          style={{ width: "70%", maxWidth: 1200 }}
        />
        <p className="description" style={{ fontSize: 24 }}>
          Coming soon.
        </p>
        <div>
          <a
            style={{ textDecoration: "none" }}
            href="https://twitter.com/landboard_io"
          >
            <StyledButton
              text="Twitter"
              icon={<AiOutlineTwitter style={{ fontSize: "1.2rem" }} />}
            />
          </a>
          <a
            style={{ textDecoration: "none" }}
            href="https://t.me/+abXeMctNaR0xNmY0"
          >
            <StyledButton
              text="Telegram"
              icon={<FaTelegram style={{ fontSize: "1.2rem" }} />}
            />
          </a>
        </div>
      </main>
    </div>
  );
}
