import { Layout } from "./Layout";
import { GlobalCss } from "./styles/GlobalStyles";

export function App() {

  return (
    <div>
      <Layout />
      {GlobalCss()}
    </div>
  )
}
