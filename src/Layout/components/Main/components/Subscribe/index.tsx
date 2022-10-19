import { SubscribeContainer } from "./styles";

export function Subscriber() {
  return(
    <SubscribeContainer>
      <div>
        <h2>Subscribe to our newsletter</h2>
        <span>Get our latest updates into your inbox.</span>
      </div>
      <div>
        <input type="text" placeholder="Your email address"/>
        <button>Subscribe Now</button>
      </div>
    </SubscribeContainer>
  )
}