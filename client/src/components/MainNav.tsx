import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

function NavItem({ icon, text, link, alt }) {
  const router = useRouter();
  const path = router.pathname;
  const active = link === path;

  return (
    <Link href={link}>
      <div className={`py-1 px-3 flex gap-2 rounded-lg mb-4 ${active && "bg-myGray10"}`}>
        <Image src={icon} alt={alt} width={24} height={24} />
        <span>{text}</span>
      </div>
    </Link>
  );
}

function MainNav() {
  return (
    <div className="max-w-[10%] min-w-[256px] h-screen p-8 text-xl border-r-myGray10 border">
      <Image src="/icons/logo.svg" alt="CrOptimize" className="mb-8" width={150} height={100} />
      <p className="text-myGray40 py-1 px-3 mb-4">Dashboards</p>
      <div>
        <NavItem icon="/icons/map-trifold.svg" alt="Map" text="Map" link="/" />
        <NavItem icon="/icons/carrot.svg" alt="Carrot" text="Crops" link="/crops" />
        <NavItem icon="/icons/building.svg" alt="Building" text="About" link="/about" />
      </div>
    </div>
  );
}

export default MainNav;
