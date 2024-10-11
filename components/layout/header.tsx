import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <Button asChild variant={"ghost"}>
        <Link href="/">HOME</Link>
      </Button>
      <Button asChild variant={"ghost"}>
        <Link href="/mypage">mypage</Link>
      </Button>
    </header>
  );
}