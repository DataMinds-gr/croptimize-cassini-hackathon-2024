import Head from "next/head";
import MainNav from "./MainNav";

type DefaultLayoutProps = {
  children: React.ReactNode;
};

export default function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <Head>
        <title>CrOptimize</title>
        <meta name="description" content="A suitability map to help optimize crop selection and placement to minimize wasted resources" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/fav.png" />
      </Head>
      <div className="flex">
        <MainNav />
        <main className="w-full">{children}</main>
      </div>
    </div>
  );
}
