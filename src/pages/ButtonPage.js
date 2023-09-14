import Button from "../components/Button";
import { GoBellFill, GoCloud, GoDatabase } from "react-icons/go";

function ButtonPage() {
  return (
    <section>
      <div>
        <Button>Click me!</Button>
      </div>
      <div>
        <Button primary rounded className="mb-5">
          <GoBellFill />
          Click me!
        </Button>
      </div>
      <div>
        <Button secondary outline>
          Buy Now!
        </Button>
      </div>
      <div>
        <Button success>
          <GoCloud />
          See Deal!
        </Button>
      </div>
      <div>
        <Button warning>
          <GoDatabase />
          Hide Ads!
        </Button>
      </div>
      <div>
        <Button danger rounded outline>
          Checkout!
        </Button>
      </div>
    </section>
  );
}

export default ButtonPage;
