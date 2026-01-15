import { LoginButton, SignupButton, UserMenu, useAutherr } from "autherr";
import { decodeJwt } from "./decodeJwt";

export default function App() {
  const data=useAutherr();

  const { isAuthenticated,getAccessToken } = data;
  const accessToken=getAccessToken();
  console.dir(data);

  const decodedPayload = accessToken
    ? decodeJwt(accessToken)
    : null;

  return (
    <div
      style={{
        padding: 40,
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont",
      }}
    >
      <h1>Autherr Dummy Client</h1>

      {/* Auth Controls */}
      <div style={{ display: "flex", gap: 12, alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", gap: 12 }}>
          <LoginButton />
          <SignupButton />
        </div>
        <UserMenu />
      </div>

      <hr style={{ margin: "24px 0" }} />

      {/* Token Display */}
      {isAuthenticated ? (
        <>
          <h3>Decoded Access Token Payload</h3>
          <pre
            style={{
              background: "#0b0b0b",
              color: "#00ff88",
              padding: 16,
              borderRadius: 8,
              overflowX: "auto",
            }}
          >
            {JSON.stringify(decodedPayload, null, 2)}
          </pre>
        </>
      ) : (
        <p>Not signed in</p>
      )}
    </div>
  );
}
