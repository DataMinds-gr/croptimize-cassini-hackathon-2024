import Link from "next/link";

function NotFOund() {
  return (
    <div className="flex h-full justify-center">
      <div className="m-auto">
        <p className="mb-4">Hmm 🤔, we couldn&apos;t find that page.</p>
        <div className="flex justify-center">
          <Link href="/">
            <button className="px-4 py-2 bg-myGray10 rounded-lg">Go Back Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFOund;
