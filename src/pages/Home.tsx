import { useEffect } from "react";
import PublicChat from "../components/layout/PublicChat";
import { socket } from "../socket";

function Home() {
  useEffect(() => {
    const handleConnect = () => {
      console.log(socket.id, "user connected");
    };
    const handleConnectError = (err: Error) => {
      console.error("Connection error:", err.message);
    };

    socket.on("connect", handleConnect);
    socket.on("connect_error", handleConnectError);

    return () => {
      socket.off("connect", handleConnect);
      socket.off("connect_error", handleConnectError);
    };
  }, []);
  return (
    <>
      <PublicChat />
    </>
  );
}

export default Home;