import { signIn } from "@/actions/auth";
import { Button } from "@/components/ui/button";
import { currentUser } from "../data/auth";
import { redirect } from "next/navigation";

export default async function Login() {
  const user = await currentUser();

  if(user) {
    redirect('/mypage');
  }

  return (
    <>
      <h1>LOGIN</h1>

      {user && <p>{JSON.stringify(user)}</p>}

      <form action={signIn}>
        <Button type="submit">ログイン</Button>
      </form> 
      
    </>
  );
}