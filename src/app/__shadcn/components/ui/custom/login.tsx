import { doSocialLogin } from "src/app/__actions";
import { Button } from "ui/button";
import { Github } from "lucide-react";

export async function LogIn() {
  return (
    <div>
      <form action={doSocialLogin}>
        <Button type="submit" name="action" value="github" variant={"link"}>
          <Github /> Login with Github
        </Button>
      </form>
    </div>
  );
}
