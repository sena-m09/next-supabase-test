import { currentUser } from "@/app/data/auth";
import { redirect } from "next/navigation";

export default async function mypage() {
  const user = await currentUser();

  if(!user) {
    redirect("/login");
  }

  return (
    <>
      <h1>マイページ</h1>
    </>
  );
}